import { defineStore, acceptHMRUpdate } from "pinia";
import { useCommonStore } from "~/store/Common";
import Paypal from "../apis/Paypal.js"; 
export const usePaypalStore = defineStore("paypal", () => {
   
    async function createPayment({amount, order_id}){
      try {
        let response = await Paypal.createPayment({amount, order_id})
        
        if(response.data.status == 'CREATED'){
          let { links } = response.data
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

    let paymentData = ref(null)
   
    async function paymentSuccess({token, order_id}){
      try {
        paymentData.value = null
        let response = await Paypal.paymentSuccess({ params: { token, order_id } })
        /**
         * response.data?.payment --> Example Object
         * {
              "payment_id": "0S620627AD4141800",
              "payer_id": "B4E3U9V6FK6QW",
              "order_id": "21",
              "amount": "108.00",
              "currency": "USD",
              "status": "COMPLETED",
              "payment_method": "PayPal",
              "updated_at": "2025-03-16T10:09:50.000000Z",
              "created_at": "2025-03-16T10:09:50.000000Z",
              "id": 4
          }
         */
        if(response.data?.payment?.payment_id){
          paymentData.value = response.data?.payment
          Toaster.success('Order created successful')
        }
      } catch (error) {
        
      }
    }
   

  return {
    createPayment,
    paymentSuccess,
    paymentData,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePaypalStore, import.meta.hot));
}
