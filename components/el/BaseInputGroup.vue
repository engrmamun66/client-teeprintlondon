<script setup>
/**
 * ====USE EXAMPLE=====
   <el-BaseInputGroup 
   v-model:input2="test" 
   :label="false" 
   v-model="payload.data.hourly.duration" 
   class="col-md-3 col-12" leftSide="" 
   :allowDigitsOnly="true" 
   :showEffect="showEffect" 
   placeholder="Duration" 
   placeholder2="Amount" 
   rightSide="units"
   v-model:select="yourVariable Here"
   ></el-BaseInputGroup>
 */
let props = defineProps({
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
  /* -------------------------------------------------------------------------- */
  /*                                 with input2                                */
  /* -------------------------------------------------------------------------- */
  input2: {
    default: undefined,
    required: false,
  },
  placeholder2: {
    type: String,
    default: "",
    required: false,
  },
  allowDigitsOnly2: {
    default: false,
    required: false,
  },
  allowDigitsWithDotOnly2: {
    default: false,
    required: false,
  },
  incDecByWheel2: {
    default: false,
    required: false,
  },
  type2: {
    type: String,
    default: "text",
    required: false,
  },

  /* ------------------------------- End Input2 ------------------------------- */
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
  input_styles: {
    default: "",
    required: false,
    type: String,
  },
  compact: {
    default: false,
    required: false,
    type: Boolean,
  },
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
  /* -------------------------------------------------------------------------- */
  /*                         with leftSide and rightSide                        */
  /* -------------------------------------------------------------------------- */
  leftSide:{
    /**
      1. currency: If you pass "currency", It will set currency symbol as store config
      2. currency_code: If you pass "currency_code", It will set currency code (e.g. USD) as store config
      3. Or, you can pass any short text
    */
    default: 'currency', // currency | time_icon 
  },
  rightSide:{
    /**
      1. currency: If you pass "currency", It will set currency symbol as store config
      2. currency_code: If you pass "currency_code", It will set currency code (e.g. USD) as store config
      3. Or, you can pass any short text
      4. units: To show units list
    */
    default: '',
  },
  select:{
    default: null,
    required: false,
  },
  /* --------------------- End with leftSide and rightSide -------------------- */
});

let timeout = null;

const myEmit = defineEmits([
  "update:modelValue",
  "update:input2",
  "update:select",
  "input",
  "select", // for leftSide and rightSide
  "input2",
]);

const updateValue = (event) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    myEmit("input", event.target.value);
  }, Number(props.inputTimeout));
  myEmit("update:modelValue", event.target.value);
};

const updateValue2 = (event) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    myEmit("input2", event.target.value);
  }, Number(props.inputTimeout));
  myEmit("update:input2", event.target.value);
};

const listData = {
  units: [
    {
      id: 'pound',
      name: 'lb',
    },
    {
      id: 'kilogram',
      name: 'kg',
    },
    {
      id: 'ounce',
      name: 'oz',
    },
  ],
}

</script>

<template>  
    <div v-bind="$attrs">
          <div class="form-group">
              <label v-if="label !== false"class="form-label">{{ label }}</label>
              <div class="input-group" :tooltip="(modelValue && tooltip) ? tooltip : ''"> 

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
                    <template v-if="leftSide == 'currency'" >
                      <slot name="leftSide">
                        <span class="input-group-text">
                          {{ useCookie('rentmy_currency_symbol').value || '' }}
                        </span>
                      </slot>
                    </template>
                    <template v-else-if="leftSide == 'currency_code'" >
                      <slot name="leftSide">
                        <span class="input-group-text small">
                          {{ useCookie('rentmy_currency_code').value || '' }}
                        </span>
                      </slot>
                    </template>
                    <template v-else-if="leftSide == 'time_icon'" >
                      <slot name="leftSide">
                        <span class="input-group-text">
                          <i data-v-2af38ec0="" class="la la-clock"></i>
                        </span>
                      </slot>
                    </template>
                    <template v-else-if="leftSide" >
                      <slot name="leftSide">
                        <span class="input-group-text" :class="{small: leftSide?.length > 1}" >
                          {{ leftSide }}
                        </span>
                      </slot>
                    </template>
  
               
                    <input 
                    :type="type"
                    :value="modelValue"
                    :placeholder="placeholder" 
                    @input="updateValue"
                    v-keep-only-digits="allowDigitsOnly"
                    v-keep-only-digits-with-dot="allowDigitsWithDotOnly"
                    v-increment-decrement-by-wheel="incDecByWheel"
                    class="form-control" />

                    <input 
                    v-if="input2 !== undefined"
                    :placeholder="placeholder2"
                    :value="input2"
                    :type="type2"
                    v-keep-only-digits="allowDigitsOnly2"
                    v-keep-only-digits-with-dot="allowDigitsWithDotOnly2"
                    v-increment-decrement-by-wheel="incDecByWheel2"
                    class="form-control secondInput"
                    @input="updateValue2"
                    />

  
                    
                    <template v-if="rightSide == 'units'" >
                      <span class="input-group-text input-group-select">
                        <slot name="rightSide">
                          <select class="form-control" :value="select" @change="({target}) => {
                            $emit('select', target.value);
                            myEmit('update:select', target.value);
                          }" >
                            <template v-for="(unit, i) in listData.units" :key="i" >
                              <option :value="unit.id" :selected="select == unit.id" > {{ unit?.['name'] || ('---' + i) }} </option>
                            </template>
                          </select>
                        </slot>
                      </span>
                    </template>
                    <template v-else-if="rightSide == 'currency'" >
                      <slot name="rightSide">
                        <span class="input-group-text">
                          {{ useCookie('rentmy_currency_symbol').value || '$' }}
                        </span>
                      </slot>
                    </template>
                    <template v-else-if="rightSide == 'currency_code'" >
                      <slot name="rightSide">
                        <span class="input-group-text small">
                          {{ useCookie('rentmy_currency_code').value || '' }}
                        </span>
                      </slot>
                    </template>
                    <template v-else-if="rightSide" >
                      <slot name="rightSide">
                        <span class="input-group-text" :class="{small: rightSide?.length > 1}">
                          {{ rightSide }}
                        </span>
                      </slot>
                    </template>

                  </template>

              </div>
          </div>
      </div>
</template> 

<style scoped>
.input-group-text.small{
  font-size: 14px;
}
.form-control.secondInput{
  margin-left:1px !important;
}
.input-group-text ~ .form-control{
  margin-left:1px !important;
}
.form-control:has(~ span.input-group-text){
  margin-right:2px !important;
}

</style>