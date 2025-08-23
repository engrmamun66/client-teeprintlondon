<script setup lang="ts">
import getMeta from "~/seo-meta";
useSeoMeta(getMeta("advertise", "flyer_and_leaflet"));
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
            title="High-Quality Flyer and Leaflet Printing"
            :images="[
              '/img/flyer_and_leaflet/1985.jpg',
              '/img/flyer_and_leaflet/Leonardo_Kino_XL_a_flyer_related_to_a_restaurant_2.jpg',
            ]"
          >
            Need professional flyers or leaflets for your business, event, or
            personal project? Tee Print London offers premium printing services
            with a focus on quality and precision. Whether you're promoting a
            product, announcing an event, or sharing information, our flyers and
            leaflets are designed to make a lasting impression. With
            customizable sizes, materials, and finishes, we ensure your prints
            stand out.

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
                  Why Choose Tee Print London for Flyer and Leaflet Printing?
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  At Tee Print London, we combine cutting-edge printing
                  technology with exceptional craftsmanship to deliver flyers
                  and leaflets that exceed expectations. Our services are
                  perfect for businesses, events, and personal projects,
                  offering vibrant colors, sharp details, and durable finishes.
                  Whether you need a small batch or a large order, we provide
                  competitive pricing and fast turnaround times without
                  compromising on quality. Choose us for professional,
                  eye-catching prints that leave a lasting impression.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img
                src="/img/flyer_and_leaflet/10921697.jpg"
                alt="about iamge"
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
              <img src="/img/flyer_and_leaflet/2190.jpg" alt="about iamge" />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  Premium Flyer and Leaflet Printing – Fast, Reliable, and
                  High-Quality
                </h2>
              </div>
              <p>
                At Tee Print London, we understand the importance of timely and
                high-quality printing. Our flyer and leaflet printing services
                are designed to meet your deadlines without compromising on
                quality. Whether you need promotional materials for a business,
                event, or personal project, we use state-of-the-art printing
                techniques to ensure vibrant colors, sharp details, and
                professional finishes. With customizable options and fast
                turnaround times, we make it easy to get the prints you need
                when you need them.
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
      <Advertise />
    </div>

    <section class="teeprint-about-section">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  Get Your Flyers and Leaflets Printed Today!
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Why wait for days when you can have your flyers and leaflets
                  printed today? At Tee Print London, we offer fast and reliable
                  printing services to ensure your promotional materials are
                  ready when you need them. Whether it's for a business
                  campaign, event, or personal project, we provide seamless
                  printing solutions with top-notch results. Our advanced
                  printing techniques guarantee vibrant, long-lasting prints
                  that make an impact. Place your order now and experience the
                  best in flyer and leaflet printing.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img
                src="https://res.cloudinary.com/dyfnpakfq/image/upload/v1740911648/2123_dossne.jpg"
                alt="about image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container mt-5">
      <web-DuelCard
        img_left="/img/flyer_and_leaflet/Leonardo_Phoenix_10_a_highly_detailed_and_photorealistic_image_1.jpg"
        img_right="/img/flyer_and_leaflet/Leonardo_Kino_XL_a_flyer_related_to_a_restaurant_2.jpg"
        paragraph="We bring your vision to life with creative designs that leave a lasting impression. Your dream is our mission, your satisfaction is our commitment, and delivering excellence is our promise."
      />
    </div>
    <web-questions></web-questions>
  </div>
</template>
