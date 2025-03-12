<template>
  <div class="col-xl-12 col-lg-12 col-12">
    <div class="teeprint-makes-box">
      <div class="teeprint-makes-box-image" :style="`order:${right ? 2 : 0}`">
        <div class="teeprint-makes-overlay"></div>
        <div class="teeprint-makes-image">
          <!-- Show shimmer effect until at least 1 image is loaded or timeout occurs -->
          <ShimmerEffect
            v-if="loading"
            class="shimmer-effectss"
          ></ShimmerEffect>

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
              Need custom t-shirts in a hurry for your campaign, event, or
              festival? Tee Print London is your go-to for fast, reliable
              solutions.
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
import { ref, onMounted, watch } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  Autoplay as SwiperAutoplay,
  EffectCreative as SwiperEffectCreative,
} from "swiper";
import "swiper/swiper-bundle.css";

const props = defineProps({
  right: { type: Boolean, default: false },
  title: { type: String, required: true },
  images: { type: Array, required: true },
});

const loading = ref(true);
const loaded = ref(0);
let timeoutId = null;

// ✅ Safe Image Preloading (Fixes Undefined `Image` Error)
const preloadImages = () => {
  if (
    typeof window === "undefined" || // ✅ Ensures browser-only execution
    !props.images ||
    props.images.length === 0
  )
    return;

  props.images.forEach((imgSrc) => {
    if (!imgSrc) return;

    const img = new Image(); // ✅ Now safe to use
    img.src = imgSrc;
    img.onload = onImageLoad;
    img.onerror = onImageError;
  });
};

// Image load handler
const onImageLoad = () => {
  loaded.value++;
  if (loaded.value >= 1) {
    clearTimeout(timeoutId);
    loading.value = false;
  }
};

// Image error handler
const onImageError = () => {
  loaded.value++;
  if (loaded.value >= 1) {
    clearTimeout(timeoutId);
    loading.value = false;
  }
};

// Timeout for cases where no images load
const startTimeout = () => {
  timeoutId = setTimeout(() => {
    loading.value = false;
  }, 500);
};

watch(
  () => props.images,
  () => {
    loading.value = true;
    loaded.value = 0;
    clearTimeout(timeoutId);
    startTimeout();
    preloadImages(); // ✅ Call preloading when images change
  },
  { immediate: true }
);

onMounted(() => {
  if (props.images.length === 0) {
    loading.value = false;
  } else {
    startTimeout();
    preloadImages(); // ✅ Preload images on mount
  }
});
</script>




<style>
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

  .teeprint-makes-section
    .teeprint-makes-box
    .teeprint-makes-box-image
    .teeprint-makes-image::after {
    top: 0;
    border-radius: 10px;
    box-shadow: 33px 38px 8px #00000042;
  }

  .teeprint-makes-section
    .teeprint-makes-box
    .teeprint-makes-box-image
    .teeprint-makes-image
    img {
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
