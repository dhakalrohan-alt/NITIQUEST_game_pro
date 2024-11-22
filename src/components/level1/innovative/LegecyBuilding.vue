<template>
    <div class="level-container">
      <h2>Legacy Building and Future Sustainability</h2>
      <p>Ensure the long-term success of your business. Make the right decisions to build a sustainable legacy.</p>
  
      <!-- Remaining Budget and Business Metrics -->
      <div class="status-container">
        <p><strong>Remaining Budget:</strong> ${{ budget }}</p>
        <p><strong>Market Position:</strong> {{ marketPosition }}%</p>
        <p><strong>Innovation Level:</strong> {{ innovationLevel }}%</p>
        <p><strong>Stability:</strong> {{ stability }}%</p>
      </div>
  
      <!-- Final Decisions -->
      <div class="options-container">
        <h3>Final Business Decisions</h3>
        <div class="options">
          <div v-for="option in options" :key="option.id" class="option-card">
            <h4>{{ option.name }}</h4>
            <p><strong>Cost:</strong> ${{ option.cost }}</p>
            <p><strong>Impact on Business:</strong> +{{ option.impact }}% stability</p>
            <button
              @click="executeDecision(option)"
              :disabled="option.completed || budget < option.cost"
              class="action-btn"
            >
              Apply Decision
            </button>
          </div>
        </div>
      </div>
  
      <!-- Finish Level -->
      <button v-if="stability >= 100 && marketPosition >= 80" @click="completeLevel" class="finish-btn">
        Complete Legacy
      </button>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['budget', 'marketPosition', 'stability', 'innovationLevel']), // Access Vuex state
    },
    data() {
      return {
        options: [
          { id: 1, name: "Expand to New Markets", cost: 15000, impact: 30, completed: false },
          { id: 2, name: "Invest in Innovation", cost: 10000, impact: 20, completed: false },
          { id: 3, name: "Improve Sustainability Practices", cost: 12000, impact: 25, completed: false },
          { id: 4, name: "Prepare for IPO", cost: 20000, impact: 40, completed: false },
        ],
      };
    },
    methods: {
      ...mapActions(['setBudget', 'setStability', 'setMarketPosition', 'setInnovationLevel']), // Actions to update state
  
      executeDecision(option) {
        if (this.budget >= option.cost) {
          this.setBudget(this.budget - option.cost); // Update budget
          this.setStability(this.stability + option.impact); // Update stability
          this.setMarketPosition(this.marketPosition + option.impact); // Update market position
          this.setInnovationLevel(this.innovationLevel + option.impact); // Update innovation
  
          option.completed = true; // Mark the option as completed
        } else {
          alert("Insufficient budget to apply this decision!");
        }
      },
  
      completeLevel() {
        alert("You have built a sustainable legacy! Congratulations on your successful business.");
        this.$router.push("/reflection-evaluation"); // Navigate to the final screen or summary
      },
    },
  };
  </script>
  
  <style scoped>
  .level-container {
    text-align: center;
    padding: 20px;
    max-width: 900px;
    margin: auto;
    background: linear-gradient(135deg, #f8f9fa, #e9ecef);
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    color: #495057;
  }
  
  .status-container {
    background: #f8f9fa;
    padding: 15px;
    margin: 20px 0;
    border-radius: 8px;
    font-weight: bold;
    border: 1px solid #dee2e6;
  }
  
  .options-container {
    margin: 20px 0;
  }
  
  .option-card {
    background: #ffffff;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 15px;
    margin: 10px auto;
    max-width: 300px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .option-card h4 {
    color: #007bff;
  }
  
  .action-btn {
    padding: 10px 15px;
    margin-top: 10px;
    background: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .action-btn:disabled {
    background: #6c757d;
  }
  
  .finish-btn {
    padding: 12px 25px;
    background: #28a745;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
  }
  
  .finish-btn:disabled {
    background: #6c757d;
  }
  </style>
  