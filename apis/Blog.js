const prefix = "posts";

export const BlogEndpoints = {
  create: `${prefix}`,
  getBlogList: `${prefix}`,
  deleteBlog: `${prefix}/\\d+`,
  showBlog: `${prefix}/\\d+`,
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
  async show(id) {
    return await ApiAuth().get(`${prefix}/${id}`);
  },
  async update(id, payload = {}) {
    return await ApiAuth().post(`${prefix}/${id}`, payload, { formData: true });
  },
  async publishedBlogs(payload = {}) {
    return await Api().get(`${prefix}/published/list`, payload, {
      formData: true,
    });
  },

  async getBlogBySlug(slug) {
    return await Api().get(`${prefix}/slug/${slug}`);
  },
};
