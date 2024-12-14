<template>
  <div class="evaluation-control-container">
    <!-- Dashboard -->
    <div class="dashboard">
      <h2>{{ playerName }}</h2>
      <p>Business: {{ businessName }}</p>
      <p><strong>Remaining Budget:</strong> ${{ availableBalance }}</p>
      <p><strong>Selected Adjustments:</strong> 
        <span v-if="selectedAdjustments.length === 0">None</span>
        <span v-for="adjustment in selectedAdjustments" :key="adjustment.id">{{ adjustment.name }} </span>
      </p>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Left Column -->
      <div class="left-column">
        <!-- Business Performance Section -->
        <div class="business-performance">
          <h3>Business Performance</h3>
          <div class="metrics">
            <div class="metric">
              <h4>Revenue</h4>
              <p>${{ revenue }}</p>
            </div>
            <div class="metric">
              <h4>Expenses</h4>
              <p>${{ expenses }}</p>
            </div>
            <div class="metric">
              <h4>Profit</h4>
              <p>${{ profit }}</p>
            </div>
          </div>
        </div>

        <!-- Level Purpose Section -->
        <div class="level-purpose">
          <h3>Level Purpose</h3>
          <p>
            In this level, you will evaluate your business performance and make strategic adjustments
            to ensure sustainability and growth. The goal is to optimize resources and align your strategies
            with market conditions.
          </p>
        </div>
      </div>

      <!-- Adjustments Section -->
      <div class="adjustments-section">
        <h3>Strategic Adjustments</h3>
        <div class="adjustments-list">
          <div
            v-for="adjustment in adjustments"
            :key="adjustment.id"
            class="adjustment-card"
            :class="{ selected: isAdjustmentSelected(adjustment) }"
            @click="toggleAdjustmentSelection(adjustment)"
          >
            <h4>{{ adjustment.name }}</h4>
            <p>{{ adjustment.description }}</p>
            <p><strong>Cost:</strong> ${{ adjustment.cost }}</p>
            <button class="info-btn" @click.stop="showInfo(adjustment)">i</button>
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
        class="progress-btn"
        :disabled="selectedAdjustments.length === 0"
      >
        Show Progress
      </button>
    </div>

    <!-- Progress Summary Modal -->
    <div v-if="showProgressModal" class="modal-overlay">
      <div class="modal-content">
        <h4>Business Adjustment Summary</h4>
        <p><strong>Business Stage:</strong> Evaluation & Control</p>
        <p><strong>Remaining Budget:</strong> ${{ availableBalance }}</p>
        <p><strong>Adjustments Made:</strong> {{ selectedAdjustments.length }} adjustment(s)</p>

        <!-- Summary of Adjustments -->
        <div class="adjustment-summary">
          <p v-for="adjustment in selectedAdjustments" :key="adjustment.id">{{ adjustment.name }} - Applied</p>
        </div>

        <div class="impact-summary">
          <h5>Impact on Business:</h5>
          <p v-if="selectedAdjustments.length === 0">No adjustments made yet.</p>
          <ul>
            <li v-for="adjustment in selectedAdjustments" :key="adjustment.id">
              {{ adjustment.name }}: {{ adjustment.impact }}
            </li>
          </ul>
        </div>

        <div class="key-takeaways">
          <h5>Key Takeaways:</h5>
          <p>
            The adjustments you've selected have realigned your business strategy. Effective evaluation and control ensure that your business goals remain on track while adapting to external challenges.
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
      revenue: 25000,
      expenses: 15000,
      profit: 10000,
      adjustments: [
        {
          id: 1,
          name: "Increase Marketing Spend",
          description: "Boost brand awareness and customer acquisition.",
          fullDescription: "An increased marketing budget can attract new customers and expand market share, but it requires a significant investment.",
          cost: 7000,
          impact: "Increased brand awareness and customer acquisition."
        },
        {
          id: 2,
          name: "Streamline Operations",
          description: "Reduce overhead costs and improve efficiency.",
          fullDescription: "Streamlining operations improves profitability but may reduce flexibility or capacity.",
          cost: 4000,
          impact: "Reduced costs and improved operational efficiency."
        },
        {
          id: 3,
          name: "Expand Product Range",
          description: "Launch additional product variations.",
          fullDescription: "Expanding your product range meets diverse customer needs but requires extra resources.",
          cost: 8000,
          impact: "Attracted new customers with diverse needs."
        },
      ],
      selectedAdjustments: [],
      currentInsight:
        "Adapting your strategy to market dynamics ensures long-term business success.",
      insights: [
        "Constant evaluation leads to improved results.",
        "Adaptability is the strength of a thriving business.",
        "Control your expenses wisely to maximize growth.",
      ],
      showModal: false,
      showProgressModal: false,
      modalInfo: {},
    };
  },
  methods: {
    toggleAdjustmentSelection(adjustment) {
      if (!this.isAdjustmentSelected(adjustment)) {
        if (this.availableBalance >= adjustment.cost) {
          this.selectedAdjustments.push(adjustment);
          this.availableBalance -= adjustment.cost;
          localStorage.setItem("availableBalance", this.availableBalance);
        } else {
          alert("Insufficient budget to select this adjustment.");
        }
      } else {
        this.selectedAdjustments = this.selectedAdjustments.filter(
          (selectedAdjustment) => selectedAdjustment.id !== adjustment.id
        );
        this.availableBalance += adjustment.cost;
        localStorage.setItem("availableBalance", this.availableBalance);
      }
    },
    isAdjustmentSelected(adjustment) {
      return this.selectedAdjustments.some(
        (selectedAdjustment) => selectedAdjustment.id === adjustment.id
      );
    },
    showInfo(adjustment) {
      this.modalInfo = adjustment;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    resetChoices() {
      if (confirm("Are you sure you want to reset your choices?")) {
        this.selectedAdjustments = [];
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
      alert(`Proceeding to the next level with ${this.selectedAdjustments.length} adjustments made!`);
      this.$router.push("/implementation-monitoring"); // Next level
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
.evaluation-control-container {
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
  color: #212121;
  font-family: "Press Start 2P", sans-serif;
  animation: gradientAnimation 15s ease infinite;
}

.dashboard {
  background: #90caf9;
  color: #212121;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  font-size: 1.2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.main-content {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.left-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.business-performance, .level-purpose {
  background: #e3f2fd;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.adjustments-section {
  flex: 2;
  background: #f1f8e9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.adjustments-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.adjustment-card {
  background: #ffffff;
  color: #333;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.3s;
}

.adjustment-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.adjustment-card.selected {
  border: 2px solid #66bb6a;
  background: #e8f5e9;
}

.chanakya-insight {
  flex: 1;
  background: #bbdefb;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.chanakya-gif {
  width: 150px;
  height: auto;
  margin-bottom: 10px;
}

.action-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.reset-btn {
  background: #ef5350;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.progress-btn {
  background: #66bb6a;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.next-btn {
  background: #42a5f5;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
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
