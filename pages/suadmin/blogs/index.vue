<template>
  <div>
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h4>Neaz Morshed</h4>
      <nuxt-link to="/suadmin/addblog" class="btn btn-success">
        <i class="las la-plus"></i> Add Product
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
            <tr v-for="post in blogStore.postList" :key="post.id">
              <td>
                <div class="px-2">
                  <img
                    :src="
                      post.image_url
                    "
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
                  <span>{{ stripHtmlTags(post.content) }}</span>
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
                  <button class="btn btn-sm btn-outline-danger" title="Delete">
                    <i class="las la-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useBlogStore } from "~/store/Blog.js";

const blogStore = useBlogStore();

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

onMounted(async () => {
  await blogStore.getPosts();
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
</style>
