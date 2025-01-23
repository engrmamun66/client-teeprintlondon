<template>
    <!-- 
        Use Example
        <el-DatePicker v-model="init_date" input-size="bg" @change="loadLogsAndMedia(guard_id, init_date)" />
     -->
    <client-only>
        <div ref="picker">
            <VueCtkDateTimePicker 
            v-bind="{...optionsByTheme, ...$attrs}" 
            v-model="pickDate" 
            class="date-picker"
            :class="{'bg_ash': bg_ash}"
            />
        </div>
    </client-only>
</template>

<script setup>
// npm i --save vue-ctk-date-time-picker
// https://www.npmjs.com/package/nuxt-ctk-date-time-picker
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'

let picker = ref(null)

let props = defineProps({
    modelValue: {
        default: null
    },
    use: {
        default: 'single',
        type: String,
        required: false,
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
  'color': '#000000', // (3)	String (hex)	no	dodgerblue #01da63
  'button-color': '#000000', // (4)	String (hex)	no	#038553
  'position': 'bottom', //	String	no	null (top | bottom)
  'locale': 'en', // (5)	String	no	Browser Locale
  'input-size': 'sm', //	String (sm md or lg)	no	null
  'no-button': false, //	Boolean	no	false
  'button-now-translation': 'Today', //	String	no	'Now'
  'no-button-now': true, //	Boolean	no	false, Show/hide today button
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
  'dark': false, //	Boolean	no	false
  'no-shortcuts': true, //	Boolean	no	false
  'first-day-of-week': 0, //	Int (0 to 7)	no	-
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
        'dark': false, 
        'input-size': 'lg',
        'label': 'Select Date', 
        'right': false, 
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
        'dark': false, 
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
        'dark': false, 
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
        'dark': false, 
        'input-size': 'lg',
        'auto-close': false,
        'overlay': false,
        'minute-interval': 15,
        'only-time': true,
    }
}

let pickDate = ref(useAttrs()?.minDate || props.modelValue || moment().format('YYYY-MM-DD'))

const myEmit = defineEmits(['update:modelValue', 'change'])

onMounted(() => {
    pickDate.value = ''
    pickDate.value = props.modelValue
    if(props.autoOpen){
        setTimeout(() => {
            document.querySelector('#date_picker-input')?.click()
        }, 10);
    }
})


function clearDate(event){
    event.preventDefault();
    
    console.log('fired cleaDate');
    pickDate.value = ''
    myEmit('update:modelValue', pickDate.value)
    myEmit('change', pickDate.value)
    let inputEl = picker.value.querySelector('#date_picker-input')
    if(inputEl) inputEl.value = ''
}

watchEffect(()=>{
    if(!pickDate.value) pickDate.value = props.modelValue
    if(props.modelValue != pickDate.value){
        myEmit('update:modelValue', pickDate.value)
        myEmit('change', pickDate.value)

        setTimeout(() => {
            if(pickDate.value){
                let closeButtons = Array.from(picker.value.querySelectorAll('button.field-clear-button'))
                closeButtons.forEach(closeButton => {
                    closeButton.addEventListener('click', clearDate)
                })
            }
        }, 100);
    }
})
let setwidth = ref(props.w)
let setheight = ref(props.h)

onMounted(() => {
    

})


</script>

<style scoped>
 
</style>