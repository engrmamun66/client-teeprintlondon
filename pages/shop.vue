<script setup lang="ts"> 
import getMeta from "~/seo-meta"; 
let { product_slug } = useRoute().params;
useSeoMeta(getMeta('root', 'shop')) 
  
definePageMeta({
  titleTemplate: '% :: shop',
  name: 'shop',
  layout: 'web',
})

</script>



<template>
    <div> 
        <web-productList></web-productList> 
    </div>
        
</template>