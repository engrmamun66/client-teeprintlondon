<template>
  <div class="file-list">
    <div class="file-card" v-for="(url, index) in fileUrls" :key="index">
      <!-- Image Files -->
      <div v-if="isImage(url)" class="image-card">
        <img :src="url" alt="Image Preview" class="image-preview" />
        <div class="image-actions">
          <i class="las la-eye eye-icon" @click="openImagePreview(url)"></i>
          <i
            class="las la-download download-icon"
            @click="downloadFile(url)"
          ></i>
        </div>
      </div>

      <!-- PDF Files -->
      <div v-else-if="isPDF(url)" class="pdf-card" @click="openInNewTab(url)">
        <i class="las la-file-pdf pdf-icon"></i>
        <span class="file-name">{{ getTruncatedName(url) }}</span>
      </div>

      <!-- DOCX Files -->
      <div
        v-else-if="isDOCX(url)"
        class="docx-card"
        @click="downloadFile(url, 3000)"
      >
        <i class="las la-file-word word-icon"></i>
        <span class="file-name">{{ getTruncatedName(url) }}</span>
      </div>

      <!-- Unsupported Files -->
      <div v-else class="unsupported-card">
        <span class="file-name">Unsupported File</span>
      </div>
    </div>

    <!-- Modal for Image Preview -->
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <img :src="currentImage" alt="Preview Image" class="modal-image" />
        <button class="close-button" @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { defineProps } from "vue";

defineProps({
  fileUrls: {
    type: Array,
    required: true,
  },
});

const isImage = (url) => {
  const extension = url.split(".").pop().toLowerCase();
  return ["jpg", "jpeg", "png", "gif", "bmp", "webp"].includes(extension);
};

const isPDF = (url) => url.split(".").pop().toLowerCase() === "pdf";
const isDOCX = (url) => url.split(".").pop().toLowerCase() === "docx";

const getTruncatedName = (url, maxLength = 15) => {
  const name = url.split("/").pop();
  return name.length > maxLength ? name.substring(0, maxLength) + "..." : name;
};

const openInNewTab = (url) => window.open(url, "_blank");

//   const downloadFile = (url) => {
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = url.split("/").pop();
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

async function downloadFile(url, delay = 2000) {
  try {
    // Fetch the file from the URL
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Convert the response into a Blob
    const blob = await response.blob();

    // Create a link element for the download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob); // Create a Blob URL
    link.download = url.split("/").pop(); // Extract the file name from the URL

    // Append the link to the document
    document.body.appendChild(link);

    // Add a delay using setTimeout before triggering the download
    setTimeout(() => {
      link.click(); // Trigger the download
      document.body.removeChild(link); // Remove the link element
      URL.revokeObjectURL(link.href); // Clean up the Blob URL
    }, delay); // Delay in milliseconds (default: 2 seconds)
  } catch (error) {
    console.error("Error downloading the file:", error);
  }
}

// Modal State and Actions
const showModal = ref(false);
const currentImage = ref("");

const openImagePreview = (url) => {
  currentImage.value = url;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  currentImage.value = "";
};
</script>
<style scoped>
.file-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.file-card {
  width: 120px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  background-color: #f9f9f9;
  position: relative;
  cursor: pointer;
  transition: box-shadow 0.3s;
}

.file-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.image-card {
  position: relative;
}

.image-preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.image-actions {
  position: absolute;
  top: 4px;
  right: 4px;
  display: flex;
  gap: 8px;
}

.eye-icon,
.download-icon {
  font-size: 18px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  padding: 4px;
  cursor: pointer;
}

.eye-icon:hover {
  background-color: #007bff;
}

.download-icon:hover {
  background-color: #28a745;
}

.pdf-icon {
  font-size: 48px;
  color: #e63946;
  margin-bottom: 8px;
}

.word-icon {
  font-size: 48px;
  color: #2a74e5;
  margin-bottom: 8px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  max-width: 80%;
  max-height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden; /* Prevents content overflow */
}

.modal-image {
  max-width: 100%; /* Prevents horizontal overflow */
  max-height: calc(
    80vh - 32px
  ); /* Prevents vertical overflow with padding accounted */
  object-fit: contain; /* Ensures the image maintains its aspect ratio */
  display: block; /* Ensures the image stays centered */
}

.close-button {
  position: absolute; /* Make it independent of other elements */
  top: 16px; /* Place it at the top of the modal */
  right: 16px; /* Align it to the right */
  padding: 8px 16px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  z-index: 10; /* Ensure it stays above the image */
  font-size: 14px;
}

.close-button:hover {
  background: #0056b3;
}
</style>
