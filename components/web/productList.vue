<script setup lang="ts">

let homeStore = inject('homeStore') as any ;
let isMounted = ref(false)

const { categorySlug } = defineProps({
    categorySlug: {
        default: undefined,
        required: false,
    }
})
 


let dbounceGetProducts = H.debounce(homeStore.getProducts, 500);

type Section = 'category' | 'brand' | 'price' | ''

function withFilter(section: Section, {
    pIndex = -1,
    cIndex = -1,
}={})
{

    let menus = H.clone(homeStore.menus) 
    

    if(section === 'category'){

 
        let bool = Boolean(menus[pIndex].is_checked)
        menus[pIndex].is_checked = !(bool)
        if(cIndex === -1){
            if(menus[pIndex]['categories']?.length){
                menus[pIndex]['categories'].forEach(item=> {
                    item.is_checked = menus[pIndex].is_checked
                }) 
            } 
        } else if (cIndex > -1) {
            menus[pIndex]['categories'][cIndex]['is_checked'] = !(!!(menus[pIndex]['categories'][cIndex].is_checked))
            let hasUnchecke = menus[pIndex]['categories'].some(item => !item.is_checked)
            if(hasUnchecke){
                menus[pIndex].is_checked = !hasUnchecke
            }

        }


        let selectedCategories = menus.map(menu => menu.categories).flat().filter(c => c.is_checked).map(c => c.id)
        homeStore.payload.category_ids = selectedCategories
         
        homeStore.menus = menus

    } 


    dbounceGetProducts()
}


onMounted(async () => {
    homeStore.resetPayload()
    if(categorySlug){
        homeStore.payload.category_slug = categorySlug
    }
    await homeStore.getProducts()
    homeStore.menus.forEach(menu => {
        menu.is_checked = false
        menu.categories.forEach(cat => {
            cat.is_checked = false
        })
    })

    isMounted.value = true
})
 

</script>



