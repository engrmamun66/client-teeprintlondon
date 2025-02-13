import { defineStore, acceptHMRUpdate } from "pinia";
import { useCommonStore } from "~/store/Common";
import Category from "../apis/Category";

export const useCategorystore = defineStore("category", () => {
  let parentcategorylist = ref([]);
  let categoryList = ref([]);
  let categoryattribute = ref({
    id: null,
    name: null,
    is_parent: 1,
    parent_id: null,
    image: null,
    image_url: null,
    description: null,
    types: null,
    status: 1,
  });

  let showCategoryModal = ref(false);
  function resetCategoryAttribute() {
    categoryattribute.value = {
      id: null,
      name: null,
      is_parent: 1,
      parent_id: null,
      image: null,
      image_url: null,
      description: null,
      types: null,
      status: 1,
    };
    selectedTypes.value = null;
  }
  async function getParentcategorylist() {
    try {
      let response = await Category.parentCategoryList();

      if (response.status == 200) {
        parentcategorylist.value = response.data.data;
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
      // console.log(response.data);
      if (response.data.success) {
        await getCategories();
        showCategoryModal.value = false;
        resetCategoryAttribute();
        Toaster.success("Category Created");
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
        Toaster.success("Category Deleted");
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

      if (response.status == 200) {
        category.value = response.data.data;
        categoryattribute.value.name = category.value.name;
        categoryattribute.value.status = category.value.status;
        categoryattribute.value.types = category.value.type;
        categoryattribute.value.image_url = category.value.image_url;
        categoryattribute.value.description = category.value.description;
        categoryattribute.value.id = category.value.id;
        selectedTypes.value = response.data.data.types;

        // console.log("adkcbkadcbkadcbkjadbc", categoryattribute.value.description)
        if (category.value.parent_id) {
          categoryattribute.value.parent_id = category.value.parent_id;
          // console.log("akdcnbkadbckjadbckbadckbadc", category.value.parent_id);
          categoryattribute.value.is_parent = 0;
        }
        showCategoryModal.value = true;
        // console.log("=======>>>>>>>>>>>>>>", response.data.data);
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

  async function update(id, payload = {}) {
    try {
      payload = {
        ...payload,

        _method: "PUT",
      };
      let response = await Category.update(id, payload);
      console.log(response.data);
      if (response.status == 200) {
        await getCategories();
        showCategoryModal.value = false;
        resetCategoryAttribute();
        Toaster.success("Category Updated");
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
  let types = ref([]);
  let selectedTypes = ref(null);
  async function getTypes() {
    try {
      let response = await Category.getTypes();
      console.log(response.data);
      types.value = response.data;
    } catch (error) {}
  }

  return {
    getParentcategorylist,
    create,
    getCategories,
    deleteCategory,
    showCategory,
    update,
    resetCategoryAttribute,
    getTypes,
    types,
    categoryList,
    parentcategorylist,
    category,
    categoryattribute,
    showCategoryModal,
    types,
    selectedTypes,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCategorystore, import.meta.hot));
}
