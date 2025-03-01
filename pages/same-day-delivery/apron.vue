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
            title="Same-Day Printing for T-Shirts"
            :images="[
              '/img/Apron/Leonardo_Phoenix_10_A_handsome_young_man_in_his_early_twenties_1.jpg',
              '/img/Apron/Leonardo_Phoenix_10_A_young_adult_male_likely_in_his_early_twe_0.jpg',
              '/img/Apron/Leonardo_Phoenix_10_A_young_man_in_his_early_twenties_with_a_c_1.jpg',
            ]"
          >
            Need high-quality custom aprons in a hurry? Tee Print London
            provides same-day printing services, ensuring fast and reliable
            results. Whether it’s for businesses, events, kitchens, or personal
            use, our efficient process guarantees stylish and professional
            aprons without delays. Serving clients across London and the UK, we
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
                  Why Choose Tee Print London for Your Apron Printing
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Tee Print London is your go-to destination for high-quality
                  apron printing, offering premium designs, exceptional
                  craftsmanship, and unbeatable customer service. Whether you're
                  looking for custom prints for your business, kitchen, or
                  personal use, we provide vibrant, long-lasting prints on
                  durable, high-quality fabrics. Our advanced printing
                  techniques ensure sharp details and rich colors that won’t
                  fade over time. Plus, with fast turnaround times and
                  competitive pricing, we make customization effortless and
                  affordable. Choose Tee Print London for stylish, durable, and
                  uniquely crafted aprons that make a statement!
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">

              <img
                src="/img/Apron/Leonardo_Phoenix_10_a_young_man_in_his_early_twenties_with_a_r_2.jpg"
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
              <img
                src="/img/Apron/Leonardo_Phoenix_10_a_young_man_in_his_early_twenties_with_a_r_2 (1).jpg"
                alt="about iamge"
              />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big mt-5">
                  Same-Day Apron Printing – Fast, Reliable, and High-Quality
                </h2>
              </div>
              <p>
                When time is of the essence, and you need custom-printed aprons
                without delays, Tee Print London is here to help. We specialize
                in same-day printing services, allowing you to receive
                professionally printed aprons on the very same day you place
                your order. Whether you're preparing for a corporate event,
                kitchen staff uniforms, promotional campaigns, or simply want a
                unique design for personal use, our service ensures you get
                premium-quality prints with a fast turnaround. At Tee Print
                London, we use state-of-the-art printing techniques such as
                Direct-to-Garment (DTG), screen printing, and vinyl printing to
                produce vibrant, long-lasting designs that withstand multiple
                washes. No matter the complexity of your design—whether it's a
                logo, slogan, graphic, or personalized text—we bring your vision
                to life with precision and care. Our commitment to quality means
                that speed does not compromise the excellence of our work. We
                understand that urgent orders require not only quick processing
                but also high standards, which is why our printing process
                ensures crisp, clear, and professional results. Whether you need
                a single apron or a bulk order, our team is dedicated to
                providing the best service in London and across the UK. Why wait
                for days? Get your custom aprons printed today with Tee Print
                London and enjoy fast, reliable, and high-quality printing
                tailored to your needs.
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
                  Get Your Custom Aprons Printed Today!
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Why wait days or even weeks for your custom aprons when you
                  can have them printed today? At Tee Print London, we offer
                  same-day apron printing to ensure you get your custom designs
                  exactly when you need them. Whether it’s for a corporate
                  event, business promotion, kitchen staff, charity fundraiser,
                  or personal use, we provide a seamless and hassle-free
                  printing experience with top-notch results. Our process is
                  designed for speed and convenience—simply select your apron,
                  upload your design, and let us handle the rest. Using advanced
                  printing techniques, including Direct-to-Garment (DTG), screen
                  printing, and vinyl printing, we guarantee sharp, vibrant, and
                  long-lasting prints that won’t fade after just a few washes.
                  We understand the urgency of last-minute orders, which is why
                  our same-day printing service is tailored to meet your
                  deadlines without compromising on quality. Whether you need a
                  single apron or a bulk order, we ensure every piece is printed
                  with precision, durability, and style. Don’t let long wait
                  times slow you down—place your order now with Tee Print London
                  and get your custom aprons printed on the same day with
                  professional service and unmatched quality.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img
                src="/img/Apron/Leonardo_Phoenix_10_a_young_man_in_his_early_twenties_with_a_r_3.jpg"
                alt="about iamge"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container mt-5">
      <web-DuelCard
        img_left="/img/Apron/Leonardo_Phoenix_10_A_young_man_in_his_early_twenties_with_a_c_2.jpg"
        img_right="/img/Apron/Leonardo_Phoenix_10_a_young_man_in_his_early_twenti.jpg"
        paragraph="We bring your vision to life with creative designs that leave a lasting impression. Your dream is our mission, your satisfaction is our commitment, and delivering excellence is our promise."
      />
    </div>
    <web-questions></web-questions>
  </div>
</template>
