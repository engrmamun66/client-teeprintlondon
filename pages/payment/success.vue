<script setup>
// ?order_id=21&token=0S620627AD4141800&PayerID=B4E3U9V6FK6QW
import { usePaypalStore } from '~/store/Paypal'
let paypalStore = usePaypalStore()

definePageMeta({
  titleTemplate: "% :: Order Complete", 
  layout: "web",
});

let isMounted = ref(null)


onMounted(async () => {
  try {
    let { token, order_id } = useRoute().query
    await paypalStore.paymentSuccess({token, order_id}) 
  } catch (error) {
    
  }


  isMounted.value = true
})

</script>


<template>
   <div>

       <div class="container">
         <div class="row">
           <div class="col-12">
             <div class="message-box">
               <div class="success-container">
                 <br /> 
                 <br />
                 <br />
                 <h1 class="monserrat-font mb-4" style="color: Grey">
                   Thank you for your order
                 </h1> 
    
                 <div class="confirm-green-box p-5"> 
                   <h5 class="mb-4">ORDER CONFIRMATION</h5>
                   <div class="block">
                        <p>Order #{{ useRoute().query?.order_id || '000' }} has been sucessful!</p>
                        <p> You will shortly
                            receive a confirmation email.
                        </p>

                        <table v-if="paypalStore.paymentData" class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Order Id</th>
                                    <th>Amount</th>
                                    <th>Currency</th>
                                    <th>Payment Method</th> 
                                </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  {{ paypalStore.paymentData?.order_id }}
                                </td>
                                <td>
                                  {{ paypalStore.paymentData?.amount }}
                                </td>
                                <td>
                                  {{ paypalStore.paymentData?.currency }}
                                </td>
                                <td>
                                  {{ paypalStore.paymentData?.payment_method }}
                                </td>
                              </tr>
                            </tbody>

                        </table>
                   </div>

                 </div>
    
                 <br />
               </div>
             </div>
           </div>
         </div>
       </div> 
   </div>
 
  <!-- end of main -->
</template>


<style scoped>
/* Write page CSS here*/
.message-box{
  display: flex;
  justify-content: center;
  padding-top: 10vh;
  padding-bottom: 10vh;
}
.success-container{
  background: white;
  height: 480px;
  width: 90%; 
  text-align: center;
}
.confirm-green-box{
  width: 100%; 
  background: #d7f5da;
}


.monserrat-font{
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 2px;
}





/* --------------- site wide START ----------------- */
.main{
  width:80vw;
  margin: 0 10vw;
  height:50vh;
  overflow:hidden;
  
}

body{
  font-family: 'Montserrat', sans-serif;
}

/* 
 * Setting the site variables, example of how to use
 * color:var(--text-1);
 *
 */

:root {
    --background-1: #ffffff;
    --background-2: #E3E3E3;
    --background-3: #A3CCC8;
    --text-1: #000000;
    --text-2: #ffffff;
    --text-size-reg: calc(20px + (20 - 18) * ((100vw - 300px) / (1600 - 300)));
    --text-size-sml: calc(10px + (10 - 8) * ((100vw - 300px) / (1600 - 300)));
}

.verticle-align{
  text-align:center;
  display:flex;
  align-items:center;
  justify-content:center;
}

.no-style{
  padding:0;
  margin:0;
}


.block{
    border: 1px solid #5fcf45;
    padding: 15px;
    border-radius: 20px;
    background: white;
}


/* ------------------ site wide END ----------------- */

/* ----- RESPONSIVE OPTIONS MUST STAY AT BOTTOM ----- */

/* SM size and above unless over ridden in bigger sizes */
@media (min-width: 576px) { /* sm size */

}

/* MD size and above unless over ridden in bigger sizes */
@media (min-width: 768px) {

}

/* LG size and above unless over ridden in bigger sizes */
@media (min-width: 992px) { 
  

}

 /* XL size and above */
@media (min-width: 1200px) {
  
}
</style>