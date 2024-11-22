<template>
    <div class="level-container">
      <!-- Title -->
      <h2 class="title">Strategic Planning</h2>
      <p class="description">Allocate your budget, set priorities, and manage risks to build an effective plan.</p>
  
      <!-- Budget Display -->
      <div class="budget-display">
        <p>Budget Remaining:</p>
        <h3>${{ budget }}</h3>
      </div>
  
      <!-- Progress Display -->
      <div class="progress-display">
        <p>Tasks Completed: {{ completedTasks }} / 3</p>
        <div class="progress-bar">
          <div class="progress" :style="{ width: progressPercentage + '%' }"></div>
        </div>
      </div>
  
      <!-- Task 1: Budget Allocation -->
      <div class="task-section">
        <h3>Budget Allocation</h3>
        <p>Allocate funds to key areas:</p>
        <div class="allocation-options">
          <div v-for="area in budgetAreas" :key="area.type" class="allocation-card">
            <h4>
              {{ area.label }}
              <button @click="showInfo(area)" class="info-button">ℹ️</button>
            </h4>
            <p>Allocated: ${{ area.allocated }}</p>
            <button @click="allocateBudget(area, 1000)">+ $1,000</button>
            <button @click="allocateBudget(area, -1000)" :disabled="area.allocated <= 0">- $1,000</button>
          </div>
        </div>
      </div>
  
      <!-- Task 2: Set Priorities -->
      <div class="task-section">
        <h3>Set Priorities</h3>
        <p>Choose your focus:</p>
        <div class="priority-options">
          <div
            v-for="goal in timelineGoals"
            :key="goal.type"
            :class="['priority-card', { selected: goal.selected }]"
            @click="setPriority(goal)"
          >
            {{ goal.label }}
            <button @click.stop="showInfo(goal)" class="info-button">ℹ️</button>
          </div>
        </div>
      </div>
  
      <!-- Task 3: Risk Management -->
      <div class="task-section">
        <h3>Risk Management</h3>
        <p>Mitigate potential risks:</p>
        <div class="risk-options">
          <div v-for="risk in riskOptions" :key="risk.type" class="risk-card">
            <h4>
              {{ risk.label }}
              <button @click="showInfo(risk)" class="info-button">ℹ️</button>
            </h4>
            <p>{{ risk.description }}</p>
            <button @click="mitigateRisk(risk)">
              {{ risk.mitigated ? 'Mitigated' : 'Mitigate' }}
            </button>
          </div>
        </div>
      </div>
  
      <!-- Proceed Button -->
      <button @click="calculateResults" class="next-button" :disabled="!allTasksCompleted">
        Complete Planning
      </button>
  
      <!-- Modal for Information -->
      <div v-if="modalVisible" class="info-modal">
        <div class="modal-content">
          <h3>More Information</h3>
          <p>{{ modalContent }}</p>
          <button @click="closeModal" class="close-button">Close</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        budget: 20000,
        completedTasks: 0,
        modalVisible: false,
        modalContent: '',
        budgetAreas: [
          { type: "marketing", label: "Marketing", allocated: 0, info: "Invest in promoting your product to increase brand awareness and sales." },
          { type: "operations", label: "Operations", allocated: 0, info: "Optimize daily processes to ensure smooth functioning of the business." },
          { type: "r&d", label: "Research & Development", allocated: 0, info: "Innovate and improve products to meet market demands." },
        ],
        timelineGoals: [
          { type: "short-term", label: "Short-Term", selected: false, info: "Focus on immediate objectives, such as launching your product." },
          { type: "mid-term", label: "Mid-Term", selected: false, info: "Plan for expansion and market penetration over the next year." },
          { type: "long-term", label: "Long-Term", selected: false, info: "Develop strategies for sustained growth and innovation over 5 years." },
        ],
        riskOptions: [
          {
            type: "supply-chain",
            label: "Supply Chain Issue",
            description: "Delays in sourcing materials.",
            mitigated: false,
            info: "Improve supplier relationships and diversify sources to prevent delays.",
          },
          {
            type: "competitor",
            label: "Competitor Launch",
            description: "Competitors may launch similar products.",
            mitigated: false,
            info: "Analyze competitor strategies and differentiate your offering.",
          },
          {
            type: "customer-feedback",
            label: "Negative Feedback",
            description: "Address customer complaints proactively.",
            mitigated: false,
            info: "Improve customer service and act on feedback to maintain satisfaction.",
          },
        ],
      };
    },
    computed: {
      progressPercentage() {
        return (this.completedTasks / 3) * 100;
      },
      allTasksCompleted() {
        return this.completedTasks === 3;
      },
    },
    methods: {
      allocateBudget(area, amount) {
        if (this.budget - amount >= 0 || amount < 0) {
          area.allocated += amount;
          this.budget -= amount;
          this.checkTaskCompletion();
        } else {
          alert("Not enough budget available.");
        }
      },
      setPriority(goal) {
        this.timelineGoals.forEach((g) => (g.selected = false));
        goal.selected = true;
        this.checkTaskCompletion();
      },
      mitigateRisk(risk) {
        if (!risk.mitigated) {
          risk.mitigated = true;
          this.checkTaskCompletion();
        }
      },
      checkTaskCompletion() {
        this.completedTasks =
          (this.budgetAreas.some((area) => area.allocated > 0) ? 1 : 0) +
          (this.timelineGoals.some((goal) => goal.selected) ? 1 : 0) +
          (this.riskOptions.some((risk) => risk.mitigated) ? 1 : 0);
      },
      calculateResults() {
        alert("Planning Complete! Proceeding to next step...");
        this.$router.push("/next-level");
      },
      showInfo(item) {
        this.modalContent = item.info;
        this.modalVisible = true;
      },
      closeModal() {
        this.modalVisible = false;
        this.modalContent = '';
      },
    },
  };
  </script>
  
  <style scoped>
  /* General Layout */
  .level-container {
    max-width: 700px;
    margin: auto;
    padding: 20px;
    background: #f4f4f4;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .title {
    font-size: 2rem;
    color: #333;
  }
  
  .description {
    font-size: 1rem;
    color: #666;
    margin-bottom: 20px;
  }
  
  /* Budget and Progress */
  .budget-display,
  .progress-display {
    margin: 15px 0;
    padding: 10px;
    background: #e0f7fa;
    border-radius: 8px;
    color: #00796b;
  }
  
  .progress-bar {
    height: 15px;
    background: #ddd;
    border-radius: 8px;
    margin: 10px 0;
  }
  
  .progress {
    height: 100%;
    background: #76c7c0;
    transition: width 0.3s ease;
  }
  
  /* Cards and Buttons */
  .allocation-card,
  .priority-card,
  .risk-card {
    background: white;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .priority-card.selected {
    background: #76c7c0;
    color: white;
  }
  
  .info-button {
    font-size: 0.9rem;
    background: none;
    border: none;
    color: #00796b;
    cursor: pointer;
  }
  
  button {
    margin-top: 10px;
    padding: 8px 12px;
    border: none;
    background: #00796b;
    color: white;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
  }
  
  /* Modal */
  .info-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 12px;
    max-width: 400px;
    text-align: left;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
  
  .close-button {
    background: #f44336;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
    cursor: pointer;
    margin-top: 10px;
  }
  
  /* Next Button */
  .next-button {
    margin-top: 20px;
    padding: 12px 20px;
    font-size: 1rem;
    background: #00796b;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .next-button:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
  </style>
  