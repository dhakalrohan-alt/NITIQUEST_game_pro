<template>
    <div class="level-container">
      <h2>Supplier Negotiation</h2>
      <p>Choose a negotiation tactic to optimize cost, quality, or flexibility with your suppliers.</p>
  
      <!-- Budget Display -->
      <p class="budget-display">Remaining Budget: ${{ budget }}</p>
  
      <!-- Negotiation Options -->
      <div class="options-container">
        <button @click="negotiate('bulkDiscount')" class="option-btn">
          Bulk Discount Agreement - $1000
        </button>
        <button @click="negotiate('qualityGuarantee')" class="option-btn">
          Quality Guarantee Agreement - $1500
        </button>
        <button @click="negotiate('flexibleTerms')" class="option-btn">
          Flexible Payment Terms - $2000
        </button>
      </div>
  
      <!-- Display insights after negotiation selection -->
      <div v-if="negotiationChosen" class="insight-card">
        <h3>Negotiation Outcome</h3>
        <p>{{ negotiationOutcome }}</p>
        <button @click="nextLevel" class="next-btn">Proceed to Operational Efficiency</button>
      </div>
  
      <!-- Progress Bar -->
      <div class="progress-bar">
        <div class="progress" :style="{ width: '80%' }"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        budget: 3000, // Adjusted budget for the level
        negotiationChosen: false,
        negotiationOutcome: '',
      };
    },
    methods: {
      negotiate(option) {
        let cost, outcome;
        if (option === 'bulkDiscount') {
          cost = 1000;
          outcome = "Bulk Discount Agreement: Reduced unit costs through larger orders, but requires higher upfront investment.";
        } else if (option === 'qualityGuarantee') {
          cost = 1500;
          outcome = "Quality Guarantee Agreement: Ensures consistent product quality, reducing returns and customer complaints.";
        } else if (option === 'flexibleTerms') {
          cost = 2000;
          outcome = "Flexible Payment Terms: Allows delayed payments, improving cash flow but often at a higher total cost.";
        }
  
        if (this.budget >= cost) {
          this.budget -= cost;
          this.negotiationOutcome = outcome;
          this.negotiationChosen = true;
        } else {
          alert("Insufficient budget for this negotiation.");
        }
      },
      nextLevel() {
        this.$router.push('/operational-efficiency');
      },
    },
  };
  </script>
  
  <style scoped>
  .level-container {
    text-align: center;
    padding: 30px;
    max-width: 600px;
    margin: auto;
    background: #f0f4f8;
    border-radius: 10px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    color: #3774e6;
    font-size: 2rem;
  }
  
  .budget-display {
    font-size: 1.2rem;
    color: #3b5d50;
    margin: 20px 0;
    font-weight: bold;
  }
  
  .options-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 20px 0;
  }
  
  .option-btn {
    padding: 12px 20px;
    font-size: 1rem;
    color: #fff;
    background: #3774e6;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s;
  }
  
  .option-btn:hover {
    transform: scale(1.05);
  }
  
  .insight-card {
    margin-top: 20px;
    padding: 15px;
    background: #3774e6;
    color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .next-btn {
    margin-top: 15px;
    padding: 10px 20px;
    font-size: 1rem;
    background: #3b5d50;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s;
  }
  
  .progress-bar {
    height: 10px;
    background: #e0e0e0;
    border-radius: 8px;
    margin-top: 20px;
    overflow: hidden;
  }
  
  .progress {
    height: 100%;
    background: #3774e6;
  }
  </style>
  