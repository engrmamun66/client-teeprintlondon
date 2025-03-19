<template>
  <div class="position-relative">
    <LoaderApi v-if="false" />
    <page-content-header
      :title="'Dashboard'"
      :links="[{ title: 'Brand', href: '/brands' }]"
      :buttons="[]"
    />
    <admin-card :showHeader="true" :title="'Discount List'">
      <template v-slot:header-buttons>
        <button class="btn btn-success m-3" @click="OpenModal()">
          <i-las t="plus" /> Add Discount
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
              <th>Applied Category</th>
              <th>Applied Time</th>
              <th>Amount (%)</th> 
            </tr>
          </thead>
          <tbody>
            <tr class="odd" v-for="(item, index) in dicountList" :key="index" >
               <td> {{ item?.category?.name }} {{ item.applied_to }} </td>
               <td> {{ moment(item.applied_at).format('MMM DD YYYY hh:mm A') }} </td>
               <td> {{ Number(item?.discount).toFixed(0) }}% </td>
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
          <template v-if="showConfirmation"> Are you sure? </template>
        </Modal-Confirm>
      </div>
    </admin-card>

    <modal-global  
      v-model="brandStore.showModal"
      :footer="true"
      @clicked-submit="showCofirmModal=true"
      @clicked-cancel="clearPayload"
      @clicked-close="clearPayload"
      :title="editMode ? 'Update Discount' : 'Add Discount'"
    >
      <template #modalbody>
        <div class="row w-100">
    
              
          <div class="col-md-6 col-12">
            <div class="form-group">
              <label class="">Category</label>
              <select v-model="payload.category_id" class="form-control" @auxclick="log(homeStore.menus)" >
                <option :value="null">-Apply On All Categories-</option>
                <template v-for="item in homeStore.menus || []">
                  <optgroup :label="item.name">
                    <template v-for="(child2, index2) in item?.categories" :key="index2" >
                      <option @click="log(child2)" :value="child2.id">{{ child2.name }}</option>
                      <template v-for="(child3, index3) in child2?.children || []" :key="index3" >
                        <option :value="`child-${child3.id}`" class="ps-2 ms-1"> ❏ {{ child3.name }}</option>
                      </template>
                    </template>   

                  </optgroup>
                  
                </template>
              </select>  
            </div> 
          </div>  
          <el-baseInput v-model="payload.discount" label="Discount (%)" class="col-md-6 col-12" type="number"></el-baseInput>


        </div>
      </template>
    </modal-global>

    <modal-Confirm v-model="showCofirmModal" @yes="createDiscount" @no="clearPayload">

    </modal-Confirm>
  </div>
</template>

<script setup>
import Discount from "../apis/Discount";
import { useBrandStore } from "~/store/Brand";
const brandStore = useBrandStore();
let showConfirmation = ref(false);
let editMode = ref(false);
let brandId = ref(null);
let clearImage = ref(false);

import { useHomeStore } from '~/store/web/Home'; 
const homeStore = useHomeStore(); 

let paginateData = ref(null)
let dicountList = ref([])

async function getDiscountLogs() {
  Discount.getDiscountLogs({ params: { per_page: 50 }}).then(response => {
    if(Response.isOk(response)){
      paginateData.value = Response.parseData(response)
      dicountList.value = Response.parseData(response).data
    }
  })
}

function OpenModal() {
  brandStore.resetBrandAttribute();

  clearImage.value = true;
  editMode.value = false;
  brandStore.showModal = !brandStore.showModal;
}

let payload = reactive({
  type: null,
  category_id: null,
  discount: 0,
})

function clearPayload(){
  payload.type = null
  payload.category_id = null
  payload.discount = 0
}


let showCofirmModal = ref(false)

async function createDiscount() {
  let data = H.clone(payload)
  if(data.category_id){
    data.type = 'category'
  } else {
    data.type = 'all'
  }
  await Discount.create(data)
  Toaster.success('Discount applied')
}


onMounted(async () => {
  homeStore.getTypewiseCategoryList();
  await brandStore.getBrandList();
  getDiscountLogs()
});
</script>
<style scoped>
fieldset {
  border: 1px solid #9c9393 !important;
}
</style>
