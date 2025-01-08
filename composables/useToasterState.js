
const DURATION = 3000;

function emiToasterMessage(type, message = '', duration) {
    useNuxtApp().$emit('toaster', {
        message,
        type,
        duration,
        icon: `icon-${type}`
    })    
}

// NOTE: To show sticky toaster, pass duration = false or 0

const Toaster = {
    success: function (message = '', duration=DURATION) {
        emiToasterMessage('success', message, duration || 0); 
    },
    warning: function(message='', duration=DURATION) {  
        emiToasterMessage('warning', message, duration || 0); 
    },
    error: function(message='', duration=DURATION) {   
        emiToasterMessage('error', message, duration || 0); 
    },    
    system: function(message='', duration=DURATION) {   
        emiToasterMessage('system', message, duration || 0); 
    },
}

export { Toaster }; // We can call this function globally

export default function () {
    return useState('toaster', () => {
        return {
            toast: null,
        }
    })
}

