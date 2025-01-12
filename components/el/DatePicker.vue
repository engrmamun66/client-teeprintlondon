<template>
    <!-- 
        Use Example
        <el-DatePicker use="single" v-model="init_date" input-size="bg" @change="loadLogsAndMedia(guard_id, init_date)" />
     -->
    <client-only>
        <VueCtkDateTimePicker 
        v-bind="{...optionsByTheme, ...$attrs}" 
        v-model="pickDate" 
        class="date-picker"
        :class="{'bg_ash': bg_ash}"
        />
    </client-only>
</template>

<script setup>
// npm i --save vue-ctk-date-time-picker
// https://www.npmjs.com/package/nuxt-ctk-date-time-picker
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'

let props = defineProps({
    modelValue: {
        default: null
    },
    use: {
        default: 'single',
        type: String,
        required: true,
    },
    w: {
        default: '150px',
        type: String,
        required: false,
    },
    h: {
        default: '40px',
        type: String,
        required: false,
    },
    bg_ash: {
        default: false,
        type: [String, Boolean],
        required: false,
    },
    autoOpen: {
        default: false,
        type: [Boolean],
        required: false,
    },
    textAlign: {
        default: 'left', // left-center-right
        type: String,
        required: false,
    },
})
let pickerConfig = {
  'id': 'date_picker', //	String	no	'YYYY-MM-DD hh:mm a'
  'format': 'YYYY-MM-DD hh:mm a', //	String	no	'YYYY-MM-DD hh:mm a'
  'formatted': 'Do MMM YYYY', //	String	no	'llll' (momentjs format) [MMM Do YY] (Displaying format)
  'output-format': 'YYYY-MM-DD', //	String	no	null
  'no-label': true, //	Boolean	no	false
  'label': null, //	String	no	Select date & time
  'disabled': false, //	Boolean	no	false
  'hint': 'Hello Mr Mamun', // (1)	String	no	-
  'error': false, // (2)	Boolean	no	false
  'color': '#038553', // (3)	String (hex)	no	dodgerblue #01da63
  'button-color': '#038553', // (4)	String (hex)	no	#038553
  'position': 'bottom', //	String	no	null (top | bottom)
  'locale': 'en', // (5)	String	no	Browser Locale
  'input-size': 'sm', //	String (sm md or lg)	no	null
  'no-button': false, //	Boolean	no	false
  'button-now-translation': 'Today', //	String	no	'Now'
  'no-button-now': false, //	Boolean	no	false
  'persistent': false, //	Boolean	no	false (Note: If true, always opened calendar)
  'minute-interval': 15, //	Integer	no	1
  'only-time': false, //	Boolean	no	false
  'only-date': false, //	Boolean	no	false
  'no-header': true, //	Boolean	no	false
  'no-value-to-custom-elem': true, // (6)	Boolean	no	false
  'min-date': null, // (7)	String	no	- (eg. 2023-05-02)
  'max-date': null, // (7)	String	no	- (eg. 2023-05-10)
  'no-weekends-days': false, //	Boolean	no	false
  'auto-close': false, //	Boolean	no	false
  'inline': false, //	Boolean	no	false
  'overlay': false, //	Boolean	no	false
  'range': false, //	Boolean	no	false
  'dark': true, //	Boolean	no	false
  'no-shortcuts': true, //	Boolean	no	false
  'first-day-of-week': useNuxtApp().$Config('SHIFT').weekDayStart, //	Int (0 to 7)	no	-
  'disabled-dates': [], // (8)	Array<string>	no	[]
  'disabled-hours': [], // (9)	Array<string>	no	-
  'disabled-weekly': [], // (11)	Array<integer>	no	[]
  'no-keyboard': false, // (12)	Boolean	no	false
  'right': false, // (13)	Boolean	no	false
  'noClearButton': false, //	Boolean	no	false
}

