const Response = { 
    /**
     * 
     * @param {tt} >> tt = success | warning | error | system
     * @returns Boolean
     */
    isOk: function (response, {toaster = true, delay = 0, tt=null, smsg='', emsg=''}={}) { 
        try {
            /* -------------------------------------------------------------------------- */
            /*                            For Laravel Response                            */
            /* -------------------------------------------------------------------------- */
            if (response.status == 200) {
                if (response.data.success === true && (response.data.data || response.data.message) && toaster) {
                    if (typeof response.data.data == 'string') {
                        H.delay(() => Toaster[ tt || 'success' ](response.data.data), delay)
                    }
                    if (typeof response.data.message == 'string') {
                        H.delay(() => Toaster[ tt || 'success' ](smsg || response.data.message), delay)
                    }
                    if (typeof response.data.data == 'object' && Array.isArray(response.data.data)) {
                        response.data.data.forEach(msg => {
                            if(typeof msg === 'string')
                            H.delay(() => Toaster[ tt || 'success' ](smsg || msg), delay);
                        })
                    }
                }
                else if (response.data.message && toaster) {
                    if (typeof response.data.message == 'string') {
                        H.delay(() => Toaster[ tt || 'warning' ](emsg || response.data.message), delay)
                    }
                    if (typeof response.data.message == 'object' && Array.isArray(response.data.data)) {
                        response.data.message.forEach(msg => {
                            if(typeof msg === 'string')
                            H.delay(() => Toaster[ tt || 'warning' ](emsg || msg), delay);
                        })
                    }
                }
            }
            return [200, 201].includes(response.status) && response.data.success === true;

        } catch (error) {
            console.warn(error)
        }
    },
    parseData: function (response, skipCondition=false) {
        // limit : 15 page_no : 1 status : 200 success : true total : 1
        let is_paginate_response = ('limit' in response.data) && ('page_no' in response.data) && ('total' in response.data);
        if(response.data?.data && !is_paginate_response){
            return response.data?.data;
        } else {
            return response.data;
        }
    }
}



export { Response }

export default function () {
    return useState('response', () => ({
        pendings: {},
        endPoints: {},
    }))
}

