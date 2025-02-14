<template>
    <!-- <shimmer-effect class="mb-3" color="rgb(255, 0, 0, 30%)" count="10" height="40px"/> -->

    <template v-for="x in +count">
        <div class="shimmer" v-bind="$attrs" :class="{ 'animation-off': stopAnimaiton }" :style="`
            --bgMode:${MODE};
            --effectColor:${color};
            --shim-width:${width};
            --shim-height:${height};
            --shim-radius:${radius};
            --shim-speed:${speed};
            `">
            <slot :x="x"></slot>
        </div>
    </template>


</template>

<script setup>
let props = defineProps({
    /* -------------- */
    /*   Most Usage   */
    /* -------------- */
    bg: {
        default: 'light', // dark |  light
        required: false,
    },
    count: {
        default: 1,
        required: false,
    },
    width: {
        default: '100%',
        required: false,
    },
    height: {
        default: '40px',
        required: false,
    },
    radius: {
        default: '5px',
        required: false,
    },
    stopAnimaiton: {
        default: false,
        required: false,
        type: Boolean,
    },

    /* ----------------- */
    /*   Minimal Usage   */
    /* ----------------- */
    speed: {        
        default: '3s',
        required: false,
    },
    // bgColor: {        
    //     default: 'var(--bg-light)',
    //     required: false,
    // },
    color: {        
        default: '#2d2d2d3d', // green
        required: false,
    },
    
})

let MODE = props.bg == 'dark' ? 'green' : '#f8f8f8'
</script>

<style scoped>
.just-test {
    --dddd: #36c9233f;
    --dddd: #2d2d2d3d;
}

@keyframes shimmer {
    from {
        background-position: 200% 0;
    }

    to {
        background-position: calc(200% * -1) 0;
    }
}

.shimmer {    
    /* background: v-bind(bgColor) linear-gradient(to right, transparent 0%, v-bind(color) 25%, transparent 50%); */
    background: var(--bgMode) linear-gradient(to right, transparent 0%, var(--effectColor) 25%, transparent 50%);
    background-size: 200% 100%;
    width: var(--shim-width);
    height: var(--shim-height);
    border-radius: var(--shim-radius);
    overflow: hidden;
}
.shimmer:not(.animation-off) {
    animation: shimmer var(--shim-speed) linear infinite;   
}
</style>