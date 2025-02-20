<template>
  <h1 class="discount_txt" v-bind="$attrs" >
    <span>
        <slot>10</slot>
    </span>
    <span
      >%<br />
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

h1{
    zoom: 0.4;
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
}
 

h1.discount_txt > span > p {
  margin: 0px;
  margin-top: -5px;
  height: 0px;
  display: flex;
  text-indent: 20px;
  font-size: 20px;
}
h1.discount_txt > span:first-of-type {
  font-size: 75px;
  position: revert;
  float: left;
  margin: -10px;
}

h1.discount_txt > span  {
  color: #ffffff;
}

h1.discount_txt > span:last-of-type {
  font-size: 45px;
  z-index: 2;
}
h1 p.off{
    color: #6fff00;
}
</style>
