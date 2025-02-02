const prefix = "products";

export const ProductEndpoints = {
  create: `${prefix}`,
  getColorList: `${prefix}`,
  deleteColor: `${prefix}/\\d+`,
  showColor: `${prefix}/\\d+`,
  update: `${prefix}/\\d+`,
};

export default {
  async create(payload = {}) {
    return await ApiAuth().post(`${prefix}`, payload, {
      formData: true,
    });
  },
  async list(config = {}) {
    return await ApiAuth().get(`${prefix}`, config);
  },
  async delete(id) {
    return await ApiAuth().delete(`${prefix}/${id}`);
  },
  async deleteImage(id) {
    return await ApiAuth().get(`${prefix}/image/${id}/delete`);
  },
  async show(id) {
    return await ApiAuth().get(`${prefix}/${id}`);
  },
  async update(id, payload = {}) {
    return await ApiAuth().post(`${prefix}/${id}`, payload, { formData: true });
  },
  async gender(config = {}) {
    return await ApiAuth().get(`/genders`, config);
  },
};
