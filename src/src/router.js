import Vue from "vue";
import VueRouter from "vue-router";
import { auth } from "./firebase";
import store from "./store";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",

  routes: [
    {
      path: "/",
      component: () => import("@/pages/Home"),
      meta: { auth: true }
    },
    {
      path: "/login",
      component: () => import("@/pages/Login"),
      meta: { auth: false }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const shouldBeAuthed = to.matched.some(route => route.meta.auth === true);
  const shouldNotBeAuthed = to.matched.some(route => route.meta.auth === false);

  if (shouldBeAuthed || shouldNotBeAuthed)
    auth.onAuthStateChanged(user => {
      if (!user && shouldBeAuthed)
        next({ path: "/login", query: { redirect: to.fullPath } });
      else if (user && shouldNotBeAuthed) next("/");
      else next();
    });
  else next();
});

export default router;
