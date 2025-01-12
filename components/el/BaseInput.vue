<template>
  <div v-bind="$attrs">
    <div
      class="form-group"
      :class="{ useFlex: useFlex }"
      :style="`--labelWidth:${labelWidth}`"
    >
      <label v-if="label"> {{ label }} <sup v-if="required" class="text-danger" >*</sup> </label>
      <div :tooltip="(modelValue && tooltip) ? tooltip : ''" >
        <div v-if="type == 'file'" class="file-cover">
          <span>Choose File</span>
        </div>
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
          <template v-if="usePasswordToggleMode && type == 'password'">
            <slot v-if="useSlot" />
            <div v-else class="position-relative">
              <input
                class="form-control"
                :class="{compact: compact}"
                ref="input_field"
                :autocomplete="autocomplete"
                @focus="$emit('focus')"
                @focusout="H.delay(()=>$emit('focusout'), focusoutTime)"
                @blur="$emit('blur', $event.target.value)"
                @input="updateValue"
                :placeholder="placeholder"
                :disabled="disabled"
                :type="isShowing ? 'text' : 'password'"
                :value="modelValue"
                @keydown="$event.target.value ? $emit('keydown', $event) : false"
                @keyup.stop="keyUp"
                style="padding-right: 31px"
                :style="input_styles"
                :spellcheck="spelling"
                :id__="id"
                :required="required"
              />
              <slot name="after_input"></slot>
              <i-las
                @click="isShowing = !isShowing"
                t="view"
                class="text-muted"
                style="position: absolute; right: 8px; top: 14px"
              />
            </div>
            <!-- Password Strength -->
            <div
              v-if="password_strength"
              id="password_strength"
              class="d-flex justify-content-start align-items-center mt-1"
              :class="{
                ['strength-id-' + getPasswordStrength(modelValue, 'id')]: true,
              }"
            >
              <span class="strength-level me-2">{{
                getPasswordStrength(modelValue, "text")
              }}</span>
            </div>
          </template>
          <template v-if="type != 'password'">
            <slot v-if="useSlot" />
            <input
              v-else
              class="form-control"
              :class="{compact: compact}"
              ref="input_field"
              :autocomplete="autocomplete"
              @focus="$emit('focus')"
              @focusout="H.delay(()=>$emit('focusout'), focusoutTime)"
              @blur="$emit('blur', $event.target.value)"
              @change="bindAddressPickAndHandFile"
              @input="updateValue"
              :placeholder="placeholder"
              :disabled="disabled"
              :type="type"
              :value="modelValue"
              @keydown="$event.target.value ? $emit('keydown', $event) : false"
              @keyup.stop="keyUp"
              :style="input_styles + ';' + (type=='file' ? 'padding: 13px;': '')"
              :spellcheck="spelling"
              :id__="id"
              v-keep-only-digits="allowDigitsOnly"
              v-keep-only-digits-with-dot="allowDigitsWithDotOnly"
              v-increment-decrement-by-wheel="incDecByWheel"
              :required="required"
            />
            <slot name="after_input"></slot>
          </template>
        </template>
        <slot name="note"></slot>
      </div>
    </div>
    <template v-if="addressSearchFromGoogle">
      <!-- <GoogleAddressPicker
        ref="pickerAddress"
        :countryCode="countryCode"
        @changeAddress="changeAddress"
      ></GoogleAddressPicker> -->
    </template>
  </div>
</template>

