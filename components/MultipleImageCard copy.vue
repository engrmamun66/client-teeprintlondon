
<template>
  <div class="col-xl-12 col-lg-12 col-12">
    <div class="teeprint-makes-box">
      <div class="teeprint-makes-box-image" :style="`order:${right ? 2 : 0}`">
        <div class="teeprint-makes-overlay"></div>
        <div class="teeprint-makes-image">
          <!-- Show shimmer effect until at least 1 image is loaded or timeout occurs -->
          <ShimmerEffect v-if="loading" class="shimmer-effectss"></ShimmerEffect>

          <!-- Swiper -->
          <swiper
            v-else
            :modules="[SwiperAutoplay, SwiperEffectCreative]"
            :slides-per-view="1"
            :loop="true"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }"
            :effect="'creative'"
            :creative-effect="{
              prev: { shadow: false, translate: ['-20%', 0, -1], opacity: 0 },
              next: { translate: ['100%', 0, 0] },
            }"
          >
            <swiper-slide v-for="(image, index) in images" :key="index">
              <img
                :src="image"
                :alt="`Slide ${index + 1}`"
                class="swiper-slide-img"
                @load="onImageLoad"
                @error="onImageError"
              />
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="teeprint-makes-content">
        <div class="teeprint-makes-content-inner">
          <h3 class="teeprint-makes-title">{{ title }}</h3>
          <p class="teeprint-makes-short-des">
            <slot>
              Need custom t-shirts in a hurry for your campaign, event, or festival?
              Tee Print London is your go-to for fast, reliable solutions.
            </slot>
          </p>
          <div>
            <slot name="link"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay as SwiperAutoplay, EffectCreative as SwiperEffectCreative } from 'swiper';
import 'swiper/swiper-bundle.css';

const props = defineProps({
  right: { type: Boolean, default: false },
  title: { type: String, required: true },
  images: { type: Array, required: true },
});

const loading = ref(true);
const loaded = ref(0);
let timeoutId = null;

// Image load handler
const onImageLoad = () => {
  loaded.value++;
  // (`Image loaded. Current loaded count: ${loaded.value}`);

  if (loaded.value >= 1) {
    // ("At least one image loaded. Hiding shimmer.");
    clearTimeout(timeoutId); // Clear the timeout if at least one image loads
    loading.value = false;
  }
};

// Image error handler
const onImageError = () => {
  loaded.value++;
  // console.error(`Failed to load an image. Current loaded count: ${loaded.value}`);

  if (loaded.value >= 1) {
    // ("At least one image loaded (or errored). Hiding shimmer.");
    clearTimeout(timeoutId); // Clear the timeout if at least one image loads or errors
    loading.value = false;
  }
};

// Timeout to handle cases where no images load
const startTimeout = () => {
  timeoutId = setTimeout(() => {
    // ("Timeout reached. Hiding shimmer.");
    loading.value = false;
  }, 500); // 0.5-second timeout
};

const shimmerHeight = computed(() => (window.innerWidth > 768 ? "600px" : "300px"));

// Watch for changes in the images array
watch(
  () => props.images,
  () => {
    // Reset state when images prop changes
    loading.value = true;
    loaded.value = 0;
    clearTimeout(timeoutId); // Clear any existing timeout
    startTimeout(); // Start a new timeout
  },
  { immediate: true }
);

// Start the timeout when the component mounts
onMounted(() => {
  if (props.images.length === 0) {
    // ("No images provided. Hiding shimmer.");
    loading.value = false;
  } else {
    startTimeout();
  }
});
</script>

<style >
.teeprint-makes-box {
  display: flex;
  align-items: center;
  gap: 20px;
}

.teeprint-makes-box-image {
  flex: 1;
  max-width: 50%;
  position: relative;
}

.teeprint-makes-content {
  flex: 1;
  max-width: 50%;
}

.swiper-slide-img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

/* Responsive Styles */
@media screen and (max-width: 900px) {
  .teeprint-makes-box {
    flex-direction: column;
  }

  .teeprint-makes-box-image,
  .teeprint-makes-content {
    max-width: 100%; /* Ensure full width on smaller screens */
  }

  .teeprint-makes-box-image {
    order: -1 !important; /* Ensure image is above content on mobile */
  }

  .teeprint-makes-section .teeprint-makes-box .teeprint-makes-box-image .teeprint-makes-image::after {
    top: 0;
    border-radius: 10px;
    box-shadow: 33px 38px 8px #00000042;
  }

  .teeprint-makes-section .teeprint-makes-box .teeprint-makes-box-image .teeprint-makes-image img {
    border-radius: 10px;
  }
}

.shimmer-effectss {
  height: 300px !important;
}

@media (min-width: 768px) {
  .shimmer-effectss {
    height: 600px !important;
  }
}




</style>