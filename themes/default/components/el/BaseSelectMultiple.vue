<template>
    <div v-bind="$attrs" @mouseleave="showOptions = false">
        <div :class="{'form-group': useFormGroup}">
            <div class="btn-options-toggler">
                <label v-if="label"> {{ label }} </label>
                <button :disabled="!data?.length" @click="showOptions = !showOptions" class="form-control padding-as-input text-start" @input="updateValue" @change="updateValue" >
                    <div v-if="modelValue.length" class="selected-items">
                        <a class="selected-item --animate-show2"
                        v-for="(item, index) in getSelectedItems" :key="index" :value="valueKey ? item[valueKey] : item" 
                        >
                            {{ (displayKey ? item[displayKey] : '') }} {{ (displayKey2 ? item[displayKey2] : '') }}  <i-las @click="removeValue($event, index)" t="close" class="close ms-1" /> 
                        </a>
                    </div>
                    <p v-else :class="{'text-muted': (disabled || !data?.length)}"> {{ option1 }} </p>
                    <i-las t="down-arrow" fontSize="12px" style="position:absolute;right:8px;top:15px" />
                </button>
                <ul v-if="data?.length" class="option-box py-2" 
                :class="{'--animate-show': showOptions, '--animate-hide': !showOptions}">
                    <input v-if="search" type="search" class="form-control mb-2" />
                    <li class="ps-2"
                    v-for="(item, index) in data" :key="index" :value="valueKey ? item[valueKey] : item" 
                    @click="updateValue($event, item[valueKey], item, index)" 
                    :class="{selected: modelValue.includes(item[valueKey])}"> 
                        <div class="px-1 d-flex justify-content-between">
                            <a> {{ (displayKey ? item[displayKey] : '') }} {{ (displayKey2 ? item[displayKey2] : '') }} </a>
                            <a> <i-las v-if="modelValue.includes(item[valueKey])" t='check-circle' /> <i-las v-else t='circle' /> </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
let props = defineProps({
    modelValue: {
        type: [Array],
        default: []
    },
    useFormGroup:{
        type: Boolean, 
        default:true,
        required: false,
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
        type: [Boolean, String], 
        default:'name',
        required: false,
    },
    charLimit:{
        type: Number, 
        default: 999,
        required: false,
    },
    /* ------------------------ */
    /* =========Search========= */
    /* ------------------------ */
    search:{
        type: Boolean, 
        default: false,
        required: false,
    },
})
const showOptions = ref(false)
const getSelectedItems = ref([])
const myEmit = defineEmits(['update:modelValue', 'remove-item', 'changed-item', 'clicked'])
const updateValue = (event, id, item, index) => {
    event.stopPropagation();
    if(!props.modelValue.includes(id)){
        props.modelValue.push(id)
        getSelectedItems.value.push(item)
    }else{
        let index = props.modelValue.indexOf(id)
        if(index != -1) {
            props.modelValue.splice( index, 1 )
            getSelectedItems.value.splice( index, 1 )
            myEmit('remove-item', {item, index})
        }
    }
    myEmit('changed-item', getSelectedItems.value)
}
const removeValue = (event, i) => {
    event.stopPropagation();
    props.modelValue.splice( i, 1 )
    getSelectedItems.value.splice( i, 1 )
    myEmit('changed-item', getSelectedItems.value)
    myEmit('remove-item', getSelectedItems.value)
}
function updateByInterval(){
    try {
        let modelValue = props.modelValue
        let data = props.data
        if (data?.length && modelValue?.length)
            getSelectedItems.value = data.filter(item => modelValue.includes(item.id))
    } catch (error) {
        console.warn('File:BaseSelectMultiple.vue >> updateByInterval()::', error);
    }
}
let intervalID
function start(){
    intervalID = setInterval(updateByInterval, 100);
}
function stop(){
    clearInterval(intervalID);
}
onMounted(() => {
    start()
    let resetBtn = document.querySelector('button[type=reset]')
    if(resetBtn){
        resetBtn.addEventListener('click', (e)=>{
            getSelectedItems.value = []
        })
    }
})
onBeforeUnmount(() => {
    stop();
    getSelectedItems.value = []
})
</script>
<style scoped>
.btn-options-toggler {
    position: relative;
}
.btn-options-toggler button {
    position: relative;
    min-height: 40px;
    height: auto;
    width: 100% !important;
    padding-right: 25px;
}
.btn-options-toggler button .selected-items {
    float: left;
}
.btn-options-toggler button .selected-items .selected-item {
    display: flex;
    float: left;
    align-items: center;
    border: none;
    background-color: #050505;
    padding: 0px 3px !important;
    position: relative;
    color: rgb(172, 172, 172);
    margin-right: 0.5rem;
    margin-bottom: 0.2rem;
    border-radius: 3px;
}
.btn-options-toggler button .selected-items .selected-item > .close {
    padding-top: 3px;
}
.btn-options-toggler .option-box {
    position: absolute;
    right: 0;
    /**top: v-bind(top)px;*/
    max-width: 250px;
    min-width: 100%;
    border: 1px solid;
    border-radius: 5px;
    background-color: #000000;
    z-index: 22;
    padding: 12px 15px !important;
    border: none;
    max-height: 250px;
    overflow-y: scroll;
    border-top: 1px solid;
}
.btn-options-toggler .option-box::before {
    content: '';
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 12px solid #000000;
    position: absolute;
    top: -8px;
    border-radius: 17px;
    right: 12px;
    z-index: 21;
}
.btn-options-toggler .option-box li {
    width: 100%;
    margin: 0;
    border-radius: 0;
    padding: 4px 0;
    cursor: pointer;
}
.btn-options-toggler .option-box li:hover {
    width: 100%;
    margin: 0;
    border-radius: 0;
    background-color: #242433;
}
.btn-options-toggler .option-box li.selected {
    width: 100%;
    margin: 0;
    border-radius: 0;
    background-color: #2d4038;
}
.btn-options-toggler .option-box li a,
.btn-options-toggler .option-box li i,
.btn-options-toggler .option-box li .las,
.btn-options-toggler .option-box li a:hover {
    color: #adadaf;
    border-radius: 0;
    background-color: transparent;
    cursor: pointer;
    font-size: 14px;
}
</style>