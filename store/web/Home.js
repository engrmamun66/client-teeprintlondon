import { defineStore, acceptHMRUpdate } from "pinia";
import FrontendApi from "../apis/web/Frontend";

export const useHomeStore = defineStore("homeStore", () => {

  let menus = ref([]);
  async function getTypewiseCategoryList(){
    try {

      FrontendApi.getTypewiseCategoryList().then(response => {
        console.log('response', response.status, response.data);
      })
      
    } catch (error) {
      
    }
  }


    
  return { 
    menus, 
    getTypewiseCategoryList,

  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useHomeStore, import.meta.hot));
}
