<script setup>
let homeStore = inject("homeStore");
let cartStore = inject("cartStore");
homeStore.getTypewiseCategoryList();

let search = ref("");
let isFocused = ref(false);

let dbounceSearch = H.debounce(homeStore.searchProduct, 300 );

watch(search, (a) => {
  if(a) a = String(a).trimStart().trimEnd()
  dbounceSearch(a || null);
  if (!a) {
    homeStore.searchedProducts = [];
  }
});

onMounted(() => {
  homeStore.getAdditionalData();
});
 

let { staticPagesByParentCat } = globalData;
</script>

<template>
  <header class="teeprint-header-wrap teeprint-header">
    <div class="teeprint-middle-header">
      <div class="container">
        <div class="row">
          <div class="teeprint-logo">
            <div class="teeprint-logo-area">
              <div class="teeprint-logo-area-inner">
                <div class="teeprint-logo-area-middle">
                  <a href="/">
                    <img
                      src="/img/logo2.png"
                      alt="logo image"
                      style="height: 4.5rem"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="teeprint-header-search">
            <div class="teeprint-header-search-inner">
              <div class="teeprint-category-search">
                <div class="teeprint-category-search-input">
                  <input
                    @focus.stop="isFocused = true"
                    @focusout.stop="H.delay(() => (isFocused = false), 100)"
                    v-model.trim="search"
                    type="search"
                    placeholder="Search For Products"
                  />
                </div>
                <div class="teeprint-category-search-button">
                  <button
                    type="button"
                    class="btn theme-btn teeprint-category-search-btn"
                  >
                    <i class="lni lni-search-alt"></i>
                  </button>
                </div>
              </div>
              <template v-if="isFocused">
                <template v-if="H.isPendingAnyApi('Frontend:searchProduct')">
                  <div role="listbox" class="dropdown-menu show">
                    <div role="option" class="dropdown-item">
                      <div v-for="x in 3" class="inner-serch d-flex mb-1">
                        <shimmer-effect
                          width="25px"
                          height="26px"
                          class="me-2"
                        ></shimmer-effect>
                        <shimmer-effect
                          width="100%"
                          height="26px"
                        ></shimmer-effect>
                      </div>
                    </div>
                  </div>
                </template>
                <template
                  v-else-if="search && homeStore.searchedProducts?.length"
                >
                  <template
                    v-for="(product, i) in homeStore.searchedProducts"
                    :key="i"
                  >
                    <div role="listbox" class="dropdown-menu show">
                      <div role="option" class="dropdown-item">
                        <nuxt-link :to="`/product/${product.slug}`" class="text-black" @click="search=null">
                          <div class="inner-serch cp">
                              <img
                                :src="
                                  product.thumbnail_image_url ||
                                  `/img/placeholder-image.jpg`
                                "
                                @mouseover="log(homeStore.searchedProducts)"
                              />
                              {{ product.name }}

                            </div>
                        </nuxt-link>
                      </div>
                    </div>
                  </template>
                </template>
              </template>
            </div>
          </div>
          <div class="teeprint-header-usercart">
            <div class="teeprint-desktop-contact-bar">
              <div class="teeprint-icon">
                <i class="las la-envelope"></i>
              </div>
              <div class="teeprint-text-body">
                <span class="teeprint-title">Email Us</span>
                <a href="mailto:contact@teeprint.com" class="teeprint-number"
                  >contact@teeprint.com</a
                >
              </div>
            </div>
          </div>
          <div class="teeprint-header-usercart">
            <div class="teeprint-desktop-contact-bar">
              <div class="teeprint-icon">
                <i class="lni lni-phone"></i>
              </div>
              <div class="teeprint-text-body">
                <span class="teeprint-title">Call Us Now</span>
                <a href="tel:+123 5678 890" class="teeprint-number"
                  >+44 7888 185120</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- header menu bar  -->
    <div class="teeprint-menu-header">
      <div class="container">
        <div class="row">
          <div class="teeprint-logo">
            <div class="teeprint-logo-area">
              <div class="teeprint-logo-area-inner">
                <div class="teeprint-logo-area-middle">
                  <a href="/">
                    <img src="/img/logo.jpg" alt="logo image" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="teeprint-menu-area">
            <div class="teeprint-menu">
              <ul class="teeprint-mobile-device">
                <li>
                  <a class="teeprint-mobile-menubar">
                    <i class="bx bx-menu"></i>
                  </a>
                </li>
                <li>
                  <nuxt-link
                    :to="{ name: 'quote' }"
                    class="teeprint-button teeprint-theme-btn quote-btn zoomInOut"
                    >Instant Quote <i class="la la-arrow-right ml-2"></i
                  ></nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/cart" class="p-1 text-white size-1p4" id="header_cart">
                    <i class="bx bx-shopping-bag fs-3"></i>
                  </nuxt-link>
                </li>
              </ul>

              <!-- Main menu  -->
              <nav class="teeprint-nav-manu">
                <ul>
                  <li>
                    <a
                      href="/"
                      :class="{
                        'teeprint-active-menu': useRoute().name === 'home',
                      }"
                      >Home</a
                    >
                  </li>
                  <template v-if="homeStore.menus?.length">
                    <template
                      v-for="(item, index) in homeStore.menus"
                      :key="index"
                    >
                      <li>
                        <nuxt-link :to="`/shop`">
                          {{ item?.name }}
                          <i
                            class="lni lni-chevron-down"
                            v-if="item?.categories?.length"
                          ></i
                        ></nuxt-link>
                        <template v-if="item?.categories?.length">
                          <div class="teeprint-submenu">
                            <ul>
                              <template
                                v-for="(child2, index2) in item?.categories"
                                :key="index2"
                              >
                                <li>
                                  <nuxt-link
                                    :to="
                                      staticPagesByParentCat?.[child2.name] ||
                                      `/products-by-category/${
                                        child2?.slug || 'not-found'
                                      }`
                                    "
                                  >
                                    {{ child2.name }}
                                    <i
                                      v-if="child2.children?.length"
                                      class="lni lni-chevron-right"
                                    ></i
                                  ></nuxt-link>
                                  <template v-if="child2.children?.length">
                                    <div class="teeprint-sub-submenu">
                                      <ul>
                                        <template
                                          v-for="(
                                            child3, index3
                                          ) in child2.children"
                                          :key="index3"
                                        >
                                          <li>
                                            <nuxt-link
                                              :to="`/products-by-category/${
                                                child3?.slug || 'not-found'
                                              }`"
                                              >{{ child3.name }}</nuxt-link
                                            >
                                          </li>
                                        </template>
                                      </ul>
                                    </div>
                                  </template>
                                </li>
                              </template>
                            </ul>
                          </div>
                        </template>
                      </li>
                    </template>
                  </template>

                  <nav class="teeprint-nav-manu">
                    <ul>
                      <li>
                        <nuxt-link to="#">
                          Same Day Delivery <i class="lni lni-chevron-down"></i>
                        </nuxt-link>
                        <div class="teeprint-submenu">
                          <ul>
                            <li>
                              <nuxt-link to="/same-day-delivery/shirt">
                                Same Day Shirt Printing
                              </nuxt-link>
                            </li>
                            <li>
                              <nuxt-link to="/same-day-delivery/polo_shirt_printing">
                                Same Day Polo Shirt Printing
                              </nuxt-link>
                            </li>
                            <li>
                              <nuxt-link to="/same-day-delivery/hoodie">
                                Same Day Hoodie Printing
                              </nuxt-link>
                            </li>
                            <li>
                              <nuxt-link to="/same-day-delivery/cap">
                                Same Day Cap Printing
                              </nuxt-link>
                            </li>
                            <li>
                              <nuxt-link to="/same-day-delivery/tote_bag">
                                Same Day Tote bag Printing
                              </nuxt-link>
                            </li>
                            <li>
                              <nuxt-link to="/same-day-delivery/apron">
                                Same Day Tote Apron Printing
                              </nuxt-link>
                            </li>
                            <li>
                              <nuxt-link to="/same-day-delivery/fleeces_and_knits">
                                Same Day Fleeces & Knits Printing
                              </nuxt-link>
                            </li>
                            <li>
                              <nuxt-link to="/same-day-delivery/active_wear">
                                Same Day Active Wear Printing
                              </nuxt-link>
                            </li>
                            <li>
                              <nuxt-link to="/same-day-delivery/dress_shirt">
                                Same Day Dress Shirt Printing
                              </nuxt-link>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </nav>

                  <li>
                    <a href="#">About us </a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="quote-btn-area">
            <nuxt-link
              :to="{ name: 'quote' }"
              class="teeprint-button teeprint-theme-btn quote-btn zoomInOut"
            >
              <span class=""> Instant Quote </span>
              <i class="la la-arrow-right ml-2"></i>
            </nuxt-link>
            <nuxt-link to="/cart"
              class="p-1 text-white size-1p4 relative"
              id="header_cart"
            >
              <i class="bx bx-shopping-bag fs-3"></i>
              <span class="badge badge-primary shopping-cart-badge"> {{cartStore.totalItems}} </span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
