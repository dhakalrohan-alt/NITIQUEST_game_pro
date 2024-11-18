import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import './assets/style.css';
import store from './store';

// Import your views
import Home from '../views/Home.vue';
import GameLevel1 from '../views/GameLevel1.vue';
import GameLevel2 from '../views/GameLevel2.vue';
import Introduction from './components/level1/Introduction.vue';
import ProductSelection from './components/level1/ProductSelection.vue';
import MarketResearch from './components/level1/Highdemand/MarketResearch.vue';
import BudgetAllocation from './components/level1/BudgetAllocation.vue';
import GoalSetting from './components/level1/GoalSetting.vue';
import HighDemandProduct from './components/level1/HighDemandProduct.vue'
import CostManagement from './components/level1/CostManagement.vue'; 
import InventoryPlanning from './components/level1/InventoryPlanning.vue';
import PricingStrategy from './components/level1/PricingStrategy.vue';
import SalesVolumeGoals from './components/level1/SalesVolumeGoals.vue';
import CustomerRetention from './components/level1/CustomerRetention.vue';
import MarketingBudgetAllocation from './components/level1/MarketingBudgetAllocation.vue';
import SupplierNegotiation from './components/level1/SupplierNegotiation.vue';
import OperationalEfficiency from './components/level1/OperationalEfficiency.vue';
import RiskManagement from './components/level1/RiskManagement.vue';
import DashboardCom from './components/level1/DashboardCom.vue';
import BrandPositioning from './components/level1/niche/BrandPositioning.vue';
import ContentStrategy from './components/level1/niche/ContentStrategy.vue';
import CustomerEngagement from './components/level1/niche/CustomerEngagement.vue';
import CustomerLoyalty from './components/level1/niche/CustomerLoyalty.vue';
import InventoryManagement from './components/level1/niche/InventoryManagement.vue';
import NicheMarketAnalysis from './components/level1/niche/NicheMarketAnalysis.vue';
import PricingStrategy2 from './components/level1/niche/PricingStrategy.vue';
import ProductDifferentiation from './components/level1/niche/ProductDifferentiation.vue';
import RiskManagement2 from './components/level1/niche/RiskManagement.vue';
import TargetAudienceProfiling from './components/level1/niche/TargetAudienceProfiling.vue';
import FeasibilityStudy from './components/level1/innovative/FeasibilityStudy.vue';
const routes = [
  { path: '/', component: Home },
  { path: '/game-level-1', component: GameLevel1 },
  { path: '/level-2', component: GameLevel2 },
  // Add more game levels here
  {
    path: '/intro',
    name: 'Introduction',
    component: Introduction
  },
  {
    path: '/product-selection',
    name: 'ProductSelection',
    component: ProductSelection
  },
  {
    path: '/market-research',
    name: 'MarketResearch',
    component: MarketResearch
  },
  {
    path: '/budget-allocation',
    name: 'BudgetAllocation',
    component: BudgetAllocation
  },
  {
    path: '/goal-setting',
    name: 'GoalSetting',
    component: GoalSetting
  },
  { path: '/high-demand', name: 'HighDemandProduct', component: HighDemandProduct },
  {path: '/cost-management', name: 'CostManagement', component: CostManagement},
  {path: '/inventory-planning', name: 'InventoryPlanning', component: InventoryPlanning},
  {path:'/pricing-strategy', name: 'PricingStrategy', component: PricingStrategy},
  {path: '/sales-volume-goals', name: 'SalesVolumeGoals', component: SalesVolumeGoals},
  {path: '/customer-retention', name: 'CustomerRetention', component: CustomerRetention},
  {path: '/marketing-budget-allocation', name: 'MarketingBudgetAllocation', component: MarketingBudgetAllocation},
  {path: '/supplier-negotiation', name: 'SupplierNegotiation', component: SupplierNegotiation},
  {path: '/operational-efficiency', name: 'OperationalEfficiency', component: OperationalEfficiency},
  {path: '/risk-management', name: 'RiskManagement', component: RiskManagement},
  {path: '/dashboard', name: 'DashboardCom', component: DashboardCom},
  {path: '/brand-positioning', name: 'BrandPositioning', component: BrandPositioning},
  {path: '/content-strategy', name: 'ContentStrategy', component: ContentStrategy},
  {path: '/customer-engagement', name: 'CustomerEngagement', component: CustomerEngagement},
  {path: '/customer-loyalty', name: 'CustomerLoyalty', component: CustomerLoyalty},
  {path: '/inventory-management2', name: 'InventoryManagement', component: InventoryManagement},
  {path: '/niche-market-analysis', name: 'NicheMarketAnalysis', component: NicheMarketAnalysis},
  {path: '/pricing-strategy2', name: 'PricingStrategy2', component: PricingStrategy2},
  {path: '/product-differentiation', name: 'ProductDifferentiation', component: ProductDifferentiation},
  {path: '/risk-management', name: 'RiskManagement2', component: RiskManagement2},
  {path: '/target-audience-profiling', name: 'TargetAudienceProfiling', component: TargetAudienceProfiling},
  // innovative
  {path: '/feasibility-study' , name: 'FeasibilityStudy', component: FeasibilityStudy},





];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
