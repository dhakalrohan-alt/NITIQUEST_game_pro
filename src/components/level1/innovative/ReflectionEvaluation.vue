<template>
    <div class="level-container">
      <h2>Reflection and Evaluation</h2>
      <p>Review your journey: How far have you come? Have you made a profit, and what skills have you gained?</p>
  
      <!-- Skills Progress -->
      <div class="skills-container">
        <h3>Your Skills Progression</h3>
        <div class="skills">
          <div class="skill-card" v-for="skill in skills" :key="skill.name">
            <h4>{{ skill.name }}</h4>
            <p><strong>Progress:</strong> {{ skill.progress }}%</p>
          </div>
        </div>
      </div>
  
      <!-- Business Performance -->
      <div class="performance-container">
        <h3>Business Performance</h3>
        <p><strong>Total Revenue:</strong> ${{ totalRevenue }}</p>
        <p><strong>Total Expenses:</strong> ${{ totalExpenses }}</p>
        <p><strong>Net Profit/Loss:</strong> ${{ netProfit }}</p>
        <p v-if="netProfit >= 0"><strong>Status:</strong> Profit</p>
        <p v-else><strong>Status:</strong> Loss</p>
      </div>
  
      <!-- Learning Milestones -->
      <div class="learning-container">
        <h3>What You’ve Learned</h3>
        <ul>
          <li v-for="lesson in lessons" :key="lesson">{{ lesson }}</li>
        </ul>
      </div>
  
      <!-- Final Feedback -->
      <div class="final-feedback">
        <h3>Final Feedback</h3>
        <p>{{ finalFeedback }}</p>
        <button @click="completeLevel" class="finish-btn">Complete Reflection</button>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['budget', 'stability', 'overallProgress']), // Access the state for final metrics
    },
    data() {
      return {
        skills: [
          { name: 'Marketing', progress: 80 },
          { name: 'Financial Management', progress: 75 },
          { name: 'Leadership', progress: 85 },
          { name: 'Strategic Decision Making', progress: 90 },
        ],
        totalRevenue: 50000,  // Example revenue
        totalExpenses: 30000, // Example expenses
        netProfit: 20000, // Example profit or loss
        lessons: [
          'Effective marketing strategies lead to higher customer engagement.',
          'Balancing cost and value is key to financial stability.',
          'Leadership and decision-making directly impact company success.',
          'Innovation is crucial for maintaining a competitive edge.',
        ],
        finalFeedback: '',
      };
    },
    methods: {
      completeLevel() {
        if (this.netProfit >= 0) {
          this.finalFeedback = 'Congratulations! You have made a profit and grown your business successfully.';
        } else {
          this.finalFeedback = 'Unfortunately, your business has incurred a loss. Reflect on your decisions and learn from this experience.';
        }
        // Optionally navigate to the final level or end screen
        this.$router.push('/end-screen'); // Navigate to final screen
      },
    },
  };
  </script>
  
  <style scoped>
  .level-container {
    text-align: center;
    padding: 20px;
    max-width: 900px;
    margin: auto;
    background: linear-gradient(135deg, #f8f9fa, #e9ecef);
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    color: #495057;
  }
  
  .skills-container,
  .performance-container,
  .learning-container {
    background: #f8f9fa;
    padding: 15px;
    margin: 20px 0;
    border-radius: 8px;
    border: 1px solid #dee2e6;
  }
  
  .skills {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
  
  .skill-card {
    background: #ffffff;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 15px;
    width: 200px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .final-feedback {
    margin-top: 30px;
  }
  
  .finish-btn {
    padding: 12px 25px;
    background: #28a745;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  