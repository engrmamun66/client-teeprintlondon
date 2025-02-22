<script setup>
onMounted(() => {
  const items = Array.from(document.querySelectorAll(".accordion button"));

  function toggleAccordion() {
    const itemToggle = this.getAttribute("aria-expanded");

    items.forEach((item) => {
      item.setAttribute("aria-expanded", "false");
    });

    if (itemToggle == "false") {
      this.setAttribute("aria-expanded", "true");
    }
  }

  items.forEach((item) => item.addEventListener("click", toggleAccordion));
});
</script>

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
      <div class="accordion-item">
        <button id="accordion-button-1" aria-expanded="false">
          <span class="accordion-title">Can you design my poster if I don’t have existing artwork?</span>
          <span class="icon" aria-hidden="true"></span>
        </button>
        <div class="accordion-content">
          <p>
            Yes! Our design team can craft a unique poster based on your vision and needs.
            We'll collaborate with you to ensure the final design aligns with your expectations.
          </p>
        </div>
      </div>
      <div class="accordion-item">
        <button id="accordion-button-2" aria-expanded="false">
          <span class="accordion-title">Can I review my poster before it's printed?</span>
          <span class="icon" aria-hidden="true"></span>
        </button>
        <div class="accordion-content">
          <p>
            Yes, we provide a digital proof before printing. This allows you to review the design
            and request modifications if needed.
          </p>
        </div>
      </div>
      <div class="accordion-item">
        <button id="accordion-button-3" aria-expanded="false">
          <span class="accordion-title">Is there a minimum order requirement for same-day posters?</span>
          <span class="icon" aria-hidden="true"></span>
        </button>
        <div class="accordion-content">
          <p>
            No, we have no minimum order quantity. Whether you need a single poster or multiple copies, we’ve got you covered.
          </p>
        </div>
      </div>
      <div class="accordion-item">
        <button id="accordion-button-4" aria-expanded="false">
          <span class="accordion-title">What poster sizes are available for same-day printing?</span>
          <span class="icon" aria-hidden="true"></span>
        </button>
        <div class="accordion-content">
          <p>
            We offer a range of sizes from A4 to A0, along with custom dimensions to match your specifications.
            Just let us know what you need!
          </p>
        </div>
      </div>
      <div class="accordion-item">
        <button id="accordion-button-5" aria-expanded="false">
          <span class="accordion-title">Do you provide same-day delivery for posters?</span>
          <span class="icon" aria-hidden="true"></span>
        </button>
        <div class="accordion-content">
          <p>
            Yes, we offer same-day delivery in London. Delivery charges vary depending on location,
            and we can arrange for courier service to bring your posters directly to you.
          </p>
        </div>
      </div>
      <div class="accordion-item">
        <button id="accordion-button-6" aria-expanded="false">
          <span class="accordion-title">How can I ensure the best quality for my printed posters?</span>
          <span class="icon" aria-hidden="true"></span>
        </button>
        <div class="accordion-content">
          <p>
            For high-quality prints, provide your artwork in 300 dpi or higher in PDF, AI, or JPEG format.
            A 3mm bleed is recommended to prevent cropping issues.
          </p>
        </div>
      </div>
      <div class="accordion-item">
        <button id="accordion-button-7" aria-expanded="false">
          <span class="accordion-title">Are the posters suitable for outdoor use?</span>
          <span class="icon" aria-hidden="true"></span>
        </button>
        <div class="accordion-content">
          <p>
            Yes, we offer waterproof and UV-resistant posters, making them perfect for outdoor advertising.
          </p>
        </div>
      </div>
      <div class="accordion-item">
        <button id="accordion-button-8" aria-expanded="false">
          <span class="accordion-title">What paper options do you provide for posters?</span>
          <span class="icon" aria-hidden="true"></span>
        </button>
        <div class="accordion-content">
          <p>
            We use high-quality paper with matte, gloss, and satin finishes available. 
            For outdoor posters, we also offer durable, weather-resistant materials.
          </p>
        </div>
      </div>
      <div class="accordion-item">
        <button id="accordion-button-9" aria-expanded="false">
          <span class="accordion-title">Until when can I place an order for same-day printing?</span>
          <span class="icon" aria-hidden="true"></span>
        </button>
        <div class="accordion-content">
          <p>
            To guarantee same-day service, we recommend submitting your order in the morning.
            This allows us sufficient time to ensure high-quality printing and timely delivery.
          </p>
        </div>
      </div>
      <div class="accordion-item">
        <button id="accordion-button-10" aria-expanded="false">
          <span class="accordion-title">Can I get large-format posters printed on the same day?</span>
          <span class="icon" aria-hidden="true"></span>
        </button>
        <div class="accordion-content">
          <p>
            Yes, we offer same-day printing for large-format posters, ideal for events, exhibitions, and storefront displays.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
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
  display: block;
  text-align: left;
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

.accordion button:hover::after,
.accordion button:focus::after {
  cursor: pointer;
  color: #03b5d2;
  border: 1px solid #03b5d2;
}

.accordion button .accordion-title {
  padding: 1em 1.5em 1em 0;
}

.accordion button .icon {
  display: inline-block;
  position: absolute;
  top: 18px;
  right: 0;
  width: 22px;
  height: 22px;
  border: 1px solid;
  border-radius: 22px;
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
@media (max-width: 767px) {
  .accordion button {
    font-size: 15px;
  }
}
</style>
