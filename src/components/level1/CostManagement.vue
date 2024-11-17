<template>
  <div class="level-container">
    <!-- Reward Section (same as Market Research) -->
    <div class="reward-section">
      <h3>Your Rewards</h3>
      <div class="reward-points">
        <img src="path/to/reward-icon.svg" alt="Reward Icon" />
        <p>Points: {{ rewardPoints }}</p>
      </div>
    </div>

    <!-- Main Content Section -->
    <h2>Cost Management & Optimization</h2>
    <p>Manage and optimize costs for sustainable profit margins.</p>

    <!-- Budget Display -->
    <p class="budget-display">Remaining Budget: ₹{{ budget }}</p>

    <!-- Content Based on Market Research Selection -->
    <div v-if="selectedResearch === 'basic'">
      <h3>Basic Cost Optimization</h3>
      <p>Focus on reducing unnecessary costs with basic methods to improve your margins.</p>
    </div>
    <div v-if="selectedResearch === 'detailed'">
      <h3>Intermediate Cost Optimization</h3>
      <p>Implement mid-level strategies to reduce overhead costs and increase efficiency.</p>
    </div>
    <div v-if="selectedResearch === 'in-depth'">
      <h3>Advanced Cost Optimization</h3>
      <p>Focus on long-term cost-saving strategies, including advanced technology integration and supplier negotiations.</p>
    </div>

    <!-- Optimization Options -->
    <div class="options-container">
      <button @click="reduceCost(1000)" class="option-btn">Basic Cost Optimization - ₹1000</button>
      <button @click="reduceCost(3000)" class="option-btn">Intermediate Cost Optimization - ₹3000</button>
      <button @click="reduceCost(5000)" class="option-btn">Advanced Cost Optimization - ₹5000</button>
    </div>

    <!-- Display optimization savings -->
    <div v-if="optimizationDone" class="insight-card">
      <h3>Cost Optimization Complete</h3>
      <p>Savings achieved: ₹{{ savings }}</p>
      <button @click="nextLevel" class="next-btn">Proceed to Inventory Planning</button>
    </div>

    <!-- Chanakya Insight Section -->
    <div class="chanakya-insight">
      <h3>Chanakya's Wisdom</h3>
      <button @click="toggleInsight" class="insight-btn" :disabled="!insightUnlocked">
        {{ insightUnlocked ? 'View Insight' : `Earn ${unlockPointsNeeded} Points to Unlock` }}
      </button>
      <p v-if="showInsight">{{ chanakyaInsight }}</p>
    </div>

    <!-- Progress Bar -->
    <div class="progress-bar">
      <div class="progress" :style="{ width: '20%' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      budget: 15000,
      savings: 0,
      optimizationDone: false,
      rewardPoints: 20, // Initial points
      insightUnlocked: false,
      unlockPointsNeeded: 10,
      showInsight: false,
      selectedResearch: "", // To be passed from Market Research component
      chanakyaInsight: "Understanding cost management strategies is essential for maintaining a profitable business.",
    };
  },
  methods: {
    // Accepts selected research from Market Research component
    setResearch(selectedResearch) {
      this.selectedResearch = selectedResearch;
    },

    // Optimization Cost Reduction
    reduceCost(amount) {
      if (this.budget >= amount) {
        this.budget -= amount;
        this.savings = amount * 0.1; // Example: Save 10% of the optimization cost
        this.optimizationDone = true;
      } else {
        alert("Insufficient budget for this optimization.");
      }
    },

    // Proceed to next level
    nextLevel() {
      this.$store.dispatch('updateRewardPoints', this.rewardPoints);
      this.$store.dispatch('addAchievement', "Cost Management Achieved");
      this.$router.push('/inventory-planning');
    },

    // Unlock and Show Chanakya Insight
    toggleInsight() {
      if (this.insightUnlocked) {
        this.showInsight = !this.showInsight;
      }
    },
  },
  created() {
    // Check if the user has selected a research type from the previous component
    const selectedResearch = this.$store.state.selectedResearch;
    if (selectedResearch) {
      this.setResearch(selectedResearch); // Set the selected research type
    }
  },
};
</script>

<style scoped>
.level-container {
  text-align: center;
  padding: 30px;
  max-width: 650px;
  margin: auto;
  background: #f9fafc;
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
}

.reward-section {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #e8f4ff;
  border: 1px solid #b3d1ff;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0px 4px 10px rgba(0, 123, 255, 0.3);
  width: 180px;
  text-align: center;
}

.reward-points {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  color: #0056b3;
}

.reward-points img {
  width: 35px;
  height: 35px;
  margin-bottom: 5px;
}

.welcome-message {
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -20%);
  padding: 20px;
  background: #e6f3ff;
  border: 1px solid #91cfff;
  border-radius: 12px;
  text-align: center;
  color: #0056b3;
  box-shadow: 0px 4px 10px rgba(0, 123, 255, 0.3);
  animation: fadeIn 0.5s ease-in-out;
}

.welcome-message button {
  margin-top: 15px;
  padding: 8px 16px;
  background: #3774e6;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.chanakya-insight {
  margin-top: 20px;
  padding: 15px;
  background: #fffbf3;
  color: #8a6d3b;
  border: 2px solid #d3a04f;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0px 4px 12px rgba(211, 160, 79, 0.4);
}

.insight-btn {
  padding: 8px 16px;
  background: #d3a04f;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  font-weight: bold;
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
