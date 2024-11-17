<template>
  <div class="level-container">
    <h2>Marketing and Content Strategy</h2>
    <p>Select a marketing approach to best promote your niche product to the target audience.</p>

    <div class="options-container">
      <div @click="chooseStrategy('socialMedia')" class="option-card" :class="{ selected: selectedOption === 'socialMedia' }">
        <h3>Social Media Campaign</h3>
        <p>Reach a large audience through engaging visual content.</p>
      </div>
      <div @click="chooseStrategy('blog')" class="option-card" :class="{ selected: selectedOption === 'blog' }">
        <h3>Blog and SEO Content</h3>
        <p>Build authority and improve search visibility with valuable blog content.</p>
      </div>
    </div>

    <div v-if="strategyOutcome" class="feedback-card">
      <h3>Strategy Outcome</h3>
      <p>{{ strategyOutcome }}</p>
      <button @click="nextLevel" class="next-btn">Proceed to Customer Loyalty</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      strategyOutcome: '',
      selectedOption: '',
    };
  },
  methods: {
    chooseStrategy(type) {
      if (type === 'socialMedia') {
        this.strategyOutcome = "Social Media Campaign: Quickly reaches a large audience with visual appeal, ideal for products that benefit from visual branding.";
        this.selectedOption = 'socialMedia';
      } else if (type === 'blog') {
        this.strategyOutcome = "Blog and SEO Content: Builds long-term authority and increases search visibility over time, which is beneficial for niche, informational content.";
        this.selectedOption = 'blog';
      }
    },
    nextLevel() {
      this.$router.push('/customer-loyalty');
    },
  },
};
</script>

<style scoped>
/* Use previous styles with slight variations for the buttons and feedback cards */
.option-card {
  padding: 15px;
  width: 45%;
  background: #f5e0f9;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.2s, background 0.3s;
}

.option-card:hover {
  transform: scale(1.05);
}

.selected {
  background: #d33e85;
  color: white;
  box-shadow: 0px 4px 12px rgba(211, 62, 133, 0.5);
}

.feedback-card {
  margin-top: 20px;
  padding: 15px;
  background: #f5e0f9;
  border-radius: 10px;
  color: #d33e85;
}
</style>
