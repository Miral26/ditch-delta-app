import axios from "axios";

export default {
  state: {
    locations: null,
    selectedLocation: 'Australia',
    showModal: false,
  },
  getters: {
    getLocations: (state) => state.locations,
    getSelectedLocation: (state) => state.selectedLocation,
    showLocationModal: (state) => state.showModal
  },
  mutations: {
    SET_LOCATIONS(state, data) {
      state.locations = data;
    },
    SET_SELECTED_LOCATION(state, data) {
      let f = state.locations.find((l) => l.id === data);

      if (f) {
        state.selectedLocation = f;
        localStorage.setItem("delta-app-loc", state.selectedLocation.id);
      }
    },
    SET_LOCATION_MODAL(state, data) {
      state.showModal = data;
    },
  },
  actions: {
    setLocations({ commit }) {
      axios
        .get("locations/")
        .then((response) => {
          if (response.data.locations && response.data.locations.length > 0) {
            commit("SET_LOCATIONS", response.data.locations);

            if (localStorage.getItem("delta-app-loc")) {
              commit(
                "SET_SELECTED_LOCATION",
                localStorage.getItem("delta-app-loc")
              );
            } else {
              commit("SET_SELECTED_LOCATION", response.data.locations[0].id);
            }
          }
        })
        .catch(error => console.log('Error fetching locations: ', error.response));
    },
    setSelectedLocation({ commit }, data) {
      commit("SET_SELECTED_LOCATION", data);
    },
    setLocationModal({ commit }, data) {
      commit("SET_LOCATION_MODAL", data);
    },
  },
};
