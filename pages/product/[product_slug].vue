<script setup>
import seoMeta from '~/seo-meta.json'
import { ref, computed, inject, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useSeoMeta } from '#imports';

let homeStore = inject('homeStore');
let { product_slug } = useRoute().params;

let isMounted = ref(false);
let imageIndex = ref(0);

let getThumbnailImage = computed(() => {
    return homeStore.product?.images?.[imageIndex.value]?.image_url
})


console.log('product_slug', seoMeta[product_slug]);



onMounted(async () => { 
    await homeStore.getProductDetails(product_slug);

    if (homeStore.product?.images?.length) {
        homeStore.product.images.unshift({
            id: 0,
            selected: true,
            image_url: homeStore.product?.thumbnail_image_url
        }) 
    }
    isMounted.value = true; 
});

definePageMeta({
    titleTemplate: `%s :: Product Details`, 
    name: 'product_details',
    layout: 'web',
});
 
const { seo_title, seo_description, seo_image } = seoMeta?.[product_slug] || {};

// Set SEO meta tags
useSeoMeta({
    title: `${APPNAME} :: ${seo_title}`,
    ogTitle: seo_title,
    description: seo_description,
    ogDescription: seo_description,
    ogImage: seo_image, 
});

// Function to handle adding product to cart
function addToCart() {
    let imgElement = document.querySelector('.teeprint-product-view-image img'); 
    cartAnimation({ element: imgElement }, () => {
        useNuxtApp().$emit('openInPageCart', true);
    });
}
</script>


