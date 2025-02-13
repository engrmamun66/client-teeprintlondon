<script setup lang="ts"> 

 
let homeStore = inject('homeStore', {getProducts: ()=>{}});
  
definePageMeta({
  titleTemplate: '% :: shop',
  name: 'shop',
  layout: 'web',
})

 
onMounted(()=>{
    homeStore.getProducts()
})



</script>



<template>
    <div>
        <web-productList></web-productList> 
    </div>
        
</template>