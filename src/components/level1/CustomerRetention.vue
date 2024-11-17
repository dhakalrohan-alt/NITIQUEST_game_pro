<template>
  <div class="level-container">
    <h2>Customer Retention</h2>
    <p>Select a customer retention strategy to build loyalty and increase repeat purchases.</p>

    <!-- Budget Display -->
    <p class="budget-display">Remaining Budget: ${{ budget }}</p>

    <!-- Retention Strategy Options -->
    <div class="options-container">
      <button @click="chooseRetentionStrategy('loyaltyProgram')" class="option-btn">
        Loyalty Program - $2000
      </button>
      <button @click="chooseRetentionStrategy('customerFeedback')" class="option-btn">
        Customer Feedback System - $1000
      </button>
      <button @click="chooseRetentionStrategy('personalizedOffers')" class="option-btn">
        Personalized Offers - $3000
      </button>
    </div>

    <!-- Display insights after strategy selection -->
    <div v-if="strategyChosen" class="insight-card">
      <h3>Selected Strategy Insights</h3>
      <p>{{ strategyInsights }}</p>
      <button @click="nextLevel" class="next-btn">Proceed to Marketing Budget Allocation</button>
    </div>

    <!-- Progress Bar -->
    <div class="progress-bar">
      <div class="progress" :style="{ width: '60%' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      budget: 7000, // Adjusted budget for the level
      strategyChosen: false,
      strategyInsights: '',
    };
  },
  methods: {
    chooseRetentionStrategy(strategy) {
      let cost, insights;
      if (strategy === 'loyaltyProgram') {
        cost = 2000;
        insights =
          "A loyalty program rewards repeat customers, improving retention and creating long-term customer relationships.";
      } else if (strategy === 'customerFeedback') {
        cost = 1000;
        insights =
          "A feedback system enables you to collect customer opinions and improve your offerings, leading to higher satisfaction.";
      } else if (strategy === 'personalizedOffers') {
        cost = 3000;
        insights =
          "Personalized offers encourage customers to return by tailoring discounts and promotions to their interests.";
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
      this.$router.push('/marketing-budget-allocation');
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
