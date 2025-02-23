import { defineStore, acceptHMRUpdate } from "pinia";
import { useCommonStore } from "~/store/Common";
import Product from "../apis/Product.js";
import Color from "../apis/Color.js";
export const useProductStore = defineStore("product", () => {
  let genderList = ref([]);
  let colorAttribute = ref({
    id: null,
    name: null,
    status: 1,
  });
  let selectedGender = ref(null);
  let selectedColor = ref(null);
  let showSubCategory = ref(false);
  let bulkPrice = ref(null);
  let bulkQuantity = ref(null);
  const product = ref({
    name: "",
    price: 0,
    brand_id: null, // New property
    category_id: null, // New property
    subcategory_id: null,
    genders: [],
    images: [],
    thumbnail_image: null,
    min_unit_price: null,
    short_description: "A comfortable and stylish classic t-shirt.",
    long_description:
      "This classic t-shirt is made from 100% cotton, ensuring a soft and breathable fit. Perfect for casual wear or as a base layer.",
    colors: [],
    discount: null,

    sizes: [
      { id: 1, name: "XS", unit_price: 0, quantity: 0 },
      { id: 2, name: "S", unit_price: 0, quantity: 0 },
      { id: 3, name: "M", unit_price: 0, quantity: 0 },
      { id: 4, name: "L", unit_price: 0, quantity: 0 },
      { id: 5, name: "XL", unit_price: 0, quantity: 0 },
      { id: 6, name: "XXL", unit_price: 0, quantity: 0 },
      { id: 7, name: "XXXL", unit_price: 0, quantity: 0 },
    ],
    status: 1,
  });

  const cloned_product = H.clone(product.value);

  function clearProduct() {
    Object.keys(product.value).forEach((key) => {
      switch (key) {
        case "id":
          delete cloned_product.value;
          break;
        case "sizes":
          cloned_product.value["sizes"].forEach((item) => {
            item.unit_price = 0;
            item.quantity = 0;
          });
          break;

        default:
          product.value[key] = cloned_product.value?.[key] || null;
          break;
      }
    });
  }

  let showModal = ref(false);
  function resetBrandAttribute() {
    colorAttribute.value = {
      id: null,
      name: null,
      status: 1,
    };
  }

  async function getGenders() {
    try {
      let response = await Product.gender();
      if (response.status == 200) {
        genderList.value = response.data.data;
        console.log("*)(*&(&(*&", genderList.value);
      }
    } catch (error) {}
  }

  const resetProduct = () => {
    (selectedColor.value = null),
      (selectedGender.value = null),
      (bulkPrice.value = null),
      (bulkQuantity.value = null);
    product.value = {
      name: null,
      price: 25,
      brand_id: null,
      category_id: null,
      subcategory_id: null,
      genders: [],
      images: [],
      thumbnail_image: null,
      min_unit_price: null,
      short_description: "A comfortable and stylish classic t-shirt.",
      long_description:
        "This classic t-shirt is made from 100% cotton, ensuring a soft and breathable fit. Perfect for casual wear or as a base layer.",
      colors: [],
      discount: null,
      sizes: [
        { id: 1, name: "XS", unit_price: 0, quantity: 0 },
        { id: 2, name: "S", unit_price: 0, quantity: 0 },
        { id: 3, name: "M", unit_price: 0, quantity: 0 },
        { id: 4, name: "L", unit_price: 0, quantity: 0 },
        { id: 5, name: "XL", unit_price: 0, quantity: 0 },
        { id: 6, name: "XXL", unit_price: 0, quantity: 0 },
        { id: 7, name: "XXXL", unit_price: 0, quantity: 0 },
      ],
      status: 1,
    };
  };

  async function create(payload = {}) {
    try {
      console.log("payload", payload);
      let response = await Product.create(payload);
      if (response.data.success) {
        await getColorList();
        showModal.value = false;
        resetProduct();
        resetBrandAttribute();
        Toaster.success("Product added succsfully");
        resetProduct();
        navigateTo({ name: "admin_product_list" });
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
  let colorList = ref([]);
  async function getColorList() {
    try {
      let response = await Color.list();
      if (response.status == 200) {
        let tempColor = ref([]);
        tempColor.value = response.data.data;
        tempColor.value.forEach((color) => {
          if (
            color.status == 1 &&
            !colorList.value.some((c) => c.id == color.id)
          ) {
            colorList.value.push(color);
          }
        });
        or.value.length = 0;
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

  // function mapProductFromResponse(response) {
  //   return {
  //     id: response.data.data.id,
  //     name: response.data.data.name,
  //     price: 25, // Default or fetch from response
  //     brand_id: response.data.data.brand_id,
  //     genders: response.data.data.genders,
  //     images: response.data.data.images,
  //     thumbnail_image: response.data.data.thumbnail_image_url,
  //     short_description: response.data.data.short_description,
  //     long_description: response.data.data.long_description,
  //     colors: response.data.data.colors,
  //     sku: response.data.data.sku,
  //     status: response.data.data.status,
  //     sizes: response.data.data.sizes.map((responseSize) => {
  //       // Find the corresponding size in the product's sizes array
  //       const existingSize = product.value.sizes.find(
  //         (size) => size.id == responseSize.pivot.size_id
  //       );

  //       // If a matching size is found, update its properties
  //       if (existingSize) {
  //         return {
  //           ...existingSize,
  //           unit_price: parseFloat(responseSize.unit_price), // Convert string to number
  //           quantity: responseSize.quantity,
  //         };
  //       }

  //       // If no matching size is found, return the response size as-is
  //       return {
  //         id: responseSize.size_id,
  //         name: responseSize.name || `Size ${responseSize.size_id}`, // Default name if not provided
  //         unit_price: parseFloat(responseSize.unit_price),
  //         quantity: responseSize.quantity,
  //       };
  //     }),
  //     category_id:
  //       response.data.data.category.parent != null
  //         ? response.data.data.category.parent.id
  //         : response.data.data.category.id,
  //     subcategory_id:
  //       response.data.data.category.parent != null
  //         ? response.data.data.category.id
  //         : null,
  //     discount: response.data.data.discount,
  //   };
  // }

  function mapProductFromResponse(response) {
    return {
      id: response.data.data.id,
      name: response.data.data.name,
      price: 25, // Default or fetch from response
      brand_id: response.data.data.brand_id,
      genders: response.data.data.genders,
      images: response.data.data.images,
      thumbnail_image: response.data.data.thumbnail_image_url,
      short_description: response.data.data.short_description,
      long_description: response.data.data.long_description,
      colors: response.data.data.colors,
      sku: response.data.data.sku,
      status: response.data.data.status,
      sizes: response.data.data.sizes.map((responseSize) => {
        // Find the corresponding size in the product's sizes array
        const existingSize = product.value.sizes.find(
          (size) => size.id == responseSize.id
        );

        // If a matching size is found, update its properties
        if (existingSize) {
          return {
            ...existingSize,
            unit_price: parseFloat(responseSize.pivot.unit_price), // Convert string to number
            quantity: responseSize.pivot.quantity,
          };
        }

        // If no matching size is found, return the response size with necessary properties
        return {
          id: responseSize.id,
          name: responseSize.name || `Size ${responseSize.id}`, // Default name if not provided
          unit_price: parseFloat(responseSize.pivot.unit_price),
          quantity: responseSize.pivot.quantity,
        };
      }),
      category_id:
        response.data.data.category.parent != null
          ? response.data.data.category.parent.id
          : response.data.data.category.id,
      subcategory_id:
        response.data.data.category.parent != null
          ? response.data.data.category.id
          : null,
      discount: response.data.data.discount,
    };
  }

  async function showProduct(id) {
    try {
      selectedGender.value = null;
      let response = await Product.show(id);
      // console.log("==========>>>>>>", response.data.data);

      if (response.status === 200) {
        product.value = mapProductFromResponse(response); // Use the helper function

        selectedGender.value = product.value.genders
          .map((gender) => genderList.value.find((g) => g.id === gender.id))
          .filter((gender) => gender !== undefined); // Filtering out unmatched genders
        selectedColor.value = product.value.colors.map((color) =>
          colorList.value.find((c) => c.id === color.id)
        );

        showModal.value = true; // Show the modal
      }
    } catch (error) {
      console.error("Error fetching product:", error);
      return false;
    }
  }

  async function deleteImage(id) {
    try {
      let response = await Product.deleteImage(id);
      if (response.status == 200) {
        Toaster.success("Image Deleted");
      }
    } catch (error) {}
  }

  async function update(id, payload = {}) {
    try {
      payload = {
        ...payload,
        _method: "PUT",
      };
      let response = await Product.update(id, payload);
      if (response.status == 200) {
        showModal.value = false;
        await showProduct(id);
        Toaster.success("Product updated successfully");
      }
    } catch (error) {
      if (error.response.status == 422) {
        // registrationFormError.value.type = 422;
        // registrationFormError.value.messages = error.response.data.errors;
      }
    }
  }
  let productList = ref([]);
  async function getProductList() {
    try {
      let response = await Product.list();
      if (response.status == 200) {
        productList.value = response.data.data.data;
      }
    } catch (error) {}
  }

  async function deleteProduct(id) {
    try {
      let response = await Product.delete(id);
      if (response.status == 200) {
        await getProductList();
        Toaster.success("Product is deleted");
        return true;
      }
    } catch (error) {
      return false;
    }
  }

  return {
    create,
    getColorList,
    deleteBrand,
    showProduct,
    update,
    resetBrandAttribute,
    getGenders,
    deleteImage,
    getProductList,
    deleteProduct,
    resetProduct,
    genderList,
    colorAttribute,
    showModal,
    product,
    selectedGender,
    selectedColor,
    colorList,
    showSubCategory,
    productList,
    bulkPrice,
    bulkQuantity,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot));
}
