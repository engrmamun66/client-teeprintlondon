<script setup lang="ts">
import getMeta from "~/seo-meta"; 
useSeoMeta(getMeta('Design_Service', 'custom_apparel'))
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
            title="Your Vision, Our Creation"
            :images="[
              '/img/Home/WhatsApp Image 2025-01-03 at 22.03.42_74ce6356.jpg',
              '/img/Home/44.jpg',
              '/img/Hoodie/Leonardo_Phoenix_10_A_young_man_likely_in_his_early_twenties_w_0.jpg',
            ]"
          >
            At Tee Print London, we transform your creative concepts into
            premium wearable art across our complete range of products. Our
            advanced AI design system specializes in creating stunning custom
            apparel including cotton t-shirts, football team uniforms,
            promotional shirts, and school merchandise. Whether you need
            breathable activewear for sports teams, professional dress shirts
            for corporate events, or cozy fleeces and knits for winter
            promotions, our technology ensures your designs look exceptional on
            every fabric type. We handle everything from simple tote bag prints
            to complex multi-color hoodie designs, maintaining the highest
            quality across all products including caps, aprons, and sweat
            shirts. Your imagination sets the boundaries - we provide the
            expertise to make it reality.

            <template #link>
              <nuxt-link
                :to="{ name: 'quote' }"
                class="teeprint-button teeprint-theme-btn zoomInOut mt-5"
              >
                Start Your Design Journey <i class="la la-arrow-right ml-1"></i>
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
                  Comprehensive Custom Apparel Solutions
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Our design team specializes in creating custom solutions for
                  every product in our catalog. For schools and universities, we
                  produce durable, comfortable uniform shirts that withstand
                  daily wear while maintaining vibrant colors. Sports teams
                  benefit from our moisture-wicking activewear printing that
                  keeps players cool during intense matches. Businesses love our
                  premium promotional t-shirts and tote bags that make lasting
                  impressions at corporate events. We understand that different
                  garments require different approaches - that's why our cotton
                  t-shirt printing uses specialized techniques to preserve
                  fabric softness, while our hoodie printing ensures deep, rich
                  colors that don't crack or fade. From the structured look of
                  dress shirts to the casual appeal of sweat shirts, we adapt
                  our printing methods to perfectly suit each product's unique
                  characteristics.
                </p>
                <p>
                  Our AI design memory system maintains consistency across your
                  entire apparel range, whether you're ordering matching sets of
                  aprons and caps for your restaurant staff or coordinating
                  fleeces and knits for your winter promotion. This technology
                  remembers your brand colors, logos, and design preferences,
                  automatically applying them to new products while suggesting
                  creative enhancements. The result is a cohesive branded look
                  across all your merchandise, from the simplest promotional
                  t-shirt to the most complex football team uniform.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img
                src="/img/cap/Leonardo_Phoenix_10_A_person_likely_in_their_midtwenties_to_ea_3.jpg"
                alt="design process image"
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
                  <span class="line-decoration"></span>Product-Specific
                </h4>
                <h2 class="section-heading-title-big">Expertise</h2>
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
                src="/img/poster_print/8.jpg"
                alt="design technology image"
              />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big mt-5">
                  Tailored Printing Techniques
                </h2>
              </div>
              <p>
                Each product in our range receives specialized treatment to
                ensure optimal results. Our cotton t-shirt printing uses
                ultra-soft inks that move with the fabric, perfect for everyday
                comfort. For promotional shirts that need to make an impact, we
                employ high-density prints that maintain their vibrancy through
                countless wears and washes. Sports shirt printing utilizes
                advanced moisture-management technology to keep athletes dry
                while displaying crisp, durable team logos. When working with
                fleeces and knits, we use specialized processes that prevent the
                fabric from losing its plush texture.
              </p>
              <p>
                University and school merchandise benefits from our
                scratch-resistant printing that withstands years of student use.
                Our apron printing uses industrial-grade inks that resist heat,
                stains, and frequent washing - essential for kitchen staff and
                hospitality workers. For corporate dress shirts, we've developed
                refined printing methods that maintain the professional
                appearance of the garment while ensuring designs don't
                compromise the shirt's elegant drape. Even our caps and tote
                bags receive special attention, with printing techniques adapted
                to their unique textures and shapes.
              </p>
              <nuxt-link
                :to="{ name: 'quote' }"
                class="teeprint-button teeprint-theme-btn zoomInOut"
                href="#"
              >
                Explore Our Techniques <i class="la la-arrow-right ml-1"></i>
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
                  From Concept to Finished Product
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Our complete service covers every step of creating your custom
                  apparel. It begins with understanding your needs - whether
                  you're outfitting a football team requiring moisture-wicking
                  sports shirts, a university needing durable school t-shirts,
                  or a restaurant looking for stain-resistant apron printing.
                  Our designers then create artwork optimized for your specific
                  products, considering how designs will appear on different
                  fabrics and garment types. For promotional shirt printing, we
                  might suggest bold, eye-catching graphics, while corporate
                  dress shirts may require more subtle, elegant treatments.
                </p>
                <p>
                  The production process varies by product - cotton t-shirts
                  receive different treatment than performance activewear, and
                  hoodie printing demands different techniques than cap
                  embroidery. Yet all undergo the same rigorous quality checks
                  before delivery. Whether you're ordering promotional t-shirts
                  for a one-time event or establishing an ongoing supply of team
                  uniforms, we maintain consistent quality across all items. Our
                  AI system remembers your preferences, making reorders and
                  product expansions effortless while maintaining your brand
                  identity across all apparel types.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img
                src="/img/sweatshirt/6.jpg"
                alt="design service image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container mt-5">
      <web-DuelCard
        img_left="/img/Polo_T_shirt/6.jpg"
        img_right="/img/Fleeces_and_Knits/Leonardo_Phoenix_10_a_mesmerizing_and_vibrant_cinematic_photog_0.jpg"
        paragraph="At Tee Print London, we combine artistic vision with technical expertise across our entire product range. From the softest cotton t-shirt to the most durable apron, from school uniforms to corporate dress shirts, each garment receives our full attention. We don't just print designs - we adapt them perfectly to each product's unique characteristics, ensuring your vision looks its best no matter what form it takes."
      />
    </div>
    <web-questions></web-questions>
  </div>
</template>
