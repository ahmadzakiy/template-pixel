import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/add",
    name: "add",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddonContent.vue"),
  },
  {
    path: "/category",
    name: "category",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Category.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
