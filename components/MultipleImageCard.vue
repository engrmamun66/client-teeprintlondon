<template>
  <div class="col-xl-12 col-lg-12 col-12">
    <div class="teeprint-makes-box">
      <div class="teeprint-makes-box-image" :style="`order:${right ? 2 : 0}`">
        <div class="teeprint-makes-overlay"></div>
        <div class="teeprint-makes-image">
          <swiper
            :modules="[SwiperAutoplay, SwiperEffectCreative]"
            :slides-per-view="1"
            :loop="true"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }"
            :effect="'creative'"
            :creative-effect="{
              prev: {
                shadow: false,
                translate: ['-20%', 0, -1],
                opacity: 0, // Hide previous image completely
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }"
          >
            <swiper-slide v-for="(image, index) in images" :key="index">
              <img :src="image" :alt="`Slide ${index + 1}`" class="swiper-slide-img" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="teeprint-makes-content">
        <div class="teeprint-makes-content-inner">
          <h3 class="teeprint-makes-title">
            {{ title }}
          </h3>
          <p class="teeprint-makes-short-des">
            <slot>
              Need custom t-shirts in a hurry for your campaign, event, or festival?
              Tee Print London is your go-to for fast, reliable solutions. We offer
              same-day t-shirt printing with delivery across London and next-day t-shirt
              printing for customers throughout the UK.
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
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay as SwiperAutoplay, EffectCreative as SwiperEffectCreative } from 'swiper';
import 'swiper/swiper-bundle.css';

defineProps({
  right: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
});
</script>
<style scoped>
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
</style>