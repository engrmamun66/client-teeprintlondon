<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h3>Post Details</h3>
        <div class="row">
          <div class="col-12">
            <div class="form-group">
              <div class="date-box">
                <div class="date-box-input">
                  <label>Post Title <span class="required-star">*</span></label>
                  <el-BaseInput
                    type="text"
                    v-model="blogStore.postData.title"
                    placeholder="Enter post title"
                  />
                  <div v-if="errors.title" class="error-message">{{ errors.title }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="form-group">
              <div class="date-box">
                <div class="date-box-input">
                  <label>Post Description <span class="required-star">*</span></label>
                  <Editor
                    v-model="blogStore.postData.content"
                    api-key="gcvrg3hggtzhh90lq4180cnaco5tpvofl31o5ekpyg2i1lmj"
                    :init="{
                      height: 300,
                      menubar: false,
                      plugins: 'lists link image table code help',
                      toolbar: 'undo redo | formatselect | bold italic | bullist numlist',
                    }"
                  />
                  <div v-if="errors.content" class="error-message">{{ errors.content }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="form-group">
              <label for="featured-image-upload">
                Featured Image (JPG, PNG, JPEG) <span class="required-star">*</span>
              </label>
              <div class="date-box">
                <div class="date-box-input">
                  <input
                    type="file"
                    id="featured-image-upload"
                    accept=".jpg, .jpeg, .png"
                    @change="handleFeaturedImageUpload"
                    class="form-control"
                    :class="{ 'is-invalid': errors.featured_image }"
                  />
                  <div v-if="errors.featured_image" class="error-message">{{ errors.featured_image }}</div>

                  <div v-if="imagePreviewUrl" class="image-preview-container">
                    <img
                      :src="imagePreviewUrl"
                      alt="Preview"
                      class="image-preview-thumbnail"
                      @click="openImageModal"
                    />
                    <button
                      type="button"
                      class="remove-image-btn"
                      @click="removeImage"
                    >
                      ×
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12">
        <hr />
        <h3>SEO Details</h3>
        <div class="row">
          <div class="col-12">
            <div class="form-group">
              <div class="date-box">
                <div class="date-box-input">
                  <label>Meta Title <span class="required-star">*</span></label>
                  <el-BaseInput
                    type="text"
                    v-model="blogStore.postData.meta_title"
                  />
                  <div v-if="errors.meta_title" class="error-message">{{ errors.meta_title }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="form-group">
              <div class="date-box">
                <div class="date-box-input">
                  <label>Meta Description <span class="required-star">*</span></label>
                  <Editor
                    v-model="blogStore.postData.meta_description"
                    api-key="gcvrg3hggtzhh90lq4180cnaco5tpvofl31o5ekpyg2i1lmj"
                    :init="{
                      height: 300,
                      menubar: false,
                      plugins: 'lists link image table code help',
                      toolbar: 'undo redo | formatselect | bold italic | bullist numlist',
                    }"
                  />
                  <div v-if="errors.meta_description" class="error-message">{{ errors.meta_description }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="form-group">
              <div class="date-box">
                <div class="date-box-input">
                  <label>Meta Keywords <span class="required-star">*</span></label>
                  <el-BaseInput
                    type="text"
                    v-model="blogStore.postData.meta_keywords"
                  />
                  <div v-if="errors.meta_keywords" class="error-message">{{ errors.meta_keywords }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button
      type="button"
      class="leap-btn leap-submit-btn me-2 m-1"
      @click="handleSubmit"
    >
      Submit
      <BtnLoader
        :show="H.isPendingAnyApi('Blog:create')"
        color="white"
      />
    </button>

    <div v-if="showImageModal" class="image-modal" @click="closeImageModal">
      <div class="image-modal-content">
        <span class="close-modal" @click="closeImageModal">&times;</span>
        <img
          :src="imagePreviewUrl"
          alt="Full Size Preview"
          class="image-modal-img"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useBlogStore } from "~/store/Blog.js";
import Editor from "@tinymce/tinymce-vue";

const blogStore = useBlogStore();

const errors = ref({});
const featuredImageFile = ref(null);
const imagePreviewUrl = ref(null);
const showImageModal = ref(false);

/**
 * Validates form fields
 * @returns {boolean}
 */
const validateForm = () => {
  errors.value = {}; // Reset errors
  let isValid = true;

  if (!blogStore.postData.title) {
    errors.value.title = "Post title is required.";
    isValid = false;
  }
  if (!blogStore.postData.content) {
    errors.value.content = "Post description is required.";
    isValid = false;
  }
  if (!featuredImageFile.value) {
    errors.value.featured_image = "Featured image is required.";
    isValid = false;
  }
  if (!blogStore.postData.meta_title) {
    errors.value.meta_title = "Meta title is required.";
    isValid = false;
  }
  if (!blogStore.postData.meta_description) {
    errors.value.meta_description = "Meta description is required.";
    isValid = false;
  }
  if (!blogStore.postData.meta_keywords) {
    errors.value.meta_keywords = "Meta keywords are required.";
    isValid = false;
  }

  return isValid;
};

/**
 * Handles form submission with validation
 */
async function handleSubmit() {
  if (!validateForm()) {
    // Scroll to the first error or show a toast message if preferred
    return;
  }

  const formData = new FormData();

  formData.append("title", blogStore.postData.title);
  formData.append("content", blogStore.postData.content);
  formData.append("meta_title", blogStore.postData.meta_title);
  formData.append("meta_description", blogStore.postData.meta_description);
  formData.append("meta_keywords", blogStore.postData.meta_keywords);
  
  if (blogStore.postData.excerpt) formData.append("excerpt", blogStore.postData.excerpt);
  if (blogStore.postData.canonical_url) formData.append("canonical_url", blogStore.postData.canonical_url);

  if (featuredImageFile.value) {
    formData.append("featured_image", featuredImageFile.value);
  }

  await blogStore.create(formData);
}

/**
 * Handles the file selection
 */
const handleFeaturedImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const validTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (validTypes.includes(file.type)) {
      featuredImageFile.value = file;
      errors.value.featured_image = null; // Clear error on valid upload

      if (imagePreviewUrl.value) {
        URL.revokeObjectURL(imagePreviewUrl.value);
      }
      imagePreviewUrl.value = URL.createObjectURL(file);
    } else {
      alert("Invalid file type. Please select a JPG, JPEG, or PNG image.");
      event.target.value = null;
      featuredImageFile.value = null;
    }
  } else {
    featuredImageFile.value = null;
  }
};

