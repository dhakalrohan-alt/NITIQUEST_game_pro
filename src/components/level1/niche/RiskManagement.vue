<template>
    <div class="level-container">
      <h2>Risk Management and Sustainability</h2>
      <p>Choose a strategy to mitigate risks and promote sustainable practices for your niche product.</p>
      <button @click="manageRisk('sustainability')">Invest in Sustainable Sourcing - $1500</button>
      <button @click="manageRisk('backupSupplier')">Establish a Backup Supplier - $1000</button>
  
      <p v-if="riskOutcome">{{ riskOutcome }}</p>
      <button v-if="riskOutcome" @click="completeLevel">Complete Level</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        budget: 1500,
        riskOutcome: '',
      };
    },
    methods: {
      manageRisk(type) {
        if (type === 'sustainability' && this.budget >= 1500) {
          this.budget -= 1500;
          this.riskOutcome = "Sustainable Sourcing: Reduces environmental impact and appeals to eco-conscious consumers.";
        } else if (type === 'backupSupplier' && this.budget >= 1000) {
          this.budget -= 1000;
          this.riskOutcome = "Backup Supplier: Ensures product availability during supply chain disruptions.";
        } else {
          alert("Insufficient budget.");
        }
      },
      completeLevel() {
        alert("Congratulations! You have completed all sub-levels for the Niche Product option.");
        this.$router.push('/level-summary'); // Navigate to summary or next level
      },
    },
  };
  </script>
  