import { createStore } from "vuex";
import config from "./modules/config";
import claim from "./modules/claim";
import location from "./modules/location";
import card from "./modules/card";
import authData from "./modules/authData";
import users from "./modules/users";
import patients from "./modules/patients";


// Create store
export default createStore({
  modules: {
    config,
    claim,
    location,
    card,
    authData,
    users,
    patients
  },
});
