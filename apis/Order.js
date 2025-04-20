const prefix = "orders";

export const OrderEndpoints = { 
};

export default { 
  async getOrderList(config = {}) {
    return await ApiAuth().get(`/orders`, config);
  }, 
  async getOrderDetails(order_number, config = {}) {
    return await ApiAuth().get(`/orders/${order_number}`, config);
  }, 
  
 
  async updateOrderStatus( payload, config = {}) {
    return await ApiAuth().post(`/update-order-status`, payload, config);
  }, 
  
  async orderDelete(id){
    return await ApiAuth().delete(`${prefix}/${id}`);
  }

};
