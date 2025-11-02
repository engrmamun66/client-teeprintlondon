<script setup lang="ts">
import getMeta from "~/seo-meta";
useSeoMeta(getMeta("cloth", "promotion_t_shirts"));
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
    <!-- Promotional T-Shirts Section -->
    <section class="teeprint-makes-section">
      <div class="container">
        <div class="row">
          <MultipleImageCard
            :right="true"
            title="High-Quality Promotional T-Shirts"
            :images="[
              '/img/promotional_t_shirt/1.jpg',
              '/img/promotional_t_shirt/3.jpg',
              '/img/promotional_t_shirt/5.jpg',
            ]"
          >
            Looking for high-quality promotional T-shirts? Tee Print London
            specializes in creating vibrant, durable, and professional T-shirts
            that make your brand stand out. Whether it’s for corporate branding,
            team events, or promotional campaigns, we deliver premium-quality
            T-shirts that exceed expectations. Our commitment to quality ensures
            every shirt is crafted with precision, using advanced printing
            techniques like Direct-to-Garment (DTG), screen printing, and vinyl
            printing. Serving clients across London and the UK, we’re your
            trusted partner for top-notch promotional T-shirts.

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

    <!-- Why Choose Tee Print London for Promotional T-Shirts -->
    <section class="teeprint-about-section">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  Why Choose Tee Print London for Promotional T-Shirts?
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  At Tee Print London, we pride ourselves on delivering
                  high-quality promotional T-shirts that combine durability,
                  comfort, and professional design. Whether you need T-shirts
                  for corporate branding, team events, or promotional campaigns,
                  we use advanced printing techniques like Direct-to-Garment
                  (DTG), screen printing, and vinyl printing to create vibrant,
                  long-lasting designs. Our state-of-the-art technology and
                  expert team ensure every shirt is printed with precision and
                  care. When you purchase from Tee Print London, you’re not just
                  buying a T-shirt—you’re investing in a product that reflects
                  your brand’s excellence. Trust us for premium-quality
                  promotional T-shirts that leave a lasting impression.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img
                src="/img/promotional_t_shirt/9.jpg"
                alt="promotional T-shirts"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Customer Reviews Section -->
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

    <!-- High-Quality Promotional T-Shirts Section -->
    <section class="teeprint-homewhychoose-section">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-img">
              <img
                src="/img/promotional_t_shirt/6.jpg"
                alt="promotional T-shirts"
              />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big mt-5">
                  Premium-Quality Promotional T-Shirts – Durable and
                  Professional
                </h2>
              </div>
              <p>
                When you choose Tee Print London for your promotional T-shirts,
                you’re choosing quality, durability, and professionalism. Our
                T-shirts are crafted to withstand daily wear and multiple
                washes, ensuring your designs stay vibrant and sharp for years
                to come. Using state-of-the-art printing techniques like
                Direct-to-Garment (DTG), screen printing, and vinyl printing, we
                produce long-lasting designs that reflect your brand’s identity.
                No matter the complexity of your design—logos, slogans,
                graphics, or personalized text—we bring your vision to life with
                precision and care. Our commitment to quality means every shirt
                is made to impress. Whether you need a single T-shirt or a bulk
                order, our team is dedicated to providing the best promotional
                T-shirts in London and across the UK. Choose Tee Print London
                for T-shirts that combine style, durability, and
                professionalism.
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

    <!-- Same-Day Service Section -->
    <div>
      <Cloth />
    </div>

    <!-- Order Your Promotional T-Shirts Section -->
    <section class="teeprint-about-section">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  Get Your High-Quality Promotional T-Shirts Today!
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Why settle for ordinary when you can have premium-quality
                  promotional T-shirts? At Tee Print London, we offer top-notch
                  T-shirts that combine durability, comfort, and professional
                  design. Whether it’s for corporate branding, team uniforms, or
                  promotional campaigns, we provide a seamless and hassle-free
                  printing experience with exceptional results. Our process is
                  designed for convenience—simply select your T-shirt, upload
                  your design, and let us handle the rest. Using advanced
                  printing techniques, we guarantee sharp, vibrant, and
                  long-lasting prints that won’t fade after daily use. When you
                  purchase from Tee Print London, you’re investing in a product
                  that reflects your brand’s excellence. Don’t compromise on
                  quality—place your order now with Tee Print London and get
                  high-quality promotional T-shirts that leave a lasting
                  impression.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img
                src="/img/promotional_t_shirt/2.jpg"
                alt="promotional T-shirts"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Duel Card Section -->
    <div class="container mt-5">
      <web-DuelCard
        img_left="/img/promotional_t_shirt/10.jpg"
        img_right="/img/promotional_t_shirt/7.jpg"
        paragraph="At Tee Print London, we bring your vision to life with creative designs that leave a lasting impression. Your dream is our mission, your satisfaction is our commitment, and delivering excellence is our promise."
      />
    </div>

    <!-- FAQ Section -->
    <web-questions></web-questions>
  </div>
</template>
