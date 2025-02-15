<template>
  <div class="ionic-img-upload cp">
    <input
      type="file"
      id="file_34ffdcd"
      accept="image/*"
      class="cp"
      @change="onChangeFile"
      :multiple="!singleImage"
    />
    <span class="filename fs-13 cp">Upload your file</span>
    <i class="bx bx-upload fs-16"></i>
  </div>

  <div v-if="selectedFiles?.length" class="ionic-img-uploadshow">
    <ul>
      <template v-for="(file, i) in selectedFiles.filter(Boolean)" :key="i">
        <li class="mb-2">
          <div class="preview-frame">
            <template v-if="isImage(file)">
              <img
                :src="getUrl(file)"
                class="img-fluid"
                alt="Uploaded Image"
                @click="openImagePreview(file)"
              />
            </template>
          </div>
          <i class="la la-close" @click="clearPreview(i)"></i>
        </li>
      </template>
    </ul>
  </div>

   

  <div v-if="showImageModal && showImageModalFile" class="image-modal">
    <div class="image-modal-frame">
      <i class="la la-close close-icon" @click.stop="closeImagePreview"></i>
      <img
        :src="getUrl(showImageModalFile)"
        alt="Enlarged Preview"
        class="image-modal-image"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: [Array, String],
    default: () => [],
  },
  singleImage: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue", "uploadFile", "removeFile"]);
const selectedFiles = ref([]);
const showImageModal = ref(false);
const showImageModalFile = ref(null);

watch(
  () => props.modelValue,
  (newValue) => {
    selectedFiles.value = Array.isArray(newValue) ? newValue : [newValue];
  },
  { immediate: true }
);

const onChangeFile = (event) => {
  const files = Array.from(event.target.files);
  
  if (props.singleImage) {
    // If singleImage is true, replace the existing file with the new one
    selectedFiles.value = [files[0]];
  } else {
    // If singleImage is false, append the new files to the existing ones
    selectedFiles.value = [...selectedFiles.value, ...files];
  }
  
  emit("update:modelValue", selectedFiles.value);
  emit("uploadFile", selectedFiles.value);
  event.target.value = ""; // Clear the input to allow re-uploading the same file
};
const clearPreview = (i) => {
  const removedFile = selectedFiles.value.splice(i, 1);
  emit("update:modelValue", selectedFiles.value);
  emit("removeFile", removedFile);
};

const getUrl = (file) => {
  if (typeof file === "string") return file;
  if (file?.image_url) return file.image_url;
  if (file instanceof File) return URL.createObjectURL(file);
  return "";
};

const isImage = (file) => {
  return (
    typeof file === "string" ||
    file?.image_url ||
    (file instanceof File && file.type.startsWith("image/"))
  );
};

const openImagePreview = (file) => {
  showImageModal.value = true;
  showImageModalFile.value = file;
};

const closeImagePreview = () => {
  showImageModal.value = false;
};
</script>

<style scoped>
.ionic-img-upload {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  height: 52px;
  border: 1px dashed rgb(222, 222, 222);
  border-radius: 0.5em;
  min-height: 2.5rem;
  overflow: hidden;
  padding: 8px 15px;
  transition: 0.75s ease-in-out;
}

.ionic-img-upload input[type="file"] {
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
  cursor: pointer;
}

.ionic-img-uploadshow {
  margin-top: 5px;
}

.ionic-img-uploadshow ul li {
  position: relative;
  background-color: var(--bg-dark);
  padding: 8px 15px 8px 8px;
  display: inline-block;
  border-radius: 5px;
  margin-right: 15px;
  border: 2px solid transparent;
}

.ionic-img-uploadshow ul li.active {
  border: 2px solid var(--bg-primary);
}

.ionic-img-uploadshow ul li img {
  width: 45px;
  height: 45px;
  border-radius: 4px;
}

.ionic-img-uploadshow ul li i {
  position: absolute;
  top: 3px;
  right: 2px;
  font-size: 10px;
  cursor: pointer;
}

.preview-frame {
  width: 55px;
  height: 55px;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
}

.img-fluid {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  cursor: pointer;
}

.pdf-preview {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 10px;
}

.pdf-icon {
  font-size: 24px;
  color: #d32f2f;
  margin-bottom: 5px;
}

.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.image-modal-frame {
  position: relative;
  width: 45%;
  height: 60%;
  background-color: #111010;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-modal-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.close-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  color: white;
  cursor: pointer;
  z-index: 1;
}
</style>
