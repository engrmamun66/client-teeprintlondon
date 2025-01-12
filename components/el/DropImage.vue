<script setup>
import { ref, watch, defineEmits, defineProps, computed } from "vue";

// Define props
const props = defineProps({
  img_url: {
    type: String,
    default: null,
  },
  clear: {
    type: Boolean,
    default: false,
  },
});

// Define emits
const emit = defineEmits(["update:modelValue", "update:clear"]);

// Reactive references
const imageUrl = ref(props.img_url);
const imageFile = ref(null);

// Watch for changes in img_url to update imageUrl
watch(() => props.img_url, (newVal) => {
  imageUrl.value = newVal;
});

// Watch for the clear prop to reset the component if true
watch(() => props.clear, (newClear) => {
  if (newClear) {
    resetComponent();
    emit("update:clear", false); // Notify parent to reset the clear prop
  }
});

// Handle image upload
function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    if (imageUrl.value) {
      URL.revokeObjectURL(imageUrl.value);
    }
    imageUrl.value = URL.createObjectURL(file);
    imageFile.value = file;
    emit("update:modelValue", file);
  }
}

// Remove the image
function removeImage() {
  if (imageUrl.value) {
    URL.revokeObjectURL(imageUrl.value);
  }
  imageUrl.value = null;
  imageFile.value = null;
  emit("update:modelValue", null);
}

// Reset the component
function resetComponent() {
  if (imageUrl.value) {
    URL.revokeObjectURL(imageUrl.value);
  }
  imageUrl.value = null;
  imageFile.value = null;
  emit("update:modelValue", null);
}
</script>



<template>
  <div class="image-upload-preview">
    <label class="upload-label">
      <input
        type="file"
        id="image-input"
        accept="image/*"
        class="upload-input"
        @change="handleImageUpload"
      />
      <div class="preview-content">
        <img v-if="imageUrl" :src="imageUrl" alt="Uploaded preview" class="image-preview" />
        <span v-else class="upload-placeholder">Click to upload image</span>
      </div>
    </label>
    <button v-if="imageUrl" class="remove-button" @click="removeImage">✖</button>
  </div>
</template>

<style scoped>
.image-upload-preview {
  position: relative;
  width: 200px;
  height: 200px;
  border: 2px dashed #ccc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
}

.upload-label {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.upload-input {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.preview-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.upload-placeholder {
  color: #888;
  font-size: 14px;
  text-align: center;
}

.image-preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.remove-button {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.remove-button:hover {
  background-color: rgba(255, 0, 0, 0.8);
}
</style>
