<template>
  <div class="position-relative">
    <section class="login-register">
      <div class="login-register-overley">
        <div class="container fullheight-100">
          <Teleport to="body">
            <Toaster></Toaster>
          </Teleport>
          <div
            class="row align-items-center justity-content-center fullheight-100"
          >
            <div class="login-container">
              <div class="login-container-body">
                <div class="text-center">
                  <img src="/img/logo.jpg" class="img-fluid login-logo" />
                </div>
                <div class="login-heading">Sign In</div>
                <!-- <div class="login-subheading">Login to your account</div> -->

                <div class="login-from">
                  <form class="login">
                    <div class="form-group">
                      <label>Email</label>
                      <input
                        v-model="userData.email"
                        type="text"
                        class="form-control"
                        placeholder="ই-মেইল"
                      />
                      <span
                        v-if="
                          authStore.loginFormError.type == 422 &&
                          Object.keys(authStore.loginFormError.messages).length
                        "
                        class="text-danger p-1 font-weight-normal"
                      >
                        {{
                          authStore.loginFormError.messages.hasOwnProperty(
                            "email"
                          )
                            ? authStore.loginFormError.messages.email.join(", ")
                            : ""
                        }}
                      </span>
                    </div>
                    <div class="form-group">
                      <label>Password</label>
                      <input
                        v-model="userData.password"
                        type="password"
                        class="form-control"
                        placeholder="পাসওয়ার্ড"
                      />
                      <span
                        v-if="
                          authStore.loginFormError.type == 422 &&
                          Object.keys(authStore.loginFormError.messages).length
                        "
                        class="text-danger p-1 font-weight-normal"
                      >
                        {{
                          authStore.loginFormError.messages.hasOwnProperty(
                            "password"
                          )
                            ? authStore.loginFormError.messages.password.join(
                                ", "
                              )
                            : ""
                        }}
                      </span>
                    </div>
                    <!-- <p
                      v-if="
                        authStore.loginFormError.type == 401 && authStore.loginFormError.message
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
                        @click.prevent="submitLoginForm()"
                      >
                        Sign In
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
import { useAuthStore } from "~/store/Auth";
const authStore = useAuthStore();
const userData = ref({ email: null, password: null });
import { useValidateForm } from "@/composables/useValidateForm";
const { validateForm, isValid } = useValidateForm();
definePageMeta({
  keepalive: false,
  middleware: ["auth"],
  key: (route) => route.fullPath,
  layout: "auth",
  name: 'login',
});
useHead({
  titleTemplate: "%s | Login",
});

const validationRules = {
  email: { required: true },
  password: { required: true },
};
const submitLoginForm = async () => {
  await validateForm(
    userData.value,
    validationRules,
    authStore.loginFormError.messages
  );
  if (isValid(authStore.loginFormError.messages)) {
    await authStore.login(userData.value);
  } else {
    authStore.loginFormError.type = 422;
  }
};
onMounted(() => {});
</script>
