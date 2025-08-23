<script setup lang="ts">
import getMeta from "~/seo-meta";
useSeoMeta(getMeta("same_day_pages", "shirt"));

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
            title="Same Day T-Shirt Printing London, UK"
            :images="[
              '/img/Cotton_T_shirt/Leonardo_Phoenix_10_A_fit_middleaged_man_with_short_dark_hair_0.jpg',
              '/img/Football_team_t_shirt/6.jpg',
              '/img/Cotton_T_shirt/Leonardo_Phoenix_10_A_stylish_man_in_his_mid30s_with_a_strong_1.jpg',
            ]"
          >
            When you need tees printed and delivered fast, we are your best
            option for T-shirt printing in London, UK. No need to wait days to
            get your custom t-shirt. Enjoy our express t-shirt printing to get
            yours in hours. You get high-quality and quick service together.

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
                  Premium Materials and Advanced Printing Technology
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Gorgeous design on t-shirts is not everything. The quality of
                  fabrics also matters. We choose soft and long-lasting cotton
                  fabric for printing that looks and feels excellent. Clarity of
                  print is a big issue for t-shirt lovers. We ensure quality
                  t-shirt printing in London using the latest and advanced
                  machinery. Enjoy sharp and bright colors always!
                  TeePrintLondon is proud of the t-shirt materials and the
                  quality of production. You can wash your tee and stay
                  confident that the print remains the same.
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
                  src="https://res.cloudinary.com/dyfnpakfq/video/upload/v1740854271/8ce45d1c-1418-4b67-9a72-22a87dcd1d58_videomerged_online-video-cutter.com_exzym9.mp4"
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
                  <span class="line-decoration"></span>Feedback from
                </h4>
                <h2 class="section-heading-title-big">Happy Customers</h2>
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
              <img src="/img/Home/AHIGH.jpg" alt="about iamge" />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  24-Hour T-Shirt Printing in London
                </h2>
              </div>
              <p>
                Get your t-shirt before the event begins! Did you forget to
                order on time? This is where we emphasize. Our same-day option
                ensures the t-shirt's quick delivery. Also, note that fast work
                doesn't mean ruining the quality. We approve and deliver when
                your t-shirt matches all our quality standards. No minimum
                order, affordable for all. No force for a bulk order. Order as
                much as you wish, even one with no extra cost. Our custom
                t-shirt print service is open to all. If you need a hundred
                pieces for a special event or your team, we can confidently
                print and deliver. Need one piece for personal use? You are
                still welcome.
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
      <SameDay />
    </div>

    <section class="teeprint-about-section">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  Custom T-Shirt Printing for Every Occasion
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  We help people, groups, and businesses by offering their
                  desired t-shirts. No matter what your requirements are, we can
                  print them! We are a top name for custom t-shirt printing in
                  London for branding, events, fun, and more. Simply choose a
                  design and get it printed on your t-shirt. Design your
                  personalized t-shirt with ease. Do you have a unique design
                  idea? Let's turn it into a great-looking t-shirt. Our digital
                  t-shirt printing in London encourages your creativity and
                  allows for personalized design. You can simply design it with
                  no professional skills. Choose the color, pictures, and text
                  you want on the tee. That's it!
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img src="/img/Home/personalized-t-shirt.jpg" alt="about iamge" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container mt-5">
      <web-DuelCard
        img_left="/img/quote-page-card-image-1.jpeg"
        img_right="/img/quote-page-card-image-2.jpeg"
        paragraph="We bring your vision to life with creative designs that leave a lasting impression. Your dream is our mission, your satisfaction is our commitment, and delivering excellence is our promise."
      />
    </div>
    <web-questions name="tshirt" />
  </div>
</template>
