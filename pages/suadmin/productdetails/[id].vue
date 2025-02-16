<template>
  <div>
    <div class="position-relative">
      <div class="d-flex justify-content-between">
        <page-content-header
        :title="'Product Details'"
        :links="[]"
        :buttons="[]"
        />
        <div>
          <a href="#" @click.prevent="navigateTo({name: 'admin_product_list'})" class="btn btn-success"> Back </a>
        </div>
       
      </div>
      <div class="cards-container">
        <!-- Product Details Card -->
        <div class="card product-details-card">
          <h3 class="product-details-heading" style="color: black">
            Product Details
          </h3>
          <form @submit.prevent>
            <!-- Name Field -->
            <div class="form-group">
              <label class="form-label"
                >Name <span class="required-star">*</span></label
              >
              <el-BaseInput
                type="text"
                v-model="productStore.product.name"
                :class="{ 'is-invalid': errors.name }"
              />
              <div v-if="errors.name != null" class="invalid-feedback">
                {{ errors.name }}
              </div>
            </div>

            <!-- Brand Dropdown -->
            <div class="form-group">
              <label class="form-label"
                >Brand <span class="required-star">*</span></label
              >
              <select
                class="form-control"
                v-model="productStore.product.brand_id"
                :class="{ 'is-invalid': errors.brand_id }"
              >
                <option disabled :value="null">- Select Brand -</option>
                <option
                  v-for="brand in brandStore.brandList"
                  :key="brand.id"
                  :value="brand.id"
                >
                  {{ brand.name }}
                </option>
              </select>
              <div v-if="errors.brand_id" class="invalid-feedback">
                {{ errors.brand_id }}
              </div>
            </div>

            <!-- Gender Dropdown -->
            <div class="form-group">
              <label class="form-label"
                >Gender <span class="required-star">*</span></label
              >
              <el-BaseSelectMultiple
                :label="null"
                v-model="productStore.selectedGender"
                :data="productStore.genderList"
                :class="{ 'is-invalid': errors.gender }"
              ></el-BaseSelectMultiple>

              <div v-if="errors.gender != null" class="invalid-feedback">
                {{ errors.gender }}
              </div>
            </div>

            <!-- Category Dropdown -->
            <div class="form-group">
              <label class="form-label"
                >Category <span class="required-star">*</span></label
              >
              <select
                class="form-control"
                v-model="productStore.product.category_id"
                @change="checkSubCategory"
                :class="{ 'is-invalid': errors.category_id }"
              >
                <option disabled :value="null">- Select Category -</option>
                <option
                  v-for="category in categoryStore.parentcategorylist"
                  :key="category.id"
                  :value="category.id"
                >
                  {{ category.name }}
                </option>
              </select>
              <div v-if="errors.category_id" class="invalid-feedback">
                {{ errors.category_id }}
              </div>
            </div>

            <!-- Sub Category Dropdown -->
            <div class="form-group" v-if="productStore.showSubCategory">
              <label class="form-label"
                >Sub Category <span class="required-star">*</span></label
              >
              <select
                class="form-control"
                v-model="productStore.product.subcategory_id"
                :class="{ 'is-invalid': errors.subcategory_id }"
              >
                <option disabled :value="null">- Select Sub Category -</option>
                <option
                  v-for="category in categoryStore.category.children"
                  :key="category.id"
                  :value="category.id"
                >
                  {{ category.name }}
                </option>
              </select>
              <div v-if="errors.subcategory_id" class="invalid-feedback">
                {{ errors.subcategory_id }}
              </div>
            </div>

            <!-- Color Dropdown -->
            <div class="form-group">
              <label class="form-label"
                >Color <span class="required-star">*</span></label
              >
              <el-BaseSelectMultiple
                v-model="productStore.selectedColor"
                :data="productStore.colorList"
                :label="null"
                :class="{ 'is-invalid': errors.color }"
              />
              <div v-if="errors.color" class="invalid-feedback">
                {{ errors.color }}
              </div>
            </div>

            <!-- Short Description -->
            <div class="form-group">
              <label class="form-label"
                >Short Description <span class="required-star">*</span></label
              >

              <Editor
                ref="editorShort"
                v-model="productStore.product.short_description"
                api-key="raz47c045ba5lv073s9m9i3psszrg7mhu8qlspsh6do9h3we"
                :init="{
                  height: 300,
                  menubar: false,
                  plugins: 'lists link image table code help',
                  toolbar:
                    'undo redo | formatselect | bold italic |  bullist numlist',
                }"
              />
              <div v-if="errors.short_description" class="invalid-feedback">
                {{ errors.short_description }}
              </div>
            </div>

            <!-- Long Description -->
            <div class="form-group">
              <label class="form-label">Long Description</label>
              <div>
                <Editor
                  ref="editorLong"
                  v-model="productStore.product.long_description"
                  api-key="raz47c045ba5lv073s9m9i3psszrg7mhu8qlspsh6do9h3we"
                  :init="{
                    height: 300,
                    menubar: false,
                    plugins: 'lists link image table code help',
                    toolbar:
                      'undo redo | formatselect | bold italic |  bullist numlist',
                  }"
                />
              </div>
            </div>

            <!-- Bulk Update Section -->
            <div class="bulk-update-section">
              <h3 class="additional-details-heading" style="color: black">
                Select Sizes
              </h3>
              <div class="size-selection">
                <div
                  @click="toggleAllSizes"
                  :class="{ selected: isAllSelected }"
                  class="size-card all-sizes"
                >
                  All Sizes
                </div>
                <div
                  v-for="size in productStore.product.sizes"
                  :key="size.name"
                  @click="toggleSizeSelection(size.name)"
                  :class="{ selected: selectedSizes.includes(size.name) }"
                  class="size-card"
                >
                  {{ size.name }}
                </div>
              </div>

              <h3 class="additional-details-heading mt-2" style="color: black">
                Bulk Update Sizes
              </h3>
              <div class="form-group">
                <label>Set Price for Selected Sizes:</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="bulkPrice"
                  min="0"
                  placeholder="Enter price"
                />
              </div>

              <div class="form-group">
                <label>Set Quantity for Selected Sizes:</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="bulkQuantity"
                  min="0"
                  placeholder="Enter quantity"
                />
              </div>

              <button
                type="button"
                class="btn btn-primary"
                @click="applyBulkUpdate"
              >
                Apply to Selected Sizes
              </button>
            </div>

            <div class="d-flex align-items-end gap-2">
              <div class="flex-grow-1">
                <label class="font-weight-bold">Discount:</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="productStore.product.discount"
                  min="0"
                  placeholder="Enter discount in (%)"
                />
              </div>
            </div>

            <!-- Sizes and Pricing Table -->
            <h3 class="additional-details-heading" style="color: black">
              Sizes and Pricing <span class="required-star">*</span>
            </h3>
            <table class="table">
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Price ($)</th>
                  <th>Quantity</th>
                  <th v-if="productStore.product.discount">
                    Price After Discount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="size in productStore.product.sizes" :key="size.name">
                  <td>{{ size.name }}</td>
                  <td>
                    <input
                      type="number"
                      class="form-control"
                      v-model="size.unit_price"
                      min="0"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      class="form-control"
                      v-model="size.quantity"
                      min="0"
                    />
                  </td>
                  <td v-if="productStore.product.discount">
                    <input
                      disabled
                      type="number"
                      class="form-control"
                      :value="calculateDiscountedPrice(size.unit_price)"
                      min="0"
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <!-- Footer Buttons -->
            <div class="ionic-card-footer justify-content-end">
              <button
                type="button"
                class="leap-btn leap-submit-btn me-2 m-1"
                @click="handleSubmit"
              >
                Update
                <BtnLoader
                  :show="H.isPendingAnyApi('Product:update')"
                  style="color: white"
                ></BtnLoader>
              </button>
              <button type="button" class="leap-btn leap-cancel-btn m-1">
                Cancel
              </button>
            </div>
          </form>
        </div>

        <!-- Image Upload Card -->
        <div class="card product-details-card">
          <h3 class="product-details-heading" style="color: black">
            Image Upload
          </h3>
          <div class="form-group">
            <label for="Upload File"
              >Upload your thumbnail image
              <span class="required-star">*</span></label
            >
            {{ errors.thumbnail_image }}
            <div v-if="errors.thumbnail_image != null" style="color: red">
              {{ errors.thumbnail_image }}
            </div>
            <Admin-DropFiles
              v-model="productStore.product.thumbnail_image"
              :singleImage="true"
            />
          </div>
          <div class="form-group">
            <label for="Upload File"
              >Upload product image <span class="required-star">*</span></label
            >
            <Admin-DropFiles
              v-model="productStore.product.images"
              @removeFile="handleFileRemoval"
            />
            <div v-if="errors.images" style="color: red">
              {{ errors.images }}
            </div>
          </div>

          <div class="card calculator-card" style="margin-top: 65rem">
            <h3 class="calculator-heading" style="color: black">
              Percentage Calculator
            </h3>

            <!-- X% of Y Calculation -->
            <div class="form-group">
              <label style="font-weight: bold">What is X% of Y?</label>
              <input
                type="number"
                v-model="percentage"
                placeholder="Enter percentage (X)"
              />
              <input
                type="number"
                v-model="number"
                placeholder="Enter number (Y)"
              />

              <input
                type="text"
                :value="percentageResult"
                placeholder="Result will appear here"
                readonly
              />
            </div>

            <!-- What percentage is X of Y Calculation -->
            <div class="form-group">
              <label style="font-weight: bold"
                >What percentage is X of Y?</label
              >
              <input
                type="number"
                v-model="fromNumber"
                placeholder="Enter number (X)"
              />
              <input
                type="number"
                v-model="toNumber"
                placeholder="Enter number (Y)"
              />

              <input
                type="text"
                :value="percentageChangeResult"
                placeholder="Result will appear here"
                readonly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useProductStore } from "~/store/Product";
