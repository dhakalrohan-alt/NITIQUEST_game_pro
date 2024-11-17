<template>
    <div>
      <h2>Pricing Strategy</h2>
      <p>Select a pricing strategy that aligns with your target audience's expectations.</p>
      <button @click="setPricing('premium')">Premium Pricing - High Profit Margin</button>
      <button @click="setPricing('value')">Value Pricing - Moderate Profit Margin</button>
  
      <p v-if="pricingOutcome">{{ pricingOutcome }}</p>
      <button v-if="pricingOutcome" @click="nextLevel">Proceed to Customer Engagement</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pricingOutcome: '',
      };
    },
    methods: {
      setPricing(strategy) {
        if (strategy === 'premium') {
          this.pricingOutcome = "Premium Pricing: High-profit margin, appeals to exclusivity-driven customers.";
        } else if (strategy === 'value') {
          this.pricingOutcome = "Value Pricing: More accessible pricing, appeals to budget-conscious customers in the niche.";
        }
      },
      nextLevel() {
        this.$router.push('/customer-engagement');
      },
    },
  };
  </script>
  