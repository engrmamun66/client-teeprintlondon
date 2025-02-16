<script setup>
/**
 * Use Example
 * ===========
 * <lazy-web-GoogleReview></lazy-web-GoogleReview> 
 */
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
  await loadTrustIndexScript();  
});


</script>

<template>
    <div v-bind="$attrs">
        <!-- <h2 class="text-center mb-2">Google Reviews</h2> -->
        <div goggleReviewArea ref="goggleReviewArea" ></div>
        <p class="text-center my-5 d-none">Loading reviews...</p>
    </div>

</template>

<style scoped> 

[goggleReviewArea] > div:empty ~ p{
    display: block !important;
}


h2 {
  color: #333;
}

</style>
