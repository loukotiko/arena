<template>
  <header>
    <b-navbar toggleable="lg" variant="light">
      <b-navbar-brand href="/">Arena</b-navbar-brand>

      <b-navbar-toggle target="nav_collapse"/>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right v-if="user">
            <template slot="button-content">
              <b-img :src="user.photoURL" width="24" height="24" rounded="circle"/>
            </template>
            <b-dropdown-item href="#" disabled>Profile</b-dropdown-item>
            <b-dropdown-item @click="logout">Déconnexion</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "HeaderBar",
  computed: {
    ...mapGetters("auth", ["user"])
  },
  methods: {
    ...mapActions("auth", ["logout"])
  }
};
</script>
