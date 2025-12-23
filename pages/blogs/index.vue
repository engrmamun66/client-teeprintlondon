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

// HELPER FUNCTIONS - FIXED TO KEEP HTML TAGS
const truncateByWords = (text, maxWords = 50) => {
  if (!text) return "";
  const words = text.split(/\s+/);
  if (words.length <= maxWords) return text;
  // Truncate but keep the HTML structure intact
  return words.slice(0, maxWords).join(" ") + "...";
};

const hasMoreWords = (text, maxWords = 50) => {
  if (!text) return false;
  const stripped = text.replace(/<[^>]*>/g, ""); // Only strip for counting
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
                  
                  <div class="blog-content" v-html="truncateByWords(blog.content, 50)"></div>

                  <div class="blog-button-group mt-4">
                    <nuxt-link v-if="hasMoreWords(blog.content, 50)" :to="`/blogs/${blog.slug}`"
                      class="read-more-btn zoomInOut">
                      <span>Read More</span>
                    </nuxt-link>
                    <nuxt-link :to="`/quote`" class="teeprint-button teeprint-theme-btn zoomInOut btn-quote">
                      Get a Free Quote
                    </nuxt-link>
                    <nuxt-link :to="{ name: 'shop' }" class="teeprint-button teeprint-theme-btn zoomInOut btn-buy">
                      Buy Now
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div class="load-more-wrapper">
        <button 
          v-if="blogStore.totalBlogs > perPage && !isLoadingMore" 
          @click="loadMore" 
          class="read-more-btn zoomInOut" 
          type="button"
        >
          <span>Load More <i class="la la-arrow-down ml-1"></i></span>
        </button>
        
        <div v-if="isLoadingMore" class="text-center p-4">
          <div class="spinner-border text-primary" role="status"></div>
        </div>
      </div>
    </template>

    <div class="container mt-5">
      <web-DuelCard img_left="/img/quote-page-card-image-1.jpeg" img_right="/img/quote-page-card-image-2.jpeg"
        paragraph="We bring your vision to life with creative designs..." />
    </div>
    <web-questions name="tshirt" />
  </div>
</template>

<style scoped>
/* Center the Load More wrapper */
.load-more-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 50px 0;
  padding-bottom: 30px;
}

/* Force links inside blog content to be blue */
.blog-content :deep(a) {
  color: #007bff !important;
  text-decoration: underline !important;
  font-weight: 600;
}

.blog-content :deep(a:hover) {
  color: #0056b3 !important;
}

/* Shared Button Style for Read More and Load More */
.read-more-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white !important;
  font-weight: 600 !important;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3) !important;
  border: none !important;
  cursor: pointer !important;
  padding: 12px 30px !important;
  border-radius: 50px !important;
  font-size: 14px !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  text-decoration: none !important;
  height: 45px !important;
  transition: transform 0.3s ease !important;
}

.read-more-btn:hover {
  transform: scale(1.05) !important;
}

.read-more-btn span, .read-more-btn i {
  color: white !important;
}

/* Existing button group styles */
.blog-button-group {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
}

.teeprint-button {
  border-radius: 50px;
  height: 45px;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  font-size: 14px;
  text-decoration: none;
}

.btn-buy { background-color: #eead04 !important; color: white !important; }
.btn-quote { background-color: #000 !important; color: #fff !important; }

/* Shimmer animations */
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
.shimmer-title { height: 30px; width: 70%; margin-bottom: 20px; }
.shimmer-text { height: 12px; width: 100%; margin-bottom: 10px; }
.shimmer-button { height: 40px; width: 120px; border-radius: 50px; margin-right: 10px; }
</style>