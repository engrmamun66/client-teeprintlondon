<template>
    <i v-if="t=='edit'" class="las la-edit" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
     <i v-if="t=='download'" class="las la-cloud-download-alt" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='trash'" class="las la-trash-alt" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='plus'" class="las la-plus" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='bx-plus'" class="bx bx-plus" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='plus-circle'" class="las la-plus-circle" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='minus'" class="las la-minus" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='ellipsis'" class="las la-ellipsis-h" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='bars'" class="las la-bars" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='image'" class="las la-image" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='images'" class="las la-images" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='view'" class="las la-eye" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='sign-in'" class="las la-sign-in-alt" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='down-arrow'" class="lni lni-chevron-down" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='up-arrow'" class="lni lni-chevron-up" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='right-arrow'" class="lni lni-chevron-right" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='left-arrow'" class="lni lni-chevron-left" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='home'" class="las la-home" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='list'" class="las la-list-alt" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='map-marked'" class="las la-map-marked" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='map-pin'" class="las la-map-pin" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='map'" class="las la-map" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='industry'" class="las la-industry" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='user'" class="las la-user" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='users'" class="las la-users" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='add-user'" class="las la-user-plus" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='male'" class="las la-male" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='folder-plus'" class="las la-folder-plus" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='times-circle'" class="las la-times-circle" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='angle-left'" class="las la-angle-left" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='angle-right'" class="las la-angle-right" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='search'" class="las la-search" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='camera'" class="las la-camera-retro" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='circle'" class="las la-circle-notch" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='check-circle'" class="las la-check-circle" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='close'" class="la la-close" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='globe'" class="las la-globe-americas" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='help'" class="las la-question-circle" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='polygon'" class="las la-draw-polygon" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='media'" class="las la-photo-video" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='check'" class="las la-check" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='route'" class="las las la-route" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='link'" class="las la-external-link-square-alt" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='save'" class="las la-save" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='history'" class="las la-history" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='clock'" class="las la-clock" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='expand'" class="bx bx-expand" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='settings'" class="las la-cog" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='compress'" class="las la-compress" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='printer'" class="bx bx-printer" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='pdf'" class="las la-file-pdf" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='file'" class="las la-file-alt" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='book'" class="las la-book-open" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='microphone'" class="las la-microphone" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='lock'" class="las la-lock" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='reload'" class="las la-sync-alt" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='upload'" class="bx bx-cloud-upload" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='reset'" class="bx bx-reset" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='dollar-sign'" class="las la-dollar-sign" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='transfer'" class="bx bx-transfer-alt" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='package'" class="bx bx-package" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='3dot'" class="bx bx-dots-horizontal-rounded" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
</template>
<script setup>
let props = defineProps({
    t:{
        required:true,
        default:''
    },
    fontSize:{
        default:'',
        required:false,
    },
})
</script>
<style scoped>
i{
   cursor: pointer; 
}
</style>
