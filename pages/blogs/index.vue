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

// Helper function to strip HTML tags from content
const stripHtml = (html) => {
  return html.replace(/<[^>]*>/g, "");
};

// Helper function to truncate text by word count
const truncateByWords = (text, maxWords = 200) => {
  const stripped = stripHtml(text);
  const words = stripped.trim().split(/\s+/);

  if (words.length <= maxWords) return stripped;

  return words.slice(0, maxWords).join(" ") + "...";
};

// Helper function to check if content has more than specified words
const hasMoreWords = (text, maxWords = 200) => {
  const stripped = stripHtml(text);
  const words = stripped.trim().split(/\s+/);
  return words.length > maxWords;
};
</script>

<template>
  <div>
    <!-- Loading Shimmer -->
    <template v-if="isLoading">
      <template v-for="i in 4" :key="'shimmer-' + i">
        <!-- Shimmer: Image on LEFT -->
        <section v-if="i % 2 === 1" class="teeprint-homewhychoose-section">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-6">
                <div class="teeprint-homewhychoose-img shimmer-wrapper">
                  <div class="shimmer shimmer-image"></div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6">
                <div class="teeprint-homewhychoose-content">
                  <div class="section-main-heading">
                    <div class="shimmer shimmer-title"></div>
                  </div>
                  <div class="shimmer shimmer-text"></div>
                  <div class="shimmer shimmer-text"></div>
                  <div class="shimmer shimmer-text" style="width: 70%"></div>
                  <div class="shimmer-buttons">
                    <div class="shimmer shimmer-button"></div>
                    <div class="shimmer shimmer-button"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Shimmer: Image on RIGHT -->
        <section v-else class="teeprint-about-section">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-6">
                <div class="teeprint-about-content">
                  <div class="section-main-heading">
                    <div class="shimmer shimmer-title"></div>
                  </div>
                  <div class="aboutus-list">
                    <div class="shimmer shimmer-text"></div>
                    <div class="shimmer shimmer-text"></div>
                    <div class="shimmer shimmer-text" style="width: 70%"></div>
                  </div>
                  <div class="shimmer-buttons">
                    <div class="shimmer shimmer-button"></div>
                    <div class="shimmer shimmer-button"></div>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6">
                <div class="teeprint-about-img shimmer-wrapper">
                  <div class="shimmer shimmer-image"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </template>
    </template>

    <!-- Actual Blog Posts -->
    <template v-else>
      <template
        v-for="(blog, index) in blogStore.publishedBlogs"
        :key="blog.id"
      >
        <!-- Odd index: Image on LEFT -->
        <section v-if="index % 2 === 0" class="teeprint-homewhychoose-section">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-6">
                <div class="teeprint-homewhychoose-img">
                  <img :src="blog.image_url" :alt="blog.title" />
                </div>
              </div>
              <div class="col-xl-6 col-lg-6">
                <div class="teeprint-homewhychoose-content">
                  <div class="section-main-heading">
                    <h2 class="section-heading-title-big">
                      {{ blog.title }}
                    </h2>
                  </div>
                  <div v-html="truncateByWords(blog.content, 200)"></div>
                  <nuxt-link
                    v-if="hasMoreWords(blog.content, 200)"
                    :to="`/blogs/${blog.slug}`"
                    class="teeprint-button teeprint-theme-btn zoomInOut"
                  >
                    Read More <i class="la la-arrow-right ml-1"></i>
                  </nuxt-link>
                  <nuxt-link
                    :to="{ name: 'shop' }"
                    style="background-color: #eead04"
                    class="teeprint-button teeprint-theme-btn zoomInOut mt-5 mx-4"
                  >
                    Buy Now <i class="la la-arrow-right ml-1"></i>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Even index: Image on RIGHT -->
        <section v-else class="teeprint-about-section">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-6">
                <div class="teeprint-about-content">
                  <div class="section-main-heading">
                    <h2 class="section-heading-title-big">
                      {{ blog.title }}
                    </h2>
                  </div>
                  <div class="aboutus-list">
                    <div v-html="truncateByWords(blog.content, 200)"></div>
                  </div>
                  <nuxt-link
                    v-if="hasMoreWords(blog.content, 200)"
                    :to="`/blogs/${blog.slug}`"
                    class="teeprint-button teeprint-theme-btn zoomInOut"
                  >
                    Read More <i class="la la-arrow-right ml-1"></i>
                  </nuxt-link>
                  <nuxt-link
                    :to="{ name: 'shop' }"
                    style="background-color: #eead04"
                    class="teeprint-button teeprint-theme-btn zoomInOut mt-5 mx-4"
                  >
                    Buy Now <i class="la la-arrow-right ml-1"></i>
                  </nuxt-link>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6">
                <div class="teeprint-about-img">
                  <img :src="blog.image_url" :alt="blog.title" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </template>

      <!-- Load More Button -->
      <section class="load-more-section">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <button
                @click="loadMore"
                :disabled="isLoadingMore"
                class="teeprint-button teeprint-theme-btn zoomInOut load-more-btn"
              >
                <span v-if="!isLoadingMore" style="color: white">
                  Load More <i class="la la-arrow-down ml-1"></i>
                </span>
                <span v-else> Loading... </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </template>

    <div class="container mt-5">
      <web-DuelCard
        img_left="/img/quote-page-card-image-1.jpeg"
        img_right="/img/quote-page-card-image-2.jpeg"
        paragraph="We bring your vision to life with creative designs that leave a lasting impression. Your dream is our mission, your satisfaction is our commitment, and delivering excellence is our promise."
      />
    </div>

    <web-questions name="tshirt" />
  </div>
</template>

<style scoped>
.shimmer-wrapper {
  position: relative;
  overflow: hidden;
}

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
  border-radius: 8px;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.shimmer-image {
  width: 100%;
  height: 400px;
  margin-bottom: 0;
}

.shimmer-title {
  height: 48px;
  width: 80%;
  margin-bottom: 20px;
}

.shimmer-text {
  height: 16px;
  width: 100%;
  margin-bottom: 12px;
}

.shimmer-buttons {
  display: flex;
  gap: 20px;
  margin-top: 30px;
}

.shimmer-button {
  height: 50px;
  width: 150px;
  border-radius: 4px;
}

.load-more-section {
  padding: 40px 0;
}

.load-more-btn {
  min-width: 200px;
  color: #ffffff !important;
}

.load-more-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .shimmer-image {
    height: 250px;
  }

  .shimmer-title {
    height: 36px;
  }

  .shimmer-buttons {
    flex-direction: column;
  }

  .shimmer-button {
    width: 100%;
  }

  .load-more-btn {
    width: 100%;
  }
}
</style>
