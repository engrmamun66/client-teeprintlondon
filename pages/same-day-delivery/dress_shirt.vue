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
          <MultipleImageCard
            :right="true"
            title="Professional Dress Shirts for Industrial Employees"
            :images="[
              '/img/Dress_Shirts/Leonardo_Phoenix_10_a_highly_detailed_photorealistic_and_vibra_2.jpg',
              '/img/Dress_Shirts/Leonardo_Phoenix_10_a_men_wearing_dress_black_shirt_in_london_1.jpg',
              '/img/Dress_Shirts/Leonardo_Phoenix_10_a_men_wearing_dress_blue_shirt_in_office_E_0.jpg',
            ]"
          >
            Need high-quality custom dress shirts for your industrial workforce?
            Tee Print London provides same-day printing services, ensuring fast
            and reliable results. Whether it’s for corporate branding, team
            uniforms, or personalized workwear, our efficient process guarantees
            stylish and professional dress shirts without delays. Serving
            clients across London and the UK, we specialize in delivering
            premium printing solutions with a quick turnaround to meet your
            urgent needs.

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
                  Why Choose Tee Print London for Your Dress Shirt Printing
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Tee Print London is your go-to destination for high-quality
                  dress shirt printing, offering premium designs, exceptional
                  craftsmanship, and unbeatable customer service. Whether you're
                  looking for custom prints for your industrial team, corporate
                  branding, or personalized workwear, we provide vibrant,
                  long-lasting prints on durable, professional fabrics. Our
                  advanced printing techniques ensure sharp details and rich
                  colors that won’t fade over time. Plus, with fast turnaround
                  times and competitive pricing, we make customization
                  effortless and affordable. Choose Tee Print London for
                  stylish, durable, and uniquely crafted dress shirts that keep
                  your team looking sharp and professional!
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img
                src="/img/Dress_Shirts/Leonardo_Phoenix_10_a_men_wearing_dress_blue_shirt_in_hospital_3.jpg"
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
                src="/img/Dress_Shirts/Leonardo_Phoenix_10_a_highly_detailed_photorealistic_and_vibra_3.jpg"
                alt="about image"
              />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big mt-5">
                  Same-Day Dress Shirt Printing – Fast, Reliable, and
                  High-Quality
                </h2>
              </div>
              <p>
                When time is of the essence, and you need custom-printed dress
                shirts without delays, Tee Print London is here to help. We
                specialize in same-day printing services, allowing you to
                receive professionally printed dress shirts on the very same day
                you place your order. Whether you're preparing for a corporate
                event, team presentation, or daily workwear, our service ensures
                you get premium-quality prints with a fast turnaround. At Tee
                Print London, we use state-of-the-art printing techniques such
                as Direct-to-Garment (DTG), screen printing, and vinyl printing
                to produce vibrant, long-lasting designs that withstand daily
                wear and multiple washes. No matter the complexity of your
                design—whether it's a logo, slogan, graphic, or personalized
                text—we bring your vision to life with precision and care. Our
                commitment to quality means that speed does not compromise the
                excellence of our work. We understand that urgent orders require
                not only quick processing but also high standards, which is why
                our printing process ensures crisp, clear, and professional
                results. Whether you need a single piece or a bulk order, our
                team is dedicated to providing the best service in London and
                across the UK. Why wait for days? Get your custom dress shirts
                printed today with Tee Print London and enjoy fast, reliable,
                and high-quality printing tailored to your needs.
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
                  Get Your Custom Dress Shirts Printed Today!
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Why wait days or even weeks for your custom dress shirts when
                  you can have them printed today? At Tee Print London, we offer
                  same-day dress shirt printing to ensure you get your custom
                  designs exactly when you need them. Whether it’s for corporate
                  branding, team uniforms, or personalized workwear, we provide
                  a seamless and hassle-free printing experience with top-notch
                  results. Our process is designed for speed and
                  convenience—simply select your dress shirts, upload your
                  design, and let us handle the rest. Using advanced printing
                  techniques, including Direct-to-Garment (DTG), screen
                  printing, and vinyl printing, we guarantee sharp, vibrant, and
                  long-lasting prints that won’t fade after daily use. We
                  understand the urgency of last-minute orders, which is why our
                  same-day printing service is tailored to meet your deadlines
                  without compromising on quality. Whether you need a single
                  piece or a bulk order, we ensure every item is printed with
                  precision, durability, and style. Don’t let long wait times
                  slow you down—place your order now with Tee Print London and
                  get your custom dress shirts printed on the same day with
                  professional service and unmatched quality.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img
                src="/img/Dress_Shirts/Leonardo_Phoenix_10_a_men_wearing_dress_black_shirt_in_london_1.jpg"
                alt="about image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container mt-5">
      <web-DuelCard
        img_left="/img/Dress_Shirts/Leonardo_Phoenix_10_a_men_wearing_dress_blue_shirt_in_office_E_3.jpg"
        img_right="/img/Dress_Shirts/Leonardo_Phoenix_10_a_men_wearing_dress_black_shirt_in_london_3.jpg"
        paragraph="We bring your vision to life with creative designs that leave a lasting impression. Your dream is our mission, your satisfaction is our commitment, and delivering excellence is our promise."
      />
    </div>
    <web-questions></web-questions>
  </div>
</template>
