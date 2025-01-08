<template>
    <div v-bind="$attrs">
        <div class="form-group">
            <label v-if="label"> {{ label }} </label>            
            <slot v-if="useSlot" />
            <textarea class="form-control form-control-solid" 
                :rows="rows"
                @focus="$emit('focus')" 
                @focusout="$emit('focusout')" 
                @blur="$emit('blur', $event.target.value)" 
                @input="updateValue" :placeholder="placeholder" 
                :disabled="disabled" :type="type" :value="modelValue" 
                @keydown="$emit('keydown', $event, $event.target.value)" 
            >
            </textarea> 
        </div>
    </div>
</template>

<script setup>
let props = defineProps({
    useSlot: {
        type: Boolean,
        default: false,
    },
    modelValue: {
        type: [String],
        default: ''
    },
    label:{
        type: String, 
        default:'',
        required: false,
    },
    disabled: {
        type: Boolean,
        default: false,
        required: false,
    },
    type:{
        type: String, 
        default:'text',
        required: false,
    },
    placeholder:{
        type: String, 
        default:'',
        required: false,
    },
    rows:{
        type: String, 
        default:'',
        required: false,
    },
})

const myEmit = defineEmits(['update:modelValue', 'blur', 'keydown', 'focus', 'focusout'])
const updateValue = (event) => {
    myEmit('update:modelValue', event.target.value)
}

</script>