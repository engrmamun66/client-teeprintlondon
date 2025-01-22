import axios from 'axios'

function fullURL(config) {
    return JSON.stringify(config?.params || []);
}

function endPoint(config) {
    try {
        return config.url //+ `<${config?.method}>`;
    } catch (error) {
        // console.warn('endPoint', {config});
        // navigateTo({name: 'login'});
        // return '/not-found';
        console.log('userApiState__endPoint()__error::', {error, config});
    }
}

function createApiHandler({accessToken}) {
    try {
        let options = {
            baseURL: useRuntimeConfig()?.public?.['API_BASE_URL'],
            timeout: 0
        } 
        
        if (accessToken){
            // authorization: "Bearer" + " " +  useCookie('access_token').value || ''

            options['headers'] = {                
                   authorization: "Bearer" + " " +  useCookie('access_token').value || ''

            }

        }
    
        let api = axios.create(options)
        let loader_timeout = 12000
        api.interceptors.request.use((config) => {
            if(config.formData === true){
                config.headers = { ...config.headers, ...{ "Content-Type": "multipart/form-data" }}
            }
            if (config.url != 'auth/logout') {
                // authMethods.logoutIfExpireToken()
            }
             
            /* -------------------------------------------------------------- */
            /*           Page Loader Control With API response                */
            /* -------------------------------------------------------------- */ 
         
            clearTimeout( State('response').pendings[fullURL(config)] )   
            State('response').endPoints[endPoint(config)] = true //Pusing in endPoints  
            if(config?.noLoader !== true){
                State('response').pendings[fullURL(config)] = setTimeout(() => {
                    delete State('response').pendings[fullURL(config)];
                    delete State('response').endPoints[endPoint(config)];
                }, loader_timeout);
            }        
       
            return config
        }, (error) => {
            return Promise.reject(error)
        })
        api.interceptors.response.use((response) => {
            /* -------------------------------------------------------------- */
            /*           Page Loader Control With API response                */
            /* -------------------------------------------------------------- */
            setTimeout(() => {
                delete State('response').pendings[fullURL(response.config)];
                delete State('response').endPoints[endPoint(response.config)];
            }, 100);
            return response
        }, (error) => {
    
            delete State('response').pendings[fullURL(error.config)];
            delete State('response').endPoints[endPoint(error.config)];
            
            return Promise.reject(error);
        })
        return api
    } catch (error) {
        console.warn('interceptor_error::', error);
    }
}

 
function Api() {
    return createApiHandler({accessToken: false})
}
function ApiAuth({accessToken=true}={}) {
    return createApiHandler({accessToken: true})
}

 

export { Api, ApiAuth }

