<script setup lang="ts">
  
definePageMeta({
  titleTemplate: '% :: shop',
  name: 'shop',
  layout: 'web',
})


let products = ref([
    {
        "id": 1,
        "name": " Anthem Unisex Hoodie ",
        "price": "£18.36",
        "image_url": "https://teeprint.london/wp-content/uploads/2024/08/AM1120GYM20FRONT-6.jpg"
    },
    {
        "id": 2,
        "name": " Anthem Unisex Hoodie ",
        "price": "£18.36",
        "image_url": "https://teeprint.london/wp-content/uploads/2024/08/AF02220BLK20FRONT-1.jpg"
    },
    {
        "id": 3,
        "name": " Anthem Unisex Hoodie ",
        "price": "£18.36",
        "image_url": "https://teeprint.london/wp-content/uploads/2024/08/AF03020BLK20FRONT-1.jpg"
    },
    {
        "id": 4,
        "name": " Anthem Unisex Hoodie ",
        "price": "£18.36",
        "image_url": "https://teeprint.london/wp-content/uploads/2024/08/AM0420BLK20FRONT-1.jpg"
    },
    {
        "id": 5,
        "name": " Anthem Unisex Hoodie ",
        "price": "£18.36",
        "image_url": "https://teeprint.london/wp-content/uploads/2024/08/AM0420BLK20FRONT-1.jpg"
    },
    {
        "id": 6,
        "name": " Anthem Unisex Hoodie ",
        "price": "£18.36",
        "image_url": "https://teeprint.london/wp-content/uploads/2024/08/AM1220BLK20FRONT-1.jpg"
    }
])


function addToCart(event: Event){
    let target = event.target as HTMLElement
    let parentElement = target?.closest('.teeprint-product-image')
    if(parentElement){
        let imgElement = parentElement.querySelector('img')
        if(imgElement){
            cartAnimation({element: imgElement}, ()=>{
                useNuxtApp().$emit('openInPageCart', true)
            })
        }
    }
}




</script>



<template>
        <section class="teeprint-list-product">
        <div class="container">
            <div class="row">
                <div class="productlist-leftside">
                    <div class="teeprint-category-menu">
                        <div class="teeprint-category-menu-inner">
                            <div class="teeprint-categorymenu-title">
                                <h5>Category</h5>
                            </div>
                            <div class="teeprint-category-menulist">
                                <ul>
                                    <li><a href="#">Accessories<i class="lni lni-chevron-right"></i></a></li>
                                    <li><a href="#">All in Ones<i class="lni lni-chevron-right"></i></a></li>
                                    <li><a href="#">Aprons<i class="lni lni-chevron-right"></i></a></li>
                                    <li><a href="#">Baby & Toddler<i class="lni lni-chevron-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="teeprint-category-menu">
                        <div class="teeprint-category-menu-inner">
                            <div class="teeprint-categorymenu-title">
                                <h5>Brands</h5>
                            </div>
                            <div class="teeprint-category-menulist">
                                <div class="brand-list">
                                    <div class="teeprint-checkbox-inline">
                                        <label class="teeprint-checkbox" for="brand"> 
                                            <input type="checkbox" id="brand"> Russels 
                                            <span></span> 
                                        </label>
                                    </div>
                                    <div class="teeprint-checkbox-inline">
                                        <label class="teeprint-checkbox" for="brand2"> 
                                            <input type="checkbox" id="brand2"> Sols 
                                            <span></span> 
                                        </label>
                                    </div>
                                    <div class="teeprint-checkbox-inline">
                                        <label class="teeprint-checkbox" for="brand3"> 
                                            <input type="checkbox" id="brand3"> AFD 
                                            <span></span> 
                                        </label>
                                    </div>
                                    <div class="teeprint-checkbox-inline">
                                        <label class="teeprint-checkbox" for="brand4"> 
                                            <input type="checkbox" id="brand4"> Antheme 
                                            <span></span> 
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="teeprint-category-menu">
                        <div class="teeprint-category-menu-inner">
                            <div class="teeprint-categorymenu-title">
                                <h5>Price</h5>
                            </div>
                            <div class="teeprint-category-menulist">
                                
                            </div>
                        </div>
                    </div>
                    <div class="teeprint-category-menu">
                        <div class="teeprint-category-menu-inner">
                            <div class="teeprint-categorymenu-title">
                                <h5>Status</h5>
                            </div>
                            <div class="teeprint-category-menulist">
                                <div class="brand-list">
                                    <div class="teeprint-checkbox-inline">
                                        <label class="teeprint-checkbox" for="brand"> 
                                            <input type="checkbox" id="brand"> In Stock 
                                            <span></span> 
                                        </label>
                                    </div>
                                    <div class="teeprint-checkbox-inline">
                                        <label class="teeprint-checkbox" for="brand2"> 
                                            <input type="checkbox" id="brand2"> Out Of Stock 
                                            <span></span> 
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="teeprint-category-menu">
                        <div class="teeprint-category-menu-inner">
                            <div class="teeprint-categorymenu-title">
                                <h5>Gender</h5>
                            </div>
                            <div class="teeprint-category-menulist">
                                <div class="brand-list">
                                    <label class="teeprint-radio" for="kids"> 
                                        <input type="radio" id="kids" name="gender"> Kids
                                        <span></span> 
                                    </label>
                                    <label class="teeprint-radio" for="Ladies"> 
                                        <input type="radio" id="Ladies" name="gender"> Ladies
                                        <span></span> 
                                    </label>
                                    <label class="teeprint-radio" for="Mens"> 
                                        <input type="radio" id="Mens" name="gender"> Mens
                                        <span></span> 
                                    </label>
                                    <label class="teeprint-radio" for="Others"> 
                                        <input type="radio" id="Others" name="gender"> Others
                                        <span></span> 
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="productlist-rightside">
                    <div class="row">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <span>Showing 1–16 of 20 results</span>
                            <select name="orderby" class="orderby" aria-label="Shop order">
                                <option value="popularity">Sort by popularity</option>
                                <option value="rating">Sort by average rating</option>
                                <option value="date">Sort by latest</option>
                                <option value="price">Low to high</option>
                                <option value="price-desc" selected="selected">High to low</option>
                            </select>
                        </div>
                    </div>
                    <div class="row productlist-itemrow">
                        <template v-for="product in products">
                            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-6">
                                <div class="teeprint-product" @click.stop="navigateTo('/details')">
                                    <div class="teeprint-product-inner">
                                        <div class="teeprint-product-image">
                                            <img :src="product.image_url" alt="Img" />
                                            <div class="teeprint-product-overlow">
                                                <div class="teeprint-product-overlow-inner" @click.stop="false">
                                                    <nuxt-link :to="'/details'" class="teeprint-view-btn" title="Hello from speech bubble!">
                                                        <i class="bx bx-search-alt"></i>
                                                    </nuxt-link>
                                                    <a href="#" class="teeprint-addcart-btn" @click.stop.prevent="addToCart" >
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
                    <!-- <div class="row mt-4">
                        <div class="col-md-12">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination">
                                  <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Previous">
                                      <span aria-hidden="true">&laquo;</span>
                                    </a>
                                  </li>
                                  <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                                  <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">
                                      <span aria-hidden="true">&raquo;</span>
                                    </a>
                                  </li>
                                </ul>
                              </nav>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </section>
</template>