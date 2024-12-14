<template>
  <div class="implementation-monitoring-container">
    <!-- Dashboard -->
    <div class="dashboard">
      <h2>{{ playerName }}</h2>
      <p>Business: {{ businessName }}</p>
      <p><strong>Remaining Budget:</strong> ${{ availableBalance }}</p>
      <p><strong>Selected Tasks:</strong> 
        <span v-if="selectedTasks.length === 0">None</span>
        <span v-for="task in selectedTasks" :key="task.id">{{ task.name }} </span>
      </p>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Task Section -->
      <div class="tasks-section">
        <h3>Select Tasks to Allocate Resources</h3>
        <div class="tasks-list">
          <div
            v-for="task in tasks"
            :key="task.id"
            class="task-card"
            :class="{ selected: isTaskSelected(task) }"
            @click="toggleTaskSelection(task)"
          >
            <h4>{{ task.name }}</h4>
            <p>{{ task.description }}</p>
            <p><strong>Cost:</strong> ${{ task.cost }}</p>
            <button class="info-btn" @click.stop="showInfo(task)">i</button>
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
        :disabled="selectedTasks.length === 0"
      >
        Show Progress
      </button>
    </div>

    <!-- Progress Summary Modal -->
    <div v-if="showProgressModal" class="modal-overlay">
      <div class="modal-content">
        <h4>Implementation Milestone Summary</h4>
        <p><strong>Business Setup Stage:</strong> {{ businessStage }}</p>
        <p><strong>Remaining Budget:</strong> ${{ availableBalance }}</p>
        <p><strong>Selected Tasks:</strong> {{ selectedTasks.length }} task(s) selected</p>

        <!-- Milestone Summary -->
        <div class="milestone-summary">
          <p v-for="task in selectedTasks" :key="task.id">{{ task.name }} - Completed</p>
        </div>

        <div class="key-takeaways">
          <h5>Key Takeaways:</h5>
          <p>
            By selecting these tasks, you have made key progress towards implementing your business strategy.
            These actions are crucial for building a sustainable business.
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
      tasks: [
        {
          id: 1,
          name: "Marketing Campaign",
          description: "Launch a marketing campaign to increase brand visibility.",
          fullDescription: "Marketing campaigns help your business reach new customers and generate leads.",
          cost: 5000,
        },
        {
          id: 2,
          name: "Hire Key Staff",
          description: "Recruit and onboard necessary employees for business operations.",
          fullDescription: "Having the right team ensures your business can scale efficiently.",
          cost: 8000,
        },
        {
          id: 3,
          name: "Product Development",
          description: "Develop new products to cater to market needs.",
          fullDescription: "Constant innovation is key to maintaining a competitive edge in the market.",
          cost: 10000,
        },
      ],
      selectedTasks: [],
      selectedTask: null,
      currentInsight:
        "Strategic planning must be followed by effective execution. Resource allocation is key.",
      insights: [
        "Implement your strategy with focus and dedication.",
        "The foundation of your business must be strong to endure challenges.",
        "Execution is where the real business success happens.",
      ],
      showModal: false,
      showProgressModal: false,
      modalInfo: {},
      businessStage: "Implementation & Monitoring Stage",
    };
  },
  methods: {
    toggleTaskSelection(task) {
      if (!this.isTaskSelected(task)) {
        if (this.availableBalance >= task.cost) {
          this.selectedTasks.push(task);
          this.availableBalance -= task.cost;
          localStorage.setItem("availableBalance", this.availableBalance); // Save updated balance
        } else {
          alert("Insufficient balance to select this task.");
        }
      } else {
        this.selectedTasks = this.selectedTasks.filter(
          (selectedTask) => selectedTask.id !== task.id
        );
        this.availableBalance += task.cost;
        localStorage.setItem("availableBalance", this.availableBalance); // Update balance after removal
      }
    },
    isTaskSelected(task) {
      return this.selectedTasks.some((selectedTask) => selectedTask.id === task.id);
    },
    showInfo(task) {
      this.modalInfo = task;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    resetChoices() {
      if (confirm("Are you sure you want to reset your choices?")) {
        this.selectedTasks = [];
        this.availableBalance = parseInt(localStorage.getItem("availableBalance")) || 50000;
      }
    },
    showProgressSummary() {
      // Display progress summary modal when the player clicks "Show Progress"
      this.showProgressModal = true;
    },
    closeProgressModal() {
      // Close the progress summary modal
      this.showProgressModal = false;
    },
    proceedToNextLevel() {
      alert(`Proceeding to the next level with ${this.selectedTasks.length} tasks completed!`);
      this.$router.push("/evaluation-control");  // Replace with actual path for next level
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
.implementation-monitoring-container {
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

.task-card {
  background: #ffffff;
  color: #333;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.3s, background 0.3s;
}

.task-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.task-card.selected {
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
