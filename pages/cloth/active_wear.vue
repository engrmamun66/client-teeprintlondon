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
            title="Premium Custom Active Wear Printing"
            :images="[
              '/img/Active_wear/Leonardo_Phoenix_10_a_surreal_and_vibrant_cinem.jpg',
              '/img/Active_wear/Leonardo_Phoenix_10_a_surreal_and_vibrant_cinematic_photograph_0.jpg',
              '/img/Active_wear/Leonardo_Phoenix_10_a_vivid_and_dreamlike_cinematic_photograph_3.jpg',
            ]"
          >
            Elevate your active wear with Tee Print London’s premium custom
            printing services. Whether it’s gym wear, sports team uniforms, or
            personalized fitness gear, we deliver exceptional quality and
            craftsmanship. Our advanced printing techniques ensure vibrant,
            long-lasting designs that stand up to intense workouts and frequent
            washes. Trust Tee Print London to bring your vision to life with
            precision and style.

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
                  Why Choose Tee Print London for Your Active Wear?
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  At Tee Print London, we pride ourselves on delivering
                  top-quality active wear printing that combines style,
                  durability, and performance. Our state-of-the-art printing
                  techniques, including Direct-to-Garment (DTG), screen
                  printing, and vinyl printing, ensure your designs are vibrant,
                  sharp, and built to last. Whether you’re outfitting a sports
                  team, creating custom gym wear, or designing personalized
                  fitness apparel, we use only the finest materials and
                  cutting-edge technology to bring your ideas to life. With
                  unbeatable customer service and a commitment to excellence,
                  Tee Print London is your trusted partner for all your active
                  wear needs.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img
                src="/img/Active_wear/Leonardo_Phoenix_10_A_surreal_and_vibrant_cinematic_photograph_2.jpg"
                alt="about image"
              />
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
                src="/img/Active_wear/Leonardo_Phoenix_10_A_surreal_and_vibrant_cinematic_photograph_3.jpg"
                alt="about image"
              />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big mt-5">
                  High-Quality Active Wear Printing You Can Trust
                </h2>
              </div>
              <p>
                When it comes to custom active wear, quality matters. At Tee
                Print London, we specialize in creating durable, stylish, and
                high-performance active wear that meets your exact needs. Our
                expert team uses advanced printing methods to ensure your
                designs are vibrant, precise, and long-lasting. From intricate
                logos to bold graphics, we handle every detail with care,
                ensuring your active wear looks great and performs even better.
                Whether you need a single piece or a bulk order, Tee Print
                London is dedicated to delivering exceptional results every
                time. Choose us for active wear that combines quality, comfort,
                and style.
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
                  Order Your Custom Active Wear from Tee Print London
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Ready to elevate your active wear game? Tee Print London is
                  here to help you create custom active wear that’s as unique as
                  you are. Whether you’re designing gear for a sports team, gym,
                  or personal use, we provide premium printing services that
                  deliver unmatched quality and style. Our easy ordering process
                  makes it simple to bring your ideas to life—just choose your
                  active wear, upload your design, and let us handle the rest.
                  With Tee Print London, you can trust that every piece is
                  crafted with precision, durability, and care. Don’t settle for
                  ordinary—order your custom active wear from Tee Print London
                  today and experience the difference quality makes.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img
                src="/img/Active_wear/Leonardo_Phoenix_10_a_fit_young_adult_with_glowing_sunkissed_s_0.jpg"
                alt="about image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container mt-5">
      <web-DuelCard
        img_left="/img/Active_wear/Leonardo_Phoenix_10_a_surreal_and_vibrant_cinematic_.jpg"
        img_right="/img/Active_wear/Leonardo_Phoenix_10_A_surreal_and_vibrant_cinematic_photograph_3.jpg"
        paragraph="At Tee Print London, we bring your vision to life with creative designs that leave a lasting impression. Your dream is our mission, your satisfaction is our commitment, and delivering excellence is our promise."
      />
    </div>
    <web-questions></web-questions>
  </div>
</template>
