<template>
    <div class="level-summary-container">
      <h2>Level 1 Summary: High-Demand, Low-Margin Product</h2>
      <p>Congratulations! Here’s a breakdown of your performance and rewards earned in this level.</p>
  
      <!-- Final Metrics Display -->
      <div class="metrics-section">
        <h3>Key Metrics</h3>
        <ul>
          <li><strong>Total Sales Volume:</strong> {{ totalSales }} units</li>
          <li><strong>Profit Margin:</strong> {{ profitMargin }}%</li>
          <li><strong>Customer Satisfaction:</strong> {{ customerSatisfaction }}%</li>
          <li><strong>Operational Efficiency:</strong> {{ operationalEfficiency }}%</li>
          <li><strong>Risk Preparedness:</strong> {{ riskPreparedness }}%</li>
        </ul>
      </div>
  
      <!-- Performance Feedback Section -->
      <div class="feedback-section">
        <h3>Performance Feedback</h3>
        <p>{{ feedback }}</p>
      </div>
  
      <!-- Rewards and Achievements -->
      <div class="rewards-section">
        <h3>Rewards Earned</h3>
        <ul>
          <li v-if="rewards.includes('Efficient Planner')">🏆 Efficient Planner - Awarded for balanced budget allocation</li>
          <li v-if="rewards.includes('Customer Champion')">🏆 Customer Champion - Awarded for high customer satisfaction</li>
          <li v-if="rewards.includes('Risk Mitigator')">🏆 Risk Mitigator - Awarded for proactive risk management</li>
        </ul>
      </div>
  
      <!-- Next Steps Button -->
      <button @click="proceedToNextStage" class="next-btn">Proceed to Next Level</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Final metrics calculated based on user choices in Level 1
        totalSales: 8500,
        profitMargin: 12,
        customerSatisfaction: 80,
        operationalEfficiency: 90,
        riskPreparedness: 75,
  
        // Feedback based on performance
        feedback: "Your strategic choices in pricing, customer retention, and risk management led to a strong performance. Maintaining high customer satisfaction while optimizing costs is key to sustaining growth in this business model.",
  
        // Rewards earned based on decision outcomes
        rewards: ['Efficient Planner', 'Customer Champion', 'Risk Mitigator'],
      };
    },
    methods: {
      proceedToNextStage() {
        this.$router.push('/next-level'); // Adjust route as needed for the next level
      },
    },
  };
  </script>
  
  <style scoped>
  .level-summary-container {
    text-align: center;
    padding: 30px;
    max-width: 700px;
    margin: auto;
    background: #f9f9fc;
    border-radius: 10px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    color: #3774e6;
    font-size: 2rem;
  }
  
  .metrics-section, .feedback-section, .rewards-section {
    margin: 20px 0;
    background: #f0f4f8;
    padding: 15px;
    border-radius: 8px;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    font-size: 1.1rem;
    color: #3b5d50;
    margin: 5px 0;
  }
  
  .next-btn {
    margin-top: 20px;
    padding: 12px 30px;
    font-size: 1.1rem;
    color: #fff;
    background: #3774e6;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s;
  }
  
  .next-btn:hover {
    transform: scale(1.05);
  }
  </style>
  