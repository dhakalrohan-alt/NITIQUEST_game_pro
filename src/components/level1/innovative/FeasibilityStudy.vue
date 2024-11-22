<template>
  <div class="level-container">
    <!-- Reward Section -->
    <div class="reward-section" title="Your Reward Points">
      <img src="path/to/reward-icon.svg" alt="Reward Icon" />
      <p>{{ rewardPoints }} Points</p>
    </div>

    <!-- Title and Description -->
    <h2>Feasibility Study and Market Validation</h2>
    <p>Conduct market research to validate your innovative product's potential.</p>

    <!-- Budget Display -->
    <p class="budget-display">Budget Remaining: ${{ budget }}</p>

    <!-- Research Options -->
    <div class="research-options">
      <button
        v-for="option in researchOptions"
        :key="option.type"
        @click="selectResearch(option)"
        class="research-btn"
        :class="{ selected: selectedOption?.type === option.type }"
        :disabled="selectedOption && selectedOption.type !== option.type"
      >
        {{ option.label }} - ${{ option.cost }}
      </button>
    </div>

    <!-- Side Info Box -->
    <transition name="slide">
      <div v-if="showSideBox" class="side-info-box">
        <h3>Research Details</h3>
        <p><strong>Option Selected:</strong> {{ selectedOption.label }}</p>
        <p><strong>Budget Spent:</strong> ${{ selectedOption.cost }}</p>
        <p><strong>Budget Left:</strong> ${{ budget }}</p>
        <p><strong>Consequences:</strong> {{ selectedOption.consequences }}</p>
        <button @click="proceedToNextLevel" class="proceed-btn">Proceed to Next Level</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      budget: 20000,
      rewardPoints: 20,
      selectedOption: null,
      showSideBox: false,
      researchOptions: [
        {
          type: "basic",
          label: "Basic Market Research",
          cost: 5000,
          consequences: "General insights, lower risk, limited depth.",
        },
        {
          type: "detailed",
          label: "Detailed Market Research",
          cost: 10000,
          consequences: "Actionable insights with moderate risk.",
        },
        {
          type: "in-depth",
          label: "In-Depth Market Research",
          cost: 15000,
          consequences: "Comprehensive insights, higher reward, higher cost.",
        },
      ],
    };
  },
  methods: {
    selectResearch(option) {
      if (this.selectedOption && this.selectedOption.type !== option.type) {
        if (this.rewardPoints >= 5) {
          this.rewardPoints -= 5;
          alert("5 reward points deducted to change your selection.");
        } else {
          alert("You do not have enough reward points to change your selection.");
          return;
        }
      }

      if (this.budget >= option.cost) {
        this.budget -= option.cost;
        this.selectedOption = option;
        this.showSideBox = true;
      } else {
        alert("Insufficient budget for this research option.");
      }
    },
    proceedToNextLevel() {
      this.$router.push({
        name: "/strategic-planning",
        params: {
          budget: this.budget,
          rewardPoints: this.rewardPoints,
          selectedOption: this.selectedOption,
        },
      });
    },
  },
};
</script>

<style scoped>
/* General Container Styles */
.level-container {
  text-align: center;
  padding: 30px;
  max-width: 700px;
  margin: auto;
  background: #f9fafc;
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
}

/* Fixed Reward Section Styles */
.reward-section {
  position: fixed;
  top: 10px;
  left: 10px;
  background: #e8f4ff;
  border: 1px solid #91cfff;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  box-shadow: 0px 4px 12px rgba(0, 123, 255, 0.3);
  width: 150px;
  z-index: 1000;
}

.reward-section img {
  width: 40px;
  height: 40px;
}

.reward-section p {
  font-size: 1rem;
  font-weight: bold;
  color: #0056b3;
  margin: 0;
}

/* Title and Description */
h2 {
  color: #3774e6;
  font-size: 2rem;
}

p {
  color: #3b5d50;
  font-size: 1.1rem;
}

/* Budget Display */
.budget-display {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #0056b3;
}

/* Research Options */
.research-options {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.research-btn {
  padding: 12px 20px;
  font-size: 1rem;
  color: #fff;
  background: #3774e6;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s;
}

.research-btn.selected {
  background: #0056b3;
  box-shadow: 0px 4px 12px rgba(0, 0, 123, 0.3);
}

.research-btn:disabled {
  background: #a6c8ff;
  cursor: not-allowed;
}

.research-btn:hover:enabled {
  transform: scale(1.05);
}

/* Side Info Box */
.side-info-box {
  position: fixed;
  top: 20%;
  right: 20px;
  width: 300px;
  padding: 15px;
  background: #eaf7ff;
  border: 1px solid #b3d1ff;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 123, 255, 0.3);
}

.side-info-box h3 {
  margin: 0;
  color: #0056b3;
  font-size: 1.3rem;
  font-weight: bold;
}

.side-info-box p {
  margin: 10px 0;
  color: #3b5d50;
  font-size: 1rem;
}

.proceed-btn {
  margin-top: 15px;
  padding: 8px 16px;
  font-size: 1rem;
  color: #fff;
  background: #3774e6;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

/* Animations */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter {
  transform: translateX(100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
