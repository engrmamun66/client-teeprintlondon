<script setup lang="ts">
import getMeta from "~/seo-meta";
useSeoMeta(getMeta("cloth", "apron"));
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
            title="Premium Custom Apron Printing in London | Personalized Aprons for Your Brand"
            :images="[
              '/img/Apron/Leonardo_Phoenix_10_A_handsome_young_man_in_his_early_twenties_1.jpg',
              '/img/Apron/Leonardo_Phoenix_10_A_young_adult_male_likely_in_his_early_twe_0.jpg',
              '/img/Apron/Leonardo_Phoenix_10_A_young_man_in_his_early_twenties_with_a_c_1.jpg',
            ]"
          >
            Looking for high-quality custom apron printing in London? At Tee
            Print London, we specialize in premium personalized aprons for
            businesses, events, restaurants, cafes, salons, and home use.
            Whether you need a single printed apron or a bulk order, we deliver
            exceptional print quality, fast turnaround, and no minimum order
            requirement. Our custom aprons are printed in London using the
            latest direct-to-garment (DTG) and embroidery technology, ensuring
            your logo, design, or message stands out with crisp detail and
            long-lasting durability.

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
                  Why Choose Tee Print London for Your Apron Printing?
                </h2>
              </div>
              <div class="aboutus-list">
                <h1>Ideal For</h1>
                <ul>
                  <li>Coffee shops, bakeries & restaurants</li>
                  <li>Hairdressers & beauty salons</li>
                  <li>Events, promotions & trade shows</li>
                  <li>Corporate gifts & branding</li>
                  <li>Home chefs, BBQ lovers & craft makers</li>
                </ul>
                <h1>Why Choose Us?</h1>
                <ul>
                  <li>
                    Premium quality aprons available in various colours and
                    styles
                  </li>
                  <li>Custom apron printing & embroidery services in London</li>
                  <li>Fast, reliable same-day and next-day printing options</li>
                  <li>Eco-friendly print-on-demand production</li>
                  <li>No minimum order – from one piece to bulk orders</li>
                  <li>Friendly, local support team based in London</li>
                </ul>
                <p>
                  Whether you're showcasing your brand in a busy kitchen or giving your team a professional, polished look, our personalized aprons are the perfect choice. You can add your company logo, name, tagline, or even fun custom designs for gifts or special occasions.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img
                src="/img/Apron/Leonardo_Phoenix_10_a_young_man_in_his_early_twenties_with_a_r_2.jpg"
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
                src="/img/Apron/Leonardo_Phoenix_10_a_young_man_in_his_early_twenties_with_a_r_2.jpg"
                alt="about image"
              />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-homewhychoose-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big mt-5">
                  Why You Can Trust Tee Print London
                </h2>
              </div>
              <p>
At Tee Print London, we’re proud to be a trusted name in custom printing and embroidery in London. With years of experience serving businesses, creatives, and individuals, we offer not only high-quality garment printing but also fast, reliable service with quick turnaround times. Our commitment to excellence, attention to detail, and ability to deliver even same-day orders make us a go-to choice for anyone looking for professional print solutions in London. Whether it's one item or a bulk order, your satisfaction is always our priority.
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
      <Cloth />
    </div>

    <section class="teeprint-about-section">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
Our Order Process – From Design to Print Finish
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
<div class="intro">
        At <span class="highlight">Tee Print London</span>, we make custom apparel and promotional product ordering easy, fast, and reliable. Here's how we bring your idea to life—from concept to completion:
    </div>
    
    <ol class="process">
        <li class="process-step">
            <span class="step-title">Design & Concept</span>
            Share your idea or upload your artwork. No design? No problem! Our creative team can help you develop a design from scratch that reflects your brand, event, or personal style.
        </li>
        
        <li class="process-step">
            <span class="step-title">Review & Approval</span>
            Once your design is ready, we'll send you a digital mock-up for approval. You can request changes until you're 100% satisfied.
        </li>
        
        <li class="process-step">
            <span class="step-title">Print or Embroidery in <span class="location">London</span></span>
            After approval, we begin high-quality printing in <span class="location">London</span> using advanced DTG, screen printing, or embroidery in <span class="location">London</span>—depending on your product and preference. Our team ensures precise detailing and vibrant results.
        </li>
        
        <li class="process-step">
            <span class="step-title">Finishing & Quality Check</span>
            Each item is carefully checked for quality to ensure it meets our standards before leaving our production facility.
        </li>
        
        <li class="process-step">
            <span class="step-title">Quick Turnaround & Same-Day Delivery</span>
            Need it fast? We offer quick turnaround on most orders and same-day delivery in <span class="location">London</span>, so you can count on us even for last-minute needs.
        </li>
        
        <li class="process-step">
            <span class="step-title">Delivery or Collection</span>
            Once complete, your order is either shipped or available for collection from our <span class="location">London</span> location.
        </li>
    </ol>
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img
                src="/img/Apron/Leonardo_Phoenix_10_a_young_man_in_his_early_twenties_with_a_r_3.jpg"
                alt="about image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container mt-5">
      <web-DuelCard
        img_left="/img/Apron/Leonardo_Phoenix_10_A_young_man_in_his_early_twenties_with_a_c_2.jpg"
        img_right="/img/Apron/Leonardo_Phoenix_10_a_young_man_in_his_early_twenti.jpg"
        paragraph="At Tee Print London, we bring your vision to life with creative designs that leave a lasting impression. Your dream is our mission, your satisfaction is our commitment, and delivering excellence is our promise."
      />
    </div>
    <web-questions></web-questions>
  </div>
</template>
<style scoped>
h1 {
  font-size: 1.2rem;
  margin: 0 0 10px 0;
  display: inline;
}
ul {
  list-style-type: none;
  padding-left: 0;
}
li {
  margin-bottom: 8px;
  padding-left: 25px;
  position: relative;
}
li:before {
  content: "•";
  color: #28a745;
  font-size: 20px;
  position: absolute;
  left: 5px;
  top: -2px;
}

        .intro {
            margin-bottom: 30px;
            font-size: 1.1em;
        }
        
        .process {
            list-style-type: none;
            padding: 0;
            counter-reset: process-counter;
        }
        
        .process-step {
            margin-bottom: 25px;
            padding-left: 60px;
            position: relative;
        }
        
        .process-step:before {
            counter-increment: process-counter;
            content: counter(process-counter);
            position: absolute;
            left: 0;
            top: 0;
            background: #2e8b57;
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 1.2em;
        }
        
        .step-title {
            font-weight: bold;
            color: #2e8b57;
            font-size: 1.1em;
            margin-bottom: 5px;
            display: block;
        }
        
        .highlight {
            font-weight: bold;
        }
        
        .location {
            font-weight: bold;
            color: #2e8b57;
        }



</style>
