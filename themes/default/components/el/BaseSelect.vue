<template>
    <div v-bind="$attrs">
        <div :class="{'form-group': useFormGroup}">
            <label v-if="label?.length" :class="{[labelClass]: labelClass}"> {{ label }}</label>
            <select class="form-control" :class="{'text-muted': disabled}" :disabled="disabled" @input="updateValue" @change="updateValue2">
                <option v-if="option1!==false && option1===''" :value="''"> </option>
                <option v-else-if="option1!==false && option1" :value="''" :class="{'text-muted': !data?.length}"> {{ option1 }} </option>
                <template v-if="data?.length">
                    <option v-for="(item, index) in data" :key="index" :value="valueKey ? item[valueKey] : item" :selected="item[valueKey]==modelValue" >
                        {{ displayKey ? $textTail(item[displayKey], charLimit) : '' }} {{ displayKey2 ? $textTail(item[displayKey2], charLimit) : '' }}
                    </option>
                </template>
            </select>
        </div>
    </div>
</template>

<script setup>
let props = defineProps({
    modelValue: {
        type: [String, Number, Array, Object],
        default: ''
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
    col:{
        type: String,
        default:'',
        required: false, 
    },
    v:{
        default:'',
        required: false, 
    },
    e:{
        default:'',
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
    charLimit:{
        type: Number, 
        default: 999,
        required: false,
    },
})

const myEmit = defineEmits(['update:modelValue', 'valueChanged', 'change'])
const updateValue = (event) => {
    myEmit('update:modelValue', event.target.value)
}
const updateValue2 = (event) => {
    myEmit('change', event.target.value)
}

</script>