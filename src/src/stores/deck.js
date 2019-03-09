import { firebaseAction } from "vuexfire";
import { db } from "@/firebase";

export default {
  namespaced: true,
  state: {
    decks: []
  },
  getters: {
    decks(state) {
      return state.decks;
    },
    selectedDeck(state) {
      return state.decks.find(deck => deck.selected);
    }
  },
  mutations: {
    decks(state, decks) {
      state.decks = decks;
    }
  },
  actions: {
    firebaseDecks: firebaseAction(({ bindFirebaseRef }) => {
      bindFirebaseRef("decks", db.collection("decks"));
    }),
    selectDeck({ getters }, deck) {
      if (getters.selectedDeck)
        db.collection("decks")
          .doc(getters.selectedDeck.id)
          .set({ selected: false }, { merge: true });

      db.collection("decks")
        .doc(deck)
        .set({ selected: true }, { merge: true });
    }
  }
};
