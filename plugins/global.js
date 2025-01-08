export default defineNuxtPlugin(nuxtApp => {
    
    

    return {
        provide: {          
            upper: (str) => str?.toUpperCase() || '',
            lower: (str) => str?.toLowerCase() || '',
            ucfirst: (str) => {
                if(!str) return ''
                str = String(str);
                return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
            },
            ucfirstOfWords: (text) => { // upper case, first char of each words
                if(!text) return '';
                text = String(text);
                const ucFirst = (str) => (str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
                return text.split(' ').map(ucFirst).join(' ');
            },
            isValidEmail: (email) => {
                let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return email.toLowerCase().match(emailPattern) != null
            },
            textTail: (text, limit = 27, tail = '...') => {
                if (text) return text.length <= limit ? text : Array.from(text).slice(0, limit).join('').trimEnd() + tail
            },            
            getLocal: (key) => {
                if(process.client){
                    return localStorage.getItem(key)
                }
            },
            setLocal: (key, value) => {
                if(process.client){
                    localStorage.setItem(key, value)
                }
            },
            last_letters: (text, limit=-15) => {
                if(text?.length){
                    let sliced_text = text.slice(limit)
                    if(text?.length > Math.abs(limit)) sliced_text = '...' + sliced_text
                    return sliced_text
                }
            },
        }
    }
})