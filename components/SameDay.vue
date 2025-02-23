<template>
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
        <div class="col-md-4 col-6 mb-4 cp" v-for="(item, index) in items" :key="index">
          <div class="card">
            <img class="card-img-top" :src="item.image" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const items = [
    { title: "Same Day Banner Print", image: "/img/Banner/Leonardo_Phoenix_10_a_vibrant_and_eyecatching_business_banner_0.jpg" },
    { title: "Same Day Flyer Leaflet Print", image: "/img/Flyer and Leaflet/1985.jpg" },
    { title: "Same Day Poster Print", image: "/img/Poster Print/Leonardo_Phoenix_10_a_vibrant_and_appetizing_business_poster_f_1.jpg" },
    { title: "Same Day Business Card Print", image: "/img/Business card/5073120.jpg" },
    { title: "Same Day Brochure Booklet Print", image: "/img/Booklet and brochure/Leonardo_Phoenix_10_a_stunning_professionallydesigned_booklet_1.jpg" },
    { title: "Same Day Document Print", image: "/img/Home/Leonardo_Phoenix_10_A_sleek_modern_digital_printer_approximate_0.jpg" },
    { title: "Same Day Hoodie Print", image: "/img/Hoodie/Leonardo_Phoenix_10_A_stylish_highquality_hoodie_from_Teeprint_3.jpg" },
    { title: "Same Day Tote Bag Print", image: "/img/Tote_bag/Leonardo_Phoenix_10_a_vibrant_and_sturdy_tote_bag_with_a_bold_3.jpg" },
    { title: "Same Day Sweatshirt Print", image: "/img/Sweatshirt/Leonardo_Phoenix_10_a_casual_relaxedfit_light_blue_sweatshirt_2.jpg" }
  ];
  </script>
  
  <style scoped>
  .card-img-top {
    width: 100%;
    height: auto;
  }
  </style>
  