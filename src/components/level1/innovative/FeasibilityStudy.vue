<template>
    <div class="level-container">
      <!-- Title and Description -->
      <h2>Feasibility Study and Market Validation</h2>
      <p>Conduct market research to validate your innovative product's potential.</p>
  
      <!-- Budget Display -->
      <p class="budget-display">Budget Remaining: ${{ budget }}</p>
  
      <!-- Research Options -->
      <div class="research-options">
        <button
          v-for="option in researchOptions"
          :key="option.type"
          @click="selectResearch(option)"
          class="research-btn"
        >
          {{ option.label }} - ${{ option.cost }}
        </button>
      </div>
  
      <!-- Side Info Box -->
      <div v-if="showSideBox" class="side-info-box">
        <h3>Research Details</h3>
        <p><strong>Option Selected:</strong> {{ selectedOption.label }}</p>
        <p><strong>Budget Spent:</strong> ${{ selectedOption.cost }}</p>
        <p><strong>Budget Left:</strong> ${{ budget }}</p>
        <p><strong>Consequences:</strong> {{ selectedOption.consequences }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        budget: 20000, // Starting budget
        selectedOption: {}, // Stores the chosen research option
        showSideBox: false, // Controls the visibility of the side info box
        researchOptions: [
          {
            type: "basic",
            label: "Basic Market Research",
            cost: 5000,
            consequences:
              "Provides general market trends but lacks deep insights into customer preferences.",
          },
          {
            type: "detailed",
            label: "Detailed Market Research",
            cost: 10000,
            consequences:
              "Includes competitor analysis and customer segmentation, providing actionable insights.",
          },
          {
            type: "in-depth",
            label: "In-Depth Market Research",
            cost: 15000,
            consequences:
              "Comprehensive analysis of market trends, demand forecasts, and competitor weaknesses.",
          },
        ],
      };
    },
    methods: {
      selectResearch(option) {
        if (this.budget >= option.cost) {
          this.budget -= option.cost; // Deduct the option's cost from the budget
          this.selectedOption = option; // Set the selected option
          this.showSideBox = true; // Show the side info box
        } else {
          alert("Insufficient budget to select this research option.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Container Styles */
  .level-container {
    text-align: center;
    padding: 30px;
    max-width: 700px;
    margin: auto;
    background: #f9fafc;
    border-radius: 12px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  
  /* Title and Description */
  h2 {
    color: #3774e6;
    font-size: 2rem;
  }
  
  p {
    color: #3b5d50;
    font-size: 1.1rem;
  }
  
  /* Budget Display */
  .budget-display {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 20px;
    color: #0056b3;
  }
  
  /* Research Options */
  .research-options {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 20px 0;
  }
  
  .research-btn {
    padding: 12px 20px;
    font-size: 1rem;
    color: #fff;
    background: #3774e6;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s;
  }
  
  .research-btn:hover {
    transform: scale(1.05);
  }
  
  /* Side Info Box */
  .side-info-box {
    position: fixed;
    top: 20%;
    right: 20px;
    width: 300px;
    padding: 15px;
    background: #eaf7ff;
    border: 1px solid #b3d1ff;
    border-radius: 10px;
    box-shadow: 0px 4px 12px rgba(0, 123, 255, 0.3);
  }
  
  .side-info-box h3 {
    margin: 0;
    color: #0056b3;
    font-size: 1.3rem;
    font-weight: bold;
  }
  
  .side-info-box p {
    margin: 10px 0;
    color: #3b5d50;
    font-size: 1rem;
  }
  </style>
  