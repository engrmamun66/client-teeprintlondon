<template>
  <div class="promiss-section" v-bind="$attrs" >
    <img src="/img/quote-page-card-image-1.jpeg" alt="" />
    <div class="our-promiss" >
      <p >
        We bring your vision to life with creative designs that leave a lasting
        impression. Your dream is our mission, your satisfaction is our
        commitment, and delivering excellence is our promise
      </p>
    </div>
    <img src="/img/quote-page-card-image-2.jpeg" alt="" />
  </div>
</template>

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
  padding: 20px 20px;
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
  .promiss-section .our-promiss {
    padding: 20px 20px;
    text-align: justify;
    background-color: rgb(241, 241, 241);
  }
}
</style>
