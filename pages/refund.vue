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
                <h2 class="section-heading-title-big">Refund Policy</h2>
              </div>
              <div class="aboutus-list">
                <p>
                  At Tee Print London, we strive to ensure your complete
                  satisfaction with every purchase. If you are not entirely
                  happy with your order, we offer a straightforward refund
                  policy to make the process as easy as possible.
                </p>

                <h6>Eligibility for Refunds</h6>
                <div class="table-responsive">
                  <table class="privacy-table">
                    <thead>
                      <tr>
                        <th>Condition</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Unworn and Unwashed</td>
                        <td>
                          Items must be in their original condition, unworn,
                          unwashed, and with all tags attached.
                        </td>
                      </tr>
                      <tr>
                        <td>Original Packaging</td>
                        <td>
                          Items must be returned in their original packaging.
                        </td>
                      </tr>
                      <tr>
                        <td>Proof of Purchase</td>
                        <td>
                          A valid receipt or order number is required for all
                          returns.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h6>Refund Process</h6>
                <div class="table-responsive">
                  <table class="privacy-table">
                    <thead>
                      <tr>
                        <th>Step</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1. Initiate Return</td>
                        <td>
                          Contact our customer support team within 14 days of
                          receiving your order to initiate a return.
                        </td>
                      </tr>
                      <tr>
                        <td>2. Ship the Item</td>
                        <td>
                          Package the item securely and ship it back to us using
                          a tracked delivery service.
                        </td>
                      </tr>
                      <tr>
                        <td>3. Inspection</td>
                        <td>
                          Once received, we will inspect the item to ensure it
                          meets our return conditions.
                        </td>
                      </tr>
                      <tr>
                        <td>4. Refund Issued</td>
                        <td>
                          If the item is approved, we will process your refund
                          within 5-7 business days.
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
                <h6>Non-Refundable Items and condition</h6>
                <div class="table-responsive">
                  <table class="privacy-table">
  <tbody>
    <tr>
      <td>Gift cards</td>
    </tr>
    <tr>
      <td>Items not in original condition</td>
    </tr>
    <tr>
      <td>Products collected on-site</td>
    </tr>
    <tr>
      <td>Minor printing issues not visible from 3 feet</td>
    </tr>
    <tr>
      <td>Customized or personalized items (unless defective)</td>
    </tr>
    <tr>
      <td>Items damaged due to misuse or wear</td>
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
