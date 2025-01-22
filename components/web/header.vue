<script setup>

let menus = ref([
    {
        title: 'Home',
        to: {name: 'home'}
    },
    {
        title: 'Popular Products',
        to: {name: 'shop'}
    },
    {
        title: 'Same Day Items',
        to: {name: 'shop'}
    },
    {
        title: 'Categories',
        to: {name: 'shop'}
    },
    {
        title: 'About Us',
        to: {name: 'quote'}
    },
    {
        title: 'Contact Us',
        to: {name: 'quote'}
    },
])

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
                                    <input type="search" placeholder="Search For Products" />
                                </div>
                                <div class="teeprint-category-search-button">
                                    <button type="button" class="btn theme-btn teeprint-category-search-btn">
                                        <i class="lni lni-search-alt"></i>
                                    </button>
                                </div>
                            </div>
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
                                    <a href="#">
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
                                    <a href="#" class="p-1 text-white size-1p4"> <i class="bx bx-shopping-bag fs-3"></i> </a>
                                </li>
                            </ul>

                            <!-- Main menu  -->
                            <nav class="teeprint-nav-manu">
                                <ul>
                                    
                                    <li>
                                        <a href="/" :class="{'teeprint-active-menu': useRoute().name=== 'home'}">Home</a>
                                    </li> 
                                    <li>
                                        <nuxt-link :to="{name: 'shop'}">Popular Products <i class="lni lni-chevron-down"></i></nuxt-link>
                                        <div class="teeprint-submenu">
                                            <ul>
                                                <li>
                                                      <a href="#">T-Shirt <i class="lni lni-chevron-right"></i></a>
                                                        <div class="teeprint-sub-submenu">
                                                            <ul>
                                                                <li><a href="#">Custom T-Shirts</a></li>
                                                                <li><a href="#">Printed T-Shirts</a></li>
                                                                <li><a href="#">Bulk T-Shirt Orders</a></li>
                                                               
                                                            </ul>
                                                        </div>
                                                    </li>

                                                <li><a href="#">Hoodie</a></li>

                                                <li><a href="#">Tote Bag</a></li>
                                                <li><a href="#">Sports</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <nuxt-link :to="{name: 'shop'}" >Same Day Items<i class="lni lni-chevron-down"></i></nuxt-link>
                                        <div class="teeprint-submenu">
                                            <ul>
                                                <li><a href="#">Same Day Garment Printing</a></li>
                                                        <li><a href="#">Same Day Hoodie Printing</a></li>
                                                        <li><a href="#">Same Day Tote Bag Printing</a></li>
                                                        <li><a href="#">Same Day Cap Printing</a></li>
                                                        <li><a href="#">Same Day Document Printing London</a></li>
                                                        <li><a href="#">Same Day Business Card Printing London</a></li>
                                                        <li><a href="#">Same Day Flyer Leaflet Printing London</a></li>
                                                        <li><a href="#">Same Day Poster Printing London</a></li>
                                                        <li><a href="#">Same Day Booklet Brochure Printing London</a></li>
                                                        <li><a href="#">Same Day Banner Printing London</a></li>
                                                        <li><a href="#">Same Day Sticker Printing London</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#">Categories<i class="lni lni-chevron-down"></i></a>
                                        <div class="teeprint-submenu teeprint-sub-largemenu">
                                            <div class="teeprint-submenu-grid">
                                                <div class="teeprint-submenu-grid-box">
                                                    <ul>
                                                        <li><a href="#">Accessories</a></li>
                                                        <li><a href="#">All in Ones &amp; Pyjamas</a></li>
                                                        <li><a href="#">Aprons</a></li>
                                                        <li><a href="#">Baby &amp; Toddler</a></li>
                                                        <li><a href="#">Bags</a></li>
                                                        <li><a href="#">Blankets</a></li>
                                                        <li><a href="#">Chefswear &amp; Catering</a></li>
                                                        <li><a href="#">Children</a></li>
                                                        <li><a href="#">Cleaning</a></li>
                                                    </ul>
                                                </div>
                                                <div class="teeprint-submenu-grid-box">
                                                    <ul>
                                                        <li><a href="#">Accessories</a></li>
                                                        <li><a href="#">All in Ones &amp; Pyjamas</a></li>
                                                        <li><a href="#">Aprons</a></li>
                                                        <li><a href="#">Baby &amp; Toddler</a></li>
                                                        <li><a href="#">Bags</a></li>
                                                        <li><a href="#">Blankets</a></li>
                                                        <li><a href="#">Chefswear &amp; Catering</a></li>
                                                        <li><a href="#">Children</a></li>
                                                        <li><a href="#">Cleaning</a></li>
                                                    </ul>
                                                </div>
                                                <div class="teeprint-submenu-grid-box">
                                                    <ul>
                                                        <li><a href="#">Accessories</a></li>
                                                        <li><a href="#">All in Ones &amp; Pyjamas</a></li>
                                                        <li><a href="#">Aprons</a></li>
                                                        <li><a href="#">Baby &amp; Toddler</a></li>
                                                        <li><a href="#">Bags</a></li>
                                                        <li><a href="#">Blankets</a></li>
                                                        <li><a href="#">Chefswear &amp; Catering</a></li>
                                                        <li><a href="#">Children</a></li>
                                                        <li><a href="#">Cleaning</a></li>
                                                    </ul>
                                                </div>
                                                <div class="teeprint-submenu-grid-box">
                                                    <ul>
                                                        <li><a href="#">Accessories</a></li>
                                                        <li><a href="#">All in Ones &amp; Pyjamas</a></li>
                                                        <li><a href="#">Aprons</a></li>
                                                        <li><a href="#">Baby &amp; Toddler</a></li>
                                                        <li><a href="#">Bags</a></li>
                                                        <li><a href="#">Blankets</a></li>
                                                        <li><a href="#">Chefswear &amp; Catering</a></li>
                                                        <li><a href="#">Children</a></li>
                                                        <li><a href="#">Cleaning</a></li>
                                                    </ul>
                                                </div>
                                                <div class="teeprint-submenu-grid-box">
                                                    <ul>
                                                        <li><a href="#">Accessories</a></li>
                                                        <li><a href="#">All in Ones &amp; Pyjamas</a></li>
                                                        <li><a href="#">Aprons</a></li>
                                                        <li><a href="#">Baby &amp; Toddler</a></li>
                                                        <li><a href="#">Bags</a></li>
                                                        <li><a href="#">Blankets</a></li>
                                                        <li><a href="#">Chefswear &amp; Catering</a></li>
                                                        <li><a href="#">Children</a></li>
                                                        <li><a href="#">Cleaning</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
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
                        <a href="#" class="p-1 text-white size-1p4"> <i class="bx bx-shopping-bag fs-3"></i> </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>