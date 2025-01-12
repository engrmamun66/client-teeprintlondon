<template>
    <div class="position-relative">
          <p>User Panel</p>
          <nuxt-link :to="{name: 'login'}" >LOGIN PAGE</nuxt-link>
          <br>
          <nuxt-link :to="{name: 'droute', params: {id: 444444}}" >LOGIN PAGE</nuxt-link>
  
          <button @click="Toaster.success('Allah Mohmmad')" >TOaser</button>
  
          <el-BaseInput></el-BaseInput>

          <br>


          <el-BaseSelectMultiple label="Multi Selector" v-model="selectedItem" :data="data"></el-BaseSelectMultiple>
    </div>
  </template>
  
  <script setup>

let selectedItem = ref(null)
let data = ref([
      {
            id: 1,
            name: 'Product - 1',
      },
      {
            id: 2,
            name: 'Product - 2',
      },
      {
            id: 3,
            name: 'Product - 3',
      },
      {
            id: 4,
            name: 'Product - 4',
      },
])
  
  </script>
  <style scoped>
  
  </style>
  