<template>
  <div>
    <div class="position-relative">
      <LoaderApi v-if="false" />
      <page-content-header :title="'Product'" :links="[]" :buttons="[]" />
      <admin-card :showHeader="true" :title="'Search Product'">
        <!-- <template v-slot:header-buttons>
          <nuxt-link to="/suadmin/addproduct" class="btn btn-success m-3">
            <i-las t="plus" /> Add Product
          </nuxt-link>
        </template> -->

        <div class="row">
          
          <el-baseInput v-model="params.search" @keyupEnter="handleSubmit" class="col-md-4 col-12" label="Product Name" placeholder="Product Name"></el-baseInput>
          <el-baseSelect  v-model="params.type_id" class="col-md-4 col-12" label="Type" option1="-Select Type-" :data="homeStore.menus"></el-baseSelect>

          <div class="col-md-4 col-12">
            <div class="form-group">
              <label class="">Category</label>
              <select v-model="params.category" class="form-control" @auxclick="log(homeStore.menus)" >
                <option :value="null">-Select Category-</option>
                <template v-for="item in homeStore.menus || []">
                  <optgroup :label="item.name">
                    <template v-for="(child2, index2) in item?.categories" :key="index2" >
                      <option @click="log(child2)" :value="`parent-${child2.id}`">{{ child2.name }}</option>
                      <template v-for="(child3, index3) in child2?.children || []" :key="index3" >
                        <option :value="`child-${child3.id}`" class="ps-2 ms-1"> ❏ {{ child3.name }}</option>
                      </template>
                    </template>   

                  </optgroup>
                   
                </template>
              </select>  
            </div>
          </div>

          <div class="col-12 d-flex justify-content-end">
            <button class="btn btn-danger me-3" @click="clearParams">Clear</button>
            <button class="btn btn-success ms-0" @click="handleSubmit">Submit</button>
          </div>

      
        </div>
      </admin-card>
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

          <div class="d-flex justify-content-center">
            <Pagination v-model="productStore.paginateData" @jumpToPage="(page) => productStore.getProductList({page, ...params})" ></Pagination>
          </div>


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

import { useHomeStore } from '~/store/web/Home'; 
const homeStore = useHomeStore(); 
 



definePageMeta({
  name: 'admin_product_list'
})


let params = reactive({
  search: null,
  category: null,
  type_id: null,
  category: null,
  // category_id: null,
  // subcategory_id: null,
})

 

function clearParams(){
  params.search = null;
  params.category = null;
  params.type_id = null;
  params.category = null;
  productStore.getProductList();
}

function handleSubmit() {
  let queryParams = H.clone(params)
  if(queryParams.category){
    if(String(queryParams.category).startsWith('parent')){
      queryParams.category_id = queryParams.category.split('-')[1]
    } else {
      queryParams.subcategory_id = queryParams.category.split('-')[1]
    }
  }

  // console.log(queryParams);
  delete queryParams.category 
 
  productStore.getProductList(queryParams);
}

onMounted(async () => {
  homeStore.getTypewiseCategoryList();
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
