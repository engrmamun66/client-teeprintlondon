<script setup>

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

    // setTimeout(() => {
    //     let widget = document.querySelector('.ti-widget') 
    //     let element = Array.from(document.querySelector('[googleReviewDisplay]')) 
    //     if(widget && element){
    //         element.appendChild = widget
    //     }
    //     console.log({widget, element});
       
    // }, 5000);

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
   <div ref="goggleReviewArea"></div>
</template>

<style scoped>
.ti-widget {
  margin: 20px 0px;
}

iframe{
   width: 100% !important; 
}
</style>
