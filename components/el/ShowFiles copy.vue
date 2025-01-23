<template>
  <div class="file-list">
    <div class="file-card" v-for="(url, index) in fileUrls" :key="index">
      <!-- Image Files -->
      <div v-if="isImage(url)" class="image-card">
        <img :src="url" alt="Image Preview" class="image-preview" />
      </div>

      <!-- PDF Files -->
      <div v-else-if="isPDF(url)" class="pdf-card" @click="openInNewTab(url)">
        <!-- <i class="file-icon">📄</i> -->
        <i class="las la-file-pdf pdf-icon"></i>
        <span class="file-name">{{ getTruncatedName(url) }}</span>
      </div>

      <!-- DOCX Files -->
      <div v-else-if="isDOCX(url)" class="docx-card" @click="downloadFile(url)">
        <!-- <i class="file-icon">📄</i> -->
        <i class="las la-file-word file-icon word-icon"></i>
        <span class="file-name">{{ getTruncatedName(url) }}</span>
      </div>

      <!-- Unsupported Files -->
      <div v-else class="unsupported-card">
        <span class="file-name">Unsupported File</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  fileUrls: {
    type: Array,
    required: true,
  },
});

// Helper to check file type
const isImage = (url) => {
  const extension = url.split(".").pop().toLowerCase();
  return ["jpg", "jpeg", "png", "gif", "bmp", "webp"].includes(extension);
};

const isPDF = (url) => {
  return url.split(".").pop().toLowerCase() === "pdf";
};

const isDOCX = (url) => {
  return url.split(".").pop().toLowerCase() === "docx";
};

// Get truncated file name
const getTruncatedName = (url, maxLength = 15) => {
  const name = url.split("/").pop();
  return name.length > maxLength ? name.substring(0, maxLength) + "..." : name;
};

// Handle specific actions for file types
const openInNewTab = (url) => {
  window.open(url, "_blank");
};

const downloadFile = (url) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = url.split("/").pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
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
  cursor: pointer;
  transition: box-shadow 0.3s;
}

.file-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.image-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.pdf-card,
.docx-card,
.unsupported-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.file-icon {
  font-size: 32px;
  margin-bottom: 8px;
}

.file-name {
  font-size: 12px;
  color: #333;
  text-align: center;
  word-wrap: break-word;
}

.unsupported-card {
  color: #999;
}

.pdf-icon {
  font-size: 48px; /* Make the icon larger */
  color: #e63946; /* Red color for PDF files */
  margin-bottom: 8px;
}

.word-icon {
  font-size: 48px; /* Make the icon larger */
  color: #2a74e5; /* Blue color for Word files */
  margin-bottom: 8px;
}
</style>
