<script setup>
import { ref, onMounted, nextTick } from 'vue';

const widgetId = "d0b99e741d5c5237cc365589e66";
const isLoaded = ref(false);

const loadTrustIndexScript = () => {
  return new Promise((resolve, reject) => {
    if (document.getElementById("trustindex-script")) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.id = "trustindex-script";
    script.src = `https://cdn.trustindex.io/loader.js?${widgetId}`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      console.log("✅ TrustIndex script loaded.");
      resolve();
    };

    script.onerror = () => {
      console.error("❌ Failed to load TrustIndex script.");
      reject();
    };

    document.body.appendChild(script);
  });
};

const initTrustIndex = () => {
  if (typeof Trustindex !== "undefined" && Trustindex.initWidgetsFromDom) {
    Trustindex.initWidgetsFromDom();
    console.log("✅ TrustIndex widget initialized.");
    isLoaded.value = true;
  } else {
    console.error("❌ TrustIndex failed to load. Retrying...");
    setTimeout(initTrustIndex, 2000);
  }
};

onMounted(async () => {
  await loadTrustIndexScript(); // Load the script dynamically
  await nextTick(); // Ensure Vue DOM updates are done
  initTrustIndex(); // Initialize the widget
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
