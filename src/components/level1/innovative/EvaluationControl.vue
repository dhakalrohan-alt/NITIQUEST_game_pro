<template>
    <div class="level-container">
      <!-- Header -->
      <h2>Evaluation & Control</h2>
      <p>Analyze outcomes, identify gaps, and take corrective actions to achieve goals.</p>
  
      <!-- Performance Metrics -->
      <div class="metrics-container">
        <h3>Performance Metrics</h3>
        <div class="metrics">
          <div class="metric-card" v-for="metric in metrics" :key="metric.name">
            <h4>{{ metric.name }}</h4>
            <p><strong>Planned:</strong> {{ metric.planned }}</p>
            <p><strong>Actual:</strong> {{ metric.actual }}</p>
            <p
              :class="{
                deviation: calculateDeviation(metric.planned, metric.actual) > 10,
              }"
            >
              <strong>Deviation:</strong> {{ calculateDeviation(metric.planned, metric.actual) }}%
            </p>
          </div>
        </div>
      </div>
  
      <!-- Corrective Actions -->
      <div class="actions-container">
        <h3>Corrective Actions</h3>
        <div v-for="action in correctiveActions" :key="action.id" class="action-card">
          <h4>{{ action.name }}</h4>
          <p><strong>Cost:</strong> ${{ action.cost }}</p>
          <p><strong>Effect:</strong> {{ action.effect }}</p>
          <button
            @click="takeCorrectiveAction(action)"
            :disabled="action.completed || budget < action.cost"
            class="action-btn"
          >
            Apply Action
          </button>
        </div>
      </div>
  
      <!-- Status -->
      <div class="status-container">
        <p><strong>Remaining Budget:</strong> ${{ budget }}</p>
        <p><strong>Overall Performance:</strong> {{ overallPerformance }}%</p>
      </div>
  
      <!-- Finish Level -->
      <button v-if="overallPerformance >= 90" @click="completeLevel" class="finish-btn">
        Finish Level
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        budget: 10000, // Remaining budget for corrective actions
        overallPerformance: 75, // Initial overall performance
        metrics: [
          { name: "Budget Usage", planned: 20000, actual: 25000 },
          { name: "Launch Timeline (weeks)", planned: 4, actual: 6 },
          { name: "Customer Satisfaction", planned: 85, actual: 70 },
        ],
        correctiveActions: [
          { id: 1, name: "Increase Marketing Budget", cost: 3000, effect: 10, completed: false },
          { id: 2, name: "Hire Temporary Staff", cost: 2000, effect: 8, completed: false },
          { id: 3, name: "Invest in Customer Support", cost: 5000, effect: 15, completed: false },
        ],
      };
    },
    methods: {
      calculateDeviation(planned, actual) {
        return Math.abs(((actual - planned) / planned) * 100).toFixed(1);
      },
      takeCorrectiveAction(action) {
        if (this.budget >= action.cost) {
          this.budget -= action.cost;
          this.overallPerformance += action.effect;
          action.completed = true;
          if (this.overallPerformance > 100) this.overallPerformance = 100;
        } else {
          alert("Insufficient budget to take this action!");
        }
      },
      completeLevel() {
        alert("Great job! You’ve successfully optimized the performance metrics!");
        this.$router.push("/strategic-growth"); // Navigate to the next level or summary
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
  
  .metrics-container,
  .actions-container {
    margin: 20px 0;
  }
  
  .metric-card,
  .action-card {
    background: #ffffff;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 15px;
    margin: 10px auto;
    max-width: 300px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .deviation {
    color: #dc3545;
    font-weight: bold;
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
  
  .status-container {
    background: #f8f9fa;
    padding: 15px;
    margin: 20px 0;
    border-radius: 8px;
    font-weight: bold;
    border: 1px solid #dee2e6;
  }
  
  .finish-btn {
    padding: 12px 25px;
    background: #28a745;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  