const state = {
  themeMode: {
    dark: false,
    light: true,
    semi_dark: false,
    sideMenu: false,
    theme_color: "lite-purple",
    layout: "vertical-sidebar",
    rtl: false,
  },
};

const getters = {
  getThemeMode: (state) => state.themeMode,
  showSideMenu: (state) => state.themeMode.sideMenu,
};

const actions = {
  toggleSideMenu({ commit }) {
    commit("toggleSideMenuBar");
  },
  changeThemeMode({ commit }) {
    commit("toggleThemeMode");
  },
  changeThemeLayout({ commit }, data) {
    commit("toggleThemeLayout", data);
  },
  changeThemeRtl({ commit }) {
    commit("toggleThemeRtl");
  },
};

const mutations = {
  toggleThemeMode: (state) => {
    state.themeMode.dark = !state.themeMode.dark;
  },
  toggleThemeLayout(state, data) {
    state.themeMode.layout = data;
  },
  toggleThemeRtl(state) {
    state.themeMode.rtl = !state.themeMode.rtl;
  },
  toggleSideMenuBar(state) {
    state.themeMode.sideMenu = !state.themeMode.sideMenu;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
