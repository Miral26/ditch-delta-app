export default {
    state: {
        showModal: false,
        showPaymentModal: false,
        selectedPatient: {},
    },
    getters: {
        showPatientModal: (state) => state.showModal,
        showPaymentModal: (state) => state.showPaymentModal,
        getSelectedPatient: (state) => state.selectedPatient,
    },
    mutations: {
        SET_PATIENT_MODAL(state, data) {
            state.showModal = data;
        },
        SET_PAYMENT_MODAL(state, data) {
            state.showPaymentModal = data;
        },
        SET_SELECTED_PATIENT(state, data) {
            state.selectedPatient = data;
        },
    },
    actions: {
        setPatientModal({ commit }, data) {
            commit("SET_PATIENT_MODAL", data);
        },
        setPaymentModal({ commit }, data) {
            commit("SET_PAYMENT_MODAL", data);
        },
        setSelectedPatient({ commit }, data) {
            commit("SET_SELECTED_PATIENT", data);
        },
    },
};
