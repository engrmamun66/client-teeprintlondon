<template>
    <div>
      <form id="payment-form">
        <div id="card-element">
          <!-- Stripe Card Element will be inserted here -->
        </div>
        <button @click.prevent="submitPayment">Pay Now</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { loadStripe } from '@stripe/stripe-js';
  
  // Stripe and card element refs
  const stripe = ref(null);
  const cardElement = ref(null);
  const clientSecret = ref('');
  const paymentStatus = ref('');
  const stripeKey = useRuntimeConfig()?.public?.['STRIPE_KEY']
  
  // Load Stripe and mount card element
  onMounted(async () => {
    stripe.value = await loadStripe(stripeKey);
    const elements = stripe.value.elements();
    cardElement.value = elements.create('card');
    cardElement.value.mount('#card-element');
  
    // Fetch client secret from Laravel backend
    const response = await $fetch(`${useRuntimeConfig()?.public?.['API_BASE_URL']}/stripe/create-payment-intent`, {
      method: 'POST',
      body: { amount: 1000, order_id: "56575587" }, // Amount in dollars
    });
    clientSecret.value = response.clientSecret;
  });
  
  // Handle payment submission
const submitPayment = async () => {
  if (!stripe.value || !cardElement.value || !clientSecret.value) return;

  const { error, paymentIntent } = await stripe.value.confirmCardPayment(clientSecret.value, {
    payment_method: {
      card: cardElement.value,
    },
  });

  if (error) {
    paymentStatus.value = `Payment failed: ${error.message}`;
    // await $fetch(`${useRuntimeConfig()?.public?.['API_BASE_URL']}/payment-logs`, {
    //     method: 'POST',
    //     body: {
    //         order_id: '56575587', // Replace with your order ID
    //         payment_intent_id: error.payment_intent?.id, // PaymentIntent ID (if available)
    //         status: 'failed',
    //         error: error.message,
    //     },
    // });
    Toaster.error(paymentStatus.value)
  } else {
    
    paymentStatus.value = `Payment successful! PaymentIntent ID: ${paymentIntent.id}`;
    // await $fetch(`${useRuntimeConfig()?.public?.['API_BASE_URL']}/payment-logs`, {
    //     method: 'POST',
    //     body: {
    //         order_id: '56575587', // Replace with your order ID
    //         payment_intent_id: paymentIntent.id,
    //         status: 'succeeded',
    //     },
    // });
    Toaster.success(paymentStatus.value)
    // You can redirect the user or update your database here
  }

};
</script>