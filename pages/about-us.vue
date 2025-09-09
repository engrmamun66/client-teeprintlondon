<script setup lang="ts">
definePageMeta({
  titleTemplate: "% :: details",
  layout: "web",
});

function addToCart() {
  let imgElement = document.querySelector(
    ".teeprint-product-view-image img"
  ) as HTMLElement;

  cartAnimation({ element: imgElement }, () => {
    useNuxtApp().$emit("openInPageCart", true);
  });
}
</script>

<template>
  <div>
    <section class="teeprint-about-section">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="teeprint-about-content">
              <div class="section-main-heading">
                <h2 class="section-heading-title-big">
                  About Tee Print London
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Tee Print London is your trusted custom printing partner in
                  London, offering high-quality, same-day garment and
                  promotional printing with 24/7 availability. We bring your
                  ideas to life — whether it's for a business launch, birthday
                  celebration, holiday event, or personalized family gifts.
                </p>

                <h6>Our Mission</h6>
                <p>
                  To deliver top-quality custom printing that empowers
                  individuals and organizations to express their identity,
                  promote their cause, and celebrate their moments — with
                  creativity, professionalism, and precision.
                </p>

                <h6>What We Offer</h6>
                <div class="table-responsive">
                  <table class="privacy-table">
                    <tbody>
                      <tr>
                        <td>
                          Custom T-Shirts (Men, Women, Kids — Unisex & Fitted)
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Hoodies, Sweatshirts & Workwear (With Embroidery
                          Option)
                        </td>
                      </tr>
                      <tr>
                        <td>Tote Bags, Aprons & Caps</td>
                      </tr>
                      <tr>
                        <td>Sports Kits & Teamwear</td>
                      </tr>
                      <tr>
                        <td>Mugs, Stickers & Gift Items</td>
                      </tr>
                      <tr>
                        <td>
                          Large Format Printing — Banners, Roll-Ups, Posters,
                          Menus, Flyers, and Business Cards
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h6>Special Occasions & Theme Printing</h6>
                <div class="table-responsive">
                  <table class="privacy-table">
                    <tbody>
                      <tr>
                        <td>Christmas Family Matching T-Shirts</td>
                      </tr>
                      <tr>
                        <td>Halloween Event T-Shirts</td>
                      </tr>
                      <tr>
                        <td>Easter Celebration Shirts</td>
                      </tr>
                      <tr>
                        <td>Wedding Party & Engagement Tees</td>
                      </tr>
                      <tr>
                        <td>Funny T-Shirts & Graphic Prints</td>
                      </tr>
                      <tr>
                        <td>Theme-Based & Pop Culture T-Shirts</td>
                      </tr>
                      <tr>
                        <td>Birthday Tees & Celebration Banners</td>
                      </tr>
                      <tr>
                        <td>
                          Father's Day, Mother's Day & Family Holiday
                          Collections
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h6>Why Choose Tee Print London?</h6>
                <div class="table-responsive">
                  <table class="privacy-table">
                    <tbody>
                      <tr>
                        <td>
                          Open 24/7 — Order Anytime, Collect or Deliver Same Day
                        </td>
                      </tr>
                      <tr>
                        <td>Same-Day UK Delivery Available</td>
                      </tr>
                      <tr>
                        <td>Free Design Support & Mock-ups</td>
                      </tr>
                      <tr>
                        <td>Embroidery & Eco-Friendly Printing Options</td>
                      </tr>
                      <tr>
                        <td>Bulk Discounts for Events, Teams & Charities</td>
                      </tr>
                      <tr>
                        <td>No Minimum Order — Print What You Need</td>
                      </tr>
                      <tr>
                        <td>
                          Convenient Central London Location — 38 Worland Road,
                          London E15 4EY
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h6>Our Commitment to You</h6>
                <p>
                  At Tee Print London, we don't just print — we empower. From a
                  single custom shirt to full event merchandise kits, our goal
                  is to provide you with products that look great, feel great,
                  and reflect your message with impact.
                </p>
                <p>
                  We combine the latest printing technology with hands-on
                  customer care to ensure your order is delivered accurately,
                  quickly, and beautifully.
                </p>

                <h6>Contact Us</h6>
                <div class="table-responsive">
                  <table class="privacy-table">
                    <thead>
                      <tr>
                        <th>Method</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Phone/WhatsApp</td>
                        <td>+44 7888 185120</td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>support@teeprintlondon.co.uk</td>
                      </tr>
                      <tr>
                        <td>Website</td>
                        <td>www.teeprintlondon.co.uk</td>
                      </tr>
                      <tr>
                        <td>Address</td>
                        <td>
                          38 Worland Road,<br />
                          London E15 4EY
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 teeprint-about-img-container">
            <div class="teeprint-about-img">
              <img src="/img/Cotton_T_shirt/1.jpg" alt="about image" />
            </div>
            <div class="teeprint-about-img">
              <img src="/img/Cotton_T_shirt/2.jpg" alt="about image" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container mt-5">
      <web-DuelCard
        img_left="/img/Polo_T_shirt/13.jpg"
        img_right="/img/Polo_T_shirt/Leonardo_Phoenix_10_a_young_man_with_a_strong_jawline_and_a_co_3.jpg"
        paragraph="We bring your vision to life with creative designs that leave a lasting impression. Your dream is our mission, your satisfaction is our commitment, and delivering excellence is our promise."
      />
    </div>
  </div>
</template>

<style scoped>
.privacy-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.privacy-table th,
.privacy-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.privacy-table th {
  background-color: #f4f4f4;
  font-weight: bold;
}

/* Make tables responsive */
.table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

/* Mobile styles */
@media (max-width: 767.98px) {
  .teeprint-about-img-container {
    display: none;
  }

  .section-heading-title-big {
    font-size: 1.8rem; /* Adjust as needed */
    margin-top: 5rem;
    margin-bottom: 1rem;
    display: block; /* Ensure it's visible */
  }

  .teeprint-about-content {
    padding: 0 15px; /* Add some padding on mobile */
  }

  .privacy-table th,
  .privacy-table td {
    padding: 6px; /* Slightly smaller padding on mobile */
    font-size: 0.9rem; /* Slightly smaller font on mobile */
  }
}
</style>
