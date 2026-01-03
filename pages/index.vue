<script setup>
import getMeta from "~/seo-meta";
useSeoMeta(getMeta("root", "home page"));

// ✅ Add Google Tag Manager in <head>
useHead({
  script: [
    {
      innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5CZHG8VR');`,
      type: "text/javascript",
    },
  ],
  __dangerouslyDisableSanitizersByTagID: {
    gtm: ["innerHTML"], // prevent Nuxt from escaping GTM script
  },
});

function reloadPage() {
  // Wait briefly to let the route change, then reload
  setTimeout(() => {
    window.location.reload();
  }, 200);
}

// ✅ Page meta
definePageMeta({
  titleTemplate: "% :: Home",
  name: "home",
  layout: "web",
});

// ✅ Youtube overlay logic
const youtubeIframe = ref(null);
const videoOverlay = ref(null);

onMounted(() => {
  if (!youtubeIframe.value || !videoOverlay.value) {
    console.error("Iframe or overlay element not found!");
    return;
  }

  videoOverlay.value.addEventListener("click", () => {
    youtubeIframe.value.contentWindow.postMessage(
      '{"event":"command","func":"playVideo","args":""}',
      "*"
    );
    videoOverlay.value.style.display = "none";
  });
});
</script>

<template>
  <div>
    <web-slider />
    <ClientOnly>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5CZHG8VR"
          height="0"
          width="0"
          style="display: none; visibility: hidden"
        ></iframe>
      </noscript>
    </ClientOnly>
    <!-- <div>
      <Christmas/>
    </div> -->

    <section class="teeprint-about-section">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  Show Off Your Style With Freedom Of Customization
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  TeePrintLondon believes you know your style best! So, we are
                  happy to give you the freedom to customize your wearables. Get
                  complete control over every detail and customization without a
                  few template limitations. Are you a fan of streetwear, bold,
                  minimalist, clean, retro & vintage, or corporate smart style?
                  We have all the options for different preferences. Let's
                  design, get delivered through same-day printing in London, and
                  wear it to express yourself!
                </p>
              </div>
              <nuxt-link
                :to="{ name: 'quote' }"
                class="teeprint-button teeprint-theme-btn zoomInOut"
                href="/Products-list"
              >
                Get My Design Done <i class="la la-arrow-right ml-1"></i>
              </nuxt-link>
              <nuxt-link
                :to="{ name: 'shop' }"
                class="teeprint-button teeprint-theme-btn zoomInOut mx-4"
                style="background-color: #eead04"
                href="/Products-list"
              >
                Buy Now <i class="la la-arrow-right ml-1"></i>
              </nuxt-link>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img src="/img/Home/44.jpg" alt="about iamge" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <web-trusted /> -->
    <!-- <web-customerFinally></web-customerFinally> -->
    <!-- Youtube section starts -->

    <!-- <section class="teeprint-makes-section">
      <div class="container">
        <h2 class="text-center m-2">Our Printing Environment</h2>
        <div class="video-container">
          <iframe
            ref="youtubeIframe"
            width="100%"
            height="654"
            src="https://www.youtube.com/embed/pN2yLAtMDjg?enablejsapi=1"
            title="Amazing Graphic T-Shirt Mass Production Process. One-stop Clothing Manufacturing Factory"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div ref="videoOverlay" class="video-overlay"></div>
        </div>
      </div>
    </section> -->
    <!-- Youtube section ends -->

    <!-- <section class="teeprint-about-section">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  Our Recent Work
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <Slider />
    <section class="teeprint-makes-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-main-heading text-center">
              <h4 class="section-heading-title-small">
                <span class="line-decoration"></span> How Tee Print
              </h4>
              <h2 class="section-heading-title-big">
                Revolutionizes Printing Services in London
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <web-postCard
            :right="false"
            title="Premium Apparel That Feels And Looks Good"
          >
            We offer custom-made T-shirts in London that look great and feel
            incredible. Each piece is crafted with premium and safe materials,
            like organic cotton. They are soft, breathable, and long-lasting.
            Our T-shirts, polo shirts, hoodies, and activewear are gentle on the
            skin and strong in style. Printing is not the only thing we are
            serious about. We ensure our products make you smile and feel
            confident. Choose the style, fit, and design, we will handle the
            rest. We apply various printing techniques for the best printing
            texture and sharp lines. You won't receive any t-shirts, hoodies,
            polo shirts, or aprons until it is 100% compatible with our quality
            standard.
          </web-postCard>

          <web-postCard
            :right="true"
            title="Any Quantity Available For Individuals, Businesses, Or Events "
            image-url="/img/Home/Leonardo_Phoenix_10_A_highquality_crisp_image_of_a_crisp_white_1.jpg"
          >
            Need one piece or thousands of t-shirts? We are able to design,
            print, and deliver. If you need tees for a birthday, wedding, or
            family trip, we will print a personalized design just for you. For
            brand promotion and business events, our polo shirts, tees, and
            hoodies will look sharp and feel great. Our tee shirt printing in
            London is fast, high-quality, and made for everyone. We are equally
            attentive to each item. The order size does not affect our quality
            of work. We treat every job with care and emotion.
          </web-postCard>
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
                  Experience Your Creativity In Reality
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Let's turn your thoughts into something real. Send your design
                  or let us help create an exclusive one from scratch. Bring
                  your imagination to life now. We print high-quality
                  personalized t-shirts in London for all kinds of people. No
                  matter the purpose, tell us your requirements, and we will
                  craft each piece accordingly. Get a proper combination of
                  professional printing and creativity. Proudly wear your style,
                  your message, your shirt.
                </p>
              </div>
              <nuxt-link
                :to="{ name: 'quote' }"
                class="teeprint-button teeprint-theme-btn zoomInOut"
                href="/Products-list"
              >
                Get My Design Done <i class="la la-arrow-right ml-1"></i>
              </nuxt-link>

              <nuxt-link
                :to="{ name: 'shop' }"
                class="teeprint-button teeprint-theme-btn zoomInOut mx-4"
                style="background-color: #eead04"
                href="/Products-list"
              >
                Buy Now <i class="la la-arrow-right ml-1"></i>
              </nuxt-link>
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
                  src="https://res.cloudinary.com/dyfnpakfq/video/upload/v1740854363/londonn_yq8izj.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container mt-4">
      <SameDay />
    </div>

    <section class="teeprint-information">
      <div class="teeprint-content-inner">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-main-heading text-center">
                <h4 class="section-heading-title-small">
                  <span class="line-decoration"></span> Discounted & Cheap
                </h4>
                <h2 class="section-heading-title-big">
                  Durable and Washable Custom T-Shirts – Designed Your Way
                </h2>
              </div>
            </div>
          </div>
          <div class="row justify-content-center mt-5 pt-4">
            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
              <div class="teeprint-info-box h-100">
                <div class="teeprint-info-box-inner d-flex flex-column h-100">
                  <img
                    src="/img/Home/Leonardo_Phoenix_10_A_few_vibrant_tshirts_with_diverse_colors_0.jpg"
                    alt=""
                    class="img-fluid"
                  />
                  <h5 class="pt-4">Durable and Washable Prints Guaranteed</h5>
                  <p class="flex-grow-1">
                    We ensure each item lasts. Our team uses long-lasting
                    materials and quality ink so your washable t-shirt, hoodie,
                    polo shirts, tote bag, etc., stay looking great, even after
                    many washes. Your design won't crack or fade. You can wash,
                    wear, and repeat with full confidence. The colors stay
                    bright, and the fabric stays soft. We promise a print that
                    holds up. Our wearables are great for busy lives, events,
                    and teams that need a reliable style, every time.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
              <div class="teeprint-info-box h-100">
                <div class="teeprint-info-box-inner d-flex flex-column h-100">
                  <img
                    src="/img/Home/WhatsApp Image 2025-01-03 at 22.03.42_74ce6356.jpg"
                    alt=""
                    class="img-fluid"
                  />
                  <h5 class="pt-4">Sizes for All – Kids, Teens, and Adults</h5>
                  <p class="flex-grow-1">
                    Finding the right fit is easy with us. We offer custom
                    t-shirt size options for everyone. If you're shopping for a
                    family event, school team, or business, we ensure no one is
                    left out. From small to plus sizes, we have all variations.
                    Each shirt is printed with care and made to fit comfortably.
                    You can bring your design or let us help you create
                    something fun, bold, or professional. The size limit is a
                    headache no more. Everyone gets something from our extensive
                    options that fits well and feels great.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About us -->
    <section class="teeprint-homewhychoose-section">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-content">
              <div class="section-main-heading">
                <!-- <h4 class="section-heading-title-small">
                                <span class="line-decoration"></span> About Us
                            </h4> -->
                <h2 class="section-heading-title-big">
                  What People Say About Our Custom Printing in London
                </h2>
              </div>
              <p>
                People love our quality of work and quick delivery. Our
                t-shirts, polo shirts, tote bags, caps, and hoodies have been
                praised by many in London and its surroundings. Read their true
                opinions and the reasons they are coming back.
              </p>
              <nuxt-link
                :to="{ name: 'quote' }"
                class="teeprint-button teeprint-theme-btn zoomInOut"
                href="#"
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
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-img">
              <img src="/img/Home/2.jpg" alt="about iamge" />
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
              <div class="section-main-heading"></div>
              <div class="aboutus-list">
                <div class="who-we-make-for-section">
                  <h2 class="section-heading">Who We Make Custom Items For</h2>
                  <p class="intro-text">
                    Our custom-printed items are prepared for multi-purpose use.
                    Do you need them for fun, branding, or a special event? We
                    are your trusted supplier.
                  </p>

                  <div class="purpose-category">
                    <h3 class="category-title">Corporate & Workwear</h3>
                    <p class="category-description">
                      Make your team feel proud and look great. Our printed polo
                      shirts, tees, aprons, and hoodies are perfect for a
                      professional squad.
                    </p>
                  </div>

                  <div class="purpose-category">
                    <h3 class="category-title">Fashion & Retail</h3>
                    <p class="category-description">
                      Want to start your clothing brand? We do private-label
                      printing and ensure premium-quality finishing. All items
                      are ready for your customers.
                    </p>
                  </div>

                  <div class="purpose-category">
                    <h3 class="category-title">Events & Promotions</h3>
                    <p class="category-description">
                      Uniquely plan your next event. Spread your message in an
                      eye-catching way with our custom polo shirts, tees,
                      hoodies, tote bags, and caps.
                    </p>
                  </div>

                  <div class="purpose-category">
                    <h3 class="category-title">Personalized Gifts</h3>
                    <p class="category-description">
                      Give a custom gift and be special to someone special. We
                      can create a unique and exclusive design and item for you
                      to remember forever.
                    </p>
                  </div>
                </div>
              </div>
              <nuxt-link
                :to="{ name: 'quote' }"
                class="teeprint-button teeprint-theme-btn zoomInOut"
                href="/Products-list"
              >
                Get My Design Done <i class="la la-arrow-right ml-1"></i>
              </nuxt-link>

              <nuxt-link
                :to="{ name: 'shop' }"
                class="teeprint-button teeprint-theme-btn zoomInOut mx-4"
                style="background-color: #eead04"
                href="/Products-list"
              >
                Buy Now <i class="la la-arrow-right ml-1"></i>
              </nuxt-link>
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

    <section class="teeprint-benefits-section">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-benefits-content">
              <div class="section-main-heading">
                <h2 class="section-heading">
                  Why People Love Printing with TeePrintLondon
                </h2>
              </div>

              <div class="benefits-grid">
                <div class="benefit-card">
                  <h3 class="benefit-title">Fast Delivery</h3>
                  <p class="benefit-description">
                    Our same-day printing ensures you never miss a deadline.
                  </p>
                </div>

                <div class="benefit-card">
                  <h3 class="benefit-title">Custom Designs</h3>
                  <p class="benefit-description">
                    You have the highest freedom for design and customization.
                  </p>
                </div>

                <div class="benefit-card">
                  <h3 class="benefit-title">Trusted Quality</h3>
                  <p class="benefit-description">
                    Premium material and sharp printing are our key standards.
                  </p>
                </div>

                <div class="benefit-card">
                  <h3 class="benefit-title">Flexible Orders</h3>
                  <p class="benefit-description">
                    Big or small order, you are always welcome and served
                    equally.
                  </p>
                </div>
              </div>

              <div class="benefits-cta">
                <p class="cta-text">
                  Place your order now for a high-quality, custom, same-day
                  garment printing in London. Polo shirts, tees, hoodies, caps,
                  and more - make it personalized. Start creating today with
                  TeePrintLondon!
                </p>
                <nuxt-link
                  :to="{ name: 'quote' }"
                  class="teeprint-button teeprint-theme-btn zoomInOut"
                >
                  Customize Now <i class="la la-arrow-right ml-1"></i>
                </nuxt-link>

                <nuxt-link
                  :to="{ name: 'shop' }"
                  class="teeprint-button teeprint-theme-btn zoomInOut mx-4"
                  style="background-color: #eead04"
                  href="/Products-list"
                >
                  Buy Now <i class="la la-arrow-right ml-1"></i>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-benefits-img">
              <img
                src="/img/sweatshirt/6.jpg"
                alt="Fast printing process at TeePrintLondon"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <web-questions></web-questions>
  </div>
