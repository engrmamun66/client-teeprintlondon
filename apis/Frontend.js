const prefix = "";



export const FrontendEndpoints = {
   
}


export default {
  async test(config=null) {
    return await Api().get(`/test`, config);
  }, 

};
