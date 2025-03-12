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
  
  onMounted(async () => {
    try {
      const token = route.query.token;
      const orderId = route.query.order_id;
  
      if (!token || !orderId) {
        throw new Error('Token or Order ID is missing in the URL');
      }
  
      // Fetch payment details from Laravel backend
      const data = await $fetch(`${useRuntimeConfig()?.public?.['API_BASE_URL']}/payment-success`, {
        method: 'GET',
        params: { token, order_id: orderId },
      });
  
      // Update UI with payment details
      if (data.payment_id) {
        transactionId.value = data.payment_id;
      }
      if (data.amount) {
        amount.value = data.amount;
      }
      if (data.currency) {
        currency.value = data.currency;
      }
  
      console.log(data);
    } catch (err) {
      error.value = 'An error occurred while fetching payment details.';
      console.error(err);
    }
  });
  </script>