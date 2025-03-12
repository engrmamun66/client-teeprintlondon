<template>
    <div>
      <h1>Payment Successful</h1>
      <p>Thank you for your payment!</p>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  
  onMounted(async () => {
    try {
      const token = route.query.token;
      if (token) {
        const data = await $fetch(`${useRuntimeConfig()?.public?.['API_BASE_URL']}/payment-success`, {
          method: 'GET',
          params: { token },
        });
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  });
  </script>