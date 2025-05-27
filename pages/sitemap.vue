<template>
  <div class="sitemap-page">
    <h1>Sitemap</h1>
    
    <section class="sitemap-section">
      <h2>Same Day Printing Services</h2>
      <ul>
        <li v-for="(item, index) in sameDayMenus[0].childs" :key="index">
          <NuxtLink :to="item.slug">{{ item.name }}</NuxtLink>
        </li>
      </ul>
    </section>

    <section class="sitemap-section">
      <h2>Static Pages</h2>
      <ul>
        <li v-for="(url, name) in staticPagesByParentCat" :key="name">
          <NuxtLink :to="url">{{ name }}</NuxtLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  titleTemplate: "% :: details",
  layout: "web",
});
const sameDayMenus = ref([
  {
    name: "Same Day Printing",
    slug: "/same-day/shirt-printing-london",
    isShow: false,
    childs: [
      { name: "Same Day T-Shirt Printing", slug: "/same-day/shirt-printing-london" },
      { name: "Same Day Cotton T-Shirt Printing", slug: "/same-day/cotton-t-shirt-printing-london" },
      { name: "Same Day Football Team T-Shirt Printing", slug: "/same-day/football-shirt-printing-london" },
      { name: "Same Day Promotion Shirt Printing", slug: "/same-day/promotion-shirts-printing-london" },
      { name: "Same Day Promotion T-Shirt Printing", slug: "/same-day/promotion-t-shirts-printing-london" },
      { name: "Same Day Sports Shirt Printing", slug: "/same-day/sports-shirt-printing-london" },
      { name: "Same Day University and School Shirt Printing", slug: "/same-day/university-shirt-printing-london" },
      { name: "Same Day University and School T-Shirt Printing", slug: "/same-day/university-t-shirt-printing-london" },
      { name: "Same Day Hoodie Printing", slug: "/same-day/hoodie-printing-london" },
      { name: "Same Day Sweat Shirt Printing", slug: "/same-day/sweatshirt-printing-london" },
      { name: "Same Day Cap Printing", slug: "/same-day/cap-printing-london" },
      { name: "Same Day Tote bag Printing", slug: "/same-day/tote-bag-printing-london" },
      { name: "Same Day Apron Printing", slug: "/same-day/apron-printing-london" },
      { name: "Same Day Fleeces & Knits Printing", slug: "/same-day/fleeces-and-knits-printing-london" },
      { name: "Same Day Active Wear Printing", slug: "/same-day/active-wear-printing-london" },
      { name: "Same Day Dress Shirt Printing", slug: "/same-day/dress-shirt-printing-london" },
    ],
  }
]);

const staticPagesByParentCat = {
  'Men': '/same-day/category/men',
  'Flyers & Leaflets Printing': '/advertise/flyer_and_leaflet',
  'Folded Leaflets & Menu Printing': '/advertise/folded_flyer_and_menu',
  'Tickets & Vouchers Printing': '/advertise/ticket_and_voucher',
  'Business Cards Printing': '/advertise/business_card',
  'Banners Printing': '/advertise/advertising_banner',
  'Sign Printing': '/advertise/sign_print',
  'Sticker Printing': '/advertise/sticker_print',
  'Mug Printing': '/advertise/mug_print',
  'Active wear': '/cloth/active_wear',
  'Apron': '/cloth/apron',
  'Tote bag': '/cloth/tote_bag',
  'Cap': '/cloth/cap',
  'Dress shirt': '/cloth/dress_shirt',
  'Hoodies': '/cloth/hoodie',
  'Organic Cotton T-shirt': '/cloth/cotton_t_shirt',
  'Polo Shirts': '/cloth/polo_shirt',
  'School and University shirts': '/cloth/university_shirt',
  'Basketball Team Tank': '/cloth/basketball_shirt',
  'Football Team T-Shirts': '/cloth/football_shirt',
  'Sports T-Shirts': '/cloth/sports_shirt',
  'Promotion Shirts': '/cloth/promotion_shirts',
  'Promotion T-Shirts': '/cloth/promotion_t_shirts',
  'School and University T-shirts': '/cloth/university_t_shirt',
  'Sweatshirt': '/cloth/sweatshirt'
};
</script>

<style scoped>
.sitemap-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
}

.sitemap-section {
  margin-bottom: 3rem;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #444;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}

ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

li {
  margin-bottom: 0.5rem;
}

a {
  color: #0066cc;
  text-decoration: none;
  transition: color 0.2s;
}

a:hover {
  color: #004499;
  text-decoration: underline;
}

@media (max-width: 768px) {
  ul {
    grid-template-columns: 1fr;
  }
}
</style>