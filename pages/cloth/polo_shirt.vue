<script setup lang="ts">
import getMeta from "~/seo-meta"; 
useSeoMeta(getMeta('cloth', 'polo_shirt'))
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
            title="Premium Quality Polo Shirt Printing"
            :images="[
              '/img/Polo_T_shirt/3.jpg',
              '/img/Polo_T_shirt/2.jpg',
              '/img/Polo_T_shirt/Leonardo_Phoenix_10_A_young_adult_male_likely_in_his_early_twe_1.jpg',
            ]"
          >
            At Tee Print London, we pride ourselves on delivering **premium-quality
            Polo Shirt printing** that combines style, durability, and comfort.
            Whether you're looking for custom prints for your brand, event, or
            personal style, we provide vibrant, long-lasting prints on
            high-quality fabrics. Our advanced printing techniques ensure sharp
            details and rich colors that won’t fade over time. With fast
            turnaround times and competitive pricing, we make customization
            effortless and affordable. Choose Tee Print London for stylish,
            durable, and uniquely crafted Polo Shirts that make a statement!

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
                  Why Choose Tee Print London for Your Polo Shirt Printing?
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Tee Print London is your trusted partner for **high-quality
                  Polo Shirt printing**. We use only the finest materials and
                  cutting-edge technology to bring your ideas to life. Our
                  state-of-the-art printing techniques, including
                  Direct-to-Garment (DTG), screen printing, and vinyl printing,
                  ensure your designs are vibrant, sharp, and built to last. With
                  unbeatable customer service and a commitment to excellence, we
                  make it easy to create custom Polo Shirts that stand out. Whether
                  you need a single shirt or a bulk order, Tee Print London delivers
                  premium quality every time. **Purchase from us** and experience
                  the difference that quality and professionalism make!
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img
                src="/img/Polo_T_shirt/5.jpg"
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
                src="/img/Polo_T_shirt/7.jpg"
                alt="about image"
              />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  High-Quality Polo Shirt Printing You Can Trust
                </h2>
              </div>
              <p>
                When it comes to custom Polo Shirts, **quality matters**. At Tee
                Print London, we specialize in creating durable, stylish, and
                comfortable Polo Shirts that meet your exact needs. Our expert
                team uses advanced printing methods to ensure your designs are
                vibrant, precise, and long-lasting. From intricate logos to bold
                graphics, we handle every detail with care, ensuring your Polo
                Shirts look great and perform even better. Whether you need a
                single shirt or a bulk order, Tee Print London is dedicated to
                delivering exceptional results every time. **Purchase from us**
                and experience the perfect blend of quality, comfort, and style!
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
    <Cloth />
    </div>

    <section class="teeprint-about-section">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  Get Your Custom Polo Shirts Printed Today!
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Why wait days or even weeks for your custom Polo Shirts when you
                  can have them printed today? At Tee Print London, we offer
                  same-day Polo Shirt printing to ensure you get your custom designs
                  exactly when you need them. Whether it’s for a corporate event,
                  business promotion, charity fundraiser, or personal use, we
                  provide a seamless and hassle-free printing experience with
                  top-notch results. Our process is designed for speed and
                  convenience—simply select your Polo Shirt, upload your design, and
                  let us handle the rest. Using advanced printing techniques,
                  including Direct-to-Garment (DTG), screen printing, and vinyl
                  printing, we guarantee sharp, vibrant, and long-lasting prints
                  that won’t fade after just a few washes. We understand the urgency
                  of last-minute orders, which is why our same-day printing service
                  is tailored to meet your deadlines without compromising on
                  quality. Whether you need a single Polo Shirt or a bulk order, we
                  ensure every piece is printed with precision, durability, and
                  style. **Purchase from Tee Print London** and get your custom Polo
                  Shirts printed on the same day with professional service and
                  unmatched quality.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img
                src="/img/Polo_T_shirt/Leonardo_Phoenix_10_A_young_adult_male_likely_in_his_early_twe_0.jpg"
                alt="about image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container mt-5">
      <web-DuelCard
        img_left="/img/Polo_T_shirt/13.jpg"
        img_right="/img/Polo_T_shirt/Leonardo_Phoenix_10_a_young_man_with_a_strong_jawline_and_a_co_3.jpg"
        paragraph="We bring your vision to life with creative designs that leave a lasting impression. Your dream is our mission, your satisfaction is our commitment, and delivering excellence is our promise."
      />
    </div>
    <web-questions></web-questions>
  </div>
</template>