let optionsByTheme = ref({})
if(props.use == 'single'){
    optionsByTheme.value = {
        ...pickerConfig, 
        'dark': true, 
        'input-size': 'lg',
        'label': 'Select Date', 
        'right': true, 
        'only-date': true,
        'auto-close': true,
        'no-button': false,
        'overlay': false,
        'formatted': 'MM-DD-YYYY',
    }
}
else if(props.use == 'range'){
    optionsByTheme.value = {
        ...pickerConfig, 
        'range': true,
        'dark': true, 
        'input-size': 'lg',
        'label': 'Select Date', 
        'right': false, 
        'only-date': true,
        'auto-close': false,
        'no-shortcuts': true,
        'overlay': false,
        'formatted': 'll',
    }
}
else if(props.use == 'range2'){
    optionsByTheme.value = {
        ...pickerConfig, 
        'range': true,
        'dark': true, 
        'input-size': 'lg',
        'label': 'Select Date', 
        'right': false, 
        'only-date': true,
        'auto-close': false,
        'no-shortcuts': false,
        'overlay': false,
        'formatted': 'll',
    }
}
else if(props.use == 'time'){ 
    optionsByTheme.value = {
        ...pickerConfig, 
        'format': 'HH:mm', // to show 24 hours
        'formatted': 'hh:mm A', // Display Format
        'error': true, 
        'dark': true, 
        'input-size': 'lg',
        'auto-close': false,
        'overlay': false,
        'minute-interval': 15,
        'only-time': true,
    }
}

let pickDate = ref('')

const myEmit = defineEmits(['update:modelValue', 'change'])

onMounted(() => {
    pickDate.value = props.modelValue
    if(props.autoOpen){
        setTimeout(() => {
            document.querySelector('#date_picker-input')?.click()
        }, 10);
    }
})
watchEffect(()=>{
    if(!pickDate.value) pickDate.value = props.modelValue
    if(props.modelValue != pickDate.value){
        myEmit('update:modelValue', pickDate.value)
        myEmit('change', pickDate.value)
    }
})
let setwidth = ref(props.w)
let setheight = ref(props.h)
</script>

<style scoped>
:global(.date-picker) {
    text-align: v-bind(textAlign);
}
:global(.date-picker) {
    color: azure;
    border: 1px solid #1d1d1d !important;
    background-color: #1d1d1d !important;
}
:global(.date-picker.bg_ash) {
    background-color: #1e1e2d !important;
}
:global(div.date-time-picker:has( input.date-picker)) {
    width: 200px !important;
    height: v-bind(setheight) !important;
}
:global(div.date-time-picker input.date-picker) {
    padding-right: 12px !important;
}
:global(div:has( > input.date-picker) button.custom-button.is-dark),
:global(div:has( > input.date-picker) button.custom-button.is-dark:hover)
{
    background-color: transparent!important;
    width: 20px;
    height: 20px;
}
:global(div:has( > input.date-picker) button.custom-button.is-dark:hover span),
:global(div:has( > input.date-picker) button.custom-button.is-dark:hover span:hover)
{
    background-color: transparent!important;
}
:global(div:has( > input.date-picker) button.custom-button.is-dark span)
{
    display: none; /*Hide close button*/
}
:global(.date_picker-wrapper) {
    background: #161621!important;
}
:global(.pickers-container:has(.is-dark)),
:global(.year-month-selector.dark)
{
    background: #161621!important;
    color: #fff;
    border: 0;
}
:global(.field.is-dark.is-disabled .field-input), 
:global(.field.is-dark.is-disabled .field-label) {
    color: #999999 !important;
    font-weight: 500;
}
.year-month-selector.dark {
    color: #fff;
    background-color: #030303;
}
:global(.date-time-picker .lm-fs-12) {
    font-size: 12px!important;
    color: #d2d2d2;
}
:global(.datepicker-buttons-container),
:global(.pickers-container:has(.is-dark) .custom-button.is-dark) ,
:global(.datepicker-buttons-container.is-dark .datepicker-button), 
:global(.datepicker-buttons-container.is-dark) 
{
    background-color: #10101a!important;
}
:global(.field.lg .field-input) {
    font-size: 14px !important;
}
</style>