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
            title="Premium Custom Sweatshirts Printing in London"
            :images="[
              '/img/Hoodie/Leonardo_Kino_XL_a_men_wearing_hoodie_Teeprint_London_written_2.jpg',
              '/img/Hoodie/Leonardo_Kino_XL_a_men_wearing_hoodieStay_Cozy_Stay_Cool_writt_0.jpg',
              '/img/Hoodie/Flux_Dev_a_highquality_photorealistic_image_of_a_trendy_hoodie_0.jpeg',
            ]"
          >
            Elevate your wardrobe with custom-printed sweatshirts from Tee Print
            London. Our high-quality printing services transform blank
            sweatshirts into personalized fashion statements. Whether you need
            promotional apparel for your business, team uniforms, or unique
            designs for personal wear, we deliver exceptional results with quick
            turnaround times. Using premium fabrics and state-of-the-art
            printing technology, we ensure your custom sweatshirts are
            comfortable, durable, and visually striking.

            <template #link>
              <nuxt-link
                :to="{ name: 'quote' }"
                class="teeprint-button teeprint-theme-btn zoomInOut mt-5"
              >
                Order Now <i class="la la-arrow-right ml-1"></i>
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
                  Why Choose Our Custom Sweatshirt Printing?
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Tee Print London stands out for sweatshirt printing with our
                  commitment to quality and customer satisfaction. We use only
                  premium-grade sweatshirts that offer superior comfort and
                  longevity. Our advanced printing techniques ensure vibrant
                  colors that won't crack or fade, even after multiple washes.
                  From intricate designs to bold statements, we handle all types
                  of artwork with precision. Our team works closely with you to
                  bring your vision to life, offering expert advice on design
                  placement, color choices, and fabric selection. With
                  competitive pricing and flexible order quantities, we make
                  custom sweatshirt printing accessible for everyone.
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
                  <span class="line-decoration"></span>Customer
                </h4>
                <h2 class="section-heading-title-big">Testimonials</h2>
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
                <h2 class="section-heading-title-big">
                  Fast & Reliable Sweatshirt Printing Services
                </h2>
              </div>
              <p>
                Need custom sweatshirts in a hurry? Our express printing service
                delivers premium-quality results without the long wait times. We
                understand that sometimes you need your custom apparel quickly,
                whether for last-minute events, urgent promotions, or surprise
                gifts. Our streamlined production process allows us to offer
                same-day printing for most orders, without compromising on
                quality. We utilize cutting-edge DTG (Direct-to-Garment)
                printing technology that produces photorealistic prints with
                exceptional detail and color accuracy. For larger orders, we
                employ screen printing techniques that ensure durability and
                cost-effectiveness. Every sweatshirt undergoes rigorous quality
                checks to guarantee perfect prints, proper curing, and flawless
                finishing. Our team can handle everything from small personal
                orders to bulk corporate requests, always maintaining our high
                standards. Located in the heart of London, we serve businesses,
                schools, sports teams, and individuals across the UK with fast
                turnaround times and reliable service you can count on.
              </p>
              <nuxt-link
                :to="{ name: 'quote' }"
                class="teeprint-button teeprint-theme-btn zoomInOut"
                href="#"
              >
                Get Started <i class="la la-arrow-right ml-1"></i>
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
                  Custom Sweatshirts for Every Occasion
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Our custom sweatshirts are perfect for countless applications.
                  Businesses choose us for branded company apparel that promotes
                  their brand in style. Schools and universities order custom
                  sweatshirts for sports teams, alumni events, and student
                  organizations. Bands and performers use our services for
                  merchandise that fans love. Families create personalized
                  sweatshirts for reunions, vacations, and special occasions. We
                  offer a wide range of sweatshirt styles including classic
                  crewnecks, trendy oversized fits, zip-up options, and premium
                  fleece-lined varieties. Choose from various colors, weights,
                  and fabric compositions to suit your needs. Our design team
                  can help create artwork from scratch or optimize your existing
                  designs for perfect printing results. Whether you need a
                  single custom sweatshirt or hundreds, we provide the same
                  attention to detail and quality craftsmanship.
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
        paragraph="Transform ordinary sweatshirts into extraordinary pieces with our custom printing services. We combine quality materials with artistic printing to create wearable art that represents your unique style or brand identity."
      />
    </div>
    <web-questions></web-questions>
  </div>
</template>
