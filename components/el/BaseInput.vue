<template>
    <div v-bind="$attrs">
      <div class="form-group">
        <!-- Render the label with red-colored * -->
        <label v-if="label" v-html="labelWithRedStar"></label>
  
        <slot v-if="useSlot" />
        <input
          v-else
          class="form-control"
          @focus="$emit('focus')"
          @focusout="$emit('focusout')"
          @blur="$emit('blur', $event.target.value)"
          @input="updateValue"
          :placeholder="placeholder"
          :disabled="disabled"
          :type="type"
          :value="modelValue"
          @keydown="$emit('keydown', $event, $event.target.value)"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    useSlot: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    label: {
      type: String,
      default: '',
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
    type: {
      type: String,
      default: 'text',
      required: false,
    },
    placeholder: {
      type: String,
      default: '',
      required: false,
    },
    col: {
      type: String,
      default: '',
      required: false,
    },
    v: {
      default: '',
      required: false,
    },
    e: {
      default: '',
      required: false,
    },
  })
  
  const myEmit = defineEmits(['update:modelValue', 'blur', 'keydown', 'focus', 'focusout'])
  
  const updateValue = (event) => {
    myEmit('update:modelValue', event.target.value)
  }
  
  // Computed label where * is replaced with red-colored HTML span
  const labelWithRedStar = computed(() => {
    return props.label.replace(/\*/g, '<span style="color: red">*</span>')
  })
  </script>
  