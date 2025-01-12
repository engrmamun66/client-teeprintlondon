<template>
    <div class="position-relative">
      <h3>This is dashobard page</h3>
    </div>
  </template>
  
  <script setup>
 
  definePageMeta({
    keepalive: false,
    middleware: ["auth"],
    key: (route) => route.fullPath,
    layout: "auth",
    name: 'dashboard',
  });
  useHead({
    titleTemplate: "%s | Dashboard",
  });
   
  </script>
  