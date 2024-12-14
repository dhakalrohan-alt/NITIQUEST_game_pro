<template>
  <div class="product-selection-container">
    <h1>Select Your Product</h1>
    <p class="sub-heading">Choose a product type to begin your business journey:</p>

    <!-- Display Player Details and Budget -->
    <div class="dashboard">
      <div class="player-info">
        <h3>{{ playerName }}</h3>
        <p>Business: {{ businessName }}</p>
        <p><strong>Available Balance:</strong> ${{ availableBalance }}</p>
      </div>
      <!-- Reset Game Button -->
      <button @click="resetGame" class="reset-btn">Reset Game</button>
    </div>

    <!-- Product Options -->
    <div class="product-options">
      <div
        v-for="product in products"
        :key="product.id"
        class="product-card"
        :class="{ selected: selectedProduct === product.id }"
        @click="selectProduct(product)"
      >
        <h2>{{ product.name }}</h2>
        <p class="description">{{ product.description }}</p>
        <p><strong>Risk Level:</strong> {{ product.riskLevel }}</p>
        <p><strong>Reward Potential:</strong> {{ product.rewardPotential }}</p>
        <p><strong>Cost:</strong> ${{ product.cost }}</p>
      </div>
    </div>

    <!-- Continue Button -->
    <button
      :disabled="!selectedProduct"
      @click="proceedToNextLevel"
      class="next-btn"
    >
      Continue to Next Level
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playerName: localStorage.getItem("playerName") || "Player", // Fetch from localStorage
      businessName: localStorage.getItem("businessName") || "Your Business", // Fetch from localStorage
      availableBalance: parseInt(localStorage.getItem("availableBalance")) || 50000, // Initial balance
      selectedProduct: null,
      products: [
        {
          id: 1,
          name: "High-Demand, Low-Margin Product",
          description: "A product with high demand but low profit margin. Requires high volume sales.",
          riskLevel: "Low",
          rewardPotential: "Medium",
          cost: 5000,
        },
        {
          id: 2,
          name: "Niche Product with Dedicated Audience",
          description: "A specialized product with a smaller but more dedicated customer base.",
          riskLevel: "Medium",
          rewardPotential: "High",
          cost: 7000,
        },
        {
          id: 3,
          name: "Innovative Product",
          description: "A highly innovative product with great potential but uncertain demand.",
          riskLevel: "High",
          rewardPotential: "Very High",
          cost: 10000,
        },
      ],
    };
  },
  methods: {
    selectProduct(product) {
      if (this.availableBalance >= product.cost) {
        this.selectedProduct = product.id;
        this.availableBalance -= product.cost; // Deduct the cost
        localStorage.setItem("availableBalance", this.availableBalance); // Update localStorage
      } else {
        alert("Insufficient balance to select this product.");
      }
    },
    proceedToNextLevel() {
      if (this.selectedProduct) {
        localStorage.setItem("selectedProduct", this.selectedProduct); // Save selected product
        // Conditional routing based on selected product
        if (this.selectedProduct === 1) {
          this.$router.push("/market-research"); // Redirect to Market Research
        } else if (this.selectedProduct === 2) {
          this.$router.push("/niche-product-level"); // Redirect to Niche Product Level
        } else if (this.selectedProduct === 3) {
          this.$router.push("/feasibility-study"); // Redirect to Feasibility Study
        }
      } else {
        alert("Please select a product before proceeding.");
      }
    },
    resetGame() {
      if (confirm("Are you sure you want to reset the game?")) {
        // Reset balance and selected product
        localStorage.setItem("availableBalance", 50000);
        localStorage.removeItem("selectedProduct");
        this.availableBalance = 50000;
        this.selectedProduct = null;
        alert("Game has been reset to the initial state!");
      }
    },
  },
};
</script>

<style scoped>
/* Full Page Styling */
.product-selection-container {
  text-align: center;
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #e0f7fa, #80deea);
  color: #333;
  font-family: 'Roboto', sans-serif;
}

/* Dashboard Styling */
.dashboard {
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #00796b;
  color: white;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
}

.player-info {
  text-align: left;
}

/* Reset Button */
.reset-btn {
  background: #d32f2f;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.reset-btn:hover {
  background: #b71c1c;
}

/* Product Options Styling */
.product-options {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}

.product-card {
  width: 250px;
  padding: 15px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
}

.product-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
}

.product-card.selected {
  border: 2px solid #28a745;
  background: #c8e6c9;
}

/* Button Styling */
.next-btn {
  margin-top: 20px;
  padding: 12px 30px;
  background: #388e3c;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}

.next-btn:disabled {
  background: #a6a6a6;
  cursor: not-allowed;
}

.next-btn:hover:enabled {
  background: #2e7d32;
}

/* Sub-heading Styling */
.sub-heading {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 20px;
}
</style>
