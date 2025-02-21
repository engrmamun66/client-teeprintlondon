<template>
    <div class="post-card">
      <div class="post-card-content" :class="{ 'flex-row-reverse': right }">
        <div class="post-card-image">
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
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }"
          >
            <swiper-slide v-for="(image, index) in images" :key="index">
              <img :src="image" :alt="`Slide ${index + 1}`" />
            </swiper-slide>
          </swiper>
        </div>
        <div class="post-card-text">
          <h3>{{ title }}</h3>
          <p><slot></slot></p>
          <slot name="link"></slot>
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
  .post-card {
    margin: 20px 0;
  }
  
  .post-card-content {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  
  .post-card-image {
    flex: 1;
    max-width: 50%;
  }
  
  .post-card-text {
    flex: 1;
    max-width: 50%;
  }
  
  .flex-row-reverse {
    flex-direction: row-reverse;
  }
  
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  </style>