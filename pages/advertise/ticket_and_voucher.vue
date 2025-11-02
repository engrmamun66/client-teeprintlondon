<script setup lang="ts">
import getMeta from "~/seo-meta";
useSeoMeta(getMeta("advertise", "ticket_and_voucher"));
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
          <MultipleImageCardsforticket
            :right="true"
            title="High-Quality Ticket and Voucher Printing"
            :images="[
              '/img/ticket_and_voucher/GreyBlackPurpleMinimalistMusicNightEventTicket.jpg',
              '/img/ticket_and_voucher/YellowRestaurantGiftVoucher.jpg',
              '/img/ticket_and_voucher/OrangeandYellowIllustrativeFoodTruckGiftVoucherA4Landscape.jpg',
            ]"
          >
            Make your events, promotions, or special offers stand out with Tee
            Print London’s premium ticket and voucher printing services. Whether
            you’re organizing a concert, running a retail promotion, or offering
            discounts, our tickets and vouchers are designed to impress. With
            customizable designs, durable materials, and professional finishes,
            we ensure your printed materials are both functional and visually
            appealing. Let us help you create tickets and vouchers that leave a
            lasting impression on your customers.

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
          </MultipleImageCardsforticket>
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
                  Why Choose Tee Print London for Tickets and Vouchers?
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  At Tee Print London, we understand the importance of creating
                  tickets and vouchers that not only look great but also serve
                  their purpose effectively. Our state-of-the-art printing
                  technology ensures vibrant colors, sharp details, and
                  professional finishes. Whether you need event tickets,
                  discount vouchers, or loyalty cards, we offer a wide range of
                  customization options to suit your brand. With fast turnaround
                  times, competitive pricing, and a commitment to quality, we
                  are your trusted partner for all your ticket and voucher
                  printing needs.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img
                src="/img/ticket_and_voucher/BeigeRedBlackIllustrativeBasketballCompetitionTicket.jpg"
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
                src="/img/ticket_and_voucher/WhiteandBlueModernAirplaneBoardingPassTicket.jpg"
                alt="about image"
              />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  Premium Tickets and Vouchers – Designed to Impress
                </h2>
              </div>
              <p>
                Our tickets and vouchers are more than just pieces of paper –
                they are powerful tools to engage your audience and drive
                action. Whether you’re organizing an event, running a promotion,
                or rewarding loyal customers, our designs are tailored to grab
                attention and leave a lasting impression. With options for
                custom shapes, sizes, and finishes, we ensure your tickets and
                vouchers are both functional and visually appealing. Combined
                with fast printing services and high-quality finishes, we make
                it easy to create professional-grade prints that stand out.
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
                  Get Your Tickets and Vouchers Printed Today!
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Don’t wait to make an impact – get your tickets and vouchers
                  printed today with Tee Print London. Our streamlined process
                  ensures quick turnaround times without compromising on
                  quality. Whether you need a small batch for a local event or a
                  large order for a business campaign, we’ve got you covered.
                  With our advanced printing techniques and attention to detail,
                  we guarantee vibrant, durable, and professional results. Place
                  your order now and experience the best in ticket and voucher
                  printing.
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
        img_left="/img/ticket_and_voucher/OrangeandYellowIllustrativeFoodTruckGiftVoucherA4Landscape.jpg"
        img_right="/img/ticket_and_voucher/PinkMinimalistGiftCardVoucherGiftCertificate.jpg"
        paragraph="We bring your vision to life with creative designs that leave a lasting impression. Your dream is our mission, your satisfaction is our commitment, and delivering excellence is our promise."
      />
    </div>
    <web-questions></web-questions>
  </div>
</template>
