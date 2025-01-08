<script setup>
let props = defineProps({
    useSlot: {
        type: Boolean,
        default: false,
    },
    modelValue: {
        type: [String, Number],
        default: ''
    },
    label:{
        type: String, 
        default:'',
        required: false,
    },
    countryCode:{
        default: globalData.defultCountry.code, // for US
        required: false,
    },
    labelPop:{
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
    autocomplete:{
        default:'on',
        required: false,
        type: String
    },
    usePasswordToggleMode:{
        default: true,
        required: false,
        type: Boolean
    },
    generateBtn:{
        default: false,
        required: false,
        type: Boolean,
    },
    password_strength:{
        default: false,
        required: false,
        type: Boolean,
    },
    keep_1Ly_numbers:{
        default: false,
        required: false,
        type: Boolean
    },
    spelling:{
        default: false,
        required: false,
        type: Boolean
    },
    labelFontSize:{
        default: '',
        required: false,
        type: String
    },
    input_styles:{
        default: '',
        required: false,
        type: String
    },
    fgStyle:{
        default: '',
        required: false,
        type: String
    },
    id:{
        type: String, 
        default: '',
        required: false,
    },
    size:{
        type: String, 
        default: 'md', // this in input size --- sm | md 
        required: false,
    },
    bg:{
        type: String, 
        default: '',
        required: false,
    },
    withLabel:{
        default: false,
        required: false,
        type: Boolean
    },

});

const myEmit = defineEmits(['update:modelValue', 'blur', 'keydown', 'focus', 'focusout', 'changeCountry'])
const updateValue = (event) => {
    myEmit('update:modelValue', event.target.value);
}
function keyUp(modelValue){
    modelValue = String(modelValue)
    if(props.keep_1Ly_numbers) modelValue = modelValue?.replace(/\D/g, '')    
    myEmit('update:modelValue', modelValue)
}

let isFocused = ref(false);
let this_element = ref(null);
let searchVal = ref(null);
let showDropdown = ref(false);

let getAllCountries = computed(() => {
    if(searchVal.value){
        return globalData.countries.filter(item => {
            let name = item.name.toLocaleLowerCase();
            let countryCode = item.code.toLocaleLowerCase();
            let phoneCode = item.phoneCode.toLocaleLowerCase();
            let text = searchVal.value.toLocaleLowerCase();
            return (
                name.indexOf(text) > -1 
                || phoneCode.indexOf(text) > -1
                || (`${name} ${phoneCode}`).indexOf(text) > -1
                || countryCode === text
            )
        })
    } else {
        return globalData.countries;
    }
})


let random_id = ref(null);

onMounted(() => {
    random_id.value = 'random_' + H.randomBetween(333, 294444);
    document.body.addEventListener('click', function(e){
        showDropdown.value = false;
    })
})

let getCountry = computed(() => {
    return globalData.countries?.filter(c => c.code == props.countryCode)?.[0]
})

function onClickDisplayDropdown(){
    showDropdown.value = !showDropdown.value; 
    if(showDropdown.value){
        setTimeout(() => {
            let searchEl = this_element.value.querySelector('.searchbox');
            if(searchEl){
                searchEl.focus();
            }
        }, 100);
    }
}

function onClickCountry(country){
    myEmit('changeCountry', country);
    // searchVal.value = null;
    showDropdown.value = false;
}

</script>

<template>
    <div :class="[!withLabel ? 'w-100' : '']" v-bind="$attrs" ref="this_element">
        <div :style="(size=='sm' ? 'margin-bottom:10px;' : '') + ';position:relative;'">
            <input class="form-control" 
            v-bind="$attrs.style"
            :autocomplete="autocomplete"
            @focus="()=>{$emit('focus');isFocused=true}" 
            @focusout="()=>{$emit('focusout');isFocused=false}" 
            @blur="$emit('blur', $event.target.value)" 
            @input="updateValue" 
            :placeholder="!labelPop ? placeholder : ''"
            :disabled="disabled" :type="type" :value="modelValue" 
            @keydown="$event.target.value ? $emit('keydown', $event) : false" 
            :style="(size=='sm' ? 'height:40px;' : '') + (bg ? `;background-color:${bg}` : '') + ';padding-left: 140px;' + input_styles"
            :spellcheck="spelling"
            :id="id || random_id"
            />
            <div class="flag-area">
                <div @click.stop="onClickDisplayDropdown()" class="d-flex justify-content-between align-items-center cp" :tooltip="`${getCountry?.name} (${getCountry.code})`" flow="up">
                    <div class="d-flex justify-content-start">
                        <Flag :country="getCountry?.code" class="flag" style="font-size:22px"></Flag>
                        <p> {{ getCountry?.phoneCode }} </p>
                    </div>
                    <i-las t="down-arrow" class="text-white-50" style="font-size:10px"></i-las>
                </div>
            </div>
            <div v-show="showDropdown" @click.stop="false">
                <input v-model="searchVal" type="search" class="searchbox" :class="{fadeUp: showDropdown}" placeholder="Search by name or code ..." style="width: 280px">  
                <div class="flag-dropdown py-2" :class="{fadeUp: showDropdown}" @focusout="showDropdown=false" style="width: 280px">     
                    <i @click.stop="searchVal = null; showDropdown = false" class='bx bx-x-circle close-icon'></i>        
                    <ul class="">     
                        <template v-for="(country, index) in getAllCountries" :key="index">
                            <li @click.stop="onClickCountry(country)">                                    
                                <div class="d-flex justify-content-between">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <Flag :country="country?.code" class="text-white me-2" style="font-size:12px" />
                                        <span> {{ country.name }} </span>
                                        <span class="mx-1 size-08"> ({{ country.code }}) </span>
                                    </div>
                                    <span class="phone-code"> {{ country.phoneCode }} </span>
                                </div>                     
                            </li>
                        </template>
                    </ul>
                </div>
            </div> 
        </div>
    </div>
</template>


<style scoped> 

.password_strength{
    margin-top: 6px;
}
.password_strength .strength{
    width: 60px;
    height: 8px;
    padding: 0px;
    margin: 0px;
    color: transparent;
    border-radius: 8px;
}
.password_strength .strength:first-child{
    margin-left: 5px;
}
.password_strength .strength:not(:first-child){
    margin-left: 5px;
}
.password_strength .strength-id-0{
    background-color: #DC3545;
}
.password_strength .strength-id-1{
    background-color: bisque;
}
.password_strength .strength-id-2{
    background-color: rgb(248, 136, 0);
}
.password_strength .strength-id-3{
    background-color: rgb(35 144 82);
}
.password_strength .strength-id-4{
    background-color: rgb(11 182 84);
}
.password_strength .password-label{
    background-color: transparent;
    height: auto;
    width: auto;
    margin-left: 5px;
    text-transform: lowercase;
    margin-top: -23px;
    transform: translateY(14px);
    font-weight: 400;
}
.password_strength .password-label.strength-id-0{
    color: #DC3545;
}
.password_strength .password-label.strength-id-1{
    color: bisque;
}
.password_strength .password-label.strength-id-2{
    color: rgb(248, 136, 0);
}
.password_strength .password-label.strength-id-3{
    color: rgb(35 144 82);
}
.password_strength .password-label.strength-id-4{
    color: rgb(11 182 84);
}


.generate-password{
    position: absolute;
    background-color: transparent;
    color: var(--fontcolor-darkwhite-4);
    margin: 0px;
    padding: 2px 3px;
    border-radius: 3px;
    transition: all 0.3s;
    z-index: 1;
    font-size: 14px;
    cursor: pointer;
    font-family: inherit;
    background-color: var(--props-bg, #171723);
    color: var(--fontcolor-darkwhite-5);
    font-size: 13px;
    right: 9px;
    top: -12px;
}
.generate-password:hover{
    color: var(--fontcolor-darkwhite-3);
}
.label-pop{
    position: absolute;
    background-color: transparent;
    color: var(--fontcolor-darkwhite-4);
    margin: 0px;
    padding: 2px 3px;
    border-radius: 3px;
    transition: all 0.3s;
    z-index: 1;
    font-size: 14px;
    left: 130px;
    top: 11px;
    pointer-events: none !important;
    font-family: inherit;
}
.label-pop:not(.move-top){
    color: var(--fontcolor-darkwhite-5)
}
.label-pop.move-top{
    background-color: var(--props-bg, #171723);
    color: var(--fontcolor-darkwhite-5);
    font-size: 13px;
    top: -10px;
    left: 9px;
    left: 130px;
}

.flag-area{
    background-color: #0f0f16;
    border-bottom-left-radius: 13px;
    border-right: 1px solid var(--fontcolor-black-5);
    border-top-left-radius: 13px;
    height: 41px;
    left: 4px;
    padding: 7px 11px;
    position: absolute;
    top: 4px;
    z-index: 100;
}
.flag-area .flag ~ p{
    font-size: 14px;
    width: 56px;
    text-align: center;
    max-height: 25px;
    overflow-y: auto;
}
input.searchbox,
input.searchbox:focus-visible {
    outline: none;
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background-color: #161621;
    color: var(--fontcolor-darkwhite-5);
    z-index: 122323;
    padding: 15px;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid var(--fontcolor-black-5);
    height: 36px;
    overflow-y: auto;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
}
i.close-icon {
    position: absolute;
    top: -32px;
    right: 10px;
    color: #999999;
    z-index: 122324;
    font-size: 15px;
    padding: 8px;
    cursor: pointer;
    transition: all 0.3s;
}
i.close-icon:hover {
    color: #ef9292;
}
.flag-dropdown {
    position: absolute;
    top: 75px;
    left: 0;
    width: 100%;
    height: 42px;
    background-color: #161621;
    z-index: 122323;
    padding: 10px;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid var(--fontcolor-black-5);
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    box-shadow: 0px 14px 34px #000000d4;
    height: 170px;
}
.flag-dropdown ul {
    height: 100%;
    overflow-y: auto;
}
.flag-dropdown li{
    color: var(--fontcolor-darkwhite-4);
    margin: 0;
    cursor: pointer;
    padding: 0px 5px;
    transition: all 0.2s;
    margin: 4px 0px;
}
.flag-dropdown li:hover{
    border-bottom: var(--bgcolor-tertiary);
    color: white;
    background-color: rgb(8, 44, 97);
    border-radius: 10px;
}
.flag-dropdown li span{
    font-weight: 400;
}
.flag-dropdown li span.phone-code{
    padding: 0px 5px;
    border-radius: 10px;
    font-size: 13px;
    background-color: rgb(8, 44, 97);
}

</style>