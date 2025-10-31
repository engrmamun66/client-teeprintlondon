<template>
  <section class="teeprint-slider-section">
    <div
      class="teeprint-owl-carousel owl-carousel owl-theme"
      id="teeprint-owl-carousel"
    >
      <!-- Slide 1 -->
      <div class="teeprint-owl-carousel-item">
        <div class="teeprint-owl-intro-slide">
          <div class="teeprint-owl-intro-slide-overley">
            <div class="teeprint-container">
              <div class="teeprint-row teeprint-align-center">
                <div class="teeprint-column-6">
                  <h5 class="teeprint-sl-subtitle">
                    Fast, Reliable, and Always On Time
                  </h5>
                  <h1 class="teeprint-sl-maintitle">
                    Same Day T-shirt Printing in London
                  </h1>
                  <p class="teeprint-sl-short-des">
                    Even if you have an urgent need for printed T-shirts, we can
                    tackle the challenge. We are praised for delivering T-shirts
                    with custom print on the same day. Our team is used to
                    last-minute orders, and you will still look sharp and
                    confident.
                  </p>
                  <button
                    data-navigateto="/quote"
                    class="teeprint-button teeprint-theme-btn teeprint-sl-button"
                  >
                    Get A Free Quote<i class="la la-arrow-right"></i>
                  </button>
                  <button
                    data-navigateto="/shop"
                    class="teeprint-button teeprint-theme-btn teeprint-sl-button"
                    style="background-color: #eead04"
                    
                  >
                    Buy Now<i class="la la-arrow-right"></i>
                  </button>
                </div>
                <div class="teeprint-column-6">
                  <img
                    style="border-radius: 10%"
                    src="/img/Home/Leonardo_Phoenix_10_A_gorgeously_styled_highquality_illustrati_1.jpg"
                    alt="slider img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 2 -->
      <div class="teeprint-owl-carousel-item">
        <div class="teeprint-owl-intro-slide">
          <div class="teeprint-owl-intro-slide-overley">
            <div class="teeprint-container">
              <div class="teeprint-row teeprint-align-center">
                <div class="teeprint-column-6">
                  <h5 class="teeprint-sl-subtitle">
                    Fast, Reliable, and Always On Time
                  </h5>
                  <h1 class="teeprint-sl-maintitle">
                    Same Day Hoodie Printing in London
                  </h1>
                  <p class="teeprint-sl-short-des">
                    Our same-day hoodie printing is perfect when you are in a
                    hurry. We ensure that delayed orders can't stop you. Along
                    with a quick delivery, get premium quality apparel for
                    maximum comfort. We are reliable for urgent printing needs
                    across the UK.
                  </p>
                  <button
                    data-navigateto="/quote"
                    class="teeprint-button teeprint-theme-btn teeprint-sl-button"
                  >
                    Get A Free Quote<i class="la la-arrow-right"></i>
                  </button>
                  <button
                    data-navigateto="/shop"
                    class="teeprint-button teeprint-theme-btn teeprint-sl-button"
                    style="background-color: #eead04"
                    
                  >
                    Buy Now<i class="la la-arrow-right"></i>
                  </button>
                </div>
                <div class="teeprint-column-6">
                  <img
                    style="border-radius: 10%"
                    src="/img/Hoodie/Leonardo_Phoenix_10_A_stylish_highquality_hoodie_from_Teeprint_2.jpg"
                    alt="slider img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 3 -->
      <div class="teeprint-owl-carousel-item">
        <div class="teeprint-owl-intro-slide">
          <div class="teeprint-owl-intro-slide-overley">
            <div class="teeprint-container">
              <div class="teeprint-row teeprint-align-center">
                <div class="teeprint-column-6">
                  <h5 class="teeprint-sl-subtitle">
                    Fast, Reliable, and Always On Time
                  </h5>
                  <h1 class="teeprint-sl-maintitle">
                    Same Day Cap Printing in London
                  </h1>
                  <p class="teeprint-sl-short-des">
                    Get custom caps for events, branding, or personal use in
                    hours. We understand and value your urgency. So, you don't
                    have to take stress to get eye-catching caps with sharp
                    designs, made of high-quality materials.
                  </p>
                  <button
                    data-navigateto="/quote"
                    class="teeprint-button teeprint-theme-btn teeprint-sl-button"
                  >
                    Get A Free Quote<i class="la la-arrow-right"></i>
                  </button>
                  <button
                    data-navigateto="/shop"
                    class="teeprint-button teeprint-theme-btn teeprint-sl-button"
                    style="background-color: #eead04"
                    
                  >
                    Buy Now<i class="la la-arrow-right"></i>
                  </button>
                </div>
                <div class="teeprint-column-6">
                  <img
                    style="border-radius: 10%"
                    src="/img/cap/Leonardo_Kino_XL_a_cap_image_written_teeprintlondon_on_that_ca_0.jpg"
                    alt="slider img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { navigateTo } from '#app' // ✅ Nuxt’s built-in navigation method

onMounted(() => {
  document.addEventListener('click', async (event) => {
    const button = event.target.closest('[data-navigateto]')
    if (!button) return

    const to = button.getAttribute('data-navigateto')
    const shouldReload = button.hasAttribute('data-reload')

    if (to) {
      // ✅ Use Nuxt’s native navigation helper (works outside component context)
      await navigateTo(to)
      if (shouldReload) {
        setTimeout(() => window.location.reload(), 200)
      }
    }
  })
})
</script>
