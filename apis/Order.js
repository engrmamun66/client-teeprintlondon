const prefix = "orders";

export const OrderEndpoints = {
  getOrderList: `${prefix}`,
  getOrderDetails: (order_number) => `${prefix}/${order_number}`,
  updateOrderStatus: `${prefix}/update-status`,
  deleteOrder: (id) => `${prefix}/${id}`,
  createOrder: `${prefix}/create`,
  exportOrders: `${prefix}/export`,
  searchOrders: `${prefix}/search`,
};

export default { 

  async getOrderList(params={},config={}) {
    return await ApiAuth().get(`/orders`,  { params },config );
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
