<script setup>
/**
 * ===== Use Example =======
  <el-radio class="col-md-3 col-6" name="is_trucked" :value="0" label="Track quantity only" v-model="payload.is_tracked" >Inactive</el-radio>
  <el-radio class="col-md-3 col-6" name="is_trucked" :value="1" label="Track specific assets " v-model="payload.is_tracked" >Active</el-radio>
 */
let props = defineProps({
  modelValue: {
    default: false,
  },
  name: {
    default: "radio_item",
    required: true,
  },
  value: {
    default: "",
    required: true,
  }, 
  disabled: {
    default: false,
    required: false,
  },
  showEffect: {
    default: false,
    required: false,
  },
  effectBg: {
    default: 'dark',
    required: false,
  },
  skipAutoMargin: {
    default: false,
    required: false,
  },
});

const myEmit = defineEmits([
  "update:modelValue",
  "change",
  "click",
]);

if(!globalThis.__radioId) globalThis.__radioId = 0;
globalThis.__radioId += 1
const uniqueId = `radio_unique_${globalThis.__radioId + 1}`;

onMounted(()=> {
  myEmit('update:modelValue', Boolean(props.modelValue));
})

</script>

<template>
    <div v-bind="$attrs">
        <div class="form-check mb-2" :class="{'ps-0': showEffect, 'mt-md-4': !skipAutoMargin}" >
            <template v-if="!showEffect" >
              <input class="form-check-input" type="radio" :value="value" :id="uniqueId"
              :checked="modelValue == value" 
              :disabled="disabled" 
              :name="name" 
              ref="inputField"            
              @change="({target})=>{
                  $emit('click', target.value);
                  $emit('update:modelValue', target.value);
              }" 
              >
              <label class="form-check-label cp m-0 ms-2 " :for="uniqueId" 
              @click="$emit('click', $refs.inputField.checked)" >
                  <slot>Lable Here</slot>
              </label>

            </template>
            <template v-else >
              <div class="d-flex">
                <ShimmerEffect :bg="effectBg" width="22px" height="20px" radius="50%" class="me-1" style="margin-top: 2px;" ></ShimmerEffect>
                <ShimmerEffect :bg="effectBg" width="100%" height="20px" radius="3px" style="margin-top: 2px;" ></ShimmerEffect>
              </div>
            </template>
        </div>
    </div>
</template> 

<style scoped>
@media (min-width: 768px) {
    .mt-md-4 {
        margin-top: 30px !important;
    }
}
</style>


