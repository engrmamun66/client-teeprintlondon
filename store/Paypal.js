import { defineStore, acceptHMRUpdate } from "pinia";
import { useCommonStore } from "~/store/Common";
import Paypal from "../apis/Paypal.js"; 
export const usePaypalStore = defineStore("paypal", () => {
   
    async function createPayment({amount, order_id}){
      try {
        let response = await Paypal.createPayment({amount, order_id})
        
        if(response.data.status == 'CREATED'){
          let { links, id } = response.data
          const approveLink = links.find((link) => link.rel === 'approve');
          if (approveLink) {
            window.location.href = approveLink.href;
          } else {
            throw new Error('No approval link found in PayPal response');
          }
        }
       
      } catch (error) {
        console.log('error---', error);
      }
    }
   
    async function paymentSuccess({token, order_id}){
      try {
        let response = await Paypal.paymentSuccess({ params: { token, order_id } })
        if(Response.isOk(response)){
          console.log('payment__response:0', response.data);
          console.log('payment__response:1', response.data.data);
          console.log('payment__response:2', response.data.links);
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
