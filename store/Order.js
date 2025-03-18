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

  return {
    paginateData,
    orders,
    getOrderList,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useOrderStore, import.meta.hot));
}
