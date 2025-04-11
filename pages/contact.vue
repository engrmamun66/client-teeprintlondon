<script setup>
import FrontendApi from "~/apis/web/Frontend";
import getMeta from "~/seo-meta";
useSeoMeta(getMeta("quote", "quote"));
definePageMeta({
  titleTemplate: "% :: Home",
  name: "contact",
  layout: "web",
});

let payload = reactive({
  type_of_service: 1,
  delivery_date: moment().subtract(1, "day").format(FORMATS.DB_DATE),
  name: null,
  email: null,
  files: [],
  phone: null,
  note: null,
});

let showPicker = ref(true);
let minDate = ref(moment().subtract(1, "day").format(FORMATS.DB_DATE));

watch(
  () => payload.type_of_service,
  (a, b) => {
    if (a == 1) {
      minDate.value = moment().add(0, "day").format(FORMATS.DB_DATE);
      payload.delivery_date = moment().add(0, "day").format(FORMATS.DB_DATE);
    } else if (a == 2) {
      minDate.value = moment().add(1, "day").format(FORMATS.DB_DATE);
      payload.delivery_date = moment().add(1, "day").format(FORMATS.DB_DATE);
    } else if (a == 3) {
      minDate.value = moment()
        .add(1 + 2, "day")
        .format(FORMATS.DB_DATE);
      payload.delivery_date = moment().add(3, "day").format(FORMATS.DB_DATE);
    }

    showPicker.value = false;
    setTimeout(() => {
      showPicker.value = true;
    }, 0);
  }
);

let loading = ref(false);
let showFileUploader = ref(true);

function clearPayload() {
  payload.type_of_service = 1;
  payload.delivery_date = null;
  payload.name = null;
  payload.email = null;
  payload.files = [];
  payload.phone = null;
  payload.note = null;
  showFileUploader.value = false;
  H.delay(() => (showFileUploader.value = true));
}
async function sendQuotation() {
  try {
    if (!payload.name) return Toaster.error("Full name is required");
    if (!payload.email) return Toaster.error("Email is required");
    if (!payload.phone) return Toaster.error("Phone is required");
    loading.value = true;

    FrontendApi.submitContact(payload)
      .then((respoonse) => {
        if (respoonse.data.success) {
          clearPayload();
          Toaster.success(
            "Thank you for your message! We will get back to you soon."
          );
        }
      })
      .catch((error) => {
        if (error?.response?.data?.message) {
          Toaster.error(error.response?.data?.message);
        }
      })
      .finally(() => {
        H.delay(() => (loading.value = false), 500);
      });
  } catch (error) {}
}
</script>

