<template>
  <div class="promiss-section" v-bind="$attrs">
    <img :src="img_left" alt="Left Image" />
    <div class="our-promiss">
      <p>{{ paragraph }}</p>
    </div>
    <img :src="img_right" alt="Right Image" />
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
  margin-bottom: 30px;
}
.promiss-section img {
  width: 30%;
}
.promiss-section img:first-child {
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}
.promiss-section img:last-child {
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}
.promiss-section .our-promiss {
  padding: 20px;
  text-align: justify;
  background-color: rgb(241, 241, 241);
}

@media screen and (max-width: 768px) {
  .promiss-section {
    flex-direction: column;
  }
  .promiss-section img {
    width: 100%;
  }
  .promiss-section img:first-child {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 0px;
  }
  .promiss-section img:last-child {
    border-top-right-radius: 0px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
}
</style>
