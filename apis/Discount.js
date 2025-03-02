const prefix = "discount";

export const DiscountEndpoints = {
  create: `/products/apply-discount`, 
};

export default {
  async create(payload = {}) {
    return await ApiAuth().post(`/products/apply-discount`, payload );
  }, 
};
