import { createStore } from 'vuex';

export default createStore({
  state: {
    rewardPoints: 20,
    achievements: [],
    selectedResearch: '',
  },
  mutations: {
    updateRewardPoints(state, points) {
      state.rewardPoints += points;
    },
    addAchievement(state, achievement) {
      state.achievements.push(achievement);
    },
    setResearchType(state, researchType) {
      state.selectedResearch = researchType;
    },
  },
  actions: {
    updateRewardPoints({ commit }, points) {
      commit('updateRewardPoints', points);
    },
    addAchievement({ commit }, achievement) {
      commit('addAchievement', achievement);
    },
    setResearchType({ commit }, researchType) {
      commit('setResearchType', researchType);
    },
  },
});
