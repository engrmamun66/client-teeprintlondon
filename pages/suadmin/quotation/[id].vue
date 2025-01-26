<template>
  <div class="position-relative">
    <LoaderApi v-if="false" />
    <page-content-header
      :title="'Dashboard'"
      :links="[{ title: 'Quotation', href: '/suadmin/quotation' }]"
      :buttons="[]"
    />
    <div class="quotation-container">
      <!-- Left Card: Quotation Details -->
      <div class="card quotation-details-card">
        <h3 class="quotation-details-heading">Quotation Details</h3>
        <form>
          <el-BaseInput
            type="text"
            label="Reference Id"
            :disabled="true"
            style="margin-top: 10px"
            v-model="quatationStore.quatationAttribute.reference_id"
          />
          <el-BaseInput
            type="text"
            label="Full Name"
            :disabled="true"
            style="margin-top: 10px"
            v-model="quatationStore.quatationAttribute.full_name"
          />
          <el-BaseInput
            type="text"
            label="Email"
            style="margin-top: 10px"
            :disabled="true"
            v-model="quatationStore.quatationAttribute.email"
          />
          <el-BaseInput
            type="text"
            label="Phone"
            style="margin-top: 10px"
            :disabled="true"
            v-model="quatationStore.quatationAttribute.phone"
          />
          <el-BaseInput
            type="text"
            label="Delivery Date"
            style="margin-top: 10px"
            :disabled="true"
            v-model="quatationStore.quatationAttribute.delivery_date"
          />
          <el-BaseInput
            type="text"
            label="Order Date"
            style="margin-top: 10px"
            :disabled="true"
            v-model="quatationStore.quatationAttribute.created_at"
          />
          <div class="form-group">
            <label>Customer Requirement</label>
            <textarea
              class="form-control"
              v-model="quatationStore.quatationAttribute.requirements"
              disabled
              rows="3"
              placeholder="Write your requirements E.g. product type, quantity, size, artwork placement area etc."
            ></textarea>
          </div>
          <div class="form-group">
            <label class="form-label">Status</label>
            <div class="select-optionbox">
              <select
                class="form-control"
                v-model="quatationStore.quatationAttribute.status"
                required
              >
                <option disabled :value="null">- Select Status -</option>
                <option :value="1">Pending</option>
                <option :value="2">Processing</option>
                <option :value="3">Completed</option>
                <option :value="4">Canceled</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label>Admin Notes</label>
            <textarea
              class="form-control"
              v-model="quatationStore.quatationAttribute.note"
              rows="3"
              placeholder="Write your requirements E.g. product type, quantity, size, artwork placement area etc."
            ></textarea>
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
        </form>
      </div>

      <!-- Right Card: Additional Details -->
      <div class="card additional-details-card">
        <h3 class="additional-details-heading">Uploaded Files</h3>
        <div>
          <el-ShowFiles
            :fileUrls="fileUrls"
            :ids="fileIds"
            @download="handleFileDownload"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useQuatationStore } from "~/store/Quatation.js";
import { ref, onMounted } from "vue";
const quatationStore = useQuatationStore();

let editMode = ref(false);
let clearImage = ref(false);
let fileUrls = ref([]);
let fileIds = ref([]);
const route = useRoute();

async function showQuatation(id) {
  await quatationStore.showQuatation(id);
  editMode.value = true;
}

function handleFileDownload(fileId) {
  quatationStore.downloadFile(fileId);
}

function formatDateTime(isoString) {
  const date = new Date(isoString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return date.toLocaleString("en-US", options);
}

function convertDate(dateString) {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

async function handleSubmit() {
  const ids = route.params.id;

  const { note, status } = quatationStore.quatationAttribute;

  let payload = {
    _method: "PUT",
    note,
    status,
  };

  quatationStore.update(ids, payload);
}

onMounted(async () => {
  const id = route.params.id;
  await quatationStore.showQuatation(id);
  quatationStore.quatationAttribute.created_at = formatDateTime(
    quatationStore.quatationAttribute.created_at
  );
  quatationStore.quatationAttribute.delivery_date = convertDate(
    quatationStore.quatationAttribute.delivery_date
  );

  quatationStore.quatationAttribute.files.forEach((file) => {
    fileUrls.value.push(file.file_url);
    fileIds.value.push(file.id);
  });
});
</script>

<style>
fieldset {
  border: 1px solid #9c9393 !important;
}
.quotation-details-heading {
  color: black;
  margin-top: 2px;
}

.quotation-container {
  display: flex;
  gap: 20px;
}
.card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex: 1;
}
.quotation-details-card {
  flex: 1; /* Wider card */
}
.additional-details-card {
  flex: 1; /* Narrower card */
}
.quotation-details-heading,
.additional-details-heading {
  color: black;
  font-size: 18px;
  margin-bottom: 20px;
}
</style>
