const prefix = "orders";

export const OrderEndpoints = { 
};

export default { 
  async getOrderList(config = {}) {
    return await ApiAuth().get(`/orders`, config);
  }, 
};
