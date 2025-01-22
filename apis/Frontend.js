const prefix = "";



export const FrontendEndpoints = {
  submitQuote: '/quotations',
}


export default {
  async submitQuote(payload, config={}) {
    return await Api().post(`/quotations`, payload, config);
  }, 

};
