<template>
  <div class="container mb-4 mt-5 pt-4">
    <div class="row mb-3">
      <div class="col-md-12">
        <div class="section-main-heading text-center">
          <h4 class="section-heading-title-small">
            <span class="line-decoration"></span> Need Assistance?
          </h4>
          <h2 class="section-heading-title-big">We're Here to Help.</h2>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div
        v-for="(faq, index) in selectedFaqs"
        :key="index"
        class="accordion-item"
      >
        <button :id="`accordion-button-${index + 1}`" aria-expanded="false">
          <span class="accordion-title">{{ faq.question }}</span>
          <span class="icon" aria-hidden="true"></span>
        </button>
        <div class="accordion-content">
          <p>{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  name: {
    type: String,
    default: ''
  }
});

const generalFAQs = [
  {
    question: "Can you create a design if I don’t have existing artwork?",
    answer: "Yes! Our design team can create a custom design based on your vision and requirements. We’ll work closely with you to ensure the final product meets your expectations.",
  },
  {
    question: "Can I review the design before finalizing?",
    answer: "Absolutely. We provide a digital proof for your review, allowing you to request any changes before proceeding.",
  },
  {
    question: "Is there a minimum order requirement?",
    answer: "No, there’s no minimum order requirement. We cater to both small and large orders with the same level of care.",
  },
  {
    question: "What sizes are available?",
    answer: "We offer a variety of standard sizes, as well as custom dimensions to suit your specific needs. Let us know your requirements!",
  },
  {
    question: "Do you offer same-day delivery?",
    answer: "Yes, we provide same-day delivery in certain areas. Delivery fees depend on your location, and we can arrange for your order to be delivered directly to you.",
  },
  {
    question: "How can I ensure the best quality for my order?",
    answer: "For optimal results, provide your files in high resolution (300 dpi or higher) in formats like PDF, AI, or JPEG. Including a bleed is also recommended to avoid cropping issues.",
  },
  {
    question: "Are your products suitable for outdoor use?",
    answer: "Yes, we offer durable, weather-resistant options that are perfect for outdoor applications.",
  },
  {
    question: "What material options are available?",
    answer: "We provide a range of high-quality materials, including matte, gloss, and satin finishes. For outdoor use, we also offer robust, weatherproof options.",
  },
  {
    question: "What’s the deadline for same-day service?",
    answer: "To ensure same-day service, we recommend placing your order early in the day. This gives us enough time to deliver a high-quality product on time.",
  },
  {
    question: "Can I get large-format items on the same day?",
    answer: "Yes, we offer same-day service for large-format items, making them ideal for events, displays, and promotions.",
  },
  {
    question: "Do you provide same-day delivery for posters?",
    answer: "Yes, we offer same-day delivery in London. Delivery charges vary depending on location, and we can arrange for courier service to bring your posters directly to you.",
  },
];

const tshirtFAQs = [
  {
    question: "What types of printing do you use?",
    answer: "We use high-quality digital printing so you get bright colors and long-lasting prints."
  },
  {
    question: "What materials are your t-shirts made of?",
    answer: "We offer soft cotton, cotton blends, and other comfortable fabrics that feel great to wear."
  },
  {
    question: "Can I print on both the front and back of my t-shirt?",
    answer: "Yes. You can pick the option to print on the front or back separately. Both-sided print is possible for an extra cost."
  },
  {
    question: "Do you offer a discount on large orders?",
    answer: "We offer bulk pricing for large orders. The bigger your order is, the more you save."
  },
  {
    question: "Can I re-order the same design later?",
    answer: "Yes. Our system saves your design so you can re-order anytime. It requires no repeated process."
  },
  {
    question: "What happens if my design has a mistake?",
    answer: "Whenever you notice a mistake, contact us fast. We'll do our best to fix it before printing."
  },
  {
    question: "Can I preview my design before placing the order?",
    answer: "Always. Our tool will show you a live preview of your shirt. You can see how it will look after printing."
  },
  {
    question: "Do you print designs on hoodies and other clothing?",
    answer: "Yes. We print on hoodies, polo shirts, tote bags, caps, and more, along with t-shirts. Ask us to confirm if you want to print on different items."
  }
];

const hoodieFAQs = [
  {
    question: "What types of hoodies can I customize?",
    answer: "You can choose from vast styles, colors, and sizes, and make your perfect hoodie."
  },
  {
    question: "How do I know which size to order?",
    answer: "Check our hoodie size chart in the UK above to find the best fit for you."
  },
  {
    question: "Will the print fade or peel after washing?",
    answer: "No. Strong printing methods are used to keep designs bright and clear, even after washing."
  },
  {
    question: "Can I get a hoodie for a special event?",
    answer: "Definitely! We print hoodies for special events, teams, branding, and more."
  },
  {
    question: "Can I change my design after ordering?",
    answer: "In such a case, contact us right away. We can change the design before printing."
  },
  {
    question: "Can I return or exchange my hoodie?",
    answer: "Please check our return policy. Usually, custom hoodies can’t be returned unless damaged."
  },
  {
    question: "Do you offer discounts for large orders?",
    answer: "For large orders or wholesale, contact us for special prices."
  },
  {
    question: "Are your hoodies unisex?",
    answer: "Yes. Most hoodies we deliver fit both men and women comfortably."
  }
];

