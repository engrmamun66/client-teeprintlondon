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
            <slot name="link"></slot>
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
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1; /* Ensures top image is above */
    transition: opacity 0.3s ease-in-out;
  }
  
  .swiper-slide-prev {
    opacity: 0 !important; /* Hide the behind image */
    z-index: 0;
  }
  
  .swiper-slide-active {
    opacity: 1;
    z-index: 1;
  }
  </style>
  