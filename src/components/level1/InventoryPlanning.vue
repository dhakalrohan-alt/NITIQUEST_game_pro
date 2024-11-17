<template>
    <div class="level-container">
      <h2>Inventory Planning</h2>
      <p>Choose an inventory strategy to balance stock levels with cost efficiency.</p>
  
      <!-- Budget Display -->
      <p class="budget-display">Remaining Budget: ${{ budget }}</p>
  
      <!-- Inventory Strategy Options -->
      <div class="options-container">
        <button @click="chooseInventoryStrategy('justInTime')" class="option-btn">
          Just-in-Time (JIT) - $2000
        </button>
        <button @click="chooseInventoryStrategy('safetyStock')" class="option-btn">
          Safety Stock - $5000
        </button>
        <button @click="chooseInventoryStrategy('bulkStock')" class="option-btn">
          Bulk Stock - $8000
        </button>
      </div>
  
      <!-- Display insights after strategy is chosen -->
      <div v-if="strategyChosen" class="insight-card">
        <h3>Selected Strategy Insights</h3>
        <p>{{ strategyInsights }}</p>
        <button @click="nextLevel" class="next-btn">Proceed to Pricing Strategy</button>
      </div>
  
      <!-- Progress Bar -->
      <div class="progress-bar">
        <div class="progress" :style="{ width: '30%' }"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        budget: 12000, // Adjusted budget for the level
        strategyChosen: false,
        strategyInsights: '',
      };
    },
    methods: {
      chooseInventoryStrategy(strategy) {
        let cost, insights;
        if (strategy === 'justInTime') {
          cost = 2000;
          insights =
            "JIT minimizes holding costs by ordering stock only when needed. However, it risks delays if suppliers face issues.";
        } else if (strategy === 'safetyStock') {
          cost = 5000;
          insights =
            "Safety Stock keeps a reserve to avoid stockouts during demand spikes, but ties up some capital in inventory.";
        } else if (strategy === 'bulkStock') {
          cost = 8000;
          insights =
            "Bulk Stocking reduces per-unit costs and ensures availability, but requires higher upfront investment and storage costs.";
        }
  
        if (this.budget >= cost) {
          this.budget -= cost;
          this.strategyInsights = insights;
          this.strategyChosen = true;
        } else {
          alert("Insufficient budget for this strategy.");
        }
      },
      nextLevel() {
        this.$router.push('/pricing-strategy');
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
  