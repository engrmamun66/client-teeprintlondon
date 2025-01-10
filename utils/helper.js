
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
  delay: function (callback, time = 0, ...args) {
    setTimeout(() => {
      callback(...args);
    }, time);
  },
  clone: function (data, { remove = [], add = {}, only = [] } = {}) {
    data = JSON.parse(JSON.stringify(data));

    if (data && typeof data === "object" && Array.isArray(data) === false) {
      // Delete keys
      if (remove?.length && Array.isArray(remove)) {
        remove.forEach((key) => {
          if (data.hasOwnProperty(key)) {
            delete data[key];
          }
        });
      }

      // keep only
      if (only?.length && Array.isArray(only)) {
        const new_data = {};
        only.forEach((key) => {
          if (data.hasOwnProperty(key)) {
            new_data[key] = data[key];
          }
        });
        data = new_data;
      }

      return { ...data, ...add };
    } else {
      return data;
    }
  },

};

globalThis.H = H;

 