<template>
  <div class="high-demand-product-container">
    <h1>High-Demand, Low-Margin Product</h1>
    <p>Focus on achieving high sales volume while maintaining cost efficiency.</p>

    <!-- Decision Points Section -->
    <div class="decision-points">
      <h2>Production Scaling</h2>
      <p>Increase production to meet high demand. This will impact your budget and production costs.</p>
      <div class="button-group">
        <button @click="investInProduction(5000)" class="decision-btn">
          Invest $5,000 in Scaling Production
        </button>
        <button @click="investInProduction(10000)" class="decision-btn">
          Invest $10,000 in Full Production Scale
        </button>
      </div>

      <h2>Marketing & Sales Strategy</h2>
      <p>Allocate budget to marketing for increased customer reach.</p>
      <div class="button-group">
        <button @click="allocateMarketingBudget(3000)" class="decision-btn">
          Invest $3,000 in Local Marketing
        </button>
        <button @click="allocateMarketingBudget(7000)" class="decision-btn">
          Invest $7,000 in National Marketing
        </button>
      </div>

      <h2>Cost Reduction Options</h2>
      <p>Reduce costs by choosing more efficient suppliers or practices.</p>
      <div class="button-group">
        <button @click="reduceCosts(2000)" class="decision-btn">
          Invest $2,000 in Cost Efficiency
        </button>
        <button @click="reduceCosts(5000)" class="decision-btn">
          Invest $5,000 in Advanced Cost Reduction
        </button>
      </div>
    </div>

    <!-- Feedback Section -->
    <div class="feedback">
      <h3>Current Stats</h3>
      <p><strong>Budget Remaining:</strong> ${{ budget }}</p>
      <p><strong>Sales Volume:</strong> {{ totalSales }}</p>
      <p><strong>Production Capacity:</strong> {{ productionCapacity }}</p>
      <p><strong>Profit Margin:</strong> {{ profitMargin }}%</p>
      <p><strong>Customer Satisfaction:</strong> {{ customerSatisfaction }}%</p>
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
import { mapState, mapActions } from 'vuex';

export default {
  name: 'HighDemandProduct',
  computed: {
    ...mapState(['budget', 'totalSales', 'profitMargin', 'customerSatisfaction', 'productionCapacity']),
  },
  methods: {
    ...mapActions(['updateMetric']),
    addNotification(message) {
      this.notifications.push({ message });
      setTimeout(() => {
        this.notifications.shift();
      }, 5000);
    },
    investInProduction(amount) {
      if (this.budget >= amount) {
        this.updateMetric({ metric: 'budget', amount: -amount });
        this.updateMetric({ metric: 'productionCapacity', amount: amount / 1000 * 50 });
        this.addNotification(`Invested $${amount} in Production Scaling`);
      } else {
        this.addNotification("Not enough budget for this investment.");
      }
    },
    allocateMarketingBudget(amount) {
      if (this.budget >= amount) {
        this.updateMetric({ metric: 'budget', amount: -amount });
        this.updateMetric({ metric: 'totalSales', amount: amount / 1000 * 100 });
        this.updateMetric({ metric: 'customerSatisfaction', amount: 5 });
        this.addNotification(`Invested $${amount} in Marketing & Sales`);
      } else {
        this.addNotification("Not enough budget for this investment.");
      }
    },
    reduceCosts(amount) {
      if (this.budget >= amount) {
        this.updateMetric({ metric: 'budget', amount: -amount });
        this.updateMetric({ metric: 'profitMargin', amount: amount / 1000 * 2 });
        this.addNotification(`Invested $${amount} in Cost Reduction`);
      } else {
        this.addNotification("Not enough budget for this investment.");
      }
    },
    dismissNotification(index) {
      this.notifications.splice(index, 1);
    },
    triggerRandomEvent() {
      const events = [
        {
          name: "Supplier Delay",
          impact: () => {
            this.updateMetric({ metric: 'productionCapacity', amount: -20 });
            this.addNotification("Supplier delay reduced production capacity by 20 units.");
          },
        },
        {
          name: "Competitor Launch",
          impact: () => {
            this.updateMetric({ metric: 'customerSatisfaction', amount: -10 });
            this.addNotification("A competitor's new product launch decreased customer satisfaction by 10%.");
          },
        },
      ];
      const event = events[Math.floor(Math.random() * events.length)];
      event.impact();
    },
  },
  data() {
    return {
      notifications: [],
    };
  },
  mounted() {
    setInterval(this.triggerRandomEvent, 10000); // Trigger events periodically
  },
};
 

</script>

<style scoped>
.high-demand-product-container {
  /* Your existing styling... */
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
