<script setup>
let props = defineProps({
  modelValue: {
    default: false,
  },
  label: {
    default: "",
    required: false,
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
  checkboxClass: {
    default: '',
    required: false,
  },
  skipAutoMargin: {
    default: false,
    required: false,
  },
  lightBorder: {
    default: false,
    required: false,
  },
 isChecked: {
    default: undefined,
    required: false,
  },
});

const myEmit = defineEmits([
  "update:modelValue",
  "change",
  "click",
]);

if(!globalThis.__cehckboxId) globalThis.__cehckboxId = 0;
globalThis.__cehckboxId += 1
const uniqueId = `checkbox_unique_${globalThis.__cehckboxId + 1}`;

onMounted(()=> {
  myEmit('update:modelValue', Boolean(props.modelValue));
})

</script>

<template>
    <div v-bind="$attrs">
        <div class="form-check mb-2" :class="{'ps-0': showEffect, 'mt-md-4': !skipAutoMargin}" >
            <template v-if="!showEffect" >
              <input class="form-check-input cp" :class="{[checkboxClass]: checkboxClass}" type="checkbox" :value="uniqueId" :id="uniqueId" 
              :checked="isChecked ?? modelValue" 
              :disabled="disabled" 
              ref="inputField"  
              :style="lightBorder ? `border-color: #666666 !important;` : ''"          
              @change="({target})=>{
                  $emit('click', target.checked);
                  $emit('change', target.checked);
                  $emit('update:modelValue', target.checked);
              }" 
              >
              <label v-if="label" class="form-check-label cp m-0 ms-2 " :for="uniqueId" 
              @click="$emit('click', $refs.inputField.checked)" >
                  {{ label }}
              </label>

            </template>
            <template v-else >
              <div class="d-flex">
                <ShimmerEffect :bg="effectBg" width="22px" height="20px" radius="3px" class="me-1" style="margin-top: 2px;" :class="{[checkboxClass]: checkboxClass}" ></ShimmerEffect>
                <ShimmerEffect v-if="label" :bg="effectBg" width="100%" height="20px" radius="3px" style="margin-top: 2px;" ></ShimmerEffect>
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


