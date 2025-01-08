import { Api } from "../utils/axios";
const prefix = "categories";

export default {
  async parentcategorylist(config = {}) {
    return await Api().get(`${prefix}/parent-category-list`, config);
  },
  async create(payload = {}) {
    return await Api().post(`${prefix}`, payload, { formData: true });
  },
};
