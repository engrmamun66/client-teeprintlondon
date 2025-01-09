/**
 * All state is exported from here
 * State call example ► State('statename') 
 */
const State = (statename) => {
    switch (statename) { 
        case 'common':
            return useCommonState('common').value
            break;  
        case 'menu':
            return useMenuState('menu').value
            break;
        case 'response':
            return useResponseState('response').value
            break;  
        default:
            console.warn('composables/__index.js :: ' + statename + ' not found')
            break;
    }
}
export { State }