const poloFAQs = [
  {
    question: "Where do you deliver polo shirts in London?",
    answer: "We deliver across all areas of London on the same day or the next day."
  },
  {
    question: "How do I know which size to order?",
    answer: "Our size chart above will help you find the perfect fit. Please check and let us know the size."
  },
  {
    question: "What printing methods do you use?",
    answer: "We use (DTG), screen printing, and vinyl printing to keep your design bright and clear."
  },
  {
    question: "How do I design my own polo shirt?",
    answer: "You can use our drag-and-drop online design tool to choose colours and add logos, text, and images."
  },
  {
    question: "What are the materials for your polo shirts?",
    answer: "We always choose soft, durable, and high-quality fabrics. They feel comfortable and last long."
  },
  {
    question: "Do you offer wholesale pricing?",
    answer: "For bulk orders, we offer wholesale pricing. You will get the best quality at an affordable rate."
  },
  {
    question: "Can I review the design before finalising it?",
    answer: "You can always review before ordering and request any changes before proceeding."
  },
  {
    question: "Can you create a design if I don't have one?",
    answer: "Yes. We can create a unique design depending on your vision and requirements. You can request revisions until it meets your expectations."
  }
];

const toteFAQs = [
  {
    question: "Do you have a minimum order quantity?",
    answer: "No! We have a no-minimum order rule. You can order just one tote bag or hundreds if you like!"
  },
  {
    question: "Can you make custom tote bags with my own design?",
    answer: "Of course! We are able to print custom tote bags using your logo, artwork, or personal message. Just upload your design to our system and choose a bag to print on."
  },
  {
    question: "What file format should my personal design be in?",
    answer: "We recommend high-resolution PNG, JPG, or PDF for best print results."
  },
  {
    question: "Are those tote bags machine washable?",
    answer: "Yes. Most of our bags are machine washable. But we advise a cold wash to preserve the print."
  },
  {
    question: "Are these tote bags suitable for resale?",
    answer: "Definitely. Many of our clients order for resale. Please contact us if you need them in bulk."
  },
  {
    question: "What size are those tote bags?",
    answer: "We offer various sizes, from standard shopping totes to larger and foldable bags. You can choose your preferred size before placing the order."
  }
];




// Dynamically choose FAQs based on `name` prop
const productFAQsMap = {
  tshirt: tshirtFAQs,
  hoodie: hoodieFAQs,
  polotshirt: poloFAQs,
  totebag: toteFAQs
};

const selectedFaqs = computed(() => {
  return productFAQsMap[props.name] || generalFAQs;
});

onMounted(() => {
  const items = Array.from(document.querySelectorAll(".accordion button"));

  function toggleAccordion() {
    const itemToggle = this.getAttribute("aria-expanded");

    items.forEach((item) => {
      item.setAttribute("aria-expanded", "false");
    });

    if (itemToggle === "false") {
      this.setAttribute("aria-expanded", "true");
    }
  }

  items.forEach((item) => item.addEventListener("click", toggleAccordion));
});
</script>




<style scoped>
.container {
  padding-left: 15px;
  padding-right: 15px;
}

.section-main-heading {
  margin-bottom: 2rem;
}

.section-heading-title-small {
  font-size: 1.25rem;
  color: #7288a2;
  margin-bottom: 0.5rem;
}

.section-heading-title-big {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
}

.accordion .accordion-item {
  border-bottom: 1px solid #e5e5e5;
  padding-left: 15px;
  padding-right: 15px;
}

.accordion .accordion-item button[aria-expanded="true"] {
  border-bottom: 1px solid #03b5d2;
}

.accordion button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1em 0;
  color: #7288a2;
  font-size: 1.15rem;
  font-weight: 400;
  border: none;
  background: none;
  outline: none;
}

.accordion button:hover,
.accordion button:focus {
  cursor: pointer;
  color: #03b5d2;
}

.accordion button .accordion-title {
  flex: 1;
  text-align: left;
  padding-right: 1em;
}

.accordion button .icon {
  display: inline-block;
  width: 22px;
  height: 22px;
  border: 1px solid;
  border-radius: 22px;
  position: relative;
  flex-shrink: 0;
}

.accordion button .icon::before {
  display: block;
  position: absolute;
  content: "";
  top: 9px;
  left: 5px;
  width: 10px;
  height: 2px;
  background: currentColor;
}

.accordion button .icon::after {
  display: block;
  position: absolute;
  content: "";
  top: 5px;
  left: 9px;
  width: 2px;
  height: 10px;
  background: currentColor;
}

.accordion button[aria-expanded="true"] {
  color: #03b5d2;
}

.accordion button[aria-expanded="true"] .icon::after {
  width: 0;
}

.accordion button[aria-expanded="true"] ~ .accordion-content {
  opacity: 1;
  max-height: 9em;
  transition: all 800ms linear;
  will-change: opacity, max-height;
}

.accordion .accordion-content {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: opacity 800ms linear, max-height 800ms linear;
  will-change: opacity, max-height;
}

.accordion .accordion-content p {
  font-size: 1rem;
  font-weight: 300;
  margin: 2em 0;
}

/* Responsive Styles */
@media (max-width: 767px) {
  .section-heading-title-small {
    font-size: 1rem;
  }

  .section-heading-title-big {
    font-size: 1.5rem;
  }

  .accordion button {
    font-size: 1rem;
    padding: 0.75em 0;
  }

  .accordion button .accordion-title {
    padding-right: 0.5em;
  }

  .accordion button .icon {
    width: 18px;
    height: 18px;
  }

  .accordion button .icon::before {
    top: 7px;
    left: 4px;
    width: 8px;
    height: 2px;
  }

  .accordion button .icon::after {
    top: 4px;
    left: 7px;
    width: 2px;
    height: 8px;
  }

  .accordion .accordion-content p {
    font-size: 0.875rem;
    margin: 1.5em 0;
  }
}
</style>