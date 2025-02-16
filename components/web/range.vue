<script setup>


let { min, max } = defineProps({
    min: {
        default: 0,
        type: Number,
        required: false,
    },
    max: {
        default: 100,
        type: Number,
        required: false,
    },
})

let emits = defineEmits(['update:modelValue'])
 

let inputMin = ref(0) // min
let inputMax = ref(100) // max

watch(inputMin, (minVal, oVal) => {
    if(minVal > inputMax.value){
        inputMin.value = +inputMax.value 
    }
})
watch(inputMax, (maxVal, oVal) => {
    if(maxVal < inputMin.value){
        inputMax.value = +inputMin.value + 1
    }
})


let timeout = null
 
let getMinMax = computed(() => {
    let minMax = {
        min: inputMin.value, 
        max: inputMax.value
    }

    if(inputMin.value < inputMax.value){
        minMax.min = inputMin.value
        minMax.max = inputMax.value
        minMax.changed = true
    } 
    if(inputMin.value > inputMax.value){
        minMax.min = inputMax.value
        minMax.max = inputMin.value
        minMax.changed = true
    } 
    if (inputMin.value === inputMax.value) {
        minMax.min = inputMin.value
        minMax.max = +inputMax.value + 1
        minMax.changed = true
    }
    else {
        minMax.changed = false
    }


    // clearTimeout(timeout)

    // timeout = setTimeout(() => {
    //     inputMin.value = minMax.min
    //     inputMax.value = minMax.max
    // }, 100);


    return minMax


})

function updateModelValue(){
    emits('update:modelValue', getMinMax.value)
}
function flipValueAfterChange(){
    // if(inputMin.value > inputMax.value){
    //     let min = inputMin.value
    //     let max = inputMax.value
    //     minMax.min = max
    //     minMax.max = min 
    // }  
}

// Compute progress styles
const progressStyle = computed(() => {
  const range = max - min;
  const left = ((getMinMax.value.min - min) / range) * 100;
  const right = 100 - ((getMinMax.value.max - min) / range) * 100;

  return {
    left: `${left}%`,
    right: `${right}%`,
  };
});


</script>

<template> 
    <div class="wrapper"> 
        <div class="price-input"> 
            <input :value="getMinMax.min" type="number" readonly class="input-min"> 
            <input :value="getMinMax.max" type="number" readonly class="input-max"> 
        </div>
        <div class="slider">
            <div class="progress" :style="`left:${progressStyle.left};right:${progressStyle.right}`" ></div>
        </div>
        <div class="range-input">
            <input v-model="inputMin" @change="flipValueAfterChange" @input="updateModelValue" type="range" class="range-min" :min="min" :max="max" step="1">
            <input v-model="inputMax" @change="flipValueAfterChange" @input="updateModelValue" type="range" class="range-max" :min="min" :max="max" step="1">
        </div>
    </div>  
</template>

<style scoped>
::selection {
  color: #fff;
  background: #17a2b8;
}
.wrapper {
  width: 100%;
  background: #fff;
  border-radius: 10px;
  padding: 20px; 
}
header h2 {
  font-size: 24px;
  font-weight: 600;
}
header p {
  margin-top: 5px;
  font-size: 16px;
}
.price-input {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
} 
.price-input > input {
  width: 48%; 
} 
 
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
 
.slider {
  height: 5px;
  position: relative;
  background: #ddd;
  border-radius: 5px;
}
.slider .progress {
  height: 100%;
  left: 25%;
  right: 25%;
  position: absolute;
  border-radius: 5px;
  background: #17a2b8;
}
.range-input {
  position: relative;
}
.range-input input {
    position: absolute;
    width: 100%;
    height: 0px;
    top: -3px;
    background: none;
    pointer-events: none;
    -webkit-appearance: none;
    -moz-appearance: none;
}
input[type="range"]{
    border: none;
    padding: 0px;
    cursor: pointer;
}
input[type="range"]::-webkit-slider-thumb {
  height: 17px;
  width: 17px;
  border-radius: 50%;
  background: #17a2b8;
  pointer-events: auto;
  -webkit-appearance: none;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
}
input[type="range"]::-moz-range-thumb {
  height: 17px;
  width: 17px;
  border: none;
  border-radius: 50%;
  background: #17a2b8;
  pointer-events: auto;
  -moz-appearance: none;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
}

/* Support */
.support-box {
  top: 2rem;
  position: relative;
  bottom: 0;
  text-align: center;
  display: block;
}
.b-btn {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
.b-btn.paypal i {
  color: blue;
}
.b-btn:hover {
  text-decoration: none;
  font-weight: bold;
}
.b-btn i {
  font-size: 20px;
  color: yellow;
  margin-top: 2rem;
}
</style>