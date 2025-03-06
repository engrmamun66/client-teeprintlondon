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
            title="Premium Custom Tote Bag Printing"
            :images="[
              '            /img/Tote_bag/Leonardo_Phoenix_10_a_vibrant_and_colorful_tote_bag_image_with_0.jpg',
              '/img/Tote_bag/Leonardo_Phoenix_10_a_vibrant_and_sturdy_tote_bag_with_a_bold_0.jpg',
              '/img/Tote_bag/Leonardo_Phoenix_10_a_worn_natural_canvas_tote_bag_with_a_rela_0.jpg',
            ]"
          >
            Elevate your tote bags with Tee Print London’s premium custom
            printing services. Whether it’s for businesses, events, promotions,
            or personal use, we deliver exceptional quality and craftsmanship.
            Our advanced printing techniques ensure vibrant, long-lasting
            designs that stand up to daily use. Trust Tee Print London to bring
            your vision to life with precision and style.

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
                  Why Choose Tee Print London for Your Tote Bag Printing?
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  At Tee Print London, we pride ourselves on delivering
                  top-quality tote bag printing that combines style, durability,
                  and functionality. Whether you’re creating custom tote bags
                  for your brand, event, or personal use, we use only the finest
                  materials and cutting-edge technology to bring your ideas to
                  life. Our state-of-the-art printing techniques, including
                  Direct-to-Garment (DTG), screen printing, and vinyl printing,
                  ensure your designs are vibrant, sharp, and built to last.
                  With unbeatable customer service and a commitment to
                  excellence, Tee Print London is your trusted partner for all
                  your tote bag printing needs.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img
                src="/img/Tote_bag/Leonardo_Phoenix_10_a_vibrant_tote_bag_image_featuring_a_highq_0.jpg"
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
                src="/img/Tote_bag/Leonardo_Phoenix_10_a_vibrant_and_casual_tote_bag_with_a_playf_0.jpg"
                alt="about image"
              />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  High-Quality Tote Bag Printing You Can Trust
                </h2>
              </div>
              <p>
                When it comes to custom tote bags, quality matters. At Tee Print
                London, we specialize in creating durable, stylish, and
                functional tote bags that meet your exact needs. Our expert team
                uses advanced printing methods to ensure your designs are
                vibrant, precise, and long-lasting. From intricate logos to bold
                graphics, we handle every detail with care, ensuring your tote
                bags look great and perform even better. Whether you need a
                single tote bag or a bulk order, Tee Print London is dedicated
                to delivering exceptional results every time. Choose us for tote
                bags that combine quality, comfort, and style.
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
                  Order Your Custom Tote Bags from Tee Print London
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Ready to elevate your tote bag game? Tee Print London is here
                  to help you create custom tote bags that are as unique as you
                  are. Whether you’re designing tote bags for a business, event,
                  promotion, or personal use, we provide premium printing
                  services that deliver unmatched quality and style. Our easy
                  ordering process makes it simple to bring your ideas to
                  life—just choose your tote bag, upload your design, and let us
                  handle the rest. With Tee Print London, you can trust that
                  every piece is crafted with precision, durability, and care.
                  Don’t settle for ordinary—order your custom tote bags from Tee
                  Print London today and experience the difference quality
                  makes.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img
                src="/img/Tote_bag/Leonardo_Phoenix_10_a_vibrant_and_colorful_tote_bag_image_with_2.jpg"
                alt="about image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container mt-5">
      <web-DuelCard
        img_left="/img/Tote_bag/Leonardo_Phoenix_10_a_worn_natural_canvas_tote_bag_with_a_rela_2.jpg"
        img_right="/img/Tote_bag/Leonardo_Phoenix_10_a_vibrant_and_sturdy_tote_bag_with_a_recta_3.jpg"
        paragraph="At Tee Print London, we bring your vision to life with creative designs that leave a lasting impression. Your dream is our mission, your satisfaction is our commitment, and delivering excellence is our promise."
      />
    </div>
    <web-questions></web-questions>
  </div>
</template>
