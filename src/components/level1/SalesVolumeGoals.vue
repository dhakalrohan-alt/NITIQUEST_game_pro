<template>
    <div class="level-container">
      <h2>Sales Volume Goals</h2>
      <p>Set a sales volume goal that aligns with your pricing strategy and profit objectives.</p>
  
      <!-- Budget Display -->
      <p class="budget-display">Remaining Budget: ${{ budget }}</p>
  
      <!-- Sales Goal Options -->
      <div class="options-container">
        <button @click="setSalesGoal(1000)" class="option-btn">
          Moderate Sales Goal (1000 units)
        </button>
        <button @click="setSalesGoal(5000)" class="option-btn">
          Aggressive Sales Goal (5000 units)
        </button>
        <button @click="setSalesGoal(10000)" class="option-btn">
          High Sales Goal (10,000 units)
        </button>
      </div>
  
      <!-- Display insights after goal selection -->
      <div v-if="goalChosen" class="insight-card">
        <h3>Goal Insights</h3>
        <p>{{ goalInsights }}</p>
        <button @click="nextLevel" class="next-btn">Proceed to Customer Retention</button>
      </div>
  
      <!-- Progress Bar -->
      <div class="progress-bar">
        <div class="progress" :style="{ width: '50%' }"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        budget: 8000, // Adjusted budget for the level
        goalChosen: false,
        goalInsights: '',
      };
    },
    methods: {
      setSalesGoal(goal) {
        let insights;
        if (goal === 1000) {
          insights =
            "Setting a moderate goal helps maintain inventory and budget balance, but may limit market penetration.";
        } else if (goal === 5000) {
          insights =
            "An aggressive goal increases market presence, but requires close monitoring of inventory and customer satisfaction.";
        } else if (goal === 10000) {
          insights =
            "A high goal maximizes sales potential but risks stockouts and customer dissatisfaction if demand exceeds inventory.";
        }
  
        this.goalInsights = insights;
        this.goalChosen = true;
      },
      nextLevel() {
        this.$router.push('/customer-retention');
      },
    },
  };
  </script>
  
  <style scoped>
  .level-container {
    text-align: center;
    padding: 30px;
    max-width: 600px;
    margin: auto;
    background: #f0f4f8;
    border-radius: 10px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    color: #3774e6;
    font-size: 2rem;
  }
  
  .budget-display {
    font-size: 1.2rem;
    color: #3b5d50;
    margin: 20px 0;
    font-weight: bold;
  }
  
  .options-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 20px 0;
  }
  
  .option-btn {
    padding: 12px 20px;
    font-size: 1rem;
    color: #fff;
    background: #3774e6;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s;
  }
  
  .option-btn:hover {
    transform: scale(1.05);
  }
  
  .insight-card {
    margin-top: 20px;
    padding: 15px;
    background: #3774e6;
    color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .next-btn {
    margin-top: 15px;
    padding: 10px 20px;
    font-size: 1rem;
    background: #3b5d50;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s;
  }
  
  .progress-bar {
    height: 10px;
    background: #e0e0e0;
    border-radius: 8px;
    margin-top: 20px;
    overflow: hidden;
  }
  
  .progress {
    height: 100%;
    background: #3774e6;
  }
  </style>
  