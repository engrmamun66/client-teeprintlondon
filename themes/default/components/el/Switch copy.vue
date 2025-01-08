<template>
  <div v-bind="$attrs">
    <div class="form-group">
      <label v-if="label" class="pb-1"> {{ label }} </label>
      <div class="switch switch-btn b2">
          <input :disabled="disabled" @change="status=!status;changed(status)" type="checkbox" :checked="status" class="checkbox" />
          <div class="knobs">
            <span>&nbsp;NO</span>
          </div>
          <div class="layer"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
let props = defineProps({
    status: {
        default: false,
        required: false,
    },
    label: {
        default: false,
        required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
    options: {
        required: false,
        default: {},
    },
})
let emit = defineEmits(['change'])
let options = ref(Object.assign({
            bg: '#0e0e0e',
        }, props.options))

function changed(status){
  emit('change', status)
}
</script>

<style scoped>
.picker{
    color: #0e0e0e;
    color: #141414;
}
.knobs,
.layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.switch-btn {
  position: relative;
  top: 50%;
  width: 74px;
  height: 36px;
  overflow: hidden;
}

.switch.r,
.switch.r .layer {
  border-radius: 100px;
}

.switch.b2 {
  border-radius: 3px;
}

.checkbox {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;
}

.knobs {
  z-index: 2;
}

.layer {
  width: 100%;
  background-color: v-bind(options.bg);
  transition: 0.7s ease all;
  z-index: 1;
}

/* Button 10 */
.switch .knobs:before,
.switch .knobs:after,
.switch .knobs span {
  position: absolute;
  top: 4px;
  width: 20px;
  height: 10px;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  line-height: 1;
  padding: 9px 4px;
  border-radius: 2px;
  transition: 0.7s ease all;
}

.switch .knobs:before {
    content: "";
    left: 4px;
    background-color: rgb(223, 41, 41);
    width: 28px;
    height: 28px;
}

.switch .knobs:after {
  content: "Yes";
  right: 10px;
  color: #4e4e4e;
}

.switch .knobs span {
  display: inline-block;
  left: 4px;
  color: #fff;
  z-index: 1;
}

.switch .checkbox:checked + .knobs span {
  color: #4e4e4e;
}

.switch .checkbox:checked + .knobs:before {
    left: 42px;
    background-color: var(--bgcolor-secondary);
    width: 28px;
    height: 28px;
}

.switch .checkbox:checked + .knobs:after {
  color: #fff;
}

.switch .checkbox:checked ~ .layer {
  background-color: v-bind(options.bg);
}
</style>