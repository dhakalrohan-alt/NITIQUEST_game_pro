<template>
    <div>
      <h2>Product Differentiation Strategy</h2>
      <p>Select a unique feature to differentiate your product from competitors.</p>
      <button @click="chooseDifferentiation('quality')">High Quality Focus - $2000</button>
      <button @click="chooseDifferentiation('exclusivity')">Exclusive Design - $2500</button>
  
      <p v-if="differentiationOutcome">{{ differentiationOutcome }}</p>
      <button v-if="differentiationOutcome" @click="nextLevel">Proceed to Pricing Strategy</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        budget: 7500,
        differentiationOutcome: '',
      };
    },
    methods: {
      chooseDifferentiation(type) {
        if (type === 'quality' && this.budget >= 2000) {
          this.budget -= 2000;
          this.differentiationOutcome = "High Quality Focus: Appeals to discerning customers who value craftsmanship.";
        } else if (type === 'exclusivity' && this.budget >= 2500) {
          this.budget -= 2500;
          this.differentiationOutcome = "Exclusive Design: Attracts customers looking for a unique and exclusive product.";
        } else {
          alert("Insufficient budget.");
        }
      },
      nextLevel() {
        this.$router.push('/pricing-strategy');
      },
    },
  };
  </script>
  