export default {
    async login(payload={}){
        return await ApiAuth().post('auth/login', payload)
    },
    async logout(payload={}){
        return await ApiAuth().post('auth/logout')
    },
   
}