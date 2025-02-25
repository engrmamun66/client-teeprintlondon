<template>
  <div class="review-container">
    <!-- Business Information -->
    <div v-if="businessInfo" class="business-info">
      <h2>{{ businessInfo.name }}</h2>
      <p>⭐ {{ businessInfo.overall_star_rating }} ({{ businessInfo.rating_count }} reviews)</p>
      <p>{{ businessInfo.about }}</p>
    </div>

    <!-- Reviews Grid -->
    <div v-if="reviews.length > 0">
      <h3 class="review-title">Customer Reviews</h3>
      <div class="reviews-grid">
        <div v-for="review in reviews" :key="review.id" class="review-card">
          <div class="reviewer-info">
            <img :src="review.reviewer_photo_link" alt="Reviewer Photo" class="reviewer-photo" />
            <p class="reviewer-name">{{ review.reviewer_name }}</p>
          </div>
          <div class="review-content">
            <p class="review-rating">⭐ {{ review.rating }}</p>
            <p v-html="review.review_text"></p>
            <p class="review-date">{{ formatDate(review.review_date_time) }}</p>
            <a :href="review.reviewer_link" target="_blank" class="review-link">View on Google</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading Message -->
    <p v-if="loading" class="loading">Loading reviews...</p>

    <!-- Error Message -->
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Reactive state
const reviews = ref([]);
const businessInfo = ref(null);
const loading = ref(true);
const error = ref(null);

// Fetch data
const fetchData = async () => {
  try {
    const response = await fetch('https://data.accentapi.com/feed/25527491.json?nocache=1740422654267');
    if (!response.ok) throw new Error('Failed to fetch data');
    const data = await response.json();
    reviews.value = data.reviews;
    businessInfo.value = data.bio;
  } catch (err) {
    error.value = 'Failed to load reviews. Please try again later.';
  } finally {
    loading.value = false;
  }
};

// Format date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

// Fetch data on mount
onMounted(fetchData);
</script>

<style scoped>
.review-container {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

.business-info {
  margin-bottom: 20px;
}

.review-title {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.review-card {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.reviewer-info {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.reviewer-photo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.reviewer-name {
  font-weight: bold;
}

.review-rating {
  font-size: 1.2rem;
  color: #ffcc00;
}

.review-date {
  font-size: 0.9rem;
  color: gray;
}

.review-link {
  display: inline-block;
  margin-top: 10px;
  color: #1a73e8;
  text-decoration: none;
  font-weight: bold;
}

.review-link:hover {
  text-decoration: underline;
}

.loading {
  font-size: 1.2rem;
  color: #666;
}

.error {
  color: red;
  font-weight: bold;
}

/* Responsive Grid */
@media (max-width: 768px) {
  .reviews-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .reviews-grid {
    grid-template-columns: 1fr;
  }
}
</style>