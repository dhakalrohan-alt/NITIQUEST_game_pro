<template>
    <div class="level-container">
      <h2>Marketing Budget Allocation</h2>
      <p>Allocate your marketing budget across channels to maximize reach and engagement.</p>
  
      <!-- Budget Display -->
      <p class="budget-display">Remaining Budget: ${{ budget }}</p>
  
      <!-- Marketing Channel Options -->
      <div class="options-container">
        <button @click="allocateBudget('socialMedia')" class="option-btn">
          Social Media - $2000
        </button>
        <button @click="allocateBudget('emailMarketing')" class="option-btn">
          Email Marketing - $1000
        </button>
        <button @click="allocateBudget('paidAds')" class="option-btn">
          Paid Ads - $3000
        </button>
        <button @click="allocateBudget('contentMarketing')" class="option-btn">
          Content Marketing - $1500
        </button>
      </div>
  
      <!-- Display insights after allocation -->
      <div v-if="allocationSummary.length" class="insight-card">
        <h3>Allocation Summary</h3>
        <ul>
          <li v-for="(summary, index) in allocationSummary" :key="index">{{ summary }}</li>
        </ul>
        <button @click="nextLevel" class="next-btn">Proceed to Supplier Negotiation</button>
      </div>
  
      <!-- Progress Bar -->
      <div class="progress-bar">
        <div class="progress" :style="{ width: '70%' }"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        budget: 5000, // Adjusted budget for marketing allocation
        allocationSummary: [], // Stores allocation details
      };
    },
    methods: {
      allocateBudget(channel) {
        let cost, summary;
        if (channel === 'socialMedia') {
          cost = 2000;
          summary = "Social Media: Boosts visibility and engagement, reaching a large audience quickly.";
        } else if (channel === 'emailMarketing') {
          cost = 1000;
          summary = "Email Marketing: Cost-effective for direct communication with existing customers, ideal for promotions.";
        } else if (channel === 'paidAds') {
          cost = 3000;
          summary = "Paid Ads: Increases reach quickly, but is costly and requires careful targeting for effectiveness.";
        } else if (channel === 'contentMarketing') {
          cost = 1500;
          summary = "Content Marketing: Builds brand authority and trust, though it may have slower, long-term benefits.";
        }
  
        if (this.budget >= cost) {
          this.budget -= cost;
          this.allocationSummary.push(summary);
        } else {
          alert("Insufficient budget for this channel.");
        }
      },
      nextLevel() {
        this.$router.push('/supplier-negotiation');
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
  