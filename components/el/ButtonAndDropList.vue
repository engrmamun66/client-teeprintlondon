<script setup>
let props = defineProps({
    modelValue: {
        required: false,
        default: null,
    },
    btnText: {
        required: false,
        default: 'Submit',
    },
    data: {
        required: false,
        default: [
            {
                id: 0,
                name: 'Sample -1'
            },
            {
                id: 1,
                name: 'Sample -2'
            },
            {
                id: 2,
                name: 'Sample -3'
            },
        ],
    },
    valueKey: {
        default: 'id',
        required: false,
    },
    displayKey: {
        default: 'name',
        required: false,
    },
    loading: {
        default: false,
        required: false,
    },
    
});

let emits = defineEmits(['click', 'clickItem']);
let show = ref(false);

function hideNow(e){
    show.value = false;
}

onMounted(() => {
    document.addEventListener('click', hideNow);
    document.addEventListener('mousemove', hideNow);
})

</script>

<template>
    <div v-bind="$attrs" @click.stop="false" @mousemove.stop="false">
        <div class="btn-group save-reaport-btn" role="group" aria-label="Button group with nested dropdown">
            <button @click="$emit('click', true)" class="ionic-btn" value="">{{ btnText }} <BtnLoader v-if="loading" :show="loading" color="black"></BtnLoader> </button>
    
            <div class="btn-group" role="group">
                <button @click.stop="show = !show" type="button" class="btn dropdown-toggle">
                    <i class="lni lni-chevron-down"></i>
                </button>
                <ul class="dropdown-menu fadeUp-3ms" :class="{ show }">
                    <template v-if="data?.length">
                        <template v-for="(item, i) in data || []" :key="i">
                            <slot name="item" :item="item" :index="i">
                                <li><a @click.stop.prevent="$emit('clickItem', {item, i})" href="#">{{ item?.[displayKey] }}</a></li>
                            </slot>
                        </template>
                    </template>
                    <template v-else>
                        <li><a class="text-white-50" href="#">Not Actions</a></li>
                    </template>
                </ul>
            </div>
        </div>
    </div>
</template>