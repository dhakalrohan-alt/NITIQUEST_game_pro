<template>
    <div class="level-container">
      <h2>Strategic Growth and Risk Mitigation</h2>
      <p>Choose your strategy: Grow your business or mitigate risks for long-term success.</p>
  
      <div class="status-container">
        <p><strong>Remaining Budget:</strong> ${{ budget }}</p>
        <p><strong>Stability:</strong> {{ stability }}%</p>
      </div>
  
      <div class="options-container">
        <h3>Choose Your Strategy</h3>
        <div class="options">
          <!-- Growth Options -->
          <div v-for="option in options" :key="option.id" class="option-card">
            <h4>{{ option.name }}</h4>
            <p><strong>Cost:</strong> ${{ option.cost }}</p>
            <p><strong>Impact:</strong> +{{ option.impact }}% stability</p>
            <button
              @click="executeOption(option)"
              :disabled="option.completed || budget < option.cost"
              class="action-btn"
            >
              Apply Strategy
            </button>
          </div>
        </div>
      </div>
  
      <!-- Finish Level -->
      <button v-if="stability >= 100" @click="completeLevel" class="finish-btn">
        Finish Level
      </button>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['budget', 'stability']), // Access Vuex state
    },
    data() {
      return {
        options: [
          { id: 1, name: "Aggressive Growth", cost: 10000, impact: 20, completed: false },
          { id: 2, name: "Stability Focus", cost: 7000, impact: 10, completed: false },
          { id: 3, name: "Risk Mitigation", cost: 5000, impact: 15, completed: false },
        ],
      };
    },
    methods: {
      ...mapActions(['setBudget', 'setStability']), // Vuex actions to update state
  
      executeOption(option) {
        if (this.budget >= option.cost) {
          this.setBudget(this.budget - option.cost); // Update budget
          this.setStability(this.stability + option.impact); // Update stability
  
          option.completed = true; // Mark the option as completed
        } else {
          alert("Insufficient budget to apply this strategy!");
        }
      },
  
      completeLevel() {
        alert("Congratulations! Moving on to the next level.");
        this.$router.push("/long-strategy"); // Navigate to the next level
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
  