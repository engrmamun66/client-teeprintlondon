<template>
  <section class="teeprint-slider-section" style="background-color: #f2f3f8">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-6">
          <div class="teeprint-about-content">
            <div class="section-main-heading">
              <h2 class="section-heading-title-big mt-5">Our Recent Work</h2>
            </div>
          </div>
        </div>
      </div>

      <!-- Image Grid Section -->
      <div class="row">
        <div class="col-12">
          <div class="teeprint-grid-container">
            <div 
              class="teeprint-grid"
              :style="{ transform: `translateX(-${currentSet * 100}%)` }"
            >
              <!-- All items in a single row for sliding effect -->
              <div
                v-for="(item, index) in sliderItems"
                :key="index"
                class="grid-item"
                :class="{ 'video-item': item.type === 'video' }"
                :style="{ width: `${100 / itemsPerSet}%` }"
              >
                <img
                  v-if="item.type === 'image'"
                  :src="item.src"
                  :alt="item.alt"
                  class="grid-image"
                  @click="openModal(item.src)"
                />

                <video
                  v-else
                  :ref="(el) => { if (el) videoRefs[index] = el }"
                  class="grid-video"
                  :poster="item.poster"
                  controls
                >
                  <source :src="item.src" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div
                  v-if="item.type === 'video'"
                  class="video-play-icon"
                  @click="playVideo(index)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Navigation arrows -->
            <div 
              class="grid-arrow left-arrow" 
              @click="prevSet"
              v-if="currentSet > 0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </div>

            <div 
              class="grid-arrow right-arrow" 
              @click="nextSet"
              v-if="hasMoreItems"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Image Preview Modal -->
    <div
      class="image-preview-modal"
      :style="{ display: modalVisible ? 'flex' : 'none' }"
      @click.self="closeModal"
    >
      <div class="modal-content">
        <span class="close-modal" @click="closeModal">&times;</span>
        <img id="previewed-image" :src="modalImageSrc" alt="Preview" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const itemsPerSet = ref(4) // 4 items per row on large screens
const currentSet = ref(0)
const modalVisible = ref(false)
const modalImageSrc = ref('')
const videoRefs = ref([])
const isTransitioning = ref(false)

const sliderItems = [
  {
    type: "image",
    src: "/img/Slider/1.jpg",
    alt: "Men wearing hoodie with Stay Cozy Stay Cool text",
  },
  {
    type: "image",
    src: "/img/Slider/2.jpg",
    alt: "High quality photorealistic trendy hoodie",
  },
  {
    type: "video",
    src: "/img/Slider/7.mp4",
    poster: "/img/Slider/2.jpg",
    alt: "Teeprint London hoodie video",
  },
  {
    type: "image",
    src: "/img/Slider/3.jpg",
    alt: "Stylish high quality hoodie from Teeprint",
  },
  {
    type: "image",
    src: "/img/Slider/4.jpg",
    alt: "Young adult wearing Teeprint hoodie",
  },
  {
    type: "image",
    src: "/img/Slider/5.jpg",
    alt: "Surreal and vibrant cinematic hoodie photograph",
  },
  {
    type: "image",
    src: "/img/Slider/6.jpg",
    alt: "Young man wearing Teeprint hoodie",
  },
]

// Computed properties
const totalSets = computed(() => Math.ceil(sliderItems.length / itemsPerSet.value))
const hasMoreItems = computed(() => currentSet.value < totalSets.value - 1)

// Navigation methods with transition
const nextSet = () => {
  if (currentSet.value < totalSets.value - 1 && !isTransitioning.value) {
    isTransitioning.value = true
    currentSet.value++
    setTimeout(() => {
      isTransitioning.value = false
    }, 500) // Match this with CSS transition duration
  }
}

const prevSet = () => {
  if (currentSet.value > 0 && !isTransitioning.value) {
    isTransitioning.value = true
    currentSet.value--
    setTimeout(() => {
      isTransitioning.value = false
    }, 500) // Match this with CSS transition duration
  }
}

const playVideo = (index) => {
  const video = videoRefs.value[index]
  if (video) {
    video.play()
    video.controls = true
    const playIcon = video.parentElement.querySelector(".video-play-icon")
    if (playIcon) {
      playIcon.style.display = "none"
    }
  }
}

const pauseAllVideos = () => {
  videoRefs.value.forEach((video) => {
    if (video) {
      video.pause()
      video.controls = false
    }
  })
  document.querySelectorAll(".video-play-icon").forEach((icon) => {
    icon.style.display = "flex"
  })
}

const openModal = (src) => {
  modalImageSrc.value = src
  modalVisible.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  modalVisible.value = false
  document.body.style.overflow = 'auto'
}

const handleKeyDown = (e) => {
  if (modalVisible.value) {
    if (e.key === "Escape") {
      closeModal()
    }
  }
}

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown)
  
  // Adjust items per set based on screen size
  const handleResize = () => {
    if (window.innerWidth < 768) {
      itemsPerSet.value = 1
    } else if (window.innerWidth < 992) {
      itemsPerSet.value = 2
    } else if (window.innerWidth < 1200) {
      itemsPerSet.value = 3
    } else {
      itemsPerSet.value = 4
    }
    // Reset to first set when screen size changes
    currentSet.value = 0
  }
  
  handleResize()
  window.addEventListener('resize', handleResize)
})
</script>

<style scoped>
/* Grid Styles */
.teeprint-grid-container {
  position: relative;
  margin: 30px 0;
  overflow: hidden;
}

.teeprint-grid {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
}

.grid-item {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
  padding: 0 10px;
  box-sizing: border-box;

}

.grid-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  aspect-ratio: 1/1;
  transition: transform 0.3s ease;
  border-radius: 30px;
}

.grid-image:hover {
  transform: scale(1.03);
}

.grid-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 1/1;
  background-color: #f5f5f5;
}

.video-play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.video-play-icon svg {
  color: white;
  width: 30px;
  height: 30px;
}

.grid-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.grid-arrow:hover {
  background: rgba(255, 255, 255, 1);
  transform: translateY(-50%) scale(1.1);
}

.left-arrow {
  left: 10px;
}

.right-arrow {
  right: 10px;
}

/* Image Preview Modal Styles */
.image-preview-modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  justify-content: center;
  align-items: center;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

#previewed-image {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
}

.close-modal {
  position: absolute;
  top: -40px;
  right: -40px;
  color: white;
  font-size: 35px;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s ease;
}

.close-modal:hover {
  color: #ccc;
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .grid-item {
    width: calc(100% / 3) !important;
  }
}

@media (max-width: 992px) {
  .grid-item {
    width: 50% !important;
  }
}

@media (max-width: 768px) {
  .grid-item {
    width: 100% !important;
  }
  
  .modal-content {
    max-width: 95%;
  }

  .close-modal {
    right: 0;
    top: -50px;
  }
}

@media (max-width: 576px) {
  .grid-arrow {
    width: 30px;
    height: 30px;
  }
  
  .left-arrow {
    left: 5px;
  }
  
  .right-arrow {
    right: 5px;
  }
}
</style>