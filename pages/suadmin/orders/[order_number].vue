<template>
  <div class="position-relative">
    <LoaderApi v-if="false" />
    <page-content-header
      :title="'Dashboard'"
      :links="[
        { title: 'Orders', href: '/suadmin/orders' },
        { title: `Order: #${useRoute().params.order_number}` },
      ]"
      :buttons="[]"
    />

    <!-- <button @click="log(orderStore.orderDetails)">TEST</button> -->

    <div class="quotation-container">
      <!-- Left Card: Quotation Details -->
      <div class="card quotation-details-card">
        <div class="d-flex justify-content-between align-content-center mb-3">
          <h3 class="additional-details-heading m-0">Order Details</h3>
          <template v-if="orderStore.orderDetails?.order_status_id">
            <el-BaseSelect
              v-model="orderStore.orderDetails.order_status_id"
              :data="globalData.orderStatusList"
              :option1="false"
              @change="orderStatusChange()"
            >
            </el-BaseSelect>
          </template>
        </div>

        <form v-if="orderStore.orderDetails">
          <el-BaseInput
            type="text"
            label="Order Number"
            :disabled="true"
            style="margin-top: 10px"
            v-model="orderStore.orderDetails.order_number"
          />
          <el-BaseInput
            type="text"
            label="Full Name"
            :disabled="true"
            style="margin-top: 10px"
            v-model="orderStore.orderDetails.customer_first_name"
          />
          <el-BaseInput
            type="text"
            label="Email"
            style="margin-top: 10px"
            :disabled="true"
            v-model="orderStore.orderDetails.customer_email"
          />
          <el-BaseInput
            type="text"
            label="Phone"
            style="margin-top: 10px"
            :disabled="true"
            v-model="orderStore.orderDetails.customer_phone"
          />

          <el-BaseInput
            type="text"
            label="Delivery Type"
            style="margin-top: 10px"
            :disabled="true"
            :value="orderStore.orderDetails?.delivery_type?.name"
          />
          <el-BaseInput
            type="text"
            label="Order Date"
            style="margin-top: 10px"
            :disabled="true"
            v-model="orderStore.orderDetails.created_at"
          />
          <!-- <div class="form-group">
            <label>Customer Requirement</label>
            <textarea
              class="form-control"
              v-model="orderStore.orderDetails.notes"
              disabled
              rows="3"
              placeholder="Write your requirements E.g. product type, quantity, size, artwork placement area etc."
            ></textarea>
          </div> -->
          <!-- <div class="form-group">
            <label class="form-label">Status</label>
            <div class="select-optionbox">
              <select
                class="form-control"
                v-model="orderStore.orderDetails.order_status_id"
                required
              >
                <option disabled value="null">- Select Status -</option>
                <option value="1">Pending</option>
                <option value="2">Processing</option>
                <option value="3">Completed</option>
                <option value="4">Canceled</option>
              </select>
            </div>
          </div> -->
          <!-- <div class="form-group">
            <label>Admin Notes</label>
            <textarea
              class="form-control"
              v-model="orderStore.orderDetails.notes"
              rows="3"
              placeholder="Write your requirements E.g. product type, quantity, size, artwork placement area etc."
            ></textarea>
          </div> -->
          <div class="ionic-card-footer justify-content-end">
            <button
              type="button"
              class="leap-btn leap-cancel-btn m-1 px-4"
              @click="navigateTo({ path: '/suadmin/orders' })"
            >
              Back
            </button>
          </div>
        </form>
        <form v-else>
          <el-BaseInput
            type="text"
            label="Order Number"
            :disabled="true"
            style="margin-top: 10px"
            :value="'loading...'"
          />
          <el-BaseInput
            type="text"
            label="Full Name"
            :disabled="true"
            style="margin-top: 10px"
            :value="'loading...'"
          />
          <el-BaseInput
            type="text"
            label="Email"
            style="margin-top: 10px"
            :disabled="true"
            :value="'loading...'"
          />
          <el-BaseInput
            type="text"
            label="Phone"
            style="margin-top: 10px"
            :disabled="true"
            :value="'loading...'"
          />
          <el-BaseInput
            type="text"
            label="Delivery Date"
            style="margin-top: 10px"
            :disabled="true"
            :value="'loading...'"
          />
          <el-BaseInput
            type="text"
            label="Order Date"
            style="margin-top: 10px"
            :disabled="true"
            :value="'loading...'"
          />
          <div class="form-group">
            <label>Customer Requirement</label>
            <textarea
              class="form-control"
              :value="'loading...'"
              disabled
              rows="3"
              placeholder="loading..."
            ></textarea>
          </div>
          <div class="form-group">
            <label class="form-label">Status</label>
            <div class="select-optionbox">
              <select class="form-control" :value="'loading...'" required>
                <option disabled value="null">- Select Status -</option>
                <option value="1">Pending</option>
                <option value="2">Processing</option>
                <option value="3">Completed</option>
                <option value="4">Canceled</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label>Admin Notes</label>
            <textarea
              class="form-control"
              :value="'loading...'"
              rows="3"
              placeholder="Write your requirements E.g. product type, quantity, size, artwork placement area etc."
            ></textarea>
          </div>
          <div class="ionic-card-footer justify-content-end">
            <button
              type="button"
              class="leap-btn leap-submit-btn me-2 m-1"
              @click="handleSubmit"
            >
              Submit
              <BtnLoader
                :show="H.isPendingAnyApi('Quatation:update')"
                color="black"
              />
            </button>
            <button
              type="button"
              class="leap-btn leap-cancel-btn m-1"
              @click="colorStore.showModal = !colorStore.showModal"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      <!-- Right Card: Additional Details -->
      <div class="card additional-details-card">
        <div class="d-flex justify-content-between align-content-center mb-3">
          <h3 class="additional-details-heading m-0">Order Items</h3>
          <button
            v-if="orderStore.orderDetails"
            type="button"
            class="leap-btn leap-submit-btn me-2 m-1"
            tooltip="Payment Status"
          >
            {{ $ucfirst(orderStore.orderDetails?.payment_status) }}
          </button>
        </div>
        <div>
          <table class="table">
            <tbody>
              <template
                v-for="(item, index) in orderStore.orderDetails?.order_items ||
                []"
              >
                <tr>
                  <td>
                    <img
                      :src="item.product.thumbnail_image_url"
                      alt="Alternative Image"
                    />
                  </td>
                  <td>
                    <div class="d-flex flex-column">
                      <div>{{ item.product?.name }}</div>
                      <div>
                        <small>
                          {{
                            [
                              item.product?.brand?.name,
                              item.product?.colors?.[0]?.name,
                              item.product?.sizes?.[0]?.name,
                            ]
                              .filter(Boolean)
                              .join(", ")
                          }}
                        </small>
                      </div>
                    </div>
                  </td>
                  <td>
                    {{ item.quantity }}&nbsp;x&nbsp;{{
                      item.discounted_unit_price ?? item.unit_price
                    }}
                  </td>
                  <td>
                    {{ H.formatPrice(item.total_price) }}
                  </td>
                </tr>
                <tr v-if="item?.note != null">
                  <td>
                    <textarea
                      :value="item?.note"
                      disabled
                      style="
                        height: 100px;
                        position: relative;

                        width: 200px;
                        overflow-y: auto;
                        resize: none;
                        font-family: inherit;
                      "
                    />
                  </td>
                </tr>
              </template>

              <tr>
                <td colspan="3">Subtotal</td>
                <td>{{ H.formatPrice(orderStore.orderDetails?.subtotal) }}</td>
              </tr>
              <tr>
                <td colspan="3">Shipping Cost</td>
                <td>
                  {{ H.formatPrice(orderStore.orderDetails?.shipping_cost) }}
                </td>
              </tr>
              <tr>
                <th colspan="3">Total Amount</th>
                <td>{{ H.formatPrice(orderStore.orderDetails?.total) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useOrderStore } from "~/store/Order.js";
const orderStore = useOrderStore();

definePageMeta({
  keepalive: false,
  middleware: ["auth"],
  key: (route) => route.fullPath,
  name: "order_details",
});

let { order_number } = useRoute().params;

async function orderStatusChange() {

  let payload = ref({
    order_id: orderStore.orderDetails?.id,
    order_status_id: orderStore.orderDetails.order_status_id,
  });
  await orderStore.updateOrderStatus(payload.value);
  await orderStore.getOrderDetails(order_number);
}

onMounted(async () => {
  await orderStore.getOrderDetails(order_number);
});
</script>
<style scoped>
fieldset {
  border: 1px solid #9c9393 !important;
}
.modal-message {
  color: black;
  font-family: "Georgia", serif;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

fieldset {
  border: 1px solid #9c9393 !important;
}
.quotation-details-heading {
  color: black;
  margin-top: 2px;
}

.quotation-container {
  display: flex;
  gap: 20px;
}
.card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex: 1;
}
.quotation-details-card {
  flex: 1; /* Wider card */
}
.additional-details-card {
  flex: 1; /* Narrower card */
}
.quotation-details-heading,
.additional-details-heading {
  color: black;
  font-size: 18px;
  margin-bottom: 20px;
}
</style>
