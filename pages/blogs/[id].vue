<script setup>
import { useBlogStore } from "~/store/Blog.js";

const blogStore = useBlogStore();
const route = useRoute();

definePageMeta({
  layout: "web",
});
let loading = ref(true);
const slug = computed(() => route.params.id || route.params.slug);
const error = ref(null);

onMounted(async () => {
  loading.value = true;
  await blogStore.getBlogBySlug(slug.value);
  loading.value = false;
});

const stripHtml = (html) => {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();
};

useSeoMeta({
  title: () =>
    blogStore.blogBySlug?.meta_title ||
    blogStore.blogBySlug?.title ||
    "Loading Blog...",
  ogTitle: () =>
    blogStore.blogBySlug?.meta_title || blogStore.blogBySlug?.title,
  description: () =>
    stripHtml(
      blogStore.blogBySlug?.meta_description ||
        blogStore.blogBySlug?.excerpt ||
        ""
    ),
  ogDescription: () => stripHtml(blogStore.blogBySlug?.meta_description || ""),
  keywords: () => blogStore.blogBySlug?.meta_keywords,
  ogImage: () => blogStore.blogBySlug?.image_url,
});
</script>

<template>
  <div>
    <template v-if="loading">
      <section class="blog-detail-section">
        <div class="container">
          <div class="blog-header text-center">
            <div class="shimmer shimmer-title"></div>
            <div class="shimmer shimmer-meta"></div>
          </div>

          <div class="blog-image-wrapper full-width shimmer-wrapper">
            <div class="shimmer shimmer-image"></div>
          </div>

          <div class="blog-content-container">
            <div class="shimmer shimmer-text"></div>
            <div class="shimmer shimmer-text"></div>
            <div class="shimmer shimmer-text"></div>
            <div class="shimmer shimmer-text"></div>
            <div class="shimmer shimmer-text" style="width: 85%"></div>
            <div class="shimmer shimmer-text" style="width: 90%"></div>
            <div class="shimmer shimmer-text" style="width: 75%"></div>

            <div class="shimmer shimmer-spacing"></div>

            <div class="shimmer shimmer-text"></div>
            <div class="shimmer shimmer-text"></div>
            <div class="shimmer shimmer-text" style="width: 80%"></div>
            <div class="shimmer shimmer-text" style="width: 95%"></div>

            <div class="blog-actions">
              <div class="shimmer shimmer-button"></div>
              <div class="shimmer shimmer-button"></div>
            </div>
          </div>
        </div>
      </section>
    </template>

    <template v-else-if="error">
      <section class="blog-detail-section">
        <div class="container text-center py-5">
          <i
            class="la la-exclamation-triangle"
            style="font-size: 64px; color: #ff6b6b"
          ></i>
          <h2 class="mt-3">Oops! Something went wrong</h2>
          <p class="text-muted">
            We couldn't load this blog post. Please try again later.
          </p>
          <nuxt-link
            :to="{ name: 'blogs' }"
            class="teeprint-button teeprint-theme-btn mt-4"
          >
            <i class="la la-arrow-left mr-1"></i> Back to Blogs
          </nuxt-link>
        </div>
      </section>
    </template>

    <template v-else-if="blogStore.blogBySlug">
      <section class="blog-detail-section">
        <div class="container">
          <div class="blog-header text-center">
            <h1 class="blog-title">{{ blogStore.blogBySlug.title }}</h1>
            <div class="blog-meta" v-if="blogStore.blogBySlug.published_at">
              <i class="la la-calendar"></i>
              {{
                new Date(blogStore.blogBySlug.published_at).toLocaleDateString(
                  "en-US",
                  { year: "numeric", month: "long", day: "numeric" }
                )
              }}
            </div>
          </div>

          <div class="blog-image-wrapper full-width">
            <img
              :src="blogStore.blogBySlug.image_url"
              :alt="blogStore.blogBySlug.title"
              class="blog-featured-image"
            />
          </div>

          <div class="blog-content-container">
            <div
              class="blog-content"
              v-html="blogStore.blogBySlug.content"
            ></div>

            <div class="blog-actions">
              <nuxt-link
                :to="{ name: 'shop' }"
                class="teeprint-button teeprint-theme-btn zoomInOut btn-buy"
              >
                Buy Now
              </nuxt-link>
              <nuxt-link
                :to="{ name: 'quote' }"
                class="teeprint-button teeprint-theme-btn zoomInOut btn-back"
              >
                Get a Free Quote
              </nuxt-link>
              <nuxt-link :to="`/blogs`" class="read-more-btn zoomInOut">
                <span> Read More Blogs</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </section>
    </template>

    <div class="container mt-5">
      <web-DuelCard
        img_left="/img/quote-page-card-image-1.jpeg"
        img_right="/img/quote-page-card-image-2.jpeg"
        paragraph="We bring your vision to life with creative designs that leave a lasting impression."
      />
    </div>
    <web-questions name="tshirt" />
  </div>