<script setup>
let props = defineProps({
  useSlot: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  label: {
    default: "",
    required: false,
  },
  disabled: {
    default: false,
    required: false,
  },
  type: {
    type: String,
    default: "text",
    required: false,
  },
  multiple: {
    type: Boolean,
    default: false,
    required: false,
  },
  placeholder: {
    type: String,
    default: "",
    required: false,
  },
  autocomplete: {
    default: "on",
    required: false,
    type: String,
  },
  usePasswordToggleMode: {
    default: true,
    required: false,
    type: Boolean,
  },
  password_strength: {
    default: false,
    required: false,
  },
  keep_1Ly_numbers: {
    default: false,
    required: false,
    type: Boolean,
  },
  spelling: {
    default: false,
    required: false,
    type: Boolean,
  },
  input_styles: {
    default: "",
    required: false,
    type: String,
  },
  id: {
    type: String,
    default: "",
    required: false,
  },
  required: {
    default: false,
    required: false,
  },
  addressSearchFromGoogle: {
    type: Boolean,
    default: false,
    required: false,
  },
  script: {
    default: true,
    required: false,
  },  
  useFlex: {
    default: false,
    required: false,
  },
  labelWidth: {
    default: "150px",
    required: false,
  },
  tooltip: {
    default: "",
    required: false,
  },
  inputTimeout: {
    default: 0,
    required: false,
  },
  compact: {
    default: false,
    required: false,
  },
  // with directives
  allowDigitsOnly: {
    default: false,
    required: false,
  },
  allowDigitsWithDotOnly: {
    default: false,
    required: false,
  },
  incDecByWheel: {
    default: false,
    required: false,
  },
  focusoutTime: {
    default: 100,
    required: false,
  },
  // -----end ---
  showEffect: {
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
});

let countryCode = ref(null);
let showGoogleComponent = ref(true);

onMounted(() => {
  useNuxtApp().$off("GoogleAddressByCountry");
  useNuxtApp().$on("GoogleAddressByCountry", (code) => {
    countryCode.value = code;
    showGoogleComponent.value = false;
    setTimeout(() => {
      showGoogleComponent.value = true;
    }, 10);
  });
});

let timeout = null;

const myEmit = defineEmits([
  "update:modelValue",
  "blur",
  "keydown",
  "change",
  "focus",
  "focusout",
  "input",
  "changeAddress",
  "keyupEnter",
]);

const updateValue = (event) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    myEmit("input", event.target.value);
  }, Number(props.inputTimeout));
  myEmit("update:modelValue", event.target.value);
};
function keyUp(event) {
  if (event.key === "Enter") {
    myEmit("keyupEnter", event);
  }
}

let isShowing = ref(false);

function getPasswordStrength(password, _return /*text | id*/) {
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const numberRegex = /[0-9]/;
  const symbolRegex = /[$@!%*?&]/;

  if (!password) return "";

  if (password.length < 6) {
    if (_return == "id") return 0;
    if (_return == "text") return "Very weak";
  }

  let strength = 0;
  if (uppercaseRegex.test(password)) strength++;
  if (lowercaseRegex.test(password)) strength++;
  if (numberRegex.test(password)) strength++;
  if (symbolRegex.test(password)) strength++;

  if (_return == "text")
    switch (strength) {
      case 1:
        return "Password is Weak";
      case 2:
        return "Password is Medium";
      case 3:
        return "Password is Strong";
      case 4:
        return "Password is Perfect";
      default:
        return "Invalid password";
    }
  else
    switch (strength) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 3:
        return 3;
      case 4:
        return 4;
      default:
        return false;
    }
}
let random_id = computed(() => "random_" + H.randomBetween(333, 294444));

/* -------------------------------------------------------------------------- */
/*                         With google address search                         */
/* -------------------------------------------------------------------------- */
let pickerAddress = ref(null);
let input_field = ref(null);
function bindAddressPickAndHandFile(e=null) {
  if (props.addressSearchFromGoogle) {
    if (input_field.value && pickerAddress.value.initAutocomplete) {
      pickerAddress.value.initAutocomplete(input_field.value);
    }
  }

  if(e){
    myEmit('change', e.target);
  }
}
watch(pickerAddress, (newVal, oldVal) => {
  if (oldVal == null && newVal) {
    bindAddressPickAndHandFile();
  }
});

function changeAddress(address) {
  myEmit("update:modelValue", address?.address);
  H.delay(() => {
    myEmit("changeAddress", address);
  }, 0);
}

defineExpose({
  input_field
})
</script>

<style scoped>
#password_strength .strength-level {
  color: #dc3545;
}
.file-cover{
  position: absolute;
  content: '';
  width: 102px;
  top: calc(1px);
  left: 1px;
  height: calc(100% - 2px);
  background-color: #1d1d1d;
  border-top-left-radius: 13px;
  border-bottom-left-radius: 13px;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
.file-cover > span{
  color: #7c7c7c;
  padding: 2px 6px;
  border: 1px solid rgb(55, 55, 55);
  border-radius: 8px;
}
/*------------- Level Color----------------*/
#password_strength.strength-id-0 .strength-level {
  color: #dc3545;
}
#password_strength.strength-id-1 .strength-level {
  color: bisque;
}
#password_strength.strength-id-2 .strength-level {
  color: rgb(248, 136, 0);
}
#password_strength.strength-id-3 .strength-level {
  color: rgb(11 182 84);
}
#password_strength.strength-id-4 .strength-level {
  color: rgb(6, 134, 62);
}
.field-error-span {
  font-weight: 400;
}
</style>
