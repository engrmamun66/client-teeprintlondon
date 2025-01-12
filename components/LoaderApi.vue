<template>
    <div v-bind="$attrs" class="loader_container">
      <span class="loader"></span>
    </div>
</template>

<script setup>
let props = defineProps({
  left:{
    default: '0px', //left: 66px; for login page
    type: String
  }
});
</script>

<style scoped>
/* Absolute Center Spinner */

.loader {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: block;
  margin:15px auto;
  position: absolute;
  left: 50%;
  top: 15px;
  top: 40vh;
  color: #969696;
  box-sizing: border-box;
  animation: animloader .6s linear infinite;
  z-index: 999999999999;
}

@media screen and (max-width: 700px){
  .loader{
    top: 40vh;
  }
}

@keyframes animloader {
  0% {
    box-shadow: 14px 0 0 -2px,  38px 0 0 -2px,  -14px 0 0 -2px,  -38px 0 0 -2px;
  }
  25% {
    box-shadow: 14px 0 0 -2px,  38px 0 0 -2px,  -14px 0 0 -2px,  -38px 0 0 2px;
  }
  50% {
    box-shadow: 14px 0 0 -2px,  38px 0 0 -2px,  -14px 0 0 2px,  -38px 0 0 -2px;
  }
  75% {
    box-shadow: 14px 0 0 2px,  38px 0 0 -2px,  -14px 0 0 -2px,  -38px 0 0 -2px;
  }
  100% {
    box-shadow: 14px 0 0 -2px,  38px 0 0 2px,  -14px 0 0 -2px,  -38px 0 0 -2px;
  }
}

@media screen and (min-width: 1200px){
  
}

@keyframes rotate {
  0% {
    transform: translate(-50%, -50%) rotateZ(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotateZ(360deg);
  }
}

@keyframes rotateccw {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}

@keyframes spin {
  0%,
  100% {
    box-shadow: .7em 0px 0 0px currentcolor;
  }
  12% {
    box-shadow: .7em .7em 0 0 currentcolor;
  }
  25% {
    box-shadow: 0 .7em 0 0px currentcolor;
  }
  37% {
    box-shadow: -.7em .7em 0 0 currentcolor;
  }
  50% {
    box-shadow: -.7em 0 0 0 currentcolor;
  }
  62% {
    box-shadow: -.7em -.7em 0 0 currentcolor;
  }
  75% {
    box-shadow: 0px -.7em 0 0 currentcolor;
  }
  87% {
    box-shadow: .7em -.7em 0 0 currentcolor;
  }
}
   
</style>