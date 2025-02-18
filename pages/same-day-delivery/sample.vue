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
          <div class="col-md-12">
            <div class="section-main-heading text-center">
              <h4 class="section-heading-title-small">
                <span class="line-decoration"></span> Same Day Delivery
              </h4>
              <h2 class="section-heading-title-big">
                Revolutionizes Printing Services in London
              </h2>
            </div>
          </div>
        </div>

        <div class="row">
          <web-postCard
            :right="true"
            title="Order Any Quantity You Need"
            image-url="/img/Home/Leonardo_Phoenix_10_A_highquality_crisp_image_of_a_crisp_white_1.jpg"
          >
            We understand that every customer has unique needs, which is why we
            proudly offer no minimum order quantity on all our custom t-shirt
            printing services. Whether you need a single t-shirt for a personal
            project or hundreds for a corporate event, we’ve got you covered.
            Our flexible printing service allows you to order exactly what you
            need, without restrictions. From small orders to bulk printing, our
            high-quality, affordable t-shirt print ensures every order meets
            your exact specifications. With the added benefit of same-day
            delivery available in London, you can count on us for fast, reliable
            service, regardless of order size. Perfect for individuals,
            businesses, or events.

            <br />

            <nuxt-link
              :to="{ name: 'quote' }"
              class="teeprint-button teeprint-theme-btn zoomInOut mt-5"
              data-v-inspector="pages/index.vue:277:25"
            >
              Get A Free Quote <i class="la la-arrow-right ml-1"></i
            ></nuxt-link>
          </web-postCard>
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
          <web-questions></web-questions>
        </div>
      </div>
    </section>
  </div>
</template>
