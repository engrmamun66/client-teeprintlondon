<script setup lang="ts">
import getMeta from "~/seo-meta";
useSeoMeta(getMeta("advertise", "sign_print"));
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
            title="High-Quality Sign Printing"
            :images="[
              '/img/sign_print/Leonardo_Phoenix_10_a_rectangular_business.jpg',
              '/img/sign_print/Leonardo_Phoenix_10_A_rectangular_business_sign_printed_on_a_w_3.jpg',
              '/img/sign_print/Leonardo_Phoenix_10_A_rustic_wooden_or_sleek_glass_business_si_2.jpg',
            ]"
          >
            Elevate your space with Tee Print London’s premium sign printing
            services. From corrugated plastic signs for eye-catching window
            displays to elegant acrylic signs for office branding, we offer a
            wide range of materials and styles to suit your needs. Whether
            you’re promoting a sale, guiding customers, or adding a professional
            touch to your workspace, our signs are designed to impress with
            sharp details, vibrant colors, and durable finishes.

            <template #link>
              <nuxt-link
                :to="{ name: 'quote' }"
                class="teeprint-button teeprint-theme-btn zoomInOut mt-5"
              >
                Get A Free Quote <i class="la la-arrow-right ml-1"></i>
              </nuxt-link>
                <nuxt-link
                 :to="{ name: 'shop' }"
                style="background-color: #eead04"
                class="teeprint-button teeprint-theme-btn zoomInOut mt-5 mx-4"
              >
                Buy Now <i class="la la-arrow-right ml-1"></i>
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
                  Why Choose Tee Print London for Sign Printing?
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  At Tee Print London, we specialize in creating signs that are
                  both functional and visually appealing. Our range includes
                  corrugated plastic signs for outdoor advertising, foam boards
                  for lightweight displays, Foamex signs for promotions, and
                  aluminium signs for durable indoor or outdoor use. We also
                  offer acrylic signs for a professional look, wooden signs for
                  a rustic feel, and more. With customizable options,
                  weather-resistant materials, and fade-resistant printing, we
                  ensure your signs stand out and last.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img
                src="/img/sign_print/Leonardo_Phoenix_10_a_rectangular_business.jpg"
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
                src="/img/sign_print/Leonardo_Phoenix_10_Design_a_versatile_and_customizable_door_s_3.jpg"
                alt="about image"
              />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  Versatile Signage Solutions
                </h2>
              </div>
              <p>
                Our signs are designed to meet a variety of needs, from
                advertising promotions to guiding visitors. Choose from
                materials like corrugated plastic, foam boards, Foamex,
                aluminium, acrylic, and wood to create the perfect sign for your
                space. Whether you need weather-resistant outdoor signs or
                elegant indoor plaques, we offer customizable options to match
                your brand and purpose. With sharp, fade-resistant printing and
                durable materials, our signs are built to impress and endure.
              </p>
              <nuxt-link
                :to="{ name: 'quote' }"
                class="teeprint-button teeprint-theme-btn zoomInOut"
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
                  Get Your Signs Printed Today!
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Don’t wait to make an impact – get your signs printed today
                  with Tee Print London. Our streamlined process ensures quick
                  turnaround times without compromising on quality. Whether you
                  need a single sign for a local event or a large order for your
                  business, we’ve got you covered. With our advanced printing
                  techniques and attention to detail, we guarantee vibrant,
                  durable, and professional results. Place your order now and
                  experience the best in sign printing.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img
                src="/img/sign_print/Leonardo_Phoenix_10_A_sleek_modern_business_sign_suspended_in_1.jpg"
                alt="about image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container mt-5">
      <web-DuelCard
        img_left="/img/sign_print/Leonardo_Phoenix_10_Design_a_versatile_and_customizable_door_s_1.jpg"
        img_right="/img/sign_print/Leonardo_Phoenix_10_A_rustic_wooden_or_sleek_glass_business_si_1.jpg"
        paragraph="We bring your vision to life with creative designs that leave a lasting impression. Your dream is our mission, your satisfaction is our commitment, and delivering excellence is our promise."
      />
    </div>
    <web-questions></web-questions>
  </div>
</template>
