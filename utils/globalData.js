export const classMapping = {
    // green: 'status-active',
    // purple: 'status-refund',
    // yellow: 'status-pending',
    // red: 'status-on-hold',
    // redSoft: 'status-order-prep',
    // cyan: 'status-paid',
    // cyan2: 'status-fulfillment',
};
export const BTNCLASS = {
    green: '---',
   
};
 
export let globalData = {  
    yesNoList: [
        {
            id: 1,
            name: 'Yes',
        },
        {
            id: 0,
            name: 'No',
        },        
    ],
    noYesList: [
        {
            id: 0,
            name: 'No',
        }, 
        {
            id: 1,
            name: 'Yes',
        },             
    ],
    activeInactiveList: [
        {
            id: 1,
            name: 'Active',
        }, 
        {
            id: 0,
            name: 'Inactive',
        },             
    ],      
    datePickerOptions: {
        onlyTimePicker: false,
        skipAutomaticValue: true,
        displayIn: "modal",
        theme: "dark",
        minuteStep: "1",
    },
    timePickerOptions: {
        onlyTimePicker: true,
        displayIn: "modal",
        theme: "dark",
        minuteStep: "1",
    }, 
}