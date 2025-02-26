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
            title="Revolutionizes Printing Services in London"
            :images="[
              '/img/Home/Leonardo_Phoenix_10_A_highquality_crisp_image_of_a_crisp_white_1.jpg',
              '/img/Home/Flux_Dev_A_vibrant_and_modern_illustration_featuring_a_casual__2.jpeg',
              '/img/Banner/Leonardo_Phoenix_10_a_vibrant_and_eyecatching_business_banner_0.jpg',
            ]"
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
                  Why Choose Tee Print London for Your Garment Printing Needs
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  At Tee Print London, we stand out as a reliable garment
                  printer based in London, offering a blend of expertise in
                  customization, state-of-the-art technology, and a commitment
                  to quality assurance. Our eco-friendly practices, combined
                  with fast turnaround times and competitive pricing, make us an
                  ideal choice. We pride ourselves on exceptional customer
                  service and being a local London business, which allows us to
                  understand and cater to the unique needs of our clients. Our
                  versatility in handling a wide range of products, from
                  t-shirts to corporate wear, and our proven track record in
                  delivering top-notch services, ensure that we meet and exceed
                  your garment printing expectations. Choose Tee Print London
                  for a seamless and high-quality printing experience.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img
                src="https://teeprint.london/wp-content/uploads/2022/11/t-shirt-printing-cover-1024x694.jpg"
                alt="about iamge"
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
                src="/img/Home/Flux_Dev_A_vibrant_and_modern_illustration_featuring_a_casual__2.jpeg"
                alt="about iamge"
              />
            </div>
          </div>
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
        </div>
      </div>
    </section>

    <section class="container mt-4">
      <div class="row mb-4">
        <div class="col-md-12">
          <div class="section-main-heading text-center">
            <h4 class="section-heading-title-small">
              <span class="line-decoration"></span> Other Items
            </h4>
            <h2 class="section-heading-title-big">
              with Guaranteed Same-Day Printing and Delivery in London & Next
              Day for UK
            </h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-6 mb-4 cp">
          <div class="card">
            <img
              class="card-img-top"
              src="/img/Banner/Leonardo_Phoenix_10_a_vibrant_and_eyecatching_business_banner_0.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Same Day Banner Print</h5>
              <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
              <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
          </div>
        </div>

        <div class="col-md-4 col-6 mb-4 cp">
          <div class="card">
            <img
              class="card-img-top"
              src="/img/Flyer and Leaflet/1985.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Same Day Flyer Leaflet Print</h5>
              <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
              <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
          </div>
        </div>

        <div class="col-md-4 col-6 mb-4 cp">
          <div class="card">
            <img
              class="card-img-top"
              src="/img/Poster Print/Leonardo_Phoenix_10_a_vibrant_and_appetizing_business_poster_f_1.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Same Day Poster Print</h5>
              <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
              <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
          </div>
        </div>

        <div class="col-md-4 col-6 mb-4 cp">
          <div class="card">
            <img
              class="card-img-top"
              src="/img/Business card/5073120.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Same Day Business Card Print</h5>
              <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
              <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6 mb-4 cp">
          <div class="card">
            <img
              class="card-img-top"
              src="/img/Booklet and brochure/Leonardo_Phoenix_10_a_stunning_professionallydesigned_booklet_1.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Same Day Brochure Booklet Print</h5>
              <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
              <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6 mb-4 cp">
          <div class="card">
            <img
              class="card-img-top"
              src="/img/Home/Leonardo_Phoenix_10_A_sleek_modern_digital_printer_approximate_0.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Same Day Document Print</h5>
              <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
              <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
          </div>
        </div>

        <div class="col-md-4 col-6 mb-4 cp">
          <div class="card">
            <img
              class="card-img-top"
              src="/img/Hoodie/Leonardo_Phoenix_10_A_stylish_highquality_hoodie_from_Teeprint_3.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Same Day Hoodie Print</h5>
              <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
              <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6 mb-4 cp">
          <div class="card">
            <img
              class="card-img-top"
              src="/img/Tote_bag/Leonardo_Phoenix_10_a_vibrant_and_sturdy_tote_bag_with_a_bold_3.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Same Day Tote Bag Print</h5>
              <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
              <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
          </div>
        </div>
        <div class="col-md-4 col-6 mb-4 cp">
          <div class="card">
            <img
              class="card-img-top"
              src="/img/Sweatshirt/Leonardo_Phoenix_10_a_casual_relaxedfit_light_blue_sweatshirt_2.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Same Day Sweatshirt Print</h5>
              <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
              <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
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
                  Why Choose Tee Print London for Your Garment Printing Needs
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  At Tee Print London, we stand out as a reliable garment
                  printer based in London, offering a blend of expertise in
                  customization, state-of-the-art technology, and a commitment
                  to quality assurance. Our eco-friendly practices, combined
                  with fast turnaround times and competitive pricing, make us an
                  ideal choice. We pride ourselves on exceptional customer
                  service and being a local London business, which allows us to
                  understand and cater to the unique needs of our clients. Our
                  versatility in handling a wide range of products, from
                  t-shirts to corporate wear, and our proven track record in
                  delivering top-notch services, ensure that we meet and exceed
                  your garment printing expectations. Choose Tee Print London
                  for a seamless and high-quality printing experience.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img
                src="https://teeprint.london/wp-content/uploads/2022/11/t-shirt-printing-cover-1024x694.jpg"
                alt="about iamge"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container mt-5">
      <web-DuelCard
        img_left="/img/quote-page-card-image-1.jpeg"
        img_right="/img/quote-page-card-image-2.jpeg"
        paragraph="We bring your vision to life with creative designs that leave a lasting impression. Your dream is our mission, your satisfaction is our commitment, and delivering excellence is our promise."
      />
    </div>

    <web-questions></web-questions>
  </div>
</template>
