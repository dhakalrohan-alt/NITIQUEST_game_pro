<template>
  <div class="full-page-container">
    <!-- Chanakya's Insight -->
    <div class="insight-box">
      <!-- Image in Chanakya's Insight -->
      <img src="@/assets/character.gif" alt="Chanakya" class="chanakya-image" />
      
      <h3>Chanakya's Insight</h3>
      <p>{{ chanakyaInsight }}</p>
    </div>

    <!-- Feasibility Study Box -->
    <div class="feasibility-box">
      <!-- Dashboard -->
      <div class="dashboard">
        <div class="player-info">
          <h3>{{ playerName }}</h3>
          <p>Business: {{ businessName }}</p>
          <p>Available Balance: ${{ availableBalance }}</p>
        </div>
        <!-- Information Button -->
        <button class="info-btn" @click="showImportanceModal">Why Feasibility Study?</button>
      </div>

      <!-- Title and Description -->
      <h2>Feasibility Study and Market Validation</h2>
      <p>Select research options to allocate resources and validate your innovative product.</p>

      <!-- Budget Display -->
      <p class="budget-display">Budget Remaining: ${{ availableBalance }}</p>

      <!-- Available Research Options -->
      <div class="research-options">
        <div
          v-for="option in researchOptions"
          :key="option.type"
          class="research-option"
          @click="selectOption(option)"
          :class="{ selected: selectedOptions.includes(option) }"
        >
          <h3>{{ option.label }} - ${{ option.cost }}</h3>
          <p>{{ option.details }}</p>
        </div>
      </div>

      <!-- Selected Options -->
      <div class="selected-options">
        <h3>Selected Options</h3>
        <div v-for="option in selectedOptions" :key="option.type" class="selected-item">
          <p>{{ option.label }} - ${{ option.cost }}</p>
          <button @click="removeOption(option)">Remove</button>
        </div>
      </div>

      <!-- Next Button -->
      <button v-if="selectedOptions.length > 0" @click="proceedToNextLevel" class="next-btn">
        Proceed to Next Level
      </button>
    </div>

    <!-- Modal for Feasibility Study Importance -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <h3>Importance of Feasibility Study</h3>
        <p>
          A feasibility study is critical for assessing the viability of a business idea. 
          It helps identify potential challenges, understand the target market, and evaluate 
          the required resources. This study enables entrepreneurs to make informed decisions, 
          minimizing risks and increasing the likelihood of success.
        </p>
        <button @click="closeModal" class="close-modal-btn">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playerName: localStorage.getItem("playerName") || "Player", // Fetch player name
      businessName: localStorage.getItem("businessName") || "Your Business", // Fetch business name
      availableBalance: parseInt(localStorage.getItem("availableBalance")) || 20000, // Fetch or default balance
      researchOptions: [
        {
          type: "basic",
          label: "Basic Market Research",
          cost: 2000,
          details: "General insights with lower risks.",
        },
        {
          type: "detailed",
          label: "Detailed Market Research",
          cost: 4000,
          details: "Actionable insights with moderate risks.",
        },
        {
          type: "in-depth",
          label: "In-Depth Market Research",
          cost: 6000,
          details: "Comprehensive insights but higher costs.",
        },
      ],
      selectedOptions: [], // Stores selected options
      showModal: false, // Controls the display of the importance modal
      chanakyaInsight: "A wise leader anticipates challenges and makes provisions before they arise. A small effort in preparation today can avert major obstacles tomorrow.",
    };
  },
  methods: {
    selectOption(option) {
      if (this.availableBalance >= option.cost && !this.selectedOptions.includes(option)) {
        this.selectedOptions.push(option); // Add to selected options
        this.availableBalance -= option.cost; // Deduct cost
        localStorage.setItem("availableBalance", this.availableBalance); // Update balance in localStorage
      } else if (this.selectedOptions.includes(option)) {
        alert("This option has already been selected.");
      } else {
        alert("Insufficient budget for this option.");
      }
    },
    removeOption(option) {
      this.selectedOptions = this.selectedOptions.filter((opt) => opt !== option); // Remove from selected options
      this.availableBalance += option.cost; // Refund cost
      localStorage.setItem("availableBalance", this.availableBalance); // Update balance in localStorage
    },
    proceedToNextLevel() {
      // Proceed to the next level with selected options
      this.$router.push({
        name: "StrategicPlanning", // Use the actual route name
        params: {
          selectedOptions: this.selectedOptions,
          remainingBalance: this.availableBalance,
        },
      });
    },
    showImportanceModal() {
      this.showModal = true; // Open the modal
    },
    closeModal() {
      this.showModal = false; // Close the modal
    },
  },
};
</script>

<style scoped>
/* Full Page Layout */
.full-page-container {
  display: flex;
  justify-content: space-between;
  padding: 0;
  height: 100vh; /* Occupy full page height */
  width: 100%;
  margin: 0;
  background: linear-gradient(135deg, #f0f8ff, #d6eaff);
}

/* Chanakya's Insight Box */
.insight-box {
  width: 30%; /* Take up 30% of the page */
  padding: 20px;
  margin-right: 20px;
  background: #fff3cd;
  border: 2px solid #ffeeba;
  border-radius: 10px;
  color: #856404;
  font-size: 1.1rem;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  height: 100%; /* Full height */
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Chanakya Image */
.chanakya-image {
  width: 60%; /* Reduce size of the image */
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px; /* Add some space below the image */
}

/* Feasibility Study Box */
.feasibility-box {
  width: 70%; /* Take up 70% of the page */
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  height: 100%; /* Full height */
  overflow-y: auto;
}

/* Dashboard */
.dashboard {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: linear-gradient(135deg, #4a90e2, #6fb3f0);
  color: white;
  border-radius: 10px;
  margin-bottom: 20px;
}

/* Research Options */
.research-options {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  margin-top: 30px; /* Move options down */
}

.research-option {
  padding: 15px;
  background: #4a90e2;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
  width: 200px;
  text-align: center;
}

.research-option:hover {
  transform: scale(1.1); /* Increase size on hover */
  background-color: #357edd;
}

.research-option.selected {
  background-color: #28a745; /* Green color when selected */
}

/* Selected Options */
.selected-options {
  margin-top: 20px;
  text-align: left;
}

.selected-item {
  margin-bottom: 10px;
}

.selected-item button {
  background: #d9534f;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.selected-item button:hover {
  background: #c9302c;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.close-modal-btn {
  margin-top: 15px;
  padding: 10px 20px;
  background: #d9534f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.close-modal-btn:hover {
  background: #c9302c;
}

/* Other Styles for Buttons */
.info-btn {
  background: #0056b3;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.info-btn:hover {
  background: #003d82;
}

.next-btn {
  margin-top: 15px;
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background: #28a745;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.next-btn:hover {
  background: #1e7c38;
}
</style>
