<template>
  <div class="product-selection-container">
    <h1>Select Your Product</h1>
    <p class="sub_hed">Choose a product type to begin your business journey:</p>

    <div class="product-options">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="product-card"
        :class="{ selected: selectedProduct === product.id }"
        @click="selectProduct(product.id)"
      >
        <h2>{{ product.name }}</h2>
        <p class="des">{{ product.description }}</p>
        <p><strong>Risk Level:</strong> {{ product.riskLevel }}</p>
        <p><strong>Reward Potential:</strong> {{ product.rewardPotential }}</p>
      </div>
    </div>

    <button @click="showPopup = true" class="modern-btn z-10 ">Continue to Market Research</button>

    <div class="circle circle-1"></div>
    <div class="circle circle-2"></div>
    <div class="circle circle-3"></div>

    <!-- Popup for Market Research Confirmation -->
    <div v-if="showPopup" class="popup">
      <div class="popup-content">
        <h3>Market Research</h3>
        <p>Market research is crucial for understanding your target audience, assessing competition, and making informed business decisions. It helps you identify trends, preferences, and potential risks.</p>
        <p>Are you sure you want to proceed to market research?</p>
        <button @click="proceedToNext" class="confirm-btn">Yes</button>
        <button @click="showPopup = false" class="cancel-btn">No</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedProduct: null,
      showPopup: false,
      products: [
        {
          id: 1,
          name: "High-Demand, Low-Margin Product",
          description: "A product with high demand but low profit margin. Requires high volume sales.",
          riskLevel: "Low",
          rewardPotential: "Medium"
        },
        {
          id: 2,
          name: "Niche Product with Dedicated Audience",
          description: "A specialized product with a smaller but more dedicated customer base.",
          riskLevel: "Medium",
          rewardPotential: "High"
        },
        {
          id: 3,
          name: "Innovative Product",
          description: "A highly innovative product with great potential but uncertain demand.",
          riskLevel: "High",
          rewardPotential: "Very High"
        }
      ]
    };
  },
  methods: {
    selectProduct(productId) {
      this.selectedProduct = productId;
    },
    proceedToNext() {
      if (this.selectedProduct) {
        localStorage.setItem('selectedProduct', this.selectedProduct);
        // Determine route based on selected product ID
        let route;
        if (this.selectedProduct === 1 || this.selectedProduct === 3) {
          route = 'MarketResearch';
        } else if (this.selectedProduct === 2) {
          route = 'BrandPositioning';
        }
        
        // Push to the determined route
        this.$router.push({ name: route });
      }
    }
  }
};
</script>


<style scoped>
.product-selection-container {
  width: 190vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #3b5d50, #3774e6, #3b5d50, #000296);
  background-size: 300% 300%;
  animation: diagonalShift 12s linear infinite;
  border-radius: 20px;
  margin: 30px;
}

@keyframes diagonalShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.product-options {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.product-card {
  padding: 15px;
  border: 2px solid #ccc;
  border-radius: 10px;
  width: 280px;
  cursor: pointer;
  transition: transform 0.3s;
  margin: 10px; /* Added margin for spacing between cards */
  padding: 30px;
  border-radius: 15px;
  max-width: 700px;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  color: #f0f0f0;
  font-size: 1.1rem;
}

.product-card.selected {
  border-color: #3b5d50;
  background-color: #0069f3;
  transform: scale(1.05);
}

.product-card:hover {
  transform: scale(1.03);
}

.modern-btn {
  margin-top: 20px;
  padding: 12px 30px;
  background: linear-gradient(135deg, #3774e6, #3b5d50);
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.popup-content {
  background: white;
  border-radius: 10px;
  padding: 20px;
  
  text-align: center;
  max-width: 500px;
  color: black;
}

.confirm-btn,
.cancel-btn {
  margin-top: 20px;
  padding: 12px 30px;
  background: linear-gradient(135deg, #3774e6, #3b5d50);
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}

.confirm-btn {
  background-color: #3b5d50;
  color: white;
}

.cancel-btn {
  background-color: #ccc;
}

h1, .sub_hed {
  font-family: 'Press Start 2P', sans-serif;
  color: #f0f0f0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8), 0px 0px 10px rgba(55, 116, 230, 0.6);
  letter-spacing: 1px;
}

/* Animated circles */
.circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.5;
  animation: float 6s ease-in-out infinite;
}

.circle-1 {
  background: rgba(255, 255, 255, 0.1);
  width: 100px;
  height: 100px;
  top: 10%;
  left: 20%;
  animation-delay: 0s;
}

.circle-2 {
  background: rgba(255, 255, 255, 0.2);
  width: 150px;
  height: 150px;
  top: 50%;
  left: 60%;
  animation-delay: 2s;
}

.circle-3 {
  background: rgba(255, 255, 255, 0.3);
  width: 200px;
  height: 200px;
  top: 30%;
  left: 80%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
</style>
