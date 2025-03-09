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
    sizes: [
        { id: 1, name: "XS", unit_price: 0, quantity: 0 },
        { id: 2, name: "S", unit_price: 0, quantity: 0 },
        { id: 3, name: "M", unit_price: 0, quantity: 0 },
        { id: 4, name: "L", unit_price: 0, quantity: 0 },
        { id: 5, name: "XL", unit_price: 0, quantity: 0 },
        { id: 6, name: "XXL", unit_price: 0, quantity: 0 },
        { id: 7, name: "XXXL", unit_price: 0, quantity: 0 },
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
    staticPagesByParentCat: {
        'Men': '/same-day-delivery/category/men',
        'Flyers & Leaflets Printing': '/advertise/flyer_and_leaflet',
        'Folded Leaflets & Menu Printing': '/advertise/folded_flyer_and_menu',
        'Tickets & Vouchers Printing': '/advertise/ticket_and_voucher',
        'Business Cards Printing' :'/advertise/business_card',
        'Banners Printing' :'/advertise/advertising_banner',
        'Sign Printing' :'/advertise/sign_print',
        'Sticker Printing' : '/advertise/sticker_print',
        'Mug Printing' : '/advertise/mug_print',
        'Active wear' : '/cloth/active_wear',
        'Apron' : '/cloth/apron',
        'Tote bag' : '/cloth/tote_bag',
        'Cap' : '/cloth/cap',
        'Dress shirt' : '/cloth/dress_shirt',
        'Hoodies' : '/cloth/hoodie',
        'Organic Cotton T-shirt':'/cloth/cotton_t_shirt'

    }, 
}