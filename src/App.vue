<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <!-- Main Content Area with Transition for Dynamic Stages -->
     <br>
     <br>
    <router-view v-slot="{ Component }">
  <transition name="fade">
    <component :is="Component" />
  </transition>
</router-view>

    <!-- Footer Section -->
    <!-- <footer class="bg-[#3b5075] text-white py-4 rounded-t-lg shadow-lg glass-card">
      <p class="text-center text-sm">© 2024 NitiQuest. All rights reserved.</p>
    </footer> -->
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState(['currentStage']), // Access current stage from Vuex
  },
};
</script>

<style scoped>
/* General background and glass effect */
.bg-gray-100 {
  background: linear-gradient(135deg, #b7cbee, #000000);
}
.glass-card {
  background: linear-gradient(135deg, #3774e6, #3b5d50);
  backdrop-filter: blur(10px); /* Optional: glass effect */
  box-shadow: 0 0 20px rgba(55, 116, 230, 0.6);
  padding: 1rem; /* Padding for inner content */
}

/* Fade transition for stage changes */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
