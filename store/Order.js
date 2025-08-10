import { defineStore, acceptHMRUpdate } from "pinia";

import OrderApi from "../apis/Order.js";
export const useOrderStore = defineStore("orderStore", () => {
  let paginateData = ref(null);
  let orders = ref([]);

  async function getOrderList(payload) {
    try {
      orders.value.length = 0;
      // let params = {...payload}
      let response = await OrderApi.getOrderList(payload);
      if (Response.isOk(response, { toaster: false })) {
        paginateData.value = Response.parseData(response);
        orders.value = Response.parseData(response).data;
      }
    } catch (error) {
      console.log("error---", error);
    }
  }

  let orderDetails = ref(null);
  async function getOrderDetails(order_number) {
    try {
      orderDetails.value = null
      let response = await OrderApi.getOrderDetails(order_number);
      if (Response.isOk(response, { toaster: false })) {
        orderDetails.value = Response.parseData(response);
      }
    } catch (error) {
      console.log("error---", error);
    }
  }

  async function updateOrderStatus(payload) {
    try {
      let response = await OrderApi.updateOrderStatus(payload);
      if (Response.isOk(response, { toaster: false })) {
        Toaster.success(" Order Status Changed");
      }
    } catch (error) {
      Toaster.error("There was an Error in updating the status");
    }
  }

  async function orderDelete(id) {
    try {
      let response = await OrderApi.orderDelete(id);
      if (Response.isOk(response, { toaster: false })) {
        Toaster.success(" Order Deleted Successfully");
        getOrderList();
      }
    } catch (error) {
      Toaster.error("There was an Error in updating the status");
    }
  }

  let coupon = ref(null)
  let discount = ref(0)
  let couponSuccess = ref(false)
  async function checkCoupon(payload) {

    try {
      let response = await OrderApi.checkCoupon(payload);
      coupon.value = response.data.data.coupon
      discount.value = response.data.data.discount
      if (Response.isOk(response, { toaster: false })) {
        couponSuccess.value = true
        Toaster.success(" Copon Applied");
      }
    } catch (error) {
      couponSuccess.value = false
      Toaster.error("Invalid or expired coupon code");
    }
  }

  return {
    paginateData,
    orders,
    getOrderList,
    orderDetails,
    coupon,
    couponSuccess,
    getOrderDetails,
    updateOrderStatus,
    orderDelete,
    checkCoupon,
    discount
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useOrderStore, import.meta.hot));
}
