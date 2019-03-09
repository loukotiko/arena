import Vue from "vue";
import App from "@/App.vue";
import store from "@/store";
import router from "@/router";
import "@/firebase";

Vue.config.productionTip = false;

import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);

// app.js
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
