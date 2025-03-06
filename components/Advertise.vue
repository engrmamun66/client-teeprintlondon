<template>
  <section class="container mt-4">
    <div class="row mb-4">
      <div class="col-md-12">
        <div class="section-main-heading text-center">
          <h4 class="section-heading-title-small">
            <span class="line-decoration"></span> Other Items
          </h4>
          <h2 class="section-heading-title-big">
            with Guaranteed Same-Day Printing and Delivery in London & Next Day
            for UK
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
              <img
                class="card-img-top"
                :src="item.image"
                alt="Card image cap"
              />
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
  {
    title: "Flyers & Leaflets Printing",
    image:
      "/img/flyer_and_leaflet/2190.jpg",
    link: "advertise/flyer_and_leaflet",
  },
  {
    title: "Folded Leaflets & Menu Printing",
    image:
      "/img/menu_print/Leonardo_Phoenix_10_A_rustic_wooden_table_adorned_with_a_few_s_1.jpg",
    link: "advertise/folded_flyer_and_menu",
  },
  {
    title: "Tickets & Vouchers Printing",
    image:
      "/img/ticket_and_voucher/OrangeandYellowIllustrativeFoodT.jpg",
    link: "advertise/ticket_and_voucher",
  },
  {
    title: "Business Cards Printing",
    image:
      "/img/business_card/24148.jpg",
    link: "advertise/business_card",
  },
  {
    title: "Banners Printing",
    image:
      "/img/banners/10.jpg",
    link: "advertise/advertising_banner",
  },
  {
    title: "Sign Printing",
    image:
      "/img/sign_print/Leonardo_Phoenix_10_Design_a_versatile_and_customizable_door_s_1.jpg",
    link: "advertise/sign_print",
  },
  {
    title: "Sticker Printing",
    image:
      "/img/sticker_print/3.jpg",
    link: "advertise/sticker_print",
  },
  {
    title: "Mug Printing",
    image:
      "/img/mug_print/3.jpg",
    link: "advertise/mug_print",
  },
  {
    title: "Same Day T shirt Print",
    image:
      "/img/Cotton_T_shirt/Leonardo_Phoenix_10_A_fit_middleaged_man_with_short_dark_hair_1.jpg",
    link: "same-day-delivery/shirt",
  },
];
</script>

<style scoped>
.card-img-top {
  width: 100%;
  height: auto; /* Let the height adjust based on the image aspect ratio */
  object-fit: contain; /* Ensures the entire image is visible without cropping */
}

.card-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.card {
  height: 100%; /* Ensure all cards have the same height */
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for hover effect */
  border: 1px solid #e0e0e0; /* Optional: Add a subtle border */
  border-radius: 8px; /* Optional: Rounded corners */
  overflow: hidden; /* Ensure content stays within the card */
}

.card:hover {
  transform: scale(1.05); /* Slightly scale up the card */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Add a shadow for the "pop out" effect */
}

.card-body {
  flex: 1; /* Ensures the card body takes up remaining space */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center; /* Center-align the title */
  padding: 1rem; /* Consistent padding */
}

.card-title {
  margin: 0; /* Remove default margin */
  font-size: 1rem; /* Consistent font size */

  line-height: 1.4; /* Improve line spacing */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card-img-top {
    height: 180px; /* Fixed height for smaller screens */
    object-fit: cover; /* Crop images to fit the fixed height */
  }
}

@media (max-width: 576px) {
  .card-img-top {
    height: 160px; /* Further adjust height for very small screens */
  }
}
</style>
