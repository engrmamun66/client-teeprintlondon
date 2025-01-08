<template>
  <div class="position-relative">
    <h1 style="color: red">ID # {{ useRoute().params.id }} </h1>
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
  name: 'droute',
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
