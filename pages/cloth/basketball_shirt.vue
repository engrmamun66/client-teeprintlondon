<script setup lang="ts">
import getMeta from "~/seo-meta";
useSeoMeta(getMeta("cloth", "basketball_shirt"));
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
            title="Premium Quality Basketball Team Tank"
            :images="[
              '/img/Basket_ball/3.jpg',
              '/img/Basket_ball/5.jpg',
              '/img/Basket_ball/6.jpg',
            ]"
          >
            At Tee Print London, we specialize in delivering **premium-quality
            Basketball Team Tank** that combine style, durability, and comfort.
            Whether you're outfitting a basketball team, creating uniforms for
            players, or designing Tank for a sports event, we provide vibrant,
            long-lasting prints on high-quality fabrics. Our advanced printing
            techniques ensure sharp details and rich colors that won’t fade over
            time. With fast turnaround times and competitive pricing, we make
            customization effortless and affordable. Choose Tee Print London for
            stylish, durable, and uniquely crafted Basketball Team Tank that
            make a statement!

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
                  Why Choose Tee Print London for Your Basketball Team Tank?
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Tee Print London is your trusted partner for **high-quality
                  Basketball Team Tank**. We use only the finest materials and
                  cutting-edge technology to bring your ideas to life. Our
                  state-of-the-art printing techniques, including
                  Direct-to-Garment (DTG), screen printing, and vinyl printing,
                  ensure your designs are vibrant, sharp, and built to last.
                  With unbeatable customer service and a commitment to
                  excellence, we make it easy to create custom Basketball Team
                  Tank that stand out. Whether you need a single shirt or a bulk
                  order, Tee Print London delivers premium quality every time.
                  **Purchase from us** and experience the difference that
                  quality and professionalism make!
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
                  src="https://res.cloudinary.com/dyfnpakfq/video/upload/v1741552243/94c86413-2dca-4fa7-9d0c-e7b241bd6c03_video_online-video-cutter.com_rl2lir.mp4"
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
              <img src="/img/Basket_ball/9.jpg" alt="about image" />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  High-Quality Basketball Team Tank You Can Trust
                </h2>
              </div>
              <p>
                When it comes to custom Basketball Team Tank, **quality
                matters**. At Tee Print London, we specialize in creating
                durable, stylish, and comfortable Tank that meet your exact
                needs. Our expert team uses advanced printing methods to ensure
                your designs are vibrant, precise, and long-lasting. From
                intricate logos to bold graphics, we handle every detail with
                care, ensuring your Basketball Team Tank look great and perform
                even better. Whether you need a single shirt or a bulk order,
                Tee Print London is dedicated to delivering exceptional results
                every time. **Purchase from us** and experience the perfect
                blend of quality, comfort, and style!
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
                  Get Your Custom Basketball Team Tank Printed Today!
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Why wait days or even weeks for your custom Basketball Team
                  Tank when you can have them printed today? At Tee Print
                  London, we offer same-day printing to ensure you get your
                  custom designs exactly when you need them. Whether it’s for a
                  basketball team, sports event, or personal use, we provide a
                  seamless and hassle-free printing experience with top-notch
                  results. Our process is designed for speed and
                  convenience—simply select your shirt, upload your design, and
                  let us handle the rest. Using advanced printing techniques,
                  including Direct-to-Garment (DTG), screen printing, and vinyl
                  printing, we guarantee sharp, vibrant, and long-lasting prints
                  that won’t fade after just a few washes. We understand the
                  urgency of last-minute orders, which is why our same-day
                  printing service is tailored to meet your deadlines without
                  compromising on quality. Whether you need a single shirt or a
                  bulk order, we ensure every piece is printed with precision,
                  durability, and style. **Purchase from Tee Print London** and
                  get your custom Basketball Team Tank printed on the same day
                  with professional service and unmatched quality.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img src="/img/Basket_ball/4.jpg" alt="about image" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container mt-5">
      <web-DuelCard
        img_left="/img/Basket_ball/8.jpg"
        img_right="/img/Basket_ball/7.jpg"
        paragraph="We bring your vision to life with creative designs that leave a lasting impression. Your dream is our mission, your satisfaction is our commitment, and delivering excellence is our promise."
      />
    </div>
    <web-questions></web-questions>
  </div>
</template>
