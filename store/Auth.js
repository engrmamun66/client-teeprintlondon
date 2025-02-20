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

                navigateTo({name: 'dashboard'});
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
                setTimeout(() => {
                    localStorage.removeItem("access_token"); 
                    navigateTo({name: 'login'});
                }, 500);
            }
        } catch (error) {
            loading.value = false;
            if (error != 'Access token has expired') this.router.push({ name: 'Login' });
        }
    }

    async function checkAccessToken(payload = {}) {
        payload = { access_token: localStorage.getItem('access_token') };
        try {
            let response = await Auth.checkAuthentication(payload);
            if (response.status == 200 && response.data.message === true) {
                window.open('/' + localStorage.getItem('slug'), '_blank');
            }
        } catch (error) {
            if (error != 'Access token has expired') {
                commonStore.toaster('error', error.response?.data?.message || 'Authentication failed');
            }
        } finally {
            loading.value = false;
        }
    }

    return { login, logout, registration, checkAccessToken, loginFormError, registrationFormError, loading, lang, switchedToInstituteDashboard };
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
