<script setup>

definePageMeta({
  layout: 'web'
})


const faqs = ref([
  {
    question: "Can you design my poster if I don’t have existing artwork?",
    answer:
      "Yes! Our design team can craft a unique poster based on your vision and needs. We'll collaborate with you to ensure the final design aligns with your expectations.",
  },
  {
    question: "Can I review my poster before it's printed?",
    answer:
      "Yes, we provide a digital proof before printing. This allows you to review the design and request modifications if needed.",
  },
  {
    question: "Is there a minimum order requirement for same-day posters?",
    answer:
      "No, we have no minimum order quantity. Whether you need a single poster or multiple copies, we’ve got you covered.",
  },
  {
    question: "What poster sizes are available for same-day printing?",
    answer:
      "We offer a range of sizes from A4 to A0, along with custom dimensions to match your specifications. Just let us know what you need!",
  },
  {
    question: "Do you provide same-day delivery for posters?",
    answer:
      "Yes, we offer same-day delivery in London. Delivery charges vary depending on location, and we can arrange for courier service to bring your posters directly to you.",
  },
  {
    question: "How can I ensure the best quality for my printed posters?",
    answer:
      "For high-quality prints, provide your artwork in 300 dpi or higher in PDF, AI, or JPEG format. A 3mm bleed is recommended to prevent cropping issues.",
  },
  {
    question: "Are the posters suitable for outdoor use?",
    answer:
      "Yes, we offer waterproof and UV-resistant posters, making them perfect for outdoor advertising.",
  },
  {
    question: "What paper options do you provide for posters?",
    answer:
      "We use high-quality paper with matte, gloss, and satin finishes available. For outdoor posters, we also offer durable, weather-resistant materials.",
  },
  {
    question: "Until when can I place an order for same-day printing?",
    answer:
      "To guarantee same-day service, we recommend submitting your order in the morning. This allows us sufficient time to ensure high-quality printing and timely delivery.",
  },
  {
    question: "Can I get large-format posters printed on the same day?",
    answer:
      "Yes, we offer same-day printing for large-format posters, ideal for events, exhibitions, and storefront displays.",
  },
]);
</script>

<template>
  
  <div class="container main">

    <ul>
      <li v-for="(item, i) in faqs" :key="i" :class="{'expand': item?.expand}" @click.stop="H.toggleLoopItem(faqs, i, 'expand')">
        <h5  
        class="title" 
        >{{item.question}}</h5>
        <p>
          {{ item.answer }}
        </p>
      </li>
    </ul>

  </div>
</template>

<style scoped>
.container{
  margin-top: 100px;
  margin-bottom: 100px;
}

ul li{
  /* min-height: 50px; */
  margin: 15px 0px;
  cursor: pointer;
  border-bottom: 1px solid #555;
}

ul li p{
  height: 0px;
  opacity: 0;
  transition: all 0.5s linear;
  will-change: opacity, max-height, height;
}
ul li.expand p{
  height: auto;
  max-height: 200px;
  opacity: 1;
  transition: all 0.5s linear;
  will-change: opacity, max-height, height;
}

</style>
