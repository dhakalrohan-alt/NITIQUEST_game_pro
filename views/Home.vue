<template>
  <section class="h-screen flex items-center justify-center animated-bg relative">
    <!-- Background Floating Boxes with Text and Icons -->
    <div class="floating-box box1">
      <img src="@/assets/icon3.png " alt="Game Icon 1" class="icon" />
      <p class="box-text">Discover new worlds!</p>
    </div>
    <div class="floating-box box2">
      <img src="@/assets/character.gif" alt="Game Icon 2" class="icon2" />
      <p class="box-text">Master your skills!</p>
    </div>
   

    <!-- Welcome Section with Background Box -->
    <div class="bg-box glass-card">
  
      <h1 class="game-title mb-4">Welcome to NitiQuest</h1>
      <p class="game-subtitle">Let's start your management learning journey!</p>
      <button @click="startGame" class="action-button">
        Start Now
      </button>
    </div>

    <!-- Modal Popup for Login -->
    <div v-if="isLoginModalVisible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-box login-card">
        <h2 class="login-title">Login</h2>
        <form @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label for="username" class="form-label">Username</label>
            <input type="text" v-model="username" id="username" class="input-field" required>
          </div>
          <div>
            <label for="password" class="form-label">Password</label>
            <input type="password" v-model="password" id="password" class="input-field" required>
          </div>
          <div class="flex justify-center">
            <button type="submit" class="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isLoginModalVisible: false,
      username: '',
      password: '',
    };
  },
  methods: {
    showLoginModal() {
      this.isLoginModalVisible = true;
    },
    startGame() {
      this.showLoginModal();
    },
    handleLogin() {
      if (this.username === 'admin' && this.password === 'password') {
        localStorage.setItem('isLoggedIn', 'true');
        this.isLoginModalVisible = false;
        this.$router.push('/game-level-1');
      } else {
        alert('Invalid credentials. Please try again.');
      }
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.animated-bg {
  background: linear-gradient(135deg, #3b5d50, #000296, #3774e6, #3b5d50);
  background-size: 300% 300%;
  animation: backgroundAnimate 10s ease infinite;
  overflow: hidden; /* Ensure floating boxes stay within view */
}

@keyframes backgroundAnimate {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 100%;
  }
}

/* Floating Background Boxes */
.floating-box {
  position: absolute;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  opacity: 0.8;
  animation: float 8s ease-in-out infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
}

.box1 {
  width: 200px;
  height: 200px;
  top: 3%;
  left: 7%;
  animation-duration: 6s;
}

.box2 {
  width: 150px;
  height: 150px;
  top: 60%;
  left: 75%;
  animation-duration: 9s;
}

.box3 {
  width: 100px;
  height: 100px;
  top: 80%;
  left: 20%;
  animation-duration: 7s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-20px) translateX(15px);
  }
}

/* Icons */
.icon {
  width: 50px; /* Adjust size as needed */
  height: auto;
  margin-bottom: 10px; /* Space between icon and text */
}
.icon2 {
  width: 50px; /* Adjust size as needed */
  height: auto;
  margin-bottom: 10px; /* Space between icon and text */
}
/* Box Text */
.box-text {
  font-family: 'Press Start 2P', sans-serif;
  color: #ffffff;
  font-size: 0.9rem;
}

/* Background Box Style */
.bg-box {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(15px);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 600px;
}

/* Titles and Text */
.game-title {
  font-family: 'Press Start 2P', sans-serif;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8), 0px 0px 10px rgba(55, 116, 230, 0.6);
  font-size: 2rem;
}

.game-subtitle {
  color: #e0e0e0;
  font-family: 'Press Start 2P', sans-serif;
  font-size: 1.1rem;
  margin-bottom: 20px;
}

/* Buttons */
.action-button, .submit-button {
  background: linear-gradient(135deg, #3774e6, #3b5d50);
  color: #ffffff;
  font-family: 'Press Start 2P', sans-serif;
  font-size: 1rem;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, box-shadow 0.3s;
  cursor: pointer;
}

.action-button:hover, .submit-button:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(55, 116, 230, 0.5);
}

/* Login Modal */
.login-card {
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 400px;
}

/* Form Labels and Inputs */
.form-label {
  font-family: 'Press Start 2P', sans-serif;
  color: #3b5d50;
  font-size: 0.9rem;
}

.input-field {
  width: 100%;
  padding: 0.8rem;
  font-family: 'Press Start 2P', sans-serif;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>
