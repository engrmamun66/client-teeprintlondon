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
                  Privacy Policy
                </h2>
              </div>
              <div class="aboutus-list">
                <p>
                  Welcome to Tee Print London. We are committed to protecting
                  your privacy and ensuring that your personal data is handled
                  securely and in compliance with UK data protection laws,
                  including the UK GDPR and the Data Protection Act 2018.
                </p>

                <h6 class="mt-2">Information We Collect</h6>
                <div class="table-responsive">
                  <table class="privacy-table">
                    <thead>
                      <tr>
                        <th>Type of Data</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Name</td>
                        <td>
                          Your full name as provided during checkout or account
                          creation.
                        </td>
                      </tr>
                      <tr>
                        <td>Email address</td>
                        <td>Used for order updates and communication.</td>
                      </tr>
                      <tr>
                        <td>Phone number</td>
                        <td>Used for delivery updates and customer support.</td>
                      </tr>
                      <tr>
                        <td>Billing and shipping address</td>
                        <td>Required for order processing and delivery.</td>
                      </tr>
                      <tr>
                        <td>Payment details</td>
                        <td>
                          Processed securely via third-party payment processors.
                        </td>
                      </tr>
                      <tr>
                        <td>Order history</td>
                        <td>
                          Stored for customer support and account management.
                        </td>
                      </tr>
                      <tr>
                        <td>Cookies and usage data</td>
                        <td>
                          Used to improve website functionality and user
                          experience.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h6>How We Use Your Information</h6>
                <div class="table-responsive">
                  <table class="privacy-table">
                    <thead>
                      <tr>
                        <th>Purpose</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Process and fulfill orders</td>
                        <td>To deliver your purchased products.</td>
                      </tr>
                      <tr>
                        <td>Provide customer support</td>
                        <td>To assist with inquiries and resolve issues.</td>
                      </tr>
                      <tr>
                        <td>Send updates and promotions</td>
                        <td>
                          With your consent, we send order updates and
                          promotional offers.
                        </td>
                      </tr>
                      <tr>
                        <td>Improve website and services</td>
                        <td>To enhance user experience and functionality.</td>
                      </tr>
                      <tr>
                        <td>Comply with legal obligations</td>
                        <td>To meet regulatory and legal requirements.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h6>Data Sharing</h6>
                <div class="table-responsive">
                  <table class="privacy-table">
                    <thead>
                      <tr>
                        <th>Third Party</th>
                        <th>Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Payment processors</td>
                        <td>To securely process payments.</td>
                      </tr>
                      <tr>
                        <td>Delivery services</td>
                        <td>To fulfill and deliver your orders.</td>
                      </tr>
                      <tr>
                        <td>Legal and regulatory authorities</td>
                        <td>When required by law.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h6>Your Rights</h6>
                <div class="table-responsive">
                  <table class="privacy-table">
                    <thead>
                      <tr>
                        <th>Right</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Access, correct, or delete your data</td>
                        <td>
                          You can request access to or modification of your
                          personal data.
                        </td>
                      </tr>
                      <tr>
                        <td>Withdraw consent for marketing</td>
                        <td>
                          You can opt out of promotional communications at any
                          time.
                        </td>
                      </tr>
                      <tr>
                        <td>Request data portability</td>
                        <td>
                          You can request a copy of your data in a
                          machine-readable format.
                        </td>
                      </tr>
                      <tr>
                        <td>Complain to the ICO</td>
                        <td>
                          If you believe your rights have been violated, you can
                          file a complaint.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

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
                        <td>Email</td>
                        <td>support@teeprintlondon.co.uk</td>
                      </tr>
                      <tr>
                        <td>Phone</td>
                        <td>+44 7888 185120</td>
                      </tr>
                      <tr>
                        <td>Address</td>
                        <td>
                          38 Worland Road,<br />
                          City - London,<br />
                          County - England,<br />
                          Postcode - E15 4EY
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
              <img src="/img/Polo_T_shirt/2.jpg" alt="about image" />
            </div>
            <div class="teeprint-about-img">
              <img src="/img/Polo_T_shirt/5.jpg" alt="about image" />
            </div>
            <div class="teeprint-about-img">
              <img src="/img/Polo_T_shirt/14.jpg" alt="about image" />
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

/* Hide images on mobile */
@media (max-width: 767.98px) {
  .teeprint-about-img-container {
    display: none;
  }
}

/* Make tables responsive */
.table-responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
</style>