import { useCategorystore } from "~/store/Category";
import { useBrandStore } from "~/store/Brand";
import { useColorStore } from "~/store/Color";
import Editor from "@tinymce/tinymce-vue";
const colorStore = useColorStore();
const brandStore = useBrandStore();
const productStore = useProductStore();
const categoryStore = useCategorystore();
// Use ref for the product object
const route = useRoute();
const selectedSizes = ref([]);
const bulkPrice = ref(null);
const bulkQuantity = ref(null);
const uploadedImages = ref([]);
const editorLong = ref();
const editorShort = ref();
const id = route.params.id;
const errors = ref({
  name: "",
  brand_id: "",
  gender: "",
  category_id: "",
  subcategory_id: "",
  color: "",
  short_description: "",
  thumbnail_image: "",
  images: "",
});

const setContent = (editorRef, content) => {
  if (editorRef.value?.editor) {
    editorRef.value.editor.setContent(content);
  }
};
function validateForm() {
  let isValid = true;

  // Reset errors
  errors.value = {
    name: "",
    brand_id: "",
    gender: "",
    category_id: "",
    subcategory_id: "",
    color: "",
    short_description: "",
    thumbnail_image: "",
    images: "",
  };

  // Validate Name
  if (!productStore.product.name) {
    errors.value.name = "Name is required.";
    isValid = false;
  }

  // Validate Brand
  if (!productStore.product.brand_id) {
    errors.value.brand_id = "Brand is required.";
    isValid = false;
  }

  // Validate Gender
  if (!productStore.selectedGender.length) {
    errors.value.gender = "Gender is required.";
    isValid = false;
  }

  // Validate Category
  if (!productStore.product.category_id) {
    errors.value.category_id = "Category is required.";
    isValid = false;
  }

  // Validate Sub Category (if applicable)
  if (productStore.showSubCategory && !productStore.product.subcategory_id) {
    errors.value.subcategory_id = "Sub Category is required.";
    isValid = false;
  }

  // Validate Color
  if (!productStore.selectedColor.length) {
    errors.value.color = "Color is required.";
    isValid = false;
  }

  // Validate Short Description
  if (!productStore.product.short_description) {
    errors.value.short_description = "Short Description is required.";
    isValid = false;
  }

  if (!productStore.product.thumbnail_image) {
    console.log("=-=-", productStore.product.thumbnail_image);
    errors.value.thumbnail_image = "Thumbnail image is required";
    console.log("=-=-", errors.value.thumbnail_image);
    isValid = false;
  }
  if (
    !productStore.product.images ||
    productStore.product.images.length === 0
  ) {
    errors.value.images = "At least one product image is required";
    isValid = false;
  }

  return isValid;
}

