import { defineStore, acceptHMRUpdate } from "pinia";
import { useCommonStore } from '~/store/Common';
import Auth from '../apis/Auth';

export const useAuthStore = defineStore("auth", () => {
    let loginFormError = ref({ type: null, message: null, messages: { email: [], password: [] }, institute_name: [], first_name: [] });
    let loading = ref(false);
    let lang = ref('bl');

    let switchedToInstituteDashboard = ref(false)
    let registrationFormError = ref({ type: null, message: null, messages: { first_name: [], last_name: [], email: [], password: [], password_confirmation: [], phone: [], institute_address: [] } });
    const commonStore = useCommonStore();

    async function login(payload = {}) {
        try {
            loading.value = true;
            let response = await Auth.login(payload);
            if (response.status == 200) { 
                useCookie('access_token').value = response?.data?.data?.access_token 
                localStorage.setItem('user', JSON.stringify(response?.data?.data?.user));
                
                // useCookie('expires_in').value = moment().add(86400, 'seconds').valueOf(); // default: 86400 secods = 24h
                useCookie('expires_in').value = moment().add(7200, 'seconds').valueOf();
                reloadNuxtApp({path: '/suadmin'});
            }
        } catch (err) {
            loading.value = false;
            Toaster.error("Invalid Email or Password.")
            if (err?.response?.status == 401) {
                loginFormError.value.type = 401;
                loginFormError.value.message = err.response?.data?.message || err.response?.data?.error;
                commonStore.toaster('success', loginFormError?.value?.message);
            } else {
                loginFormError.value.type = 422;
                loginFormError.value.messages = err.response?.data.errors;
            }
            console.log("loginFormError.value.message", err);
        }
    }

    async function registration(payload = {}) {
        try {
            let response = await Auth.register(payload);
            if (response.status == 201) {
                commonStore.toaster('success', 'Registration successful');
                navigateTo({name: 'login'});
            }
        } catch (error) {
            if (error.response.status == 401) {
                registrationFormError.value.type = 401;
                registrationFormError.value.message = error.response.data.error;
            } else {
                registrationFormError.value.type = 422;
                registrationFormError.value.messages = error.response.data.errors;
            }
        }
    }

    async function logout() {
        try {
            loading.value = true;
            let response = await Auth.logout();
            if (response.status == 200) {
                loading.value = false; 
            }
        } catch (error) {
            loading.value = false;
            if (error != 'Access token has expired') this.router.push({ name: 'Login' });
        }
    }

   

    return { login, logout, registration, loginFormError, registrationFormError, loading, lang, switchedToInstituteDashboard };
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
