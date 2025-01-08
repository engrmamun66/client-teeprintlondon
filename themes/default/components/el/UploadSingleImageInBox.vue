<template>
  <div v-bind="$attrs">
    <label v-if="label" for="formFileLg" class="form-label">{{ label }}</label>

    <div v-if="mode=='default'" class="form-group input-preview">
      <input :disabled="disabled" type="file" id="file_34ffdcd" :accept="accept" @change="fileChanged" />
      <span v-if="modelValue" @click="removeFile()" class="close">
        <i-las t="times-circle" class="text-white"/>
      </span>
      <span v-if="!modelValue" class="filename"> {{ defaultText }} </span>
      <img :class="{removingFile: isRemoving}" :src="modelValue" />
      <div v-if="modelValue">
        <div class="d-flex justify-content-between w-100 position-relative mt-2">
          <span class="filename">{{ fileName }}</span>
          <!-- <span style="width: 3rem;"> <p class="highlight">{{ fileSize }}</p> </span> -->
        </div>
      </div>
    </div>

    <div v-else-if="mode=='inRow'" class="form-group input-preview">
      <input :disabled="disabled" type="file" id="file_34ffdcd" :accept="accept" @change="fileChanged" />
      <span v-if="modelValue" @click="removeFile()" class="close">
        <i-las t="times-circle" style="font-size:1.2rem" class="text-white"/>
      </span>
      <span v-if="!modelValue" class="filename"> {{ defaultText }} </span>
      <img :class="{removingFile: isRemoving}" :src="modelValue" style="height: 30px; width:auto; margin:-17px 0px -16px -3px;border-radius:3px;" />
    </div>
  </div>
</template>

<script setup>
let props = defineProps({
  mode: {
      type: String,
      default: 'default', // default | inRow
      required: false,
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  label: {
    type: String,
    default: "",
    required: false,
  },
  defaultText: {
    type: String,
    default: "Select Image",
    required: false,
  },
  disabled: {
      type: Boolean,
      default: false,
      required: false,
  },
  accept: {
    type: String,
    default: "image/png, image/jpeg",
    required: false,
  },
});

let fileName = ref("");
let fileSize = ref("");
let isRemoving = ref(false);

const myEmit = defineEmits(["update:modelValue"]);

function fileChanged(e) {  
  let reader = new FileReader();
  let file = e.target.files[0];
  reader.onload = (e) => {
    fileName.value = getExcerpt(file.name, 22);
    fileSize.value = H.formatBytes(file.size, 'ceil', '');
    myEmit("update:modelValue", e.target.result);
  };
  reader.readAsDataURL(e.target.files[0]);
}

function removeFile() {
  isRemoving.value = true  
  setTimeout(() => {
    myEmit("update:modelValue", null);
    removeFileFromFileList("file_34ffdcd", 0);
    isRemoving.value = false
  }, 300);
}

let getExcerpt = (text, maxlen=20) => {
  if(text.length > maxlen){
    let slap = Math.floor(maxlen / 2)
    return Array.from(text).slice(0, slap).join('') + '....' + Array.from(text).slice(-(slap)).join('')
  }else{
    return text
  }
}
let removeFileFromFileList = (id, index) => {
  const dt = new DataTransfer();
  const input = document.getElementById(id);
  const { files } = input;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (index !== i) dt.items.add(file); // removing the file
  }
  input.files = dt.files; // Assign the updates list
}

</script>

<style scoped>
img {
  width: 100%;
  border-radius: 0.5em;
}
.input-preview input[type="file"] {
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 200px !important;
  left: 0;
  top: 0;
}
.input-preview .close {
  position: absolute;
  cursor: pointer;
  height: 30px;
  width: 30px;
  right: 0;
  top: 2px;
  background-color: #1e1e2d;
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 50%;
}
.filename{
   position: absolute;
  color: #787878;
  top: 38%;
  left: 35%;
}
.input-preview .close i {
  font-size: 1.5rem;
  cursor: pointer;
  color: rgb(122, 122, 122);
}
.input-preview {
  border: dashed rgb(96 95 95) 1px;
  border-radius: 0.5em;
  width: 100%;
  height: 200px!important;
  min-height: 2.5rem;
  position: relative;
  transition: ease-in-out 750ms;
  padding: 8px;
  overflow: hidden;
}
.highlight{
  background: #0000004f;
  border-radius: 10px;
  color: #727272;
  padding-left: 7px;
  padding-right: 7px;
}

/* -------------------------------------------------------------------------- */
/*                                  Animation                                 */
/* -------------------------------------------------------------------------- */
.removingFile {
  display: block;
  opacity: 0;
  animation-name: removingFile;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}
@keyframes removingFile {
  from {
    opacity: 1;
    scale: 1;
  }
  to {
    opacity: 0;
    scale: 0;
  }
}
</style>