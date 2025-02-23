
import axios from "axios";
import momentJs from "moment";
import isPendingAnyApi from "~/apis/AllEndPoints";
import objectValidation from "./object-validation/validator"; 

export const REVIEW_ELEMENT = `
  <script defer async src='https://cdn.trustindex.io/loader.js?d0b99e741d5c5237cc365589e66'></script>
  <script async custom-element='amp-iframe' src='https://cdn.ampproject.org/v0/amp-iframe-0.1.js'></script>   
`
export const APPNAME = 'Teeprint'
export const log = (...args) => console.log(...args);
export const dir = (data) => console.dir(data);
export const warn = (data) => console.warn(data); 
export const PLACEHOLDER_IMAGE = '/img/placeholder-image.jpg'

export const FORMATS = {
  date: "MM-DD-YYYY",
  dateTime: "MM-DD-YYYYY hh:mm A",
  DB_DATE: "YYYY-MM-DD",
};

export let moment = momentJs;
globalThis.moment = moment;
export const CURRENCY = '£'

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
  formatPrice: function(amount){
    let price = parseFloat(String(amount || 0)).toFixed(2)
    return `${CURRENCY} ${price}`
  },
  toggleLoopItem: function (data, index, key = "isShow") {
    if (!data) return;
    data?.forEach((item, i) => {
      if (i == index) {
        item[key] = !(item[key] ?? false);
      } else {
        item[key] = false;
      }
    });
  },
  localStorage: function (name) {
    return {
      get value() {
        if (typeof process == "undefined") {
          var process = { client: true };
        }
        if (process.client && globalThis.localStorage) {
          let data = globalThis.localStorage.getItem(name);
          if (
            (data && data?.startsWith("{") && data?.endsWith("}")) ||
            (data?.startsWith("[") && data?.endsWith("]"))
          ) {
            data = JSON.parse(data);
          }
          return data;
        }
      },
      set value(value) {
        if (typeof process == "undefined") {
          var process = { client: true };
        }
        if (process.client && globalThis.localStorage) {
          if(value === null || value === ''){
            localStorage.removeItem(name)
          } else {
            if (value && typeof value === "object") {
              value = JSON.stringify(value);
            }
            localStorage.setItem(name, value);
          }
        }
      },
    };
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
  debounce: function (func, wait) {
    
    /** How to use this
     * let dbounceSearch = H.debounce(componentStore.getComponentList, 1500);
     * then call this dbounceSearch(param1, param2, ...)
     */

    let timeout;
    return function (...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  },
  getDeliveryOptions: function(){

    /**
     * 
      Standard delivery : 5.49 pound (4 working Days)
      Next Day Delivery : 10.49 pound
      Same Day Delivery : 15.00 (Same Day Delivery) --- if before
     */

    let options = [
      {
        id: 1,
        name: 'Standard delivery',
        price: 5.49,
        delivery_date: moment().add(4, 'day').format(FORMATS.date),
      },
      {
        id: 2,
        name: 'Next Day Delivery', 
        price: 10.49,
        delivery_date: moment().add(1, 'day').format(FORMATS.date),
      },      
    ]

    if(1){
      options.push({
        id: 2,
        name: 'Same Day Pickup', 
        price: 0.00,
        delivery_date: moment().format(FORMATS.date),
      })
    }

    return options

  },

};

globalThis.H = H;

 