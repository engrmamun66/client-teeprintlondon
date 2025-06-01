<script setup lang="ts">
import getMeta from "~/seo-meta";
useSeoMeta(getMeta("same_day_pages", "hoodie"));

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
            title="Hoodie Printing in London"
            :images="[
              '/img/Hoodie/Leonardo_Kino_XL_a_men_wearing_hoodie_Teeprint_London_written_2.jpg',
              '/img/Hoodie/Leonardo_Kino_XL_a_men_wearing_hoodieStay_Cozy_Stay_Cool_writt_0.jpg',
              '/img/Hoodie/Flux_Dev_a_highquality_photorealistic_image_of_a_trendy_hoodie_0.jpeg',
            ]"
          >
            Add your favorite quote, logo, name, and fun picture on hoodies. If
            you need custom hoodies for branding, team, school, and more, we
            craft them for all needs. Searching for printed hoodies near me in
            London? Let us create one that has your unique style. Order your
            hoodie and get it delivered without delay.

            <template #link>
              <nuxt-link
                :to="{ name: 'quote' }"
                class="teeprint-button teeprint-theme-btn zoomInOut mt-5"
              >
                Get A Quote <i class="la la-arrow-right ml-1"></i>
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
                  Premium Quality Custom Hoodies You Can Trust
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  In a question of good quality hoodies, TeePrintLondon shows no
                  compromise. We offer high-quality hoodies that are great to
                  look at and awesome to wear! They feel soft and are crafted
                  with premium fabric. Plus, the print won't fade or crack. We
                  ensure you have an amazing experience, not just the product.
                  People in London admire us due to our uniqueness in custom
                  hoodie printing.
                </p>
                <div class="col mt-4">
                  <div class="col-md-12">
                    <h4><strong>Strong Fabric</strong></h4>
                    <p>
                      Our hoodies are soft and comfortable. The quality remains
                      the same even after lots of washes.
                    </p>
                  </div>
                  <div class="col-md-12">
                    <h4><strong>Bright Prints</strong></h4>
                    <p>
                      We use special printing. Your design stays sharp and clear
                      for months. It doesn't peel off.
                    </p>
                  </div>
                  <div class="col-md-12">
                    <h4><strong>Cool Style</strong></h4>
                    <p>
                      Simple or bold, choose colors and designs that fit you
                      perfectly. Your hoodie, your choice.
                    </p>
                  </div>
                </div>
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
                  <span class="line-decoration"></span>Customer Thoughts
                </h4>
                <h2 class="section-heading-title-big">On Our Hoodies</h2>
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
                  Personalised Hoodies in Multiple Styles, Colours & Fits
                </h2>
              </div>
              <p>
                We believe you should design your own hoodie. Personalization is
                easy with us. Add your text, logo, or image, and make it
                special. We have multiple colours, sizes, and styles so everyone
                can find an option. To make the design more polished and
                lasting, we apply various printing methods like DTG, screen
                printing, and vinyl printing.
              </p>
              <p>
                It does not matter if you prefer bold, simple, and fun; our
                personalised hoodies are available in your way. Pick your style
                and start designing.
              </p>
              <nuxt-link
                :to="{ name: 'quote' }"
                class="teeprint-button teeprint-theme-btn zoomInOut"
                href="#"
              >
                Design Your Hoodie <i class="la la-arrow-right ml-1"></i>
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
                  Same-Day Hoodie Printing in London
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  If you need a custom hoodie printed and delivered on the same
                  day, knock us. We offer hoodie printing in London for those
                  who are in a hurry. Our quick service is perfect for
                  last-minute events or urgent gifts. Don't worry about losing
                  quality because we follow strict quality standards.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  Custom Order, No Minimum Quantity
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  For print-on-demand hoodies, we have no minimum quantity
                  restriction. You can order as much as you need. This
                  flexibility lets you order one for personal use or even
                  hundreds for big events. We want to make custom hoodies
                  affordable to everyone. So, there is no limit.
                </p>
              </div>
            </div>
          </div>
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
                  Design Your Hoodie for Events, Teams & Businesses
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Why do you need personalised hoodies in the UK? We craft
                  hoodies for many purposes. You can design them for events,
                  teams, or businesses. Some examples of variation of our custom
                  hoodies are:
                </p>
                <ul class="dotted-list">
                  <li><span class="dot"></span>Event hoodies</li>
                  <li><span class="dot"></span>Team hoodies</li>
                  <li><span class="dot"></span>Business hoodies</li>
                  <li><span class="dot"></span>School hoodies</li>
                  <li><span class="dot"></span>Fundraiser hoodies</li>
                  <li><span class="dot"></span>Sports hoodies</li>
                  <li><span class="dot"></span>Club hoodies</li>
                  <li><span class="dot"></span>Work hoodies</li>
                </ul>
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

    <section class="teeprint-about-section">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  How to Customise and Order Your Hoodie Online
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  If you want fully customizable hoodies, you can design yours
                  and place an order. We have simplified the self-designing
                  process. Follow these steps to make a unique hoodie that no
                  one has:
                </p>
                <ul class="dotted-list">
                  <li>
                    <span class="dot"></span>Choose your hoodie style and color
                    from our vast options.
                  </li>
                  <li>
                    <span class="dot"></span>Upload your design to our system or
                    add text and other elements.
                  </li>
                  <li>
                    <span class="dot"></span>Pick the accurate size and
                    quantity.
                  </li>
                  <li>
                    <span class="dot"></span>Review your order to ensure that
                    everything is okay.
                  </li>
                  <li>
                    <span class="dot"></span>Place your order and wait for
                    delivery.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  Why Choose Us for Personalised Hoodies?
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Our mission is to craft full custom hoodies just how you want
                  them! We believe in simplicity and have set our system
                  accordingly. Anyone can choose a style, design, and size, we
                  handle the rest.
                </p>
                <p>
                  We are also serious about the fabric quality, along with
                  printing. Our hoodies not only look great, but they last
                  longer. We always wish to deliver you a custom hoodie that
                  will make you confident in public.
                </p>
                <p>
                  For these reasons, TeePrintLondon is a well-known name for
                  hoodie printing in London.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="teeprint-makes-section">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <div class="section-main-heading">
              <h2 class="section-heading-title-big">
                Order Your Fully Customisable Hoodie Today
              </h2>
            </div>
            <p class="mb-5">
              Craft your special hoodie with the help of our custom hoodie
              printing service. It's easier than you think! Start designing
              today and get it delivered today.
            </p>
            <nuxt-link
              :to="{ name: 'quote' }"
              class="teeprint-button teeprint-theme-btn zoomInOut"
            >
              Design Your Hoodie <i class="la la-arrow-right ml-1"></i>
            </nuxt-link>
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
    <web-questions name="hoodie"/>
  </div>
</template>

<style scoped>
.dotted-list {
  list-style-type: none;
  padding-left: 0;
}

.dotted-list li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 8px;
}

.dot {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  background-color: currentColor;
  border-radius: 50%;
}
</style>
