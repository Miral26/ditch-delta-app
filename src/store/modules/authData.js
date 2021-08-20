export default {
    state: {
        loggedInUser:
            localStorage.getItem("userInfo") != null
                ? JSON.parse(localStorage.getItem("userInfo")).authenticatedUser
                : null,
    },
    getters: {
        loggedInUser: (state) => state.loggedInUser,
    },
    mutations: {
        SET_USER(state, data) {
            state.loggedInUser = data;
        },
        LOG_IN(state, data) {
            state.loggedInUser = data;
            localStorage.setItem('userInfo', JSON.stringify(data))
        },
        SIGN_OUT(state) {
            state.loggedInUser = null;
            localStorage.removeItem('userInfo')
        },
    },
    actions: {
        setUser({ commit }, data) {
            commit("SET_USER", data);
        },
        login({ commit }, data) {
            const user = {
                email: data.email
            }
            commit("LOG_IN", user)
        },
        signOut({ commit }) {
            commit("SIGN_OUT")
        },
    },
};
