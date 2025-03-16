const prefix = "products";

export const PaypalEndpoints = {
  
};

export default {
  async createPayment(payload = {}) {
    return await ApiAuth().post(`/create-payment`, payload);
  },
  async paymentSuccess(config = {}) {
    return await ApiAuth().get(`/payment-success`, config);
  },
};
