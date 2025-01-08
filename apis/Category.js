const prefix = "categories";

export const CategoryEndpoints = {
  parentcategorylist: `${prefix}/parent-category-list`,
  create: `${prefix}`,
   
}

export default {
  async parentcategorylist(config = {}) {
    return await ApiAuth().get(`${prefix}/parent-category-list`, config);
  },
  async create(payload = {}) {
    return await ApiAuth().post(`${prefix}`, payload, { formData: true });
  },
};
