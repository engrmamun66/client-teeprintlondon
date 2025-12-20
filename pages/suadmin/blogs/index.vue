<template>
  <div>
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h4>Neaz Morshed</h4>
      <nuxt-link to="/suadmin/addblog" class="btn btn-success">
        <i class="las la-plus"></i> Add Blog
      </nuxt-link>
    </div>

    <div class="row">
      <div class="col-12">
        <table id="example" class="table table-striped" style="width: 100%">
          <thead>
            <tr>
              <th>Image</th>
              <th>Post Id</th>
              <th>Post Title</th>
              <th>Post Description</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <!-- Shimmer Loading State -->
            <template v-if="isLoading">
              <tr v-for="n in 5" :key="`shimmer-${n}`">
                <td>
                  <div class="px-2">
                    <div class="shimmer shimmer-img"></div>
                  </div>
                </td>
                <td>
                  <div class="px-2">
                    <div class="shimmer shimmer-text shimmer-text-short"></div>
                  </div>
                </td>
                <td>
                  <div class="px-2">
                    <div class="shimmer shimmer-text"></div>
                  </div>
                </td>
                <td>
                  <div class="px-2">
                    <div class="shimmer shimmer-text shimmer-text-long"></div>
                  </div>
                </td>
                <td>
                  <div class="px-2">
                    <div class="shimmer shimmer-text"></div>
                  </div>
                </td>
                <td>
                  <div class="d-flex gap-2 justify-content-center">
                    <div class="shimmer shimmer-btn"></div>
                    <div class="shimmer shimmer-btn"></div>
                  </div>
                </td>
              </tr>
            </template>

            <!-- Actual Data -->
            <template v-else>
              <tr v-for="post in blogStore.postList" :key="post.id">
                <td>
                  <div class="px-2">
                    <img
                      :src="post.image_url"
                      :alt="post.title"
                      class="product-img"
                    />
                  </div>
                </td>
                <td>
                  <div class="px-2">
                    <span>{{ post.id }}</span>
                  </div>
                </td>
                <td>
                  <div class="px-2">
                    <span>{{ post.title }}</span>
                  </div>
                </td>
                <td>
                  <div class="px-2">
                    <span>{{ truncateByWords(stripHtmlTags(post.content), 150) }}</span>
                  </div>
                </td>

                <td>
                  <div class="px-2">
                    <span>{{
                      new Date(post.created_at).toLocaleDateString()
                    }}</span>
                  </div>
                </td>
                <td>
                  <div class="d-flex gap-2 justify-content-center">
                    <nuxt-link
                      :to="`/suadmin/editblog/${post.id}`"
                      class="btn btn-sm btn-outline-primary"
                      title="Edit"
                    >
                      <i class="las la-edit"></i>
                    </nuxt-link>
                    <button
                      class="btn btn-sm btn-outline-danger"
                      title="Delete"
                      @click="
                        showConfirmation = true;
                        postId = post.id;
                      "
                    >
                      <i class="las la-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>

    <Modal-Confirm
      v-if="showConfirmation"
      v-model="showConfirmation"
      :skipAutoClose="false"
      @yes="
        async () => {
          let isDeleted = await blogStore.deletePost(postId);
          if (isDeleted) {
            showConfirmation = false;
            productId = null;
          }
        }
      "
    >
      <template v-if="showConfirmation"> Are you sure? </template>
    </Modal-Confirm>
  </div>
</template>

<script setup>
import { useBlogStore } from "~/store/Blog.js";

const blogStore = useBlogStore();
let showConfirmation = ref(false);
let postId = ref(null);
let isLoading = ref(true);

/**
 * Utility function to strip HTML tags from a string.
 * Uses a regular expression to match and replace tags with an empty string.
 * @param {string} htmlString - The string potentially containing HTML tags.
 * @returns {string} The cleaned text string.
 */
const stripHtmlTags = (htmlString) => {
  // Regex to match anything between < and > (including the tags themselves)
  return htmlString ? String(htmlString).replace(/<[^>]*>/g, "") : "";
};

/**
 * Truncate text by word count
 * @param {string} text - The text to truncate
 * @param {number} maxWords - Maximum number of words (default 150)
 * @returns {string} Truncated text with ... if exceeds limit
 */
const truncateByWords = (text, maxWords = 150) => {
  if (!text) return "";
  
  const words = text.trim().split(/\s+/);
  
  if (words.length <= maxWords) return text;
  
  return words.slice(0, maxWords).join(" ") + "...";
};

onMounted(async () => {
  isLoading.value = true;
  await blogStore.getPosts();
  isLoading.value = false;
});
</script>

<style scoped>
.product-img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
}

.badge {
  padding: 0.35em 0.65em;
  font-size: 0.875rem;
}

.btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}

.gap-2 {
  gap: 0.5rem;
}

/* Shimmer Effect Styles */
.shimmer {
  background: linear-gradient(
    90deg,
    #f0f0f0 0%,
    #e0e0e0 20%,
    #f0f0f0 40%,
    #f0f0f0 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.shimmer-img {
  width: 50px;
  height: 50px;
}

.shimmer-text {
  height: 16px;
  width: 120px;
}

.shimmer-text-short {
  width: 60px;
}

.shimmer-text-long {
  width: 250px;
}

.shimmer-btn {
  width: 32px;
  height: 32px;
  border-radius: 4px;
}
</style>