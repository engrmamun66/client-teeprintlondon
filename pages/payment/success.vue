<template>
    <div>
      <h1>Payment Successful</h1>
      <p>Thank you for your payment!</p>
      <p v-if="transactionId">Transaction ID: {{ transactionId }}</p>
      <p v-if="amount">Amount: {{ amount }} {{ currency }}</p>
      <p v-if="error" style="color: red;">{{ error }}</p>
    </div>
  </template>
  
  <script setup>
  // Refs for managing state
  const transactionId = ref(null);
  const amount = ref(null);
  const currency = ref(null);
  const error = ref(null);
  
  const route = useRoute();
  
  const token = route.query.token;
  const order_id = route.query.order_id;

  navigateTo({
    path: '/payment-success',
    query: route.query
  })

   
  </script>