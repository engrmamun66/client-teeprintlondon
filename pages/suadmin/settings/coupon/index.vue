<template>
  <div class="position-relative">
    <LoaderApi v-if="false" />
    <page-content-header
      :title="'Dashboard'"
      :links="[{ title: 'Color', href: '/brands' }]"
      :buttons="[]"
    />
    <admin-card :showHeader="true" :title="'Coupon List'">
      <template v-slot:header-buttons>

        <button class="btn btn-success m-3" @click="OpenModal()">
          <i-las t="plus" /> Add Coupon
        </button>
      </template>

      <div class="row">
        <div
          class="d-flex align-items-center"
          v-if="loading"
        >
          <Loader />
        </div>
        <table
          id="example"
          class="table table-striped dataTable"
          style="width: 100%"
          aria-describedby="example_info"
        >
          <thead>
            <tr>
              <th>Coupon Code <i-las t="sort-asc" /></th>
              <th>Discount Value</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="odd"
              v-for="(coupon, index) in couponStore.couponList"
              :key="index"
            >
              <td>
                <div class="px-2">
                  <span>{{ coupon?.code }}</span>
                </div>
              </td>

              <td>
                <div class="px-2">
                  <p>
                    <span>{{ coupon?.discount_value }}</span>
                  </p>
                </div>
              </td>
              <td>
                <div class="px-2">
                  <p>
                    <span>{{ formatDate(coupon?.start_date) }}</span>
                  </p>
                </div>
              </td>
              <td>
                <div class="px-2">
                  <p>
                    <span>{{ formatDate(coupon?.end_date) }}</span>
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
                          brandId = coupon.id;
                        "
                      />
                    </p>
                    <p tooltip="Edit" flow="up">
                      <i-las
                        t="edit"
                        class="size-sm cp"
                        @click="showCoupon(coupon.id)"
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
              let isDeleted = await couponStore.deleteCoupon(brandId);
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
  v-model="couponStore.showModal"
  :footer="false"
  :title="editMode ? 'Update Coupon' : 'Add Coupon'"
>
  <template #modalbody>
    <div class="row">
      <!-- Pickup -->
      <div class="col-12">
        <div class="row">
          <div class="col-12">
            <div class="form-group">
              <div class="date-box">
                <div class="date-box-input" style="position: relative;">
                  <el-BaseInput
                    type="text"
                    label="Coupon Name"
                    v-model="couponStore.couponAttribute.code"
                  />
                  <button 
                    type="button" 
                    class="leap-btn leap-generate-btn"
                    style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); padding: 0.25rem 0.5rem; font-size: 0.8rem;"
                    @click="generateCouponCode"
                  >
                    Generate
                  </button>
                </div>
              </div>
              <div class="date-box">
                <div class="date-box-input">
                  <el-BaseInput
                    type="number"
                    label="Coupon Value"
                    v-model="couponStore.couponAttribute.discount_value"
                  />
                </div>
              </div>
              <div class="mx-5 d-flex justify-content-around">
                <div class="date-box-input">
                  <el-BaseInput
                    type="date"
                    label="Start Date"
                    v-model="couponStore.couponAttribute.start_date"
                  />
                </div>

                <div class="date-box-input">
                  <el-BaseInput
                    type="date"
                    label="End Date"
                    v-model="couponStore.couponAttribute.end_date"
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
                    v-model="couponStore.couponAttribute.is_active"
                    @click="changeColor(1)"
                  >
                    Active
                  </el-Radio>
                  <el-Radio
                    name="status"
                    :value="0"
                    label="Inactive"
                    v-model="couponStore.couponAttribute.is_active"
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
          Submit
          <BtnLoader
            :show="H.isPendingAnyApi('Coupons:create|Coupons:update')"
            color="black"
          />
        </button>
        <button
          type="button"
          class="leap-btn leap-cancel-btn m-1"
          @click="couponStore.showModal = !couponStore.showModal"
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
import { useCouponStore } from "~/store/Coupon";
const colorStore = useColorStore();
const couponStore = useCouponStore();
let showConfirmation = ref(false);
let editMode = ref(false);
let brandId = ref(null);

definePageMeta({
  keepalive: false,
  middleware: ["auth"],
  key: (route) => route.fullPath,
  name: "coupon",
});

let clearImage = ref(false);

function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

async function showCoupon(id) {
  await couponStore.showCoupon(id);

  editMode.value = true;
}



const generateCouponCode = () => {
  // Fashion coupon components
  const components = {
    prefixes: ['STYLE', 'CHIC', 'DENIM', 'LUXE', 'SNEAK', 'CASUAL', 'BOUTIQUE'],
    flash: ['FLASH', 'QUICK', 'HOTDEAL'],
    clearance: ['CLEAR', 'LASTCHANCE'],
    loyalty: ['VIP', 'LOYAL', 'PREMIUM'],
    seasons: ['SUMMER', 'WINTER', 'SPRING']
  };

  // Combine all prefixes and calculate length dynamically
  const allPrefixes = [
    ...components.prefixes,
    ...components.flash,
    ...components.clearance,
    ...components.loyalty,
    ...components.seasons
  ];
  
  // Get random prefix (now using actual array length)
  const prefix = allPrefixes[Math.floor(Math.random() * allPrefixes.length)];

  // Generate code parts
  const numbers = Math.floor(1000 + Math.random() * 9000); // 4-digit number
  const letters = Math.random().toString(36).substring(2, 4).toUpperCase(); // 2 letters
  
  // Create base code
  const baseCode = `${prefix}${numbers}${letters}`;
  
  // Add season suffix 50% of the time (with dynamic array length)
  couponStore.couponAttribute.code = Math.random() > 0.5
    ? `${baseCode}-${components.seasons[Math.floor(Math.random() * components.seasons.length)]}`
    : baseCode;

  // Set smart discount if empty
  if (!couponStore.couponAttribute.discount_value) {
    const discountRanges = {
      flash: [20, 50],
      clearance: [15, 30],
      loyalty: [10, 20],
      seasons: [15, 40],
      default: [10, 25]
    };
    
    const [min, max] = 
      components.flash.includes(prefix) ? discountRanges.flash :
      components.clearance.includes(prefix) ? discountRanges.clearance :
      components.loyalty.includes(prefix) ? discountRanges.loyalty :
      components.seasons.includes(prefix) ? discountRanges.seasons :
      discountRanges.default;
    
    couponStore.couponAttribute.discount_value = Math.floor(min + Math.random() * (max - min));
  }
};

function handleSubmit() {
  if (!couponStore.couponAttribute.code) {
    Toaster.error("Please add Coupon Code name");
  } else {
    couponStore.couponAttribute.is_active = couponStore.couponAttribute
      .is_active
      ? 1
      : 0;
    if (editMode.value) {
      couponStore.update(
        couponStore.couponAttribute.id,
        couponStore.couponAttribute
      );
    } else {
      couponStore.create(couponStore.couponAttribute);
    }
  }
}

function changeColor(status) {

  setTimeout(() => {
    couponStore.couponAttribute.is_active = status;
  }, 50);
}

function OpenModal() {
  couponStore.resetCouponAttributes();
  clearImage.value = true;
  editMode.value = false;
  couponStore.showModal = !couponStore.showModal;
}
let loading = ref(false)
onMounted(async () => {
  loading.value = true
  await couponStore.getCouponList();
  loading.value = false
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
