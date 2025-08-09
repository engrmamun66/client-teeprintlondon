<template>
  <!-- Footer  -->
  <footer class="teeprint-footer">
    <div class="teeprint-top-footer">
      <div class="container">
        <div class="row">
          <!-- Main Sitemap Section -->
          <div class="col-lg-12">
            <div class="footer-sitemap-grid">
              <!-- Clothing Categories -->
              <div class="sitemap-section">
                <h5>Clothing</h5>
                <div class="sitemap-columns">
                  <template
                    v-for="(type, typeIndex) in homeStore.siteMapMenus"
                    :key="typeIndex"
                  >
                    <template
                      v-if="type.categories && type.categories.length > 0"
                    >
                      <div
                        class="sitemap-column"
                        v-for="colIndex in Math.ceil(
                          type.categories.length / 5
                        )"
                        :key="'col-' + colIndex"
                      >
                        <div
                          class="category-group"
                          v-for="(
                            category, categoryIndex
                          ) in type.categories.slice(
                            (colIndex - 1) * 5,
                            colIndex * 5
                          )"
                          :key="categoryIndex"
                        >
                          <NuxtLink
                            :to="`/products-by-category/${category.slug}`"
                            class="parent-category"
                          >
                            {{ category.name }}
                          </NuxtLink>
                          <ul
                            v-if="
                              category.children && category.children.length > 0
                            "
                            class="subcategories"
                          >
                            <li
                              v-for="(child, childIndex) in category.children"
                              :key="childIndex"
                            >
                              <NuxtLink
                                :to="`/products-by-category/${child.slug}`"
                              >
                                {{ child.name }}
                              </NuxtLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </template>
                  </template>
                </div>
              </div>

              <div class="sitemap-section">
                <h5>Same Day Delivery</h5>
                <ul class="subcategories">
                  <li
                    v-for="(item, index) in sameDayMenus[0].childs"
                    :key="index"
                  >
                    <NuxtLink :to="item.slug">{{ item.name }}</NuxtLink>
                  </li>
                </ul>
              </div>

              <!-- Advertising Products -->
              <div class="sitemap-section">
                <h5>Advertising Products</h5>
                <ul class="subcategories">
                  <li v-for="(url, name) in advertisingItems" :key="name">
                    <NuxtLink :to="url">{{ name }}</NuxtLink>
                  </li>
                </ul>
              </div>

              <!-- Custom Clothing Products -->
              <div class="sitemap-section">
                <h5>Custom Clothing Products</h5>
                <ul class="subcategories">
                  <li v-for="(url, name) in clothingItems" :key="name">
                    <NuxtLink :to="url">{{ name }}</NuxtLink>
                  </li>
                </ul>
              </div>
              <div class="sitemap-section">
                <NuxtLink to="/sitemap"><h5>Sitemap</h5></NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <!-- Contact and Info Section -->
        <div class="row footer-main-content">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="teeprint-footer-links">
              <h4>Get in touch</h4>
              <ul>
                <li>TeePrint London</li>
                <li>
                  38 Worland Road,<br />
                  London, England,<br />
                  E15 4EY
                </li>
                <li>
                  <i class="la la-envelope"></i>
                  <a
                    href="mailto:support@teeprintlondon.co.uk"
                    class="teeprint-number"
                  >
                    support@teeprintlondon.co.uk
                  </a>
                </li>
                <li><i class="la la-phone"></i> <b>+44 7888 185120</b></li>
              </ul>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 col-sm-6">
            <div class="teeprint-footer-links">
              <h4>Discover</h4>
              <ul>
                <li><nuxt-link to="/question">FAQ's</nuxt-link></li>
                <li><nuxt-link to="/contact">Contact Us</nuxt-link></li>
                <li><nuxt-link to="/privacy">Privacy Policy</nuxt-link></li>
                <li>
                  <nuxt-link to="/refund">Refund and Returns Policy</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/about-us">About Us</nuxt-link>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="teeprint-footer-location">
              <h4>Connect with us</h4>
              <ul class="teeprint-social-icon">
                <li>
                  <a
                    href="https://www.facebook.com/teeprintlondon38"
                    class="teeprint-facebook-onlyicon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="la la-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="teeprint-instagram-onlyicon"
                    ><i class="la la-instagram"></i
                  ></a>
                </li>
                <li>
                  <a href="#" class="teeprint-twitter-onlyicon"
                    ><i class="la la-twitter"></i
                  ></a>
                </li>
              </ul>
              <h4>Payment</h4>
              <img
                src="/img/card_image1.jpg"
                alt="Payment Methods"
                class="payment-methods"
              />
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1240.7230805709628!2d0.00641884389052932!3d51.54171735688286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603218eac813d%3A0x48df07ec18e11c6c!2sStirling%20Apparel%20Ltd!5e0!3m2!1sen!2sbd!4v1741951227623!5m2!1sen!2sbd"
              height="200"
              class="footer-map"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="teeprint-bottom-footer">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-4 col-12 order-md-1 order-1 mt-3 mt-md-0">
            <div
              class="teeprint-bottom-footer-content text-center text-md-start"
            >
              <p class="mb-0">
                <strong>Stirling Apparel Ltd</strong> Trading as TeePrint
                London<br />
                Reg No: 12317296 (England & Wales)
              </p>
            </div>
          </div>
          <div class="col-md-4 col-12 order-md-2 order-3 mt-3 mt-md-0">
            <div class="teeprint-bottom-footer-content text-center">
              <p class="mb-0">©2025 TeePrint London. All rights reserved.</p>
            </div>
          </div>
          <div class="col-md-4 col-12 order-md-3 order-2 mt-3 mt-md-0">
            <div class="teeprint-bottom-footer-content text-center text-md-end">
              <p class="mb-0">
                Designed and Developed by
                <a
                  href="https://neazmorshedportfolio.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="developer-link"
                >
                  Neaz Morshed
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useHomeStore } from "~/store/web/Home";
const homeStore = useHomeStore();

