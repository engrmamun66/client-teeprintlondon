import { defineStore, acceptHMRUpdate } from "pinia";
import FrontendApi from "../apis/web/Frontend";

export const useCartStore = defineStore("cartStore", () => {

   let cart = ref([])
   let totalItems = computed(() => {
    let quantity = cart.value.reduce((a, b)=> a + b.sizes[0]?.cart_quantity, 0)
    return quantity
   })
   let totalPrice = computed(() => {
    let total_price = cart.value.reduce((a, b)=> {
      let { cart_quantity, pivot: { discounted_unit_price } } = b.sizes[0]
      let price = cart_quantity * Number(discounted_unit_price)
      return (a + price) 
    }, 0)
    return total_price
   })


   function updateCartVaialble(){
    cart.value = H.localStorage('cart').value || []
   }


   function printItemPrice({sizes}){
      let {cart_quantity, pivot: {discounted_unit_price}} = sizes[0]
      return (cart_quantity * Number(discounted_unit_price))
   }


   function inCrementDecrementQuantity(index, quantity){
    
      cart.value[index].sizes[0].cart_quantity += quantity
      if(cart.value[index].sizes[0].cart_quantity < 1){
        cart.value[index].sizes[0].cart_quantity = 1
      }
      H.localStorage('cart').value = cart.value  
   }

   function deleteItem(index){ 
      cart.value = cart.value.filter((item, i) => i != index)
      H.localStorage('cart').value = cart.value  
   }

   onMounted(() => {
    updateCartVaialble()
    useNuxtApp().$on('cartItemAdded', updateCartVaialble);
   })
    
  return {  
    cart,
    totalItems,
    totalPrice,
    printItemPrice,
    deleteItem,
    inCrementDecrementQuantity,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}
