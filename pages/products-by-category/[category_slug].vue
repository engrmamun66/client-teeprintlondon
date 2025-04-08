
<script setup>
import getMeta from "~/seo-meta"; 
const { category_slug } = useRoute().params

useSeoMeta(getMeta('category_pages', category_slug, true))  

definePageMeta({ 
  name: 'category-products',
  layout: 'web',
})


 
</script>


<template>
  <div>  
    <web-productList :category-slug="category_slug" ></web-productList>
   
  </div>
</template>




<style scoped>

</style>
