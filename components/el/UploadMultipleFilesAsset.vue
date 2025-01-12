<template>
  <div v-bind="$attrs" class="box-shaped-uploader">
    <label v-if="label" for="formFileLg" class="form-label">{{ label }}</label>
    <div
      class="upload-imgbox-imgshow d-flex justify-content-between"
      style="gap: 2rem"
    >
      <div class="form-group input-preview">
        <input
          :disabled="disabled"
          :multiple="multiple"
          type="file"
          id="files_3454454"
          :accept="accept"
          @change="fileChanged"
        />
        <div>
          <h4 class="filename">Drop files here or click to upload</h4>
          <span class="file-size">Select Files (max 2mb/file)</span>
          <!-- Total Size Display -->
          <div v-if="totalSize > 0" class="total-size">
            Total Size: {{ (totalSize / 1024 / 1024).toFixed(2) }} MB
          </div>
        </div>

        <div></div>
      </div>

      <!-- Image Preview Area -->
      <div
        class="file-preview-area"
        v-if="modelValue.length || savedFiles.length"
      >
        <!-- Display Saved Files -->
        <template v-if="savedFiles.length">
          <div
            v-for="(file, index) in savedFiles"
            :key="index"
            class="image-preview"
          >
            <img :src="file.base64" :alt="file.name" />
            <span
              @click="$emit('delete-file', { id: file.id, index: index })"
              class="icon-area"
            >
              <i-las t="trash" />
            </span>
          </div>
        </template>

        <!-- Display Newly Uploaded Files -->
        <div
          v-for="(file, index) in modelValue"
          :key="index"
          :class="{ removingFile: removeTracker[index].isRemoving }"
          class="image-preview"
        >
          <img :src="file.previewUrl" :alt="file.name" />
          <span
            v-if="!file.isUploading"
            @click="removeFile(index)"
            class="icon-area"
          >
            <i-las t="trash" />
          </span>
          <span v-else class="loader">
            <BtnLoader class="ms-2" :show="true" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let props = defineProps({
  modelValue: {
    type: Array,
    default: [],
  },
  savedFiles: {
    type: Array,
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
    default: "image/*",
    required: false,
  },
});

let removeTracker = ref({}); // Object to track removing files
let totalSize = ref(0); // Reactive variable for total size

const myEmit = defineEmits(["update:modelValue", "delete-file"]);

function fileChanged(e) {
  let files = e.target.files;
  let filesTotal = files.length;

  for (var i = 0; i < filesTotal; ++i) {
    const file = files[i];

    // Check if the file size exceeds 2MB
    if (file.size > 2 * 1024 * 1024) {
      Toaster.warning("The file size has exceeded the allowable limit.");
      continue; // Skip processing this file
    }

    // Initialize the removeTracker for the current file
    removeTracker.value[props.modelValue.length] = { isRemoving: false };

    // Update total size
    totalSize.value += file.size;

    // Create object for file with raw binary (Blob)
    const fileObject = {
      name: file.name,
      binary: file, // Directly storing the file as binary Blob
      previewUrl: URL.createObjectURL(file),
      isUploading: true,
    };

    // Push the fileObject into the modelValue array
    props.modelValue.push(fileObject);

    // Set isUploading to false after processing
    fileObject.isUploading = false;
    myEmit("update:modelValue", [...props.modelValue]);
  }
}

function removeFile(index) {
  if (!removeTracker.value[index]) {
    removeTracker.value[index] = { isRemoving: false }; // Safeguard against uninitialized trackers
  }

  removeTracker.value[index].isRemoving = true;
  setTimeout(() => {
    removeFileFromFileList("files_3454454", index);
    console.log(props.modelValue[index].binary.size);
    totalSize.value -= props.modelValue[index].binary.size; // Subtract the size of the removed file
    removeTracker.value[index].isRemoving = false;
    props.modelValue.splice(index, 1);
    myEmit("update:modelValue", [...props.modelValue]);
  }, 800);
}

function removeFileFromFileList(id, index) {
  const dt = new DataTransfer();
  const input = document.getElementById(id);
  const { files } = input;

  for (let i = 0; i < files.length; i++) {
    if (index !== i) dt.items.add(files[i]);
  }
  input.files = dt.files;
}

defineExpose({
  reset: async function () {
    // Reset the file input by clearing its value
    const input = document.getElementById("files_3454454");
    if (input) {
      input.value = ""; // Clear the file input
    }

    // Reset all relevant properties
    totalSize.value = 0; // Reset total file size
    removeTracker.value = {}; // Reset remove tracker

    // Clear all files from modelValue and emit an empty array
    props.modelValue.splice(0, props.modelValue.length);
    myEmit("update:modelValue", []); // Emit an empty array for modelValue
  },
});
</script>

<style scoped>
.box-shaped-uploader {
  display: flex;
  flex-direction: column; /* Ensure vertical stacking of input and preview */
  align-items: flex-start;
  gap: 20px;
}

.input-preview {
  position: relative;
  border: dashed rgb(96, 95, 95) 1px;
  border-radius: 0.5em;
  padding: 8px;
  width: 15rem;
  height: 15rem; /* Set width of the uploader box to full */
  text-align: center;
}

.file-preview-area {
  display: grid;
  grid-template-columns: repeat(5, 100px); /* 5 images per row */
  grid-gap: 10px; /* Gap between images */
  margin-top: 20px;
}

.image-preview {
  position: relative;
  width: 100px;
  height: 100px;
  border: 1px solid #616464;
  border-radius: 8px;
  overflow: hidden;
}

.image-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.icon-area {
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 25px;
  height: 25px;
  border-radius: 8px;
  cursor: pointer;
  color: #fff;
}

.removingFile {
  opacity: 0;
  transition: opacity 0.8s;
}
@media (max-width: 575px) {
  .input-preview {
    width: 100%;
    height: 150px;
  }
  .input-preview input[type="file"] {
    height: 100% !important;
    width: 100%;
  }
  .upload-imgbox-imgshow {
    flex-wrap: wrap;
    width: 100%;
    gap: 0rem !important;
  }
  .file-preview-area {
    margin-top: 0 !important;
    margin-bottom: 15px;
  }
}
</style>
