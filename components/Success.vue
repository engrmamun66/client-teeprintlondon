<template>
  <transition name="modal-fade">
    <div v-if="show" class="celebration-overlay" @click="closeModal">
      <div class="celebration-container" @click.stop>
        <!-- Confetti -->
        <div class="confetti-wrapper">
          <div v-for="i in 50" :key="`confetti-${i}`" class="confetti" :style="getConfettiStyle(i)"></div>
        </div>

        <!-- Balloons -->
        <div class="balloons-wrapper">
          <div v-for="i in 8" :key="`balloon-${i}`" class="balloon" :style="getBalloonStyle(i)">
            <div class="balloon-string"></div>
          </div>
        </div>

        <!-- Ribbons -->
        <div class="ribbons-wrapper">
          <div v-for="i in 6" :key="`ribbon-${i}`" class="ribbon" :style="getRibbonStyle(i)"></div>
        </div>

        <!-- Stars -->
        <div class="stars-wrapper">
          <div v-for="i in 20" :key="`star-${i}`" class="star" :style="getStarStyle(i)">✨</div>
        </div>

        <!-- Main Content Card -->
        <div class="celebration-card">
          <div class="success-icon">
            <svg viewBox="0 0 52 52" class="checkmark">
              <circle class="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
              <path class="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
          </div>

          <h1 class="celebration-title">
            🎉 Success! 🎉
          </h1>
          
          <p class="celebration-message">
            Your quotation request has been submitted successfully!
          </p>

          <div class="celebration-details">
            <div class="detail-item">
              <span class="icon">📧</span>
              <span class="text">Check your email for confirmation</span>
            </div>
            <div class="detail-item">
              <span class="icon">⏰</span>
              <span class="text">We’ll get in touch with you very soon.</span>
            </div>
            <div class="detail-item">
              <span class="icon">💼</span>
              <span class="text">Your reference number will be sent shortly</span>
            </div>
          </div>

          <button @click="closeModal" class="celebration-button">
            <span>Awesome! Let's Go</span>
            <span class="button-arrow">→</span>
          </button>

          <p class="celebration-footer">
            Thank you for choosing us! 🌟
          </p>
        </div>

        <!-- Fireworks -->
        <div class="fireworks-wrapper">
          <div v-for="i in 3" :key="`firework-${i}`" class="firework" :style="getFireworkStyle(i)"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close');
};

// Random style generators for animations
const getConfettiStyle = (index) => {
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#fd79a8', '#fdcb6e', '#00b894'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomLeft = Math.random() * 100;
  const randomDelay = Math.random() * 2;
  const randomDuration = 3 + Math.random() * 2;
  
  return {
    left: `${randomLeft}%`,
    backgroundColor: randomColor,
    animationDelay: `${randomDelay}s`,
    animationDuration: `${randomDuration}s`
  };
};

const getBalloonStyle = (index) => {
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#fd79a8', '#a29bfe', '#00b894'];
  const positions = [5, 15, 25, 35, 65, 75, 85, 95];
  const randomDelay = Math.random() * 1;
  const randomDuration = 4 + Math.random() * 2;
  
  return {
    left: `${positions[index - 1]}%`,
    backgroundColor: colors[index - 1],
    animationDelay: `${randomDelay}s`,
    animationDuration: `${randomDuration}s`
  };
};

const getRibbonStyle = (index) => {
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#fd79a8'];
  const positions = [10, 25, 40, 60, 75, 90];
  const randomDelay = Math.random() * 1;
  
  return {
    left: `${positions[index - 1]}%`,
    background: `linear-gradient(135deg, ${colors[index - 1]}, ${colors[(index) % colors.length]})`,
    animationDelay: `${randomDelay}s`
  };
};

const getStarStyle = (index) => {
  const randomLeft = Math.random() * 100;
  const randomTop = Math.random() * 100;
  const randomDelay = Math.random() * 2;
  const randomDuration = 1 + Math.random() * 2;
  
  return {
    left: `${randomLeft}%`,
    top: `${randomTop}%`,
    animationDelay: `${randomDelay}s`,
    animationDuration: `${randomDuration}s`
  };
};

const getFireworkStyle = (index) => {
  const positions = [
    { left: '20%', top: '20%' },
    { left: '80%', top: '30%' },
    { left: '50%', top: '15%' }
  ];
  const randomDelay = index * 0.5;
  
  return {
    ...positions[index - 1],
    animationDelay: `${randomDelay}s`
  };
};

// Close on ESC key
const handleKeydown = (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped>
/* Modal Transitions */
.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from, .modal-fade-leave-to {
  opacity: 0;
}

/* Overlay */
.celebration-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;
}

.celebration-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Confetti */
.confetti-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.confetti {
  position: absolute;
  top: -10px;
  width: 10px;
  height: 10px;
  opacity: 0;
  animation: confetti-fall 5s linear infinite;
}

@keyframes confetti-fall {
  0% {
    top: -10%;
    opacity: 1;
    transform: translateX(0) rotateZ(0deg);
  }
  100% {
    top: 110%;
    opacity: 0.7;
    transform: translateX(100px) rotateZ(720deg);
  }
}

