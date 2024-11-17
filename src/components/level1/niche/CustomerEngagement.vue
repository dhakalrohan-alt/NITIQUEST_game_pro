<template>
    <div class="level-container">
      <h2>Customer Engagement and Community Building</h2>
      <p>Select a strategy to foster a loyal customer community around your niche product.</p>
      <button @click="engageCommunity('socialEvents')">Organize Social Events - $1500</button>
      <button @click="engageCommunity('onlineForum')">Create an Online Forum - $1000</button>
  
      <p v-if="communityOutcome">{{ communityOutcome }}</p>
      <button v-if="communityOutcome" @click="nextLevel">Proceed to Inventory Management</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        budget: 6000,
        communityOutcome: '',
      };
    },
    methods: {
      engageCommunity(strategy) {
        if (strategy === 'socialEvents' && this.budget >= 1500) {
          this.budget -= 1500;
          this.communityOutcome = "Social Events: Creates a sense of community and customer loyalty through in-person interactions.";
        } else if (strategy === 'onlineForum' && this.budget >= 1000) {
          this.budget -= 1000;
          this.communityOutcome = "Online Forum: Fosters community by allowing customers to engage with each other online.";
        } else {
          alert("Insufficient budget.");
        }
      },
      nextLevel() {
        this.$router.push('/inventory-management');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Apply similar styling for each component */
  .level-container {
    text-align: center;
    padding: 20px;
    max-width: 600px;
    margin: auto;
    background: #f7f9fc;
    border-radius: 10px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    color: #3774e6;
    font-size: 1.8rem;
  }
  
  button {
    padding: 10px 20px;
    font-size: 1rem;
    color: #fff;
    background: #3774e6;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s;
    margin: 10px;
  }
  
  button:hover {
    transform: scale(1.05);
  }
  </style>
  