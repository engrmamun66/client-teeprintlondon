<template>
  <div class="position-relative">
    <LoaderApi v-if="false" />
    <page-content-header
      :title="'Dashboard'"
      :links="[{ title: 'Brand', href: '/brands' }]"
      :buttons="[]"
    />
    <admin-card :showHeader="true" :title="'Brand List'">
      <div
          class="d-flex align-items-center"
          v-if="loading"
        >
          <Loader />
        </div>
      <template v-slot:header-buttons>
        <button class="btn btn-success m-3" @click="OpenModal()">
          <i-las t="plus" /> Add Brand
        </button>
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
              <th>Name <i-las t="sort-asc" /></th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="odd"
              v-for="(brand, index) in brandStore.brandList"
              :key="index"
            >
              <td>
                <div class="px-2">
                  <span>{{ brand?.name }}</span>
                </div>
              </td>

              <td>
                <div class="px-2">
                  <p>
                    <span>{{
                      brand?.status == 1 ? "Active" : "Inactive"
                    }}</span>
                  </p>
                </div>
              </td>
              <td>
                <ul class="d-flex justify-content-evenly td-actions">
                  <li class="d-flex justify-content-evenly">
                    <p tooltip="Delete" flow="up">
                      <i-las
                        t="trash"
                        class="size-sm cp"
                        @click="
                          showConfirmation = true;
                          brandId = brand.id;
                        "
                      />
                    </p>
                    <p tooltip="Edit" flow="up">
                      <i-las
                        t="edit"
                        class="size-sm cp"
                        @click="showBrand(brand.id)"
                      />
                    </p>
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
              let isDeleted = await brandStore.deleteBrand(brandId);
              if (isDeleted) {
                showConfirmation = false;
                brandId = null;
              }
            }
          "
        >
          <template v-if="showConfirmation">
            <p style="color: black">Are you sure?</p>
          </template>
        </Modal-Confirm>
      </div>
    </admin-card>

    <modal-global
      v-model="brandStore.showModal"
      :footer="false"
      :title="editMode ? 'Update Brand' : 'Add Brand'"
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
                        v-model="brandStore.brandAttribute.name"
                      />
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
                        name="status"
                        :value="1"
                        label="Active"
                        v-model="brandStore.brandAttribute.status"
                        @click="changeBrand(1)"
                      >
                        Active
                      </el-Radio>
                      <el-Radio
                        name="status"
                        :value="0"
                        label="Inactive"
                        v-model="brandStore.brandAttribute.status"
                        @click="changeBrand(0)"
                      >
                        Inactive
                      </el-Radio>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="ionic-card-footer justify-content-end">
            <button
              type="button"
              class="leap-btn leap-submit-btn me-2 m-1"
              @click="handleSubmit"
            >
              Save
              <BtnLoader
                :show="H.isPendingAnyApi('Brand:create|Brand:update')"
                color="black"
              />
            </button>
            <button type="button" class="leap-btn leap-cancel-btn m-1">
              Cancel
            </button>
          </div>
        </div>
      </template>
    </modal-global>
  </div>
</template>

<script setup>
import { useBrandStore } from "~/store/Brand";
const brandStore = useBrandStore();
let showConfirmation = ref(false);
let editMode = ref(false);
let brandId = ref(null);
let editor = ref(null);
let clearImage = ref(false);


definePageMeta({
    keepalive: false,
    middleware: ["auth"],
    key: (route) => route.fullPath,
    name: 'add_products',
  });

async function showBrand(id) {
  await brandStore.showBrand(id);
  // editor.value.setContent(brandStore.brandAttribute.description);
  editMode.value = true;
}

function handleSubmit() {
  // console.log( brandStore.brandAttribute.image )
  brandStore.brandAttribute.status = brandStore.brandAttribute.status ? 1 : 0;
  if (editMode.value) {
    brandStore.update(brandStore.brandAttribute.id, brandStore.brandAttribute);
  } else {
    brandStore.create(brandStore.brandAttribute);
  }
}

function changeBrand(status) {
  console.log(status);
  setTimeout(() => {
    brandStore.brandAttribute.status = status;
  }, 10);
}

function OpenModal() {
  brandStore.resetBrandAttribute();
  // editor.value.setContent("")
  clearImage.value = true;
  editMode.value = false;
  brandStore.showModal = !brandStore.showModal;
}
let loading = ref(false)
onMounted(async () => {
  loading.value = true
  await brandStore.getBrandList();
  loading.value = false
});
</script>
<style scoped>
fieldset {
  border: 1px solid #9c9393 !important;
}
</style>
