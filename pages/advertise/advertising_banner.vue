<script lang="ts">
definePageMeta({
  titleTemplate: "% :: details",
  layout: "web",
});

function addToCart() {
  let imgElement = document.querySelector(".teeprint-product-view-image img") as HTMLElement;
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
            title="High-Quality Banner Printing"
            :images="[
              '/img/business_card/675.jpg',
              '/img/business_card/1213.jpg',
            ]"
          >
            Make a bold statement with Tee Print London’s premium banner printing services. Whether you need Advertising Banners, PVC Banners, Vinyl Banners, or Roller Banners, we deliver high-quality prints that grab attention and leave a lasting impression. Perfect for events, promotions, trade shows, or storefront displays, our banners are designed to stand out with vibrant colors, sharp details, and durable materials. Let us help you create banners that effectively communicate your message and enhance your brand visibility.

            <template #link>
              <nuxt-link :to="{ name: 'quote' }" class="teeprint-button teeprint-theme-btn zoomInOut mt-5">
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
                <h2 class="section-heading-title-big">Why Choose Tee Print London for Banner Printing?</h2>
              </div>
              <div class="aboutus-list">
                <p>
                  At Tee Print London, we specialize in creating banners that are both visually stunning and highly functional. Our state-of-the-art printing technology ensures vibrant colors, sharp details, and professional finishes. Whether you need Advertising Banners for outdoor promotions, PVC Banners for durability, Vinyl Banners for versatility, or Roller Banners for portability, we offer a wide range of customization options to suit your needs. With fast turnaround times, competitive pricing, and a commitment to quality, we are your trusted partner for all your banner printing needs.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img src="/img/business_card/24148.jpg" alt="about image" />
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
                <h4 class="section-heading-title-small"><span class="line-decoration"></span>What Our</h4>
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
              <img src="/img/business_card/3503566.jpg" alt="about image" />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">Premium Banners – Designed to Impress</h2>
              </div>
              <p>
                Our banners are more than just promotional tools – they are powerful ways to communicate your brand’s message. Whether you’re advertising a sale, promoting an event, or enhancing your storefront, our designs are tailored to grab attention and leave a lasting impression. With options for custom sizes, materials, and finishes, we ensure your banners are both functional and visually appealing. Combined with fast printing services and high-quality finishes, we make it easy to create professional-grade banners that stand out.
              </p>
              <nuxt-link :to="{ name: 'quote' }" class="teeprint-button teeprint-theme-btn zoomInOut">
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
                <h2 class="section-heading-title-big">Get Your Banners Printed Today!</h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Don’t wait to make an impact – get your banners printed today with Tee Print London. Our streamlined process ensures quick turnaround times without compromising on quality. Whether you need a single banner for a local event or a large order for a nationwide campaign, we’ve got you covered. With our advanced printing techniques and attention to detail, we guarantee vibrant, durable, and professional results. Place your order now and experience the best in banner printing.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img src="/img/business_card/5073120.jpg" alt="about image" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container mt-5">
      <web-DuelCard
        img_left="/img/business_card/OJZ24D0.jpg"
        img_right="/img/business_card/123458.jpg"
        paragraph="We bring your vision to life with creative designs that leave a lasting impression. Your dream is our mission, your satisfaction is our commitment, and delivering excellence is our promise."
      />
    </div>
    <web-questions></web-questions>
  </div>
</template>