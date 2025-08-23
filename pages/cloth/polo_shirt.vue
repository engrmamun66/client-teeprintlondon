<script setup lang="ts">
import getMeta from "~/seo-meta";
useSeoMeta(getMeta("cloth", "polo_shirt"));
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
            title="Custom Polo Shirt in London"
            :images="[
              '/img/Polo_T_shirt/3.jpg',
              '/img/Polo_T_shirt/2.jpg',
              '/img/Polo_T_shirt/Leonardo_Phoenix_10_A_young_adult_male_likely_in_his_early_twe_1.jpg',
            ]"
          >
            Design your own polo shirt with your favourite colours, logos, or
            text to match your unique style. Show your personality, look sharp,
            and stay comfortable. Need custom polo shirts for events, branding,
            sports, or fun? We offer high-quality polo shirt printing in London.
            Craft something that feels truly yours.

            <template #link>
              <nuxt-link
                :to="{ name: 'quote' }"
                class="teeprint-button teeprint-theme-btn zoomInOut mt-5"
              >
                Design Your Polo Shirt <i class="la la-arrow-right ml-1"></i>
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
                  Personalised Polo Shirts With Exceptional Quality
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  TeePrintLondon ensures you get a polo that's stylish and
                  strong. You can feel our personalised polo shirts every time
                  you wear them. We use soft, strong fabric that lasts, looks
                  great, and holds its shape.
                </p>
                <p>
                  Our high-quality polo shirts are printed using the most
                  advanced printing tools and techniques. That's why your
                  designs, like logo, name, or picture, stay bright and clear.
                  Even after many washes, it looks new.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img src="/img/Polo_T_shirt/5.jpg" alt="about image" />
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
                  <span class="line-decoration"></span>Reviews
                </h4>
                <h2 class="section-heading-title-big">
                  Why People Love Our Polo Shirts
                </h2>
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
              <img src="/img/Polo_T_shirt/7.jpg" alt="about image" />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  Order One or One Hundred - It's Up to You
                </h2>
              </div>
              <p>
                Do you want just one shirt or dozens for your team or event? We
                offer the flexibility to place a polo shirt order with no
                minimum limit. You can confidently order the number of shirts
                you need. For personal use or a team, enjoy full freedom to
                design and order.
              </p>
              <nuxt-link
                :to="{ name: 'quote' }"
                class="teeprint-button teeprint-theme-btn zoomInOut"
                href="#"
              >
                Start Your Order <i class="la la-arrow-right ml-1"></i>
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
                  Custom Polo Shirts For Any Occasion
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  We print custom polo shirts for any occasion, including school
                  trips, sports days, work events, branding, and family parties.
                  We let you add your design, logo, name, and more to match the
                  occasion. Make your event special with the freedom of
                  customisation.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  Find Your Style in Our Extensive Options
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  In our vast polo shirt collection, you will find many colours,
                  styles, and designs to choose from. If you want something
                  bold, classic, or fun, we have all types that will match your
                  preference. Our collection fits all kinds of events, teams,
                  and personal styles. With so many choices, it's easy to find a
                  polo shirt that fits your look and your needs.
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
                  How To Order Your Personalised Polo Shirts In London
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  It's easier than ever to design and get your custom polo
                  shirts in London. Please follow these steps and get one
                  delivered:
                </p>
                <ul class="dotted-list">
                  <li>
                    <span class="dot"></span>Choose your polo shirt style,
                    colour, and size from our online store.
                  </li>
                  <li>
                    <span class="dot"></span>Upload your unique design, logo,
                    and text using our quick design tool.
                  </li>
                  <li>
                    <span class="dot"></span>Review your design and confirm
                    everything looks the way you want.
                  </li>
                  <li>
                    <span class="dot"></span>Place your order and select your
                    delivery option.
                  </li>
                  <li>
                    <span class="dot"></span>Get your custom polo delivered and
                    enjoy!
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  Enjoy Same-Day Polo Shirt Printing And Delivery
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Great news! We are offering same-day custom polo shirt
                  printing and delivery in London. When you are in a hurry, we
                  ship it always on time. Our express delivery is great for
                  urgent events and last-minute gifts. Place your order early in
                  the day and enjoy the same-day delivery.
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
                  Begin Your Polo Shirt Brand With Us
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Want to build your own polo shirt brand? We can help you begin
                  and grow your business easily. We offer cheap polo shirt
                  printing without losing quality for wholesale orders. Start
                  your white-label business with us, where every idea is yours.
                </p>
                <p>
                  From our extensive designs, colours, and sizes, choose the
                  right one and modify it as needed. We'll handle the rest and
                  ensure your brand looks professional. Create your polo shirt
                  brand successfully today.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img
                src="/img/Polo_T_shirt/Leonardo_Phoenix_10_A_young_adult_male_likely_in_his_early_twe_0.jpg"
                alt="about image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="teeprint-about-section">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="teeprint-about-content text-center">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  Why Choose TeePrintLondon for Custom Polo Shirt Printing
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  We bring your ideas to life! People admire us because we have
                  made everything simple and easy. When ordering a polo shirt,
                  you will have a smoother, more reliable, and affordable
                  experience than ever.
                </p>
                <p>
                  Customisation of polo shirts is quick and simple with our
                  system. You have complete control of design and
                  personalisation rather than struggling with a few templates.
                </p>
                <p>
                  We don't think affordable means low quality. For each item, we
                  offer premium material and printing that lasts longer and
                  looks excellent. Stay confident with our polos and save time
                  with quick delivery.
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
                Start Designing Your Polo Shirt Now
              </h2>
            </div>
            <p class="mb-5">
              Pick your style and design, and order early to get your custom
              polo shirt in London the same day. Look stylish and make your
              event special with a unique polo.
            </p>
            <nuxt-link
              :to="{ name: 'quote' }"
              class="teeprint-button teeprint-theme-btn zoomInOut"
            >
              Start Your Design <i class="la la-arrow-right ml-1"></i>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <div class="container mt-5">
      <web-DuelCard
        img_left="/img/Polo_T_shirt/13.jpg"
        img_right="/img/Polo_T_shirt/Leonardo_Phoenix_10_a_young_man_with_a_strong_jawline_and_a_co_3.jpg"
        paragraph="We bring your vision to life with creative designs that leave a lasting impression. Your dream is our mission, your satisfaction is our commitment, and delivering excellence is our promise."
      />
    </div>
    <web-questions name="polotshirt" />
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
