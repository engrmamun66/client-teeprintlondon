const prefix = "products";

export const PaypalEndpoints = {
  
};

export default {
  async createPayment(payload = {}) {
    return await Api().post(`/create-payment`, payload);
  },
  async paymentSuccess(config = {}) {
    return await Api().get(`/payment-success`, config);
  },
};
