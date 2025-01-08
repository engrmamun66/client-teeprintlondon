<template>
  <div class="position-relative">
    <LoaderApi v-if="false" />
    <page-content-header
      :title="'Dashboard'"
      :links="[{ title: 'Categories', href: '/categories' }]"
      :buttons="[]"
    />
    <admin-card :showHeader="true" :title="'Category List'">
      <template v-slot:header-buttons>
        <Button
          class="btn btn-success m-3"
          @click="showCategoryModal = !showCategoryModal"
        >
          <i-las t="plus" /> Category
        </Button>
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
              <th>ইনস্টিটিউটের নাম <i-las t="sort-asc" /></th>
              <th>ইমেইল</th>
              <th>মোবাইল</th>
              <th>এ্যাকশন</th>
            </tr>
          </thead>
          <tbody>
            <tr class="odd">
              <td>
                <div class="px-2">
                  <span>Test</span>
                </div>
              </td>
              <td>
                <div class="px-2">
                  <p>
                    <span>jhfdhfdf</span>
                  </p>
                </div>
              </td>
              <td>
                <div class="px-2">
                  <p>
                    <span>dfdkjfjk</span>
                  </p>
                </div>
              </td>
              <td>
                <ul class="d-flex justify-content-evenly td-actions">
                  <li>
                    <i-las t="home" />
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </admin-card>

    <modal-global
      v-model="showCategoryModal"
      :footer="false"
      title=" Add Category"
    >
      <template #modalbody>
        <div class="row">
          <!-- Pickup -->

          <div class="col-12">
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <div class="date-box">
                    <div class="date-box-input">
                      <el-BaseInput
                        type="text"
                        label="Name"
                        col="father_occupation"
                        v-model="categoryattribute.name"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="row">
                  <div class="form-group col-6">
                    <div class="time-box-input">
                      <div
                        style="display: flex; gap: 1rem; align-items: center"
                      >
                        <p class="mt-3">Is Parent</p>
                        <el-Radio
                          name="is_tracked"
                          :value="1"
                          label="Yes"
                          @click="isparent()"
                          v-model="categoryattribute.is_parent"
                        >
                          Yes
                        </el-Radio>
                        <el-Radio
                          name="is_tracked"
                          :value="0"
                          label="No"
                          v-model="categoryattribute.is_parent"
                          @click="isparent()"
                        >
                          No
                        </el-Radio>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-md-4 col-12"
                    style="min-width: 200px"
                    label=""
                  >
                    <div class="form-group text-muted">
                      <label> Sub Caategory</label>
                      <span class="text-danger p-1">*</span>
                      <select
                        class="form-control"
                        v-model="categoryattribute.sub_category_id"
                      >
                        <option value="" class="text-muted">
                          -Please Select-
                        </option>
                        <option
                          v-for="(item, index) in Sub_category"
                          :key="index"
                          :value="item.id"
                        >
                          {{ item.name }}
                        </option>
                      </select>
                      <div>
                        <span class="field-error-span text-danger p-1"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="form-group col-6">
                  <div class="time-box-input">
                    <div style="display: flex; gap: 1rem; align-items: center">
                      <p class="mt-3">Status</p>
                      <el-Radio
                        name="is_tracked"
                        :value="1"
                        label="Active"
                        v-model="categoryattribute.status"
                      >
                        Active
                      </el-Radio>
                      <el-Radio
                        name="is_tracked"
                        :value="0"
                        label="Inactive"
                        v-model="categoryattribute.status"
                      >
                        Inactive
                      </el-Radio>

                      <!-- <pre>{{ categoryattribute.status }}</pre> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12">
            <RedactorEditor v-model="categoryattribute.description"/>
          </div>
          <div class="col-6 mt-3">
            <div class="form-group">
              <div class="date-box">
                <div class="date-box-input">
                  <el-DropImage v-model="categoryattribute.image" />
                  <p v-if="categoryattribute.image">
                    Uploaded Image URL:
                    {{
                      categoryattribute.image.name || categoryattribute.image
                    }}
                   
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Return -->

          <!-- <div class="col-6">
            <div class="form-group">
              <div class="time-box">
                <div class="time-box-input">
                  <el-BaseInput
                    type="text"
                    label="পিতার পেশা"
                    col="father_occupation"
                  />
                </div>
              </div>
            </div>
          </div> -->
          <div class="ionic-card-footer justify-content-end">
            <button type="button" class="leap-btn leap-cancel-btn m-1">
              Cancel
            </button>
            <button
              type="button"
              class="leap-btn leap-submit-btn me-2 m-1"
              @click="handleSubmit"
            >
              Save
              <!-- <BtnLoader
                :show="H.isPendingAnyApi('Order:changeRentalDuration')"
                color="black"
              /> -->
            </button>
          </div>
        </div>
      </template>
    </modal-global>
  </div>
</template>

<script setup>
import { useCategorystore } from "~/store/Category";
const Categorystore = useCategorystore();

let editMode = ref(false);
let showCategoryModal = ref(true);
let categoryattribute = ref({
  name: null,
  is_parent: 1,
  parent_id: null,
  image: null,
  description: null,
  status: 1,
});

let Sub_category = [
  { id: 1, name: "Sub Product 1" },
  { id: 2, name: "Sub Product 2" },
];

function isparent() {
  setTimeout(() => {
    console.log("adkcbakdcbkadbc", categoryattribute.value.is_parent);
    if (categoryattribute.value.is_parent == 0) {
      Categorystore.getParentcategorylist();
    }
  }, 100);
}

function handleSubmit() {
  // console.log( categoryattribute.value.image )
  Categorystore.create(categoryattribute.value);
}
</script>
<style scoped>
fieldset {
  border: 1px solid #9c9393 !important;
}
</style>
