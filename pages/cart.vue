<script setup>
let cartStore = inject("cartStore");

definePageMeta({
titleTemplate: '% :: cart',
name: 'cart',
layout: 'web',
})

let isMounted = ref(false)

onMounted(() => {
    useNuxtApp().$emit('hideInPageCart', false)
    H.delay(()=> isMounted.value = true, 1000)
})


let deliveryCost = ref(5.49)

watch(deliveryCost, (a, b) => {
    H.localStorage('deliveryCost').value = a
})

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
                                <template v-if="isMounted">
                                    <template v-if="cartStore.cart?.length">
                                        <template v-for="(item, i) in cartStore.cart">
                                            <tr>
                                                <td><i @click="cartStore.deleteItem(i)" class="la la-trash cart-remove"></i></td>
                                                <td><img @auxclick="log(item)" :src="item.thumbnail_image_url" /></td>
                                                <td>
                                                    <b>{{ item.name }}</b>
                                                    <br>
                                                    <template v-if="item.sizes?.[0]?.name">
                                                        Size: {{ item.sizes?.[0]?.name }} 
                                                    </template>
                                                    <br>
                                                    <template v-if="item.colors?.[0]?.name">
                                                        Color: {{ item.colors?.[0]?.name }} 
                                                    </template>
                                                </td>
                                                <td>{{ H.formatPrice(item.sizes?.[0].pivot?.discounted_unit_price) }}</td>
                                                <td>
                                                    <div class="teeprint-num-in d-flex">
                                                        <span class="teeprint-minus teeprint-dis" @click="cartStore.inCrementDecrementQuantity(i, -1)">-</span>
                                                        <input type="text" class="teeprint-in-num text-center" :value="item.sizes[0].cart_quantity" :disabled="true" readonly="true" style="width: 50px">
                                                        <span class="teeprint-plus" @click="cartStore.inCrementDecrementQuantity(i, 1)">+</span>
                                                    </div>
                                                </td>
                                                <td>{{ H.formatPrice(Number(item.sizes?.[0].pivot?.discounted_unit_price) * item.sizes[0].cart_quantity) }}</td>
                                            </tr>

                                        </template>
                                    </template>
                                    <template v-else> 
                                        <tr>
                                            <td colspan="99">
                                                <h6 class="text-center text-black-50 my-5">Cart Is Empty</h6>
                                            </td>
                                              
                                        </tr> 
                                    </template>
                                </template>
                                <template v-else>
                                    <tr v-for="x in cartStore?.cart?.length || 4">
                                        <td colspan="0">
                                            <ShimmerEffect></ShimmerEffect>
                                        </td>
                                        <td colspan="4">
                                            <ShimmerEffect></ShimmerEffect>
                                        </td>
                                        <td colspan="0">
                                            <ShimmerEffect></ShimmerEffect>
                                        </td>
                                    </tr>
                                </template>

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
                                <template v-if="isMounted"> 
                                    <template v-if="cartStore.cart?.length"> 
                                        <tr>
                                            <td>Subtotal</td>
                                            <td>
                                                <span class="ps-2"><b> {{ H.formatPrice(cartStore.totalPrice) }} </b></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Delivery Method</td>
                                            <td>
        
                                                <select v-model="deliveryCost" class="px-0 ps-1">
                                                    <template v-for="(opt, i) in H.getDeliveryOptions()">
                                                        <option v-if="i ==2" :value="opt.price">{{opt.name}}</option> 
                                                        <option v-else :value="opt.price">{{opt.name}} ({{CURRENCY}} {{ opt.price }})</option> 
                                                    </template>
                                                </select>
                                            
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Delivery Charge</td>
                                            <td><span class="ps-2"> {{ H.formatPrice(deliveryCost) }} </span></td>
                                        </tr>  
                                        <tr>
                                            <td>
                                                <h4>Total</h4>
                                            </td>
                                            <td>
                                                <h4 class="ps-2"> {{ H.formatPrice(cartStore.totalPrice + deliveryCost) }} </h4>
                                            </td>
                                        </tr>
                                    </template>
                                    <template v-else>
                                        <tr> 
                                            <td colspan="99">
                                                <h6 class="text-center text-black-50 my-5">Cart Is Empty</h6>
                                            </td>  
                                        </tr>  
                                    </template>
                                </template>
                                <template v-else> 
                                    <tr v-for="x in 3">
                                        <td>
                                            <ShimmerEffect></ShimmerEffect>
                                        </td>
                                        <td>
                                            <ShimmerEffect></ShimmerEffect>
                                        </td>
                                    </tr>   
                                </template>
                            </tbody>
                        </table>

                        <nuxt-link to="/shop" class="teeprint-button teeprint-theme-btn addtocart-btn"> Continue Shopping </nuxt-link>
                        <nuxt-link to="/checkout" class="teeprint-button teeprint-theme-btn addtocart-btn"> Go Checkout </nuxt-link>

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

