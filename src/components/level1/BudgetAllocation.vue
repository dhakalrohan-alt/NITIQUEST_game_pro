<template>
    <div class="budget-allocation-container">
      <h1>Allocate Your Budget</h1>
      <p>Distribute your remaining budget across key areas:</p>
  
      <div class="allocation-inputs">
        <div class="allocation-row">
          <label>Product Development:</label>
          <input v-model.number="allocations.productDevelopment" type="number" min="0" />
        </div>
        <div class="allocation-row">
          <label>Marketing & Advertising:</label>
          <input v-model.number="allocations.marketing" type="number" min="0" />
        </div>
        <div class="allocation-row">
          <label>Staffing:</label>
          <input v-model.number="allocations.staffing" type="number" min="0" />
        </div>
        <div class="allocation-row">
          <label>Contingency Fund:</label>
          <input v-model.number="allocations.contingency" type="number" min="0" />
        </div>
      </div>
  
      <div class="budget-info">
        <p><strong>Total Budget:</strong> ${{ currentBudget }}</p>
        <p><strong>Allocated So Far:</strong> ${{ totalAllocated }}</p>
        <p v-if="totalAllocated > currentBudget" class="warning">You have exceeded the budget!</p>
      </div>
  
      <button 
        @click="proceedToNext"
        :disabled="totalAllocated > currentBudget || totalAllocated === 0"
        class="proceed-btn"
      >
        Proceed to Goal Setting
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentBudget: 0, // Default budget, will be fetched from localStorage
        allocations: {
          productDevelopment: 0,
          marketing: 0,
          staffing: 0,
          contingency: 0
        }
      };
    },
    computed: {
      // Total allocated amount
      totalAllocated() {
        return (
          this.allocations.productDevelopment +
          this.allocations.marketing +
          this.allocations.staffing +
          this.allocations.contingency
        );
      }
    },
    methods: {
      // Proceed to the next phase (Goal Setting)
      proceedToNext() {
        if (this.totalAllocated <= this.currentBudget) {
          // Save the budget allocations
          localStorage.setItem('budgetAllocations', JSON.stringify(this.allocations));
  
          // Redirect to Goal Setting page
          this.$router.push({ name: 'GoalSetting' });
        }
      }
    },
    mounted() {
      // Fetch the current budget from localStorage
      const savedBudget = localStorage.getItem('updatedBudget');
      if (savedBudget) {
        this.currentBudget = parseInt(savedBudget);
      }
    }
  };
  </script>
  
  <style scoped>
  .budget-allocation-container {
    text-align: center;
    padding: 20px;
  }
  
  .allocation-inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  
  .allocation-row {
    display: flex;
    justify-content: space-between;
    width: 400px;
    margin: 10px 0;
  }
  
  .budget-info {
    margin-top: 30px;
  }
  
  .warning {
    color: red;
  }
  
  .proceed-btn {
    margin-top: 30px;
    padding: 10px 20px;
    background-color: #3b5d50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .proceed-btn:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  </style>
  