<script setup lang="ts">
import getMeta from "~/seo-meta";
useSeoMeta(getMeta("advertise", "folded_flyer_and_menu"));
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
            title="High-Quality Folded Flyer and Menu Printing"
            :images="[
              '/img/flyer_and_leaflet/Leonardo_Kino_XL_Folded_Leaflet_1.jpg',
              '/img/menu_print/Leonardo_Kino_XL_Restaurant_menu_0.jpg',
            ]"
          >
            Looking for eye-catching folded flyers or elegant menu designs? Tee
            Print London specializes in high-quality folded flyer and menu
            printing that combines creativity with precision. Whether you're
            promoting a restaurant, café, event, or business, our folded flyers
            and menus are designed to captivate your audience. With customizable
            sizes, premium materials, and a variety of finishes, we ensure your
            prints are both functional and visually stunning. Let us help you
            make a lasting impression with professionally crafted printed
            materials.

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
                  Why Choose Tee Print London for Folded Flyers and Menus?
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  At Tee Print London, we pride ourselves on delivering
                  exceptional printing services tailored to your needs. Our
                  folded flyers and menus are crafted using state-of-the-art
                  printing technology, ensuring vibrant colors, sharp details,
                  and professional finishes. Whether you need a compact menu for
                  your restaurant or a multi-panel flyer for your next event, we
                  offer a wide range of customization options to suit your
                  brand. With fast turnaround times, competitive pricing, and a
                  commitment to quality, we are your trusted partner for all
                  your printing needs.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img
                src="/img/menu_print/Leonardo_Phoenix_10_A_rustic_wooden_table_adorned_with_a_few_s_1.jpg"
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
                src="/img/flyer_and_leaflet/Leonardo_Phoenix_10_A_rectangular_trifolded_flyer_for_a_restau_0svksfv.jpg"
                alt="about image"
              />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  Premium Folded Flyers and Menus – Designed to Impress
                </h2>
              </div>
              <p>
                Our folded flyers and menus are more than just printed materials
                – they are powerful tools to communicate your brand’s message.
                Whether you’re showcasing a restaurant menu, promoting an event,
                or advertising a business, our designs are tailored to grab
                attention and leave a lasting impression. With options for
                bi-fold, tri-fold, or custom folds, we ensure your materials are
                both functional and visually appealing. Combined with fast
                printing services and high-quality finishes, we make it easy to
                create professional-grade prints that stand out.
              </p>
              <nuxt-link
                :to="{ name: 'quote' }"
                class="teeprint-button teeprint-theme-btn zoomInOut"
              >
                Get A Free Quote <i class="la la-arrow-right ml-1"></i>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div>
      <Advertise />
    </div>

    <section class="teeprint-about-section">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  Get Your Folded Flyers and Menus Printed Today!
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Don’t wait to make an impact – get your folded flyers and
                  menus printed today with Tee Print London. Our streamlined
                  process ensures quick turnaround times without compromising on
                  quality. Whether you need a small batch for a local event or a
                  large order for a business campaign, we’ve got you covered.
                  With our advanced printing techniques and attention to detail,
                  we guarantee vibrant, durable, and professional results. Place
                  your order now and experience the best in folded flyer and
                  menu printing.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img
                src="/img/menu_print/Leonardo_Kino_XL_Restaurant_menu_0.jpg"
                alt="about image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container mt-5">
      <web-DuelCard
        img_left="/img/menu_print/Leonardo_Phoenix_10_A_visually_appealing_modern_illustration_o_0.jpg"
        img_right="/img/flyer_and_leaflet/Leonardo_Kino_XL_Folded_Leaflet_2.jpg"
        paragraph="We bring your vision to life with creative designs that leave a lasting impression. Your dream is our mission, your satisfaction is our commitment, and delivering excellence is our promise."
      />
    </div>
    <web-questions></web-questions>
  </div>
</template>
