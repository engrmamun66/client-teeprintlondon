<script setup>
import getMeta from "~/seo-meta"; 
let { product_slug } = useRoute().params;
useSeoMeta(getMeta('pages', product_slug))  

definePageMeta({
  name: "product_details",
  layout: "web",
});

const truncateTitle = (title) => {
  if (!title) return '';
  return title.length > 60 ? title.slice(0, 60) + '...' : title;
};



let homeStore = inject("homeStore");



let isMounted = ref(false);
let imageIndex = ref(0); 
let activeThumbnailIndex = ref(0); // Track the active thumbnail index
let allImagesLoaded = ref(false); // Track if all images are loaded
let loadedImagesCount = ref(0); // Track the number of images loaded

let getThumbnailImage = computed(() => {
  return homeStore.product?.images?.[imageIndex.value]?.image_url;
});

let image_url = ref([]);

// Function to set active thumbnail and update Carousel
const setActiveThumbnail = (index) => {
  console.log("Setting active thumbnail:", index);
  activeThumbnailIndex.value = index;
};

// Function to handle image load event
const onImageLoad = () => {
  loadedImagesCount.value++;
  if (loadedImagesCount.value > 0) {
    allImagesLoaded.value = true; // All images are loaded
  }
};

onMounted(async () => {
  await homeStore.getProductDetails(product_slug);

  H.delay(() => (isMounted.value = true), 500);
 
  // image_url.value.push(homeStore.product.thumbnail_image_url );

  homeStore.product.images?.forEach((image) => {
    image_url.value.push(image.image_url);
  }); 

 
});


 

