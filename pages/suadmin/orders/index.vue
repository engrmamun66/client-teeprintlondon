<template>
  <div class="position-relative">
    <LoaderApi v-if="false" />
    <page-content-header
      :title="'Dashboard'"
      :links="[{ title: 'Orders', href: '/suadmin/orders' }]"
      :buttons="[]"
    />
    <admin-card :showHeader="true" :title="'Order List'">
      <template v-slot:header-buttons> </template>

      <div class="row">
        <table
          id="example"
          class="table table-striped dataTable"
          style="width: 100%"
          aria-describedby="example_info"
        >
          <thead>
            <tr>
              <th>Orde&nbsp;No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="odd" v-for="(order, index) in orderStore.orders" :key="index" >
              <td>
                <div class="px-2">
                  <nuxt-link :to="`/suadmin/orders/${order.order_number}`">{{ order?.order_number }}</nuxt-link> 
                </div>
              </td>

              <td>
                <div class="px-2">
                  <p>
                    <nuxt-link :to="`/suadmin/orders/${order.order_number}`">
                      {{ [order?.customer_first_name, order?.customer_last_name].filter(Boolean).join(' ') }}
                    </nuxt-link> 
                  </p>
                </div>
              </td>
              <td>
                <div class="px-2">
                  <p>
                    <span>{{ order?.customer_email }}</span>
                  </p>
                </div>
              </td>
              <td>
                <div class="px-2">
                  <p>
                    <span>{{ order?.customer_phone }}</span>
                  </p>
                </div>
              </td>
              <td>
                <div class="px-2">
                  <p>
                    <span>
                      {{
                        order?.order_status_id == 1
                          ? "Pending"
                          : order?.order_status_id == 2
                          ? "Processing"
                          : order?.order_status_id == 3
                          ? "Completed"
                          : order?.order_status_id == 4
                          ? "Canceled"
                          : "Unknown"
                      }}
                    </span>
                  </p>
                </div>
              </td>
              <td>
                <ul class="d-flex justify-content-evenly td-actions">
                  <li class="d-flex justify-content-evenly">
                    <!-- <p tooltip="Delete" flow="up">
                      <i-las
                        t="trash"
                        class="size-sm cp"
                        @click="
                          showConfirmation = true;
                          brandId = order.id;
                        "
                      />
                    </p> -->
                    <nuxt-link :to="`/suadmin/orders/${order.order_number}`">
                      <p tooltip="View" flow="up">
                        <i class="las la-eye size-sm cp"></i>
                      </p>
                    </nuxt-link>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="d-flex justify-content-center">
            <Pagination v-model="orderStore.paginateData" @jumpToPage="(page) => orderStore.getOrderList({page})" ></Pagination>
          </div>


        <Modal-Confirm
          v-if="showConfirmation"
          v-model="showConfirmation"
          :skipAutoClose="false"
          @yes="
            async () => {
              let isDeleted = await quatationStore.deleteQuatation(brandId);
              if (isDeleted) {
                showConfirmation = false;
                brandId = null;
              }
            }
          "
        >
          <template v-if="showConfirmation">
            <p class="modal-message">Are you sure?</p></template
          >
        </Modal-Confirm>
      </div>
    </admin-card>
  </div>
</template>

<script setup>
import { useOrderStore } from "~/store/Order.js";
const orderStore = useOrderStore();

definePageMeta({
    keepalive: false,
    middleware: ["auth"],
    key: (route) => route.fullPath,
    name: 'order_list',
  });


let showConfirmation = ref(false)
 
onBeforeMount(async () => {
  await orderStore.getOrderList() 
}); 

onMounted(async() => {
  await orderStore.getOrderList() 
})


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
</style>
