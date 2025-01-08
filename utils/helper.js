
import axios from "axios";
import momentJs from "moment";
import isPendingAnyApi from "~/apis/AllEndPoints";
import objectValidation from "./object-validation/validator"; 

export const log = (...args) => console.log(...args);
export const dir = (data) => console.dir(data);
export const warn = (data) => console.warn(data); 

export const FORMATS = {
  date: "MM-DD-YYYY",
  dateTime: "MM-DD-YYYYY hh:mm A",
};

export let moment = momentJs;
globalThis.moment = moment;

export const H = {
  // With Field Validation
  objectValidation,
  hasError: function (errors) {
    if (errors instanceof Object) {
      useNuxtApp().$emit("v-validation");
      return Object.keys(errors).length;
    }
  }, 
  isPendingAnyApi: isPendingAnyApi,
  url: (path = "") => {
      return (
        (localStorage.getItem("slug")
          ? "/" + localStorage.getItem("slug")
          : "") + path
      );
  },

};

globalThis.H = H;

 