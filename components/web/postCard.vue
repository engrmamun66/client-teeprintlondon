<template>
    <div class="col-xl-12 col-lg-12 col-12">
        <div class="teeprint-makes-box">
            <div class="teeprint-makes-box-image" :style="`order:${right ? 2 : 0}`">
                <div class="teeprint-makes-overlay"></div>
                <div class="teeprint-makes-image">
                    <img :src="imageUrl" alt="makes iamge" />
                </div>
            </div>
            <div class="teeprint-makes-content">
                <div class="teeprint-makes-content-inner">
                    <h3 class="teeprint-makes-title">
                        {{ title }}
                    </h3>
                    <p class="teeprint-makes-short-des">
                        <slot>
                            Need custom t-shirts in a hurry for your campaign, event, 
                            or festival? Tee Print London is your go-to for fast, reliable 
                            solutions. We offer same day t-shirt printing with delivery 
                            across London, and next day t-shirt printing for customers 
                            throughout the UK. Our 24/7 service ensures you can place 
                            your order anytime and receive high-quality, custom printed 
                            t-shirts when you need them most. Whether it’s a last-minute 
                            request or a planned order, we deliver fast and affordable 
                            printing without compromising on quality. Count on Tee Print 
                            London to meet your urgent t-shirt printing needs.
                        </slot>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
let props = defineProps({
    title: {
        default: 'This is the title of post',
        required: false,
    },
    imageUrl: {
        default: '/img/Home/247.jpg',
        required: false,
    },
    right: {
        default: false,
        required: false,
    },
})
</script>