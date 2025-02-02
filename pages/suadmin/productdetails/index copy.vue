<template>
  <div>
    <div class="position-relative">
      <page-content-header
        :title="'Product Details'"
        :links="[]"
        :buttons="[]"
      />
      <div class="cards-container">
        <!-- Product Details Card -->
        <div class="card product-details-card">
          <h3 class="product-details-heading" style="color: black">
            Product Details
          </h3>
          <form @submit.prevent>
            <el-BaseInput type="text" label="Name" v-model="product.name" />
            <!-- Brand Dropdown -->
            <div class="form-group">
              <label class="form-label">Brand</label>
              <select class="form-control" v-model="product.brand_id">
                <option disabled :value="null">- Select Brand -</option>
                <option
                  v-for="brand in brandStore.brandList"
                  :key="brand.id"
                  :value="brand.id"
                >
                  {{ brand.name }}
                </option>
              </select>
            </div>

            <!-- Gender Dropdown -->
            <div class="form-group">
              <el-BaseSelectMultiple
                label="Gender"
                v-model="selectedItem"
                :data="productStore.genderList"
              ></el-BaseSelectMultiple>
            </div>

            <!-- Category Dropdown -->
            <div class="form-group">
              <label class="form-label">Category</label>
              <select
                class="form-control"
                v-model="product.category_id"
                @change="checkSubCategory"
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
            </div>

            <!-- Category Dropdown -->
            <div class="form-group" v-if="showSubCategory">
              <label class="form-label">Sub Category</label>
              <select class="form-control" v-model="product.subcategory_id">
                <option disabled :value="null">- Select Sub Category -</option>
                <option
                  v-for="category in categoryStore.category.children"
                  :key="category.id"
                  :value="category.id"
                >
                  {{ category.name }}
                </option>
              </select>
            </div>

            <div class="form-group">
              <label>Short Description</label>
              <textarea
                class="form-control"
                v-model="product.short_description"
                rows="3"
                placeholder="Short description of the product"
              ></textarea>
            </div>

            <div class="form-group">
              <label>Long Description</label>
              <div>
                <!-- Wrap RedactorEditor in a single root element -->
                <RedactorEditor
                  v-model="product.long_description"
                  ref="editor"
                  class="mt-4"
                ></RedactorEditor>
              </div>
            </div>

            <div class="bulk-update-section">
              <h3 class="additional-details-heading" style="color: black">
                Select Sizes
              </h3>
              <div class="size-selection">
                <div
                  v-for="size in product.sizes"
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

            <h3 class="additional-details-heading" style="color: black">
              Sizes and Pricing
            </h3>
            <table class="table">
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Price ($)</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="size in product.sizes" :key="size.name">
                  <td>{{ size.name }}</td>
                  <td>
                    <input
                      type="number"
                      class="form-control"
                      v-model="size.price"
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
                </tr>
              </tbody>
            </table>

            <div class="ionic-card-footer justify-content-end">
              <button
                type="button"
                class="leap-btn leap-submit-btn me-2 m-1"
                @click="handleSubmit"
              >
                Submit
                <!-- <BtnLoader
                :show="H.isPendingAnyApi('Category:create|Category:update')"
                color="black"
              /> -->
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
          <div class="image-upload-section">
            <input
              type="file"
              multiple
              accept="image/*"
              @change="handleImageUpload"
              class="file-input"
            />
            <div v-if="uploadedImages.length" class="image-preview-grid">
              <div
                v-for="(image, index) in uploadedImages"
                :key="index"
                class="image-preview"
              >
                <img :src="image" alt="Uploaded Image" />
                <button @click="removeImage(index)" class="remove-image-btn">
                  ✖
                </button>
              </div>
            </div>
            <p v-else class="no-images-text">No images uploaded yet.</p>
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
const brandStore = useBrandStore();
const productStore = useProductStore();
const categoryStore = useCategorystore();
// Use ref for the product object
const product = ref({
  name: "Classic T-Shirt",
  price: 25,
  brand_id: null, // New property
  gender: null, // New property
  category_id: null, // New property
  subcategory_id: null,
  short_description: "A comfortable and stylish classic t-shirt.",
  long_description:
    "This classic t-shirt is made from 100% cotton, ensuring a soft and breathable fit. Perfect for casual wear or as a base layer.",
  color: "2",
  sku:"eakdhcbadcb",
  sizes: [
    { id: 1, name: "XS", price: 20, quantity: 10 },
    { id: 2, name: "S", price: 22, quantity: 10 },
    { id: 3, name: "M", price: 25, quantity: 10 },
    { id: 4, name: "L", price: 28, quantity: 10 },
    { id: 5, name: "XL", price: 30, quantity: 10 },
    { id: 6, name: "XXL", price: 32, quantity: 10 },
    { id: 7, name: "XXXL", price: 35, quantity: 10 },
  ],
});

let selectedItem = ref(null);

const selectedSizes = ref([]);
const bulkPrice = ref(null);
const bulkQuantity = ref(null);
const uploadedImages = ref([]);
const editor = ref();

onMounted(async () => {
  await productStore.getGenders();
  await categoryStore.getParentcategorylist();
  await brandStore.getBrandList();
});

let showSubCategory = ref(false);

async function handleSubmit() {
  product.value.sizes = JSON.stringify(product.value.sizes);
  // console.log("=====", product.value);
  await productStore.create(product.value);
}

async function checkSubCategory() {
  // console.log("+====", product.value.category);
  await categoryStore.showCategory(product.value.category_id);
  console.log("*(*(*(*)))", categoryStore.category.children?.length);
  if (categoryStore.category.children?.length != 0) {
    showSubCategory.value = true;
  } else {
    showSubCategory.value = false;
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
  product.value.sizes.forEach((size) => {
    if (selectedSizes.value.includes(size.name)) {
      if (bulkPrice.value !== null) size.price = bulkPrice.value;
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
.cards-container {
  display: flex;
  gap: 20px;
  max-width: 1200px;
  margin: 20px auto;
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
</style>