let showEffect = computed(
  () => H.isPendingAnyApi("Frontend:getProductDetails") || !isMounted.value
);
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
                  <div
                    class="teeprint-product-view-image"
                    @click="log(homeStore.product)"
 
                  >
                    <template v-if="showEffect || !allImagesLoaded">
                      <ShimmerEffect height="600px"></ShimmerEffect>
                    </template>
                    <template v-else>
                      <!-- Bootstrap Carousel for Images -->
                      <div
                        id="productCarousel"
                        class="carousel slide"
                        data-bs-ride="carousel"
                      >
                        <div class="carousel-inner">
                          <div
                            v-for="(image, index) in image_url"
                            :key="index"
                            :class="[
                              'carousel-item',
                              { active: index === activeThumbnailIndex },
                            ]"
                          >
                            <img
                              :src="image"
                              alt="Product Image"
                              class="d-block w-100"
                              @load="onImageLoad"
                            />
                          </div>
                        </div>
                        <button
                          class="carousel-control-prev"
                          type="button"
                          data-bs-target="#productCarousel"
                          data-bs-slide="prev"
                        >
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                          class="carousel-control-next"
                          type="button"
                          data-bs-target="#productCarousel"
                          data-bs-slide="next"
                        >
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div>
                    </template>
                  </div>
                  <div class="teeprint-product-multipleimage">
                    <template v-if="showEffect">
                      <div
                        v-for="x in 4"
                        class="teeprint-product-thumb-item"
                      >
                        <ShimmerEffect width="100%"></ShimmerEffect>
                      </div>
                    </template>
                    <template v-else>
                      <template
                        v-for="(image_url, i) in image_url || []"
                        :key="i"
                      >
                        <div
                          class="teeprint-product-thumb-item"
                          :class="{
                            'teeprint-product-thumb-active':
                              i === activeThumbnailIndex,
                          }"
                          @click="setActiveThumbnail(i)"
                        >
                          <img
                            :src="image_url"
                            alt="teeprint"
                            @load="onImageLoad"
                          />
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
                <div
                  class="d-flex justify-content-start align-items-center mb-3"
                >
                  <p class="teeprint-product-price m-0 p-0">
                    <span class="amount">
                      <template v-if="showEffect">
                        <ShimmerEffect
                          width="100px"
                          height="30px"
                        ></ShimmerEffect>
                      </template>
                      <template v-else>
                        {{ H.formatPrice(homeStore.get_discounted_price) }}
                      </template>
                    </span>
                    <span
                      v-if="
                        homeStore.get_price &&
                        homeStore.get_discounted_price &&
                        homeStore.get_price !== homeStore.get_discounted_price
                      "
                      class="amount text-decoration-line-through opacity-50 cn ms-2"
                    >
                      <template v-if="showEffect">
                        <ShimmerEffect
                          width="100px"
                          height="30px"
                        ></ShimmerEffect>
                      </template>
                      <template v-else>
                        {{ H.formatPrice(homeStore.get_price) }}
                      </template>
                    </span>
                  </p>
                  <web-discountCard
                    v-if="parseFloat(homeStore.product?.discount) > 0"
                    class="ms-4"
                  >
                    {{ Number(homeStore.product?.discount).toFixed(0) }}
                  </web-discountCard>
                </div>

                <div class="select-size">
                  <h5>Select Size</h5>
                  <template v-if="showEffect">
                    <ul>
                      <template
                        v-for="(item, i) in homeStore.product?.sizes"
                        :key="i"
                      >
                        <li>
                          <ShimmerEffect
                            radius="15px"
                            height="30px"
                          ></ShimmerEffect>
                        </li>
                      </template>
                    </ul>
                  </template>
                  <template v-else>
                    <ul v-if="homeStore.product?.sizes">
                      <template
                        v-for="(item, i) in homeStore.product?.sizes"
                        :key="i"
                      >
                        <li
                          @click="
                            () =>
                              H.toggleLoopItem(
                                homeStore.product?.sizes,
                                i,
                                'selected'
                              )
                          "
                          :class="{ selected: item?.selected }"
                        >
                          {{ item.name }}
                        </li>
                      </template>
                    </ul>
                  </template>
                </div>
                <div class="select-size select-colors">
                  <h5>Select Color</h5>
                  <ul v-if="homeStore.product?.colors">
                    <template v-if="showEffect">
                      <ShimmerEffect
                        width="250px"
                        height="40px"
                      ></ShimmerEffect>
                    </template>
                    <template v-else>
                      <select
                        class="form-control"
                        style="width: 250px"
                        @change="
                          ({ target }) => {
                            homeStore.product?.colors.forEach((color) => {
                              if (color.id == target.value) {
                                color.selected = true;
                              } else {
                                color.selected = false;
                              }
                            });
                          }
                        "
                      >
                        <template
                          v-for="(color, i) in homeStore.product?.colors"
                          :key="i"
                        >
                          <option :value="color.id">{{ color.name }}</option>
                        </template>
                      </select>
                    </template>
                  </ul>
                </div>

                <div v-if="homeStore.product?.show_personalized != 0 " class="note-field select-size">
                    <h5>Add your personalisation</h5> 
                    <textarea rows="4" cols="50" style="min-height: 100px;" @input="(e) => homeStore.product.note = e.target.value" v-html="homeStore.product.note" ></textarea>
                </div>

                <div class="teeprint-quantity">
                  <template v-if="showEffect">
                    <ShimmerEffect
                      width="130px"
                      height="40px"
                      radius="25px"
                      class="mb-3"
                    ></ShimmerEffect>
                  </template>
                  <template v-else>
                    <div class="teeprint-num-in">
                      <span
                        @click="homeStore.quantityGetSet = -1"
                        class="teeprint-minus dis"
                        >-</span
                      >
                      <input
                        :value="homeStore.quantityGetSet"
                        type="text"
                        class="teeprint-in-num"
                        readonly="true"
                        max="99999"
                      />
                      <span
                        @click="homeStore.quantityGetSet = 1"
                        class="teeprint-plus"
                        >+</span
                      >
                    </div>
                  </template>
                </div>
                <div class="product-details-btn">
                  <template v-if="showEffect">
                    <div class="d-flex">
                      <ShimmerEffect
                        width="130px"
                        height="40px"
                        radius="25px"
                        class="mb-3 me-3"
                      ></ShimmerEffect>
                      <ShimmerEffect
                        width="130px"
                        height="40px"
                        radius="25px"
                        class="mb-3"
                      ></ShimmerEffect>
                    </div>
                  </template>
                  <template v-else>
                    <a
                      class="teeprint-button teeprint-theme-btn addtocart-btn"
                      :class="{ 'opacity-25': !homeStore.quantityGetSet }"
                      @click.prevent="homeStore.addToCartNow()"
                    >
                      <i class="bx bx-shopping-bag"></i> Add to Cart
                    </a>
                    <nuxt-link
                      :to="{ name: 'quote' }"
                      class="teeprint-button detailsquote-btn"
                    >
                      <i class="bx bx-comment"></i> Instant Quote
                    </nuxt-link>
                  </template>
                </div>
                <hr class="pd-devided" />
                <span class="product-otherinfo d-flex">
                  <strong>Category:&nbsp;</strong>
                  <nav aria-label="breadcrumb">
                    <template v-if="showEffect">
                      <ShimmerEffect
                        width="250px"
                        height="22px"
                      ></ShimmerEffect>
                    </template>
                    <template v-else>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                          <a href="#">{{
                            homeStore.product?.category?.parent?.name
                          }}</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                          {{ homeStore.product?.category?.name }}
                        </li>
                      </ol>
                    </template>
                  </nav>
                </span>
                <div class="product-details-sortdes">
                  <h6>Short Description</h6>
                  <template v-if="showEffect">
                    <ShimmerEffect
                      :count="6"
                      width="100%"
                      height="22px"
                      class="mb-1"
                    ></ShimmerEffect>
                  </template>
                  <template v-else>
                    <div v-html="homeStore.product.short_description"></div>
                    <web-priceTable v-if="homeStore.product?.show_size_table"></web-priceTable>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>

        <template v-if="showEffect">
          <ShimmerEffect
            width="100%"
            height="322px"
            class="mb-1"
          ></ShimmerEffect>
        </template>
        <template v-else> 
          <div class="row pd-description">
            <div class="col-md-12">
              <div class="pd-tab">
                <h4 class="mt-4 mb-1">Product Description</h4>
                <div class="pd-tab_container">
                  <div id="pddescription" class="pd-tab_content">
                    <div
                      v-html="
                        homeStore.product?.long_description ||
                        'Description not added'
                      "
                    ></div>
                  </div>
                </div>

                <h4 class="mt-4 mb-1">Related Products</h4>
                <div class="pd-tab_container">
                  <div id="pdrelatedproduct" class="pd-tab_content">
                    <div class="related-product">
                      <template v-if="homeStore.related_products?.length">
                        <div class="row productlist-itemrow">
                          <template
                            v-for="relatedItem in homeStore.related_products"
                          >
                  
                            <div
                              class="col-xl-3 col-lg-3 col-md-6 col-sm-4 col-6"
                            >
                              <div class="teeprint-product">
                                <div class="teeprint-product-inner">
                                  <div
                                    class="teeprint-product-image"
                                    @click.stop="
                                      navigateTo(`/product/${relatedItem.slug}`)
                                    "
                                  >
                                    <img
                                      :src="
                                        relatedItem?.thumbnail_image_url ||
                                        PLACEHOLDER_IMAGE
                                      "
                                      alt="Img"
                                    />
                                    <div class="teeprint-product-overlow">
                                      <div
                                        class="teeprint-product-overlow-inner"
                                      >
                                        <nuxt-link
                                          :to="`/product/${relatedItem.slug}`"
                                          class="teeprint-view-btn"
                                          title="Hello from speech bubble!"
                                        >
                                          <i class="bx bx-search-alt"></i>
                                        </nuxt-link>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="teeprint-product-body">
                                    <h5 class="teeprint-product-title">
                                      {{ truncateTitle(relatedItem?.name) }}

                                      
                                    </h5>
                                    <span class="teeprint-price">{{ H.formatPrice(relatedItem?.discounted_min_unit_price  ?? relatedItem?.min_unit_price)}}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </template>
                        </div>
                      </template>
                      <template v-else>
                        <div class="row productlist-itemrow">
                          <div class="col-12">
                            <p><strong>There are no related product</strong></p>
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

