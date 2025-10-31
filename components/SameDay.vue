<template>
  <section class="container mt-4">
    <div class="row mb-4">
      <div class="col-md-12">
        <div class="section-main-heading text-center">
          <h4 class="section-heading-title-small">
            <span class="line-decoration"></span> Other Items
          </h4>
          <h2 class="section-heading-title-big">
            Extensive Collection And Variation In One Place
          </h2>
          <p class="section-description mt-3">
            Find everything you need in one spot. A wide range of styles,
            colors, and sizes is ready for fast T-shirt printing and shipping in
            London, UK.
          </p>
        </div>
      </div>
    </div>

    <div class="row">
      <div
        class="col-md-4 col-6 mb-4 cp"
        v-for="(item, index) in items"
        :key="index"
      >
        <!-- Use nuxt-link if item has a link -->
        <nuxt-link
          v-if="item.link"
          :to="`/${item.link}`"
          class="card-link text-decoration-none"
        >
          <div class="card h-100">
            <div class="image-wrapper">
              <img class="card-img" :src="item.image" :alt="item.title" />
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.description }}</p>
            </div>
          </div>
        </nuxt-link>

        <!-- Otherwise, just a static card -->
        <div v-else class="card-link">
          <div class="card h-100">
            <div class="image-wrapper">
              <img class="card-img" :src="item.image" :alt="item.title" />
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    title: "T-shirt Printing",
    image:
      "/img/Cotton_T_shirt/Leonardo_Phoenix_10_A_fit_middleaged_man_with_short_dark_hair_1.jpg",
    link: "same-day/shirt-printing-london",
    description:
      "Soft, comfortable, and perfect for daily wear. Excellent for events, teams, and businesses. Select your color, add your design, and get fast, high-quality printing.",
  },
  {
    title: "Polo Shirt Printing",
    image:
      "/img/Polo_T_shirt/Leonardo_Phoenix_10_A_young_adult_male_likely_in_his_early_twe_1.jpg",
    link: "same-day/polo-shirt-printing-london",
    description:
      "Look smart with custom polo shirts. Great for work, events, or uniforms. Pick your style and color. We'll print your logo or design with clean, sharp results that last.",
  },
  {
    title: "Hoodie Printing",
    image:
      "/img/Hoodie/Leonardo_Phoenix_10_A_stylish_highquality_hoodie_from_Teeprint_3.jpg",
    link: "same-day/hoodie-printing-london",
    description:
      "Stay warm and stylish. Our custom hoodies are soft and perfect for cool days. Add your logo or artwork and get high-quality printing that looks great and feels better.",
  },
  {
    title: "Cap Printing",
    image:
      "https://res.cloudinary.com/dyfnpakfq/image/upload/v1740849802/Leonardo_Phoenix_10_A_highresolution_professionalgrade_photogr_2_jlwcmk.jpg",
    link: "same-day/cap-printing-london",
    description:
      "Accomplish your look with personalized caps. Perfect for sunny days, teams, and brand promo. We print your design or logo on durable, stylish caps that people will love to wear.",
  },
  {
    title: "Tote Bag Printing",
    image:
      "/img/Tote_bag/Leonardo_Phoenix_10_a_vibrant_and_sturdy_tote_bag_with_a_bold_3.jpg",
    link: "same-day/tote-bag-printing-london",
    description:
      "Go eco-friendly with custom tote bags. Strong, reusable, and perfect for daily use. We print your design on high-quality fabric for shops and giveaways.",
  },
  {
    title: "Apron Printing",
    image:
      "/img/Apron/Leonardo_Phoenix_10_A_young_adult_male_likely_in_his_early_twe_3.jpg",
    link: "same-day/apron-printing-london",
    description:
      "Print your logo or name on high-quality aprons. Perfect for chefs, bakers, cafés, and events. Our aprons are durable and stylish, made to handle spills and look sharp.",
  },
  {
    title: "Fleeces & Knits Printing",
    image:
      "/img/Fleeces_and_Knits/Leonardo_Phoenix_10_A_single_young_man_likely_in_his_early_twe_0.jpg",
    link: "same-day/fleeces-and-knits-printing-london",
    description:
      "Stay comfortable with custom fleeces and knits. Warm, soft, and perfect for outdoor events or teams. We print your design so it stands out even in the cold.",
  },
  {
    title: "Activewear Printing",
    image:
      "/img/Active_wear/Leonardo_Phoenix_10_a_surreal_and_vibrant_cinematic_photo_of_a_1.jpg",
    link: "same-day/active-wear-printing-london",
    description:
      "Custom activewear that moves with you. Great for gyms, teams, and workouts. Breathable, stretchy, and built to last. With your logo or message printed in high quality.",
  },
  {
    title: "Shirt Printing",
    image:
      "/img/Dress_Shirts/Leonardo_Phoenix_10_a_men_wearing_dress_black_shirt_in_london_0.jpg",
    link: "same-day/dress-shirt-printing-london",
    description:
      "Create custom shirts for any occasion. Formal or casual, we print your design on stylish and comfortable shirts that fit well. Look great at work, events, or everyday wear.",
  },
];
</script>
<style scoped>
/* === IMAGE FIXES === */
.image-wrapper {
  width: 100%;
  aspect-ratio: 4 / 3; /* Maintain consistent aspect ratio */
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Show full image without cropping */
  display: block;
}

/* === CARD === */
.card {
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: white;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.card-body {
  padding: 1.25rem;
  flex: 1;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #333;
}

.card-text {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
  margin-bottom: 0;
}

/* === LINK WRAPPER === */
.card-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

/* === SECTION HEADINGS === */
.section-description {
  font-size: 1.1rem;
  color: #666;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.section-heading-title-big {
  font-size: 2rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 1rem;
}

.section-heading-title-small {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.line-decoration {
  display: inline-block;
  width: 40px;
  height: 2px;
  background-color: #666;
}

/* === RESPONSIVE === */
@media (max-width: 768px) {
  .section-heading-title-big {
    font-size: 1.75rem;
  }
  .image-wrapper {
    aspect-ratio: 1 / 1; /* Square image on small screens */
  }
}

@media (max-width: 576px) {
  .section-heading-title-big {
    font-size: 1.5rem;
  }

  .col-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>
