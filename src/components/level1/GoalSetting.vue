<template>
    <div class="goal-setting-container">
      <h1>Set Your Business Goals</h1>
      <p>Define your short-term, mid-term, and long-term goals to shape your business strategy.</p>
  
      <div class="goal-inputs">
        <div class="goal-row">
          <label>Short-Term Goal (6 months):</label>
          <input v-model="goals.shortTerm" type="text" placeholder="e.g., Achieve $10,000 in sales" />
        </div>
        <div class="goal-row">
          <label>Mid-Term Goal (1 year):</label>
          <input v-model="goals.midTerm" type="text" placeholder="e.g., Expand to a new city" />
        </div>
        <div class="goal-row">
          <label>Long-Term Goal (3-5 years):</label>
          <input v-model="goals.longTerm" type="text" placeholder="e.g., Launch a new product line" />
        </div>
      </div>
  
      <button
        @click="proceedToNext"
        :disabled="!goals.shortTerm || !goals.midTerm || !goals.longTerm"
        class="proceed-btn"
      >
        Finish Goal Setting
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        goals: {
          shortTerm: '',
          midTerm: '',
          longTerm: ''
        }
      };
    },
    methods: {
      // Proceed to the next phase
      proceedToNext() {
        if (this.goals.shortTerm && this.goals.midTerm && this.goals.longTerm) {
          // Save the goals in localStorage
          localStorage.setItem('businessGoals', JSON.stringify(this.goals));
  
          // Redirect to the next phase (if applicable) or finish the level
          // this.$router.push({ name: 'NextPhase' });
          alert('Goals saved! Level 1 complete!');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .goal-setting-container {
    text-align: center;
    padding: 20px;
  }
  
  .goal-inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  
  .goal-row {
    display: flex;
    justify-content: space-between;
    width: 400px;
    margin: 10px 0;
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
  