<style scoped>
/* Carousel container */
.teeprint-product-details-image {
  display: flex;
  flex-direction: column;
  gap: 10px; /* Reduce the gap between main image and thumbnails */
}

/* Main image container */
.teeprint-product-view-image {
  width: 100%;
  height: auto;
  max-height: 500px; /* Adjust height for main image */
  overflow: hidden;
}

/* Carousel item */
.carousel-item {
  width: 100%;
  height: 100%;
}

/* Carousel image */
.carousel-item img {
  width: 100%;
  height: auto;
  max-height: 500px; /* Limit height for main image */
  object-fit: contain; /* Ensure the image fits within the container */
}

/* Thumbnail container */
.teeprint-product-multipleimage {
  display: flex;
  gap: 10px; /* Reduce the gap between thumbnails */
  overflow-x: auto; /* Allow horizontal scrolling for thumbnails */
  padding: 10px 0; /* Add padding for better spacing */
}

/* Thumbnail items */
.teeprint-product-thumb-item {
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.3s ease;
  flex: 0 0 auto; /* Prevent thumbnails from shrinking */
  width: 80px; /* Fixed width for thumbnails */
  height: 80px; /* Fixed height for thumbnails */
  overflow: hidden;
}

.teeprint-product-thumb-item.teeprint-product-thumb-active {
  border-color: #007aff;
}

.teeprint-product-thumb-item img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure thumbnails fill the container */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .teeprint-product-view-image img {
    width: 100% !important;
    height: auto !important;
    object-fit: contain;
  }

  .carousel-inner {
    max-height: 900px; /* Optional: limit height for mobile to avoid overflow */
  }
}

@media (max-width: 576px) {
  .teeprint-product-view-image {
    max-height: 800px; /* Further reduce height for very small screens */
  }

  .teeprint-product-thumb-item {
    width: 50px; /* Even smaller thumbnails for very small screens */
    height: 50px;
  }
}

.fixed-dimensions {
  width: 600px; /* Set your desired fixed width */
  height: 600px; /* Set your desired fixed height */
  overflow: hidden; /* Prevent content from overflowing */
}

.teeprint-product-view-image {
  transition: width 0.3s, height 0.3s; /* Smooth transition when dimensions change */
}

</style>