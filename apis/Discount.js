const prefix = "discount";

export const DiscountEndpoints = {
  create: `/apply-discount`, 
  getDiscountLogs: `/discount-logs`, 
};

export default {
  async create(payload = {}) {
    return await ApiAuth().post(`/apply-discount`, payload );
  }, 
  async getDiscountLogs(payload = {}) {
    return await ApiAuth().get(`/discount-logs`, payload );
  }, 
};
