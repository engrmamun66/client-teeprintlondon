<script setup>
import { ref, onMounted } from 'vue';

const widgetId = "d0b99e741d5c5237cc365589e66";
const isLoaded = ref(false);
let goggleReviewArea = ref(null);

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

    goggleReviewArea.value.appendChild(script);
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
  try {
    await loadTrustIndexScript();
    initTrustIndex();
  } catch (error) {
    console.error("❌ Error loading TrustIndex:", error);
  }
});
</script>

<template>
  <div v-bind="$attrs">
    <!-- <h2 class="text-center mb-2">Google Reviews</h2> -->
    <div ref="goggleReviewArea"></div>
    <p v-if="!isLoaded" class="text-center my-5">Loading reviews...</p>
  </div>
</template>

<style scoped>
[goggleReviewArea] > div:empty ~ p {
  display: block !important;
}

h2 {
  color: #333;
}
</style>