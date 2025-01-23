<template>
  <div class="position-relative">
    <LoaderApi v-if="false" />
    <page-content-header
      :title="'Dashboard'"
      :links="[{ title: 'Quatation', href: '/brands' }]"
      :buttons="[]"
    />
    <admin-card :showHeader="true" :title="'Quotation List'">
      <template v-slot:header-buttons> </template>

      <div class="row">
        <table
          id="example"
          class="table table-striped dataTable"
          style="width: 100%"
          aria-describedby="example_info"
        >
          <thead>
            <tr>
              <th>Reference Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="odd"
              v-for="(quatation, index) in quatationStore.quatationList"
              :key="index"
            >
              <td>
                <div class="px-2">
                  <span>{{ quatation?.uuid }}</span>
                </div>
              </td>

              <td>
                <div class="px-2">
                  <p>
                    <span>{{ quatation?.full_name }}</span>
                  </p>
                </div>
              </td>
              <td>
                <div class="px-2">
                  <p>
                    <span>{{ quatation?.email }}</span>
                  </p>
                </div>
              </td>
              <td>
                <div class="px-2">
                  <p>
                    <span>{{ quatation?.phone }}</span>
                  </p>
                </div>
              </td>
              <td>
                <div class="px-2">
                  <p>
                    <span>
                      {{
                        quatation?.status == 1
                          ? "Pending"
                          : quatation?.status == 2
                          ? "Processing"
                          : quatation?.status == 3
                          ? "Completed"
                          : quatation?.status == 4
                          ? "Canceled"
                          : "Unknown"
                      }}
                    </span>
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
                          brandId = quatation.id;
                        "
                      />
                    </p>
                    <p tooltip="Edit" flow="up">
                      <i-las
                        t="edit"
                        class="size-sm cp"
                        @click="showQuatation(quatation.id)"
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
              let isDeleted = await quatationStore.deleteBrand(brandId);
              if (isDeleted) {
                showConfirmation = false;
                brandId = null;
              }
            }
          "
        >
          <template v-if="showConfirmation"> Are you sure? </template>
        </Modal-Confirm>
      </div>
    </admin-card>

    <modal-global
      v-model="quatationStore.showModal"
      :footer="false"
      :title="editMode ? 'Update Quatation' : 'Add Quatation'"
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
                        label="Quatation Name"
                        v-model="quatationStore.quatationAttribute.name"
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
                        v-model="quatationStore.quatationAttribute.status"
                        @click="changeColor(1)"
                      >
                        Active
                      </el-Radio>
                      <el-Radio
                        name="status"
                        :value="0"
                        label="Inactive"
                        v-model="quatationStore.quatationAttribute.status"
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
                :show="H.isPendingAnyApi('Quatation:create|Quatation:update')"
                color="black"
              />
            </button>
            <button
              type="button"
              class="leap-btn leap-cancel-btn m-1"
              @click="quatationStore.showModal = !quatationStore.showModal"
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
import { useQuatationStore } from "~/store/Quatation.js";
const quatationStore = useQuatationStore();
let showConfirmation = ref(false);
let editMode = ref(false);
let brandId = ref(null);

let clearImage = ref(false);

async function showQuatation(id) {
  await quatationStore.showQuatation(id);

  editMode.value = true;
}

function handleSubmit() {
  if (!quatationStore.quatationAttribute.name) {
    Toaster.error("Please add color name");
  } else {
    quatationStore.quatationAttribute.status = quatationStore.quatationAttribute.status
      ? 1
      : 0;
    if (editMode.value) {
      quatationStore.update(
        quatationStore.quatationAttribute.id,
        quatationStore.quatationAttribute
      );
    } else {
      quatationStore.create(quatationStore.quatationAttribute);
    }
  }
}

function changeColor(status) {
  console.log(status);
  setTimeout(() => {
    quatationStore.quatationAttribute.status = status;
  }, 10);
}

function OpenModal() {
  quatationStore.resetBrandAttribute();

  clearImage.value = true;
  editMode.value = false;
  quatationStore.showModal = !quatationStore.showModal;
}

onMounted(async () => {
  await quatationStore.getQuatationList();
  await quatationStore.update(1)
});
</script>
<style scoped>
fieldset {
  border: 1px solid #9c9393 !important;
}
</style>
