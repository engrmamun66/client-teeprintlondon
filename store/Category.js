import { defineStore, acceptHMRUpdate } from "pinia";
import { useCommonStore } from "~/store/Common";
import Category from "../apis/Category";

export const useCategorystore = defineStore("category", () => {
  let parentcategorylists = ref(null);
  let categoryList =ref([])
  async function getParentcategorylist() {
    try {
      let response = await Category.parentcategorylist();
      console.log(response.data);
      //   if (response.status == 201) {
      //     navigateTo("/login");
      //   }
    } catch (error) {
      //   if (error.response.status == 401) {
      //     registrationFormError.value.type = 401;
      //     registrationFormError.value.message = error.response.data.error;
      //   } else {
      //     registrationFormError.value.type = 422;
      //     registrationFormError.value.messages = error.response.data.errors;
      //   }
    }
  }

  async function create(payload = {}) {
    try {
      let response = await Category.create(payload);
      console.log(response.data);
      //   if (response.status == 201) {
      //     navigateTo("/login");
      //   }
    } catch (error) {
      //   if (error.response.status == 401) {
      //     registrationFormError.value.type = 401;
      //     registrationFormError.value.message = error.response.data.error;
      //   } else {
      //     registrationFormError.value.type = 422;
      //     registrationFormError.value.messages = error.response.data.errors;
      //   }
    }
  }

  async function getCategories(){
    console.log("============================================ getCategories");
    try {
        let response = await Category.getCategories();
       
          if (response.status == 201 || 200) {
            // console.log(response.data.data.data);
            categoryList.value = response.data.data.data
          }
      } catch (error) {
        //   if (error.response.status == 401) {
        //     registrationFormError.value.type = 401;
        //     registrationFormError.value.message = error.response.data.error;
        //   } else {
        //     registrationFormError.value.type = 422;
        //     registrationFormError.value.messages = error.response.data.errors;
        //   }
      }
  }

  return {
    getParentcategorylist,
    create,
    getCategories,
    categoryList,
    parentcategorylists,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCategorystore, import.meta.hot));
}
