
<template> 
  <div class="wrapper">  
      <div class="price-input mb-4"> 
          <input :value="getMinMax().min" type="number" readonly class="input-min"> 
          <input :value="getMinMax().max" type="number" readonly class="input-max"> 
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



<script setup>


let props = defineProps({
    modelValue: {
      default: {
        min: 0,
        max: 0, 
      }
    },
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

let emits = defineEmits(['update:modelValue', 'change'])
 

let inputMin = ref(props.min) // min
let inputMax = ref(props.max) // max
 

let timeout = null
 
function getMinMax(){
  let minMax = {
    min: inputMin.value, 
    max: inputMax.value, 
  }  
  return minMax
}

function updateModelValue(){
    emits('update:modelValue', getMinMax())
}
function flipValueAfterChange(){ 
  if(Number(inputMin.value) > Number(inputMax.value)){
      let _max = inputMin.value
      let _min = inputMax.value
      inputMin.value = Number(_min)  
      inputMax.value = Number(_max) 
  }
  emits('change', getMinMax())
   
}

// Compute progress styles
const progressStyle = computed(() => {
  const range = props.max - props.min;
  const left = ((getMinMax().min - props.min) / range) * 100;
  const right = 100 - ((getMinMax().max - props.min) / range) * 100;

  return {
    left: `${left}%`,
    right: `${right}%`,
  };
});


onMounted(() => {
   
})

</script>


<style scoped>
 
.wrapper {
  --range-color: #444444; 
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
  border: 1px solid #e3e3e3;
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
  background: var(--range-color);
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
  background: var(--range-color);
  pointer-events: auto;
  -webkit-appearance: none;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
}
input[type="range"]::-moz-range-thumb {
  height: 17px;
  width: 17px;
  border: none;
  border-radius: 50%;
  background: var(--range-color);
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