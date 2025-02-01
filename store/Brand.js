import { defineStore, acceptHMRUpdate } from "pinia";
import { useCommonStore } from "~/store/Common";
import Brand from "../apis/Brand";

export const useBrandStore = defineStore("brand", () => {
  let brandList = ref([]);
  let brandAttribute = ref({
    id: null,
    name: null,
    image: null,
    image_url: null,
    description: null,
    status: 1,
  });

  let showModal = ref(false);
  function resetBrandAttribute() {
    brandAttribute.value = {
      id: null,
      name: null,
      image: null,
      image_url: null,
      description: null,
      status: 1,
    };
  }
  async function create(payload = {}) {
    try {
      let response = await Brand.create(payload);
      if (response.data.success) {
        await getBrandList();
        showModal.value = false;
        resetBrandAttribute();
        Toaster.success("Brand created succsfully");
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

  async function getBrandList() {
    try {
      let response = await Brand.list();
      if (response.status == 200) {
         brandList.value = response.data.data;
      }
    } catch (error) {
     
    }
  }

  async function deleteBrand(id) {
    try {
      let response = await Brand.delete(id);

      if (response.status == 201 || 200) {
        // console.log(response.data.data.data);
        getBrandList();
        Toaster.success("Brand deleted successfully");
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

  let brand = ref(null);
  async function showBrand(id) {
    try {
      let response = await Brand.show(id);

      if (response.status == 200) {
        Brand.value = response.data.data;
        brandAttribute.value.name = Brand.value.name;
        brandAttribute.value.status = Brand.value.status;

        brandAttribute.value.image_url = Brand.value.image_url;
        brandAttribute.value.description = Brand.value.description;
        brandAttribute.value.id = Brand.value.id;
        showModal.value = true;
      }
    } catch (error) {
      return false;
    }
  }

  async function update(id, payload = {}) {
    try {
      payload = {
        ...payload,
        _method: "PUT",
      };
      let response = await Brand.update(id, payload);
      if (response.status == 200) {
        await getBrandList();
        showModal.value = false;
        resetBrandAttribute();
        Toaster.success("Category updated successfully");
      }
    } catch (error) {
        if (error.response.status == 422) {
          // registrationFormError.value.type = 422;
          // registrationFormError.value.messages = error.response.data.errors;
        }
    }
  }

  return {
    create,
    getBrandList,
    deleteBrand,
    showBrand,
    update,
    resetBrandAttribute,
    brand,
    brandList,
    brandAttribute,
    showModal,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBrandStore, import.meta.hot));
}
