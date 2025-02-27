<template>
  <div class="ionic-img-upload cp">
    <input
      type="file"
      id="file_34ffdcd"
      accept="image/*,application/pdf,.doc,.docx,.ai,.eps"
      class="cp" 
      @change="onChangeFile"
      :multiple="multiple"
    />
    <span class="filename fs-13 cp">Upload your file</span>
    <i class="bx bx-upload fs-16"></i>
  </div>
  <div v-if="selectedFiles?.length" class="ionic-img-uploadshow">
    <ul class="d-flex flex-wrap">
      <template v-for="(file, i) in selectedFiles">
        <li class="mb-2">
          <div class="preview-frame">
            <!-- Image Preview -->
            <template v-if="isImage(file)">
              <img
                :src="getUrl(file)"
                class="img-fluid"
                alt="Uploaded Image"
                @click="openImagePreview(file)"
              />
            </template>
            <!-- PDF Preview -->
            <template v-else>
              <div class="pdf-preview">
                <i class="bx bxs-file-pdf pdf-icon" style="font-size: 46px;"></i>
                <a
                  :href="getUrl(file)"
                  target="_blank"
                  class="pdf-name"
                  :title="getFileName(file.name || file)"
                >
                  {{ truncateName(getFileName(file.name || file)) }}
                </a>
              </div>
            </template>
          </div>
          <i class="la la-close" @click="clearPreview(i)"></i>
        </li>
      </template>
    </ul>
  </div>

  <!-- Enlarged Image Modal -->
  <div v-if="showImageModal && showImageModal_file" class="image-modal">
    <div class="image-modal-frame">
      <i class="la la-close close-icon" @click.stop="closeImagePreview"></i>
      <template v-if="isImage(showImageModal_file)">
        <img :src="getUrl(showImageModal_file)" alt="Enlarged Preview" class="image-modal-image" />
      </template>
      <template v-else>
        <div class="pdf-preview" @click="log(showImageModal_file)">
            <i class="bx bxs-file-pdf pdf-icon"></i>
            <a
              :href="getUrl(showImageModal_file)"
              target="_blank"
              class="pdf-name"
              :title="getFileName(showImageModal_file.name)"
            >
              {{ truncateName(getFileName(showImageModal_file.name)) }}
            </a>
          </div>
        </template>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
  title: {
    type: String,
    default: "",
  },
  url: {
    type: String,
    default: "",
  },
  acceptOnlyImage: {
    type: Boolean,
    default: false,
  },
  multiple: {
    type: Boolean,
    default: true,
  },
});

 

const emit = defineEmits(["update:modelValue", "uploadFile", "removeFile"]);

const previewFile = ref(null);
const selectedFiles = ref([]);
const showImageModal = ref(false);
const showImageModal_file = ref(false);

watch(
  () => props.url,
  (newUrl) => {
    if (newUrl) {
      previewFile.value = newUrl;
    }
  },
  { immediate: true }
);

const onChangeFile = (event) => {
  const allFiles = Array.from(event.target.files);
  selectedFiles.value = [...allFiles, ...(props.modelValue || [])]   
  emit("update:modelValue", selectedFiles.value);
  emit("uploadFile", selectedFiles.value);
  event.target.value = ""; 
};

const clearPreview = (i) => {
  let removedFile = selectedFiles.value.splice(i, 1)
  showImageModal.value = false;
  emit("update:modelValue", selectedFiles.value);
  emit("removeFile", removedFile);
};

const getUrl = (file) => {
  try {
    return typeof file === "string" ? file : URL.createObjectURL(file);
  } catch {
    return "";
  }
};

const getFileName = (fileUrl) => { 
  return fileUrl.split("/").pop();
};

const isImage = (file) => {
    try {
      return file.type.startsWith('image/')
    } catch (error) {
      console.log('sss', file);
      return false
    } 
};

const truncateName = (name) => {
  return name.length > 20 ? name.slice(0, 17) + "..." : name;
};

const openImagePreview = (file) => {
  showImageModal.value = true;
  showImageModal_file.value = file;
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
    border-bottom: 1px dashed rgb(222, 222, 222);
    border-radius: .5em;
    min-height: 2.5rem;
    overflow: hidden;
    padding: 8px 15px;
    transition: .75s ease-in-out;
  }
  
  .ionic-img-upload input[type=file] {
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
    cursor: pointer;
}

.ionic-img-upload i {
    color: var(--textcolor-primary);
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

.ionic-img-uploadshow ul li button {
    position: absolute;
    top: 75%;
    left: 15%;
    font-size: 10px;
    cursor: pointer;
}
/* Styles for preview and modal */
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

.pdf-name {
  font-size: 14px;
  color: #333;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
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

.image-modal-content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
}

.image-modal-content img {
  max-width: 30%;
  max-height: 30%;
}

.modal-close {
  position: fixed;
  top: 160px;
  right: 480px;
  font-size: 24px;
  color: white;
  cursor: pointer;
  z-index: 1001;
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
  color: rgb(252, 252, 252);
  cursor: pointer;
  z-index: 1;
}
</style>
