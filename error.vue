<template>
  <div class="error-container">
    <div class="stars"></div>
    <div class="twinkling"></div>

    <div class="error-content">
      <div class="astronaut">
        <div class="helmet"></div>
        <div class="body"></div>
      </div>

      <h1 class="error-code">{{ error.statusCode }}</h1>
      <p class="error-message">{{ error.statusMessage }}</p>
      <p class="error-details">{{ error.message }}</p>

      <button @click="handleError" class="home-btn">
        <span>Return to Safety</span>
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps(["error"]);

const handleError = () => {
  clearError();
  window.location.replace("/");
};
</script>

<style scoped>
/* Remove all default margins and padding */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.error-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  /* Ensure no white borders */
  border: none;
  outline: none;
}

/* Ensure html and body elements also have no margin */
:deep(html), 
:deep(body) {
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%;
}

/* Fixed stars background */
.stars {
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  background-image: 
    radial-gradient(2px 2px at 20px 30px, #eee, transparent),
    radial-gradient(2px 2px at 40px 70px, #fff, transparent),
    radial-gradient(1px 1px at 90px 40px, #fff, transparent),
    radial-gradient(2px 2px at 130px 80px, #ddd, transparent),
    radial-gradient(1px 1px at 160px 30px, #fff, transparent),
    radial-gradient(2px 2px at 200px 60px, #eee, transparent),
    radial-gradient(1px 1px at 250px 90px, #fff, transparent),
    radial-gradient(2px 2px at 280px 20px, #ddd, transparent),
    radial-gradient(1px 1px at 320px 70px, #fff, transparent),
    radial-gradient(2px 2px at 350px 40px, #eee, transparent),
    radial-gradient(1px 1px at 380px 80px, #fff, transparent),
    radial-gradient(2px 2px at 420px 30px, #ddd, transparent),
    radial-gradient(1px 1px at 460px 60px, #fff, transparent),
    radial-gradient(2px 2px at 500px 90px, #eee, transparent),
    radial-gradient(1px 1px at 540px 20px, #fff, transparent),
    radial-gradient(2px 2px at 580px 70px, #ddd, transparent);
  background-repeat: repeat;
  background-size: 600px 600px;
  z-index: 0;
  animation: twinkle 100s linear infinite;
}

.twinkling {
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  background-image: 
    radial-gradient(1px 1px at 50px 160px, #fff, transparent),
    radial-gradient(1px 1px at 90px 120px, #eee, transparent),
    radial-gradient(1px 1px at 140px 200px, #fff, transparent),
    radial-gradient(1px 1px at 190px 160px, #ddd, transparent),
    radial-gradient(1px 1px at 230px 180px, #fff, transparent),
    radial-gradient(1px 1px at 270px 220px, #eee, transparent),
    radial-gradient(1px 1px at 320px 150px, #fff, transparent),
    radial-gradient(1px 1px at 360px 190px, #ddd, transparent),
    radial-gradient(1px 1px at 410px 170px, #fff, transparent),
    radial-gradient(1px 1px at 450px 210px, #eee, transparent),
    radial-gradient(1px 1px at 500px 180px, #fff, transparent),
    radial-gradient(1px 1px at 540px 140px, #ddd, transparent),
    radial-gradient(1px 1px at 590px 200px, #fff, transparent);
  background-repeat: repeat;
  background-size: 600px 600px;
  z-index: 1;
  animation: twinkle 70s linear infinite;
  opacity: 0.7;
}

@keyframes twinkle {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 600px 600px;
  }
}

.error-content {
  text-align: center;
  position: relative;
  z-index: 2;
  padding: 2rem;
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  max-width: 500px;
  width: 90%;
  animation: fadeIn 0.8s ease-out;
  margin: 0; /* Ensure no margin */
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.astronaut {
  position: relative;
  width: 120px;
  height: 150px;
  margin: 0 auto 2rem;
  animation: float 6s ease-in-out infinite;
}

.helmet,
.body {
  position: absolute;
  background: white;
  border-radius: 50%;
}

.helmet {
  width: 80px;
  height: 80px;
  top: 0;
  left: 20px;
  box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.1);
}

.helmet:after {
  content: "";
  position: absolute;
  width: 60px;
  height: 40px;
  background: #0ea5e9;
  border-radius: 50%;
  top: 20px;
  left: 10px;
}

.body {
  width: 70px;
  height: 80px;
  top: 70px;
  left: 25px;
  border-radius: 40% 40% 20% 20%;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

.error-code {
  font-size: 8rem;
  font-weight: 800;
  margin: 0;
  background: linear-gradient(to right, #f43f5e, #e11d48);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
}

.error-message {
  font-size: 1.5rem;
  margin: 1rem 0;
  color: #f8fafc;
  font-weight: 500;
}

.error-details {
  color: #cbd5e1;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.home-btn {
  background: linear-gradient(to right, #10b981, #059669);
  border: none;
  border-radius: 50px;
  padding: 1rem 2rem;
  color: white;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
}

.home-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 7px 20px rgba(16, 185, 129, 0.6);
}

.home-btn:active {
  transform: translateY(0);
}

@media (max-width: 640px) {
  .error-code {
    font-size: 5rem;
  }

  .error-message {
    font-size: 1.2rem;
  }

  .astronaut {
    width: 80px;
    height: 100px;
  }

  .helmet {
    width: 60px;
    height: 60px;
    left: 10px;
  }

  .body {
    width: 50px;
    height: 60px;
    top: 50px;
    left: 15px;
  }
}
</style>