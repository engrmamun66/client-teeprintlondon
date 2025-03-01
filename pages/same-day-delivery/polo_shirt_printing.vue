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
            title="Same-Day Printing for Polo Shirts"
            :images="[
              '/img/Polo_T_shirt/Leonardo_Phoenix_10_A_casually_dressed_young_man_in_his_early_2.jpg',
              '/img/Polo_T_shirt/Leonardo_Phoenix_10_A_young_male_model_in_his_early_twenties_w_0.jpg',
              '/img/Polo_T_shirt/Leonardo_Phoenix_10_A_young_adult_male_likely_in_his_early_twe_1.jpg',
            ]"
          >
            Need high-quality custom Polo Shirts in a hurry? Tee Print London provides
            same-day printing services, ensuring fast and reliable results.
            Whether it’s for businesses, events, promotions, or personal use,
            our efficient process guarantees stylish and professional Polo Shirts
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
                  Why Choose Tee Print London for Your Polo Shirt Printing
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Tee Print London is your go-to destination for high-quality
                  Polo Shirt printing, offering premium designs, exceptional
                  craftsmanship, and unbeatable customer service. Whether you're
                  looking for custom prints for your brand, event, or personal
                  style, we provide vibrant, long-lasting prints on comfortable,
                  high-quality fabrics. Our advanced printing techniques ensure
                  sharp details and rich colors that won’t fade over time. Plus,
                  with fast turnaround times and competitive pricing, we make
                  customization effortless and affordable. Choose Tee Print
                  London for stylish, durable, and uniquely crafted Polo Shirts that
                  make a statement!
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <!-- <img src="/img/Tote_bag/Leonardo_Phoenix_10_a_vibrant_and_colorful_tote_bag_image_with_0.jpg" alt="about iamge" /> -->
              <video
                class="rounded-video"
                autoplay
                loop
                muted
                playsinline
                width="100%"
              >
                <source
                  src="https://res.cloudinary.com/dyfnpakfq/video/upload/v1740854173/60a766b1-ffa4-4b6e-be69-531f597d778f_video_dyum8u.mp4"
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
              <img src="/img/Polo_T_shirt/Leonardo_Phoenix_10_A_young_male_model_in_his_early_twenties_w_2.jpg" alt="about iamge" />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  Same-Day Polo Shirt Printing – Fast, Reliable, and High-Quality
                </h2>
              </div>
              <p>
                When time is of the essence, and you need custom-printed Polo Shirts
                without delays, Tee Print London is here to help. We specialize
                in same-day printing services, allowing you to receive
                professionally printed Polo Shirts on the very same day you place
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
                Polo Shirt or a bulk order, our team is dedicated to providing the
                best service in London and across the UK. Why wait for days? Get
                your custom Polo Shirts printed today with Tee Print London and enjoy
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
                  style. Don’t let long wait times slow you down—place your order
                  now with Tee Print London and get your custom Polo Shirts printed
                  on the same day with professional service and unmatched quality.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img src="/img/Polo_T_shirt/Leonardo_Phoenix_10_A_young_adult_male_likely_in_his_early_twe_0.jpg" alt="about iamge" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container mt-5">
      <web-DuelCard
        img_left="/img/Polo_T_shirt/Leonardo_Phoenix_10_A_casually_dressed_young_man_in_his_early_3.jpg"
        img_right="/img/Polo_T_shirt/Leonardo_Phoenix_10_a_young_man_with_a_strong_jawline_and_a_co_3.jpg"
        paragraph="We bring your vision to life with creative designs that leave a lasting impression. Your dream is our mission, your satisfaction is our commitment, and delivering excellence is our promise."
      />
    </div>
    <web-questions></web-questions>
  </div>
</template>