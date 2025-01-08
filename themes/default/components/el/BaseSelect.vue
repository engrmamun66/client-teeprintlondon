<template>
    <div v-bind="$attrs">
        <div :class="{'form-group': useFormGroup, useFlex: useFlex}" :style="`--labelWidth:${labelWidth}`">  
            <label v-if="label.length && label !== false" :class="{[labelClass]: labelClass}"> {{ label }} <sup v-if="required" class="text-danger" >*</sup></label>
            <div :tooltip="(modelValue && tooltip) ? tooltip : ''">
                <template v-if="showEffect" >
                    <ShimmerEffect 
                    :bg="effectAttrs?.bg || 'dark'" :width="effectAttrs?.width || '100%'" 
                    :height="effectAttrs?.height || (compact ? '40px' : '48px')" 
                    :radius="effectAttrs?.radius || (compact ? '10px' : '15px')" 
                    :class="[effectAttrs?.class || '']"
                    :style="effectAttrs?.style || input_styles"
                    ></ShimmerEffect>
                  </template>
                  <template v-else >
                      <select class="form-control" :class="{'text-muted': disabled, 'tranparent': tranparent, compact: compact, focused}" :disabled="disabled" @input="updateValue" @change="updateValue2" :id__="id" :required="required">
                          <option v-if="option1===''" value=""> </option>
                          <option v-else-if="option1" :value="''" :class="{'text-muted': !data?.length}"> {{ option1 }} </option>
                          <template v-if="data?.length">
                              <option v-for="(item, index) in data" :key="index" :value="valueKey ? item[valueKey] : item" :selected="item[valueKey]==modelValue" >
                                  {{ displayKey ? $textTail(item[displayKey], charLimit) : '' }} {{ displayKey2 ? $textTail(item[displayKey2], charLimit) : '' }}
                              </option>
                          </template>
                      </select>
                      <span v-if="warningMsg && label !== false" class="field-error-span text-warning p-1">{{ warningMsg }}</span>
                  </template>

            </div>
        </div>
    </div>
</template>

<script setup>
let props = defineProps({
    modelValue: {
        default: '',
        required: false,
    },
    useFormGroup:{
        type: Boolean, 
        default:true,
        required: false,
    },
    label:{
        type: [String, Boolean], 
        default:false,
        required: false,
    },
    labelClass:{
        type: [String, Boolean], 
        default:false,
        required: false,
    },
    disabled: {
        type: Boolean,
        default: false,
        required: false,
    },
    option1:{
        default:'',
        required: false,
    },
    data:{
        required: true,
    },
    valueKey:{
        type: String, 
        default:'id',
        required: false,
    },
    displayKey:{
        type: String, 
        default:'name',
        required: false,
    },
    displayKey2:{
        type: String, 
        default:'',
        required: false,
    },
    required: {
        default: false,
        required: false,
    },
    charLimit:{
        type: Number, 
        default: 999,
        required: false,
    },
    warningMsg:{
        type: String, 
        default: '',
        required: false,
    },
    tranparent:{
        type: Boolean, 
        default: false,
        required: false,
    },
    id:{
        type: String, 
        default: '',
        required: false,
    },
    useFlex: {
        default: false,
        required: false,
    },
    labelWidth: {
        default: '150px',
        required: false,
    },
    compact: {
        default: false,
        required: false,
    },
    tooltip: {
        default: "",
        required: false,
    },
    input_styles: {
        default: "",
        required: false,
        type: String,
    },
    showEffect: {
        default: false,
        required: false,
    },
    focused: {
        default: false,
        required: false,
    },
    effectAttrs: {
        default: {
        /**
         * you can pass
         * -------------------
         * bg: 'dark' | 'light'
         * width: 10px (as you need)
         * height: 40px (as you need)
         * radius: 10 (as you need)
         * class: ...
         * style: ...
         * 
         */
        },
    },
})

const myEmit = defineEmits(['update:modelValue', 'valueChanged', 'change'])
const updateValue = (event) => {
    myEmit('update:modelValue', event.target.value)
}
const updateValue2 = (event) => {
    myEmit('change', event.target.value)
}

let random_id = computed(() => ('random_' + H.randomBetween(333, 294444)))
</script>

<style scoped>
.tranparent,
.tranparent:hover,
.tranparent:focus
 {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #777777;
    border-radius: 0px;
    padding-left: 8px;
}
.tranparent option,
.tranparent:hover option
 {
    background-color: var(--bgcolor-tertiary);
}

.field-error-span{
    font-weight: 400;
}
</style>