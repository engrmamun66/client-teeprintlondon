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
  <div
    class="col-md-4 col-6 mb-4 cp"
    v-for="(item, index) in items"
    :key="index"
  >
    <template v-if="item.link">
      <nuxt-link :to="`/${item.link}`">
        <div class="card">
          <img class="card-img-top" :src="item.image" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
          </div>
        </div>
      </nuxt-link>
    </template>
    <template v-else>
      <div class="card">
        <img class="card-img-top" :src="item.image" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{{ item.title }}</h5>
        </div>
      </div>
    </template>
  </div>
</div>
  </section>
</template>

<script setup>

const items = [
  { title: "Same Day T shirt Print", image: "/img/Cotton_T_shirt/Leonardo_Phoenix_10_A_fit_middleaged_man_with_short_dark_hair_1.jpg", link: "same-day-delivery/shirt" },
  { title: "Same Day Polo Shirt Print", image: "/img/Polo_T_shirt/Leonardo_Phoenix_10_A_young_adult_male_likely_in_his_early_twe_1.jpg", link: "same-day-delivery/polo_shirt_printing" },
  { title: "Same Day Hoodie Print", image: "/img/Hoodie/Leonardo_Phoenix_10_A_stylish_highquality_hoodie_from_Teeprint_3.jpg", link: "same-day-delivery/hoodie" },
  { title: "Same Day Cap Print", image: "/img/cap/Leonardo_Phoenix_10_A_highresolution_professionalgrade_photogr_2.jpg" , link: "same-day-delivery/cap"},
  { title: "Same Day Tote Bag Print", image: "/img/Tote_bag/Leonardo_Phoenix_10_a_vibrant_and_sturdy_tote_bag_with_a_bold_3.jpg" , link: "same-day-delivery/tote_bag"},
  { title: "Same Day Apron Print", image: "/img/Apron/Leonardo_Phoenix_10_A_young_adult_male_likely_in_his_early_twe_3.jpg", link: "same-day-delivery/apron" },
  { title: "Same Day Fleeces & Knits Print", image: "/img/Fleeces_and_Knits/Leonardo_Phoenix_10_A_single_young_man_likely_in_his_early_twe_0.jpg", link: "same-day-delivery/fleeces_and_knits" },
  { title: "Same Day Active Wear Print", image: "/img/Active_wear/Leonardo_Phoenix_10_a_surreal_and_vibrant_cinematic_photo_of_a_1.jpg", link: "same-day-delivery/active_wear" },
  { title: "Same Day Document Print", image: "/img/Home/Leonardo_Phoenix_10_A_sleek_modern_digital_printer_approximate_0.jpg" },
];



</script>

<style scoped>
.card-img-top {
  width: 100%;
  height: auto;
}

.card-link {
  display: block;
  text-decoration: none;
  color: inherit;
}
</style>
