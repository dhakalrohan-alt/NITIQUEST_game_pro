<template>
    <div class="level-container">
      <h2>Inventory Management for Limited Demand</h2>
      <p>Select an inventory strategy that balances stock levels with demand for your niche product.</p>
      <button @click="manageInventory('justInTime')">Just-in-Time Inventory - $1000</button>
      <button @click="manageInventory('safetyStock')">Safety Stock Strategy - $1500</button>
  
      <p v-if="inventoryOutcome">{{ inventoryOutcome }}</p>
      <button v-if="inventoryOutcome" @click="nextLevel">Proceed to Brand Positioning</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        budget: 5000,
        inventoryOutcome: '',
      };
    },
    methods: {
      manageInventory(strategy) {
        if (strategy === 'justInTime' && this.budget >= 1000) {
          this.budget -= 1000;
          this.inventoryOutcome = "Just-in-Time Inventory: Minimizes storage costs by restocking as needed but risks delays.";
        } else if (strategy === 'safetyStock' && this.budget >= 1500) {
          this.budget -= 1500;
          this.inventoryOutcome = "Safety Stock Strategy: Keeps extra stock on hand to avoid stockouts, but requires more capital.";
        } else {
          alert("Insufficient budget.");
        }
      },
      nextLevel() {
        this.$router.push('/brand-positioning');
      },
    },
  };
  </script>
  