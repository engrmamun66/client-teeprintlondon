<template>
  <h1 class="discount_txt" v-bind="$attrs">
    <span class="discount_number">
      <slot>10</slot>
    </span>
    <span class="discount_symbol">
      %<br />
      <p class="off">OFF</p>
    </span>
  </h1>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow:wght@700&display=swap");

:root {
  --color-primary: #cc4b06;
  --color-primary-dark: #a94917;
  --font-family: "Barlow";
}

h1.discount_txt {
  background-color: #08a2db;
  width: 170px;
  padding: 20px 20px 20px 30px;
  border-radius: 25px;
  text-align: center;
  color: #fff;
  font-family: var(--font-family, "sans-serif");
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  transform: scale(0.7);
  transform-origin: top left;
}

/* iOS-safe fallback for scaling on small screens */
@media (max-width: 480px) {
  h1.discount_txt {
    transform: scale(0.6);
  }
}

.discount_number {
  font-size: 75px;
  color: #ffffff;
  margin-right: 5px;
}

.discount_symbol {
  font-size: 45px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  line-height: 1;
}

.discount_symbol .off {
  margin: 0;
  margin-top: -5px;
  font-size: 20px;
  color: #6fff00;
}
</style>
