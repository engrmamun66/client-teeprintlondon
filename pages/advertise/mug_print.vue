<script setup lang="ts">
import getMeta from "~/seo-meta";
useSeoMeta(getMeta("advertise", "mug_print"));
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
    <!-- New Section: Mug Products -->
    <section class="teeprint-makes-section">
      <div class="container">
        <div class="row">
          <MultipleImageCard
            :right="true"
            title="Custom Mugs for Every Occasion"
            :images="[
              '/img/mug_print/2.jpg',
              '/img/mug_print/1.jpg',
              '/img/mug_print/6.jpg',
            ]"
          >
            At Tee Print London, we specialize in creating high-quality custom
            mugs that are perfect for branding, gifts, or personal use. Whether
            you’re looking to add a creative touch to your morning coffee,
            promote your business, or create a memorable gift, our wide range of
            mug options has you covered. From vibrant full-color prints to
            elegant minimalist designs, we offer something for every need.

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

    <section class="teeprint-about-section">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  Explore Our Mug Collection
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Our mug collection is designed to meet a variety of needs,
                  from corporate branding to personal projects. We offer a wide
                  range of mug types to suit every purpose. Ceramic mugs are
                  perfect for everyday use, offering durability and a classic
                  look. Travel mugs are great for on-the-go coffee lovers,
                  featuring spill-proof lids and insulation to keep drinks hot
                  or cold. For a touch of elegance, our glass mugs are ideal for
                  showcasing colorful designs or layered beverages.
                </p>
                <p>
                  With customizable designs, shapes, and sizes, our mugs are
                  perfect for creating unique branding or personalized gifts.
                  Whether you’re looking for full-color prints, minimalist text,
                  or photo mugs, we’ve got you covered.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img src="/img/mug_print/9.jpg" alt="about image" />
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
              <img src="/img/mug_print/10.jpg" alt="about image" />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">Why Choose Our Mugs?</h2>
              </div>
              <p>
                Our mugs are made with high-quality materials and advanced
                printing techniques to ensure vibrant colors, sharp details, and
                long-lasting durability. Whether you need mugs for branding,
                promotions, or personal use, we offer customizable designs to
                create the perfect mug for your needs. With competitive prices
                and no minimum order quantity for many products, our mugs are
                accessible for everyone. We also provide quick turnaround times,
                ensuring your mugs are printed and delivered promptly without
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
                  Get Your Mugs Printed Today!
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Don’t wait to make an impact – get your custom mugs printed
                  today with Tee Print London. Whether you need a small batch
                  for a personal project or a large order for your business,
                  we’ve got you covered. With our advanced printing techniques
                  and attention to detail, we guarantee vibrant, durable, and
                  professional results. Place your order now and experience the
                  best in mug printing.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img src="/img/mug_print/1.jpg" alt="about image" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container mt-5">
      <web-DuelCard
        img_left="/img/mug_print/8.jpg"
        img_right="/img/mug_print/3.jpg"
        paragraph="We bring your vision to life with creative designs that leave a lasting impression. Your dream is our mission, your satisfaction is our commitment, and delivering excellence is our promise."
      />
    </div>
    <web-questions></web-questions>
  </div>
</template>
