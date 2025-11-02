<script setup lang="ts">
import getMeta from "~/seo-meta";
useSeoMeta(getMeta("cloth", "sweatshirt"));
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
            title="London's Finest Custom Sweatshirts - Premium Quality Guaranteed"
            :images="[
              '/img/sweatshirt/1.jpg',
              '/img/sweatshirt/4.jpg',
              '/img/sweatshirt/3.jpg',
            ]"
          >
            Experience the TeePrint London difference with our premium custom
            sweatshirts, crafted with meticulous attention to detail. We use
            only the finest 100% premium cotton blends and industry-leading
            printing techniques to create sweatshirts that look exceptional and
            stand the test of time. Every garment undergoes our rigorous
            12-point quality inspection before leaving our London workshop.
            Whether you're ordering for your business, team, or personal
            wardrobe, you'll enjoy vibrant, long-lasting prints on sweatshirts
            that maintain their shape, color, and softness wash after wash.

            <template #link>
              <nuxt-link
                :to="{ name: 'quote' }"
                class="teeprint-button teeprint-theme-btn zoomInOut mt-5"
              >
                Design Your Premium Sweatshirt
                <i class="la la-arrow-right ml-1"></i>
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
                  Why London Chooses TeePrint for Premium Sweatshirts
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  At TeePrint London, we've redefined quality in custom
                  sweatshirt printing. Our secret lies in three uncompromising
                  principles: superior fabrics, precision printing, and
                  craftsmanship. We source our sweatshirts from ethical
                  suppliers, using only heavyweight 300gsm cotton blends that
                  offer exceptional durability without sacrificing comfort. Our
                  proprietary printing process ensures colors remain vibrant
                  through 50+ washes, with no cracking or peeling. Each design
                  is individually inspected for perfect registration and color
                  matching. Unlike mass-produced alternatives, every TeePrint
                  sweatshirt receives personal attention from our skilled
                  London-based artisans. From the precision of our stitching to
                  the quality of our inks, we obsess over every detail so you
                  receive a product that exceeds expectations.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img
                src="/img/sweatshirt/2.jpg"
                alt="Premium quality custom sweatshirt from TeePrint London"
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
                src="/img/sweatshirt/5.jpg"
                alt="Fast same-day sweatshirt printing in London"
              />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  London's Fastest Quality Sweatshirt Printing
                </h2>
              </div>
              <p>
                When you need premium custom sweatshirts fast, TeePrint London
                delivers without compromise. Our express same-day service
                combines speed with our signature quality standards. We achieve
                this through our vertically integrated London facility, where we
                control every step from fabric selection to final packaging. Our
                advanced Kornit DTG printers produce museum-quality prints in
                hours, not days, using eco-friendly inks that are softer and
                more durable than conventional methods. For bulk orders, our
                automated screen printing line ensures perfect consistency
                across hundreds of garments. Every sweatshirt undergoes our
                quality triage: pre-treatment inspection, print verification,
                and final curing check. This meticulous process means your
                urgent order receives the same attention to detail as our
                standard production. Whether you need 1 or 1000 sweatshirts, we
                guarantee premium results delivered with London efficiency.
              </p>
              <nuxt-link
                :to="{ name: 'quote' }"
                class="teeprint-button teeprint-theme-btn zoomInOut"
                href="#"
              >
                Get Express Quote <i class="la la-arrow-right ml-1"></i>
              </nuxt-link>
              <nuxt-link :to="{ name: 'shop' }" style="background-color: #eead04" class="teeprint-button teeprint-theme-btn zoomInOut mt-5 mx-4" > Buy Now <i class="la la-arrow-right ml-1"></i> </nuxt-link>
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
                  The TeePrint London Quality Promise
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  When you purchase from TeePrint London, you're investing in
                  more than just a sweatshirt - you're getting our ironclad
                  quality guarantee. We stand behind every garment with a 100%
                  satisfaction promise. Our sweatshirts feature reinforced
                  double-stitched seams, premium ribbed cuffs that retain their
                  shape, and industry-leading colorfast printing. We use only
                  OEKO-TEX certified fabrics and eco-solvent inks that are
                  kinder to your skin and the environment. Each order includes
                  complimentary quality enhancements like pre-shrunk fabrics and
                  color-lock treatment. Our London-based customer service team
                  provides expert guidance from design consultation to aftercare
                  advice. Whether you're a fashion brand needing
                  boutique-quality merchandise or a corporation requiring
                  premium staff uniforms, we deliver sweatshirts that perform as
                  impressively as they look. Discover why London's most
                  discerning clients trust us for their custom apparel needs.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img
                src="/img/sweatshirt/6.jpg"
                alt="TeePrint London quality sweatshirt guarantee"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container mt-5">
      <web-DuelCard
        img_left="/img/sweatshirt/7.jpg"
        img_right="/img/sweatshirt/8.jpg"
        paragraph="At TeePrint London, we don't just print sweatshirts - we craft wearable prestige. Our obsession with quality transforms your designs into heirloom-quality apparel that stands apart from mass-produced alternatives. From the weight of the fabric to the precision of every stitch, experience the difference that true craftsmanship makes."
      />
    </div>
    <web-questions></web-questions>
  </div>
</template>