// Function to hide the status bar

const hideElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    element.style.display = "none";
  }
};
onMounted(async () => {
  await productStore.getGenders();
  // Usage

  await categoryStore.getParentcategorylist();
  await brandStore.getBrandList();
  await productStore.getColorList();
  await productStore.showProduct(id);

  if (productStore.product.subcategory_id) {
    checkSubCategory();
  }
  setContent(editorLong, productStore.product.long_description);
  setContent(editorShort, productStore.product.short_description);

  // productStore.selectedGender = productStore.product.genders
});

const percentage = ref(null); // For X% of Y
const number = ref(null); // For X% of Y
const fromNumber = ref(null); // For percentage change
const toNumber = ref(null); // For percentage change

// Compute the result of "X% of Y"
const percentageResult = computed(() => {
  if (!percentage.value || !number.value) return "";
  const result = (percentage.value / 100) * number.value;
  return `${number.value}% of ${percentage.value}  is ${result}`;
});

// Compute the result of "What percentage is X of Y"
const percentageChangeResult = computed(() => {
  if (!fromNumber.value || !toNumber.value) return "";
  const result = ((toNumber.value / fromNumber.value) * 100).toFixed(2);
  return `${toNumber.value} is ${result}% of ${fromNumber.value}`;
});

const isAllSelected = computed(() => {
  try {
    return selectedSizes.value.length === productStore.product.sizes.length;
  } catch (error) {
    return false
  }
});

