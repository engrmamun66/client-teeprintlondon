<script setup>
let props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  label: {
    type: String,
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
  type: {
    type: String,
    default: "text",
    required: false,
  },
  placeholder: {
    type: String,
    default: "",
    required: false,
  },
  tooltip: {
    type: String,
    default: "",
    required: false,
  },
  inputTimeout: {
    default: 0,
    required: false,
  },
});

let timeout = null;

const myEmit = defineEmits([
  "update:modelValue",
  "input",
]);

const updateValue = (event) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    myEmit("input", event.target.value);
  }, Number(props.inputTimeout));
  myEmit("update:modelValue", event.target.value);
};

</script>

<template>
    <div v-bind="$attrs">
        <div class="form-group">
            <label v-if="label !== false"class="form-label">{{ label }}</label>
            <div class="input-group" :tooltip="(modelValue && tooltip) ? tooltip : ''">                              
                <span class="input-group-text" > {{ useCookie('rentmy_currency_symbol').value || '$' }} </span>
                <input 
                :type="type"
                :placeholder="placeholder" 
                @input="updateValue"
                class="form-control" />
            </div>
        </div>
    </div>
</template> 