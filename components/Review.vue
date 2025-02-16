<script setup>
import { ref, onMounted } from 'vue';
import { useHead } from '#imports';

const widgetId = "d0b99e741d5c5237cc365589e66";
const isLoaded = ref(false);

// Dynamically load TrustIndex script
useHead({
  script: [
    {
      src: `https://cdn.trustindex.io/loader.js?${widgetId}`,
      async: true,
      defer: true,
    },
  ],
});

onMounted(() => {
  const initTrustIndex = () => {
    if (typeof Trustindex !== "undefined" && Trustindex.initWidgetsFromDom) {
      Trustindex.initWidgetsFromDom();
      console.log("✅ TrustIndex widget initialized.");
      isLoaded.value = true;
    } else {
      console.error("❌ TrustIndex failed to load. Retrying...");
      setTimeout(initTrustIndex, 2000); // Retry after 500ms
    }
  };

  // Start initialization
  initTrustIndex();
});
</script>

<template>
  <ClientOnly>
    <div class="review-container">
      <h2>Google Reviews</h2>
      <div v-if="isLoaded" class="ti-widget" :data-widget-id="widgetId"></div>
      <p v-else>Loading reviews...</p>
    </div>
  </ClientOnly>
</template>

<style scoped>
.review-container {
  width: 100%;
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
}

h2 {
  color: #333;
}
</style>