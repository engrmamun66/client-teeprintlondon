<template>
    <div>
      <button @click="createPayment">Pay with PayPal</button>
    </div>
  </template>
  
  <script setup>
  // Refs for managing state
  const isLoading = ref(false);
  const error = ref(null);
  
  // Function to create a PayPal payment
  const createPayment = async () => {
    isLoading.value = true;
    error.value = null;
  
    try {
      // Fetch payment details from Laravel backend
      const response = await $fetch(`${useRuntimeConfig()?.public?.['API_BASE_URL']}/create-payment`, {
        method: 'POST',
        body: { amount: '10.00' }, // Amount in dollars
      });
  
      // Redirect to PayPal approval URL
      if (response.links) {
        const approveLink = response.links.find((link) => link.rel === 'approve');
        if (approveLink) {
          window.location.href = approveLink.href;
        } else {
          throw new Error('No approval link found in PayPal response');
        }
      }
    } catch (err) {
      error.value = 'An error occurred while creating the payment.';
      console.error(err);
    } finally {
      isLoading.value = false;
    }
  };
  </script>