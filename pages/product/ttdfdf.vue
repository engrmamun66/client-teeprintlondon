<script setup>

let homeStore = inject('homeStore')
let { product_slug } = useRoute().params

await homeStore.getProductDetails(product_slug)
  
definePageMeta({
  titleTemplate: `% :: ${ 'Teepring - Product'}`,
  name: 'product_details--',
  layout: 'web',
})

const { name, short_description, thumbnail_image } = homeStore.product;

useSeoMeta({
  title: name,
  ogTitle: name,
  description: short_description,
  ogDescription: short_description,
  ogImage: thumbnail_image,
  twitterCard: 'summary_large_image',
}) 



function addToCart(){
    let imgElement = document.querySelector('.teeprint-product-view-image img')

    cartAnimation({element: imgElement}, ()=>{
        useNuxtApp().$emit('openInPageCart', true)
    })
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
                                    <div class="teeprint-product-view-image">
                                        <img class="teeprint-product-viewimage-active" :src="homeStore.product.thumbnail_image_url || PLACEHOLDER_IMAGE" alt="Img" />
                                    </div>
                                    <!-- <div v-if="homeStore.product?.images?.length" class="teeprint-product-multipleimage">
                                        <template v-for="imageUrl in homeStore.product?.images">
                                            <div class="teeprint-product-thumb-item teeprint-product-thumb-active">
                                                <img :src="imageUrl" alt="teeprint" />
                                            </div>

                                        </template> 
                                    </div> -->
                                </div>
                            </div>
                            <div class="col-md-6 teeprint-product-rightside">
                                <h5 class="teeprint-product-title" @click="log(homeStore.product)">
                                   {{ homeStore.product?.name }}
                                </h5>
                                <p class="teeprint-product-price">
                                    <span class="amount">
                                        {{ H.formatPrice(homeStore.product?.sizes[0].unit_price) }}
                                    </span>
                                </p>
                                <div class="select-size">
                                    <h5>Select Size</h5>
                                    <ul>
                                        <li>M</li>
                                        <li>L</li>
                                        <li>XL</li>
                                        <li>2XL</li>
                                    </ul>
                                </div>
                                <div class="teeprint-quantity">
                                    <div class="teeprint-num-in">
                                        <span class="teeprint-minus dis">-</span>
                                        <input type="text" class="teeprint-in-num" value="1" readonly="" max="99992" />
                                        <span class="teeprint-plus">+</span>
                                    </div>
                                </div>
                                <div class="product-details-btn">
                                    <a class="teeprint-button teeprint-theme-btn addtocart-btn" @click="addToCart()"><i class="bx bx-shopping-bag"></i> Add to Cart </a>
                                    <a class="teeprint-button detailsquote-btn"> <i class='bx bx-comment'></i> Instant Quote </a>
                                </div>
                                <hr class="pd-devided">
                                <span class="product-otherinfo">
                                    Categories:
                                    <samp>Chefswear & Catering, Headwear</samp>
                                </span>
                                <div class="product-details-sortdes">
                                    <h6>All prices are VAT inclusive</h6>
                                    <ul>
                                        <li>Unisex styling.</li>
                                        <li>Coolmax? panels for maximum comfort.</li>
                                        <li>Keeps you cool.</li>
                                        <li>Elasticated back and tie tapes.</li>
                                        <li>Domestic wash 60??C.</li>
                                    </ul>
                                </div>
                                <div class="product-details-sortdes">
                                    <h6>Premium Sweatshirt</h6>
                                    <ul>
                                        <li>Regular fit, Crew Neck </li>
                                        <li>High-weight, 230 GSM</li>
                                    </ul>
                                </div>
                                <div class="product-details-sortdes">
                                    <h6>Fabric</h6>
                                    <ul>
                                        <li>Regular fit, Crew Neck </li>
                                        <li>High-weight, 230 GSM</li>
                                    </ul>
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

