<script setup lang="ts">
import getMeta from "~/seo-meta"; 
useSeoMeta(getMeta('same_day_pages', 'football_shirt'))  

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
    <!-- Football Team T-shirt Section -->
    <section class="teeprint-makes-section">
      <div class="container">
        <div class="row">
          <MultipleImageCard
            :right="true"
            title="Same-Day Custom Football Team T-shirt"
            :images="[
              '/img/Football_team_t_shirt/7.jpg',
              '/img/Football_team_t_shirt/5.jpg',
              '/img/Football_team_t_shirt/6.jpg',
            ]"
          >
            Need custom football team shirts in a hurry? Tee Print London offers
            **same-day printing services** to meet your urgent needs. Whether
            it’s for team uniforms, sports events, or personal use, we deliver
            vibrant, high-quality football team shirts on the same day you place
            your order. Our streamlined process ensures fast, reliable results
            without compromising on quality. Serving clients across London and
            the UK, we’re your trusted partner for premium, same-day custom
            football team shirts.

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

    <!-- Why Choose Tee Print London for Football Team T-shirt -->
    <section class="teeprint-about-section">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  Why Choose Tee Print London for Same-Day Football Team T-shirt?
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  At Tee Print London, we specialize in **same-day custom
                  football team shirt printing** that combines speed, quality,
                  and performance. Whether you need shirts for team uniforms,
                  sports events, or personal use, we use advanced printing
                  techniques like Direct-to-Garment (DTG), screen printing, and
                  vinyl printing to deliver vibrant, long-lasting designs. Our
                  state-of-the-art technology and expert team ensure your
                  shirts are printed with precision and care, even on tight
                  deadlines. With **same-day delivery** options, we make it
                  easy to get your custom shirts when you need them most. Trust
                  Tee Print London for fast, professional, and high-quality
                  printing services.
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
                  src="https://res.cloudinary.com/dyfnpakfq/video/upload/v1741554588/8ce45d1c-1418-4b67-9a72-22a87dcd1d58_video_online-video-cutter.com_tocj4n.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
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

    <!-- High-Quality Football Team T-shirt Section -->
    <section class="teeprint-homewhychoose-section">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-img">
              <img src="/img/Football_team_t_shirt/1.jpg" alt="about image" />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big mt-5">
                  Same-Day Football Team Shirt Printing – Fast, Reliable, and
                  High-Quality
                </h2>
              </div>
              <p>
                When you need custom football team shirts in a hurry, Tee Print
                London is here to help. Our **same-day printing service**
                ensures you get professionally printed shirts on the very same
                day you place your order. Whether it’s for a team event,
                tournament, or personal use, we deliver premium-quality prints
                with a fast turnaround. Using state-of-the-art printing
                techniques like Direct-to-Garment (DTG), screen printing, and
                vinyl printing, we produce vibrant, long-lasting designs that
                withstand daily wear and multiple washes. No matter the
                complexity of your design—logos, slogans, graphics, or
                personalized text—we bring your vision to life with precision
                and care. Our commitment to quality means that speed never
                compromises excellence. Whether you need a single shirt or a
                bulk order, our team is dedicated to providing the best
                **same-day printing service** in London and across the UK. Why
                wait for days? Get your custom football team shirts printed
                today with Tee Print London and enjoy fast, reliable, and
                high-quality results.
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

    <!-- Order Your Custom Football Team T-shirt Section -->
    <section class="teeprint-about-section">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  Get Your Custom Football Team T-shirt Printed Today!
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Why wait days or even weeks for your custom football team
                  shirts when you can have them printed today? At Tee Print
                  London, we offer **same-day printing services** to ensure you
                  get your custom designs exactly when you need them. Whether
                  it’s for a football team, sports event, or personal use, we
                  provide a seamless and hassle-free printing experience with
                  top-notch results. Our process is designed for speed and
                  convenience—simply select your shirt, upload your design, and
                  let us handle the rest. Using advanced printing techniques, we
                  guarantee sharp, vibrant, and long-lasting prints that won’t
                  fade after daily use. We understand the urgency of last-minute
                  orders, which is why our **same-day printing service** is
                  tailored to meet your deadlines without compromising on
                  quality. Whether you need a single piece or a bulk order, we
                  ensure every item is printed with precision, durability, and
                  style. Don’t let long wait times slow you down—place your
                  order now with Tee Print London and get your custom football
                  team shirts printed on the same day with professional service
                  and unmatched quality.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img src="/img/Football_team_t_shirt/9.jpg" alt="about image" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Duel Card Section -->
    <div class="container mt-5">
      <web-DuelCard
        img_left="/img/Football_team_t_shirt/10.jpg"
        img_right="/img/Football_team_t_shirt/4.jpg"
        paragraph="At Tee Print London, we bring your vision to life with creative designs that leave a lasting impression. Your dream is our mission, your satisfaction is our commitment, and delivering excellence is our promise."
      />
    </div>

    <!-- FAQ Section -->
    <web-questions></web-questions>
  </div>
</template>