<template>
    <section class="teeprint-list-product">
        <div class="container">
            <div class="row">
                <div class="productlist-leftside">
                    <div class="teeprint-category-menu">
                        <div class="teeprint-category-menu-inner">
                            <div class="teeprint-categorymenu-title">
                                <h5> Category  </h5>
                            </div>
                            <!-- 
                            With category filter
                            -->
                            <div class="teeprint-category-menulist">
                                <template v-if="homeStore.menus?.length">
                                    <ul class="ps-3 mb-3">
                                        <template v-if="!isMounted || H.isPendingAnyApi('Frontend:getAdditionalData')">
                                            <li v-for="x in 2" class="mb-4">
                                                <ShimmerEffect width="calc(100% - 20px)" height="20px" radius="0px" class="mt-2" /> 
                                                <ShimmerEffect width="calc(100% - 38px)" height="17px" radius="0px" class="mt-2 ms-3" /> 
                                                <ShimmerEffect width="calc(100% - 38px)" height="17px" radius="0px" class="mt-2 ms-3" /> 
                                            </li>
                                        </template>
                                        <template v-else>
                                            <template v-for="(item, index) in homeStore.menus" :key="index">
                                                <li v-if="index < 2" :parent-index="index">
                                                    
                                                    <a href="#" class="text-black">
                                                        <label class="teeprint-checkbox" :for="`main_${index}`"> 
                                                            <input type="checkbox" :id="`main_${index}`" :checked="item?.is_checked" @click.stop="withFilter('category', {pIndex: index})" > 
                                                            {{ item?.name }}  
                                                            <i class="lni lni-chevron-right"></i>
                                                            <span></span>
                                                        </label>
                                                        
                                                    </a>
                                                    <template v-if="item?.categories?.length">
                                                        <ul class="ps-4">
                                                            <template v-for="(child2, index2) in item?.categories" :key="child2.id">
                                                                <li :parent-index="index" :child-index="index2">  
                                                                    <a @click.stop.prevent="withFilter('category', {pIndex: index, cIndex: index2})" href="#">
                                                                        <label class="teeprint-checkbox" :for="`parent_${index2}`"> 
                                                                            <input type="checkbox" :id="`parent_${index2}`" :checked="child2?.is_checked"> 
                                                                            {{ child2.name }} 
                                                                            <span></span>  
                                                                        </label> 
                                                                    </a>
                                                                </li>  
                                                            </template>
                                                        </ul> 
                                                    </template>
                                                </li>  
                                            </template>

                                        </template>
                                        
                                    </ul>

                                </template>
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
                                    <template v-if="!isMounted || H.isPendingAnyApi('Frontend:getAdditionalData')">
                                        <template v-for="x in 4">
                                            <div class="teeprint-checkbox-inline mb-1">
                                                <label class="teeprint-checkbox d-flex ps-0" for="brand"> 
                                                    <ShimmerEffect width="20px" height="20px" radius="0px" class="me-2" /> 
                                                    <ShimmerEffect width="100%" height="20px" radius="2px" /> 
                                                </label>
                                            </div>
                                        </template>
                                        
                                    </template>
                                    <template v-else>
                                        <template v-for="brand in homeStore.additionalData.brands">
                                            <div class="teeprint-checkbox-inline">
                                                <label class="teeprint-checkbox"> 
                                                    <input type="checkbox" @click.stop="({target})=>{
                                                        let { checked } = target
                                                        if(checked){
                                                            homeStore.payload.brand_ids.push(brand.id)
                                                        } else {
                                                            homeStore.payload.brand_ids = homeStore.payload.brand_ids.filter(id => id != brand.id)
                                                        }
                                                        homeStore.getProducts()
                                                    }" > {{ brand.name }} 
                                                    <span></span> 
                                                </label>
                                            </div>
                                        </template>

                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="true" class="teeprint-category-menu">
                        <div class="teeprint-category-menu-inner">
                            <div class="teeprint-categorymenu-title">
                                <h5>Price</h5>
                            </div>
                            <div class="teeprint-category-menulist">
                                <template v-if="!isMounted || H.isPendingAnyApi('Frontend:getAdditionalData')">
                                    <div class="p-3">
                                        <div class="d-flex">
                                            <ShimmerEffect width="50%" height="34px" radius="5px" class="me-1" /> 
                                            <ShimmerEffect width="50%" height="34px" radius="5px" class="ms-1" /> 
                                        </div>
                                        <ShimmerEffect width="100%" height="14px" radius="0px" class="mt-2" /> 

                                    </div>
                                </template>
                                <template v-else>
                                    <web-range v-model="homeStore.payload.price_range" :min="homeStore.additionalData.min_price" :max="homeStore.additionalData.max_price" @change="homeStore.getProducts()" ></web-range>
                                </template>
                                    <!-- <h3>
                                        {{ homeStore.payload.price_range }}
                                    </h3> -->
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
                                    <template v-if="!isMounted || H.isPendingAnyApi('Frontend:getAdditionalData')">
                                        <template v-for="x in 4">
                                            <div class="teeprint-checkbox-inline mb-1">
                                                <label class="teeprint-checkbox d-flex ps-0"> 
                                                    <ShimmerEffect width="20px" height="20px" radius="0px" class="me-2" /> 
                                                    <ShimmerEffect width="100%" height="20px" radius="2px" /> 
                                                </label>
                                            </div>
                                        </template>
                                        
                                    </template>
                                    <template v-else>
                                        <div class="teeprint-checkbox-inline">
                                            <label class="teeprint-radio"> 
                                                <input type="radio" name="gender" @click.stop="()=>{  
                                                    homeStore.payload.gender_ids = []
                                                    homeStore.getProducts()
                                                }"> All
                                                <span></span> 
                                            </label>
                                        </div>

                                        <template v-for="gender in homeStore.additionalData.genders">
                                            <div class="teeprint-checkbox-inline">
                                                <label class="teeprint-radio"> 
                                                    <input type="radio" :value="gender.id" name="gender" @click.stop="({target})=>{ 
                                                        homeStore.payload.gender_ids = [gender.id]
                                                        homeStore.getProducts()
                                                    }"> {{gender.name}}
                                                    <span></span> 
                                                </label>
                                            </div>
                                        </template>
                                        

                                    </template>
                                    
                                     
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="productlist-rightside">
                    <div class="row">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <span @click="log(homeStore.paginateData)" > {{ homeStore.showingCountText() }} </span>
                            <button v-if="homeStore.payload.category_slug" tooltip="Category" class="p-2 border radius-10" style=":hover{background-color: green!important;}">{{ $slugToTitle(categorySlug) }} <i @click="homeStore.payload.category_slug = null;homeStore.getProducts()" class='bx bx-x-circle transformY-2px'></i> </button>
                            <select name="orderby" class="orderby" @change="({target}) =>{
                                if(target.value){
                                    homeStore.payload.sort = target.value
                                } else {
                                    delete homeStore.payload.sort
                                } 
                                homeStore.getProducts({page: 1})
                            }"> 
                                <option value="">-Default Sorting-</option>
                                <option value="low">Low to high</option>
                                <option value="high" >High to low</option>
                            </select>
                        </div>
                    </div>
                    <div class="row productlist-itemrow">
                        <template v-if="!isMounted || H.isPendingAnyApi('Frontend:getProducts')">
                            <template v-for="x in 12">
                                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-6">
                                    <div class="teeprint-product" @click.stop="navigateTo('/details')">
                                        <div class="teeprint-product-inner">
                                            <div class="teeprint-product-image d-flex justify-content-center">
                                                <ShimmerEffect width="calc(100% - 30px)" height="200px" radius="0px"></ShimmerEffect> 
                                            </div>
                                            <div class="teeprint-product-body">
                                                <ShimmerEffect width="100%" height="20px" class="mb-2"></ShimmerEffect>
                                                <ShimmerEffect width="100px" height="20px"></ShimmerEffect> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </template>  
                        </template>
                        <template v-else>
                            <template v-for="product in homeStore.products">
                                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-4 col-6">
                                    <div class="teeprint-product" @auxclick="log(product)" @click.stop="navigateTo(`/product/${product.slug}`)">
                                        <div class="teeprint-product-inner">
                                            <div class="teeprint-product-image">
                                                <img :src="product.thumbnail_image_url || `/img/placeholder-image.jpg`" alt="Img" />
                                                <div class="teeprint-product-overlow">
                                                    <div class="teeprint-product-overlow-inner" @click.stop="false">
                                                        <nuxt-link :to="`/product/${product.slug}`" class="teeprint-view-btn" title="Hello from speech bubble!">
                                                            <i class="bx bx-search-alt"></i>
                                                        </nuxt-link>
                                                        <!-- <a href="#" class="teeprint-addcart-btn" @click.prevent="homeStore.addToCartNow( $event, product.slug )" >
                                                            <i class="bx bx-cart"></i>
                                                        </a> -->
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="teeprint-product-body">
                                                <h5 class="teeprint-product-title">
                                                    {{product.name}}
                                                </h5>
                                                <template v-if="product?.discounted_min_unit_price">
                                                    <span class="teeprint-price"> {{ H.formatPrice(product?.discounted_min_unit_price) }} </span>
                                                    <span class="teeprint-price text-decoration-line-through opacity-50 cn ms-2">{{ H.formatPrice(product?.min_unit_price) }}</span>
                                                </template>
                                                <template v-else>
                                                    <span class="teeprint-price">{{ H.formatPrice(product?.min_unit_price) }}</span> 
                                                </template>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </template>                         
                        </template>
                    </div>
                    <div class="mt-4 d-flex justify-content-center  ">
                        <pagination v-model="homeStore.paginateData" :prevent="true" @jumpToPage="(page: number) => {
                            homeStore.getProducts({page})
                        }"></pagination>
                    </div> 

              
 
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.teeprint-category-menulist ul li a { 
    padding: 3px 0px; 
}
.teeprint-categorymenu-title { 
    height: 45px !important;  
}

.brand-list {
    padding: 0px 15px 15px;
}

.teeprint-category-menulist ul ul li:last-child a {
    margin-bottom: 20px;
}
</style>