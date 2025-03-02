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
            title="High-Quality Business Card Printing"
            :images="[
              '/img/ticket_and_voucher/GreyBlackPurpleMinimalistMusicNightEventTicket.jpg',
              '/img/ticket_and_voucher/YellowRestaurantGiftVoucher.jpg',
              '/img/ticket_and_voucher/OrangeandYellowIllustrativeFoodTruckGiftVoucherA4Landscape.png',
            ]"
          >
            Make a lasting impression with Tee Print London’s premium business card printing services. Whether you’re a professional, entrepreneur, or business owner, our business cards are designed to reflect your brand’s identity. With customizable designs, premium materials, and professional finishes, we ensure your business cards are both functional and visually stunning. Let us help you create business cards that leave a lasting impression on your clients and partners.

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
                <h2 class="section-heading-title-big">Why Choose Tee Print London for Business Cards?</h2>
              </div>
              <div class="aboutus-list">
                <p>
                  At Tee Print London, we understand the importance of creating business cards that not only look great but also serve their purpose effectively. Our state-of-the-art printing technology ensures vibrant colors, sharp details, and professional finishes. Whether you need classic, modern, or creative designs, we offer a wide range of customization options to suit your brand. With fast turnaround times, competitive pricing, and a commitment to quality, we are your trusted partner for all your business card printing needs.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img src="/img/ticket_and_voucher/BeigeRedBlackIllustrativeBasketballCompetitionTicket.jpg" alt="about image" />
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
              <img src="/img/ticket_and_voucher/WhiteandBlueModernAirplaneBoardingPassTicket.jpg" alt="about image" />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">Premium Business Cards – Designed to Impress</h2>
              </div>
              <p>
                Our business cards are more than just pieces of paper – they are powerful tools to communicate your brand’s identity. Whether you’re networking, attending meetings, or promoting your business, our designs are tailored to grab attention and leave a lasting impression. With options for custom shapes, sizes, and finishes, we ensure your business cards are both functional and visually appealing. Combined with fast printing services and high-quality finishes, we make it easy to create professional-grade business cards that stand out.
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
                <h2 class="section-heading-title-big">Get Your Business Cards Printed Today!</h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Don’t wait to make an impact – get your business cards printed today with Tee Print London. Our streamlined process ensures quick turnaround times without compromising on quality. Whether you need a small batch for personal use or a large order for your team, we’ve got you covered. With our advanced printing techniques and attention to detail, we guarantee vibrant, durable, and professional results. Place your order now and experience the best in business card printing.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img src="/img/ticket_and_voucher/ticket.jpg" alt="about image" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container mt-5">
      <web-DuelCard
        img_left="/img/ticket_and_voucher/OrangeandYellowIllustrativeFoodTruckGiftVoucherA4Landscape.png"
        img_right="/img/ticket_and_voucher/PinkMinimalistGiftCardVoucherGiftCertificate.png"
        paragraph="We bring your vision to life with creative designs that leave a lasting impression. Your dream is our mission, your satisfaction is our commitment, and delivering excellence is our promise."
      />
    </div>
    <web-questions></web-questions>
  </div>
</template>