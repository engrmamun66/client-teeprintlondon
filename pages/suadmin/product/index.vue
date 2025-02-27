<template>
  <div>
    <div class="position-relative">
      <LoaderApi v-if="false" />
      <page-content-header :title="'Product'" :links="[]" :buttons="[]" />
      <admin-card :showHeader="true" :title="'Product List'">
        <template v-slot:header-buttons>
          <nuxt-link to="/suadmin/addproduct" class="btn btn-success m-3">
            <i-las t="plus" /> Add Product
          </nuxt-link>
        </template>

        <div class="row">
          <table
            id="example"
            class="table table-striped dataTable"
            style="width: 100%"
            aria-describedby="example_info"
          >
            <thead>
              <tr>
                <th>Image</th>
                <th>Product Id</th>
                <th>Product Name <i-las t="sort-asc" /></th>
                <th>Category</th>
                <th>Brand</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="odd"
                v-for="(product, index) in productStore.productList"
                :key="product.id"
              >
                <!-- Image Column -->
                <td>
                  <div class="px-2">
                    <img
                      v-if="product.thumbnail_image_url"
                      :src="product.thumbnail_image_url"
                      alt="Product Image"
                      style="width: 50px; height: 50px; object-fit: cover"
                    />
                    <span v-else>No Image</span>
                  </div>
                </td>

                <!-- Product Id Column -->
                <td>
                  <div class="px-2">
                    <span>{{ product.id }}</span>
                  </div>
                </td>

                <!-- Product Name Column -->
                <td>
                  <div class="px-2">
                    <span>{{ product.name }}</span>
                  </div>
                </td>

                <!-- Category Column -->
                <td>
                  <div class="px-2">
                    <span>{{ product.category.parent ? product.category.parent.name : product.category.name}}</span>
                  </div>
                </td>

                <!-- Brand Column -->
                <td>
                  <div class="px-2">
                    <span>{{ product.brand.name }}</span>
                  </div>
                </td>

                <!-- Status Column -->
                <td>
                  <div class="px-2">
                    <p>
                      <span>{{
                        product.status == 1 ? "Active" : "Inactive"
                      }}</span>
                    </p>
                  </div>
                </td>

                <!-- Actions Column -->
                <td>
                  <ul class="d-flex justify-content-evenly td-actions">
                    <li class="d-flex justify-content-evenly">
                      <!-- Delete Action -->
                      <p tooltip="Delete" flow="up">
                        <i-las
                          t="trash"
                          class="size-sm cp"
                          @click="
                            showConfirmation = true;
                            productId = product.id;
                          "
                        />
                      </p>
                      <!-- Edit Action -->
                      <!-- <p tooltip="Edit" flow="up">
                        <i-las
                          t="edit"
                          class="size-sm cp"
                          @click="showProduct(product.id)"
                        />
                      </p> -->
                      <nuxt-link :to="`/suadmin/productdetails/${product.id}`">
                        <p tooltip="Edit" flow="up">
                          <i-las t="edit" class="size-sm cp" />
                        </p>
                      </nuxt-link>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>

          <Modal-Confirm
            v-if="showConfirmation"
            v-model="showConfirmation"
            :skipAutoClose="false"
            @yes="
              async () => {
                let isDeleted = await productStore.deleteProduct(productId);
                if (isDeleted) {
                  showConfirmation = false;
                  productId = null;
                }
              }
            "
          >
            <template v-if="showConfirmation"> Are you sure? </template>
          </Modal-Confirm>
        </div>
      </admin-card>
    </div>
  </div>
</template>

<script setup>
// import { useCategorystore } from "~/store/Category";
import { useProductStore } from "~/store/Product";
import axios from 'axios';
const productStore = useProductStore();
let showConfirmation = ref(false);
let editMode = ref(false);
let productId = ref(null);
 



definePageMeta({
  name: 'admin_product_list'
})


async function showCategory(id) {
  await Categorystore.showCategory(id);

  editMode.value = true;
}

function handleSubmit() {}

onMounted(async () => {
  await productStore.getProductList();
  // Categorystore.getParentcategorylist();
  // try {
  //   const response = await axios.get('http://client-treeprintlondon-api.test/api/type-wise-category-list');
  // } catch (error) {
  //   console.error('Error fetching category list:', error);
  // }
});
</script>
<style scoped>
fieldset {
  border: 1px solid #9c9393 !important;
}
</style>
