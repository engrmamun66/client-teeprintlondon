<script setup>
definePageMeta({
  titleTemplate: "% :: Home",
  name: "home",
  layout: "web",
});
</script>

<template>
  <div>
    <web-slider />
    <web-trusted />
    <web-customerFinally></web-customerFinally>

    <section class="teeprint-makes-section">
      <div class="container">
        <h2 class="text-center m-2">Our Printing Environment</h2>
        <iframe
          width="100%"
          height="654"
          src="https://www.youtube.com/embed/pN2yLAtMDjg"
          title="Amazing Graphic T-Shirt Mass Production Process. One-stop Clothing Manufacturing Factory"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </section>

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
            title="Same-Day Delivery for Custom T-Shirt Printing in London, Available 24/7"
          >
            Need custom t-shirts in a hurry for your campaign, event, or
            festival? Tee Print London is your go-to for fast, reliable
            solutions. We offer same day t-shirt printing with delivery across
            London, and next day t-shirt printing for customers throughout the
            UK. Our 24/7 service ensures you can place your order anytime and
            receive high-quality, custom printed t-shirts when you need them
            most. Whether it’s a last-minute request or a planned order, we
            deliver fast and affordable printing without compromising on
            quality. Count on Tee Print London to meet your urgent t-shirt
            printing needs.
          </web-postCard>

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
                  Discover Creativity in London
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Teeprint London is where creativity meets precision,
                  delivering high-quality custom printing with speed and style.
                  From bold streetwear to professional branding, we bring your
                  designs to life with vibrant prints and flawless execution.
                  Trusted by top London brands, our same-day printing service
                  ensures you never have to wait to make a statement. Whether
                  it’s t-shirts, hoodies, or tote bags, we craft each piece with
                  care, turning your ideas into wearable art.
                </p>
              </div>
              <nuxt-link
                :to="{ name: 'quote' }"
                class="teeprint-button teeprint-theme-btn zoomInOut"
                href="/Products-list"
              >
                Get My Design Done <i class="la la-arrow-right ml-1"></i>
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
                <source src="https://res.cloudinary.com/dyfnpakfq/video/upload/v1740854363/londonn_yq8izj.mp4" type="video/mp4" />
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
              <div class="teeprint-info-box">
                <div class="teeprint-info-box-inner">
                  <img
                    src="/img/Home/Leonardo_Phoenix_10_A_few_vibrant_tshirts_with_diverse_colors_0.jpg"
                    alt=""
                  />
                  <h5 class="pt-4">
                    Get High Quality T shirt Print – Permanent & Washable
                  </h5>
                  <p>
                    Printed artwork on custom T-shirts can fade over time,
                    especially with frequent washing, but the longevity of the
                    design is influenced by factors like the printing method,
                    ink quality, fabric type, and how the garment is cared for.
                    At Tee Print London, we use advanced printing techniques,
                    durable inks, and premium fabrics to ensure that your custom
                    designs remain vibrant and long-lasting. To help maintain
                    the quality of your printed T-shirts, we recommend washing
                    them inside out with cold water, avoiding harsh detergents,
                    and air drying. By following these simple care instructions,
                    you can minimize fading and keep your custom T-shirts
                    looking fresh for a longer time. roper garment care is key
                    to extending the life of your printed T-shirts. For example,
                    washing your T-shirts inside out in cold water, avoiding
                    harsh detergents
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
              <div class="teeprint-info-box renty-information-middle">
                <div class="teeprint-info-box-inner">
                  <img
                    src="/img/Home/WhatsApp Image 2025-01-03 at 22.03.42_74ce6356.jpg"
                  />
                  <h5 class="pt-4">
                    You Can Provide Your Own Design or We Customize T shirts For
                    You
                  </h5>
                  <p>
                    There’s no fixed rule when it comes to printing your custom
                    t shirts from our t-shirt print shop. We allow our customers
                    to provide their own logo, photo, design, artwork, and
                    pattern, however they want before we print them on your t
                    shirt. You have your full liberty to personalize your t
                    shirts according to your convenience and we are always ready
                    to accept your orders at any given moment. If you have
                    t-shirt design ideas but need some help to bring it to
                    reality then we are here to help you with t-shirt designing
                    service. Just let us know your ideas and requirements, and
                    our t-shirt designing expert will come up with exclusive
                    mockups.
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
                <h2 class="section-heading-title-big">Why Tee Print?</h2>
              </div>
              <p>
                Experience the best in London with Tee Print London. Our
                affordable same-day T-shirt printing delivers fast, reliable
                results, 24/7. We customize each garment with meticulous care,
                ensuring top quality that trusted by leading London brands. Our
                apparel printing services also cover hoodies, sweatshirts, and
                tote bags, meeting all your needs efficiently.
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
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-img">
              <img
                src="/img/Home/Flux_Dev_A_vibrant_and_modern_illustration_featuring_a_casual__2.jpeg"
                alt="about iamge"
              />
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
                  Explore Design In London, Our Sister Concern
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  At Tee Print London, we proudly present our sister concern,
                  Design in London—a creative design agency specializing in web
                  design, brand identity, graphics, print design, and more.
                  Visit Design in London to explore our premium design services
                  and elevate your brand!
                </p>
              </div>
              <nuxt-link
                :to="{ name: 'quote' }"
                class="teeprint-button teeprint-theme-btn zoomInOut"
                href="/Products-list"
              >
                Get My Design Done <i class="la la-arrow-right ml-1"></i>
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

    <web-questions></web-questions>
  </div>
</template>

<style scoped>
.rounded-video {
  border-radius: 20px; /* Adjust as needed */
  overflow: hidden; /* Ensures the video doesn't overflow the border */
  display: block; /* Removes unwanted spacing below the video */
}
</style>
