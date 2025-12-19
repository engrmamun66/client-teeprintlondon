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
  // Increase the count to fetch current + 5 more
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
        <div
          :class="i % 2 === 0 ? 'shimmer-layout-right' : 'shimmer-layout-left'"
        >
          <div class="container py-5">
            <div
              class="row align-items-center"
              :class="{ 'flex-row-reverse': i % 2 === 0 }"
            >
              <div class="col-xl-6 col-lg-6">
                <div class="shimmer-wrapper">
                  <div class="shimmer shimmer-image"></div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6">
                <div class="shimmer shimmer-title"></div>
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
      </div>
    </template>

    <template v-else>
      <div v-for="(blog, index) in blogStore.publishedBlogs" :key="blog.id">
        <section v-if="index % 2 === 0" class="teeprint-homewhychoose-section">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-xl-6 col-lg-6">
                <div class="teeprint-homewhychoose-img">
                  <img
                    :src="blog.image_url"
                    :alt="blog.title"
                    class="img-fluid"
                  />
                </div>
              </div>
              <div class="col-xl-6 col-lg-6">
                <div class="teeprint-homewhychoose-content">
                  <div class="section-main-heading">
                    <h2 class="section-heading-title-big">{{ blog.title }}</h2>
                  </div>
                  <div v-html="truncateByWords(blog.content, 200)"></div>
                  <div class="mt-4">
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
                      class="teeprint-button teeprint-theme-btn zoomInOut mx-2"
                    >
                      Buy Now <i class="la la-arrow-right ml-1"></i>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section v-else class="teeprint-about-section">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-xl-6 col-lg-6">
                <div class="teeprint-about-content">
                  <div class="section-main-heading">
                    <h2 class="section-heading-title-big">{{ blog.title }}</h2>
                  </div>
                  <div class="aboutus-list">
                    <div v-html="truncateByWords(blog.content, 200)"></div>
                  </div>
                  <div class="mt-4">
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
                      class="teeprint-button teeprint-theme-btn zoomInOut mx-2"
                    >
                      Buy Now <i class="la la-arrow-right ml-1"></i>
                    </nuxt-link>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6">
                <div class="teeprint-about-img">
                  <img
                    :src="blog.image_url"
                    :alt="blog.title"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div v-if="isLoadingMore">
        <div v-for="i in 2" :key="'more-shimmer-' + i">
          <div
            :class="
              (blogStore.publishedBlogs.length + i) % 2 === 0
                ? 'shimmer-layout-right'
                : 'shimmer-layout-left'
            "
          >
            <div class="container py-5">
              <div
                class="row align-items-center"
                :class="{
                  'flex-row-reverse':
                    (blogStore.publishedBlogs.length + i) % 2 === 0,
                }"
              >
                <div class="col-xl-6 col-lg-6">
                  <div class="shimmer-wrapper">
                    <div class="shimmer shimmer-image"></div>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                  <div class="shimmer-title shimmer"></div>
                  <div class="shimmer-text shimmer"></div>
                  <div class="shimmer-text shimmer"></div>
                  <div class="shimmer-text shimmer" style="width: 70%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        class="load-more-section"
        v-if="!isLoadingMore"
        :hidden="blogStore.totalBlogs <= perPage"
      >
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <button
                @click="loadMore"
                class="teeprint-button teeprint-theme-btn zoomInOut load-more-btn"
              >
                <span style="color: white"
                  >Load More <i class="la la-arrow-down ml-1"></i
                ></span>
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
        paragraph="We bring your vision to life with creative designs..."
      />
    </div>
    <web-questions name="tshirt" />
  </div>
</template>

<style scoped>
/* Shimmer Animation */
.shimmer-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.shimmer {
  background: linear-gradient(
    90deg,
    #f0f0f0 0%,
    #e8e8e8 20%,
    #f0f0f0 40%,
    #f0f0f0 100%
  );
  background-size: 200% 100%;
  animation: shimmer-anim 1.5s infinite linear;
  border-radius: 4px;
}

@keyframes shimmer-anim {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

/* Shimmer Elements */
.shimmer-image {
  width: 100%;
  height: 350px;
}
.shimmer-title {
  height: 40px;
  width: 80%;
  margin-bottom: 20px;
}
.shimmer-text {
  height: 14px;
  width: 100%;
  margin-bottom: 12px;
}
.shimmer-buttons {
  display: flex;
  gap: 15px;
  margin-top: 25px;
}
.shimmer-button {
  height: 45px;
  width: 140px;
}

/* Layout adjustments */
.load-more-section {
  padding: 50px 0;
}
.load-more-btn {
  min-width: 220px;
}

@media (max-width: 991px) {
  .shimmer-image {
    height: 250px;
    margin-bottom: 20px;
  }
}
</style>
