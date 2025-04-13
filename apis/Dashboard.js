const prefix = "";

export const DashboardEndpoints = {
  create: `/dashboard-data`, 
};

export default {
  
  async getCards(config = {}) {
    return await ApiAuth().get(`/dashboard-data`, config);
  }, 
};
