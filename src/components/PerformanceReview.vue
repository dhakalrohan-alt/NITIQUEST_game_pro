<template>
    <div class="review-container">
      <h2>Performance Review</h2>
      <p>Total Sales: ${{ totalSales }}</p>
      <p>Profit Margin: {{ profitMargin }}%</p>
      <p>Customer Satisfaction: {{ customerSatisfaction }}%</p>
  
      <button @click="nextStage" class="next-btn">Proceed to Next Stage</button>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['totalSales', 'profitMargin', 'customerSatisfaction']),
    },
    methods: {
      ...mapActions(['advanceStage']),
      nextStage() {
        const nextStage = this.determineNextStage();
        this.advanceStage(nextStage);
      },
      determineNextStage() {
        const stageOrder = ['NicheProduct', 'InnovativeProduct', 'CumulativeStrategy', 'EndGameSummary'];
        const currentIndex = stageOrder.indexOf(this.$store.state.currentStage);
        return stageOrder[currentIndex + 1];
      },
    },
  };
  </script>
  
  <style scoped>
  .review-container {
    text-align: center;
    padding: 40px;
    background: rgba(0, 0, 0, 0.7); /* Adds a dark background for better contrast */
    color: #fff; /* Ensures text is visible on the background */
    max-width: 600px;
    margin: 40px auto;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  .next-btn {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #3774e6; /* Button color for visibility */
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s;
  }
  
  .next-btn:hover {
    transform: scale(1.05);
  }
  </style>
  