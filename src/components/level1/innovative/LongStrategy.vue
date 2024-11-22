<template>
    <div class="level-container">
      <h2>Long-Term Strategic Planning</h2>
      <p>Plan the future of your business: Choose your path for long-term success.</p>
  
      <!-- Remaining Budget and Stability -->
      <div class="status-container">
        <p><strong>Remaining Budget:</strong> ${{ budget }}</p>
        <p><strong>Stability:</strong> {{ stability }}%</p>
      </div>
  
      <!-- Path Selection -->
      <div class="options-container">
        <h3>Choose Your Path</h3>
        <div class="options">
          <!-- Path Options -->
          <div v-for="path in paths" :key="path.id" class="path-card">
            <h4>{{ path.name }}</h4>
            <p><strong>Cost:</strong> ${{ path.cost }}</p>
            <p><strong>Impact:</strong> +{{ path.impact }}% stability</p>
            <button
              @click="executePath(path)"
              :disabled="path.completed || budget < path.cost"
              class="action-btn"
            >
              Choose Path
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
        paths: [
          { id: 1, name: "Global Expansion", cost: 15000, impact: 25, completed: false },
          { id: 2, name: "Product Innovation", cost: 10000, impact: 20, completed: false },
          { id: 3, name: "Mergers and Acquisitions", cost: 20000, impact: 30, completed: false },
        ],
      };
    },
    methods: {
      ...mapActions(['setBudget', 'setStability']), // Vuex actions to update budget and stability
  
      executePath(path) {
        if (this.budget >= path.cost) {
          this.setBudget(this.budget - path.cost); // Update budget in Vuex
          this.setStability(this.stability + path.impact); // Update stability in Vuex
  
          path.completed = true; // Mark this path as completed
        } else {
          alert("Insufficient budget to choose this path!");
        }
      },
  
      completeLevel() {
        alert("Great job! You've completed the Long-Term Strategic Planning level.");
        this.$router.push("/crisis-management"); // Navigate to a summary or next level
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
  
  .path-card {
    background: #ffffff;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 15px;
    margin: 10px auto;
    max-width: 300px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .path-card h4 {
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
  