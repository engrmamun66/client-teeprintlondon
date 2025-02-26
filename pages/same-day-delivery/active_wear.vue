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
            title="Same-Day Printing for Active Wear"
            :images="[
              '/img/Active_wear/Leonardo_Phoenix_10_A_surreal_and_vibrant_cinematic_photograph_2.jpg',
              '/img/Active_wear/Leonardo_Phoenix_10_a_surreal_and_vibrant_cinematic_photograph_1 (1).jpg',
              '/img/Active_wear/Leonardo_Phoenix_10_a_surreal_and_vibrant_cinematic_photograph_0.jpg',
            ]"
          >
            Need high-quality custom active wear in a hurry? Tee Print London
            provides same-day printing services, ensuring fast and reliable
            results. Whether it’s for gym wear, sports teams, or personal
            fitness gear, our efficient process guarantees stylish and
            professional active wear without delays. Serving clients across
            London and the UK, we specialize in delivering premium printing
            solutions with a quick turnaround to meet your urgent needs.

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
                  Why Choose Tee Print London for Your Active Wear Printing
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Tee Print London is your go-to destination for high-quality
                  active wear printing, offering premium designs, exceptional
                  craftsmanship, and unbeatable customer service. Whether you're
                  looking for custom prints for your gym, sports team, or
                  personal fitness gear, we provide vibrant, long-lasting prints
                  on durable, high-performance fabrics. Our advanced printing
                  techniques ensure sharp details and rich colors that won’t
                  fade over time. Plus, with fast turnaround times and
                  competitive pricing, we make customization effortless and
                  affordable. Choose Tee Print London for stylish, durable, and
                  uniquely crafted active wear that keeps you motivated and
                  looking great!
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img
                src="/img/Active_wear/Leonardo_Phoenix_10_a_vivid_and_dreamlike_cinematic_photograph_3.jpg"
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
                  Same-Day Active Wear Printing – Fast, Reliable, and
                  High-Quality
                </h2>
              </div>
              <p>
                When time is of the essence, and you need custom-printed active
                wear without delays, Tee Print London is here to help. We
                specialize in same-day printing services, allowing you to
                receive professionally printed active wear on the very same day
                you place your order. Whether you're preparing for a sports
                event, gym session, or promotional campaign, our service ensures
                you get premium-quality prints with a fast turnaround. At Tee
                Print London, we use state-of-the-art printing techniques such
                as Direct-to-Garment (DTG), screen printing, and vinyl printing
                to produce vibrant, long-lasting designs that withstand intense
                workouts and multiple washes. No matter the complexity of your
                design—whether it's a logo, slogan, graphic, or personalized
                text—we bring your vision to life with precision and care. Our
                commitment to quality means that speed does not compromise the
                excellence of our work. We understand that urgent orders require
                not only quick processing but also high standards, which is why
                our printing process ensures crisp, clear, and professional
                results. Whether you need a single piece or a bulk order, our
                team is dedicated to providing the best service in London and
                across the UK. Why wait for days? Get your custom active wear
                printed today with Tee Print London and enjoy fast, reliable,
                and high-quality printing tailored to your needs.
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
                  Get Your Custom Active Wear Printed Today!
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Why wait days or even weeks for your custom active wear when
                  you can have them printed today? At Tee Print London, we offer
                  same-day active wear printing to ensure you get your custom
                  designs exactly when you need them. Whether it’s for a sports
                  team, gym, promotional event, or personal fitness gear, we
                  provide a seamless and hassle-free printing experience with
                  top-notch results. Our process is designed for speed and
                  convenience—simply select your active wear, upload your
                  design, and let us handle the rest. Using advanced printing
                  techniques, including Direct-to-Garment (DTG), screen
                  printing, and vinyl printing, we guarantee sharp, vibrant, and
                  long-lasting prints that won’t fade after intense use. We
                  understand the urgency of last-minute orders, which is why our
                  same-day printing service is tailored to meet your deadlines
                  without compromising on quality. Whether you need a single
                  piece or a bulk order, we ensure every item is printed with
                  precision, durability, and style. Don’t let long wait times
                  slow you down—place your order now with Tee Print London and
                  get your custom active wear printed on the same day with
                  professional service and unmatched quality.
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
        paragraph="We bring your vision to life with creative designs that leave a lasting impression. Your dream is our mission, your satisfaction is our commitment, and delivering excellence is our promise."
      />
    </div>
    <web-questions></web-questions>
  </div>
</template>
