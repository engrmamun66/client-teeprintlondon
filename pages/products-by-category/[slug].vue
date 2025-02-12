
<script setup>

definePageMeta({
  titleTemplate: '% :: Category Products',
  name: 'category-products',
  layout: 'web',
})


const { slug } = useRoute().params
 
</script>


<template>
  <div>  
    <web-productList :category-slug="slug" ></web-productList>
   
  </div>
</template>




<style scoped>

</style>
