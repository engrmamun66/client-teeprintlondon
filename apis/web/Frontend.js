const prefix = "";



export const FrontendEndpoints = {
  submitQuote: '/quotations',
  searchProduct: '/search-products',
  getProducts: '/filter-products',
  getProductDetails: '/product-details-by-slug/\\d+',
  getAdditionalData: '/additional-data-for-product-filtering',
}


export default {
  async submitQuote(payload, config={formData: true}) {
    return await Api().post(`/quotations`, payload, config);
  }, 
  async getTypewiseCategoryList() {
    return await Api().get(`/type-wise-category-list`);
  }, 
  async searchProduct(search = null) {
    return await Api().get(`/search-products`, { params: { search } });
  }, 
  async getProducts(paload={}, params={}) {
    /**
     * 
     * 
      category_slug: 'category-slug',
      category_ids"": [1, 2],
      brand_ids"": [3, 4],
      size_ids"": [5, 6],
      gender_ids"": [7, 8]
     */
    return await Api().post(`/filter-products`, paload, {params});
  }, 
  async getProductDetails(slug, params={}) { 
    return await Api().get(`/product-details-by-slug/${slug}`, {params});
  }, 
  async getAdditionalData() { 
    return await Api().get(`/additional-data-for-product-filtering`);
  }, 
 
};
