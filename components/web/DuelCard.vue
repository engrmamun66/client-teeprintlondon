<template>
  <div class="promiss-section" v-bind="$attrs">
    <img :src="img_left" alt="Left Image" class="promiss-image" />
    <div class="our-promiss">
      <p class="promiss-text">
        {{ paragraph }} <span class="signature">--- Teeprint London</span>
      </p>
    </div>
    <img :src="img_right" alt="Right Image" class="promiss-image" />
  </div>
</template>

<script setup>
defineProps({
  img_left: {
    type: String,
    required: true,
  },
  img_right: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.promiss-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.promiss-section .promiss-image {
  width: 30%;
  height: auto; /* Allow height to adjust based on aspect ratio */
  object-fit: contain; /* Ensure the entire image is visible without cropping */
}

.promiss-section .promiss-image:first-child {
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}

.promiss-section .promiss-image:last-child {
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}

.promiss-section .our-promiss {
  flex: 1;
  padding: 30px;
  text-align: center;
  background-color: #f9f9f9;
}

.promiss-section .our-promiss .promiss-text {
  font-size: 18px;
  line-height: 1.6;
  color: #333;
  font-style: italic;
  margin: 0;
}

.promiss-section .our-promiss .promiss-text .signature {
  display: block;
  margin-top: 10px;
  font-weight: bold;
  font-style: normal;
  color: #000;
}

/* Responsive Styles */
@media screen and (max-width: 768px) {
  .promiss-section {
    flex-direction: column;
  }

  .promiss-section .promiss-image {
    width: 100%;
    height: auto; /* Allow height to adjust based on aspect ratio */
  }

  .promiss-section .promiss-image:first-child {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 0;
  }

  .promiss-section .promiss-image:last-child {
    border-top-right-radius: 0;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  .promiss-section .our-promiss {
    padding: 20px;
  }

  .promiss-section .our-promiss .promiss-text {
    font-size: 16px;
  }
}
</style>