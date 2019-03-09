import Vue from "vue";
import Vuex from "vuex";
import { auth, provider } from "./firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  getters: {
    user() {
      return auth.currentUser;
    }
  },
  actions: {
    async login() {
      await auth.signInWithPopup(provider);
    },
    async logout() {
      await auth.signOut();
    }
  }
});
