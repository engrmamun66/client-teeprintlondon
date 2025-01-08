<template>
  <div v-bind="$attrs">
    <div class="leap-admin-content-wrapper">
      <div class="leap-admin-card">
        <div v-if="showHeader" class="m-portlet__head">
          <div class="m-portlet__head-caption">
            <div class="m-portlet__head-title">
              <h3 class="m-portlet__head-text mt-3"> {{ title }} </h3>
              <div class="leap-admin-title-rightcontent-side">
                <div class="leap-admin-title-rightcontent-side-inner">
                  <slot name="header-buttons">
                    <!-- <button class="leap-btn leap-back-btn" type="button">Back</button> -->
                  </slot>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="leap-admin-card-body">
          <slot></slot>
        </div>
      </div>
  </div>
  </div>
</template>

<script setup>
let props = defineProps({
    showHeader: {
      type: Boolean,
      default: true,
      required: false,
    },
    title:{
        type: String, 
        default:'',
        required: false,
    },
  
})

let emit = defineEmits(['admin-card-submit', 'admin-card-update', 'admin-card-cancel'])
let submit = (event) => {
  emit('admin-card-submit')
}
let cancel = (event) => {
  emit('admin-card-cancel')
}
let update = (event) => {
  emit('admin-card-update')
}

</script>
