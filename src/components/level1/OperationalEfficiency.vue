<template>
    <div class="level-container">
      <h2>Operational Efficiency</h2>
      <p>Choose a strategy to enhance operational efficiency, improve productivity, and reduce costs.</p>
  
      <!-- Budget Display -->
      <p class="budget-display">Remaining Budget: ${{ budget }}</p>
  
      <!-- Efficiency Improvement Options -->
      <div class="options-container">
        <button @click="improveEfficiency('leanProcesses')" class="option-btn">
          Implement Lean Processes - $1500
        </button>
        <button @click="improveEfficiency('automation')" class="option-btn">
          Invest in Automation - $3000
        </button>
        <button @click="improveEfficiency('employeeTraining')" class="option-btn">
          Employee Training Program - $2000
        </button>
      </div>
  
      <!-- Display insights after efficiency improvement selection -->
      <div v-if="efficiencyChosen" class="insight-card">
        <h3>Improvement Outcome</h3>
        <p>{{ efficiencyOutcome }}</p>
        <button @click="nextLevel" class="next-btn">Proceed to Risk Management</button>
      </div>
  
      <!-- Progress Bar -->
      <div class="progress-bar">
        <div class="progress" :style="{ width: '90%' }"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        budget: 2500, // Adjusted budget for operational improvements
        efficiencyChosen: false,
        efficiencyOutcome: '',
      };
    },
    methods: {
      improveEfficiency(strategy) {
        let cost, outcome;
        if (strategy === 'leanProcesses') {
          cost = 1500;
          outcome = "Lean Processes: Minimizes waste and maximizes value, improving speed and reducing unnecessary costs.";
        } else if (strategy === 'automation') {
          cost = 3000;
          outcome = "Automation: Reduces manual tasks, enhancing productivity and reducing errors, though it requires higher upfront costs.";
        } else if (strategy === 'employeeTraining') {
          cost = 2000;
          outcome = "Employee Training Program: Enhances employee skills and adaptability, leading to higher efficiency and morale.";
        }
  
        if (this.budget >= cost) {
          this.budget -= cost;
          this.efficiencyOutcome = outcome;
          this.efficiencyChosen = true;
        } else {
          alert("Insufficient budget for this improvement.");
        }
      },
      nextLevel() {
        this.$router.push('/risk-management');
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
  