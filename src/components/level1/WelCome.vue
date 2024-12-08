<template>
    <div class="welcome-container">
      <h1>Welcome to NitiQuest</h1>
      <p class="sub-heading">Embark on your journey to build a successful business!</p>
  
      <div class="input-container">
        <label for="playerName">Enter Your Name:</label>
        <input
          id="playerName"
          v-model="playerName"
          type="text"
          placeholder="Your Name"
        />
  
        <label for="businessName">Enter Your Business Name:</label>
        <input
          id="businessName"
          v-model="businessName"
          type="text"
          placeholder="Business Name"
        />
      </div>
  
      <button @click="startGame" class="start-btn">Start Your Journey</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        playerName: "",
        businessName: "",
      };
    },
    methods: {
      startGame() {
        if (this.playerName.trim() === "" || this.businessName.trim() === "") {
          alert("Please enter both your name and your business name.");
          return;
        }
  
        // Store player name and business name in localStorage
        localStorage.setItem("playerName", this.playerName);
        localStorage.setItem("businessName", this.businessName);
  
        // Navigate to Product Selection
        this.$router.push("/product-selection");
      },
    },
  };
  </script>
  
  <style scoped>
  /* Container and Layout */
  .welcome-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #e6f0ff, #b3d9ff);
    text-align: center;
    padding: 20px;
  }
  
  /* Title and Sub-heading */
  h1 {
    font-size: 3rem;
    font-weight: bold;
    color: #2e3d49;
    margin-bottom: 1rem;
  }
  
  .sub-heading {
    font-size: 1.2rem;
    color: #4a6572;
    margin-bottom: 2rem;
  }
  
  /* Input Fields */
  .input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
    width: 100%;
    max-width: 400px;
  }
  
  label {
    font-size: 1rem;
    font-weight: bold;
    color: #2e3d49;
    align-self: flex-start;
  }
  
  input {
    width: 100%;
    padding: 12px;
    border: 2px solid #b3d9ff;
    border-radius: 8px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s;
  }
  
  input:focus {
    border-color: #3774e6;
  }
  
  /* Button */
  .start-btn {
    padding: 12px 25px;
    font-size: 1.2rem;
    background: linear-gradient(135deg, #3774e6, #3b5d50);
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .start-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(55, 116, 230, 0.6);
  }
  </style>
  