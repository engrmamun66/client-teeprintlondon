<template>
  <div class="d-flex align-items-center">
    <span class="me-2" :style="{ color: textColor }">{{ text }}</span>
    <div class="bouncing-dots">
      <span 
        v-for="i in dotCount" 
        :key="i" 
        class="dot" 
        :style="{
          width: dotSize,
          height: dotSize,
          backgroundColor: dotsColor
        }"
      ></span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: 'Loading'
  },
  textColor: {
    type: String,
    default: 'red'
  },
  dotsColor: {
    type: String,
    default: '#0d6efd' // Bootstrap primary
  },
  dotSize: {
    type: String,
    default: '8px'
  },
  dotCount: {
    type: Number,
    default: 3,
    validator: (value) => value > 0 && value <= 5
  }
});
</script>

<style scoped>
.bouncing-dots {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.bouncing-dots .dot {
  display: inline-block;
  border-radius: 50%;
  animation: bounce 1.4s infinite ease-in-out;
}

.bouncing-dots .dot:nth-child(1) {
  animation-delay: -0.32s;
}
.bouncing-dots .dot:nth-child(2) {
  animation-delay: -0.16s;
}

@keyframes bounce {
  0%,
  80%,
  100% {
    transform: translateY(0);
    opacity: 0.5;
  }
  40% {
    transform: translateY(-10px);
    opacity: 1;
  }
}
</style>