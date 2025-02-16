
<script setup>

definePageMeta({
  titleTemplate: '% :: Category Products',
  name: 'category-products',
  layout: 'web',
})


const { category_slug } = useRoute().params
 
</script>


<template>
  <div>  
    <web-productList :category-slug="category_slug" ></web-productList>
   
  </div>
</template>




<style scoped>

</style>
