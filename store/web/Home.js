import { defineStore, acceptHMRUpdate } from "pinia";
import FrontendApi from "../apis/web/Frontend";
import { useCartStore } from "~/store/web/cart";

export const useHomeStore = defineStore("homeStore", () => {

  let cartStore = useCartStore()

  let menus = ref(useCookie('menus').value || []);
  async function getTypewiseCategoryList(){
    try {

      FrontendApi.getTypewiseCategoryList().then(response => {
        if(response.data.success){
          menus.value = response.data.data || [] 
          useCookie('menus').value = menus.value
          
        }
      })
      
    } catch (error) {
      
    }
  }

  let searchedProducts = ref([])
  async function searchProduct(search = null){
    try {

      FrontendApi.searchProduct(search).then(response => {
        if(response.data.success){
          searchedProducts.value = response.data.data || [] 
          
        }
      })
      
    } catch (error) {
      
    }
  }


  let paginateData = ref(useCookie('web_paginateData') || {})
  let products = ref(useCookie('web_products') || [])
  let queryParams = ref({
    page: 1,
    per_page: 12
  })
  let payload = reactive({
    search: '',
    category_slug: null,
    category_ids: [],
    brand_ids: [],
    // size_ids: [],
    gender_ids: [],
    // min_unit_price: null,
    // max_unit_price: null,
    price_range: {
      min: 0,
      max: 0,
    }
  })

  function resetPayload(){
    payload.search = ''
    payload.category_slug = null
    payload.category_ids = []
    payload.brand_ids = []
    payload.size_ids = []
    payload.gender_ids = []
    payload.price_range = {
      min: 0,
      max: 0,
    }
    delete payload.sort
  }

  async function getProducts({page}={}){
    try {
      let query = H.clone(queryParams.value)
      if(page){
        query.page = page
      }
      let _payload = H.clone(payload)
      if(_payload.price_range.max){
        _payload.min_unit_price = _payload.price_range.min
        _payload.max_unit_price = _payload.price_range.max 
      }

      let response = await FrontendApi.getProducts(_payload, query) 
      if(response.data.success){
        paginateData.value = response.data.data || {}
        products.value = response.data.data?.data || []
        if(query.page == 1){
          useCookie('web_paginateData').value = paginateData.value
          useCookie('web_products').value = products.value
        }
      } 
      
    } catch (error) {
      
    }
  }


  function showingCountText(){ 
      if(!paginateData.value?.total) return `Showing 0 of 0 results`

      return `Showing ${paginateData.value?.total} products`
  }

  let product = ref({})
  let popular_products = ref([])
  let related_products = ref([])
  async function getProductDetails(slug){ 
    try { 
      let response = await FrontendApi.getProductDetails(slug) 
      if(response.data.success){
        product.value = response.data.data?.product || {} 
        popular_products.value = response.data.data?.popular_products || []
        related_products.value = response.data.data?.related_products || []

        // with sizes
        product.value.sizes = product.value.sizes.filter(size => parseFloat(size.pivot.unit_price) > 0)
        product.value.sizes = product.value.sizes.filter(size => size.cart_quantity = 1)
        if(product.value.sizes?.length) {
          // product.value.sizes[0].selected = true
          let index = product.value.sizes.findIndex(size => size.pivot.unit_price === product.value.min_unit_price)
          if(index > -1){
            product.value.sizes[index].selected = true
          } else {
            product.value.sizes[0].selected = true
          } 
        }

        // with colors
        if(product.value.colors?.length) product.value.colors[0].selected = true 
      } 
      
    } catch (error) {
      
    }
  }

  let additionalData = reactive({
    brands: [],
    delivery_types: [],
    genders: [],
    min_price: 0,
    max_price: 100, 
  })
  async function getAdditionalData(){ 
    try { 
      let response = await FrontendApi.getAdditionalData() 
      if(response.data.success){
        let data = response.data.data || {} 
        if(typeof data == 'object'){
          Object.keys(data).forEach(key => {
            let value = data[key]
            if(key === 'min_price'){
              value = 1 || parseInt(value) 
            }
            if(key === 'max_price'){
              value = parseInt(value) || 50
            }
            additionalData[key] = value
          })
        }
      } 
      
    } catch (error) {
      
    }
  }



  /**
   * Some computed property
   */

  let quantityGetSet = computed({
    get(){
      try {
        if(!product.value?.sizes?.length) return 0
        return product.value?.sizes.filter(size => size?.selected)?.[0]?.cart_quantity || 0
      } catch (error) {
        console.log({'errorerrorerror': error });
      }
    },
    set(value){
      if(!product.value?.sizes?.length) return
      product.value?.sizes.forEach(size => {
        if(size.selected){
          size.cart_quantity += (value)
          if(size.cart_quantity < 1){
            size.cart_quantity = 1
          }
        }
      })
    }
  })

  /**
   * { 
          "pivot": {
              "product_id": 1,
              "size_id": 1,
              "unit_price": "12.00",
              "quantity": 33434,
              "discounted_unit_price": "12.00"
          },
          "cart_quantity": 1,
          "selected": true
      }
   */
  let get_price = computed(() => {
    if(!product.value?.sizes?.length) {
      return 0
    }
    else {
      let item = product.value?.sizes.filter(size => size?.selected)?.[0]
      if(item){
        let { cart_quantity, pivot: { unit_price } } = item
        // return ( Number(cart_quantity) * Number(unit_price) )
        return (Number(unit_price))
      }
    }
  })
  let get_discounted_price = computed(() => {
    if(!product.value?.sizes?.length) {
      return 0
    }
    else {
      let item = product.value?.sizes.filter(size => size?.selected)?.[0]
      if(item){
        let { cart_quantity, pivot: { discounted_unit_price } } = item
        // return ( Number(cart_quantity) * Number(discounted_unit_price) )
        return (Number(discounted_unit_price))
      }
    }
  })


  async function addToCartNow(event=null, slug=null) {
    if(slug){
      product.value = {}
      await getProductDetails(slug)
    } 

    if(!quantityGetSet.value){
        Toaster.error('Please select product size')
        return
    }

    let imgElement 

    if(!event){
      imgElement = document.querySelector('.carousel-item.active img'); 
    } else {
      let target = event.target
      let parentElement = target?.closest('.teeprint-product-image')
      imgElement = parentElement.querySelector('img')   
    }
   
    cartAnimation({ element: imgElement }, () => { 

      if(!H.localStorage('cart').value){
          H.localStorage('cart').value = []
      }

      let cart = H.localStorage('cart').value

      let __product = H.clone(product.value)
      __product.sizes = __product.sizes.filter(size => size.selected)
      __product.colors = __product.colors.filter(color => color.selected)
      cart.push(__product)

      
      useNuxtApp().$emit('cartItemAdded', true);

      cartStore.cart = cart 
      
      H.localStorage('cart').value = cart
      // reset product
      product.value.sizes.forEach((size, i) => {
          if(i === 0){
              size.selected = true
              size.cart_quantity = 1
          } else {
              size.selected = false
              size.cart_quantity = 1
          }
      })
  }); 
}



    
  return { 
    menus, 
    getTypewiseCategoryList,

    searchedProducts,
    searchProduct,

    paginateData,
    payload,
    queryParams,
    paginateData,
    products,
    getProducts,
    showingCountText,
    getProductDetails,
    resetPayload,
    product,
    popular_products,
    related_products,
    additionalData,
    getAdditionalData,

    quantityGetSet,
    get_price,
    get_discounted_price,

    addToCartNow,

  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useHomeStore, import.meta.hot));
}
