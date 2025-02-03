<script setup lang="ts">
let { modelValue } = defineProps({
    modelValue: {
        default: true,
        required: false,
    }
})

let emits = defineEmits(['update:modelValue']) 

function updateModalValue(bool: boolean){
    emits('update:modelValue', bool)
}

let totalProducts = ref(0)

onMounted(() => {
    useNuxtApp().$on('increment_cart_item', () => {
        totalProducts.value++
    })
    useNuxtApp().$on('hideInPageCart', () => {
        updateModalValue(false)
    })
})



</script>


<template>
    <Teleport to="body">
         <!-- teeprint cart bar  -->
         <div class="teeprint-cartbar-launcher">
            <div class="teeprint-cartbar-launcher-icon" @click="updateModalValue(true)" >
                <i class="la la-shopping-bag" aria-hidden="true" id="in_page_cart_icon" ></i>
                <span class="badge badge-primary shopping-cart-badge">
                    {{ totalProducts }}
                </span> 
            </div>
        </div>
        
        <div class="teeprint-cartsidebar-overlay" :class="{'is-open': modelValue}"">
            <div class="teeprint-cart-sidebar-content">
                <div class="teeprint-cart-modalclose" @click.stop="updateModalValue(false)" ><i class="lni lni-close"></i></div>
                <div class="teeprint-cart-sidebar-body">
                    <div class="teeprint-cart-sidebar-inner">
                        <div class="teeprint-sidebar-head">
                            <div class="teeprint-title">Cart</div>
                        </div>
                        <div class="teeprint-cart-sidebar-lines">
                            <ul v-if="totalProducts">
                                <li v-for="x in totalProducts">
                                    <div class="teeprint-list-item">
                                        <img class="teeprint-product-image" src="https://fabrilife.com/products/655b55fa1eafc-square.jpeg?v=20" />
                                        <div class="teeprint-cart-line">
                                            <div class="teeprint-product-name teeprint-large">Full Sleeve T-shirt- Kick Off</div>
                                            <div class="teeprint-modal-quantity">
                                                <div class="teeprint-number-block">
                                                    <div class="teeprint-num-in">
                                                        <span class="teeprint-minus teeprint-dis">-</span>
                                                        <input type="text" class="teeprint-in-num" value="1" readonly="">
                                                        <span class="teeprint-plus">+</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="teeprint-price">$30.00</span>
                                            <a class="teeprint-remove-product"><i class="lni lni-close"></i></a>
                                        </div>
                                    </div>
                                </li>
                              
                            </ul>
                            <ul v-else>
                                <li class="text-center text-black-50 py-4" >No product in the cart</li>

                            </ul>
                        </div>
                        <div class="teeprint-cart-sidebar-summary">
                            <div class="teeprint-detail teeprint-strong">
                                <span class="carttotal">Cart Total</span>
                                <span class="teeprint-amount">$30.00</span>
                            </div>
                            <nuxt-link to="/cart" class="button teeprint-checkout-btn">Cart Page <i class="la la-arrow-right"></i></nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>