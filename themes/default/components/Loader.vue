<template>
    <div  class="loader_container">
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
.loader_container {
  position: fixed;
  z-index: 999;  
  overflow: show;
  margin: auto;
  width:2rem;
  height:2rem;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
@media (min-width: 700px) {
  .loader_container {
    top: -150px;
  }
}
.loader_container:before {
  content: '';
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(20, 20, 20,.8);
}
.loader {
  width: 68px;
  height: 68px;
  border: 3px dotted #FFF;
  border-style: solid solid dotted dotted;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border: 3px dotted #FF3D00;
  border-style: solid solid dotted;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  animation: rotationBack 1s linear infinite;
  transform-origin: center center;
}
    
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
@keyframes rotationBack {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
} 
   
</style>