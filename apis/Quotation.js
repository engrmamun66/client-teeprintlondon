const prefix = "quotations";

export const QuatationEndpoints = {
  create: `${prefix}`,
  getQuatationList: `${prefix}`,
  deleteQuatation: `${prefix}/\\d+`,
  showQuatation: `${prefix}/\\d+`,
  update: `${prefix}/\\d+`
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
  async show(id) {
    return await ApiAuth().get(`${prefix}/${id}`);
  },
  async update(id, payload = {}) {
    return await ApiAuth().post(`${prefix}/${id}`, payload, { formData: true });
  },
  async downloadFile(id){
    return await ApiAuth().get(`${prefix}/files/${id}/download` , {responseType: 'blob'});
  }
};