const sameDayMenus = ref([
  {
    name: "Same Day Printing",
    slug: "/same-day/shirt-printing-london",
    isShow: false,
    childs: [
      {
        name: "Same Day T-Shirt Printing",
        slug: "/same-day/shirt-printing-london",
      },
      {
        name: "Same Day Cotton T-Shirt Printing",
        slug: "/same-day/cotton-t-shirt-printing-london",
      },
      {
        name: "Same Day Football Team T-Shirt Printing",
        slug: "/same-day/football-shirt-printing-london",
      },
      {
        name: "Same Day Promotion Shirt Printing",
        slug: "/same-day/promotion-shirts-printing-london",
      },
      {
        name: "Same Day Promotion T-Shirt Printing",
        slug: "/same-day/promotion-t-shirts-printing-london",
      },
      {
        name: "Same Day Sports Shirt Printing",
        slug: "/same-day/sports-shirt-printing-london",
      },
      {
        name: "Same Day University and School Shirt Printing",
        slug: "/same-day/university-shirt-printing-london",
      },
      {
        name: "Same Day University and School T-Shirt Printing",
        slug: "/same-day/university-t-shirt-printing-london",
      },
      {
        name: "Same Day Hoodie Printing",
        slug: "/same-day/hoodie-printing-london",
      },
      {
        name: "Same Day Sweat Shirt Printing",
        slug: "/same-day/sweatshirt-printing-london",
      },
      { name: "Same Day Cap Printing", slug: "/same-day/cap-printing-london" },
      {
        name: "Same Day Tote bag Printing",
        slug: "/same-day/tote-bag-printing-london",
      },
      {
        name: "Same Day Apron Printing",
        slug: "/same-day/apron-printing-london",
      },
      {
        name: "Same Day Fleeces & Knits Printing",
        slug: "/same-day/fleeces-and-knits-printing-london",
      },
      {
        name: "Same Day Active Wear Printing",
        slug: "/same-day/active-wear-printing-london",
      },
      {
        name: "Same Day Dress Shirt Printing",
        slug: "/same-day/dress-shirt-printing-london",
      },
    ],
  },
]);

const advertisingItems = {
  "Flyers & Leaflets Printing": "/advertise/flyer_and_leaflet",
  "Folded Leaflets & Menu Printing": "/advertise/folded_flyer_and_menu",
  "Tickets & Vouchers Printing": "/advertise/ticket_and_voucher",
  "Business Cards Printing": "/advertise/business_card",
  "Banners Printing": "/advertise/advertising_banner",
  "Sign Printing": "/advertise/sign_print",
  "Sticker Printing": "/advertise/sticker_print",
  "Mug Printing": "/advertise/mug_print",
};