</template>

<style scoped>
.blog-detail-section {
  padding: 80px 0;
}

.blog-header {
  margin-bottom: 50px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.blog-title {
  font-size: 52px;
  font-weight: 800;
  color: #1a1a1a;
  margin-top: 40px;
  line-height: 1.1;
}

.blog-meta {
  font-size: 16px;
  color: #777;
  font-weight: 500;
}

.blog-meta i {
  margin-right: 8px;
}

.blog-image-wrapper.full-width {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto 60px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.blog-featured-image {
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
}

.blog-content-container {
  max-width: 1050px;
  margin: 0 auto;
  padding: 0 20px;
}

.blog-content {
  font-size: 19px;
  line-height: 1.9;
  color: #2c2c2c;
}

.blog-content :deep(p) {
  margin-bottom: 25px;
}

.blog-content :deep(h2) {
  font-size: 36px;
  margin-top: 50px;
  margin-bottom: 25px;
}

.blog-content :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  margin: 30px 0;
}

/* ========== HYPERLINK STYLES ========== */
.blog-content :deep(a) {
  color: #1e90ff;
  text-decoration: underline;
  transition: color 0.3s ease;
}

.blog-content :deep(a:hover) {
  color: #0066cc;
  text-decoration: underline;
}

.blog-content :deep(a:visited) {
  color: #551a8b;
}

.blog-actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid #eee;
}

.btn-buy {
  background-color: #eead04 !important;
  min-width: 200px;
}

.btn-back {
  background-color: #222 !important;
  min-width: 200px;
}

/* ========== READ MORE BUTTON FIX ========== */
.read-more-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 28px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white !important;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 15px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  text-align: center;
}

.read-more-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  transition: left 0.4s ease;
  z-index: 0;
}

.read-more-btn:hover::before {
  left: 0;
}

.read-more-btn span {
  position: relative;
  z-index: 1;
  color: white;
}

.read-more-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

/* ========== SHIMMER STYLES ========== */
.shimmer-wrapper {
  position: relative;
  overflow: hidden;
  background-color: #f5f5f5;
}

.shimmer {
  background: linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 20%, #f0f0f0 40%, #f0f0f0 100%);
  background-size: 200% 100%;
  animation: shimmerAnimation 1.5s infinite;
  border-radius: 8px;
  margin-bottom: 15px;
}

@keyframes shimmerAnimation {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.shimmer-title { height: 60px; width: 70%; margin: 0 auto 20px; }
.shimmer-meta { height: 20px; width: 180px; margin: 0 auto; }
.shimmer-image { height: 600px; width: 100%; }
.shimmer-text { height: 18px; width: 100%; }

/* ========== RESPONSIVE ========== */
@media (max-width: 992px) {
  .blog-title { font-size: 38px; }
}

@media (max-width: 768px) {
  .blog-detail-section { padding: 40px 0; }
  .blog-header { margin-bottom: 30px; padding: 0 15px; width: 100%; max-width: 100%; }
  .blog-title { font-size: 28px; line-height: 1.3; display: block; word-wrap: break-word; margin-bottom: 15px; }
  .blog-meta { font-size: 14px; }
  .blog-image-wrapper.full-width { margin-bottom: 40px; border-radius: 0; margin-left: -15px; margin-right: -15px; width: calc(100% + 30px); }
  .shimmer-image { height: 300px; border-radius: 0; }
  .shimmer-title { height: 45px; width: 90%; }
  .blog-content { font-size: 17px; }
  .blog-actions { flex-direction: column; margin-top: 40px; padding-top: 30px; }
  .btn-buy, .btn-back, .read-more-btn { width: 100%; }
  .shimmer-button { width: 100%; }
}
</style>