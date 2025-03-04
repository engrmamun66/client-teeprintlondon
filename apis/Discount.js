const prefix = "discount";

export const DiscountEndpoints = {
  create: `/apply-discount`, 
};

export default {
  async create(payload = {}) {
    return await ApiAuth().post(`/apply-discount`, payload );
  }, 
};
