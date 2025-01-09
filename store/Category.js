import { defineStore, acceptHMRUpdate } from "pinia";
import { useCommonStore } from "~/store/Common";
import Category from "../apis/Category";

export const useCategorystore = defineStore("category", () => {
  let parentcategorylist = ref([]);
  let categoryList = ref([]);
  let categoryattribute = ref({
    id:null,
    name: null,
    is_parent: 1,
    parent_id: null,
    image: null,
    description: null,
    status: 1,
  });
  let showCategoryModal = ref(false);
  async function getParentcategorylist() {
    try {
      let response = await Category.parentcategorylist();
      console.log("adokcbakdcb",response.data.data);
        if (response.status == 200 ) {
          console.log("adokcbakdcb",response.data.data);
          parentcategorylist.value = response.data.data

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

  async function getCategories() {
    try {
      let response = await Category.getCategories();

      if (response.status == 201 || 200) {
        // console.log(response.data.data.data);
        categoryList.value = response.data.data.data;
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

  async function deleteCategory(id) {
    try {
      let response = await Category.deleteCategory(id);

      if (response.status == 201 || 200) {
        // console.log(response.data.data.data);
        getCategories();
        return true;
      }
    } catch (error) {
      //   if (error.response.status == 401) {
      //     registrationFormError.value.type = 401;
      //     registrationFormError.value.message = error.response.data.error;
      //   } else {
      //     registrationFormError.value.type = 422;
      //     registrationFormError.value.messages = error.response.data.errors;
      //   }
      return false;
    }
  }

  let category = ref(null);
  async function showCategory(id) {
    try {
      let response = await Category.showCategory(id);

      if (response.status == 201 || 200) {
        category.value = response.data.data
        categoryattribute.value.name = category.value.name

        showCategoryModal.value = true
        console.log("=======>>>>>>>>>>>>>>", response.data.data);
        
      }
    } catch (error) {
      //   if (error.response.status == 401) {
      //     registrationFormError.value.type = 401;
      //     registrationFormError.value.message = error.response.data.error;
      //   } else {
      //     registrationFormError.value.type = 422;
      //     registrationFormError.value.messages = error.response.data.errors;
      //   }
      return false;
    }
  }

  return {
    getParentcategorylist,
    create,
    getCategories,
    deleteCategory,
    showCategory,
    categoryList,
    parentcategorylist,
    category,
    categoryattribute,
    showCategoryModal
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCategorystore, import.meta.hot));
}
