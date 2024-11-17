<template>
    <div class="level-container">
      <h2>Pricing Strategy</h2>
      <p>Choose a pricing strategy that balances sales volume and profit margins.</p>
  
      <!-- Budget Display -->
      <p class="budget-display">Remaining Budget: ${{ budget }}</p>
  
      <!-- Pricing Strategy Options -->
      <div class="options-container">
        <button @click="choosePricingStrategy('costPlus')" class="option-btn">
          Cost-Plus Pricing
        </button>
        <button @click="choosePricingStrategy('competitive')" class="option-btn">
          Competitive Pricing
        </button>
        <button @click="choosePricingStrategy('penetration')" class="option-btn">
          Penetration Pricing
        </button>
      </div>
  
      <!-- Display insights after strategy is chosen -->
      <div v-if="strategyChosen" class="insight-card">
        <h3>Selected Strategy Insights</h3>
        <p>{{ strategyInsights }}</p>
        <button @click="nextLevel" class="next-btn">Proceed to Sales Volume Goals</button>
      </div>
  
      <!-- Progress Bar -->
      <div class="progress-bar">
        <div class="progress" :style="{ width: '40%' }"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        budget: 10000, // Adjusted budget for the level
        strategyChosen: false,
        strategyInsights: '',
      };
    },
    methods: {
      choosePricingStrategy(strategy) {
        let insights;
        if (strategy === 'costPlus') {
          insights =
            "Cost-Plus Pricing sets a markup over production costs, ensuring a steady profit margin. However, it may not be competitive in price-sensitive markets.";
        } else if (strategy === 'competitive') {
          insights =
            "Competitive Pricing matches competitors' prices, balancing profit and market share. It helps attract customers but may yield lower margins.";
        } else if (strategy === 'penetration') {
          insights =
            "Penetration Pricing offers a low initial price to attract customers and increase market share. This strategy often results in higher sales volume but lower short-term profits.";
        }
  
        this.strategyInsights = insights;
        this.strategyChosen = true;
      },
      nextLevel() {
        this.$router.push('/sales-volume-goals');
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
  