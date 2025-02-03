<script setup>

definePageMeta({
titleTemplate: '% :: cart',
name: 'cart',
layout: 'web',
})

onMounted(() => {
    useNuxtApp().$emit('hideInPageCart', false)
})


let price = ref(5.49)

</script>



<template>
    <section class="teeprint-cart-wrapper">
        <div class="container">
            <div class="row teeprint-cart-top">
                <div class="col-lg-12">
                    <div class="teeprint-cart-ordertable">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th>Product</th>
                                    <th>Unit Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><i class="la la-times cart-remove"></i></td>
                                    <td><img src="https://teeprint.london/wp-content/uploads/2024/08/AM1120GYM20FRONT-6.jpg" /></td>
                                    <td>
                                        <b>Anthem Organic Long Sleeve T-Shirt</b>
                                        <br>
                                        Delivery:Urgent 2-3 days
                                        <br>
                                        Colour:Blac
                                    </td>
                                    <td>$2000</td>
                                    <td>
                                        <input style="width:70px;text-align: center;" min="1" type="number" value="1">
                                    </td>
                                    <td>$2000.00</td>
                                </tr>

                                <tr>
                                    <td><i class="la la-times cart-remove"></i></td>
                                    <td><img src="https://teeprint.london/wp-content/uploads/2024/08/AM1120GYM20FRONT-6.jpg" /></td>
                                    <td>
                                        <b>Anthem Organic Long Sleeve T-Shirt</b>
                                        <br>
                                        Delivery:Urgent 2-3 days
                                        <br>
                                        Colour:Blac
                                    </td>
                                    <td>$2000</td>
                                    <td>
                                        <input style="width:70px;text-align: center;" min="1" type="number" value="1">
                                    </td>
                                    <td>$8000.00</td>
                                </tr>

                                <tr>
                                    <td><i class="la la-times cart-remove"></i></td>
                                    <td><img src="https://teeprint.london/wp-content/uploads/2024/08/AM1120GYM20FRONT-6.jpg" /></td>
                                    <td>
                                        <b>Anthem Organic Long Sleeve T-Shirt</b>
                                        <br>
                                        Delivery:Urgent 2-3 days
                                        <br>
                                        Colour:Blac
                                    </td>
                                    <td>$2000</td>
                                    <td>
                                        <input style="width:70px;text-align: center;" min="1" type="number" value="1">
                                    </td>
                                    <td>$2000.00</td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <div class="d-flex">
                                            <input class="coupon-code-input" type="text" placeholder="Coupon Code" />
                                            <button class="teeprint-button teeprint-theme-btn teeprint-apply-coupon-btn" type="submit">Apply Coupon</button>
                                        </div>
                                    </td>
                                    <td colspan="3">
                                        <a class="teeprint-button teeprint-theme-btn teeprint-proceed-checkout-btn" href="checkout.html">Proceed Checkout<i class="la la-arrow-right"></i> </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
            <!-- <div class="teeprint-row teeprint-cart-bottom---"> -->
            <div class="row">
                <div class="col-md-6 col-12">
                    <div class="delivery-policy">
                        <img src="/img/delivery-policy.jpg" alt="">
                        <div class="desciber">                           
                            
                            <template v-for="(opt, i) in H.getDeliveryOptions()">
                                <template v-if="i == 0">
                                    <h6 class="mb-1">{{opt.name}} ({{CURRENCY}} {{ opt.price }})</h6>
                                    <div class="alert alert-primary" role="alert">
                                        Delivery will in next 4 working days
                                    </div>
                                </template>
                                <template v-else-if="i == 1">
                                    <h6 class="mb-1">{{opt.name}} ({{CURRENCY}} {{ opt.price }})</h6>
                                    <div class="alert alert-warning" role="alert">
                                        Delivery will by tomorrow
                                    </div>
                                </template>
                                <template v-else-if="i == 2">
                                    <h6 class="mb-1">{{opt.name}} ({{CURRENCY}} {{ opt.price }})</h6>
                                    <div class="alert alert-success" role="alert">
                                        If you order before 03:00 PM
                                    </div>
                                </template>
                            </template> 
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12">
                    <div class="teeprint-cart-order-summery">
                        <h5>Cart Total</h5>
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td>Subtotal</td>
                                    <td>
                                        <span class="ps-2"><b> {{CURRENCY}}12000.00 </b></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Delivery Method</td>
                                    <td>

                                        <select v-model="price" class="px-0 ps-1">
                                            <template v-for="opt in H.getDeliveryOptions()">
                                                <option :value="opt.price">{{opt.name}} ({{CURRENCY}} {{ opt.price }})</option> 
                                            </template>
                                        </select>
                                    
                                    </td>
                                </tr>
                                <tr>
                                    <td>Delivery Charge</td>
                                    <td><span class="ps-2"> {{CURRENCY}}{{price}} </span></td>
                                </tr>
                                <tr>
                                    <td>Discount</td>
                                    <td><span class="ps-2"> {{CURRENCY}}0.00</span></td>
                                </tr>
                                
                               
                                <tr>
                                    <td>
                                        <h4>Total</h4>
                                    </td>
                                    <td>
                                        <h4 class="ps-2"> $12000.00</h4>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
.delivery-policy{
    overflow: hidden;
    display: flex;
    padding: 15px;
    background: #eeeeee;
    border-radius: 0px;
}
.delivery-policy img{
    width: 40%;
    border-radius: 10px; 
} 
.delivery-policy .desciber{
    margin-left: 15px;
} 
.delivery-policy .desciber .alert {
    font-size: 15px;
} 
</style>