const openImageModal = () => (showImageModal.value = true);
const closeImageModal = () => (showImageModal.value = false);

const removeImage = () => {
  if (imagePreviewUrl.value) {
    URL.revokeObjectURL(imagePreviewUrl.value);
  }
  imagePreviewUrl.value = null;
  featuredImageFile.value = null;
  const input = document.getElementById("featured-image-upload");
  if (input) input.value = null;
};

onMounted(() => {
  blogStore.resetPostData();
});
</script>

<style scoped>
.required-star {
  color: #ff0000;
  margin-left: 4px;
}

.error-message {
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 4px;
  display: block;
}

.is-invalid {
  border-color: #dc3545 !important;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.image-preview-container {
  position: relative;
  display: inline-block;
  margin-top: 10px;
}

.image-preview-thumbnail {
  max-width: 200px;
  max-height: 200px;
  border: 2px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.image-preview-thumbnail:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.remove-image-btn {
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.remove-image-btn:hover {
  background-color: #c82333;
}

.image-modal {
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.image-modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  animation: zoomIn 0.3s;
}

@keyframes zoomIn {
  from { transform: scale(0.7); }
  to { transform: scale(1); }
}

.image-modal-img {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 4px;
}

.close-modal {
  position: absolute;
  top: -40px;
  right: 0;
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s;
}

.close-modal:hover {
  color: #bbb;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}
</style>