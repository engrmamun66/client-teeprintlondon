import { defineStore, acceptHMRUpdate } from "pinia";
import { useCommonStore } from "~/store/Common";
import Color from "../apis/Color.js";

export const useColorStore = defineStore("color", () => {
  let colorList = ref([]);
  let colorAttribute = ref({
    id: null,
    name: null,
    status: 1,
  });

  let showModal = ref(false);
  function resetBrandAttribute() {
    colorAttribute.value = {
      id: null,
      name: null,
      status: 1,
    };
  }
  async function create(payload = {}) {
    try {
      let response = await Color.create(payload);
      if (response.data.success) {
        await getColorList();
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

  async function getColorList() {
    try {
      let response = await Color.list();
      if (response.status == 200) {
        colorList.value = response.data.data;
      }
    } catch (error) {}
  }

  async function deleteBrand(id) {
    try {
      let response = await Color.delete(id);

      if (response.status == 201 || 200) {
        // console.log(response.data.data.data);
        getColorList();
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
  async function showColor(id) {
    try {
      let response = await Color.show(id);

      if (response.status == 200) {
        Color.value = response.data.data;
        colorAttribute.value.name = Color.value.name;
        colorAttribute.value.status = Color.value.status;

        colorAttribute.value.image_url = Color.value.image_url;
        colorAttribute.value.description = Color.value.description;
        colorAttribute.value.id = Color.value.id;
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
        await getColorList();
        showModal.value = false;
        resetBrandAttribute();
        Toaster.success("Color updated successfully");
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
    getColorList,
    deleteBrand,
    showColor,
    update,
    resetBrandAttribute,
    color,
    colorList,
    colorAttribute,
    showModal,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useColorStore, import.meta.hot));
}
