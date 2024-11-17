<template>
    <div>
      <h2>Target Audience Profiling</h2>
      <p>Identify specific characteristics of your audience to tailor marketing and product decisions.</p>
      <button @click="profileAudience('basic')">Basic Profiling - $1000</button>
      <button @click="profileAudience('detailed')">Detailed Profiling - $3000</button>
  
      <p v-if="profileOutcome">{{ profileOutcome }}</p>
      <button v-if="profileOutcome" @click="nextLevel">Proceed to Product Differentiation</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        budget: 8500,
        profileOutcome: '',
      };
    },
    methods: {
      profileAudience(level) {
        if (level === 'basic' && this.budget >= 1000) {
          this.budget -= 1000;
          this.profileOutcome = "Basic Profiling: Identifies general demographics of your target audience.";
        } else if (level === 'detailed' && this.budget >= 3000) {
          this.budget -= 3000;
          this.profileOutcome = "Detailed Profiling: Provides insights into psychographics, purchasing behavior, and preferences.";
        } else {
          alert("Insufficient budget.");
        }
      },
      nextLevel() {
        this.$router.push('/product-differentiation');
      },
    },
  };
  </script>
  