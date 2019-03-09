<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "arena",
  methods: {
    ...mapActions("auth", ["checkLogin"])
  },
  created() {
    this.checkLogin();
  }
};
</script>
