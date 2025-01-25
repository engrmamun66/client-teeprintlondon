<template>
  <div class="position-relative">
    <LoaderApi v-if="false" />
    <page-content-header
      :title="'Dashboard'"
      :links="[{ title: 'Color', href: '/brands' }]"
      :buttons="[]"
    />
    <admin-card :showHeader="true" :title="'Color List'">
      <template v-slot:header-buttons>
        <button class="btn btn-success m-3" @click="OpenModal()">
          <i-las t="plus" /> Add Color
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
              <th>Color Name <i-las t="sort-asc" /></th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="odd"
              v-for="(brand, index) in colorStore.colorList"
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
                        @click="showColor(brand.id)"
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
              let isDeleted = await colorStore.deleteBrand(brandId);
              if (isDeleted) {
                showConfirmation = false;
                brandId = null;
              }
            }
          "
        >
        <template v-if="showConfirmation">
            <p class="modal-message">Are you sure?</p></template
          >
        </Modal-Confirm>
      </div>
    </admin-card>

    <modal-global
      v-model="colorStore.showModal"
      :footer="false"
      :title="editMode ? 'Update Color' : 'Add Color'"
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
                        label="Color Name"
                        v-model="colorStore.colorAttribute.name"
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
                        v-model="colorStore.colorAttribute.status"
                        @click="changeColor(1)"
                      >
                        Active
                      </el-Radio>
                      <el-Radio
                        name="status"
                        :value="0"
                        label="Inactive"
                        v-model="colorStore.colorAttribute.status"
                        @click="changeColor(0)"
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
                :show="H.isPendingAnyApi('Color:create|Color:update')"
                color="black"
              />
            </button>
            <button
              type="button"
              class="leap-btn leap-cancel-btn m-1"
              @click="colorStore.showModal = !colorStore.showModal"
            >
              Cancel
            </button>
          </div>
        </div>
      </template>
    </modal-global>
  </div>
</template>

<script setup>
import { useColorStore } from "~/store/Color";
const colorStore = useColorStore();
let showConfirmation = ref(false);
let editMode = ref(false);
let brandId = ref(null);

let clearImage = ref(false);

async function showColor(id) {
  await colorStore.showColor(id);

  editMode.value = true;
}

function handleSubmit() {
  if (!colorStore.colorAttribute.name) {
    Toaster.error("Please add color name");
  } else {
    colorStore.colorAttribute.status = colorStore.colorAttribute.status ? 1 : 0;
    if (editMode.value) {
      colorStore.update(
        colorStore.colorAttribute.id,
        colorStore.colorAttribute
      );
    } else {
      colorStore.create(colorStore.colorAttribute);
    }
  }
}

function changeColor(status) {
  console.log(status);
  setTimeout(() => {
    colorStore.colorAttribute.status = status;
  }, 10);
}

function OpenModal() {
  colorStore.resetBrandAttribute();

  clearImage.value = true;
  editMode.value = false;
  colorStore.showModal = !colorStore.showModal;
}

onMounted(async () => {
  await colorStore.getColorList();
});
</script>
<style scoped>
fieldset {
  border: 1px solid #9c9393 !important;
}
.modal-message {
  color: black;
  font-family: "Georgia", serif;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}
</style>