const toggleAllSizes = () => {
  if (isAllSelected.value) {
    selectedSizes.value = [];
  } else {
    selectedSizes.value = productStore.product.sizes.map((s) => s.name);
  }
};

// Function to calculate the discounted price
const calculateDiscountedPrice = (price) => {
  const discount = productStore.product.discount || 0;
  return (price - (price * discount) / 100).toFixed(2);
};

const handleFileRemoval = (removedFile) => {
  // console.log("Removed File:", removedFile[0].id);
  // console.log("Removed File:", removedFile[0]);
  if (removedFile[0] instanceof File) {
    // console.log("This is a File object:", removedFile[0]);
  } else {
    console.log("This is a regular object:", removedFile[0]);
    productStore.deleteImage(removedFile[0].id);
  }
  // Handle the removed file as needed, e.g., updating the uploadedFiles list
};

function validateSizes() {
  return productStore.product.sizes.some(
    (size) => size.unit_price > 0 || size.quantity > 0
  );
}

async function handleSubmit() {
  if (!validateSizes()) {
    Toaster.error(
      "At least one size must have a unit price or quantity greater than 0."
    );
    return;
  }
  // Validate fields
  if (!validateForm()) {
    Toaster.error("Please fill all the required field");
  }
  if (!validateForm()) return;
  let uploadedFiles = ref([]);
  productStore.product.images.forEach((image) => {
    if (image instanceof File) {
      console.log("This is a File object:", image);
      uploadedFiles.value.push(image);
    }
  });

  if (uploadedFiles.value.length != 0) {
    productStore.product.images.length = 0;
    productStore.product.images = [...uploadedFiles.value];
    uploadedFiles.value.length = 0;
  } else {
    productStore.product.images.length = 0;
  }
  if (typeof productStore.product.thumbnail_image == "string") {
    productStore.product.thumbnail_image = null;
  } else {
    productStore.product.thumbnail_image =
      productStore.product.thumbnail_image[0];
  }

  productStore.product.genders = productStore.selectedGender.map(
    (gender) => gender.id
  );
  productStore.product.colors = productStore.selectedColor.map(
    (color) => color.id
  );

  // Helper function to create the payload
  const createProductPayload = (product) => ({
    ...product,
    sizes: JSON.stringify(product.sizes), // Custom serialization for sizes
    genders: JSON.stringify(product.genders), // Stringify genders
    colors: JSON.stringify(product.colors), // Stringify colors
  });

  // Destructure and modify the product if subcategory_id exists
  if (productStore.product.subcategory_id != null) {
    productStore.product.category_id = productStore.product.subcategory_id;
    const { subcategory_id, ...productWithoutSubcategory } =
      productStore.product;
    productStore.product = productWithoutSubcategory; // Update the product object
  }
  productStore.product.min_unit_price = Math.min(
    ...productStore.product.sizes.map((size) => size.unit_price)
  );

  // Create the payload
  const productPayload = createProductPayload(productStore.product);

  // Submit the payload
  await productStore.update(id, productPayload);
}

