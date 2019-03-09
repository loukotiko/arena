<template>
  <div>
    <h1>Connexion</h1>
    <p>Vous pouvez vous connecter au jeu en cliquant sur le lien ci-dessous. Aucune inscription n'est requise.</p>
    <p>Pour le moment, seuls les comptes Google sont autorisés.</p>
    <b-button variant="primary" @click="login">Me connecter avec mon compte Google</b-button>
    <div class="text-danger">{{error}}</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "LoginPage",
  data() {
    return {
      error: null
    };
  },
  methods: {
    ...mapActions("auth", { authLogin: "login" }),
    async login() {
      try {
        await this.authLogin();
      } catch (error) {
        this.error = error;
      }
    }
  }
};
</script>
