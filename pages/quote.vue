<script setup>
import FrontendApi from "~/apis/web/Frontend";

definePageMeta({
  titleTemplate: "% :: Home",
  name: "quote",
  layout: "web",
});

let payload = reactive({
  type_of_service: 1,
  delivery_date: moment().subtract(1, "day").format(FORMATS.DB_DATE),
  full_name: null,
  email: null,
  files: [],
  phone: null,
  requirements: null,
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
  payload.full_name = null;
  payload.email = null;
  payload.files = [];
  payload.phone = null;
  payload.requirements = null;
  showFileUploader.value = false;
  H.delay(() => (showFileUploader.value = true));
}
async function sendQuotation() {
  try {
    if (!payload.full_name) return Toaster.error("Full name is required");
    if (!payload.email) return Toaster.error("Email is required");
    if (!payload.phone) return Toaster.error("Phone is required");
    loading.value = true;

    FrontendApi.submitQuote(payload)
      .then((respoonse) => {
        if (respoonse.data.success) {
          clearPayload();
          Toaster.success("Quatation submit successful");
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
                      <span>7 Corsican Sq, London E3 3YD, United Kingdom</span>
                    </div>
                    <div class="branch-address">
                      <h6>Branch</h6>
                      <span>126 Commercial Road, E1 1NL</span>
                    </div>
                  </div>
                  <div class="col-md-12 text-center contact-info">
                    <div class="contact-circle">
                      <i class="la la-envelope-open"></i>
                    </div>
                    <h5>Email</h5>
                    <span>contact@gmail.com</span>
                  </div>
                  <div class="col-md-12 text-center contact-info">
                    <div class="contact-circle">
                      <i class="la la-phone"></i>
                    </div>
                    <h5>Phone</h5>
                    <span>+44 7888 185120</span>
                  </div>
                </div>
              </div>

              <!-- Contact Query -->
              <div class="col-lg-9 col-md-8 contact-form">
                <h3 class="text-center mb-2 mt-3">3 Min Quote Form</h3>
                <div class="contact-linbar"></div>
                <form @submit.prevent="sendQuotation">
                  <div class="row">
                    <div class="col-md-12 mb-2">
                      <div class="teeprint-radio-inline quote-page">
                        <div class="teeprint-radio-box">
                          <label class="teeprint-radio">
                            <input
                              type="radio"
                              name="delivery_type"
                              value="1"
                              @click="
                                ({ target }) =>
                                  (payload.type_of_service = target.value)
                              "
                              :checked="payload.type_of_service == 1"
                            />
                            Same Day Delivery
                            <span></span>
                          </label>
                        </div>
                        <div class="teeprint-radio-box">
                          <label class="teeprint-radio">
                            <input
                              type="radio"
                              name="delivery_type"
                              value="2"
                              @click="
                                ({ target }) =>
                                  (payload.type_of_service = target.value)
                              "
                              :checked="payload.type_of_service == 2"
                            />
                            Next Day Delivery
                            <span></span>
                          </label>
                        </div>
                        <div class="teeprint-radio-box">
                          <label class="teeprint-radio">
                            <input
                              type="radio"
                              name="delivery_type"
                              value="3"
                              @click="
                                ({ target }) =>
                                  (payload.type_of_service = target.value)
                              "
                              :checked="payload.type_of_service == 3"
                            />
                            Standard Delivery (3-7 Days)
                            <span></span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <!-- Fields -->
                    <!-- Fields -->
                    <!-- Fields -->
                    <div class="col-md-12">
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
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label
                          >Full Name <span class="required-star">*</span>
                        </label>
                        <input
                          v-model="payload.full_name"
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
                    <label>Requirements</label>
                    <textarea
                      v-model="payload.requirements"
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.2238941316784!2d-0.063695!3d51.5145948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603e63fbc2617%3A0x74202ec123e41897!2sTee%20Print%20London!5e0!3m2!1sen!2suk!4v1694444089240!5m2!1sen!2suk"
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
