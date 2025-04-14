import { defineStore, acceptHMRUpdate } from "pinia";

import OrderApi from "../apis/Order.js"; 
export const useOrderStore = defineStore("paypal", () => {

    let paginateData = ref(null)
    let orders = ref([])
   
    async function getOrderList(query){
      try {
        let params = {...query}
        let response = await OrderApi.getOrderList({ params })
        if(Response.isOk(response, {toaster: false})){
          paginateData.value = Response.parseData(response)
          orders.value = Response.parseData(response).data
        }
       
      } catch (error) {
        console.log('error---', error);
      }
    } 

    let orderDetails = ref(null)
    async function getOrderDetails(order_number){
      try { 
        let response = await OrderApi.getOrderDetails(order_number)
        if(Response.isOk(response, {toaster: false})){
          orderDetails.value = Response.parseData(response) 
        }
       
      } catch (error) {
        console.log('error---', error);
      }
    } 

    async function updateOrderStatus(payload) {
      try { 
        let response = await OrderApi.updateOrderStatus(payload)
        if(Response.isOk(response, {toaster: false})){
          Toaster.success(" Order Status Changed")
        }
       
      } catch (error) {
        Toaster.error("There was an Error in updating the status")
      }
    }

  return {
    paginateData,
    orders,
    getOrderList,
    orderDetails,
    getOrderDetails,
    updateOrderStatus
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useOrderStore, import.meta.hot));
}
