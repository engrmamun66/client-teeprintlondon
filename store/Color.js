import { defineStore, acceptHMRUpdate } from "pinia";
import { useCommonStore } from "~/store/Common";
import Color from "../apis/Color";

export const useColorStore = defineStore("color", () => {
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
      let response = await Color.create(payload);
      if (response.data.success) {
        await getBrandList();
        showModal.value = false;
        resetBrandAttribute();
        Toaster.success("Color created succsfully");
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
      let response = await Color.list();
      if (response.status == 200) {
        brandList.value = response.data.data.data;
      }
    } catch (error) {}
  }

  async function deleteBrand(id) {
    try {
      let response = await Color.delete(id);

      if (response.status == 201 || 200) {
        // console.log(response.data.data.data);
        getBrandList();
        Toaster.success("Color deleted successfully");
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

  let color = ref(null);
  async function showBrand(id) {
    try {
      let response = await Color.show(id);

      if (response.status == 200) {
        Color.value = response.data.data;
        brandAttribute.value.name = Color.value.name;
        brandAttribute.value.status = Color.value.status;

        brandAttribute.value.image_url = Color.value.image_url;
        brandAttribute.value.description = Color.value.description;
        brandAttribute.value.id = Color.value.id;
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
      let response = await Color.update(id, payload);
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
    color,
    brandList,
    brandAttribute,
    showModal,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useColorStore, import.meta.hot));
}
