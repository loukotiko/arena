import Vue from "vue";
import Vuex from "vuex";
import { firebaseMutations } from "vuexfire";

import auth from "@/stores/auth";
import deck from "@/stores/deck";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    deck
  },
  mutations: {
    ...firebaseMutations
  }
});
