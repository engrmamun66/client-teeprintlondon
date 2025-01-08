<template>
  <div class="position-relative">
    <!-- <LoaderApi
      v-if="Object.keys(State('response').pending).length"
    /> -->
    <section class="login-register">
      <div class="login-register-overley">
        <div class="container ">
          <Teleport to="body">
              <!-- <Toaster animation="none"></Toaster> -->
          </Teleport>
          <div
            class="row align-items-center justity-content-center "
          >
            <div class="login-container">
              <div class="login-container-body">
                <div class="text-center">
                  <img
                    src="/img/logo.jpg"
                    class="img-fluid login-logo"
                  />
                </div>
                <div class="login-heading">সাইন আপ</div>
                <!-- <div class="login-subheading">Login to your account</div> -->
                <div class="login-from">
                  <form class="login">
                     <div class="form-group pr-4">
                        <label>প্রতিষ্ঠানের নাম</label>
                        <input
                          v-model="registrationFormData.institute_name"
                          type="text"
                          class="form-control"
                          placeholder="প্রতিষ্ঠানের নাম"
                        />
                        <span
                          v-if="
                            authStore.registrationFormError.type == 422 &&
                            Object.keys(authStore.registrationFormError.messages).length
                          "
                          class="text-danger p-1 font-weight-normal"
                        >
                          {{
                            authStore.registrationFormError.messages.hasOwnProperty("institute_name")
                              ? authStore.registrationFormError.messages.institute_name.join(", ")
                              : ""
                          }}
                        </span>
                      </div>
                    <div class="d-flex justify-content-between">
                      <div class="form-group pr-4">
                        <label>নামের প্রথম অংশ</label>
                        <input
                          v-model="registrationFormData.first_name"
                          type="text"
                          class="form-control"
                          placeholder="নামের প্রথম অংশ"
                        />
                        <span
                          v-if="
                            authStore.registrationFormError.type == 422 &&
                            Object.keys(authStore.registrationFormError.messages).length
                          "
                          class="text-danger p-1 font-weight-normal"
                        >
                          {{
                            authStore.registrationFormError.messages.hasOwnProperty("first_name")
                              ? authStore.registrationFormError.messages.first_name.join(", ")
                              : ""
                          }}
                        </span>
                      </div>
                      <div class="form-group">
                        <label>নামের শেষ অংশ</label>
                        <input
                          v-model="registrationFormData.last_name"
                          type="text"
                          class="form-control"
                          placeholder="নামের শেষ অংশ"
                        />
                        <span
                          v-if="
                            authStore.registrationFormError.type == 422 &&
                            Object.keys(authStore.registrationFormError.messages).length
                          "
                          class="text-danger p-1 font-weight-normal"
                        >
                          {{
                            authStore.registrationFormError.messages.hasOwnProperty("last_name")
                              ? authStore.registrationFormError.messages.last_name.join(", ")
                              : ""
                          }}
                        </span>
                      </div>
                    </div>
                    <div class="form-group pr-4">
                        <label>ঠিকানা</label>
                        <input
                        v-model="registrationFormData.institute_address"
                        type="text"
                        class="form-control"
                        placeholder="ঠিকানা"
                        />
                        <span
                        v-if="
                            authStore.registrationFormError.type == 422 &&
                            Object.keys(authStore.registrationFormError.messages).length
                        "
                        class="text-danger p-1 font-weight-normal"
                        >
                        {{
                            authStore.registrationFormError.messages.hasOwnProperty("institute_address")
                            ? authStore.registrationFormError.messages.institute_address.join(", ")
                            : ""
                        }}
                        </span>
                    </div>
                    <div class="form-group">
                        <label>ফোন</label>
                        <input
                        v-model="registrationFormData.phone"
                        type="text"
                        class="form-control"
                        placeholder="ফোন"
                        />
                        <span
                        v-if="
                            authStore.registrationFormError.type == 422 &&
                            Object.keys(authStore.registrationFormError.messages).length
                        "
                        class="text-danger p-1 font-weight-normal"
                        >
                        {{
                            authStore.registrationFormError.messages.hasOwnProperty("phone")
                            ? authStore.registrationFormError.messages.phone.join(", ")
                            : ""
                        }}
                        </span>
                    </div>
                    <div class="form-group">
                      <label>ই-মেইল</label>
                      <input
                        v-model="registrationFormData.email"
                        type="email"
                        class="form-control"
                        placeholder="ই-মেইল"
                      />
                      <span
                        v-if="
                          authStore.registrationFormError.type == 422 &&
                          Object.keys(authStore.registrationFormError.messages).length
                        "
                        class="text-danger p-1 font-weight-normal"
                      >
                        {{
                          authStore.registrationFormError.messages.hasOwnProperty("email")
                            ? authStore.registrationFormError.messages.email.join(", ")
                            : ""
                        }}
                      </span>
                    </div>

                    <div class="form-group pr-2">
                      <label>পাসওয়ার্ড</label>
                      <div class="d-flex">
                        <input
                          v-if="!showPassword"
                          @input="onChangePassword()"
                          v-model="registrationFormData.password"
                          type="password"
                          class="form-control"
                          placeholder="পাসওয়ার্ড"
                        />
                        <input
                          v-else
                          @input="onChangePassword()"
                          v-model="registrationFormData.password"
                          type="text"
                          class="form-control"
                          placeholder="পাসওয়ার্ড"
                        />
                        <i
                          @click="showPassword = !showPassword"
                          class="las la-eye pt-3"
                          style="
                            margin-left: -30px;
                            cursor: pointer;
                            color: white;
                            font-size: 18px;
                          "
                        ></i>
                      </div>

                      <span
                        v-if="
                          authStore.registrationFormError.type == 422 &&
                          Object.keys(authStore.registrationFormError.messages).length
                        "
                        class="text-danger p-1 font-weight-normal"
                      >
                        {{
                          authStore.registrationFormError.messages.hasOwnProperty("password")
                            ? authStore.registrationFormError.messages.password.join(", ")
                            : ""
                        }}
                      </span>
                    </div>
                    <div class="form-group">
                      <label>কনফার্ম পাসওয়ার্ড</label>

                        <input  v-if="!showPassword"
                          @blur="checkPasswordIsmatched()"
                          v-model="
                            registrationFormData.password_confirmation
                          "
                          type="password"
                          class="form-control"
                          placeholder="কনফার্ম পাসওয়ার্ড"
                        />
                        <input
                            v-else
                            @blur="checkPasswordIsmatched()"
                            v-model="
                              registrationFormData.password_confirmation
                            "
                            type="text"
                            class="form-control"
                            placeholder="কনফার্ম পাসওয়ার্ড"
                          />

                      <span
                        v-if="
                          authStore.registrationFormError.type == 422 &&
                          Object.keys(authStore.registrationFormError.messages).length
                        "
                        class="text-danger p-1 font-weight-normal"
                      >
                        {{
                          authStore.registrationFormError.messages.hasOwnProperty("password_confirmation")
                            ? authStore.registrationFormError.messages.password_confirmation.join(", ")
                            : ""
                        }}
                      </span>
                    </div>
                    <pre>{{ authStore.registrationFormError }}</pre>
                    <!-- <p
                      v-if="
                        authStore.error.type == 401 && authStore.error.message
                      "
                      class="text-danger pb-2"
                    >
                      <span class="text-danger p-1 font-weight-normal" role="alert"
                        >Unauthorized user</span
                      >
                    </p> -->
                    <div class="form-group mt-4 mb-0">
                      <button
                        type="button"
                        class="btn sub-btn"
                        @click.prevent="
                          submitRegistrationFrom()
                        "
                      >
                        সাইন আপ
                        <BtnLoader
                          class="ms-2"
                          :show="authStore.loading"
                          :color="'white'"
                        />
                      </button>
                      <!-- <div class="forgot-password">Forgot password?</div> -->
                    </div>
                  </form>
                  <!-- <div class="signup-container">
                      <div class="signUp-text">If you don't have an accout</div>
                      <a href="signup.html" class="signup-btn">Sign Up</a>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/store/Auth';
