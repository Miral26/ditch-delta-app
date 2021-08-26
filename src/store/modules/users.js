export default {
    state: {
        showModal: false,
        selectedUser: {},
    },
    getters: {
        showUserModal: (state) => state.showModal,
        getSelectedUser: (state) => state.selectedUser,
    },
    mutations: {
        SET_USER_MODAL(state, data) {
            state.showModal = data;
        },
        SET_SELECTED_USER(state, data) {
            state.selectedUser = data;
        },
    },
    actions: {
        setUserModal({ commit }, data) {
            commit("SET_USER_MODAL", data);
        },
        setSelectedUser({ commit }, data) {
            commit("SET_SELECTED_USER", data);
        },
    },
};
