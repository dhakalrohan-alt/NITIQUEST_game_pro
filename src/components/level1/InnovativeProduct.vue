<template>
    <div class="innovative-product-container">
      <h1>Innovative Product</h1>
      <p>Focus on product innovation, educating the market, and building brand awareness to capture demand.</p>
  
      <!-- Decision Points Section -->
      <div class="decision-points">
        <!-- Research and Development Decision -->
        <h2>Research & Development</h2>
        <p>Invest in product innovation to improve features and stand out from competitors.</p>
        <div class="button-group">
          <button @click="investInRAndD(5000)" class="decision-btn">
            Invest $5,000 in Basic R&D
          </button>
          <button @click="investInRAndD(10000)" class="decision-btn">
            Invest $10,000 in Advanced R&D
          </button>
        </div>
  
        <!-- Market Education Decision -->
        <h2>Market Education</h2>
        <p>Educate the market about the product to improve acceptance and increase demand.</p>
        <div class="button-group">
          <button @click="investInMarketEducation(4000)" class="decision-btn">
            Invest $4,000 in Market Webinars
          </button>
          <button @click="investInMarketEducation(8000)" class="decision-btn">
            Invest $8,000 in Product Demos and Workshops
          </button>
        </div>
  
        <!-- Brand Awareness Decision -->
        <h2>Brand Awareness</h2>
        <p>Build brand presence and capture customer interest through marketing.</p>
        <div class="button-group">
          <button @click="increaseBrandAwareness(3000)" class="decision-btn">
            Invest $3,000 in Social Media Campaigns
          </button>
          <button @click="increaseBrandAwareness(7000)" class="decision-btn">
            Invest $7,000 in Nationwide Marketing
          </button>
        </div>
      </div>
  
      <!-- Feedback Section -->
      <div class="feedback">
        <h3>Current Stats</h3>
        <p><strong>Budget Remaining:</strong> ${{ budget }}</p>
        <p><strong>Innovation Level:</strong> {{ innovationLevel }}%</p>
        <p><strong>Market Awareness:</strong> {{ marketAwareness }}%</p>
        <p><strong>Brand Strength:</strong> {{ brandStrength }}%</p>
        <p><strong>Profit Margin:</strong> {{ profitMargin }}%</p>
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
        budget: 25000, // Starting budget for Innovative Product
        innovationLevel: 30, // Initial innovation level
        marketAwareness: 20, // Initial market awareness
        brandStrength: 30, // Initial brand strength
        profitMargin: 25, // Higher profit margin for innovative product
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
      // Research and Development Investment
      investInRAndD(amount) {
        if (this.budget >= amount) {
          this.budget -= amount;
          this.innovationLevel += amount / 1000 * 4; // Each $1,000 increases innovation by 4%
          this.addNotification(`Invested $${amount} in R&D`);
        } else {
          this.addNotification("Not enough budget for this investment.");
        }
      },
      // Market Education Investment
      investInMarketEducation(amount) {
        if (this.budget >= amount) {
          this.budget -= amount;
          this.marketAwareness += amount / 1000 * 5; // Each $1,000 increases market awareness by 5%
          this.addNotification(`Invested $${amount} in Market Education`);
        } else {
          this.addNotification("Not enough budget for this investment.");
        }
      },
      // Brand Awareness Investment
      increaseBrandAwareness(amount) {
        if (this.budget >= amount) {
          this.budget -= amount;
          this.brandStrength += amount / 1000 * 4; // Each $1,000 increases brand strength by 4%
          this.addNotification(`Invested $${amount} in Brand Awareness`);
        } else {
          this.addNotification("Not enough budget for this investment.");
        }
      },
      // Random Events
      triggerRandomEvent() {
        const events = [
          {
            name: "R&D Setback",
            impact: () => {
              this.innovationLevel -= 5;
              this.addNotification("An R&D setback reduced innovation level by 5%.");
            },
          },
          {
            name: "Positive Market Feedback",
            impact: () => {
              this.marketAwareness += 5;
              this.addNotification("Positive market feedback increased awareness by 5%.");
            },
          },
          {
            name: "Competitor Innovation",
            impact: () => {
              this.brandStrength -= 3;
              this.addNotification("A competitor's innovation decreased brand strength by 3%.");
            },
          }
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
      setInterval(this.triggerRandomEvent, 15000); // Trigger random events every 15 seconds
    },
  };
  </script>
  
  <style scoped>
  .innovative-product-container {
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
  