</template>

<style scoped>
.rounded-video {
  border-radius: 20px; /* Adjust as needed */
  overflow: hidden; /* Ensures the video doesn't overflow the border */
  display: block; /* Removes unwanted spacing below the video */
}

.video-container {
  position: relative;
  width: 100%;
  height: 654px;
}

@media screen and (max-width: 992px) {
  .video-container {
    height: 160px;
  }
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 1;
}

iframe {
  position: relative;
  z-index: 0;
}

.teeprint-info-box {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.teeprint-info-box-inner {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.teeprint-info-box img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.teeprint-info-box h5 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.teeprint-info-box p {
  flex-grow: 1;
}

.who-we-make-for-section {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: "Arial", sans-serif;
}

.section-heading {
  font-size: 2rem;
  color: #222;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.intro-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #444;
  text-align: center;
  margin-bottom: 2rem;
}

.purpose-category {
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  border-left: 4px solid #0066cc;
}

.category-title {
  font-size: 1.3rem;
  color: #0066cc;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.category-description {
  font-size: 1rem;
  line-height: 1.5;
  color: #555;
  margin: 0;
}

@media (max-width: 768px) {
  .section-heading {
    font-size: 1.75rem;
  }

  .intro-text {
    font-size: 1rem;
  }

  .category-title {
    font-size: 1.1rem;
  }
}

.teeprint-benefits-section {
  padding: 4rem 0;
  background-color: #f8f9fa;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin: 2rem 0;
}

.benefit-card {
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.benefit-card:hover {
  transform: translateY(-5px);
}

.benefit-title {
  color: #0066cc;
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
  position: relative;
  padding-bottom: 0.5rem;
}

.benefit-title:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40px;
  height: 2px;
  background-color: #0066cc;
}

.benefit-description {
  color: #555;
  line-height: 1.5;
  margin: 0;
}

.benefits-cta {
  margin-top: 2rem;
}

.cta-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 1.5rem;
}

.teeprint-benefits-img img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

@media (max-width: 992px) {
  .benefits-grid {
    grid-template-columns: 1fr;
  }

  .teeprint-benefits-img {
    margin-top: 2rem;
  }
}
</style>
