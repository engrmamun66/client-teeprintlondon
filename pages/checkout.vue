<script setup>
let cartStore = inject("cartStore");
let homeStore = inject("homeStore");
let orderStore = inject("orderStore");

definePageMeta({
  titleTemplate: "% :: checkout",
  name: "checkout",
  layout: "web",
});

// watch(
//   () => orderStore.coupon, // What to watch
//   (newCoupon, oldCoupon) => {
//     // This runs whenever orderStore.coupon changes
//     if (newCoupon) {
//       console.log("Coupon updated:", newCoupon);
//     } else if (oldCoupon && !newCoupon) {
//       console.log("Coupon was removed");
//       Toaster.info("Coupon removed");
//     }
//   },
//   {
//     deep: true, // Watch nested object changes
//     immediate: true, // Run immediately on component mount
//   }
// );
let isMounted = ref(false);
let coupon_code = ref(null);
let payload = reactive({
  customer_first_name: "",
  customer_last_name: "",
  customer_email: "",
  customer_phone: "",
  country: "UK",
  city: "",
  state: "",
  zipcode: "",
  billing_address: "",
  shipping_address: " ",
  delivery_type_id: 1,
  // payment_method: "credit_card",
  notes: "",
  items: [],
  coupon_code:""
});

function resetPayload() {
  payload.customer_first_name = "";
  payload.customer_last_name = "";
  payload.customer_email = "";
  payload.customer_phone = "";
  payload.country = "UK";
  payload.city = "";
  payload.state = "";
  payload.zipcode = "";
  payload.billing_address = "";
  (payload.shipping_address = " "), (payload.delivery_type_id = 1);
  // payload.payment_method = "credit_card"
  payload.notes = "";
  payload.items = [];
}

function checkDeliveryType() {
  if (payload.delivery_type_id == 3 && !H.nowIsBefore3PM()) {
    Toaster.warning(
      "Now the time over 03:00 PM, so we are changing forcefully to standard delivery",
      10000
    );
    payload.delivery_type_id = H.getDeliveryOptions()[0]["id"];
  }
}

function processCartItems() {
  if (!cartStore.cart?.length) return [];
  return cartStore.cart.map((item) => {
    return {
      product_id: item.id,
      product_size_id: item.sizes[0].pivot.id,
      product_color_id: item.colors[0].pivot.id,
      quantity: item.sizes[0].cart_quantity,
      unit_price: item.sizes[0].pivot.unit_price,
      discounted_unit_price: item.sizes[0].pivot.discounted_unit_price,
      discount: item.discount,
      note: item?.note || null,
    };
  });
}

let getDeliveryCostItem = computed(() => {
  return H.getDeliveryOptions().find(
    (item) => item?.id == payload.delivery_type_id
  );
});

onMounted(() => {
  let deliveryCost =
    Number(H.localStorage("deliveryCost").value) ||
    Number(H.getDeliveryOptions()[0]["cost"]);

  payload.delivery_type_id =
    H.getDeliveryOptions().filter((item) => item.cost == deliveryCost)?.[0]?.[
      "id"
    ] || H.getDeliveryOptions()[0]["id"];
  // console.log('888--', payload.delivery_type_id);
  checkDeliveryType();

  H.delay(() => {
    payload.items = processCartItems();
  }, 100);
  H.delay(() => (isMounted.value = true), 2000);
});

async function couponValidate() {

  if (!H.localStorage("cart").value?.length) {
    Toaster.error("Your cart is emtpy");
    return;
  }

  if (H.isPendingAnyApi("Frontend:placeOrder")) return;

  if (!payload.customer_first_name)
    return Toaster.error("First name is required");
  if (!payload.customer_last_name)
    return Toaster.error("Last name is required");
  if (!payload.customer_phone) return Toaster.error("Phone number is required");
  if (!payload.customer_email) return Toaster.error("Email is required");
    
  const data = {
    coupon_code: coupon_code.value,
    subtotal: cartStore.totalPrice,
    customer_email: payload.customer_email,
  };

   orderStore.checkCoupon(data);
}

let orderCreating = ref(false);

