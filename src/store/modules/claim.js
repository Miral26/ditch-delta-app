export default {
  state: {
    showModal: false,
    selectedClaim: {},
  },
  getters: {
    showClaimModal: (state) => state.showModal,
    getSelectedClaim: (state) => state.selectedClaim,
  },
  mutations: {
    SET_CLAIM_MODAL(state, data) {
      state.showModal = data;
    },
    SET_SELECTED_CLAIM(state, data) {
      state.selectedPatient = data;
    },
  },
  actions: {
    setClaimModal({ commit }, data) {
      commit("SET_CLAIM_MODAL", data);
    },
    setSelectedClaim({ commit }, data) {
      commit("SET_SELECTED_CLAIM", data);
    },
  },
};
