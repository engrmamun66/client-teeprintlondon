<script setup>
import seoMeta from '~/seo-meta.json'
import { ref, computed, inject, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useSeoMeta } from '#imports';

let homeStore = inject('homeStore');
let { product_slug } = useRoute().params;

let isMounted = ref(false);
let imageIndex = ref(0);
let tab = ref(1);

let getThumbnailImage = computed(() => {
    return homeStore.product?.images?.[imageIndex.value]?.image_url
})


onMounted(async () => { 
    await homeStore.getProductDetails(product_slug);

    if (homeStore.product?.images?.length) {
        homeStore.product.images.unshift({
            id: 0,
            selected: true,
            image_url: homeStore.product?.thumbnail_image_url
        }) 
    }
    
    H.delay(()=> isMounted.value = true, 500)

   homeStore.product.image
    
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


let showEffect = computed(() => H.isPendingAnyApi('Frontend:getProductDetails') || !isMounted.value)
  
  

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
                                        <template v-if="showEffect">
                                            <ShimmerEffect height="600px"></ShimmerEffect>
                                        </template>
                                        <template v-else>
                                            <img class="teeprint-product-viewimage-active" :src="getThumbnailImage || PLACEHOLDER_IMAGE" alt="Img" />
                                        </template>
                                         
                                    </div>
                                    <div class="teeprint-product-multipleimage">
                                        <template v-if="showEffect">
                                            <div v-for="x in 4" class="teeprint-product-thumb-item" :class="{'teeprint-product-thumb-active': img?.selected}">
                                                <ShimmerEffect width="100%"></ShimmerEffect>
                                            </div> 
                                        </template>
                                        <template v-else>
                                            <template v-for="(img, i) in homeStore.product?.images || []" :key="i">
                                                <div class="teeprint-product-thumb-item" :class="{'teeprint-product-thumb-active': img?.selected}">
                                                    <img :src="img.image_url" alt="teeprint" @click="imageIndex = i;H.toggleLoopItem(homeStore.product?.images, i, 'selected')" />
                                                </div> 
                                            </template> 

                                        </template>
                                    </div>
                                </div>
                            </div>
                        
                            <div class="col-md-6 teeprint-product-rightside">
                                <h5 class="teeprint-product-title">
                                    <template v-if="showEffect">
                                        <ShimmerEffect width="300px" height="30px"></ShimmerEffect>
                                    </template>
                                    <template v-else>
                                        {{ homeStore.product?.name }} 
                                    </template>
                                </h5>
                                <div class="d-flex justify-content-start align-items-center mb-3">
                                    <p class="teeprint-product-price m-0 p-0"> 
                                        <!-- <ShimmerEffect v-if="showEffect" width="150px" height="20px" /> -->
                                        <span class="amount">
                                            <template v-if="showEffect">
                                                <ShimmerEffect width="100px" height="30px"></ShimmerEffect>
                                            </template>
                                            <template v-else>
                                                {{ H.formatPrice(homeStore.get_price) }}
                                            </template>
                                        </span>  
                                    </p>
                                    <web-discountCard v-if="homeStore.product?.discount" class="ms-4">
                                        {{Number(homeStore.product?.discount).toFixed(0)}}
                                    </web-discountCard>
                                </div>
                                
                                <div class="select-size">
                                    <h5>Select Size</h5>
                                    <template v-if="showEffect">
                                        <ul>
                                            <template v-for="(item, i) in homeStore.product?.sizes" :key="i">
                                                <li ><ShimmerEffect radius="15px" height="30px"></ShimmerEffect></li> 
                                            </template> 
                                        </ul>
                                    </template>
                                    <template v-else> 
                                        <ul v-if="homeStore.product?.sizes">
                                            <template v-for="(item, i) in homeStore.product?.sizes" :key="i">
                                                <li @click="()=>{
    
                                                    H.toggleLoopItem(homeStore.product?.sizes, i, 'selected')
                                                }" :class="{selected: item?.selected}">{{ item.name }}</li>
    
                                            </template>
                                            
                                        </ul>
                                    </template>
                                </div>
                                <div class="select-size select-colors">
                                    <h5>Select Color</h5>
                                    <ul v-if="homeStore.product?.colors"> 
                                        <template v-if="showEffect">
                                            <ShimmerEffect width="250px" height="40px"></ShimmerEffect>
                                        </template>
                                        <template v-else>
                                            <select class="form-control" style="width: 250px;" @change="({target})=> {
                                                homeStore.product?.colors.forEach(color => {
                                                    if(color.id == target.value){
                                                        color.selected = true
                                                    } else {
                                                        color.selected = false
                                                    }
                                                })
                                            }" >
                                                <template v-for="(color, i) in homeStore.product?.colors" :key="i">
                                                    <option :value="color.id" >{{ color.name }}</option>
                                                </template>
                                            </select>

                                        </template>
                                    </ul>
                                </div>
                                <!-- <div class="select-size select-colors">
                                    <h5>Select Gender</h5>
                                    <ul v-if="homeStore.product?.genders">
                                        <template v-for="(item, i) in homeStore.product?.genders" :key="i">
                                            <li @click="H.toggleLoopItem(homeStore.product?.genders, i, 'selected')" :class="{selected: item?.selected}">{{ item.name }}</li>
                                        </template> 
                                    </ul>
                                </div> -->
                                <div class="teeprint-quantity">
                                    <template v-if="showEffect">
                                        <ShimmerEffect width="130px" height="40px" radius="25px" class="mb-3"></ShimmerEffect>
                                    </template>
                                    <template v-else> 
                                        <div class="teeprint-num-in">
                                            <span @click="homeStore.quantityGetSet = -1" class="teeprint-minus dis">-</span>
                                            <input :value="homeStore.quantityGetSet" type="text" class="teeprint-in-num" readonly="true" max="99999" />
                                            <span @click="homeStore.quantityGetSet = 1" class="teeprint-plus">+</span>
                                        </div>
                                    </template>
                                </div>
                                <div class="product-details-btn">
                                    <template v-if="showEffect">
                                        <div class="d-flex">
                                            <ShimmerEffect width="130px" height="40px" radius="25px" class="mb-3 me-3"></ShimmerEffect>
                                            <ShimmerEffect width="130px" height="40px" radius="25px" class="mb-3"></ShimmerEffect>
                                        </div>
                                    </template>
                                    <template v-else> 
                                        <a class="teeprint-button teeprint-theme-btn addtocart-btn" :class="{'opacity-25': !homeStore.quantityGetSet}" @click.prevent="homeStore.addToCartNow()">
                                            <i class="bx bx-shopping-bag"></i> Add to Cart 
                                        </a>
                                        <nuxt-link :to="{name: 'quote'}" class="teeprint-button detailsquote-btn"> <i class='bx bx-comment'></i> Instant Quote </nuxt-link>
                                    </template>
                                </div>
                                <hr class="pd-devided">
                                <span class="product-otherinfo d-flex"> 
                                    <strong>Category:&nbsp;</strong>
                                    <nav aria-label="breadcrumb">
                                        <template v-if="showEffect">
                                            <ShimmerEffect width="250px" height="22px"></ShimmerEffect>
                                        </template>
                                        <template v-else>
                                            <ol class="breadcrumb">
                                                <li class="breadcrumb-item"><a href="#">{{ homeStore.product?.category?.parent?.name }}</a></li>
                                                <li class="breadcrumb-item active" aria-current="page">{{ homeStore.product?.category?.name }}</li>
                                            </ol>
                                        </template>
                                    </nav>
                                </span>
                                <div class="product-details-sortdes">
                                    <h6>Short Description</h6>
                                    <template v-if="showEffect">
                                        <ShimmerEffect :count="6" width="100%" height="22px" class="mb-1"></ShimmerEffect>
                                    </template>
                                    <template v-else>
                                        <div v-html="homeStore.product.short_description"></div>
                                        <web-priceTable></web-priceTable>
                                    </template>
                                </div> 
                                
                            </div>
                        </div>
                    </div>
                </div>

                <template v-if="showEffect">
                    <ShimmerEffect width="100%" height="322px" class="mb-1"></ShimmerEffect>
                </template>
                <template v-else>
                    <div class="row pd-description">
                        <div class="col-md-12">
                            <div class="pd-tab">
                                <ul class="pd-tab_tab-head">
                                    <li @click="tab = 1" :class="{'active': tab == 1}" rel="pddescription">Description</li>
                                    <li @click="tab = 2" :class="{'active': tab == 2}" rel="pdrelatedproduct">Related Product</li>
                                </ul>
                                <div class="pd-tab_container"> 
                                    <div v-if="tab==1" id="pddescription" class="pd-tab_content">
                                        <div v-html="homeStore.product?.long_description || 'Description not added'"></div> 
                                    </div>
                                    <div v-else id="pdrelatedproduct" class="pd-tab_content">
                                        <div class="related-product">
                                            <template v-if="homeStore.related_products?.length" >
                                                <div class="row productlist-itemrow">
                                                    <template v-for="relatedItem in homeStore.related_products">
                                                        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-4 col-6">
                                                            <div class="teeprint-product">
                                                                <div class="teeprint-product-inner">
                                                                    <div class="teeprint-product-image" @click.stop="navigateTo(`/product/${relatedItem.slug}`)">
                                                                        <img :src="relatedItem?.thumbnail_image_url || PLACEHOLDER_IMAGE" alt="Img" />
                                                                        <div class="teeprint-product-overlow">
                                                                            <div class="teeprint-product-overlow-inner">
                                                                                <nuxt-link :to="`/product/${relatedItem.slug}`" class="teeprint-view-btn" title="Hello from speech bubble!">
                                                                                    <i class="bx bx-search-alt"></i>
                                                                                </nuxt-link>
                                                                                <a href="#" class="teeprint-addcart-btn" @click.stop.prevent="log" >
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
                                                    </template>
                                                     
                                                </div>
    
                                            </template>
                                            <template v-else >
                                                <div class="row productlist-itemrow">
        
                                                    <div class="col-12">
                                                        <p>  <strong>There are no related product</strong> </p>
                                                    </div>
                                                    
                                                </div>
                                            </template>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </section>       
    </div>
    
</template>

