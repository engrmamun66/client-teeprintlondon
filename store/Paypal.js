import { defineStore, acceptHMRUpdate } from "pinia";
import { useCommonStore } from "~/store/Common";
import Paypal from "../apis/Paypal.js"; 
export const usePaypalStore = defineStore("paypal", () => {
   
    async function createPayment({amount, order_id}){
      try {
        let response = Paypal.createPayment({amount, order_id})
        if(Response.isOk(response)){
          console.log('payment__response:', response.data.data);
        }
      } catch (error) {
        
      }
    }
   
    async function paymentSuccess({token, order_id}){
      try {
        let response = Paypal.paymentSuccess({ params: { token, order_id } })
        if(Response.isOk(response)){
          console.log('payment__response:', response.data.data);
        }
      } catch (error) {
        
      }
    }
   

  return {
    createPayment,
    paymentSuccess,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePaypalStore, import.meta.hot));
}
