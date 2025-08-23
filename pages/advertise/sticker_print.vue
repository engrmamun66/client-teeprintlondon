<script setup lang="ts">
import getMeta from "~/seo-meta";
useSeoMeta(getMeta("advertise", "sticker_print"));
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
    <!-- New Section: Sticker Products -->
    <section class="teeprint-makes-section">
      <div class="container">
        <div class="row">
          <MultipleImageCard
            :right="true"
            title="Custom Stickers for Every Need"
            :images="[
              '/img/sticker_print/2.jpg',
              '/img/sticker_print/3.jpg',
              '/img/sticker_print/7.jpg',
            ]"
          >
            At Tee Print London, we specialize in creating high-quality custom
            stickers that are perfect for branding, promotions, or personal use.
            Whether you’re looking to add a creative touch to your products,
            promote your business, or personalize your belongings, our wide
            range of sticker options has you covered. From durable waterproof
            stickers to elegant transparent designs, we offer something for
            every need.

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
                  Explore Our Sticker Collection
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Our sticker collection is designed to meet a variety of needs,
                  from business branding to personal projects. We offer a wide
                  range of sticker types to suit every purpose. Sticker sheets
                  are perfect for bulk designs, ideal for crafting, product
                  packaging, or promotional giveaways. Roll labels are great for
                  product labeling, offering durability and ease of application,
                  making them perfect for retail and e-commerce businesses.
                  Window stickers are excellent for storefront promotions or car
                  windows, while return address labels provide a professional
                  and practical solution for businesses and individuals who send
                  mail regularly.
                </p>
                <p>
                  For a creative twist on traditional business cards, our
                  business card stickers are a unique and adhesive alternative.
                  Square stickers are versatile and eye-catching, making them
                  great for branding or personal use. Circle stickers are
                  perfect for logos, product labels, or decorative purposes. If
                  you want to turn your favorite photos into stickers, our photo
                  stickers are ideal for personalizing gifts or scrapbooking.
                  Die-cut stickers allow for custom shapes, perfect for unique
                  branding or creative projects. For outdoor use or products
                  exposed to moisture, our waterproof stickers are durable and
                  weather-resistant. Transparent stickers offer a sleek and
                  modern look, ideal for glass surfaces or minimalist designs.
                  Car stickers are perfect for promoting your business or
                  personalizing your vehicle, and wall stickers are great for
                  home decor or office branding.
                </p>
                <p>
                  With customizable shapes, sizes, and materials, our stickers
                  are designed to meet your unique needs. Whether you’re looking
                  for waterproof options, transparent designs, or vibrant
                  colors, we’ve got you covered.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img src="/img/sticker_print/13.jpg" alt="about image" />
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
              <img src="/img/sticker_print/1.jpg" alt="about image" />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  Why Choose Our Stickers?
                </h2>
              </div>
              <p>
                Our stickers are made with high-quality materials and advanced
                printing techniques to ensure vibrant colors, sharp details, and
                long-lasting durability. Whether you need stickers for branding,
                promotions, or personal use, we offer customizable designs to
                create the perfect sticker for your needs. Our waterproof and
                weather-resistant stickers are built to last, even in tough
                conditions, making them ideal for outdoor use or products
                exposed to moisture. With competitive prices and no minimum
                order quantity for many products, our stickers are accessible
                for everyone. We also provide quick turnaround times, ensuring
                your stickers are printed and delivered promptly without
                compromising on quality.
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
                  Get Your Stickers Printed Today!
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Don’t wait to make an impact – get your custom stickers
                  printed today with Tee Print London. Whether you need a small
                  batch for a personal project or a large order for your
                  business, we’ve got you covered. With our advanced printing
                  techniques and attention to detail, we guarantee vibrant,
                  durable, and professional results. Place your order now and
                  experience the best in sticker printing.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img src="/img/sticker_print/10.jpg" alt="about image" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container mt-5">
      <web-DuelCard
        img_left="/img/sticker_print/8.jpg"
        img_right="/img/sticker_print/12.jpg"
        paragraph="We bring your vision to life with creative designs that leave a lasting impression. Your dream is our mission, your satisfaction is our commitment, and delivering excellence is our promise."
      />
    </div>
    <web-questions></web-questions>
  </div>
</template>
