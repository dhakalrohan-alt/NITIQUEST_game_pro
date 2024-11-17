<template>
    <div class="niche-product-container">
      <h1>Niche Product with Dedicated Audience</h1>
      <p>Focus on building brand loyalty, high-quality customer service, and effective, targeted marketing.</p>
  
      <!-- Decision Points Section -->
      <div class="decision-points">
        <!-- Customer Engagement Decision -->
        <h2>Customer Engagement</h2>
        <p>Invest in personalized customer engagement to boost loyalty and satisfaction.</p>
        <div class="button-group">
          <button @click="investInCustomerEngagement(4000)" class="decision-btn">
            Invest $4,000 in Customer Engagement
          </button>
          <button @click="investInCustomerEngagement(8000)" class="decision-btn">
            Invest $8,000 in Premium Customer Support
          </button>
        </div>
  
        <!-- Targeted Marketing Decision -->
        <h2>Targeted Marketing</h2>
        <p>Allocate budget to focused marketing channels to reach the dedicated audience effectively.</p>
        <div class="button-group">
          <button @click="allocateMarketingBudget(3000)" class="decision-btn">
            Invest $3,000 in Social Media Ads
          </button>
          <button @click="allocateMarketingBudget(7000)" class="decision-btn">
            Invest $7,000 in Influencer Partnerships
          </button>
        </div>
  
        <!-- Product Quality Improvement Decision -->
        <h2>Product Quality Improvement</h2>
        <p>Enhance product quality to reinforce brand reputation and customer satisfaction.</p>
        <div class="button-group">
          <button @click="improveProductQuality(5000)" class="decision-btn">
            Invest $5,000 in Product Quality
          </button>
          <button @click="improveProductQuality(10000)" class="decision-btn">
            Invest $10,000 in Premium Quality Assurance
          </button>
        </div>
      </div>
  
      <!-- Feedback Section -->
      <div class="feedback">
        <h3>Current Stats</h3>
        <p><strong>Budget Remaining:</strong> ${{ budget }}</p>
        <p><strong>Customer Loyalty:</strong> {{ customerLoyalty }}%</p>
        <p><strong>Brand Reputation:</strong> {{ brandReputation }}%</p>
        <p><strong>Profit Margin:</strong> {{ profitMargin }}%</p>
        <p><strong>Market Reach:</strong> {{ marketReach }}%</p>
      </div>
  
      <!-- Notification Sidebar -->
      <div class="notification-sidebar" v-if="notifications.length">
        <h4>Alerts</h4>
        <div v-for="(notification, index) in notifications" :key="index" class="notification">
          <p>{{ notification.message }}</p>
          <button @click="dismissNotification(index)" class="close-btn">✕</button>
        </div>
      </div>
  
      <!-- Animated Background Circles -->
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
      <div class="circle circle-3"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        budget: 20000, // Starting budget for Niche Product
        customerLoyalty: 50, // Initial customer loyalty
        brandReputation: 60, // Initial brand reputation
        profitMargin: 20, // Higher profit margin for niche product
        marketReach: 20, // Small market reach to start with
        notifications: [] // Array to store notifications
      };
    },
    methods: {
      // Add notification to the sidebar
      addNotification(message) {
        this.notifications.push({ message });
        setTimeout(() => {
          this.notifications.shift();
        }, 5000);
      },
      // Customer Engagement Investment
      investInCustomerEngagement(amount) {
        if (this.budget >= amount) {
          this.budget -= amount;
          this.customerLoyalty += amount / 1000 * 5; // Each $1,000 increases loyalty by 5%
          this.addNotification(`Invested $${amount} in Customer Engagement`);
        } else {
          this.addNotification("Not enough budget for this investment.");
        }
      },
      // Targeted Marketing Investment
      allocateMarketingBudget(amount) {
        if (this.budget >= amount) {
          this.budget -= amount;
          this.marketReach += amount / 1000 * 4; // Each $1,000 increases market reach by 4%
          this.brandReputation += 3; // Small reputation boost from targeted marketing
          this.addNotification(`Invested $${amount} in Targeted Marketing`);
        } else {
          this.addNotification("Not enough budget for this investment.");
        }
      },
      // Product Quality Improvement
      improveProductQuality(amount) {
        if (this.budget >= amount) {
          this.budget -= amount;
          this.brandReputation += amount / 1000 * 5; // Each $1,000 increases reputation by 5%
          this.customerLoyalty += 2; // Quality improvement also boosts loyalty
          this.addNotification(`Invested $${amount} in Product Quality Improvement`);
        } else {
          this.addNotification("Not enough budget for this investment.");
        }
      },
      // Random Events
      triggerRandomEvent() {
        const events = [
          {
            name: "Negative Review",
            impact: () => {
              this.brandReputation -= 5;
              this.addNotification("A negative review has decreased brand reputation by 5%.");
            },
          },
          {
            name: "Competitor Enters Market",
            impact: () => {
              this.customerLoyalty -= 5;
              this.addNotification("A competitor's entry decreased customer loyalty by 5%.");
            },
          },
        ];
        const event = events[Math.floor(Math.random() * events.length)];
        event.impact();
      },
      // Dismiss Notification Manually
      dismissNotification(index) {
        this.notifications.splice(index, 1);
      },
    },
    mounted() {
      setInterval(this.triggerRandomEvent, 12000); // Trigger random events every 12 seconds
    },
  };
  </script>
  
  <style scoped>
  .niche-product-container {
    width: 190vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, #3b5d50, #3774e6, #3b5d50, #000296);
    background-size: 300% 300%;
    animation: diagonalShift 12s linear infinite;
    border-radius: 20px;
    padding: 30px;
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
  
  .decision-points {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  
  .button-group {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin: 10px 0;
  }
  
  .decision-btn {
    padding: 10px 20px;
    background: linear-gradient(135deg, #3774e6, #3b5d50);
    color: white;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.3s ease;
  }
  
  .decision-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
  }
  
  .feedback {
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    max-width: 500px;
    color: #f0f0f0;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
  
  .notification-sidebar {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 300px;
    max-height: 80vh;
    overflow-y: auto;
    background: rgba(0, 0, 0, 0.7);
    color: #f0f0f0;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  }
  
  .notification-sidebar h4 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  
  .notification {
    position: relative;
    background: rgba(255, 255, 255, 0.1);
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .notification p {
    margin: 0;
    font-size: 0.9rem;
  }
  
  .close-btn {
    background: none;
    border: none;
    color: #ff0000;
    font-size: 1.2rem;
    cursor: pointer;
    font-weight: bold;
  }
  </style>
  