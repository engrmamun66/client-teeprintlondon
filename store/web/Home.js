import { defineStore, acceptHMRUpdate } from "pinia";
import FrontendApi from "../apis/web/Frontend";

export const useHomeStore = defineStore("homeStore", () => {

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
          console.log('searchedProducts.value', searchedProducts.value?.length, searchedProducts.value);
          
        }
      })
      
    } catch (error) {
      
    }
  }


  let paginateData = ref(useCookie('web_paginateData') || {})
  let products = ref(useCookie('web_products') || [])
  let queryParams = ref({
    page: 1,
    per_page: 2
  })
  let payload = reactive({
    search: '',
    category_slug: null,
    category_ids: [],
    brand_ids: [],
    size_ids: [],
    gender_ids: [],
  })

  async function getProducts({page}={}){
    try {
      let query = H.clone(queryParams.value)
      if(page){
        query.page = page
      }
      FrontendApi.getProducts(payload, query).then(response => {
        if(response.data.success){
          paginateData.value = response.data.data || {}
          products.value = response.data.data?.data || []
          if(query.page == 1){
            useCookie('web_paginateData').value = paginateData.value
            useCookie('web_products').value = products.value
          }
        }
      })
      
    } catch (error) {
      
    }
  }


  function showingCountText(){ 
      if(!paginateData.value?.total) return `Showing 0 of 0 results`

      return `Showing 1-${queryParams.value.per_page} of ${paginateData.value?.total}  results`
  }



    
  return { 
    menus, 
    getTypewiseCategoryList,

    searchedProducts,
    searchProduct,

    paginateData,
    payload,
    paginateData,
    products,
    getProducts,
    showingCountText,

  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useHomeStore, import.meta.hot));
}
