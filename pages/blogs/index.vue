<script setup>
import { useBlogStore } from "~/store/Blog.js";

const blogStore = useBlogStore();
const isLoading = ref(true);
const isLoadingMore = ref(false);
const currentPage = ref(1);
const perPage = ref(5);

definePageMeta({
  layout: "web",
});

onMounted(async () => {
  isLoading.value = true;
  let payload = {
    page: currentPage.value,
    per_page: perPage.value,
  };
  await blogStore.getPublishedBlogs(payload);
  isLoading.value = false;
});

const loadMore = async () => {
  isLoadingMore.value = true;
  perPage.value += 5;
  let payload = {
    page: currentPage.value,
    per_page: perPage.value,
  };
  await blogStore.getPublishedBlogs(payload);
  isLoadingMore.value = false;
};

// Helper functions
const stripHtml = (html) => html.replace(/<[^>]*>/g, "");

const truncateByWords = (text, maxWords = 200) => {
  const stripped = stripHtml(text);
  const words = stripped.trim().split(/\s+/);
  if (words.length <= maxWords) return stripped;
  return words.slice(0, maxWords).join(" ") + "...";
};

const hasMoreWords = (text, maxWords = 200) => {
  const stripped = stripHtml(text);
  const words = stripped.trim().split(/\s+/);
  return words.length > maxWords;
};
</script>

<template>
  <div>
    <template v-if="isLoading">
      <div v-for="i in 4" :key="'init-shimmer-' + i">
        <div :class="i % 2 === 0 ? 'shimmer-layout-right' : 'shimmer-layout-left'">
          <div class="container py-5">
            <div class="row align-items-center" :class="{ 'flex-row-reverse': i % 2 === 0 }">
              <div class="col-xl-6 col-lg-6">
                <div class="shimmer-wrapper">
                  <div class="shimmer shimmer-image"></div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6">
                <div class="shimmer-title shimmer"></div>
                <div class="shimmer-text shimmer"></div>
                <div class="shimmer-text shimmer"></div>
                <div class="shimmer-buttons">
                  <div class="shimmer shimmer-button"></div>
                  <div class="shimmer shimmer-button"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <div v-for="(blog, index) in blogStore.publishedBlogs" :key="blog.id">
        <section :class="index % 2 === 0 ? 'teeprint-homewhychoose-section' : 'teeprint-about-section'">
          <div class="container">
            <div class="row align-items-center" :class="{ 'flex-row-reverse': index % 2 !== 0 }">
              <div class="col-xl-6 col-lg-6">
                <div :class="index % 2 === 0 ? 'teeprint-homewhychoose-img' : 'teeprint-about-img'">
                  <img :src="blog.image_url" :alt="blog.title" class="img-fluid" />
                </div>
              </div>
              <div class="col-xl-6 col-lg-6">
                <div :class="index % 2 === 0 ? 'teeprint-homewhychoose-content' : 'teeprint-about-content'">
                  <div class="section-main-heading">
                    <h2 class="section-heading-title-big">{{ blog.title }}</h2>
                  </div>
                  <div v-html="truncateByWords(blog.content, 200)"></div>
                  
                  <div class="blog-button-group mt-4">
                    <nuxt-link
                      v-if="hasMoreWords(blog.content, 200)"
                      :to="`/blogs/${blog.slug}`"
                      class="read-more-btn zoomInOut"
                    >
                      <span>Read More</span>
                    </nuxt-link>
                    <nuxt-link
                      :to="`/quote`"
                      class="teeprint-button teeprint-theme-btn zoomInOut btn-quote"
                    >
                      Get a Free Quote
                    </nuxt-link>
                    <nuxt-link
                      :to="{ name: 'shop' }"
                      class="teeprint-button teeprint-theme-btn zoomInOut btn-buy"
                    >
                      Buy Now
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section class="load-more-section text-center py-5" v-if="!isLoadingMore" :hidden="blogStore.totalBlogs <= perPage">
        <button @click="loadMore" class="read-more-btn zoomInOut">
          <span>Load More <i class="la la-arrow-down ml-1"></i></span>
        </button>
      </section>
    </template>

    <div class="container mt-5">
      <web-DuelCard
        img_left="/img/quote-page-card-image-1.jpeg"
        img_right="/img/quote-page-card-image-2.jpeg"
        paragraph="We bring your vision to life with creative designs..."
      />
    </div>
    <web-questions name="tshirt" />
  </div>
</template>

<style scoped>
/* Unified Button Group Logic */
.blog-button-group {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  gap: 15px; 
  width: 100%;
}

.blog-button-group .read-more-btn,
.blog-button-group .teeprint-button {
  flex: 0 0 auto;
  margin: 0 !important;
  white-space: nowrap;
  font-size: 14px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  height: 45px;
  text-decoration: none;
}

/* Color Overrides */
.btn-buy {
  background-color: #eead04 !important;
  color: white !important;
}
.btn-quote {
  background-color: #000 !important;
  color: #fff !important;
}

/* Read More Style - Fixed Text Color */
.read-more-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white !important; /* Forces button text to white */
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.read-more-btn span {
  color: white !important; /* Double-check for nested span */
}

/* Ensure consistent spacing during zoom/mobile */
@media (max-width: 768px) {
  .blog-button-group {
    gap: 10px;
  }
  
  .blog-button-group .read-more-btn,
  .blog-button-group .teeprint-button {
    font-size: 11px;
    padding: 8px 12px;
    flex: 1; 
  }
}

/* Shimmer Styles */
.shimmer {
  background: linear-gradient(90deg, #f0f0f0 0%, #e8e8e8 20%, #f0f0f0 40%, #f0f0f0 100%);
  background-size: 200% 100%;
  animation: shimmer-anim 1.5s infinite linear;
}
@keyframes shimmer-anim {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
.shimmer-image { width: 100%; height: 350px; border-radius: 8px; }
.shimmer-title { height: 30px; width: 70%; margin-bottom: 20px; border-radius: 4px; }
.shimmer-text { height: 12px; width: 100%; margin-bottom: 10px; border-radius: 4px; }
.shimmer-buttons { display: flex; gap: 15px; margin-top: 20px; }
.shimmer-button { height: 40px; width: 120px; border-radius: 50px; }
</style>