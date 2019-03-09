<template>
  <div>
    <h1>Connexion</h1>
    <button @click="login">Me connecter</button>
    <span class="error">{{error}}</span>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      error: null
    };
  },
  methods: {
    ...mapActions({ authLogin: "login" }),
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
