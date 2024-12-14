<template>
  <div class="feasibility-study-container">
    <!-- Dashboard -->
    <div class="dashboard">
      <h2>{{ playerName }}</h2>
      <p>Business: {{ businessName }}</p>
      <p><strong>Remaining Budget:</strong> ${{ availableBalance }}</p>
      <p><strong>Selected Options:</strong> 
        <span v-if="selectedOptions.length === 0">None</span>
        <span v-for="option in selectedOptions" :key="option.id">{{ option.name }} </span>
      </p>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Options Section -->
      <div class="options-section">
        <h3>Select Feasibility Study Actions</h3>
        <div class="options-list">
          <div
            v-for="option in options"
            :key="option.id"
            class="option-card"
            :class="{ selected: isOptionSelected(option) }"
            @click="toggleOptionSelection(option)"
          >
            <h4>{{ option.name }}</h4>
            <p>{{ option.description }}</p>
            <p><strong>Cost:</strong> ${{ option.cost }}</p>
            <button class="info-btn" @click.stop="showInfo(option)">i</button>
          </div>
        </div>
      </div>

      <!-- Chanakya's Insight Section -->
      <div class="chanakya-insight">
        <div class="chanakya-gif-container">
          <img src="@/assets/video-game.gif" alt="Chanakya GIF" class="chanakya-gif" />
        </div>
        <h3>Chanakya's Insight</h3>
        <p>{{ currentInsight }}</p>
      </div>
    </div>

    <!-- Reset and Proceed Buttons -->
    <div class="action-buttons">
      <button @click="resetChoices" class="reset-btn">Reset Choices</button>
      <button
        @click="showProgressSummary"
        class="next-btn"
        :disabled="selectedOptions.length === 0"
      >
        Show Progress
      </button>
    </div>

    <!-- Progress Summary Modal -->
    <div v-if="showProgressModal" class="modal-overlay">
      <div class="modal-content">
        <h4>Business Milestone Summary</h4>
        <p><strong>Business Setup Stage:</strong> {{ businessStage }}</p>
        <p><strong>Remaining Budget:</strong> ${{ availableBalance }}</p>
        <p><strong>Actions Taken:</strong> {{ selectedOptions.length }} action(s) selected</p>
        
        <!-- Milestone Summary -->
        <div class="milestone-summary">
          <p v-for="option in selectedOptions" :key="option.id">{{ option.name }} - Completed</p>
        </div>

        <div class="key-takeaways">
          <h5>Key Takeaways:</h5>
          <p>
            By selecting these actions, you have taken crucial steps to assess your business's feasibility.
            Your choices help you understand market conditions, evaluate competition, and assess your resources.
          </p>
        </div>

        <button @click="closeProgressModal" class="close-modal-btn">Close</button>
        <button @click="proceedToNextLevel" class="next-btn">Proceed to Next Level</button>
      </div>
    </div>

    <!-- Tooltip Modal -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <h4>{{ modalInfo.name }}</h4>
        <p>{{ modalInfo.fullDescription }}</p>
        <button @click="closeModal" class="close-modal-btn">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playerName: localStorage.getItem("playerName") || "Player",
      businessName: localStorage.getItem("businessName") || "Your Business",
      availableBalance: parseInt(localStorage.getItem("availableBalance")) || 50000,
      options: [
        {
          id: 1,
          name: "Market Research",
          description: "Gather data about your target audience and competition.",
          fullDescription: "Market research helps you identify trends, preferences, and risks.",
          cost: 5000,
        },
        {
          id: 2,
          name: "Competitor Analysis",
          description: "Study your competitors' strengths and weaknesses.",
          fullDescription: "This action allows you to strategize based on competitors' actions.",
          cost: 3000,
        },
        {
          id: 3,
          name: "Resource Evaluation",
          description: "Assess the resources needed for your product.",
          fullDescription: "Understanding your resource requirements ensures smoother execution.",
          cost: 2000,
        },
      ],
      selectedOptions: [], // Store multiple selected options
      currentInsight:
        "A wise leader always assesses feasibility before embarking on a venture.",
      insights: [
        "Feasibility is the cornerstone of success.",
        "Plan well, and your goals will follow.",
        "Strengthen your foundation before building upwards.",
      ],
      showModal: false,
      showProgressModal: false,
      modalInfo: {},
      businessStage: "Initial Phase", // Update as per progression
    };
  },
  methods: {
    toggleOptionSelection(option) {
      if (!this.isOptionSelected(option)) {
        if (this.availableBalance >= option.cost) {
          this.selectedOptions.push(option);
          this.availableBalance -= option.cost;
          localStorage.setItem("availableBalance", this.availableBalance); // Save updated balance
        } else {
          alert("Insufficient balance to select this option.");
        }
      } else {
        this.selectedOptions = this.selectedOptions.filter(
          (selectedOption) => selectedOption.id !== option.id
        );
        this.availableBalance += option.cost;
        localStorage.setItem("availableBalance", this.availableBalance); // Update balance after removal
      }
    },
    isOptionSelected(option) {
      return this.selectedOptions.some((selectedOption) => selectedOption.id === option.id);
    },
    showInfo(option) {
      this.modalInfo = option;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    resetChoices() {
      if (confirm("Are you sure you want to reset your choices?")) {
        this.selectedOptions = [];
        this.availableBalance = parseInt(localStorage.getItem("availableBalance")) || 50000;
      }
    },
    showProgressSummary() {
      this.showProgressModal = true;
    },
    closeProgressModal() {
      this.showProgressModal = false;
    },
    proceedToNextLevel() {
      alert(`Proceeding to the next level with ${this.selectedOptions.length} actions taken!`);
      this.$router.push("/strategic-planning");
    },
  },
  mounted() {
    setInterval(() => {
      this.currentInsight =
        this.insights[Math.floor(Math.random() * this.insights.length)];
    }, 10000);
  },
};
</script>

<style scoped>
/* General Styling */
.feasibility-study-container {
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(135deg, #212121, #2e7d32);
  color: white;
  font-family: "Press Start 2P", sans-serif;
  background-size: 400% 400%;
  animation: gradientAnimation 15s ease infinite;
}

/* Dashboard Styling */
.dashboard {
  background: #ff6f00;
  color: white;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  font-size: 1.2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Main Content */
.main-content {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-content: space-between;
}

/* Options Section */
.options-section {
  flex: 3;
}

.options-list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.option-card {
  background: #ffffff;
  color: #333;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.3s, background 0.3s;
}

.option-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.option-card.selected {
  border: 2px solid #28a745;
  background: #c8e6c9;
}

.info-btn {
  background: #00796b;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
}

/* Chanakya's Insight */
.chanakya-insight {
  flex: 1;
  background: #ffecb3;
  color: #333;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.chanakya-gif-container {
  text-align: center;
}

.chanakya-gif {
  width: 150px;
  height: auto;
  margin-bottom: 10px;
}

/* Progress Summary */
.milestone-summary {
  margin-top: 20px;
  font-size: 1.1rem;
}

.progress-bar-container {
  background: #e0e0e0;
  border-radius: 5px;
  width: 100%;
  height: 20px;
}

.progress-bar {
  background: #28a745;
  height: 100%;
  border-radius: 5px;
  transition: width 0.3s;
}

/* Action Buttons */
.action-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.reset-btn {
  background: #d9534f;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
}

.next-btn {
  background: #28a745;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
}

/* Tooltip Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  color: #333;
}

.close-modal-btn {
  background: #0056b3;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 10px;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
