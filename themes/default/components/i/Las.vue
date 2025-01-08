<template>
    <i v-if="t=='edit'" class="las la-edit" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='trash'" class="las la-trash-alt" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='plus'" class="las la-plus" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='plus-circle'" class="las la-plus-circle" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='minus'" class="las la-minus" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='ellipsis'" class="las la-ellipsis-h" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='bars'" class="las la-bars" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='view'" class="las la-eye" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='sign-in'" class="las la-sign-in-alt" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='down-arrow'" class="lni lni-chevron-down" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='up-arrow'" class="lni lni-chevron-up" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='right-arrow'" class="lni lni-chevron-right" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='left-arrow'" class="lni lni-chevron-left" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='home'" class="las la-home" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='map-marked'" class="las la-map-marked" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='list'" class="las la-list-alt" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='map-pin'" class="las la-map-pin" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
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
    <i v-if="t=='sort-asc'" class="las la-sort-amount-up-alt" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='sort-desc'" class="las la-sort-amount-down" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
    <i v-if="t=='save'" class="las la-save" v-bind="$attrs" :style="fontSize ? 'font-size:' + fontSize : ''"></i>
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
