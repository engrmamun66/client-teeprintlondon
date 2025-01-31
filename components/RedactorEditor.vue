<script setup>
/**
 * == Use Example ==
 * <button @click="$refs.editor.setContent('<h1>New Content</h1>')">Set Content</button>
 * <RedactorEditor v-model="content" ref="editor" class="mt-4" ></RedactorEditor>
 */

let props = defineProps({
    modelValue: {
        default: '',
        type: [String, null]
    },
    showEffect: {
        default: false,
        required: false,
    },
})

let myEmit = defineEmits(['update:modelValue', 'change'])

let show = ref(true);
let editor = ref(null);
const config = {
    theme: 'light',
    minHeight: '220px',
}

onMounted(() => {
    Redactor(editor.value, {
        ...config,
        content: props.modelValue || '',         
        subscribe: {
            'editor.change': function (html) {
                myEmit('update:modelValue', html.params.html || '');
                myEmit('change', html.params.html || '');
                return html;
            }
        }
    })
   
})

let isClientMode = computed(() => process.client);

defineExpose({
    setContent: function(content){
        show.value = false;
        setTimeout(() => {
            show.value = true;
            setTimeout(() => {
                Redactor(editor.value, {
                    ...config,
                    content: content || '', 
                    subscribe: {
                        'editor.change': function (html) {
                            myEmit('update:modelValue', html.params.html);
                            return html;
                        }
                    }
                }) 
            }, 0);
        }, 0);
    }
})

</script>

<template>
    <div v-if="show" v-show="isClientMode" v-bind="$attrs" class="bg-black" :style="`min-height:${config.minHeight};`" >
        <div class="relative" >
            <textarea ref="editor" />
            <!-- <template v-if="showEffect" >
                <ShimmerEffect :bg="'dark'" height="100%" radius="0px" class="absolute" style="left:0;top:0;z-index: 99;" ></ShimmerEffect>
            </template> -->
        </div>
    </div>
</template>
