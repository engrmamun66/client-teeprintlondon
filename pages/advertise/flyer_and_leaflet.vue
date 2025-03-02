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
            title="Same-Day Printing for Hoodies & Sweatshirts"
            :images="[
              '/img/Hoodie/Leonardo_Kino_XL_a_men_wearing_hoodie_Teeprint_London_written_2.jpg',
              '/img/Hoodie/Leonardo_Kino_XL_a_men_wearing_hoodieStay_Cozy_Stay_Cool_writt_0.jpg',
              '/img/Hoodie/Flux_Dev_a_highquality_photorealistic_image_of_a_trendy_hoodie_0.jpeg',
            ]"
          >
            Need high-quality custom hoodies or sweatshirts in a hurry? Tee
            Print London provides same-day printing services, ensuring fast and
            reliable results. Whether it’s for businesses, events, sports teams,
            or personal use, our efficient process guarantees stylish and
            professional apparel without delays. Serving clients across London
            and the UK, we specialize in delivering premium printing solutions
            with a quick turnaround to meet your urgent needs.

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
                  Why Choose Tee Print London for Your Hoodies & Sweatshirts
                  Printing
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Tee Print London is your go-to destination for high-quality
                  hoodie and sweatshirt printing, offering premium designs,
                  exceptional craftsmanship, and unbeatable customer service.
                  Whether you're looking for custom prints for your brand, team,
                  or personal style, we provide vibrant, long-lasting prints on
                  comfortable, high-quality fabrics. Our advanced printing
                  techniques ensure sharp details and rich colors that won’t
                  fade over time. Plus, with fast turnaround times and
                  competitive pricing, we make customization effortless and
                  affordable. Choose Tee Print London for stylish, durable, and
                  uniquely crafted hoodies and sweatshirts that make a
                  statement!
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <!-- <img
                src="https://teeprint.london/wp-content/uploads/2022/11/t-shirt-printing-cover-1024x694.jpg"
                alt="about iamge"
              /> -->

              <video
                class="rounded-video"
                autoplay
                loop
                muted
                playsinline
                width="100%"
              >
                <source
                  src="https://res.cloudinary.com/dyfnpakfq/video/upload/v1740854046/efbb14eb-4cfd-4c3b-9508-56c53e57e1d5_video_vmxcx3.mp4"
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
                src="/img/Hoodie/Leonardo_Phoenix_10_A_stylish_highquality_hoodie_from_Teeprint_2.jpg"
                alt="about iamge"
              />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-content">
              <div class="section-main-heading">
                <!-- <h4 class="section-heading-title-small">
                                <span class="line-decoration"></span> About Us
                            </h4> -->
                <h2 class="section-heading-title-big">
                  Same-Day Hoodie & Sweatshirt Printing – Fast, Reliable, and
                  High-Quality
                </h2>
              </div>
              <p>
                When time is of the essence, and you need custom-printed hoodies
                or sweatshirts without delays, Tee Print London is here to help.
                We specialize in same-day printing services, allowing you to
                receive professionally printed apparel on the very same day you
                place your order. Whether you're preparing for a corporate
                event, sports competition, promotional campaign, or simply want
                a unique design for personal use, our service ensures you get
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
                a single hoodie or a bulk order, our team is dedicated to
                providing the best service in London and across the UK. Why wait
                for days? Get your custom hoodies and sweatshirts printed today
                with Tee Print London and enjoy fast, reliable, and high-quality
                printing tailored to your needs.
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
                  Get Your Custom Hoodies & Sweatshirts Printed Today!
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Why wait days or even weeks for your custom apparel when you
                  can have it printed today? At Tee Print London, we offer
                  same-day hoodie and sweatshirt printing to ensure you get your
                  custom designs exactly when you need them. Whether it’s for a
                  corporate event, business promotion, sports team, charity
                  fundraiser, or personal use, we provide a seamless and
                  hassle-free printing experience with top-notch results. Our
                  process is designed for speed and convenience—simply select
                  your hoodie or sweatshirt, upload your design, and let us
                  handle the rest. Using advanced printing techniques, including
                  Direct-to-Garment (DTG), screen printing, and vinyl printing,
                  we guarantee sharp, vibrant, and long-lasting prints that
                  won’t fade after just a few washes. We understand the urgency
                  of last-minute orders, which is why our same-day printing
                  service is tailored to meet your deadlines without
                  compromising on quality. Whether you need a single hoodie or a
                  bulk order, we ensure every piece is printed with precision,
                  durability, and style. Don’t let long wait times slow you
                  down—place your order now with Tee Print London and get your
                  custom hoodies and sweatshirts printed on the same day with
                  professional service and unmatched quality.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img
                src="/img/Hoodie/Leonardo_Phoenix_10_a_young_adult_male_figure_likely_in_his_ea_1.jpg"
                alt="about iamge"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container mt-5">
      <web-DuelCard
        img_left="/img/Hoodie/Leonardo_Phoenix_10_a_surreal_and_vibrant_cinematic_photograph_3.jpg"
        img_right="/img/Hoodie/Leonardo_Phoenix_10_A_young_man_likely_in_his_early_twenties_w_0.jpg"
        paragraph="We bring your vision to life with creative designs that leave a lasting impression. Your dream is our mission, your satisfaction is our commitment, and delivering excellence is our promise."
      />
    </div>
    <web-questions></web-questions>
  </div>
</template>
