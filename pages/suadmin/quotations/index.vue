<template>
  <div class="position-relative">
    <LoaderApi v-if="false" />
    <page-content-header
      :title="'Dashboard'"
      :links="[{ title: 'Quatations', href: '/suadmin/quotation' }]"
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
                    <nuxt-link :to="`/suadmin/quotation/${quatation.id}`">
                      <p tooltip="Edit" flow="up">
                        <i-las
                          t="edit"
                          class="size-sm cp"
                          @click="showQuatation(quatation.id)"
                        />
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
              let isDeleted = await quatationStore.deleteQuatation(brandId);
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
  // navigateTo(`/suadmin/quotation/${id}`)

  editMode.value = true;
}

function handleSubmit() {
  if (!quatationStore.quatationAttribute.name) {
    Toaster.error("Please add color name");
  } else {
    quatationStore.quatationAttribute.status = quatationStore.quatationAttribute
      .status
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
  await quatationStore.update(1);
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
