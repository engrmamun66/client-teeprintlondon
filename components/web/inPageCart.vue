<script setup>
let cartStore = inject("cartStore");

let { modelValue } = defineProps({
    modelValue: {
        default: true,
        required: false,
    }
})

let emits = defineEmits(['update:modelValue']) 

function updateModalValue(bool){
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
                    {{ cartStore.totalItems }}
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
                            <ul v-if="cartStore.cart?.length">
                                <li v-for="(item, i) in cartStore.cart">
                                    <div class="teeprint-list-item">
                                        <img @auxclick="log(item)" class="teeprint-product-image" :src="item.thumbnail_image_url || PLACEHOLDER_IMAGE" />
                                        <div class="teeprint-cart-line">
                                            <div class="teeprint-product-name teeprint-large">{{ item?.name }}</div>
                                            <div class="teeprint-modal-quantity">
                                                <div class="teeprint-number-block">
                                                    <div class="teeprint-num-in">
                                                        <span class="teeprint-minus teeprint-dis" @click="cartStore.inCrementDecrementQuantity(i, -1)">-</span>
                                                        <input type="text" class="teeprint-in-num" :value="item.sizes[0].cart_quantity" :disabled="true" readonly="true">
                                                        <span class="teeprint-plus" @click="cartStore.inCrementDecrementQuantity(i, 1)">+</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="teeprint-price">{{ H.formatPrice(cartStore.printItemPrice(item)) }}</span>
                                            <span class="teeprint-size">{{ [item.sizes?.[0]?.name, item.colors?.[0]?.name].filter(Boolean).join(', ') }}</span>
                                            <a class="teeprint-remove-product" ><i  @click="cartStore.deleteItem(i)" class="lni lni-close"></i></a>
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
                                <span class="teeprint-amount">{{H.formatPrice(cartStore.totalPrice)}}</span>
                            </div>
                            <nuxt-link to="/cart" class="button teeprint-checkout-btn">Cart Page <i class="la la-arrow-right"></i></nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>