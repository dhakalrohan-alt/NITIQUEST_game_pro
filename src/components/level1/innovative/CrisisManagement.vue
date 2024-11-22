<template>
    <div class="level-container">
      <h2>Crisis Management and Recovery</h2>
      <p>Adapt to unforeseen challenges and navigate the crisis while securing your business's future.</p>
  
      <!-- Crisis Event -->
      <div class="crisis-container">
        <h3>Crisis Event</h3>
        <p><strong>{{ crisis.name }}</strong></p>
        <p>{{ crisis.description }}</p>
      </div>
  
      <!-- Budget and Stability -->
      <div class="status-container">
        <p><strong>Remaining Budget:</strong> ${{ budget }}</p>
        <p><strong>Stability:</strong> {{ stability }}%</p>
      </div>
  
      <!-- Crisis Response Options -->
      <div class="options-container">
        <h3>Choose Your Response</h3>
        <div class="options">
          <div v-for="option in crisisOptions" :key="option.id" class="option-card">
            <h4>{{ option.name }}</h4>
            <p><strong>Cost:</strong> ${{ option.cost }}</p>
            <p><strong>Impact on Stability:</strong> {{ option.stabilityImpact }}%</p>
            <button
              @click="executeCrisisResponse(option)"
              :disabled="option.completed || budget < option.cost"
              class="action-btn"
            >
              Apply Response
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
      ...mapState(['budget', 'stability']), // Access Vuex state for budget and stability
    },
    data() {
      return {
        crisis: {
          name: "Economic Downturn",
          description: "A sudden economic downturn has led to reduced customer spending and lower revenues.",
        },
        crisisOptions: [
          { id: 1, name: "Cut Operational Costs", cost: 5000, stabilityImpact: 10, completed: false },
          { id: 2, name: "Increase Marketing Budget", cost: 8000, stabilityImpact: 20, completed: false },
          { id: 3, name: "Negotiate with Suppliers", cost: 3000, stabilityImpact: 5, completed: false },
        ],
      };
    },
    methods: {
      ...mapActions(['setBudget', 'setStability']), // Vuex actions to update state
  
      executeCrisisResponse(option) {
        if (this.budget >= option.cost) {
          this.setBudget(this.budget - option.cost); // Update budget
          this.setStability(this.stability + option.stabilityImpact); // Update stability
  
          option.completed = true; // Mark the option as completed
        } else {
          alert("Insufficient budget to apply this response!");
        }
      },
  
      completeLevel() {
        alert("You’ve managed the crisis! Moving to the next level.");
        this.$router.push("/innovation-market"); // Navigate to the next level or summary
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
  
  .crisis-container {
    background: #f8f9fa;
    padding: 15px;
    margin: 20px 0;
    border-radius: 8px;
    font-weight: bold;
    border: 1px solid #dee2e6;
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
  