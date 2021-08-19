import { createStore } from "vuex";
import config from "./modules/config";
import claim from "./modules/claim";
import location from "./modules/location";
import card from "./modules/card";


// Create store
export default createStore({
  modules: {
    config,
    claim,
    location,
    card,
  },
});
