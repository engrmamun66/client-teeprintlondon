<script setup lang="ts">
import getMeta from "~/seo-meta"; 
useSeoMeta(getMeta('same_day_pages', 'tote_bag')) 

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
            title="Same-Day Printing for Tote Bags"
            :images="[
              '/img/Tote_bag/Leonardo_Phoenix_10_a_vibrant_and_casual_tote_bag_with_a_playf_0.jpg',
              '/img/Tote_bag/Leonardo_Phoenix_10_a_vibrant_and_sturdy_tote_bag_with_a_bold_0.jpg',
              '/img/Tote_bag/Leonardo_Phoenix_10_a_worn_natural_canvas_tote_bag_with_a_rela_0.jpg',
            ]"
          >
            Need high-quality custom tote bags in a hurry? Tee Print London provides
            same-day printing services, ensuring fast and reliable results.
            Whether it’s for businesses, events, promotions, or personal use,
            our efficient process guarantees stylish and professional tote bags
            without delays. Serving clients across London and the UK, we
            specialize in delivering premium printing solutions with a quick
            turnaround to meet your urgent needs.

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
                  Why Choose Tee Print London for Your Tote Bag Printing
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Tee Print London is your go-to destination for high-quality
                  tote bag printing, offering premium designs, exceptional
                  craftsmanship, and unbeatable customer service. Whether you're
                  looking for custom prints for your brand, event, or personal
                  style, we provide vibrant, long-lasting prints on durable,
                  high-quality materials. Our advanced printing techniques ensure
                  sharp details and rich colors that won’t fade over time. Plus,
                  with fast turnaround times and competitive pricing, we make
                  customization effortless and affordable. Choose Tee Print
                  London for stylish, durable, and uniquely crafted tote bags that
                  make a statement!
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img src="/img/Tote_bag/il_1140xN.1899584604_j7fg.jpg" alt="about iamge" />
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
              <img src="/img/Tote_bag/WhatsApp Image 2025-04-18 at 17.58.14_69003ea2_magicstudio_9bj1l4lafn.jpg" alt="about iamge" />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  Same-Day Tote Bag Printing – Fast, Reliable, and High-Quality
                </h2>
              </div>
              <p>
                When time is of the essence, and you need custom-printed tote bags
                without delays, Tee Print London is here to help. We specialize
                in same-day printing services, allowing you to receive
                professionally printed tote bags on the very same day you place
                your order. Whether you're preparing for a corporate event,
                promotional campaign, or simply want a unique design for personal
                use, our service ensures you get premium-quality prints with a fast
                turnaround. At Tee Print London, we use state-of-the-art printing
                techniques such as Direct-to-Garment (DTG), screen printing, and
                vinyl printing to produce vibrant, long-lasting designs that
                withstand daily use. No matter the complexity of your design—whether
                it's a logo, slogan, graphic, or personalized text—we bring your
                vision to life with precision and care. Our commitment to quality
                means that speed does not compromise the excellence of our work. We
                understand that urgent orders require not only quick processing but
                also high standards, which is why our printing process ensures
                crisp, clear, and professional results. Whether you need a single
                tote bag or a bulk order, our team is dedicated to providing the
                best service in London and across the UK. Why wait for days? Get
                your custom tote bags printed today with Tee Print London and enjoy
                fast, reliable, and high-quality printing tailored to your needs.
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
                  Get Your Custom Tote Bags Printed Today!
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Why wait days or even weeks for your custom tote bags when you
                  can have them printed today? At Tee Print London, we offer
                  same-day tote bag printing to ensure you get your custom designs
                  exactly when you need them. Whether it’s for a corporate event,
                  business promotion, charity fundraiser, or personal use, we
                  provide a seamless and hassle-free printing experience with
                  top-notch results. Our process is designed for speed and
                  convenience—simply select your tote bag, upload your design, and
                  let us handle the rest. Using advanced printing techniques,
                  including Direct-to-Garment (DTG), screen printing, and vinyl
                  printing, we guarantee sharp, vibrant, and long-lasting prints
                  that won’t fade after just a few uses. We understand the urgency
                  of last-minute orders, which is why our same-day printing service
                  is tailored to meet your deadlines without compromising on
                  quality. Whether you need a single tote bag or a bulk order, we
                  ensure every piece is printed with precision, durability, and
                  style. Don’t let long wait times slow you down—place your order
                  now with Tee Print London and get your custom tote bags printed
                  on the same day with professional service and unmatched quality.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img src="/img/Tote_bag/WhatsApp Image 2025-04-18 at 17.59.00_22c425a1_magicstudio_q2lo0rivhdp.jpg" alt="about iamge" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container mt-5">
      <web-DuelCard
        img_left="/img/Tote_bag/Leonardo_Phoenix_10_a_worn_natural_canvas_tote_bag_with_a_rela_2.jpg"
        img_right="/img/Tote_bag/WhatsApp Image 2025-04-18 at 17.57.44_b1d34e77_magicstudio_obivmghbf3.jpg"
        paragraph="We bring your vision to life with creative designs that leave a lasting impression. Your dream is our mission, your satisfaction is our commitment, and delivering excellence is our promise."
      />
    </div>
    <web-questions></web-questions>
  </div>
</template>