<script setup> 

let homeStore = inject('homeStore')
homeStore.getTypewiseCategoryList()

let search = ref('')
let isFocused = ref(false) 

let dbounceSearch = H.debounce(String(homeStore.searchProduct).trimStart().trimEnd(), 300);


watch(search, (a)=>{ 
    dbounceSearch(a || null)
    if(!a){ 
        homeStore.searchedProducts = []
    }
}) 

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
                                    <nuxt-link :to="{name: 'home'}">
                                        <img src="/img/logo2.png" alt="logo image" style="height: 4.5rem;" />
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="teeprint-header-search">
                        <div class="teeprint-header-search-inner">
                            <div class="teeprint-category-search">
                                <div class="teeprint-category-search-input">
                                    <input @focus.stop="isFocused=true" @focusout.stop="H.delay(()=>isFocused=false, 100)" v-model.trim="search" type="search" placeholder="Search For Products" />
                                </div>
                                <div class="teeprint-category-search-button">
                                    <button type="button" class="btn theme-btn teeprint-category-search-btn">
                                        <i class="lni lni-search-alt"></i>
                                    </button>
                                </div>
                            </div>
                            <template v-if="isFocused">
                                <template v-if="H.isPendingAnyApi('Frontend:searchProduct')">
                                    <div role="listbox" class="dropdown-menu show">
                                        <div role="option" class="dropdown-item">
                                            <div v-for="x in 3" class="inner-serch d-flex mb-1">
                                                <shimmer-effect width="25px" height="26px" class="me-2"></shimmer-effect> 
                                                <shimmer-effect width="100%" height="26px"></shimmer-effect> 
                                            </div> 
                                        </div> 
                                    </div>
                                </template>
                                <template v-else-if="search && homeStore.searchedProducts?.length">
                                    <template v-for="(product, i) in homeStore.searchedProducts" :key="i">
                                        <div role="listbox" class="dropdown-menu show">
                                            <div role="option" class="dropdown-item">
                                                <div class="inner-serch cp">
                                                    <img :src="product.thumbnail_image_url || `/img/placeholder-image.jpg`" @mouseover="log(homeStore.searchedProducts)"> {{ product.name }}
                                                </div>
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
                                <a href="mailto:contact@teeprint.com" class="teeprint-number">contact@teeprint.com</a>
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
                                <a href="tel:+123 5678 890" class="teeprint-number">+44 7888 185120</a>
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
                                        <i class='bx bx-menu'></i>
                                    </a>
                                </li>
                                <li>
                                    <nuxt-link :to="{name: 'quote'}" class="teeprint-button teeprint-theme-btn quote-btn zoomInOut">Instant Quote <i class="la la-arrow-right ml-2"></i></nuxt-link>
                                </li>
                                <!-- <li>
                                    <a class="teeprint-search-bar">
                                        <i class="bx bx-search"></i>
                                    </a>
                                </li>
                                <li>
                                    <a class="teeprint-customer-login">
                                        <i class='bx bx-user'></i>
                                    </a>
                                </li>
                                <li>
                                    <a class="teeprint-cart-bar">
                                        <i class="bx bx-shopping-bag"></i>
                                    </a>
                                </li> -->
                                <li>
                                    <a href="#" class="p-1 text-white size-1p4" id="header_cart"> 
                                        <i class="bx bx-shopping-bag fs-3"></i>
                                        
                                    </a>
                                </li>
                            </ul>

                            <!-- Main menu  -->
                            <nav class="teeprint-nav-manu">
                                <ul>
                                    
                                    <li>
                                        <a href="/" :class="{'teeprint-active-menu': useRoute().name=== 'home'}">Home</a>
                                    </li> 
                                    <template v-if="homeStore.menus?.length">
                                        <template v-for="(item, index) in homeStore.menus" :key="index">
                                            <li>
                                                <nuxt-link :to="`/shop`"> {{ item?.name }} <i class="lni lni-chevron-down" v-if="item?.categories?.length"></i></nuxt-link>
                                                <template v-if="item?.categories?.length">
                                                    <div class="teeprint-submenu">
                                                        <ul>
                                                            <template v-for="(child2, index2) in item?.categories" :key="index2">
                                                                <li>
                                                                    <nuxt-link :to="`/products-by-category/${child2?.slug || 'not-found'}`"> {{ child2.name }} <i v-if="child2.children?.length" class="lni lni-chevron-right"></i></nuxt-link>
                                                                    <template v-if="child2.children?.length">
                                                                        <div class="teeprint-sub-submenu">
                                                                            <ul>
                                                                                <template v-for="(child3, index3) in child2.children" :key="index3">
                                                                                    <li><nuxt-link :to="`/products-by-category/${child3?.slug || 'not-found'}`">{{child3.name}}</nuxt-link></li>
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
                        <nuxt-link :to="{name: 'quote'}" class="teeprint-button teeprint-theme-btn quote-btn zoomInOut">
                            <span class="">
                                Instant Quote 
                            </span>
                            <i class="la la-arrow-right ml-2"></i>
                        </nuxt-link>
                        <a href="#" class="p-1 text-white size-1p4 relative" id="header_cart"> 
                            <i class="bx bx-shopping-bag fs-3"></i>
                            <span class="badge badge-primary shopping-cart-badge">
                                0
                            </span> 
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>