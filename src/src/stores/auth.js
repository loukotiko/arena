import { auth, provider } from "@/firebase";

export default {
  namespaced: true,
  state: {
    user: null
  },
  getters: {
    user(state) {
      return state.user;
    }
  },
  mutations: {
    user(state, user) {
      state.user = user;
    }
  },
  actions: {
    async login() {
      await auth.signInWithPopup(provider);
    },
    async logout() {
      await auth.signOut();
    },
    checkLogin({ commit }) {
      auth.onAuthStateChanged(user => {
        commit("user", user);
      });
    }
  }
};
