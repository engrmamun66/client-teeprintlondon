<template>
    <section class="teeprint-slider-section">
       <div class="teeprint-owl-carousel owl-carousel owl-theme" id="teeprint-owl-carousel">
           <div class="teeprint-owl-carousel-item">
               <div class="teeprint-owl-intro-slide">
                   <div class="teeprint-owl-intro-slide-overley">
                       <div class="teeprint-container">
                           <div class="teeprint-row teeprint-align-center">
                               <div class="teeprint-column-6">
                                   <h5 class="teeprint-sl-subtitle">Fast, Reliable, and Always On Time</h5>
                                   <h1 class="teeprint-sl-maintitle">Same Day T-shirt Printing in London</h1>
                                   <p class="teeprint-sl-short-des">
                                       Tee Print London provides the most affordable same 
                                       day T-shirt printing services across London and the 
                                       UK. We take great care with each order, ensuring prompt 
                                       delivery. Our offerings go beyond custom T-shirts to 
                                       include hoodies, tote bags, caps, sportswear, workwear
                                   </p>
                                   <button data-navigateto="/quote" class="teeprint-button teeprint-theme-btn teeprint-sl-button">Get A Free Quote<i class="la la-arrow-right"></i></button>
                               </div>
                               <div class="teeprint-column-6">
                                   <img src="/img/Home/Leonardo_Phoenix_10_A_gorgeously_styled_highquality_illustrati_1.jpg" alt="slider img" />
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div class="teeprint-owl-carousel-item">
               <div class="teeprint-owl-intro-slide">
                   <div class="teeprint-owl-intro-slide-overley">
                       <div class="teeprint-container">
                           <div class="teeprint-row teeprint-align-center">
                               <div class="teeprint-column-6">
                                   <h5 class="teeprint-sl-subtitle">Fast, Reliable, and Always On Time</h5>
                                   <h1 class="teeprint-sl-maintitle">Same Day Hoodie Printing in London</h1>
                                   <p class="teeprint-sl-short-des">
                                       Tee Print London provides the most affordable same 
                                       day T-shirt printing services across London and the 
                                       UK. We take great care with each order, ensuring prompt 
                                       delivery. Our offerings go beyond custom T-shirts to 
                                       include hoodies, tote bags, caps, sportswear, workwear
                                   </p>
                                   <button data-navigateto="/quote" class="teeprint-button teeprint-theme-btn teeprint-sl-button">Get A Free Quote<i class="la la-arrow-right"></i></button>
                               </div>
                               <div class="teeprint-column-6">
                                   <img src="/img/Hoodie/Leonardo_Phoenix_10_A_stylish_highquality_hoodie_from_Teeprint_2.jpg" alt="slider img" />
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div class="teeprint-owl-carousel-item">
               <div class="teeprint-owl-intro-slide">
                   <div class="teeprint-owl-intro-slide-overley">
                       <div class="teeprint-container">
                           <div class="teeprint-row teeprint-align-center">
                               <div class="teeprint-column-6">
                                   <h5 class="teeprint-sl-subtitle">Fast, Reliable, and Always On Time</h5>
                                   <h1 class="teeprint-sl-maintitle">Same Day Cap Printing in London</h1>
                                   <p class="teeprint-sl-short-des">
                                       Tee Print London provides the most affordable same 
                                       day T-shirt printing services across London and the 
                                       UK. We take great care with each order, ensuring prompt 
                                       delivery. Our offerings go beyond custom T-shirts to 
                                       include hoodies, tote bags, caps, sportswear, workwear
                                   </p>
                                   <button data-navigateto="/quote" class="teeprint-button teeprint-theme-btn teeprint-sl-button">Get A Free Quote<i class="la la-arrow-right"></i></button>
                               </div>
                               <div class="teeprint-column-6">
                                   <img src="/img/cap/Leonardo_Kino_XL_a_cap_image_written_teeprintlondon_on_that_ca_0.jpg" alt="slider img" />
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

onMounted(()=>{
    document.addEventListener('click', function(event) {
        const target = event.target;
        if (target.hasAttribute('data-navigateto')) {
            const to = target.getAttribute('data-navigateto');
            navigateTo(to)
        }
    });
})
</script>