<template>
    <div>
        <section class="teeprint-product-details-wrapper">
            <div class="container">
                <div class="row">
                    <div class="teeprint-productdetails-body">
                        <div class="teeprint-productdetails-inner">
                            <div class="col-md-6 teeprint-product-leftside">
                                <div class="teeprint-product-details-image">
                                    <div class="teeprint-product-view-image" @click="log(homeStore.product)">
                                        
                                        <img class="teeprint-product-viewimage-active" :src="getThumbnailImage || PLACEHOLDER_IMAGE" alt="Img" />
                                         
                                    </div>
                                    <div class="teeprint-product-multipleimage">
                                        <template v-for="(img, i) in homeStore.product?.images || []" :key="i">
                                            <div class="teeprint-product-thumb-item" :class="{'teeprint-product-thumb-active': img?.selected}">
                                                <img :src="img.image_url" alt="teeprint" @click="imageIndex = i;H.toggleLoopItem(homeStore.product?.images, i, 'selected')" />
                                            </div> 
                                        </template> 
                                    </div>
                                </div>
                            </div>
                        
                            <div class="col-md-6 teeprint-product-rightside">
                                <h5 class="teeprint-product-title">
                                    {{ homeStore.product?.name }}
                                </h5>
                                <div class="d-flex justify-content-start align-items-center mb-3">
                                    <p class="teeprint-product-price m-0 p-0"> 
                                        <!-- <ShimmerEffect v-if="showEffect" width="150px" height="20px" /> -->
                                        <span class="amount">
                                            {{ H.formatPrice(homeStore.product?.sizes?.[0]?.unit_price) }}
                                        </span>  
                                    </p>
                                    <web-discountCard v-if="homeStore.product?.discount" class="ms-4">
                                        {{Number(homeStore.product?.discount).toFixed(0)}}
                                    </web-discountCard>
                                </div>
                                
                                <div class="select-size">
                                    <h5>Select Size</h5>
                                    <ul v-if="homeStore.product?.sizes">
                                        <template v-for="(item, i) in homeStore.product?.sizes" :key="i">
                                            <li>{{ item.name }}</li>

                                        </template>
                                        
                                    </ul>
                                </div>
                                <div class="select-size select-colors">
                                    <h5>Select Color</h5>
                                    <ul v-if="homeStore.product?.colors">
                                        <template v-for="(item, i) in homeStore.product?.colors" :key="i">
                                            <li>{{ item.name }}</li>
                                        </template> 
                                    </ul>
                                </div>
                                <div class="teeprint-quantity">
                                    <div class="teeprint-num-in">
                                        <span class="teeprint-minus dis">-</span>
                                        <input type="text" class="teeprint-in-num" value="1" readonly="true" max="99992" />
                                        <span class="teeprint-plus">+</span>
                                    </div>
                                </div>
                                <div class="product-details-btn">
                                    <a class="teeprint-button teeprint-theme-btn addtocart-btn" @click="addToCart()"><i class="bx bx-shopping-bag"></i> Add to Cart </a>
                                    <nuxt-link :to="{name: 'quote'}" class="teeprint-button detailsquote-btn"> <i class='bx bx-comment'></i> Instant Quote </nuxt-link>
                                </div>
                                <hr class="pd-devided">
                                <span class="product-otherinfo d-flex"> 
                                    <strong>Category:&nbsp;</strong>
                                    <nav aria-label="breadcrumb">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item"><a href="#">{{ homeStore.product?.category?.parent?.name }}</a></li>
                                            <li class="breadcrumb-item active" aria-current="page">{{ homeStore.product?.category?.name }}</li>
                                        </ol>
                                    </nav>
                                </span>
                                <div class="product-details-sortdes">
                                    <h6>Short Description</h6>
                                    <div v-html="homeStore.product.short_description"></div>
                                </div>
                                
                                
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Size</th>
                                            <th>Chest (Round)</th>
                                            <th>Length</th>
                                            <th>Sleeve</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>M</td>
                                            <td>40.5</td>
                                            <td>27.75</td>
                                            <td>24.25</td>
                                        </tr>
                                        <tr>
                                            <td>L</td>
                                            <td>42.5</td>
                                            <td>28.05</td>
                                            <td>24.75</td>
                                        </tr>
                                        <tr>
                                            <td>XL</td>
                                            <td>44.5</td>
                                            <td>29.25</td>
                                            <td>25.25</td>
                                        </tr>
                                        <tr>
                                            <td>2XL</td>
                                            <td>46.5</td>
                                            <td>30</td>
                                            <td>25.75</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row pd-description">
                    <div class="col-md-12">
                        <div class="pd-tab">
                            <ul class="pd-tab_tab-head">
                                <li class="active" rel="pddescription">Description</li>
                                <li rel="pdrelatedproduct">Related Product</li>
                            </ul>
                            <div class="pd-tab_container">
                                <div id="pddescription" class="pd-tab_content">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Size</th>
                                                <th>Chest (Round)</th>
                                                <th>Length</th>
                                                <th>Sleeve</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>M</td>
                                                <td>40.5</td>
                                                <td>27.75</td>
                                                <td>24.25</td>
                                            </tr>
                                            <tr>
                                                <td>L</td>
                                                <td>42.5</td>
                                                <td>28.05</td>
                                                <td>24.75</td>
                                            </tr>
                                            <tr>
                                                <td>XL</td>
                                                <td>44.5</td>
                                                <td>29.25</td>
                                                <td>25.25</td>
                                            </tr>
                                            <tr>
                                                <td>2XL</td>
                                                <td>46.5</td>
                                                <td>30</td>
                                                <td>25.75</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    
                                </div>
                                <div id="pdrelatedproduct" class="pd-tab_content">
                                    <div class="related-product">
                                        <div class="row productlist-itemrow">
                                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-4 col-6">
                                                <div class="teeprint-product">
                                                    <div class="teeprint-product-inner">
                                                        <div class="teeprint-product-image">
                                                            <img src="https://teeprint.london/wp-content/uploads/2024/08/AM1120GYM20FRONT-6.jpg" alt="Img" />
                                                            <div class="teeprint-product-overlow">
                                                                <div class="teeprint-product-overlow-inner">
                                                                    <a href="#" class="teeprint-view-btn" title="Hello from speech bubble!">
                                                                        <i class="las la-eye"></i>
                                                                    </a>
                                                                    <a href="#" class="teeprint-addcart-btn">
                                                                        <i class="bx bx-cart"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="teeprint-product-body">
                                                            <h5 class="teeprint-product-title">
                                                                Anthem Unisex Hoodie
                                                            </h5>
                                                            <span class="teeprint-price">£18.36</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-4 col-6">
                                                <div class="teeprint-product">
                                                    <div class="teeprint-product-inner">
                                                        <div class="teeprint-product-image">
                                                            <img src="https://teeprint.london/wp-content/uploads/2024/08/AF02220BLK20FRONT-1.jpg" alt="Img" />
                                                            <div class="teeprint-product-overlow">
                                                                <div class="teeprint-product-overlow-inner">
                                                                    <a href="#" class="teeprint-view-btn" title="Hello from speech bubble!">
                                                                        <i class="las la-eye"></i>
                                                                    </a>
                                                                    <a href="#" class="teeprint-addcart-btn">
                                                                        <i class="bx bx-cart"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="teeprint-product-body">
                                                            <h5 class="teeprint-product-title">
                                                                Anthem Unisex Hoodie
                                                            </h5>
                                                            <span class="teeprint-price">£18.36</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-4 col-6">
                                                <div class="teeprint-product">
                                                    <div class="teeprint-product-inner">
                                                        <div class="teeprint-product-image">
                                                            <img src="https://teeprint.london/wp-content/uploads/2024/08/AF03020BLK20FRONT-1.jpg" alt="Img" />
                                                            <div class="teeprint-product-overlow">
                                                                <div class="teeprint-product-overlow-inner">
                                                                    <a href="#" class="teeprint-view-btn" title="Hello from speech bubble!">
                                                                        <i class="las la-eye"></i>
                                                                    </a>
                                                                    <a href="#" class="teeprint-addcart-btn">
                                                                        <i class="bx bx-cart"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="teeprint-product-body">
                                                            <h5 class="teeprint-product-title">
                                                                Anthem Unisex Hoodie
                                                            </h5>
                                                            <span class="teeprint-price">£18.36</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-4 col-6">
                                                <div class="teeprint-product">
                                                    <div class="teeprint-product-inner">
                                                        <div class="teeprint-product-image">
                                                            <img src="https://teeprint.london/wp-content/uploads/2024/08/AM0420BLK20FRONT-1.jpg" alt="Img" />
                                                            <div class="teeprint-product-overlow">
                                                                <div class="teeprint-product-overlow-inner">
                                                                    <a href="#" class="teeprint-view-btn" title="Hello from speech bubble!">
                                                                        <i class="las la-eye"></i>
                                                                    </a>
                                                                    <a href="#" class="teeprint-addcart-btn">
                                                                        <i class="bx bx-cart"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="teeprint-product-body">
                                                            <h5 class="teeprint-product-title">
                                                                Anthem Unisex Hoodie
                                                            </h5>
                                                            <span class="teeprint-price">£18.36</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>       
    </div>
    
</template>

