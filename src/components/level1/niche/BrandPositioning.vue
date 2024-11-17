<template>
  <div class="level-container">
    <h2>Brand Positioning and Storytelling</h2>
    <p>Select a storytelling approach to create a unique brand image for your niche product.</p>
    
    <!-- Storytelling Options -->
    <div class="options-container">
      <div @click="setStory('authentic')" class="option-card" :class="{ selected: selectedOption === 'authentic' }">
        <h3>Authenticity Focus</h3>
        <p>Emphasize the product’s genuine craftsmanship and ethical sourcing.</p>
      </div>
      <div @click="setStory('luxury')" class="option-card" :class="{ selected: selectedOption === 'luxury' }">
        <h3>Luxury Focus</h3>
        <p>Highlight exclusivity, premium quality, and unique features.</p>
      </div>that 
    </div>

    <div v-if="storyOutcome" class="feedback-card">
      <h3>Story Outcome</h3>
      <p>{{ storyOutcome }}</p>
      <button @click="nextLevel" class="next-btn">Proceed to Marketing Strategy</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      budget: 4000,
      storyOutcome: '',
      selectedOption: '',
    };
  },
  methods: {
    setStory(type) {
      if (type === 'authentic') {
        this.storyOutcome = "Authenticity Focus: Connects deeply with eco-conscious and value-driven customers.";
        this.selectedOption = 'authentic';
      } else if (type === 'luxury') {
        this.storyOutcome = "Luxury Focus: Appeals to high-end customers looking for premium, unique items.";
        this.selectedOption = 'luxury';
      }
    },
    nextLevel() {
      this.$router.push('/marketing-strategy');
    },
  },
};
</script>

<style scoped>
.level-container {
  text-align: center;
  padding: 30px;
  max-width: 700px;
  margin: auto;
  background: #f5f7fa;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #3e85d3;
  font-size: 2rem;
}

.options-container {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.option-card {
  padding: 15px;
  width: 45%;
  background: #e0e8f9;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.2s, background 0.3s;
}

.option-card:hover {
  transform: scale(1.05);
}

.selected {
  background: #3e85d3;
  color: white;
  box-shadow: 0px 4px 12px rgba(62, 133, 211, 0.5);
}

.feedback-card {
  margin-top: 20px;
  padding: 15px;
  background: #e0e8f9;
  border-radius: 10px;
  color: #3e85d3;
}

.next-btn {
  margin-top: 15px;
  padding: 10px 20px;
  background: #3e85d3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s;
}

.next-btn:hover {
  transform: scale(1.05);
}
</style>
