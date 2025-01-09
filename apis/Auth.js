const prefix = 'auth'

export const AuthEndpoints = {
    login: `${prefix}/login`,
    register: `${prefix}/register`,
    logout: `${prefix}/logout`,
    refreshToken: `${prefix}/refresh`,
    profile: `${prefix}/profile`,
    checkAuthentication: `${prefix}/check-auth`,

}

export default {
    async login(payload = {}, config = {}){
        return await ApiAuth().post(`${prefix}/login`, payload, config)
    },
    async register(payload = {}, config = {}) {
        return await ApiAuth().post(`${prefix}/register`, payload, config)
    },
    async logout(payload={}, config={}){
        return await ApiAuth().post(`${prefix}/logout`, payload, config)
    },
    async refreshToken(payload = {}, config = {}){
        return await ApiAuth().post(`${prefix}/refresh`, payload, config)
    },
    async profile(payload = {}, config = {}){
        return await ApiAuth().post(`${prefix}/profile`, payload, config)
    },
    async checkAuthentication( payload = {}, config = {} ){
        return await ApiAuth().post(`${prefix}/check-auth`, payload, config)
    }
   
}