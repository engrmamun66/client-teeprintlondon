 

interface cartAnim { 
    element: HTMLElement
}



export function cartAnimation({element}: cartAnim, callback: Function ):void {
 
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

        clonDiv.classList.remove('w-100')
        clonDiv.style.position = 'fixed'
        clonDiv.style.left = `${bounds.left}px`;
        clonDiv.style.top = `${bounds.top}px`;
        clonDiv.style.width = `${bounds.width}px`;
        clonDiv.style.height = `${bounds.height}px`; 
        clonDiv.style.zIndex = '99999999'

        document.body.appendChild(clonDiv)  
        
        setTimeout(() => {

            let cartElelemnt = document.querySelector('#in_page_cart_icon') as HTMLElement

            let cartElementBound = cartElelemnt.getBoundingClientRect()
      
    
            clonDiv.style.left = cartElementBound.left + 'px'
            clonDiv.style.top = cartElementBound.top + 'px'
            clonDiv.style.width = '50px'
            clonDiv.style.height = '50px'
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
