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
    note:null,
    reference_id: null,
    files:[]
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
        await getQuatationList();
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
        await getQuatationList()
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

        quatationAttribute.value.note = Quatation.value.note
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
      // payload = {
      //    status:2,
      //   _method: "PUT",
      // };
      // id = 1
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

  async function downloadFile(id){
    let response = await Quatation.downloadFile(id);
        // Create a temporary URL for the downloaded file
        const url = window.URL.createObjectURL(new Blob([response.data], { type: response.headers['content-type'] }));
        const link = document.createElement('a');
        link.href = url;

        // Extract filename from Content-Disposition header
        const contentDisposition = response.headers['content-disposition'];
        const fileName = contentDisposition
          ? contentDisposition.split('filename=')[1]?.replace(/["']/g, '') // Extract filename
          : 'downloaded-file'; // Fallback filename

        link.setAttribute('download', fileName);
        document.body.appendChild(link);

        // Trigger the download
        link.click();

        // Clean up
        link.remove();
        window.URL.revokeObjectURL(url);
  }

  return {
    create,
    getQuatationList,
    deleteQuatation,
    showQuatation,
    update,
    resetBrandAttribute,
    downloadFile,
    color,
    quatationList,
    quatationAttribute,
    showModal,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useQuatationStore, import.meta.hot));
}
