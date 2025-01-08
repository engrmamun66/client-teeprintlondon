import { Api } from '../utils/axios';
const prefix = 'auth'

export default {
    async login(payload = {}, config = {}){
        return await Api(false).post(`${prefix}/login`, payload, config)
    },
    async register(payload = {}, config = {}) {
        return await Api(false).post(`${prefix}/register`, payload, config)
    },
    async logout(payload={}, config={}){
        return await Api().post(`${prefix}/logout`, payload, config)
    },
    async refreshToken(payload = {}, config = {}){
        return await Api().post(`${prefix}/refresh`, payload, config)
    },
    async profile(payload = {}, config = {}){
        return await Api().post(`${prefix}/profile`, payload, config)
    },
    async checkAuthentication( payload = {}, config = {} ){
        return await Api().post(`${prefix}/check-auth`, payload, config)
    }
   
}