const authStore = useAuthStore();
import { useValidateForm } from '@/composables/useValidateForm';
const { validateForm, isValid } = useValidateForm();
let passwordNotMatchedError = ref(null);
let showPassword = ref(false);
let registrationFormData = ref({
    institute_name: null,
    first_name: null,
    last_name: null,
    email: null,
    password: null,
    password_confirmation: null,
    phone: null,
    institute_address: null
})
const validationRules = {
  first_name: { required: true },
  last_name: { required: true },
  institute_name: { required: true }, 
  institute_address: { required: true },
  email: { required: true },
  password: { required: true },
  password_confirmation: { required: true, match: 'password' },
  phone: { required: true }
};

definePageMeta({
  keepalive: false,
  middleware: ["auth"],
  key: (route) => route.fullPath,
  layout: "auth",
  name: 'registration',
});
useHead({
  titleTemplate: "%s | Registration",
});

function checkPasswordIsmatched() {
  if (
    registrationFormData.value.password !==
    registrationFormData.value.password_confirmation
  ) {
    passwordNotMatchedError.value = "Password does not matched";
  } else {
    passwordNotMatchedError.value = null;
  }
}
function onChangePassword() {
  registrationFormData.value.password_confirmation = null;
  passwordNotMatchedError.value = null;
}
async function submitRegistrationFrom(){
  authStore.loading = true;  
  await validateForm(registrationFormData.value, validationRules, authStore.registrationFormError.messages);
  if (isValid(authStore.registrationFormError.messages)) {
    authStore.registration(registrationFormData.value)
  } else {
    authStore.registrationFormError.type = 422
  }
   
}
onMounted(()=>{
  setTimeout(() => {
            let loader = document.getElementById('site_loader')
            if (loader != null) {
                document.getElementById('site_loader').style.display = 'none'
            }
        }, 500);
})
</script>
<style scoped>
.login-register{
  height:auto
}
.login-container{
  margin-top: 5%;
  margin-bottom: 20%;
  width:570px;
}
</style>
