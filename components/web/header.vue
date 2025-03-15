<script setup>
let homeStore = inject("homeStore"); 
homeStore.getTypewiseCategoryList();

let search = ref("");
let isFocused = ref(false);

let dbounceSearch = H.debounce(homeStore.searchProduct, 300 );
let dbounceGetProducts = H.debounce(homeStore.getProducts, 300 );

watch(search, (a) => {
  if(a) a = String(a).trimStart().trimEnd()
  dbounceSearch(a || null);
  if (!a) {
    homeStore.searchedProducts = [];
  }
});

 function getProductByEnterOrSerchClick(){
  homeStore.payload.search = a
  dbounceGetProducts()
  H.delay(() => homeStore.payload.search = null)
  navigateTo({path: '/shop'})
 }


 let sameDayMenus = ref([
  {
    name: 'Same Day Printing',
    slug: '/same-day-delivery/shirt',
    isShow: false,
    childs: [
    {
        name: 'Same Day Shirt Printing',
        slug: '/same-day-delivery/shirt',
      },
      {
        name: 'Same Day Polo Shirt Printing',
        slug: '/same-day-delivery/polo_shirt_printing',
      },
      {
        name: 'Same Day Hoodie Printing',
        slug: '/same-day-delivery/hoodie',
      },
      {
        name: 'Same Day Cap Printing',
        slug: '/same-day-delivery/cap',
      },
      {
        name: 'Same Day Tote bag Printing',
        slug: '/same-day-delivery/tote_bag',
      },
      {
        name: 'Same Day Tote Apron Printing',
        slug: '/same-day-delivery/apron',
      },
      {
        name: 'Same Day Fleeces & Knits Printing',
        slug: '/same-day-delivery/fleeces_and_knits',
      },
      {
        name: 'Same Day Active Wear Printing',
        slug: '/same-day-delivery/active_wear',
      },
      {
        name: 'Same Day Dress Shirt Printing',
        slug: '/same-day-delivery/dress_shirt',
      },
    ]
  }
 ])

 function hideAllFirst(_for=1){
  try {
    if(_for === 1){
      H.toggleLoopItem(homeStore.menus, -1, 'isShow')
      homeStore.menus.forEach(item => {
        item['isShow'] = false
        if(!item?.categories || !Array.isArray(item?.categories)) item.categories = []
        (item?.categories || []).forEach(child2 => {
          child2['isShow'] = false
        })
      }) 
    } 
    else if(_for === 2) {
      sameDayMenus.value.forEach(item => {
        item['isShow'] = false
        item.childs.forEach(child => child['isShow'] = false)
      }) 
    } 

  } catch (error) {
    console.log('hideAllFirst:error', error, {_for});
    
  }
 }


 function onclickMenuItem(event, n, index){
  event.stopImmediatePropagation() 
  hideAllFirst(n); 
  if(n == 2){
    H.toggleLoopItem(homeStore.menus, [-1, index], 'isShow')
  } else {
    H.toggleLoopItem(sameDayMenus.value, [-1, index], 'isShow')
  }
 }

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
                      src="/img/logon_fina.png"
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
                    @keyup.enter="getProductByEnterOrSerchClick()"
                    v-model.trim="search"
                    type="search"
                    placeholder="Search For Products"
                  />
                </div>
                <div class="teeprint-category-search-button">
                  <button @click.stop="getProductByEnterOrSerchClick()"
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
          <!-- Mobie view  -->
          <div class="teeprint-menu-area">
            <div class="teeprint-menu">
              <ul class="teeprint-mobile-device">
                <li>
                  <a class="teeprint-mobile-menubar">
                    <i class="bx bx-menu"></i>
                  </a>
                </li>
                
                
                <!-- <li class="me-2">
                  <nuxt-link class="p-1 text-white size-1p4">
                    <i class="bx bx-search"></i>
                  </nuxt-link>
                </li> -->
                
                <li>
                  <nuxt-link
                    :to="{ name: 'quote' }" 
                    class="teeprint-button teeprint-theme-btn quote-btn zoomInOut ms-3"
                    >Instant Quote <i class="la la-arrow-right ml-2"></i
                  ></nuxt-link>
                </li> 
                
                <!-- <li>
                  <nuxt-link to="/cart" class="p-1 text-white size-1p4" id="header_cart">
                    <i class="bx bx-shopping-bag"></i>
                  </nuxt-link>
                </li> -->
                
                
              </ul>

              <!-- Main menu  -->
              <nav class="teeprint-nav-manu m-teeprint-navemenu-active" @click.stop="false">
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
                    <template v-for="(item, index) in homeStore.menus" :key="index" > 
                      <li @click="onclickMenuItem($event, 2, index)" @mouseenter="onclickMenuItem($event, 2, index)">
                        <nuxt-link :to="`/shop`">
                          {{ item?.name }}
                          <i
                            class="lni lni-chevron-down" 
                            :_class="{'lni-chevron-down': !item?.isShow, 'lni-chevron-right': item?.isShow, 'teeprint-active-menu': item?.isShow}"
                            v-if="item?.categories?.length"
                          ></i
                        ></nuxt-link>
                        <template v-if="item?.categories?.length && item?.isShow === true">
                          <div class="teeprint-submenu m-teeprint-submenu-active">
                            <ul @click.stop="false">
                              <template v-for="(child2, index2) in item?.categories" :key="index2" >
                                <li @click.stop="hideAllFirst(2);  H.toggleLoopItem(item?.categories, [-1, index2], 'isShow')" @mouseover="hideAllFirst(2);  H.toggleLoopItem(item?.categories, [-1, index2], 'isShow')">
                                  <nuxt-link :to="staticPagesByParentCat?.[child2.name] || `/products-by-category/${ child2?.slug || 'not-found' }`" >
                                    {{ child2.name }}
                                    <i
                                      v-if="child2.children?.length"
                                      class="lni lni-chevron-down"
                                      :class="{'lni-chevron-down': child2?.isShow, 'lni-chevron-right': !child2?.isShow, 'teeprint-active-menu': child2?.isShow}"
                                    ></i
                                  ></nuxt-link>
                                  <template v-if="child2.children?.length && child2?.isShow === true">
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

                  <template v-for="(item, index) in sameDayMenus">
                    <li @click="onclickMenuItem($event, 1, index)" @mouseenter="onclickMenuItem($event, 1, index)">
                      <nuxt-link to="#">
                        {{ item.name }}<i class="lni lni-chevron-down teeprint-active-menu"></i>
                      </nuxt-link>
                      <div v-if="item?.isShow" class="teeprint-submenu">
                        <ul >
                          <template v-for="(child, i) in item.childs">
                            <li>
                              <nuxt-link :to="child.slug">
                                {{ child.name }}
                              </nuxt-link>
                            </li>
                          </template> 
                        </ul>
                      </div>
                    </li> 
                  </template>

                  <li>
                    <a href="#">Design and services</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
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
          
          
          <!-- Desktop quote button -->
          <div class="quote-btn-area">
            <nuxt-link
              :to="{ name: 'quote' }"
              class="teeprint-button teeprint-theme-btn quote-btn zoomInOut"
            >
              <span class=""> Instant Quote </span>
              <i class="la la-arrow-right ml-2"></i>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
