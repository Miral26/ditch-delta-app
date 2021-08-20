import { createStore } from "vuex";
import config from "./modules/config";
import claim from "./modules/claim";
import location from "./modules/location";
import card from "./modules/card";
import authData from "./modules/authData";


// Create store
export default createStore({
  modules: {
    config,
    claim,
    location,
    card,
    authData
  },
});
