<script setup lang="ts">
import getMeta from "~/seo-meta";
useSeoMeta(getMeta("same_day_pages", "cotton_t_shirt"));

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
            title="Same-Day Custom Cotton T-Shirt Printing"
            :images="[
              '/img/Cotton_T_shirt/Leonardo_Phoenix_10_A_stylish_man_in_his_mid30s_with_a_strong_0.jpg',
              '/img/Cotton_T_shirt/Leonardo_Phoenix_10_A_fit_middleaged_man_with_short_dark_hair_1.jpg',
              '/img/Cotton_T_shirt/Leonardo_Phoenix_10_A_vibrant_colorful_image_of_a_happy_6yearo_3.jpg',
            ]"
          >
            Need custom cotton T-shirts in a hurry? Tee Print London offers
            **same-day printing services** to meet your urgent needs. Whether
            it’s for corporate branding, team uniforms, events, or personal use,
            we deliver vibrant, high-quality T-shirts on the same day you place
            your order. Our streamlined process ensures fast, reliable results
            without compromising on quality. Serving clients across London and
            the UK, we’re your trusted partner for premium, same-day custom
            T-shirt printing.

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
                  Why Choose Tee Print London for Same-Day T-Shirt Printing?
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  At Tee Print London, we specialize in **same-day custom cotton
                  T-shirt printing** that combines speed, quality, and
                  reliability. Whether you need T-shirts for your team, event,
                  or personal use, we use advanced printing techniques like
                  Direct-to-Garment (DTG), screen printing, and vinyl printing
                  to deliver vibrant, long-lasting designs. Our state-of-the-art
                  technology and expert team ensure your T-shirts are printed
                  with precision and care, even on tight deadlines. With
                  **same-day delivery** options, we make it easy to get your
                  custom T-shirts when you need them most. Trust Tee Print
                  London for fast, professional, and high-quality printing
                  services.
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
                  src="https://res.cloudinary.com/dyfnpakfq/video/upload/v1744656065/a4b9eeb3-a7e0-49b3-879d-f0cc73a4cd09_video_bknu45_online-video-cutter.com_ajqzgl.mp4"
                  type="video/mp4"
                />
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
                src="/img/Cotton_T_shirt/Leonardo_Phoenix_10_a_surreal_and_vibrant_cinematic_photograph_1 (1).jpg"
                alt="about image"
              />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  Same-Day Cotton T-Shirt Printing – Fast, Reliable, and
                  High-Quality
                </h2>
              </div>
              <p>
                When you need custom cotton T-shirts in a hurry, Tee Print
                London is here to help. Our **same-day printing service**
                ensures you get professionally printed T-shirts on the very same
                day you place your order. Whether it’s for a corporate event,
                team activity, or personal use, we deliver premium-quality
                prints with a fast turnaround. Using state-of-the-art printing
                techniques like Direct-to-Garment (DTG), screen printing, and
                vinyl printing, we produce vibrant, long-lasting designs that
                withstand daily wear and multiple washes. No matter the
                complexity of your design—logos, slogans, graphics, or
                personalized text—we bring your vision to life with precision
                and care. Our commitment to quality means that speed never
                compromises excellence. Whether you need a single T-shirt or a
                bulk order, our team is dedicated to providing the best
                **same-day printing service** in London and across the UK. Why
                wait for days? Get your custom T-shirts printed today with Tee
                Print London and enjoy fast, reliable, and high-quality results.
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
                  Get Your Custom Cotton T-Shirts Printed Today!
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Why wait days or even weeks for your custom cotton T-shirts
                  when you can have them printed today? At Tee Print London, we
                  offer **same-day printing services** to ensure you get your
                  custom designs exactly when you need them. Whether it’s for
                  corporate branding, team uniforms, events, or personal use, we
                  provide a seamless and hassle-free printing experience with
                  top-notch results. Our process is designed for speed and
                  convenience—simply select your T-shirts, upload your design,
                  and let us handle the rest. Using advanced printing
                  techniques, we guarantee sharp, vibrant, and long-lasting
                  prints that won’t fade after daily use. We understand the
                  urgency of last-minute orders, which is why our **same-day
                  printing service** is tailored to meet your deadlines without
                  compromising on quality. Whether you need a single piece or a
                  bulk order, we ensure every item is printed with precision,
                  durability, and style. Don’t let long wait times slow you
                  down—place your order now with Tee Print London and get your
                  custom T-shirts printed on the same day with professional
                  service and unmatched quality.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img
                src="/img/Cotton_T_shirt/Leonardo_Phoenix_10_A_stylish_man_in_his_mid30s_with_a_strong_1.jpg"
                alt="about image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container mt-5">
      <web-DuelCard
        img_left="/img/Cotton_T_shirt/Leonardo_Phoenix_10_a_surreal_and_vibrant_cinematic_photograph_0.jpg"
        img_right="/img/Cotton_T_shirt/Leonardo_Phoenix_10_A_bright_and_colorful_image_of_a_happy_6ye_1.jpg"
        paragraph="We bring your vision to life with creative designs that leave a lasting impression. Your dream is our mission, your satisfaction is our commitment, and delivering excellence is our promise."
      />
    </div>
    <web-questions></web-questions>
  </div>
</template>