const clothingItems = {
  "Active wear": "/cloth/active_wear",
  Apron: "/cloth/apron",
  "Tote bag": "/cloth/tote_bag",
  Cap: "/cloth/cap",
  "Dress shirt": "/cloth/dress_shirt",
  Hoodies: "/cloth/hoodie",
  "Organic Cotton T-shirt": "/cloth/cotton_t_shirt",
  "Polo Shirts": "/cloth/polo_shirt",
  "School and University shirts": "/cloth/university_shirt",
  "Basketball Team Tank": "/cloth/basketball_shirt",
  "Football Team T-Shirts": "/cloth/football_shirt",
  "Sports T-Shirts": "/cloth/sports_shirt",
  "Promotion Shirts": "/cloth/promotion_shirts",
  "Promotion T-Shirts": "/cloth/promotion_t_shirts",
  "School and University T-shirts": "/cloth/university_t_shirt",
  Sweatshirt: "/cloth/sweatshirt",
};

onMounted(async () => {
  await homeStore.getTypewiseCategoryList();
});
</script>

<style scoped>
/* Base Footer Styles */
.teeprint-footer {
  background-color: #080808;
  color: #ecf0f1;
  padding-top: 40px;
}

.teeprint-top-footer {
  padding-bottom: 30px;
}

.teeprint-bottom-footer {
  background-color: #1a252f;
  padding: 20px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* Sitemap Grid Layout */
.footer-sitemap-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.sitemap-section {
  margin-bottom: 20px;
}

.sitemap-section h5 {
  color: #fff;
  font-size: 18px;
  margin-bottom: 15px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* Sitemap Columns */
.sitemap-columns {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.sitemap-column {
  flex: 1;
  min-width: 150px;
}

.category-group {
  margin-bottom: 15px;
}

.parent-category {
  display: block;
  color: #3498db;
  font-weight: 500;
  margin-bottom: 5px;
  text-decoration: none;
  transition: color 0.3s;
}

.parent-category:hover {
  color: #2980b9;
  text-decoration: underline;
}

.subcategories {
  list-style: none;
  padding-left: 10px;
  margin: 5px 0 0 0;
}

.subcategories li {
  margin-bottom: 5px;
}

.subcategories a {
  color: #bdc3c7;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s;
  display: block;
  padding: 3px 0;
}

.subcategories a:hover {
  color: #3498db;
  text-decoration: underline;
}

/* Contact Section */
.teeprint-footer-links h4 {
  color: #fff;
  font-size: 18px;
  margin-bottom: 20px;
}

.teeprint-footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.teeprint-footer-links ul li {
  margin-bottom: 10px;
  color: #bdc3c7;
  line-height: 1.5;
}

.teeprint-footer-links ul li a {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s;
}

.teeprint-footer-links ul li a:hover {
  color: #3498db;
}

.teeprint-number {
  color: #bdc3c7;
  text-decoration: none;
}

.teeprint-number:hover {
  color: #3498db;
}

/* Social Icons */
.teeprint-social-icon {
  display: flex;
  gap: 15px;
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
}

.teeprint-social-icon a {
  color: #fff;
  font-size: 20px;
  transition: color 0.3s;
}

.teeprint-social-icon a:hover {
  color: #3498db;
}

/* Payment Methods */
.payment-methods {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}

/* Map */
.footer-map {
  width: 100%;
  border: 0;
  border-radius: 8px;
}

/* Bottom Footer */
.developer-link {
  color: #3498db;
  text-decoration: none;
  transition: color 0.3s;
}

.developer-link:hover {
  color: #2980b9;
  text-decoration: underline;
}

/* Responsive Adjustments */
@media (max-width: 992px) {
  .footer-sitemap-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-main-content {
    gap: 30px 0;
  }
}

@media (max-width: 768px) {
  .footer-sitemap-grid {
    grid-template-columns: 1fr;
  }

  .sitemap-columns {
    flex-direction: column;
  }

  .sitemap-column {
    min-width: 100%;
  }

  .teeprint-footer-links,
  .teeprint-footer-location {
    margin-bottom: 30px;
  }
}

@media (max-width: 576px) {
  .teeprint-bottom-footer-content {
    text-align: center !important;
  }

  .teeprint-bottom-footer .row > div {
    order: initial !important;
  }
}
</style>