async function checkSubCategory() {
  // console.log("+====", productStore.product.category);
  await categoryStore.showCategory(productStore.product.category_id);
  console.log("*(*(*(*)))", categoryStore.category.children?.length);
  if (categoryStore.category.children?.length != 0) {
    productStore.showSubCategory = true;
  } else {
    productStore.showSubCategory = false;
  }
}

const toggleSizeSelection = (sizeName) => {
  if (selectedSizes.value.includes(sizeName)) {
    selectedSizes.value = selectedSizes.value.filter(
      (size) => size !== sizeName
    );
  } else {
    selectedSizes.value.push(sizeName);
  }
};

const applyBulkUpdate = () => {
  if (selectedSizes.value.length == 0) {
    Toaster.error("Please select at least one size before updating.");
    return;
  }
  productStore.product.sizes.forEach((size) => {
    if (selectedSizes.value.includes(size.name)) {
      if (bulkPrice.value !== null) size.unit_price = bulkPrice.value;
      if (bulkQuantity.value !== null) size.quantity = bulkQuantity.value;
    }
  });

  // Clear bulk inputs and unselect all sizes
  bulkPrice.value = null;
  bulkQuantity.value = null;
  selectedSizes.value = [];
  Toaster.success("Price or Quantity updated");
};

const handleImageUpload = (event) => {
  const files = event.target.files;
  for (const file of files) {
    const reader = new FileReader();
    reader.onload = (e) => {
      uploadedImages.value.push(e.target.result);
    };
    reader.readAsDataURL(file);
  }
};

const removeImage = (index) => {
  uploadedImages.value.splice(index, 1);
};
</script>

<style scoped>
.calculator-card {
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.calculator-heading {
  margin-bottom: 15px;
}

.form-group {
  margin-bottom: 10px;
}

input {
  display: block;
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;
}

button {
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.cards-container {
  display: flex;
  gap: 20px;
  max-width: 1200px;
  margin: 20px auto;
}

.cards-container {
  display: flex;
  gap: 20px;
  max-width: 1200px;
  margin: 20px auto;
}

.required-star {
  color: red;
  margin-left: 4px;
}

.is-invalid {
  border-color: red;
}

.invalid-feedback {
  color: red;
  font-size: 0.875em;
}

.card {
  flex: 1;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
}

.product-details-heading,
.additional-details-heading {
  margin-bottom: 15px;
  font-size: 1.5rem;
  font-weight: bold;
}

.form-group {
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.table th,
.table td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

.bulk-update-section {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.size-selection {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.size-card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 40px;
  border: 2px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  background-color: white;
  transition: background-color 0.2s ease-in-out;
}

.size-card.selected {
  background-color: black;
  color: white;
  border-color: black;
}

.image-upload-section {
  margin-top: 20px;
}

.file-input {
  margin-bottom: 20px;
}

.image-preview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
}

.image-preview {
  position: relative;
  width: 100px;
  height: 100px;
  border: 1px solid #ddd;
  border-radius: 6px;
  overflow: hidden;
}

.image-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.remove-image-btn {
  position: absolute;
  top: 2px;
  right: 2px;
  background: red;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 20px;
  height: 20px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.no-images-text {
  color: #888;
  font-style: italic;
}
.font-weight-bold {
  font-weight: bold;
}
</style>
