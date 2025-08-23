<script setup lang="ts">
import getMeta from "~/seo-meta";
useSeoMeta(getMeta("cloth", "tote_bag"));
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
            title="Tote Bag Printing in London"
            :images="[
              '/img/Tote_bag/Leonardo_Phoenix_10_a_vibrant_and_sturdy_tote_bag_with_a_bold_0.jpg',
              '/img/Tote_bag/Leonardo_Phoenix_10_a_worn_natural_canvas_tote_bag_with_a_rela_0.jpg',
              '/img/Tote_bag/Leonardo_Phoenix_10_a_vibrant_and_casual_tote_bag_with_a_playf_0.jpg',
            ]"
          >
            Print custom tote bags for your businesses, events, and individual
            use. We simplify the process, help you pick the right design, and
            get your order ready on time. Each bag offers sharp results and a
            personal touch. Friendly service, no minimum order rule. Get your
            personalised tote bag in London today to carry your unique message.

            <template #link>
              <nuxt-link
                :to="{ name: 'quote' }"
                class="teeprint-button teeprint-theme-btn zoomInOut mt-5"
              >
                Print Now <i class="la la-arrow-right ml-1"></i>
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
                  Same Day Tote Bag Printing in London
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  For a last-minute event, urgent promo, or a sudden change in
                  plans, TeePrintLondon is the team that can help. Need custom
                  tote bags in hours or the first hours tomorrow? We are ready
                  to print them quickly without compromising the quality.
                </p>
                <p>
                  Our same-day tote bag printing service gets your order done
                  fast, without the stress. Just send us your design, approve
                  the proof, and we'll handle the rest. One bag to one hundred,
                  it does not matter to us. We deliver sharp and clean prints
                  that are ready to go the very same day.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img
                src="/img/Tote_bag/il_1140xN.1899584604_j7fg.jpg"
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
                  <span class="line-decoration"></span>Why People
                </h4>
                <h2 class="section-heading-title-big">Love Printing With Us</h2>
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
                src="/img/Tote_bag/WhatsApp Image 2025-04-18 at 17.58.14_69003ea2_magicstudio_9bj1l4lafn.jpg"
                alt="about image"
              />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  Premium Designs, Exceptional Craftsmanship
                </h2>
              </div>
              <p>
                Superior materials and advanced printing are the signature of
                our craftsmanship. We craft tote bags that combine style with
                durability. Canvas or another style, our high-quality tote bag
                printing ensures your design won't fade or peel, even after lots
                of use!
              </p>
              <p>
                We pay close attention to every detail from the design to the
                finishing touches. You get a product that always makes an
                impression. When you want tote bags that combine exceptional
                design with outstanding craftsmanship, just let us know!
              </p>
              <nuxt-link
                :to="{ name: 'quote' }"
                class="teeprint-button teeprint-theme-btn zoomInOut"
                href="#"
              >
                Start Design <i class="la la-arrow-right ml-1"></i>
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
                  Custom And Personalised Tote Bags For Any Occasion
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Our personalised tote bags' designs match your style, message,
                  and event. Is the bag for a birthday, wedding, market stall,
                  or business giveaway? Our team helps you bring your idea to
                  life.
                </p>
                <p>
                  You can choose your colours, add logos, names, or others, and
                  make your tote bag truly yours. Each order brings something
                  different that keeps us inspired. Be confident with
                  high-quality prints and careful attention to detail. Your
                  tote, your way, every time.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  Don't Just Carry Things, Carry Your Message
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  A tote bag can be more than just something to hold your stuff.
                  It's a way to show who you are. With the right design, your
                  bag can speak for your brand, event, or big idea.
                </p>
                <p>
                  We turn simple bags into bold statements. Fun artwork for
                  company logos, every detail is printed with care and quality.
                  Your unique tote bag can do the talking. Let your message
                  travel far on a bag made just for you.
                </p>
              </div>
            </div>
          </div>
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
                  How to Order Your Tote Bag
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Ordering your custom tote bags with us is simple and quick.
                  Just follow these steps to get your personalised tote bags
                  printed and ready to use in hours:
                </p>
                <ul class="dotted-list">
                  <li>
                    <span class="dot"></span>Choose a tote bag style and size
                    that you prefer
                  </li>
                  <li>
                    <span class="dot"></span>Upload your design or create one
                    with our drag-and-drop system
                  </li>
                  <li>
                    <span class="dot"></span>Review and approve the digital
                    proof we send you
                  </li>
                  <li>
                    <span class="dot"></span>Select your quantity, including
                    options for bulk tote bag printing
                  </li>
                  <li>
                    <span class="dot"></span>Choose a delivery option or
                    same-day pickup in London
                  </li>
                  <li>
                    <span class="dot"></span>Receive your personalised tote bags
                    and carry your creativity!
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img
                src="/img/Tote_bag/WhatsApp Image 2025-04-18 at 17.57.44_b1d34e77_magicstudio_obivmghbf3.jpg"
                alt="about image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="teeprint-about-section">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="teeprint-about-content text-center">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  Why Choose Us for Tote Bag Printing in London?
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  TeePrintLondon believes custom bags shouldn't cost a fortune.
                  We offer competitive prices for every budget. You will always
                  get affordable and reliable tote bag printing at a cheap price
                  without sacrificing quality.
                </p>
                <p>
                  We offer high-quality prints and durable custom bags for
                  businesses, events, and personal use because it's more than
                  just a bag! With fast delivery and great customer support, we
                  have made the order process quick and easy!
                </p>
                <p>
                  If you want value, quality, and speed all in one place, we're
                  the best choice for tote bag printing in London.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="teeprint-makes-section">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <div class="section-main-heading">
              <h2 class="section-heading-title-big">
                Request a Quote or Place an Order
              </h2>
            </div>
            <p class="mb-5">
              Ready to get started? Our print-on-demand tote bags are
              affordable, made with care, and delivered fast! Send us your idea
              now, and we'll handle the rest. Place your order now and receive
              your unique tote bags in hours.
            </p>
            <nuxt-link
              :to="{ name: 'quote' }"
              class="teeprint-button teeprint-theme-btn zoomInOut"
            >
              Start Design <i class="la la-arrow-right ml-1"></i>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <div class="container mt-5">
      <web-DuelCard
        img_left="/img/Tote_bag/Leonardo_Phoenix_10_a_worn_natural_canvas_tote_bag_with_a_rela_2.jpg"
        img_right="/img/Tote_bag/WhatsApp Image 2025-04-18 at 17.59.00_22c425a1_magicstudio_q2lo0rivhdp.jpg"
        paragraph="We bring your vision to life with creative designs that leave a lasting impression. Your dream is our mission, your satisfaction is our commitment, and delivering excellence is our promise."
      />
    </div>
    <web-questions name="totebag" />
  </div>
</template>

<style scoped>
.dotted-list {
  list-style-type: none;
  padding-left: 0;
}

.dotted-list li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 8px;
}

.dot {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  background-color: currentColor;
  border-radius: 50%;
}
</style>
