export default defineNuxtRouteMiddleware((to, from) => {

    if(!useCookie('expires_in').value) return navigateTo('/suadmin/login')
    if(useCookie('expires_in').value <= moment().valueOf()) return navigateTo('/suadmin/login')
  
});
