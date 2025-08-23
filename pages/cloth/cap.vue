<script setup lang="ts">
import getMeta from "~/seo-meta";
useSeoMeta(getMeta("cloth", "cap"));
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
            title="Premium Custom Cap Printing"
            :images="[
              '/img/cap/leonardokinoxlcapimagedesign.jpg',
              '/img/cap/Leonardo_Kino_XL_a_cap_image_written_teeprintlondon_on_that_ca_3adcfaadcadc.jpg',
              '/img/cap/Leonardo_Phoenix_10_A_middleaged_man_with_a_gentle_smile_and_s_2.jpg',
            ]"
          >
            Elevate your caps with Tee Print London’s premium custom printing
            services. Whether it’s for businesses, events, sports teams, or
            personal use, we deliver exceptional quality and craftsmanship. Our
            advanced printing techniques ensure vibrant, long-lasting designs
            that stand up to daily wear. Trust Tee Print London to bring your
            vision to life with precision and style.

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
                  Why Choose Tee Print London for Your Cap Printing?
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  At Tee Print London, we pride ourselves on delivering
                  top-quality cap printing that combines style, durability, and
                  functionality. Whether you’re creating custom caps for your
                  brand, team, or personal use, we use only the finest materials
                  and cutting-edge technology to bring your ideas to life. Our
                  state-of-the-art printing techniques, including
                  Direct-to-Garment (DTG), screen printing, and vinyl printing,
                  ensure your designs are vibrant, sharp, and built to last.
                  With unbeatable customer service and a commitment to
                  excellence, Tee Print London is your trusted partner for all
                  your cap printing needs.
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
                  src="https://res.cloudinary.com/dyfnpakfq/video/upload/v1740853865/59f7a4f5-fdc2-4e15-80e0-18040a44da9d_video_l02cqf.mp4"
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
                src="/img/cap/leonardokinoxlcapimagedesign.jpg"
                alt="about image"
              />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  High-Quality Cap Printing You Can Trust
                </h2>
              </div>
              <p>
                When it comes to custom caps, quality matters. At Tee Print
                London, we specialize in creating durable, stylish, and
                functional caps that meet your exact needs. Our expert team uses
                advanced printing methods to ensure your designs are vibrant,
                precise, and long-lasting. From intricate logos to bold
                graphics, we handle every detail with care, ensuring your caps
                look great and perform even better. Whether you need a single
                cap or a bulk order, Tee Print London is dedicated to delivering
                exceptional results every time. Choose us for caps that combine
                quality, comfort, and style.
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
                  Order Your Custom Caps from Tee Print London
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Ready to elevate your cap game? Tee Print London is here to
                  help you create custom caps that are as unique as you are.
                  Whether you’re designing caps for a business, team, event, or
                  personal use, we provide premium printing services that
                  deliver unmatched quality and style. Our easy ordering process
                  makes it simple to bring your ideas to life—just choose your
                  cap, upload your design, and let us handle the rest. With Tee
                  Print London, you can trust that every piece is crafted with
                  precision, durability, and care. Don’t settle for
                  ordinary—order your custom caps from Tee Print London today
                  and experience the difference quality makes.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img
                src="/img/cap/Leonardo_Phoenix_10_A_person_likely_in_their_midtwenties_to_ea_3.jpg"
                alt="about image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container mt-5">
      <web-DuelCard
        img_left="https://res.cloudinary.com/dyfnpakfq/image/upload/v1740849802/Leonardo_Phoenix_10_A_highresolution_professionalgrade_photogr_2_jlwcmk.jpg"
        img_right="/img/cap/Leonardo_Phoenix_10_a_young_man_in_his_early_twenties_with_a_l_2.jpg"
        paragraph="At Tee Print London, we bring your vision to life with creative designs that leave a lasting impression. Your dream is our mission, your satisfaction is our commitment, and delivering excellence is our promise."
      />
    </div>
    <web-questions></web-questions>
  </div>
</template>