/* Balloons */
.balloons-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.balloon {
  position: absolute;
  bottom: -150px;
  width: 50px;
  height: 70px;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  animation: balloon-float 6s ease-in-out infinite;
}

.balloon::before {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 15px solid rgba(0, 0, 0, 0.2);
}

.balloon-string {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100px;
  background: rgba(255, 255, 255, 0.3);
}

@keyframes balloon-float {
  0%, 100% {
    bottom: -150px;
    transform: translateX(0) rotate(0deg);
  }
  50% {
    bottom: 110%;
    transform: translateX(20px) rotate(10deg);
  }
}

/* Ribbons */
.ribbons-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.ribbon {
  position: absolute;
  top: -100px;
  width: 30px;
  height: 200px;
  opacity: 0.8;
  animation: ribbon-fall 4s ease-in-out infinite;
  transform-origin: top center;
}

@keyframes ribbon-fall {
  0% {
    top: -100px;
    transform: rotateZ(0deg);
  }
  100% {
    top: 110%;
    transform: rotateZ(720deg);
  }
}

/* Stars */
.stars-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.star {
  position: absolute;
  font-size: 24px;
  animation: star-twinkle 3s ease-in-out infinite;
}

@keyframes star-twinkle {
  0%, 100% {
    opacity: 0;
    transform: scale(0.5) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1.5) rotate(180deg);
  }
}

/* Fireworks */
.fireworks-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.firework {
  position: absolute;
  width: 4px;
  height: 4px;
  animation: firework-explode 2s ease-out infinite;
}

@keyframes firework-explode {
  0% {
    box-shadow: 
      0 0 0 0 #ff6b6b, 0 0 0 0 #4ecdc4, 0 0 0 0 #f9ca24,
      0 0 0 0 #6c5ce7, 0 0 0 0 #fd79a8, 0 0 0 0 #45b7d1;
    opacity: 1;
  }
  100% {
    box-shadow: 
      0 -100px 0 10px transparent, 70px -70px 0 10px transparent, 100px 0 0 10px transparent,
      70px 70px 0 10px transparent, 0 100px 0 10px transparent, -70px 70px 0 10px transparent;
    opacity: 0;
  }
}

/* Celebration Card */
.celebration-card {
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 30px;
  padding: 50px 40px;
  max-width: 600px;
  width: 90%;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
  text-align: center;
  animation: card-appear 0.6s ease-out;
  z-index: 10;
}

@keyframes card-appear {
  0% {
    transform: scale(0.8) translateY(50px);
    opacity: 0;
  }
  100% {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

/* Success Icon */
.success-icon {
  margin: 0 auto 30px;
  width: 100px;
  height: 100px;
}

.checkmark {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: block;
  stroke-width: 3;
  stroke: #fff;
  stroke-miterlimit: 10;
  box-shadow: inset 0 0 0 #7ac142;
  animation: checkmark-fill 0.4s ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both;
}

.checkmark-circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 3;
  stroke-miterlimit: 10;
  stroke: #7ac142;
  fill: none;
  animation: checkmark-stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.checkmark-check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: checkmark-stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
}

@keyframes checkmark-stroke {
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes checkmark-fill {
  100% {
    box-shadow: inset 0 0 0 50px #7ac142;
  }
}

@keyframes scale {
  0%, 100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}

/* Text Styles */
.celebration-title {
  font-size: 42px;
  font-weight: 800;
  color: #fff;
  margin-bottom: 20px;
  animation: title-bounce 0.6s ease-out 0.3s both;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
}

@keyframes title-bounce {
  0% {
    transform: translateY(-30px);
    opacity: 0;
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.celebration-message {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 30px;
  line-height: 1.6;
  animation: fade-in-up 0.6s ease-out 0.5s both;
}

@keyframes fade-in-up {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Details */
.celebration-details {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 25px;
  margin-bottom: 30px;
  backdrop-filter: blur(10px);
  animation: fade-in-up 0.6s ease-out 0.7s both;
}

.detail-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 15px;
  color: #fff;
  font-size: 16px;
}

.detail-item:last-child {
  margin-bottom: 0;
}

.detail-item .icon {
  font-size: 24px;
  animation: icon-bounce 1s ease-in-out infinite;
}

@keyframes icon-bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

/* Button */
.celebration-button {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: #fff;
  border: none;
  padding: 18px 50px;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(245, 87, 108, 0.4);
  display: inline-flex;
  align-items: center;
  gap: 10px;
  animation: fade-in-up 0.6s ease-out 0.9s both;
}

.celebration-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(245, 87, 108, 0.6);
}

.celebration-button:active {
  transform: translateY(0);
}

.button-arrow {
  transition: transform 0.3s ease;
  font-size: 24px;
}

.celebration-button:hover .button-arrow {
  transform: translateX(5px);
}

.celebration-footer {
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  animation: fade-in-up 0.6s ease-out 1.1s both;
}

/* Responsive */
@media (max-width: 768px) {
  .celebration-card {
    padding: 40px 25px;
  }

  .celebration-title {
    font-size: 32px;
  }

  .celebration-message {
    font-size: 16px;
  }

  .detail-item {
    font-size: 14px;
  }

  .celebration-button {
    padding: 15px 40px;
    font-size: 16px;
  }
}
</style>