async function placeOrder() {
  if (!H.localStorage("cart").value?.length) {
    Toaster.error("Your cart is emtpy");
    return;
  }

  if (H.isPendingAnyApi("Frontend:placeOrder")) return;

  if (!payload.customer_first_name)
    return Toaster.error("First name is required");
  if (!payload.customer_last_name)
    return Toaster.error("Last name is required");
  if (!payload.customer_phone) return Toaster.error("Phone number is required");
  if (!payload.customer_email) return Toaster.error("Email is required");

  if (orderCreating.value) return;

  orderCreating.value = true;

  H.delay(() => (orderCreating.value = true), 30 * 1000);
  
  if(orderStore.couponSuccess){
    payload.coupon_code = orderStore.coupon.code
  }
  await homeStore.placeOrder(payload, { cartStore, resetPayload });


}
</script>

<template>
  <section class="teeprint-checkout-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="teeprint-billing-fullfilment-content">
            <div class="teeprint-billing-address">
              <h2 class="teeprint-checkout-title">Billing details</h2>
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>First Name<span style="color: red; font-weight: bold;">*</span></label>
                    <template v-if="!isMounted">
                      <ShimmerEffect
                        height="40px"
                        class="border"
                      ></ShimmerEffect>
                    </template>
                    <template v-else>
                      <input
                        v-model="payload.customer_first_name"
                        type="text"
                      />
                    </template>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Last Name<span style="color: red; font-weight: bold;">*</span></label>
                    <template v-if="!isMounted">
                      <ShimmerEffect
                        height="40px"
                        class="border"
                      ></ShimmerEffect>
                    </template>
                    <template v-else>
                      <input v-model="payload.customer_last_name" type="text" />
                    </template>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Mobile Number<span style="color: red; font-weight: bold;">*</span></label>
                    <template v-if="!isMounted">
                      <ShimmerEffect
                        height="40px"
                        class="border"
                      ></ShimmerEffect>
                    </template>
                    <template v-else>
                      <input v-model="payload.customer_phone" type="text" />
                    </template>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Email Name<span style="color: red; font-weight: bold;">*</span></label>
                    <template v-if="!isMounted">
                      <ShimmerEffect
                        height="40px"
                        class="border"
                      ></ShimmerEffect>
                    </template>
                    <template v-else>
                      <input v-model="payload.customer_email" type="email" />
                    </template>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                    <label>Country / Region </label>
                    <template v-if="!isMounted">
                      <ShimmerEffect
                        height="40px"
                        class="border"
                      ></ShimmerEffect>
                    </template>
                    <template v-else>
                      <select disabled>
                        <option>United Kingdom</option>
                      </select>
                    </template>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                    <label>Street Address</label>
                    <template v-if="!isMounted">
                      <ShimmerEffect
                        height="40px"
                        class="border"
                      ></ShimmerEffect>
                    </template>
                    <template v-else>
                      <input v-model="payload.billing_address" type="text" />
                    </template>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>City</label>
                    <template v-if="!isMounted">
                      <ShimmerEffect
                        height="40px"
                        class="border"
                      ></ShimmerEffect>
                    </template>
                    <template v-else>
                      <input v-model="payload.city" type="text" />
                    </template>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Zipcode</label>
                    <template v-if="!isMounted">
                      <ShimmerEffect
                        height="40px"
                        class="border"
                      ></ShimmerEffect>
                    </template>
                    <template v-else>
                      <input v-model="payload.zipcode" type="text" />
                    </template>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>State</label>
                    <template v-if="!isMounted">
                      <ShimmerEffect
                        height="40px"
                        class="border"
                      ></ShimmerEffect>
                    </template>
                    <template v-else>
                      <input v-model="payload.state" type="text" />
                    </template>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="col-lg-12">
                    <label>Order notes (optional)</label>
                    <template v-if="!isMounted">
                      <ShimmerEffect
                        height="100px"
                        class="border"
                      ></ShimmerEffect>
                    </template>
                    <template v-else>
                      <textarea
                        v-model="payload.notes"
                        class="form-control ordernote-textarea"
                        rows="4"
                        placeholder="Notes about your order, e.g. special notes for delivery."
                      ></textarea>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="teeprint-billing-fullfilment-content">
                        <div class="teeprint-billing-address">
                            <label class="teeprint-checkbox teeprint-checkout-title">
                                <input v-model="payload.customer_first_name" type="checkbox" />
                                Shipp to a different address
                                <span  class="transformY-5px-" ></span>
                            </label> 
                             <div class="shipp-address">
                                <div class="row" >
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label>First Name</label>
                                            <input v-model="payload.shipping_customer_first_name" type="text" />
                                        </div>
                                    </div>
                                     
                                </div>
                                
                             </div>
                        </div>
                    </div> -->
        </div>
        <div class="col-lg-6">
          <div class="teeprint-checkout-ordersummery">
            <div class="teeprint-checkout-ordersummery-inner">
              <h2 class="teeprint-ordersummery-title">Your order</h2>

              <div class="teeprint-ordersummery-list">
                <template v-if="isMounted">
                  <template v-if="cartStore.cart?.length">
                    <template v-for="(item, i) in cartStore.cart">
                      <div class="teeprint-order-list-box">
                        <div class="teeprint-order-img">
                          <img
                            :src="item.thumbnail_image_url"
                            alt="Alternative Image"
                          />
                        </div>
                        <div class="teeprint-order-product-details">
                          <div class="teeprint-order-product-name">
                            {{ item?.name }}
                          </div>
                          <div class="teeprint-order-details-bottom">
                            <p class="teeprint-order-quantity">
                              Quantity: {{ item.sizes[0].cart_quantity }},
                            </p>
                            <p class="teeprint-order-product-price">
                              Price:
                              {{
                                H.formatPrice(
                                  item.sizes?.[0].pivot?.discounted_unit_price
                                )
                              }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </template>
                  </template>
                  <template v-else>
                    <label for="" class="py-5"
                      >No product added in the cart</label
                    >
                  </template>
                </template>
                <template v-else>
                  <template v-for="x in 3">
                    <div class="teeprint-order-list-box">
                      <div class="teeprint-order-img">
                        <ShimmerEffect
                          width="36px"
                          height="50px"
                        ></ShimmerEffect>
                      </div>
                      <div class="teeprint-order-product-details">
                        <div class="teeprint-order-product-name">
                          <ShimmerEffect
                            width="210px"
                            height="20px"
                          ></ShimmerEffect>
                        </div>
                        <div class="teeprint-order-details-bottom d-flex">
                          <p class="teeprint-order-quantity">
                            <ShimmerEffect
                              width="100px"
                              height="20px"
                            ></ShimmerEffect>
                          </p>
                          <p class="teeprint-order-product-price">
                            <ShimmerEffect
                              width="100px"
                              height="20px"
                            ></ShimmerEffect>
                          </p>
                        </div>
                      </div>
                    </div>
                  </template>
                </template>
              </div>

              <div class="teeprint-checkout-order-table">
                <table>
                  <tbody>
                    <template v-if="isMounted">
                      <tr>
                        <th>Subtotal</th>
                        <!-- <td class="text-end">
                          {{  H.formatPrice(cartStore.totalPrice - orderStore.discount)  }}
                        </td> -->

                        <td class="text-end">
                          <div
                            class="d-flex align-items-center justify-content-end"
                          >
                            <template v-if="orderStore.discount > 0">
                              <!-- Original price with strikethrough -->
                              <span
                                class="text-decoration-line-through text-muted me-2"
                              >
                                {{ H.formatPrice(cartStore.totalPrice) }}
                              </span>
                              <!-- Optional: Display discount amount -->
                              <span class="badge bg-success ms-2">
                                -{{ H.formatPrice(orderStore.discount) }}
                              </span>
                              <!-- Discounted price -->
                              <span class="text-success fw-bold">
                                {{
                                  H.formatPrice(
                                    cartStore.totalPrice - orderStore.discount
                                  )
                                }}
                              </span>
                            </template>
                            <template v-else>
                              <span class="fw-bold">
                                {{ H.formatPrice(cartStore.totalPrice) }}
                              </span>
                            </template>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>
                          Shipping
                          <small>({{ getDeliveryCostItem?.["name"] }})</small>
                        </th>
                        <td class="text-end">
                          {{
                            H.formatPrice(Number(getDeliveryCostItem?.["cost"]))
                          }}
                        </td>
                      </tr>

                      <tr>
                        <th><strong>Total</strong></th>
                        <!-- <td class="text-end">
                          <strong>{{
                            H.formatPrice(
                              cartStore.totalPrice +
                                (Number(getDeliveryCostItem?.["cost"]) || 0) -
                                orderStore.discount
                            )
                          }}</strong>
                        </td> -->

                        <td class="text-end">
                          <div class="d-flex flex-column align-items-end">
                            <template v-if="orderStore.discount > 0">
                              <!-- Original total with strikethrough -->
                              <span
                                class="text-decoration-line-through text-muted"
                              >
                                {{
                                  H.formatPrice(
                                    cartStore.totalPrice +
                                      (Number(getDeliveryCostItem?.["cost"]) ||
                                        0)
                                  )
                                }}
                              </span>
                              <!-- Discounted total -->
                              <strong class="text-success">
                                {{
                                  H.formatPrice(
                                    cartStore.totalPrice +
                                      (Number(getDeliveryCostItem?.["cost"]) ||
                                        0) -
                                      orderStore.discount
                                  )
                                }}
                              </strong>
                              <!-- Discount badge -->
                              <span class="badge bg-success mt-1">
                                -{{
                                  H.formatPrice(orderStore.discount)
                                }}
                                discount
                              </span>
                            </template>
                            <template v-else>
                              <strong>
                                {{
                                  H.formatPrice(
                                    cartStore.totalPrice +
                                      (Number(getDeliveryCostItem?.["cost"]) ||
                                        0)
                                  )
                                }}
                              </strong>
                            </template>
                          </div>
                        </td>
                      </tr>
                      <div class="form-group">
                        <label>Coupon Code</label>
                        <template v-if="!isMounted">
                          <ShimmerEffect
                            height="40px"
                            class="border"
                          ></ShimmerEffect>
                        </template>
                        <template v-else>
                          <div class="coupon-row">
                            <!-- Added container div -->
                            <input
                              v-model="coupon_code"
                              type="text"
                              class="coupon-input"
                            />
                            <button
                              @click="couponValidate()"
                              type="button"
                              class="teeprint-button teeprint-theme-btn teeprint-placeorder-btn mb-1"
                            >
                              Apply
                          <BtnLoader
                            v-if="H.isPendingAnyApi('Orders:checkCoupon')"
                            color="white"
                            class="text-white"
                          ></BtnLoader>
                            </button>
                          </div>
                        </template>
                      </div>
                    </template>
                    <template v-else>
                      <tr>
                        <th>Subtotal</th>
                        <td class="text-end">
                          <ShimmerEffect
                            width="166px"
                            height="20px"
                          ></ShimmerEffect>
                        </td>
                      </tr>
                      <tr>
                        <th>Shipping</th>
                        <td class="text-end">
                          <ShimmerEffect
                            width="166px"
                            height="20px"
                          ></ShimmerEffect>
                        </td>
                      </tr>

                      <tr>
                        <th><strong>Total</strong></th>
                        <td class="text-end">
                          <strong
                            ><ShimmerEffect
                              width="166px"
                              height="20px"
                            ></ShimmerEffect
                          ></strong>
                        </td>
                      </tr>
                    </template>
                  </tbody>
                </table>
              </div>
              <div class="teeprint-ordersummery-button">
                <template v-if="isMounted">
                  <div class="d-flex align-content-center flex-wrap">
                    <button
                      @click="navigateTo({ path: '/cart' })"
                      type="button"
                      class="teeprint-button teeprint-theme-btn teeprint-placeorder-btn mb-1"
                    >
                      Back To Cart
                    </button>
                    <button
                      @click="placeOrder()"
                      type="button"
                      class="teeprint-button teeprint-theme-btn teeprint-placeorder-btn mb-1"
                    >
                      Proceed To Payment
                      <BtnLoader
                        v-if="orderCreating"
                        color="white"
                        class="text-white"
                      ></BtnLoader>
                    </button>
                  </div>
                </template>
                <template v-else>
                  <div class="w-100 d-flex justify-content-center">
                    <ShimmerEffect
                      width="40%"
                      height="40px"
                      class="me-1"
                    ></ShimmerEffect>
                    <ShimmerEffect width="60%" height="40px"></ShimmerEffect>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.coupon-row {
  display: flex;
  gap: 10px; /* Adds space between the input and button */
  align-items: center; /* Aligns items vertically */
}

.coupon-input {
  flex: 1; /* Allows the input to grow and fill available space */
  min-width: 0; /* Prevents input from overflowing */
}

/* If you need responsive behavior */
@media (max-width: 576px) {
  .coupon-row {
    flex-direction: row;
  }
  .coupon-input {
    width: 100%;
  }
}

.text-decoration-line-through {
  text-decoration: line-through;
  opacity: 0.7;
}

/* For better spacing */
.d-flex.align-items-center {
  gap: 0.5rem;
}
</style>
