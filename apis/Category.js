const prefix = "categories";

export const CategoryEndpoints = {
  parentCategoryList: `${prefix}/parent-category-list`, // Get list of parent categories
  create: `${prefix}`, // Create a new category
  getCategories: `${prefix}`, // Get all categories
  deleteCategory: `${prefix}/\\d+`, // Delete a category by ID
  showCategory: `${prefix}/\\d+`, // Show category details by ID
  update: `${prefix}/\\d+`, // Update category by ID
};

export default {
  async parentCategoryList(config = {}) {
    return await ApiAuth().get(CategoryEndpoints.parentCategoryList, config);
  },
  async create(payload = {}) {
    return await ApiAuth().post(CategoryEndpoints.create, payload, {
      formData: true,
    });
  },
  async getCategories(config = {}) {
    return await ApiAuth().get(CategoryEndpoints.getCategories, config);
  },
  async deleteCategory(id) {
    return await ApiAuth().delete(`${prefix}/${id}`);
  },
  async showCategory(id) {
    return await ApiAuth().get(`${prefix}/${id}`);
  },
  async update(id, payload = {}) {
    return await ApiAuth().post(`${prefix}/${id}`, payload, { formData: true });
  },
  async getTypes(id) {
    return await ApiAuth().get(`types`);
  },
  
};