<template>
  <section class="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <div class="contact-infoinquery">
            <div class="row">
              <!-- Contact Information -->
              <div class="col-lg-3 col-md-4 contact-leftside">
                <div class="row">
                  <div class="col-md-12 text-center contact-info">
                    <div class="contact-circle">
                      <i class="la la-map-marker"></i>
                    </div>
                    <h5>Address</h5>
                    <div class="branch-address">
                      <span
                        >38 Worland Road,<br />
                        City - London,<br />
                        County - England,<br />
                        Postcode - E15 4EY
                      </span>
                    </div>
                  </div>
                  <div class="col-md-12 text-center contact-info">
                    <a
                      href="mailto:support@teeprintlondon.co.uk"
                      class="teeprint-number"
                    >
                      <div class="contact-circle">
                        <i class="la la-envelope-open"></i>
                      </div>
                    </a>
                    <h5>Email</h5>
                    <a
                      href="mailto:support@teeprintlondon.co.uk"
                      class="teeprint-number"
                      ><span> support@teeprintlondon.co.uk</span></a
                    >
                  </div>
                  <div class="col-md-12 text-center contact-info">
                    <div class="contact-circle">
                      <a href="tel:+447888185120" class="phone-link">
                        <i class="la la-phone"></i
                      ></a>
                    </div>
                    <h5>Phone</h5>
                    <a href="tel:+447888185120" class="phone-link"
                      >+44 7888 185120</a
                    >
                  </div>
                </div>
              </div>

              <!-- Contact Query -->
              <div class="col-lg-9 col-md-8 contact-form">
                <h3 class="text-center mb-2 mt-3">Contact</h3>
                <div class="contact-linbar"></div>
                <form @submit.prevent="sendQuotation">
                  <div class="row">
                    <div class="col-md-12 mb-2"></div>

                    <!-- Fields -->
                    <!-- Fields -->
                    <!-- Fields -->
                    <!-- <div class="col-md-12">
                      <div class="form-group">
                        <label>Maximum Delivery Date</label>
                        <DatePicker
                          v-if="showPicker"
                          v-model="payload.delivery_date"
                          use="single"
                          input-size="bg"
                          @change="log"
                          :min-date="minDate"
                        ></DatePicker>
                        <DatePicker
                          v-else
                          v-model="payload.delivery_date"
                          use="single"
                          input-size="bg"
                          @change="log"
                          :min-date="minDate"
                        ></DatePicker>
                      </div>
                    </div> -->
                    <div class="col-md-12">
                      <div class="form-group">
                        <label
                          >Full Name <span class="required-star">*</span>
                        </label>
                        <input
                          v-model="payload.name"
                          type="text"
                          class="form-control"
                          placeholder="Full Name"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label
                          >Email Address
                          <span class="required-star">*</span></label
                        >
                        <input
                          v-model="payload.email"
                          type="email"
                          class="form-control"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label
                          >Phone Number
                          <span class="required-star">*</span></label
                        >
                        <input
                          v-model="payload.phone"
                          type="text"
                          class="form-control"
                          placeholder="E.g. +44 07960686747"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Notes</label>
                    <textarea
                      v-model="payload.note"
                      class="form-control"
                      rows="3"
                      placeholder="Write your requirements E.g. product type, quantity, size, artwork placement area etc."
                    ></textarea>
                  </div>
                  <div class="colmd-6" v-if="showFileUploader">
                    <div class="form-group">
                      <label for="Upload File">Upload Artwork</label>
                      <web-DropFiles
                        v-model="payload.files"
                        :acceptOnlyImage="false"
                        :url="null"
                      ></web-DropFiles>
                    </div>
                  </div>
                  <div class="form-group text-right">
                    <button
                      @click.prevent.stop="sendQuotation"
                      type="submit"
                      class="teeprint-button teeprint-theme-btn query-submit-btn"
                    >
                      Send Message
                      <BtnLoader v-if="loading" color="white"></BtnLoader>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12 col-md-12 map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1240.7230805709628!2d0.00641884389052932!3d51.54171735688286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603218eac813d%3A0x48df07ec18e11c6c!2sStirling%20Apparel%20Ltd!5e0!3m2!1sen!2sbd!4v1741951227623!5m2!1sen!2sbd"
            height="200"
            style="border: 0; width: 100%; border-radius: 10px"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="container mt-5">
          <web-DuelCard
            img_left="/img/quote-page-card-image-1.jpeg"
            img_right="/img/quote-page-card-image-2.jpeg"
            paragraph="We bring your vision to life with creative designs that leave a lasting impression. Your dream is our mission, your satisfaction is our commitment, and delivering excellence is our promise."
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.bg_animation {
  --bcolor: #00000015;
  --bspeed: 7s;
}
.bg_animation {
  background: linear-gradient(
    to right,
    transparent 0%,
    var(--bcolor) 25%,
    transparent 50%
  );
  background-size: 200% 300vh;
  animation: shimmerEffect var(--bspeed) linear infinite;
}

@keyframes shimmerEffect {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

@-webkit-keyframes shimmerEffect {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.required-star {
  color: red;
  font-weight: bold; /* Optional: Make it bold for emphasis */
}
</style>
