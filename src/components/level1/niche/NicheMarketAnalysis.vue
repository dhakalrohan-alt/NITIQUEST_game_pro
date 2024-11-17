<template>
    <div>
      <h2>Niche Market Analysis</h2>
      <p>Conduct market research to understand demand, competitors, and trends within your niche.</p>
      <button @click="conductResearch('basic')">Basic Market Analysis - $1500</button>
      <button @click="conductResearch('inDepth')">In-Depth Market Analysis - $4000</button>
  
      <p v-if="researchOutcome">{{ researchOutcome }}</p>
      <button v-if="researchOutcome" @click="nextLevel">Proceed to Target Audience Profiling</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        budget: 10000,
        researchOutcome: '',
      };
    },
    methods: {
      conductResearch(type) {
        if (type === 'basic' && this.budget >= 1500) {
          this.budget -= 1500;
          this.researchOutcome = "Basic Analysis: Identifies key trends and competitors, but lacks detailed insights.";
        } else if (type === 'inDepth' && this.budget >= 4000) {
          this.budget -= 4000;
          this.researchOutcome = "In-Depth Analysis: Provides a comprehensive view of niche trends, competition, and customer segments.";
        } else {
          alert("Insufficient budget.");
        }
      },
      nextLevel() {
        this.$router.push('/target-audience-profiling');
      },
    },
  };
  </script>
  