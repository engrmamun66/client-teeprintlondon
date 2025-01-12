<template>
  <template v-if="modelValue">
    <!-- How To Use
    ==================================
    <Modal-Confirm 
        v-if="showDeleteModal"
        v-model="showDeleteModal"
        :skipAutoClose="true"
        @yes="async () => { }"
        >
        <template #btn-yes>
            <BtnLoader :show="H.isPendingAnyApi('Geofence:deleteGeofence')" ></BtnLoader>
        </template>
    </Modal-Confirm>
    ==================================
    -->
    <teleport to="body">
      <div
        class="modal fade"
        :class="{ show: modelValue }"
        :style="modelValue ? 'display: block' : 'display: none'"
      >
        <div class="modal-dialog" :class="[top ? '' : 'modal-dialog-centered']">
          <div @click="$event.stopPropagation()" class="modal-content">
            <!-- <div v-if="title" class="modal-header"> -->
            <!-- <h6 class="modal-title"> {{ title }} </h6> -->
            <!-- <button @click="close()" type="button" class="btn-close" aria-label="Close"><i class="la la-close"></i></button> -->
            <!-- </div> -->

            <div class="modal-body mt-4">
              <div class="col-12">
                <h3 class="text-center">
                  <template v-if="effect">
                    <!-- <shimmer-effect height="15px" bg="dark"></shimmer-effect> -->
                  </template>
                  <template v-else>
                    <slot>
                      <div class="confirm-message">
                        <i class="icon-question-circle"></i>
                        Are you sure?
                      </div>
                    </slot>
                  </template>
                </h3>
              </div>
            </div>
            <hr />
            <div class="modal-footer d-flex justify-content-center pt-0">
              <template v-if="effect">
                <!-- <shimmer-effect
                  height="42px"
                  width="110px"
                  radius="50px"
                  bg="dark"
                  class="me-3"
                ></shimmer-effect>
                <shimmer-effect
                  height="42px"
                  width="110px"
                  radius="50px"
                  bg="dark"
                ></shimmer-effect> -->
              </template>
              <template v-else>
                <button
                  @click="yes()"
                  type="button"
                  class="activestatus-btn px-5 me-3"
                >
                  {{ yesText }} <slot name="btn-yes"></slot>
                </button>
                <button @click="no()" type="button" class="redstatus-btn px-5">
                  {{ noText }}
                </button>
              </template>
            </div>
          </div>
        </div>
      </div>
    </teleport>
  </template>
</template>

<script setup>
let props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
    required: true,
  },
  title: {
    type: String,
    default: "Confirmation",
    required: false,
  },
  top: {
    type: Boolean,
    default: false,
    required: false,
  },
  skipAutoClose: {
    type: Boolean,
    default: false,
    required: false,
  },
  yesText: {
    type: String,
    default: "Yes",
    required: false,
  },
  noText: {
    type: String,
    default: "No",
    required: false,
  },
});
let emit = defineEmits(["update:modelValue", "yes", "no", " close"]);
let yes = (event) => {
  emit("yes");
  if (!props.skipAutoClose) {
    emit("update:modelValue", false);
  }
};
let no = (event) => {
  emit("no");
  emit("update:modelValue", false);
};
let close = (event) => {
  emit("close");
  emit("update:modelValue", false);
};

let effect = ref(true);
onMounted(() => {
  setTimeout(() => {
    effect.value = false;
  }, 300);
});
</script>

<style scoped>
.modal {
  background-color: rgb(0 0 0 / 59%);
}
.modal-dialog {
  width: 360px;
}
.modal.show .modal-content {
  animation: mymove 0.3s;
}
@keyframes mymove {
  from {
    transform: translateY(-100px);
    opacity: 0;
    scale: 0.5;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
    scale: 1;
  }
}
.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 0px 1rem;
}
.modal-footer {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
  border-top: none;
}

.activestatus-btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  padding: 0 20px;
  border-radius: 15px;
  color: white;
  background-color: #23882d;
  text-align: center;
  line-height: 14px;
}
.redstatus-btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  padding: 0 20px;
  border-radius: 15px;
  color: var(--textcolor-white);
  background-color: #ff6c6c;
  text-align: center;
  line-height: 14px;
}

.confirm-message {
  display: inline-flex;
  align-items: center;

  color: #ffffff; /* Neutral text color */
  padding: 5px 10px;

  border-radius: 5px;
  font-size: 0.995rem; /* Slightly smaller text */
  line-height: 1.5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

.confirm-message i {
  margin-right: 5px;
  color: #6c757d; /* Muted icon color */
}
</style>
