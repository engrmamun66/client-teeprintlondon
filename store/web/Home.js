import { defineStore, acceptHMRUpdate } from "pinia";
import FrontendApi from "../apis/web/Frontend";

export const useHomeStore = defineStore("homeStore", () => {

  let menus = ref(useCookie('menus').value || []);
  async function getTypewiseCategoryList(){
    try {

      FrontendApi.getTypewiseCategoryList().then(response => {
        if(response.data.success){
          menus.value = response.data.data || [] 
          useCookie('menus').value = menus.value
          
        }
      })
      
    } catch (error) {
      
    }
  }

  let searchedProducts = ref([])
  async function searchProduct(search = null){
    try {

      FrontendApi.searchProduct(search).then(response => {
        if(response.data.success){
          searchedProducts.value = response.data.data || []  
          
        }
      })
      
    } catch (error) {
      
    }
  }


    
  return { 
    menus, 
    getTypewiseCategoryList,

    searchedProducts,
    searchProduct,

  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useHomeStore, import.meta.hot));
}
