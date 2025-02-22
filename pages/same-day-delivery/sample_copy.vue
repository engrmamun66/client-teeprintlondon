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
        <!-- <div class="row">
          <div class="col-md-12">
            <div class="section-main-heading text-center">
              <h4 class="section-heading-title-small">
                <span class="line-decoration"></span> Same Day Delivery
              </h4>
              <h2 class="section-heading-title-big">
                Revolutionizes Printing Services in London
              </h2>
            </div>
          </div>
        </div> -->

        <div class="row">
          <web-postCard
            :right="true"
            title="Revolutionizes Printing Services in London"
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

            <br />

            <nuxt-link
              :to="{ name: 'quote' }"
              class="teeprint-button teeprint-theme-btn zoomInOut mt-5"
              data-v-inspector="pages/index.vue:277:25"
            >
              Get A Free Quote <i class="la la-arrow-right ml-1"></i
            ></nuxt-link>
          </web-postCard>
        </div>
      </div>
    </section>
    <section class="trusted-logo">
            <div class="trusted-logo-content-inner">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-main-heading text-center">
                                <h4 class="section-heading-title-small">
                                    <span class="line-decoration"></span> Trusted by
                                </h4>
                                <h2 class="section-heading-title-big">
                                    Leading UK & International Brands
                                </h2>
                                <span class="section-paragraph">
                                    Thousands of UK and international brands trust Tee Print 
                                    London to create premium, soft,<br> and stylish custom t-shirts 
                                    that their teams wear proudly.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="owl-carousel owl-theme">
                                <div class="item">
                                    <img src="/img/bloomberg.jpg" alt="trusted img">
                                </div>
                                <div class="item">
                                    <img src="/img/coinbase.png" alt="trusted img">
                                </div>
                                <div class="item">
                                    <img src="/img/databricks.jpg" alt="trusted img">
                                </div>
                                <div class="item">
                                    <img src="/img/ft.png" alt="trusted img">
                                </div>
                                <div class="item">
                                    <img src="/img/gem.jpg" alt="trusted img">
                                </div>
                                <div class="item">
                                    <img src="/img/google.png" alt="trusted img">
                                </div>
                                <div class="item">
                                    <img src="/img/meta.png" alt="trusted img">
                                </div>
                                <div class="item">
                                    <img src="/img/milbrook.jpg" alt="trusted img">
                                </div>
                                <div class="item">
                                    <img src="/img/nhs.jpg" alt="trusted img">
                                </div>
                                <div class="item">
                                    <img src="/img/pitch.jpg" alt="trusted img">
                                </div>
                                <div class="item">
                                    <img src="/img/queen.jpg" alt="trusted img">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="teeprint-customer-finally">
            <div class="services-content-inner">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-main-heading text-center">
                                <h4 class="section-heading-title-small">
                                    <span class="line-decoration"></span> T-Shirt Printing
                                </h4>
                                <h2 class="section-heading-title-big">
                                    Reliable Custom T-Shirt Printing You Can Trust
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div class="row customer-finally-row mt-5">

                        <div class="col-lg-3 col-md-3 col-sm-6 col-6">
                            <div class="teeprintservice-box">
                                <div class="teeprintservice-box-inner">
                                    <div class="teeprint-service-img">
                                        <img src="/img/Own-Wirehouse-150x150.png.webp" class="img-fluid">
                                    </div>
                                    <h5>Custom Garments Printed Locally in Our London Facility</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 col-6">
                            <div class="teeprintservice-box">
                                <div class="teeprintservice-box-inner">
                                    <div class="teeprint-service-img">
                                        <img src="/img/Fastest-Turnaround-150x150.png.webp" class="img-fluid">
                                    </div>
                                    <h5>Fast Service, Same-Day Delivery, and Free Pickup Options</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 col-6">
                            <div class="teeprintservice-box">
                                <div class="teeprintservice-box-inner">
                                    <div class="teeprint-service-img">
                                        <img src="/img/24-7-Open-150x150.png.webp" class="img-fluid">
                                    </div>
                                    <h5>Operating Nonstop, Bank Holidays Included</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 col-6">
                            <div class="teeprintservice-box">
                                <div class="teeprintservice-box-inner">
                                    <div class="teeprint-service-img">
                                        <img src="/img/Quality-150x150.png.webp" class="img-fluid">
                                    </div>
                                    <h5>High-Quality Prints and Fabrics Built for Style and Longevity</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 col-6">
                            <div class="teeprintservice-box">
                                <div class="teeprintservice-box-inner">
                                    <div class="teeprint-service-img">
                                        <img src="/img/Refund-Policy-150x150.png.webp" class="img-fluid">
                                    </div>
                                    <h5>
                                        Hassle-Free Refund Policy for Your Peace of Mind
                                    </h5>
                                </div>
                            </div>
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
      <section class="container mt-5">
        <div class="row">
                        <div class="col-md-12 mb-5">
                            <div class="section-main-heading text-center">
                                <!-- <h4 class="section-heading-title-small">
                                    <span class="line-decoration"></span> Trusted by
                                </h4> -->
                                <h2 class="section-heading-title-big">
                                  How Garment Printing Works
                                </h2>
                                <span class="section-paragraph">
                                  Garment printing, also known as textile printing, is a process used to apply color<br> to fabric in definite patterns or designs. In properly printed fabrics, the color is bonded with the fiber<br> to resist washing and friction. The process involves several key steps:
                                </span>
                            </div>
                        </div>
                    </div>
      <div class="row">
        <div class="col-md-12 mb-4 cp">
          <div class="e-con-inner">
            <div class="">
                <div class="widget-container">
                    <h2 class="printing-subtitle pb-2"><strong>Design Creation and Selection:</strong></h2>
                    <p>
                        The first step in garment printing is designing the pattern or image to be printed. This can be done using software like Adobe Photoshop or Illustrator. The design is then selected for printing, considering factors like the
                        fabric type and the desired effect.
                    </p>
                    <h3 class="pt-4 pb-2">Preparing the Fabric</h3>
                    <p>Before printing, the fabric is usually pre-treated to ensure better ink absorption and color fastness. This process may involve washing, drying, and stretching the fabric to eliminate any wrinkles or shrinkage.</p>
                    <h3 class="pt-4">Printing Techniques</h3>
                    <div>&nbsp;</div>
                    <p><strong>There are various methods for applying designs to fabric, each with its own set of advantages:</strong></p>
                    <p>&nbsp;</p>
                </div>
            </div>
            <div class="d-flex">
                <div>
                  <img src="https://teeprint.london/wp-content/uploads/2024/09/Screen-Printing-Icon.png"/>
                </div>
                <div>
                  <img src="https://teeprint.london/wp-content/uploads/2024/09/Dtg-Printer.png"/>
                </div>
                <div>
                  <img src="https://teeprint.london/wp-content/uploads/2024/09/Heat-Transfer-Printing.jpeg"/>
                </div>
                <div>
                  <img src="https://teeprint.london/wp-content/uploads/2024/09/Sublimation-printing.png"/>
                </div>
            </div>
            <div>
                <div>
                  <ul>
                                <li class="pt-3">
                                    <strong>Screen Printing:</strong> <br />
                                    This is a popular method for high-volume orders. It involves creating a stencil (or screen) of the design, then using it to apply layers of ink on the surface of the fabric. Each color is applied using a
                                    different screen, one at a time, combined to achieve the final design.
                                </li>
                                <li class="pt-3">
                                    <strong>Digital Printing:</strong> <br />
                                    Also known as direct-to-garment (DTG) printing, this method uses a specialized printer to apply the ink directly onto the fabric. Digital printing is ideal for detailed designs and small orders, as it allows for
                                    more color variety and intricate patterns.
                                </li>
                                <li class="pt-3">
                                    <strong>Heat Transfer:</strong> <br />
                                    In this method, a design is printed onto heat transfer paper and then transferred onto the fabric using heat and pressure. It’s useful for full-color images and is commonly used for t-shirts.
                                </li>
                                <li class="pt-3">
                                    <strong>Dye Sublimation:</strong> <br />
                                    Best for polyester and polymer-coated substrates, this method involves turning a solid dye into a gas using heat and pressure, which then bonds with the fabric, resulting in a high-quality print.
                                </li>
                            </ul>
                </div>
                <div>
                    <div class="widget-container">
                        <h3 class="pt-4 pb-2">Post-Printing Processes</h3>
                        <p>After printing, the fabric often undergoes processes like steaming, washing, and drying to set the ink and remove any excess. This ensures the print’s longevity and color fastness.</p>
                        <h3 class="pt-4 pb-2">Quality Check and Finishing</h3>
                        <p>The final step involves a thorough inspection of the printed fabric for any defects or inconsistencies. The fabric may also be cut or sewn into final products, like garments or accessories.</p>
                        <p>
                            The choice of printing method depends on various factors like the type of fabric, the complexity of the design, the desired effect, and the size of the order. Advancements in technology, especially in digital printing,
                            have greatly expanded the possibilities for fabric design and customization in the garment industry.
                        </p>
                    </div>
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
                  Why Choose Tee Print London for Your Garment Printing Needs
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  At Tee Print London, we stand out as a reliable 
                  garment printer based in London, offering a blend 
                  of expertise in customization, state-of-the-art technology, 
                  and a commitment to quality assurance. Our eco-friendly 
                  practices, combined with fast turnaround times and 
                  competitive pricing, make us an ideal choice. We pride 
                  ourselves on exceptional customer service and being a 
                  local London business, which allows us to understand 
                  and cater to the unique needs of our clients. Our 
                  versatility in handling a wide range of products, 
                  from t-shirts to corporate wear, and our proven 
                  track record in delivering top-notch services, 
                  ensure that we meet and exceed your garment printing 
                  expectations. Choose Tee Print London for a seamless 
                  and high-quality printing experience.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-img">
              <img src="https://teeprint.london/wp-content/uploads/2022/11/t-shirt-printing-cover-1024x694.jpg" alt="about iamge" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <web-questions></web-questions>
  </div>
</template>
