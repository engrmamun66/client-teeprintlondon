<script setup>
import { useBlogStore } from "~/store/Blog.js";

const blogStore = useBlogStore();

definePageMeta({
  layout: "web",
});

onMounted(async () => {
  await blogStore.getPublishedBlogs();
  console.log("*&&*&", blogStore.publishedBlogs);
});

// Helper function to strip HTML tags from content
const stripHtml = (html) => {
  return html.replace(/<[^>]*>/g, '');
};

// Helper function to truncate text
const truncateText = (text, maxLength = 200) => {
  const stripped = stripHtml(text);
  if (stripped.length <= maxLength) return stripped;
  return stripped.substring(0, maxLength) + '...';
};
</script>

<template>
  <div>
    <!-- Loop through all blog posts -->
    <template v-for="(blog, index) in blogStore.publishedBlogs" :key="blog.id">
      
      <!-- Odd index: Image on LEFT (like first section) -->
      <section 
        v-if="index % 2 === 0" 
        class="teeprint-homewhychoose-section"
      >
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-6">
              <div class="teeprint-homewhychoose-img">
                <img 
                  :src="blog.image_url" 
                  :alt="blog.title" 
                />
              </div>
            </div>
            <div class="col-xl-6 col-lg-6">
              <div class="teeprint-homewhychoose-content">
                <div class="section-main-heading">
                  <h2 class="section-heading-title-big">
                    {{ blog.title }}
                  </h2>
                </div>
                <div v-html="blog.content"></div>
                <nuxt-link
                  :to="{ name: 'quote' }"
                  class="teeprint-button teeprint-theme-btn zoomInOut"
                >
                  Get A Free Quote <i class="la la-arrow-right ml-1"></i>
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

      <!-- Even index: Image on RIGHT (like second section) -->
      <section 
        v-else 
        class="teeprint-about-section"
      >
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
                  <div v-html="blog.content"></div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6">
              <div class="teeprint-about-img">
                <img 
                  :src="blog.image_url" 
                  :alt="blog.title" 
                />
              </div>
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