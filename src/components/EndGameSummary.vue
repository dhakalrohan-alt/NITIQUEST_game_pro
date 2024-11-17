<template>
    <div class="summary-container">
      <h2>Final Summary</h2>
      <p>Total Score: {{ cumulativeScore }}</p>
      <p>Achievements: <span v-for="achievement in achievements" :key="achievement">{{ achievement }}</span></p>
      <p>Leaderboard Position: #{{ leaderboardPosition }}</p>
  
      <button @click="restartGame" class="restart-btn">Play Again</button>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['cumulativeScore', 'achievements', 'leaderboardPosition']),
    },
    methods: {
      ...mapActions(['resetGame']),
      restartGame() {
        this.resetGame();
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styling for summary and leaderboard */
  .summary-container {
    text-align: center;
    padding: 20px;
  }
  .restart-btn {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
  }
  </style>
  