<template>
  <div class="position-relative">
    <section class="login-register">
      <div class="login-register-overlay">
        <div class="container fullheight-100">
          <Teleport to="body">
            <Toaster></Toaster>
          </Teleport>
          <div
            class="row align-items-center justify-content-center fullheight-100"
          >
            <div class="login-container">
              <div class="login-container-body">
                <div class="text-center">
                  <img src="/img/logo.jpg" class="img-fluid login-logo" style="border-radius: 20%;" />
                </div>
                <div class="login-heading">Welcome to the Admin Panel!</div>
                <div class="login-subheading">Sign in to continue</div>

                <div class="login-form">
                  <form class="login">
                    <div class="form-group">
                      <label>Email</label>
                      <input
                        v-model="userData.email"
                        type="text"
                        class="form-control"
                        placeholder="Enter your email"
                        @blur="validateEmail"
                      />
                      <small v-if="errors.email" class="text-danger">{{
                        errors.email
                      }}</small>
                    </div>

                    <div class="form-group">
                      <label>Password</label>
                      <div class="password-input-container">
                        <input
                          v-model="userData.password"
                          :type="showPassword ? 'text' : 'password'"
                          class="form-control"
                          placeholder="Enter your password"
                          @blur="validatePassword"
                        />
                        <span
                          class="password-toggle-icon"
                          @click="togglePasswordVisibility"
                        >
                          <i
                            :class="
                              showPassword ? 'las la-eye' : 'las la-eye-slash'
                            "
                            style="font-size: 20px; color: #666"
                          ></i>
                        </span>
                      </div>
                      <small v-if="errors.password" class="text-danger">{{
                        errors.password
                      }}</small>
                    </div>

                    <div class="form-group mt-4 mb-0">
                      <button
                        type="button"
                        class="btn sub-btn"
                        @click.prevent="submitLoginForm"
                        :disabled="isSubmitting"
                      >
                        Sign In
                        <BtnLoader
                          :show="H.isPendingAnyApi('Auth:login')"
                          :color="'white'"
                        ></BtnLoader>
                      </button>
                    </div>
                  </form>
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
import { ref } from "vue";
import { useAuthStore } from "~/store/Auth";

const authStore = useAuthStore();
const userData = ref({ email: "", password: "" });
const showPassword = ref(false);
const errors = ref({ email: null, password: null });
const isSubmitting = ref(false);

// Toggle password visibility
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

definePageMeta({
  keepalive: false,
  middleware: ["auth"],
  key: (route) => route.fullPath,
  layout: "auth",
  name: "login",
});

// Email validation
const validateEmail = () => {
  if (!userData.value.email) {
    errors.value.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.value.email)) {
    errors.value.email = "Enter a valid email address.";
  } else {
    errors.value.email = null;
  }
};

// Password validation
const validatePassword = () => {
  if (!userData.value.password) {
    errors.value.password = "Password is required.";
  } else if (userData.value.password.length < 6) {
    errors.value.password = "Password must be at least 6 characters.";
  } else {
    errors.value.password = null;
  }
};

// Submit form
const submitLoginForm = async () => {
  validateEmail();
  validatePassword();

  if (!errors.value.email && !errors.value.password) {
    isSubmitting.value = true;
    await authStore.login(userData.value);
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.text-danger {
  font-size: 0.875rem;
  color: red;
}
.login-register {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-register-overlay {
  background: rgba(141, 139, 139, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.login-container {
  background: linear-gradient(135deg, #8998dd 0%, #764ba2 100%);
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.login-logo {
  width: 100px;
  margin-bottom: 20px;
}

.login-heading {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 10px;
}

.login-subheading {
  font-size: 14px;
  color: #000000;
  text-align: center;
  margin-bottom: 30px;
  margin-right: 1rem;
}

.login-form .form-group {
  margin-bottom: 20px;
}

.login-form .form-group label {
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
  display: block;
}

.login-form .form-control {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  color: #333;
  transition: border-color 0.3s ease;
}

.login-form .form-control:focus {
  border-color: #667eea;
  outline: none;
}

.sub-btn {
  width: 100%;
  padding: 1px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.sub-btn:hover {
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
}

.signup-container {
  text-align: center;
  margin-top: 20px;
}

.signUp-text {
  font-size: 14px;
  color: #666;
}

.signup-link {
  color: #667eea;
  text-decoration: none;
  font-weight: bold;
}

.signup-link:hover {
  text-decoration: underline;
}

.password-input-container {
  position: relative;
}

.password-toggle-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #666;
}

.password-toggle-icon:hover {
  color: #333;
}

.login-form .form-control {
  padding-right: 40px; /* Add space for the eye icon */
}
</style>
