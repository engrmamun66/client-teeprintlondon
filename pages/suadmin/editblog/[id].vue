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
                  <el-BaseInput
                    type="text"
                    label="Post Title"
                    v-model="blogStore.postData.title"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="form-group">
              <div class="date-box">
                <div class="date-box-input">
                  <label>Post Description</label>
                  <Editor
                    v-model="blogStore.postData.content"
                    api-key="gcvrg3hggtzhh90lq4180cnaco5tpvofl31o5ekpyg2i1lmj"
                    :init="{
                      height: 300,
                      menubar: false,
                      plugins: 'lists link image table code help',
                      toolbar:
                        'undo redo | formatselect | bold italic | bullist numlist',
                    }"
                  />
                  <div v-if="errors.short_description" class="invalid-feedback">
                    {{ errors.short_description }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="form-group">
              <label for="featured-image-upload"
                >Featured Image (JPG, PNG, JPEG)</label
              >
              <div class="date-box">
                <div class="date-box-input">
                  <input
                    type="file"
                    id="featured-image-upload"
                    accept=".jpg, .jpeg, .png"
                    @change="handleFeaturedImageUpload"
                    class="form-control"
                  />
                  <!-- <small v-if="featuredImageFile"
                    ></small
                  >
                  <small v-else-if="blogStore.postData.featured_image">
                    Current Image: {{ blogStore.postData.featured_image }}
                  </small> -->

                  <!-- Image Preview Thumbnail -->
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
                  <el-BaseInput
                    type="text"
                    label="Meta Title"
                    v-model="blogStore.postData.meta_title"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="form-group">
              <div class="date-box">
                <div class="date-box-input">
                  <label>Meta Description</label>
                  <Editor
                    v-model="blogStore.postData.meta_description"
                    api-key="gcvrg3hggtzhh90lq4180cnaco5tpvofl31o5ekpyg2i1lmj"
                    :init="{
                      height: 300,
                      menubar: false,
                      plugins: 'lists link image table code help',
                      toolbar:
                        'undo redo | formatselect | bold italic | bullist numlist',
                    }"
                  />
                  <div v-if="errors.short_description" class="invalid-feedback">
                    {{ errors.short_description }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="form-group">
              <div class="date-box">
                <div class="date-box-input">
                  <el-BaseInput
                    type="text"
                    label="Meta Keywords"
                    v-model="blogStore.postData.meta_keywords"
                  />
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
    </button>

    <!-- Image Modal for Full Size View -->
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
import { ref } from "vue";
import { useBlogStore } from "~/store/Blog.js";
import Editor from "@tinymce/tinymce-vue";
const route = useRoute();
let postId = null;
const blogStore = useBlogStore();

const errors = ref({});
const featuredImageFile = ref(null);
const imagePreviewUrl = ref(null);
const showImageModal = ref(false);

/**
 * Handles form submission with file upload
 */
async function handleSubmit() {
  // Create FormData to handle file upload
  const formData = new FormData();

  // Append all text fields
  formData.append("title", blogStore.postData.title);
  formData.append("content", blogStore.postData.content);
  formData.append("excerpt", blogStore.postData.excerpt);
  formData.append("meta_title", blogStore.postData.meta_title);
  formData.append("meta_description", blogStore.postData.meta_description);
  formData.append("meta_keywords", blogStore.postData.meta_keywords);

  formData.append("canonical_url", blogStore.postData.canonical_url);

  // Append the file if one was selected
  if (featuredImageFile.value) {
    formData.append("featured_image", featuredImageFile.value);
  }

  // Send FormData to the store/API
  await blogStore.update(postId, formData);
}

/**
 * Handles the file selection for the featured image input.
 * Creates a preview URL for the selected image.
 */
const handleFeaturedImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const validTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (validTypes.includes(file.type)) {
      featuredImageFile.value = file;

      // Create preview URL
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

/**
 * Opens the image modal to show full size preview
 */
const openImageModal = () => {
  showImageModal.value = true;
};

/**
 * Closes the image modal
 */
const closeImageModal = () => {
  showImageModal.value = false;
};

/**
 * Removes the selected image and clears preview
 */
const removeImage = () => {
  if (imagePreviewUrl.value) {
    URL.revokeObjectURL(imagePreviewUrl.value);
  }
  imagePreviewUrl.value = null;
  featuredImageFile.value = null;
  document.getElementById("featured-image-upload").value = null;
};

onMounted(async () => {
  postId = route.params.id;
  await blogStore.showPost(postId);
  imagePreviewUrl.value = blogStore.postData.image_url
});
</script>

<style scoped>
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
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.image-modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  animation: zoomIn 0.3s;
}

@keyframes zoomIn {
  from {
    transform: scale(0.7);
  }
  to {
    transform: scale(1);
  }
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

.invalid-feedback {
  display: block;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #dc3545;
}
</style>
