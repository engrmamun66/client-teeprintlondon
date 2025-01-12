<template>
  <div v-bind="$attrs">
    <label v-if="label" for="formFileLg" class="form-label">{{ label }}</label>
    <span v-if="label" v-html="H.getRedStar()"></span>
    <div class="form-group input-preview">
      <input :disabled="disabled" :multiple="multiple" type="file" id="files_3454454" :accept="accept" @change="fileChanged" />
      <span v-if="!modelValue.length && !savedFiles.length" class="filename"> Select Files (max 5mb/file) </span>
      <div class="file-display-area" v-if="modelValue.length || savedFiles.length">

        <!-- Display Saved Files -->
        <template v-if="savedFiles.length">
          <li v-for="(file, index) in savedFiles" :key="index" class="d-flex justify-content-between w-100 position-relative">
            <span class="filename">{{ getExcerpt(file.name, 25) }}</span>
            <div class="d-flex justify-content-between">
              <span @click="$emit('delete-file', {id: file.id, index: index})" class="icon-area"> <i-las t="trash" /> </span>
            </div>
          </li>
        </template>
        <li v-for="(file, index) in modelValue" :key="index" :class="{removingFile: removeTracker[index].isRemoving}" class="d-flex justify-content-between w-100 position-relative">
          <span class="filename">{{ getExcerpt(file.name, 25) }}</span>
          <span v-if="!file.isUploading" @click="removeFile(index)" class="icon-area"> <i-las t="trash" /></span>
          <span v-else class="pt-1"> <BtnLoader class="ms-2" :show="true" /> </span>
        </li>
        <!-- --------Add More-------- -->
        <li v-if="savedFiles.length && !modelValue.length" class="d-flex justify-content-center">
            <p style="pointer-events: none;" > <i-las t="folder-plus" /> Add More {{ acceptText }} </p>
        </li>

      </div>
    </div>
  </div>
</template>

<script setup>
let props = defineProps({
  modelValue: {
    type: [Array, Object],
    default: [],
  },
  savedFiles: {
    type: [Array, Object],
    default: [],
  },
  label: {
    type: String,
    default: "",
    required: false,
  },
  disabled: {
    type: Boolean,
    default: false,
    required: false,
  },
  multiple: {
    type: Boolean,
    default: true,
    required: false,
  },
  accept: {
    type: String,
    default: "*",
    // .txt = text/plain
    // .pdf = application/pdf
    // image = image/*
    // .docx = application/vnd.openxmlformats-officedocument.wordprocessingml.document
    required: false,
  },
  acceptText: {
    type: String,
    default: "",
    required: false,
  },
});

let base64 = ref("");
let fileName = ref("");
let fileSize = ref("");
let removeTracker = ref({});

const myEmit = defineEmits(["update:modelValue", "delete-file"]);

function fileChanged(e) {
  let files = e.target.files; 
  var filesTotal = files.length;
  // console.log(e.target.files);

  for (var i = 0; i < filesTotal; ++i) {
    removeTracker.value[i] = {isRemoving: false}
    props.modelValue[i] = {
      name: files[i].name, 
      base64: e.target.result, 
      isUploading: true
      }
    var reader = new FileReader();
    function __pushFileDetails(i) {
      reader.addEventListener("load", function(e) {
        props.modelValue[i].isUploading = false
        props.modelValue[i].base64 = e.target.result
      })
    }
    reader.readAsDataURL(files[i]);
    __pushFileDetails(i)
  }
}

function removeFile(index) {
  removeTracker.value[index].isRemoving = true
  setTimeout(() => {
    removeFileFromFileList("files_3454454", index);
    removeTracker.value[index].isRemoving = false
    props.modelValue.splice(index, 1)
  }, 800);
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
  height: 100%;
  left: 0;
  top: 0;
}
.input-preview {
  border: dashed rgb(96 95 95) 1px;;
  border-radius: 0.5em;
  width: auto;
  height: auto;
  min-height: 2.5rem;
  position: relative;
  transition: ease-in-out 750ms;
  padding: 8px;
  overflow: hidden;
}
.filename{
  color: #787878;
}
.icon-area{
  background: #ffd9d900;
  border-radius: 5px;
  color: #f92020;
  padding-left: 7px;
  padding-right: 7px;
  cursor: pointer;
}
.file-display-area li{
  margin-top: 0.15rem;
  padding: 5px;
  background-color: #04040417;
  border-radius: 5px;
  border: 1px solid var(--linecolor-navyblue-light-1);
}
.file-display-area li:first-child{
  margin-top: 0rem;
}
/* -------------------------------------------------------------------------- */
/*                                  Animation                                 */
/* -------------------------------------------------------------------------- */
.removingFile {
  display: block;
  opacity: 0;
  animation-name: removingFile;
  animation-duration: 0.8s;
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