import { defineStore, acceptHMRUpdate } from "pinia";
import { useCommonStore } from "~/store/Common";
import Quatation from "../apis/Quotation.js";

export const useQuatationStore = defineStore("quatation", () => {
  let quatationList = ref([]);
  let quatationAttribute = ref({
    id: null,
    full_name: null,
    status: 1,
    delivery_date: null,
    email: null,
    phone: null,
    requirements: null,
    status: 1,
    reference_id: null,
  });

  let showModal = ref(false);
  function resetBrandAttribute() {
    quatationAttribute.value = {
      id: null,
      name: null,
      status: 1,
    };
  }
  async function create(payload = {}) {
    try {
      let response = await Quatation.create(payload);
      if (response.data.success) {
        await getColorList();
        showModal.value = false;
        resetBrandAttribute();
        Toaster.success("Quatation created succsfully");
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

  async function getQuatationList() {
    try {
      let response = await Quatation.list();
      if (response.status == 200) {
        quatationList.value = response.data.data.data;
      }
    } catch (error) {}
  }

  async function deleteQuatation(id) {
    try {
      let response = await Quatation.delete(id);

      if (response.status == 201 || 200) {
        // console.log(response.data.data.data);
        getColorList();
        Toaster.success("Quatation deleted successfully");
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
  async function showQuatation(id) {
    try {
      let response = await Quatation.show(id);

      if (response.status == 200) {
        Quatation.value = response.data.data;
        console.log(Quatation.value);
        quatationAttribute.value.id = Quatation.value.id;
        quatationAttribute.value.full_name = Quatation.value.full_name;
        quatationAttribute.value.status = Quatation.value.status;
        quatationAttribute.value.delivery_date = Quatation.value.delivery_date;
        quatationAttribute.value.email = Quatation.value.email;
        quatationAttribute.value.phone = Quatation.value.phone;
        quatationAttribute.value.requirements = Quatation.value.requirements;
        quatationAttribute.value.reference_id = Quatation.value.uuid; // Assuming uuid maps to reference_id
        quatationAttribute.value.type_of_service =
          Quatation.value.type_of_service;
        quatationAttribute.value.created_at = Quatation.value.created_at; // Optional
        quatationAttribute.value.updated_at = Quatation.value.updated_at; // Optional
        quatationAttribute.value.files = Quatation.value.files; // Assuming files need to be copied
        // quatationAttribute.value.name = Quatation.value.name;
        // quatationAttribute.value.status = Quatation.value.status;

        // quatationAttribute.value.image_url = Quatation.value.image_url;
        // quatationAttribute.value.description = Quatation.value.description;
        // quatationAttribute.value.id = Quatation.value.id;
        showModal.value = true;
      }
    } catch (error) {
      return false;
    }
  }

  async function update(id, payload = {}) {
    try {
      payload = {
         status:2,
        _method: "PUT",
      };
      id = 1
      let response = await Quatation.update(id, payload);
      if (response.status == 200) {
        await getColorList();
        showModal.value = false;
        resetBrandAttribute();
        Toaster.success("Quatation updated successfully");
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
    getQuatationList,
    deleteQuatation,
    showQuatation,
    update,
    resetBrandAttribute,
    color,
    quatationList,
    quatationAttribute,
    showModal,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useQuatationStore, import.meta.hot));
}
