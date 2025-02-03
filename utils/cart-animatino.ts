 

interface cartAnim { 
    element: HTMLElement
}



export function cartAnimation({element}: cartAnim, callback: Function ) {
 
    try {     

        let div = element // product imageElement as HTMLElement

        let bounds = div.getBoundingClientRect()
        let styles = window.getComputedStyle(div)
        let clonDiv = div?.cloneNode(true) as HTMLElement

       
        clonDiv.style.border = styles.border
        clonDiv.style.borderRadius = styles.borderRadius
        clonDiv.style.background = styles.background
        clonDiv.style.background = styles.background
        clonDiv.style.transition = '1s all'

        clonDiv.style.position = 'fixed'
        clonDiv.style.left = bounds.left + 'px'
        clonDiv.style.top = bounds.top + 'px'
        clonDiv.style.width = bounds.width + 'px'
        clonDiv.style.height = bounds.height + 'px'
        clonDiv.style.zIndex = '99999999'

        document.body.appendChild(clonDiv)

        setTimeout(() => {

            let headerCart = document.querySelector('#in_page_cart_icon') as HTMLElement

            let headerCartBound = headerCart.getBoundingClientRect()
      
    
            clonDiv.style.left = headerCartBound.left + 'px'
            clonDiv.style.top = headerCartBound.top + 'px'
            clonDiv.style.width = headerCartBound.width + 'px'
            clonDiv.style.height = headerCartBound.height + 'px'
            clonDiv.style.opacity = '0.8'

            setTimeout(() => {
                clonDiv.remove()
                useNuxtApp().$emit('increment_cart_item', 1)
                callback()
            }, 1000);
            
        }, 0);
 
    } catch (error) {
        
    }

}
