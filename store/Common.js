import { defineStore, acceptHMRUpdate } from "pinia";
import moment from "moment";
export const useCommonStore = defineStore("common", () => {
  let toastMessages = ref([]);
  function toaster(type, message = "") {
    var message = {
      message: message,
      type: type,
      time: new Date().getTime() / 1000,
    };
    toastMessages.value.push(message);
    setTimeout(() => {
      toastMessages.value.forEach((item, index) => {
        if (item.time == message.time) {
          toastMessages.value.splice(index, 1);
        }
      });
    }, 3000);
  }
  function closeToaster(index) {
    toastMessages.value.splice(index, 1);
  }

  const messages = ref([]);
  const modals = ref({
    confirm: { show: false },
    global: { show: false },
  });
  const showImagePreviewer = ref(false);

  function formatDate(date, format = "YYYY-MM-DD") {
    if (date) return moment(date).format(format);
  }

  function firstDateOfMonth(year, month, format = "YYYY-MM-DD") {
    return moment([year, month - 1]).format(format);
  }

  function lastDateOfMonth(year, month, format = "YYYY-MM-DD") {
    const startDate = moment([year, month - 1]).format(format);
    return moment(startDate).clone().endOf("month").format(format);
  }

  function closeToaster(index) {
    messages.value.splice(index, 1);
  }

  function toggleConfirmModal() {
    modals.value.confirm.show = !modals.value.confirm.show;
  }

  function toggleGlobalModal() {
    modals.value.global.show = !modals.value.global.show;
  }

  function autoToaster(response, showToaster = true) {
    if (response.status === 200) {
      const { status, data } = response.data;
      if (
        status === "success" &&
        data &&
        showToaster &&
        typeof data === "string"
      ) {
        toaster("success", data);
      } else if (status === "error" && response.data.message) {
        toaster("warning", response.data.message);
      }
    }
    return response.status === 200 && response.data.status === "success";
  }

  return {
    toastMessages,
    messages,
    modals,
    showImagePreviewer,
    closeToaster,
    formatDate,
    firstDateOfMonth,
    lastDateOfMonth,
    toaster,
    closeToaster,
    toggleConfirmModal,
    toggleGlobalModal,
    autoToaster,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCommonStore, import.meta.hot));
}
