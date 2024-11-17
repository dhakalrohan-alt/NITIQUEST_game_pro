<template>
  <div class="introduction-container">
   
    <div class="story-text glass-card">
      <div  >
      <img src="@/assets/video-game.gif" alt="Game Icon 2" class="icon2" />
    </div>
      <h1 v-if="showTitle" class="fade-in">{{ title }}</h1>
      <p v-if="showNarrative" class="fade-in delay-1">{{ narrative }}</p>
      <p v-if="showGoal" class="fade-in delay-2">{{ goal }}</p>
      <p v-if="showChallenge" class="fade-in delay-3">{{ challenge }}</p>
    </div>
    <canvas ref="backgroundCanvas" class="absolute top-0 left-0 w-full h-full z-0"></canvas>
    <button @click="goToNextPhase" class="modern-btn z-10">Continue to Product Selection</button>
  </div>
</template>

<script>
import * as THREE from 'three';

export default {
  data() {
    return {
      title: "Level 1: Initial Business Setup",
      narrative: `You are about to start your own small business. With a small amount of capital, you need to plan your business model, set clear goals, and make early decisions that will shape your future.`,
      goal: "Goal: Build a sustainable business by planning an effective launch strategy.",
      challenge: "Challenge: You have limited resources. Allocate your budget across product development, marketing, and staffing carefully, as these decisions will affect your company's trajectory.",
      showTitle: false,
      showNarrative: false,
      showGoal: false,
      showChallenge: false
    };
  },
  mounted() {
    this.initBackground();
    this.animateIntro();
  },
  methods: {
    goToNextPhase() {
    this.$router.push('/product-selection'); // Navigates to the product-selection page
  },
    animateIntro() {
      setTimeout(() => { this.showTitle = true; }, 500);
      setTimeout(() => { this.showNarrative = true; }, 1500);
      setTimeout(() => { this.showGoal = true; }, 2500);
      setTimeout(() => { this.showChallenge = true; }, 3500);
    },
    initBackground() {
      const canvas = this.$refs.backgroundCanvas;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);

      const particleCount = 700;
      const particles = new THREE.BufferGeometry();
      const positions = [];
      for (let i = 0; i < particleCount; i++) {
        positions.push((Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15);
      }
      particles.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

      const particleMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.05,
        transparent: true,
        opacity: 0.6,
        depthWrite: false,
      });

      const particleSystem = new THREE.Points(particles, particleMaterial);
      scene.add(particleSystem);

      const animate = () => {
        requestAnimationFrame(animate);
        particleSystem.rotation.y += 0.0005;
        renderer.render(scene, camera);
      };
      animate();

      window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      });
    }
  }
};
</script>

<style scoped>
/* Importing Game Font */
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
.icon2 {
  width: 50px; /* Adjust size as needed */
  height: auto;
  margin-bottom: 10px;
  border-radius: 50px; /* Space between icon and text */
}
/* Container and Background Animation */
.introduction-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #3b5d50, #3774e6, #3b5d50, #000296);
  background-size: 300% 300%;
  animation: diagonalShift 12s linear infinite;
  border-radius: 20px;
}

@keyframes diagonalShift {
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 100%; }
}

/* Glassmorphic Story Card */
.glass-card {
  z-index: 2;
  padding: 30px;
  border-radius: 15px;
  max-width: 700px;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  color: #f0f0f0;
  font-size: 1.1rem;
  margin: 15px;
}

/* Sequential Fade-in Animation */
.fade-in {
  opacity: 0;
  animation: fadeInEffect 1s forwards ease;
}

.fade-in.delay-1 {
  animation-delay: 1s;
}

.fade-in.delay-2 {
  animation-delay: 2s;
}

.fade-in.delay-3 {
  animation-delay: 3s;
}

@keyframes fadeInEffect {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* Modern Button with Gradient and Glow Effect */
.modern-btn {
  margin-top: 20px;
  padding: 12px 30px;
  background: linear-gradient(135deg, #3774e6, #3b5d50);
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}

.modern-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(55, 116, 230, 0.6);
}

/* Particle Canvas */
canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

/* Typography */
h1 {
  font-size: 2rem;
  color: #f8f9fa;
  margin-bottom: 1rem;
  
  font-family: 'Press Start 2P', sans-serif;
  color: #f0f0f0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8), 0px 0px 10px rgba(55, 116, 230, 0.6);
  letter-spacing: 1px;
  

}

p {
  font-size: 0.6rem;
  margin-bottom: 0.8rem;
  line-height: 1.5;
  font-family: 'Press Start 2P', sans-serif;
}
</style>
