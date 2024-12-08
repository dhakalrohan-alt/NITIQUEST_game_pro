<template>
  <div class="product-selection-container">
    <!-- Dashboard -->
    <div class="dashboard">
      <div class="player-info">
        <h3>{{ playerName }}</h3>
        <p>Business: {{ businessName }}</p>
        <p>Available Balance: ${{ availableBalance }}</p>
      </div>
    </div>

    <!-- Title -->
    <h1 class="animated-title">Select Your Product</h1>
    <p class="sub-heading">Choose a product type to begin your business journey:</p>

    <!-- Product Options -->
    <div class="product-options">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="product-card"
        :class="{ selected: selectedProduct === product.id }"
        @click="selectProduct(product.id)"
      >
        <h2 class="product-title">{{ product.name }}</h2>
        <p class="product-info"><strong>Risk Level:</strong> {{ product.riskLevel }}</p>
        <p class="product-info"><strong>Reward Potential:</strong> {{ product.rewardPotential }}</p>
        <div class="product-description">
          <p>{{ product.description }}</p>
        </div>
      </div>
    </div>

    <!-- Continue Button -->
    <button @click="showPopup = true" class="modern-btn">Continue to Market Research</button>

    <!-- Popup for Confirmation -->
    <div v-if="showPopup" class="popup">
      <div class="popup-content">
        <h3>Market Research</h3>
        <p>Market research is crucial for understanding your target audience, assessing competition, and making informed business decisions.</p>
        <p>Are you sure you want to proceed to market research?</p>
        <button @click="proceedToNext" class="confirm-btn">Yes</button>
        <button @click="showPopup = false" class="cancel-btn">No</button>
      </div>
    </div>

    <!-- Background Decorations -->
    <div class="background-decorations">
      <div class="decoration-circle"></div>
      <div class="decoration-circle small"></div>
      <div class="decoration-circle large"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playerName: localStorage.getItem("playerName") || "Player", // Fetch from localStorage
      businessName: localStorage.getItem("businessName") || "Your Business", // Fetch from localStorage
      availableBalance: parseInt(localStorage.getItem("availableBalance")) || 50000, // Fetch or default
      selectedProduct: null,
      showPopup: false,
      products: [
        {
          id: 1,
          name: "High-Demand, Low-Margin Product",
          description: "A product with high demand but low profit margin. Requires high volume sales.",
          riskLevel: "Low",
          rewardPotential: "Medium",
        },
        {
          id: 2,
          name: "Niche Product with Dedicated Audience",
          description: "A specialized product with a smaller but more dedicated customer base.",
          riskLevel: "Medium",
          rewardPotential: "High",
        },
        {
          id: 3,
          name: "Innovative Product",
          description: "A highly innovative product with great potential but uncertain demand.",
          riskLevel: "High",
          rewardPotential: "Very High",
        },
      ],
    };
  },
  methods: {
    selectProduct(productId) {
      this.selectedProduct = productId;
    },
    proceedToNext() {
      if (this.selectedProduct) {
        // Store selectedProduct and availableBalance in localStorage
        localStorage.setItem("selectedProduct", this.selectedProduct);
        localStorage.setItem("availableBalance", this.availableBalance);

        // Determine route based on selected product ID
        let route;
        if (this.selectedProduct === 1) {
          route = "MarketResearch";
        } else if (this.selectedProduct === 2) {
          route = "BrandPositioning";
        } else if (this.selectedProduct === 3) {
          route = "FeasibilityStudy";
        }
        this.$router.push({ name: route });
      } else {
        alert("Please select a product before proceeding.");
      }
    },
  },
};
</script>

<style scoped>
/* Container and Layout */
.product-selection-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  background: linear-gradient(135deg, #eef2f3, #8e9eab);
  overflow: hidden;
  position: relative;
  padding: 20px;
}

/* Dashboard */
.dashboard {
  width: 100%;
  display: flex;
  justify-content: center;
  background: #3774e6;
  padding: 15px;
  color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}

.player-info h3 {
  margin: 0;
  font-size: 1.5rem;
}

.player-info p {
  margin: 0;
  font-size: 1.2rem;
}

/* Title and Sub-heading */
.animated-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #2e3d49;
  margin-bottom: 0.5rem;
}

.sub-heading {
  font-size: 1.2rem;
  color: #4a6572;
  margin-bottom: 2rem;
}

/* Product Cards */
.product-options {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.product-card {
  width: 280px;
  padding: 20px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  position: relative;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.product-card.selected {
  border: 2px solid #3774e6;
}

.product-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
}

.product-info {
  font-size: 0.9rem;
  color: #555;
}

.product-description {
  margin-top: 1rem;
  font-size: 0.85rem;
  color: #777;
}

/* Button */
.modern-btn {
  margin-top: 30px;
  padding: 12px 25px;
  font-size: 1.1rem;
  background: linear-gradient(135deg, #3774e6, #3b5d50);
  color: #fff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.modern-btn:hover {
  box-shadow: 0 8px 20px rgba(55, 116, 230, 0.6);
  transform: scale(1.05);
}

/* Popup */
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.popup-content {
  background: #fff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
  max-width: 400px;
}

.confirm-btn,
.cancel-btn {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 25px;
  cursor: pointer;
}

.confirm-btn {
  background: #3774e6;
  color: #fff;
  border: none;
}

.cancel-btn {
  background: #ccc;
  color: #333;
  border: none;
}

/* Background Decorations */
.background-decorations .decoration-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  animation: floatAnimation 6s ease-in-out infinite;
}

.decoration-circle.small {
  width: 100px;
  height: 100px;
  top: 20%;
  left: 10%;
}

.decoration-circle.large {
  width: 200px;
  height: 200px;
  bottom: 10%;
  right: 15%;
}

@keyframes floatAnimation {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
</style>
