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
    <!-- Promotional Shirts Section -->
    <section class="teeprint-makes-section">
      <div class="container">
        <div class="row">
          <MultipleImageCard
            :right="true"
            title="Premium Custom Promotional Shirts"
            :images="[
              '/img/promotion_shirts/1.jpg',
              '/img/promotion_shirts/3.jpg',
              '/img/promotion_shirts/5.jpg',
            ]"
          >
            Elevate your brand with Tee Print London’s premium custom
            promotional shirts. Perfect for company programs, company
            anniversaries, company promotions, businesses, events, or personal
            use, our shirts are crafted with unmatched quality and attention to
            detail. Using state-of-the-art printing technology, we ensure your
            designs are vibrant, durable, and eye-catching. Trust Tee Print
            London to deliver shirts that make a lasting impression.

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

    <!-- Why Choose Tee Print London for Promotional Shirts -->
    <section class="teeprint-about-section">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  Why Choose Tee Print London for Promotional Shirts?
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  At Tee Print London, we pride ourselves on delivering
                  top-quality promotional shirts that combine style, durability,
                  and functionality. Whether you’re outfitting a team, promoting
                  an event, or creating custom apparel for personal use, we use
                  only the finest materials and cutting-edge technology to bring
                  your ideas to life. Our state-of-the-art printing techniques,
                  including Direct-to-Garment (DTG), screen printing, and vinyl
                  printing, ensure your designs are vibrant, sharp, and built to
                  last. With unbeatable customer service and a commitment to
                  excellence, Tee Print London is your trusted partner for all
                  your promotional shirt needs.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img src="/img/promotion_shirts/9.jpg" alt="about image" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Customer Reviews Section -->
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

    <!-- High-Quality Promotional Shirts Section -->
    <section class="teeprint-homewhychoose-section">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-img">
              <img src="/img/promotion_shirts/6.jpg" alt="about image" />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big mt-5">
                  High-Quality Promotional Shirts You Can Trust
                </h2>
              </div>
              <p>
                When it comes to promotional shirts, quality matters. At Tee
                Print London, we specialize in creating durable, stylish, and
                functional shirts that meet your exact needs. Our expert team
                uses advanced printing methods to ensure your designs are
                vibrant, precise, and long-lasting. From intricate logos to bold
                graphics, we handle every detail with care, ensuring your shirts
                look great and perform even better. Whether you need a single
                shirt or a bulk order, Tee Print London is dedicated to
                delivering exceptional results every time. Choose us for shirts
                that combine quality, comfort, and style.
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

    <!-- Same-Day Service Section -->
    <div>
    <Cloth />
    </div>

    <!-- Order Your Custom Promotional Shirts Section -->
    <section class="teeprint-about-section">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  Order Your Custom Promotional Shirts from Tee Print London
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Ready to elevate your brand with custom promotional shirts?
                  Tee Print London is here to help you create shirts that are as
                  unique as your vision. Whether you’re designing shirts for a
                  business, event, or personal use, we provide premium printing
                  services that deliver unmatched quality and style. Our easy
                  ordering process makes it simple to bring your ideas to
                  life—just choose your shirt, upload your design, and let us
                  handle the rest. With Tee Print London, you can trust that
                  every piece is crafted with precision, durability, and care.
                  Don’t settle for ordinary—order your custom promotional shirts
                  from Tee Print London today and experience the difference
                  quality makes.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img src="/img/promotion_shirts/2.jpg" alt="about image" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Duel Card Section -->
    <div class="container mt-5">
      <web-DuelCard
        img_left="/img/promotion_shirts/10.jpg"
        img_right="/img/promotion_shirts/7.jpg"
        paragraph="At Tee Print London, we bring your vision to life with creative designs that leave a lasting impression. Your dream is our mission, your satisfaction is our commitment, and delivering excellence is our promise."
      />
    </div>

    <!-- FAQ Section -->
    <web-questions></web-questions>
  </div>
</template>
