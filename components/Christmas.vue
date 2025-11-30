<template>
  <section class="christmas-promo-section">
    <div class="container">
      <div class="row mb-5">
        <div class="col-12 text-center">
          <div class="section-main-heading">
            <h2 class="section-heading-title-big">
              🎅 Jingle All The Way in Exclusive Holiday Apparel from
              TeePrintLondon
            </h2>
          </div>
          <p class="promo-subtitle">Get your cozy holiday apparel today!</p>

          <!-- ⭐ Updated Promo Section -->
          <div class="promo-info mt-4 p-3 bg-light rounded shadow-sm">
            <p class="mb-2 promo-highlight">
              ✨ Shop the <em>trendiest & coziest</em> Christmas sweatshirts and enjoy
              <strong class="text-danger">10% OFF</strong> your first order with
              <strong class="text-danger">WELCOME10</strong> 🎁
            </p>

            <p class="mb-0 promo-highlight-2">
              🎨 Want something unique? Get a <strong>FREE custom design quote</strong>
              and create the perfect holiday look!
            </p>

            <NuxtLink
              :to="{ name: 'quote' }"
              class="teeprint-button teeprint-theme-btn zoomInOut mt-3"
            >
              Get a Free Quote <i class="la la-arrow-right ml-1"></i>
            </NuxtLink>
          </div>
        </div>
      </div>

      <hr />

      <div class="row pt-5">
        <div
          class="col-xl-4 col-lg-4 col-md-4 mb-4"
          v-for="(product, index) in products"
          :key="index"
        >
          <div class="product-card card shadow-sm h-100 border-0">
            <NuxtLink :to="product.link" target="_blank">
              <img
                :src="product.image"
                class="card-img-top"
                :alt="product.name"
              />
            </NuxtLink>

            <div class="card-body text-center">
              <h5 class="card-title">{{ product.name }}</h5>
              <NuxtLink
                :to="product.link"
                target="_blank"
                class="teeprint-button teeprint-theme-btn zoomInOut mx-4"
                style="background-color: #eead04"
              >
                View Product <i class="la la-arrow-right ml-1"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const products = [
  {
    name: "Santa Hat Sweatshirt",
    image:
      "https://londonteeprint.com/storage/product/thumbnail/68a483a4749e1.jpg",
    link: "https://teeprintlondon.co.uk/product/santa-hat-sweatshirt-cute-holiday-graphic-pullover-ch-46",
  },
  {
    name: "Red Truck Christmas Tree Sweatshirt",
    image:
      "https://londonteeprint.com/storage/product/thumbnail/68a49fe48d6fe.jpg",
    link: "https://teeprintlondon.co.uk/product/red-truck-christmas-tree-sweatshirt-farm-fresh-holiday-crewneck-ch-58",
  },
  {
    name: "Merry Christmas Reindeer Horn Sweatshirt",
    image:
      "https://londonteeprint.com/storage/product/thumbnail/68b5628793197.jpg",
    link:
      "https://teeprintlondon.co.uk/product/merry-christmas-reindeer-horn-sweatshirt-cozy-holiday-jumper-ch-49",
  },
];
</script>

<style scoped>
.christmas-promo-section {
  padding: 80px 0;
}

.section-main-heading {
  margin-bottom: 20px;
}

.section-heading-title-big {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
}

.promo-subtitle {
  font-size: 1.2rem;
  color: #666;
}

/* ⭐️ Beautified Promo Styling */
.promo-info {
  background: linear-gradient(135deg, #fff7f7, #fff);
  border: 2px dashed #dc3545;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(220, 53, 69, 0.15);
  transition: 0.3s ease;
}

.promo-info:hover {
  transform: scale(1.01);
}

.promo-highlight {
  font-size: 1.25rem;
  font-weight: 600;
  color: #b30000;
  line-height: 1.6;
}

.promo-highlight strong {
  font-size: 1.3rem;
}

.promo-highlight-2 {
  font-size: 1.15rem;
  font-weight: 500;
  color: #333;
}

.product-card .card-img-top {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: calc(0.25rem - 1px);
  transition: transform 0.3s ease-in-out;
}

.product-card:hover .card-img-top {
  transform: scale(1.02);
}

.small-btn {
  padding: 8px 15px;
  font-size: 0.9rem;
}

/* Layout basics */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

[class*="col-"] {
  padding-right: 15px;
  padding-left: 15px;
}

.text-center {
  text-align: center;
}
</style>
