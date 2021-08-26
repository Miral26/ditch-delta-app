export default {
    state: {
        showModal: false,
        selectedPatient: {},
    },
    getters: {
        showPatientModal: (state) => state.showModal,
        getSelectedPatient: (state) => state.selectedPatient,
    },
    mutations: {
        SET_PATIENT_MODAL(state, data) {
            state.showModal = data;
        },
        SET_SELECTED_PATIENT(state, data) {
            state.selectedPatient = data;
        },
    },
    actions: {
        setPatientModal({ commit }, data) {
            commit("SET_PATIENT_MODAL", data);
        },
        setSelectedPatient({ commit }, data) {
            commit("SET_SELECTED_PATIENT", data);
        },
    },
};
