import { defineStore, acceptHMRUpdate } from "pinia";
import { useCommonStore } from "~/store/Common";
import Coupon from "../apis/Coupon.js";

export const useCouponStore = defineStore("coupon", () => {
  let couponList = ref([]);
  let couponAttribute = ref({
    id:null,
    code: 'code',          // required, string, max 20 chars, unique
    discount_value: 0,   // required, numeric, min 0.01
    start_date: null,    // required, date
    end_date: null,      // required, date, must be after start_date
    is_active: true      // boolean
});

  let showModal = ref(false);
  const resetCouponAttributes = () => {
    couponAttribute.value = {
      code: null,
      discount_value: 0,
      start_date: null,
      end_date: null,
      is_active: true
    };
  };
  async function create(payload = {}) {
    try {
      let response = await Coupon.create(payload);
      if (response.data.success) {
        await getCouponList();
        showModal.value = false;
        resetCouponAttributes();
        Toaster.success("Coupon created succsfully");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.data) {
        const errors = error.response.data.data;
        Object.keys(errors).forEach(key => {
          errors[key].forEach(message => {

            Toaster.error(message)
          });
        });
      } else {
        Toaster.error('An unexpected error occurred.');
      }
      // if(error.response.data.errors.name[0] != null){
      //   Toaster.error(error.response.data.errors.name[0])
      // }else{
      //   Toaster.error("There was an error")
      // }
      //   if (error.response.status == 401) {
      //     registrationFormError.value.type = 401;
      //     registrationFormError.value.message = error.response.data.error;
      //   } else {
      //     registrationFormError.value.type = 422;
      //     registrationFormError.value.messages = error.response.data.errors;
      //   }
    }
  }

  async function getCouponList(page=1) {
    try {
      let response = await Coupon.list({ params: { page, per_page: 50 } });
      if (response.status == 200) {
        couponList.value = response.data.data.data;

      }
    } catch (error) {}
  }

  async function deleteCoupon(id) {
    try {
      let response = await Coupon.delete(id);

      if (response.status == 201 || 200) {

        getCouponList();
        Toaster.success("Coupon deleted successfully");
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
  async function showCoupon(id) {
    try {
      let response = await Coupon.show(id);

      if (response.status == 200) {
        couponAttribute.value = {
          id:response.data.data.id,
          code: response.data.data.code,
          discount_value: parseFloat(response.data.data.discount_value),
          start_date: formatDate(response.data.data.start_date),
          end_date: formatDate(response.data.data.end_date),
          is_active: response.data.data.is_active
        };

        showModal.value = true;
      }
    } catch (error) {
 
      return false;
    }
  }

  // Format function
function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

  async function update(id, payload = {}) {
    try {
      payload = {
        ...payload,
        _method: "PUT",
      };
      let response = await Coupon.update(id, payload);
      if (response.status == 200) {
        await getCouponList();
        showModal.value = false;
        resetCouponAttributes();
        Toaster.success("Coupon updated successfully");
      }
    } catch (error) {

      if (error.response.status == 422) {

        if (error.response && error.response.data && error.response.data.data) {
          const errors = error.response.data.data;
          Object.keys(errors).forEach(key => {
            errors[key].forEach(message => {
  
              Toaster.error(message)
            });
          });
        } else {
          Toaster.error('An unexpected error occurred.');
        }

        // registrationFormError.value.type = 422;
        // registrationFormError.value.messages = error.response.data.errors;
      }
    }
  }

  return {
    create,
    getCouponList,
    deleteCoupon,
    showCoupon,
    update,
    resetCouponAttributes,
    color,
    couponList,
    couponAttribute,
    showModal,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCouponStore, import.meta.hot));
}
