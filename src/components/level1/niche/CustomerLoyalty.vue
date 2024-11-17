<template>
    <div class="level-container">
      <h2>Customer Loyalty Programs</h2>
      <p>Choose a loyalty program to build a lasting relationship with your niche customers.</p>
      <button @click="createLoyaltyProgram('points')">Points-Based Rewards - $1200</button>
      <button @click="createLoyaltyProgram('vip')">VIP Membership - $2000</button>
  
      <p v-if="loyaltyOutcome">{{ loyaltyOutcome }}</p>
      <button v-if="loyaltyOutcome" @click="nextLevel">Proceed to Risk Management</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        budget: 2000,
        loyaltyOutcome: '',
      };
    },
    methods: {
      createLoyaltyProgram(type) {
        if (type === 'points' && this.budget >= 1200) {
          this.budget -= 1200;
          this.loyaltyOutcome = "Points-Based Rewards: Encourages repeat purchases by rewarding customer loyalty with points.";
        } else if (type === 'vip' && this.budget >= 2000) {
          this.budget -= 2000;
          this.loyaltyOutcome = "VIP Membership: Offers exclusive benefits and fosters a sense of belonging for loyal customers.";
        } else {
          alert("Insufficient budget.");
        }
      },
      nextLevel() {
        this.$router.push('/risk-management');
      },
    },
  };
  </script>
  