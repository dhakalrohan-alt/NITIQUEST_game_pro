<template>
    <div class="level-container">
      <h2>Risk Management</h2>
      <p>Choose a risk management strategy to prepare for unexpected challenges and safeguard your business stability.</p>
  
      <!-- Budget Display -->
      <p class="budget-display">Remaining Budget: ${{ budget }}</p>
  
      <!-- Risk Management Options -->
      <div class="options-container">
        <button @click="manageRisk('emergencyFund')" class="option-btn">
          Establish an Emergency Fund - $2000
        </button>
        <button @click="manageRisk('diversifiedSuppliers')" class="option-btn">
          Diversify Suppliers - $1500
        </button>
        <button @click="manageRisk('insurancePolicy')" class="option-btn">
          Purchase Business Insurance - $3000
        </button>
      </div>
  
      <!-- Display insights after risk management selection -->
      <div v-if="riskChosen" class="insight-card">
        <h3>Risk Management Outcome</h3>
        <p>{{ riskOutcome }}</p>
        <button @click="completeLevel" class="next-btn">Complete Level</button>
      </div>
  
      <!-- Progress Bar -->
      <div class="progress-bar">
        <div class="progress" :style="{ width: '100%' }"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        budget: 2000, // Adjusted budget for the level
        riskChosen: false,
        riskOutcome: '',
      };
    },
    methods: {
      manageRisk(option) {
        let cost, outcome;
        if (option === 'emergencyFund') {
          cost = 2000;
          outcome = "Emergency Fund: Provides financial cushion during unexpected events, ensuring business continuity.";
        } else if (option === 'diversifiedSuppliers') {
          cost = 1500;
          outcome = "Diversified Suppliers: Reduces dependency on a single supplier, mitigating risks of supply chain disruptions.";
        } else if (option === 'insurancePolicy') {
          cost = 3000;
          outcome = "Business Insurance: Offers protection against unforeseen losses, safeguarding business assets and stability.";
        }
  
        if (this.budget >= cost) {
          this.budget -= cost;
          this.riskOutcome = outcome;
          this.riskChosen = true;
        } else {
          alert("Insufficient budget for this risk management strategy.");
        }
      },
      completeLevel() {
        alert("Congratulations! You have successfully completed Level 1: High-Demand, Low-Margin Product Management.");
        this.$router.push('/dashboard'); // Redirect to a main dashboard or next section
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
  