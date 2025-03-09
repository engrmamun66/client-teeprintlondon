<script setup lang="ts">
definePageMeta({
  titleTemplate: "% :: details",
  layout: "web",
});

function addToCart() {
  let imgElement = document.querySelector(
    ".teeprint-product-view-image img"
  ) as HTMLElement;

  cartAnimation({ element: imgElement }, () => {
    useNuxtApp().$emit("openInPageCart", true);
  });
}
</script>

<template>
  <div>
    <section class="teeprint-makes-section">
      <div class="container">
        <div class="row">
          <MultipleImageCard
            :right="true"
            title="Premium Custom Cotton T-Shirt Printing"
            :images="[
              '/img/Cotton_T_shirt/Leonardo_Phoenix_10_A_stylish_man_in_his_mid30s_with_a_strong_0.jpg',
              '/img/Cotton_T_shirt/Leonardo_Phoenix_10_A_fit_middleaged_man_with_short_dark_hair_1.jpg',
              '/img/Cotton_T_shirt/Leonardo_Phoenix_10_A_vibrant_colorful_image_of_a_happy_6yearo_3.jpg',
            ]"
          >
            Elevate your wardrobe with Tee Print London’s premium custom cotton
            T-shirt printing services. Whether it’s for businesses, events,
            sports teams, or personal use, we deliver exceptional quality and
            craftsmanship. Our advanced printing techniques ensure vibrant,
            long-lasting designs that stand up to daily wear. Trust Tee Print
            London to bring your vision to life with precision and style.

            <template #link>
              <nuxt-link
                :to="{ name: 'quote' }"
                class="teeprint-button teeprint-theme-btn zoomInOut mt-5"
              >
                Get A Free Quote <i class="la la-arrow-right ml-1"></i>
              </nuxt-link>
            </template>
          </MultipleImageCard>
        </div>
      </div>
    </section>

    <section class="teeprint-about-section">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  Why Choose Tee Print London for Your Cotton T-Shirt Printing?
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  At Tee Print London, we pride ourselves on delivering
                  top-quality cotton T-shirt printing that combines style,
                  durability, and comfort. Whether you’re creating custom
                  T-shirts for your brand, team, or personal use, we use only
                  the finest materials and cutting-edge technology to bring your
                  ideas to life. Our state-of-the-art printing techniques,
                  including Direct-to-Garment (DTG), screen printing, and vinyl
                  printing, ensure your designs are vibrant, sharp, and built to
                  last. With unbeatable customer service and a commitment to
                  excellence, Tee Print London is your trusted partner for all
                  your cotton T-shirt printing needs.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <video
                class="rounded-video"
                autoplay
                loop
                muted
                playsinline
                width="100%"
              >
                <source
                  src="https://res.cloudinary.com/dyfnpakfq/video/upload/v1741532964/a4b9eeb3-a7e0-49b3-879d-f0cc73a4cd09_video_bknu45.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="teeprint-client-section">
      <div class="teeprint-client-inner">
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <div class="section-main-heading text-right pr-5">
                <h4 class="section-heading-title-small">
                  <span class="line-decoration"></span>What Our
                </h4>
                <h2 class="section-heading-title-big">Customers Say</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <lazy-web-GoogleReview class="mb-5"></lazy-web-GoogleReview>
    </div>

    <section class="teeprint-homewhychoose-section">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-img">
              <img
                src="/img/Cotton_T_shirt/Leonardo_Phoenix_10_a_surreal_and_vibrant_cinematic_photograph_1 (1).jpg"
                alt="about image"
              />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  High-Quality Cotton T-Shirt Printing You Can Trust
                </h2>
              </div>
              <p>
                When it comes to custom cotton T-shirts, quality matters. At Tee
                Print London, we specialize in creating durable, stylish, and
                comfortable T-shirts that meet your exact needs. Our expert team
                uses advanced printing methods to ensure your designs are
                vibrant, precise, and long-lasting. From intricate logos to bold
                graphics, we handle every detail with care, ensuring your
                T-shirts look great and perform even better. Whether you need a
                single T-shirt or a bulk order, Tee Print London is dedicated to
                delivering exceptional results every time. Choose us for
                T-shirts that combine quality, comfort, and style.
              </p>
              <nuxt-link
                :to="{ name: 'quote' }"
                class="teeprint-button teeprint-theme-btn zoomInOut"
                href="#"
              >
                Get A Free Quote <i class="la la-arrow-right ml-1"></i>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div>
      <SameDay />
    </div>

    <section class="teeprint-about-section">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  Order Your Custom Cotton T-Shirts from Tee Print London
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Ready to elevate your T-shirt game? Tee Print London is here
                  to help you create custom cotton T-shirts that are as unique
                  as you are. Whether you’re designing T-shirts for a business,
                  team, event, or personal use, we provide premium printing
                  services that deliver unmatched quality and style. Our easy
                  ordering process makes it simple to bring your ideas to
                  life—just choose your T-shirt, upload your design, and let us
                  handle the rest. With Tee Print London, you can trust that
                  every piece is crafted with precision, durability, and care.
                  Don’t settle for ordinary—order your custom cotton T-shirts
                  from Tee Print London today and experience the difference
                  quality makes.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img
                src="/img/Cotton_T_shirt/Leonardo_Phoenix_10_A_stylish_man_in_his_mid30s_with_a_strong_1.jpg"
                alt="about image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container mt-5">
      <web-DuelCard
        img_left="/img/Cotton_T_shirt/Leonardo_Phoenix_10_a_surreal_and_vibrant_cinematic_photograph_0.jpg"
        img_right="/img/Cotton_T_shirt/Leonardo_Phoenix_10_A_bright_and_colorful_image_of_a_happy_6ye_1.jpg"
        paragraph="At Tee Print London, we bring your vision to life with creative designs that leave a lasting impression. Your dream is our mission, your satisfaction is our commitment, and delivering excellence is our promise."
      />
    </div>
    <web-questions></web-questions>
  </div>
</template>
