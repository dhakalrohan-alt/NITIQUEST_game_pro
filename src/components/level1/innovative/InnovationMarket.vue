<template>
    <div class="level-container">
      <h2>Innovation and Market Positioning</h2>
      <p>Choose the best strategy to innovate your business and improve your market positioning.</p>
  
      <!-- Remaining Budget and Market Position -->
      <div class="status-container">
        <p><strong>Remaining Budget:</strong> ${{ budget }}</p>
        <p><strong>Market Position:</strong> {{ marketPosition }}</p>
      </div>
  
      <!-- Innovation Opportunities -->
      <div class="options-container">
        <h3>Choose Your Innovation Strategy</h3>
        <div class="options">
          <!-- Innovation Options -->
          <div v-for="option in innovationOptions" :key="option.id" class="option-card">
            <h4>{{ option.name }}</h4>
            <p><strong>Cost:</strong> ${{ option.cost }}</p>
            <p><strong>Impact on Market Position:</strong> +{{ option.marketImpact }}%</p>
            <button
              @click="executeInnovation(option)"
              :disabled="option.completed || budget < option.cost"
              class="action-btn"
            >
              Apply Innovation
            </button>
          </div>
        </div>
      </div>
  
      <!-- Finish Level -->
      <button v-if="marketPosition >= 100" @click="completeLevel" class="finish-btn">
        Finish Level
      </button>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['budget', 'marketPosition']), // Access Vuex state for budget and market position
    },
    data() {
      return {
        innovationOptions: [
          { id: 1, name: "Product Development", cost: 15000, marketImpact: 30, completed: false },
          { id: 2, name: "Branding & Marketing", cost: 10000, marketImpact: 20, completed: false },
          { id: 3, name: "Technology Investment", cost: 12000, marketImpact: 25, completed: false },
        ],
      };
    },
    methods: {
      ...mapActions(['setBudget', 'setMarketPosition']), // Vuex actions to update state
  
      executeInnovation(option) {
        if (this.budget >= option.cost) {
          this.setBudget(this.budget - option.cost); // Update budget
          this.setMarketPosition(this.marketPosition + option.marketImpact); // Update market position
  
          option.completed = true; // Mark the innovation as completed
        } else {
          alert("Insufficient budget to apply this innovation strategy!");
        }
      },
  
      completeLevel() {
        alert("Congratulations! Your business is now positioned for success.");
        this.$router.push("/"); // Navigate to next level or summary
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
  