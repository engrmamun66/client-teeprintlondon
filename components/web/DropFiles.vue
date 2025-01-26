<template>
  <div class="ionic-img-upload cp">
    <input
      type="file"
      id="file_34ffdcd"
      accept="image/*,application/pdf,.doc,.docx,.ai,.eps"
      class="cp" 
      @change="onChangeFile"
    />
    <span class="filename fs-13 cp">Upload your file</span>
    <i class="bx bx-upload fs-16"></i>
  </div>

  <div v-if="previewFile" class="ionic-img-uploadshow">
    <ul>
      <li class="mb-2">
        <div class="preview-frame">
          <!-- Image Preview -->
          <template v-if="isImage(previewFile)">
            <img
              :src="getUrl(previewFile)"
              class="img-fluid"
              alt="Uploaded Image"
              @click="openImagePreview"
            />
          </template>
          <!-- PDF Preview -->
          <template v-else>
            <div class="pdf-preview">
              <i class="bx bxs-file-pdf pdf-icon"></i>
              <a
                :href="getUrl(previewFile)"
                target="_blank"
                class="pdf-name"
                :title="getFileName(previewFile.name || previewFile)"
              >
                {{ truncateName(getFileName(previewFile.name || previewFile)) }}
              </a>
            </div>
          </template>
        </div>
        <i class="la la-close" @click="clearPreview"></i>
      </li>
    </ul>
  </div>

  <!-- Enlarged Image Modal -->
  <div v-if="showImageModal" class="image-modal">
    <div class="image-modal-frame">
      <i class="la la-close close-icon" @click.stop="closeImagePreview"></i>
      <img :src="getUrl(previewFile)" alt="Enlarged Preview" class="image-modal-image" />
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
});

 

const emit = defineEmits(["update:modelValue", "uploadFile", "removeFile"]);

const previewFile = ref(null);
const showImageModal = ref(false);

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
  const selectedFiles = Array.from(event.target.files);
  if (selectedFiles.length > 0) {
    const newFile = selectedFiles[0];
    previewFile.value = newFile;
    emit("update:modelValue", [newFile]);
    emit("uploadFile", [newFile]);
  }
  event.target.value = ""; // Reset input value
};

const clearPreview = () => {
  // Clears the preview file
  previewFile.value = null;

  // Ensures the image modal is closed
  showImageModal.value = false;

  // Updates the v-model binding to null
  emit("update:modelValue", null);

  // Emits the custom 'removeFile' event for external handling
  emit("removeFile", null);
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
  if (typeof file === "string") {
    return !file.toLowerCase().endsWith(".pdf");
  }
  return file.type?.startsWith("image/");
};

const truncateName = (name) => {
  return name.length > 20 ? name.slice(0, 17) + "..." : name;
};

const openImagePreview = () => {
  showImageModal.value = true;
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
