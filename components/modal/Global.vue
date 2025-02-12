<template>
    <!-- Vertically centered modal -->
    <div
      class="modal fade leap-admin-main-wrapper"
      :class="{ show: modelValue }"
      :style="modelValue ? 'display: block' : 'display: none'"
      @click="false"
    >
      <div 
        class="modal-dialog" :style="`--bs-modal-width:${modalSize =='large' ? '800px' : '500px'}`"
        :class="{'modal-dialog-centered': !top && !fullScreen, 'modal-lg': modal_lg && !fullScreen, 'modal-fullscreen': fullScreen, 'modal-dialog-scrollable': !fullScreen}"
      >
        <div @click="$event.stopPropagation()" class="modal-content" :style="(min_height ? 'min-height:' + min_height : '') + ';' + (fullScreen ? 'max-height:100% !important;': '') ">
          <div class="modal-header">
            <h4 class="modal-title" id="exampleModalCenterTitle"> {{ title }} </h4>
            <button @click="close()" type="button" class="btn-close" :style="closeIconStyle?.buttonMargin ? 'margin-right:' + closeIconStyle.buttonMargin : ''" aria-label="Close"><i class="la la-close" :style="closeIconStyle?.fontSize && fullScreen? 'font-size:' + closeIconStyle.fontSize +';color:'+ closeIconStyle.color  : '' "></i></button>
          </div>
          <div class="modal-body" :class="[body_class]">
            <slot name="modalbody" />
          </div>
          <div v-if="footer" class="modal-footer">
            <button v-if="showSubmit" @click="submit" type="button" class="leap-btn leap-submit-btn me-2 m-1"> {{ submitText }} <btn-loader v-if="isCalling" :show="isCalling" color="'white'" /> </button>
            <button v-if="showCancel" @click="cancel();$emit('update:modelValue', false)" type="button" class="leap-btn leap-cancel-btn m-0"> {{ cancelText }} </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    modelValue: {
      type: Boolean,
      default: false,
      required: true,
    },
    title: {
      type: String,
      default: "Modal",
      required: false,
    },
    top: {
      type: Boolean,
      default: false,
      required: false,
    },
    fullScreen: {
      type: Boolean,
      default: false,
      required: false,
    },
    footer: {
      type: Boolean,
      default: true,
      required: false,
    },
    submitText: {
      type: String,
      default: 'Submit',
      required: false,
    },
    showSubmit: {
      type: Boolean,
      default: true,
      required: false,
    },
    showCancel: {
      type: Boolean,
      default: true,
      required: false,
    },
    cancelText: {
      type: String,
      default: 'Cancel',
      required: false,
    },
    modalSize: {
      type: String,
      default: 'large', // small | large
      required: false,
    },
    isCalling: {
      type: Boolean,
      default: false,
      required: false,
    },
    body_class: {
      type: String,
      default: 'd-flex justify-content-center',
      required: false,
      },
    modal_lg: {
      type: Boolean,
      default: false,
      required: false,
    },
    min_height: {
      type: String,
      default: '',
      required: false,
      },
      closeIconStyle:{
        type: Object,
        default: {
          fontSize: '',
          color: '',
          buttonMargin: ''
        },
        required: false,
      }
  });
  let emit = defineEmits(['update:modelValue', 'clicked-submit', 'clicked-cancel', 'clicked-close'])
  let submit = (event) => {
    emit('clicked-submit')
  }
  let cancel = (event) => {
    emit('clicked-cancel')
    emit('update:modelValue', false)
  }
  let close = (event) => {
    emit('clicked-close')
    emit('update:modelValue', false)
  }
  </script>
  
  <style scoped>
  .modal {
    background-color: rgb(0 0 0 / 59%);
  }
  .modal.show .modal-content {
    animation: mymove 0.3s;
    border-bottom: 2px solid #37c923ab;
  }
  @keyframes mymove {
    from {
      top: -100px;
      opacity: 0;
      scale: 0.5;
    }
    to {
      top: 0px;
      opacity: 1;
      scale: 1;
    }
  }
  :slotted(.modal-body .row){
    margin-right: 0px !important;
  }
  </style>