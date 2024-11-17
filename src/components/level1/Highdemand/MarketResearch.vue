<template>
  <div> <div class="reward-section">
      <h3>Your Rewards</h3>
      <div class="reward-points">
        <img :src="require('@/assets/video-game.gif')" alt="Reward Icon" />
        <p>Points: {{ rewardPoints }}</p>
      </div>
    </div>

  <div class="level-container">
    <!-- Reward Section -->
   

    <!-- Welcome Message -->
    <transition name="fade">
      <div v-if="showWelcome" class="welcome-message">
        <h2>Welcome to NITIQUEST!</h2>
        <p>You start with 20 reward points. Use them wisely!</p>
        <button @click="dismissWelcome">Continue</button>
      </div>
    </transition>

    <!-- Main Content Section -->
    <h2>Market Analysis & Research</h2>
    <p>Research the demand for your product, identify target customers, and understand competitor offerings.</p>

    <!-- Budget Display -->
    <p class="budget-display">Remaining Budget: ₹{{ budget }}</p>

    <!-- Research Options -->
    <div class="options-container">
      <button @click="conductResearch('basic')" class="option-btn" :disabled="selectedResearch">
        Basic Market Research - ₹2000
      </button>
      <button @click="conductResearch('detailed')" class="option-btn" :disabled="selectedResearch">
        Detailed Market Research - ₹5000
      </button>
      <button @click="conductResearch('in-depth')" class="option-btn" :disabled="selectedResearch">
        In-depth Market Research - ₹10000
      </button>
    </div>

    <!-- Display insights after research is completed -->
    <div v-if="researchCompleted" class="insight-card">
      <h3>Research Insights</h3>
      <p>{{ researchInsights }}</p>
      <p><strong>Score Gained:</strong> {{ score }} points</p>
      <p v-if="achievement" class="achievement">{{ achievement }}</p>
      <button @click="nextLevel" class="next-btn">Proceed to Cost Management</button>
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
      <div class="progress" :style="{ width: '10%' }"></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      budget: 50000,
      researchCompleted: false,
      researchInsights: '',
      chanakyaInsight: 'Understand the battlefield before entering it. Market research is key to finding a winning position.',
      score: 0,
      achievement: '',
      rewardPoints: 20, // Initial points
      insightUnlocked: false,
      unlockPointsNeeded: 10,
      showInsight: false,
      showWelcome: true,
      selectedResearch: false,
    };
  },
  methods: {
    conductResearch(type) {
      if (this.selectedResearch) {
        if (this.rewardPoints >= 5) {
          this.rewardPoints -= 5;
          this.selectedResearch = false;
          alert("5 points deducted to change your research selection.");
        } else {
          alert("Insufficient points to change selection.");
          return;
        }
      }

      let cost, insights, points, achievementText;
      if (type === 'basic') {
        cost = 2000;
        insights = 'General market trends with limited insights.';
        points = 10;
        achievementText = 'Initial Scout: Basic research conducted.';
      } else if (type === 'detailed') {
        cost = 5000;
        insights = 'Includes competitor analysis and target customer data.';
        points = 25;
        achievementText = 'Competitor Analyst: Gained deeper insights on competitors and customers.';
      } else if (type === 'in-depth') {
        cost = 10000;
        insights = 'Comprehensive data on market trends, demand forecasts, and competitor weaknesses.';
        points = 50;
        achievementText = 'Strategic Planner: Comprehensive analysis to secure competitive edge.';
      }

      if (this.budget >= cost) {
        this.budget -= cost;
        this.researchInsights = insights;
        this.researchCompleted = true;
        this.score += points;
        this.achievement = achievementText;
        this.rewardPoints += points;
        this.selectedResearch = true;

        if (this.rewardPoints >= this.unlockPointsNeeded) {
          this.insightUnlocked = true;
        }
      } else {
        alert("Insufficient budget for this research type.");
      }
    },
    nextLevel() {
      this.$store.dispatch('updateRewardPoints', this.rewardPoints);
      this.$store.dispatch('addAchievement', this.achievement);
      this.$store.dispatch('setResearchType', this.researchInsights); // Send selected research to store
      this.$router.push('/cost-management');
    },
    toggleInsight() {
      if (this.insightUnlocked) {
        this.showInsight = !this.showInsight;
      }
    },
    dismissWelcome() {
      this.showWelcome = false;
    },
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
  border-radius: 10px;
  padding: 15px;
  width: 190px;
  text-align: center;
  font-weight: bold;
  color: #0056b3;
  font-size: 1.1rem;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 123, 255, 0.3);
  animation: waveEffect 5s infinite ease-in-out;
}

/* Animated wave background effect */
.reward-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: -50%;
  width: 200%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 123, 255, 0.1), rgba(0, 123, 255, 0.2), rgba(0, 123, 255, 0.1));
  border-radius: inherit;
  animation: wave 6s infinite linear;
  z-index: -1;
}

/* Keyframes for wave movement */
@keyframes wave {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.reward-points {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  color: #0056b3;
  font-size: 1.2rem;
}

.reward-points img {
  width: 45px;
  height: 45px;
  margin-bottom: 5px;
}

/* Animation for a gentle bounce effect */
@keyframes waveEffect {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
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



.reward-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

.reward-icon img {
  width: 40px;
  height: 40px;
  margin-bottom: 5px;
}

.unlocked img {
  filter: grayscale(0);
}

.locked img {
  filter: grayscale(1);
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

.achievement {
  color: #ffd700;
  font-weight: bold;
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
