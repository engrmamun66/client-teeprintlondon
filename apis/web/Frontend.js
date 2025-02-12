const prefix = "";



export const FrontendEndpoints = {
  submitQuote: '/quotations',
}


export default {
  async submitQuote(payload, config={formData: true}) {
    return await Api().post(`/quotations`, payload, config);
  }, 
  async getTypewiseCategoryList() {
    return await Api().get(`/type-wise-category-list`);
  }, 
 
};
