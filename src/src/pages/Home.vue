<template>
  <div>
    <h1>Bienvenue {{user.displayName}}</h1>
    <button>Créer une partie</button>
    <button>Rejoindre une partie</button>
    <button>Gérer mes decks</button>
    <button @click="logout">Déconnexion</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapGetters(["user"])
  },
  methods: {
    ...mapActions(["logout"])
  }
};
</script>
