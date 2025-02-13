<script setup lang="ts">

let homeStore = inject('homeStore')
  
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