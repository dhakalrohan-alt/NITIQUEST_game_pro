<template>
  <div class="introduction-container">
    <!-- Narrator Section -->
    <div class="narrator-container">
      <!-- Using dynamic binding for image -->
      <img :src="narratorAvatar" alt="Narrator" class="narrator-avatar" />
      <div class="narrator-dialogue">
        <p>{{ currentDialogue }}</p>
        <button v-if="!isLastDialogue" @click="nextDialogue" class="dialogue-btn">Next</button>
        <button v-if="isLastDialogue" @click="goToNextPhase" class="dialogue-btn">Start Your Journey</button>
      </div>
    </div>

    <!-- Background Canvas -->
    <canvas ref="backgroundCanvas" class="absolute top-0 left-0 w-full h-full z-0"></canvas>
  </div>
</template>

<script>
import * as THREE from 'three';

export default {
  data() {
    return {
      narratorAvatar: require('@/assets/narrator.png'), // Path to the narrator avatar
      dialogues: [
        "Welcome, aspiring entrepreneur! I'm here to guide you through your journey.",
        "First, you'll need to plan your business carefully to make the most of your limited resources.",
        "Remember: Success depends on balancing product development, marketing, and staffing.",
        "Ready to start your business adventure? Let's go!",
      ],
      currentDialogueIndex: 0,
      isLastDialogue: false,
      currentDialogue: "",
    };
  },
  mounted() {
    this.initBackground();
    this.typeDialogue();
  },
  methods: {
    typeDialogue() {
      const dialogue = this.dialogues[this.currentDialogueIndex];
      this.currentDialogue = ""; // Clear current dialogue
      let index = 0;
      const typingSpeed = 50; // Adjust typing speed
      const typeInterval = setInterval(() => {
        this.currentDialogue += dialogue[index];
        index++;
        if (index >= dialogue.length) {
          clearInterval(typeInterval);
        }
      }, typingSpeed);
    },
    nextDialogue() {
      if (this.currentDialogueIndex < this.dialogues.length - 1) {
        this.currentDialogueIndex++;
        this.isLastDialogue = this.currentDialogueIndex === this.dialogues.length - 1;
        this.typeDialogue();
      }
    },
    goToNextPhase() {
      this.$router.push('/wel-come'); // Make sure '/product-selection' is correctly set in your router
    },
    initBackground() {
      const canvas = this.$refs.backgroundCanvas;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);

      const particleCount = 500;
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
        particleSystem.rotation.y += 0.001;
        renderer.render(scene, camera);
      };
      animate();

      window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      });
    },
  },
};
</script>

<style scoped>
/* Narrator Section */
.narrator-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Centering the container */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  z-index: 2;
  padding: 20px; /* Add some padding for spacing */
}

.narrator-avatar {
  width: 150px;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  background-color: white;
}

.narrator-dialogue {
  max-width: 500px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  color: #333;
  position: relative;
  text-align: center;
}

.narrator-dialogue::before {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.8);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

/* Dialogue Buttons */
.dialogue-btn {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background: linear-gradient(135deg, #3774e6, #3b5d50);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.3s;
}

.dialogue-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(55, 116, 230, 0.5);
}

/* Background Canvas */
canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%; /* Ensure canvas fills the screen */
}

/* Container and Background Animation */
.introduction-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Allow it to take at least the full viewport height */
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
</style>
