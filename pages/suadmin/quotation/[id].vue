<template>
  <div class="position-relative">
    <LoaderApi v-if="false" />
    <page-content-header
      :title="'Dashboard'"
      :links="[{ title: 'Quatation', href: '/suadmin/quotation' }]"
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
        </form>
      </div>

      <!-- Right Card: Additional Details -->
      <div class="card additional-details-card">
        <h3 class="additional-details-heading">Uploaded Files</h3>
        <!-- <p>
          Here you can display extra information or actions related to the
          quotation.
        </p> -->
        <div>
          <el-ShowFiles 
          :fileUrls="fileUrls"
          />
        </div>
        <!-- Add your content for the right card here -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { useQuatationStore } from "~/store/Quatation.js";
const quatationStore = useQuatationStore();
let showConfirmation = ref(false);
let editMode = ref(false);
let brandId = ref(null);
let route = useRoute();
let clearImage = ref(false);

async function showQuatation(id) {
  await quatationStore.showQuatation(id);

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

function formatDateTime(isoString) {
  const date = new Date(isoString);

  // Format options for the date and time
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
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}
let fileUrls = ref([])
onMounted(async () => {
  const id = route.params.id;
  console.log(id); // Output:
  await quatationStore.showQuatation(id);
  quatationStore.quatationAttribute.created_at = formatDateTime(
    quatationStore.quatationAttribute.created_at
  );
  quatationStore.quatationAttribute.delivery_date = convertDate(
    quatationStore.quatationAttribute.delivery_date
  );
  quatationStore.quatationAttribute.files.forEach((file)=>{
    fileUrls.value.push(file.file_url)
    quatationStore.downloadFile(quatationStore.quatationAttribute.files[0].id)
  })

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
