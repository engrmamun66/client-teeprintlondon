<template>
  <div class="position-relative">
        <p>User Panel</p>
        <nuxt-link :to="{name: 'login'}" >LOGIN PAGE</nuxt-link>
        <br>
        <nuxt-link :to="{name: 'droute', params: {id: 444444}}" >LOGIN PAGE</nuxt-link>

        <button @click="Toaster.success('Allah Mohmmad')" >TOaser</button>

        <btnLoader :show="!H.isPendingAnyApi('dfdf')"></btnLoader>
  </div>
</template>

<script setup>

</script>
<style scoped>

</style>
