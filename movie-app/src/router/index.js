import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView";
import AboutView from "@/views/AboutView";
import ComView from "@/views/ComView";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/about",
    name: "AboutView",
    component: AboutView,
  },
  {
    path: "/comments",
    name: "ComView",
    component: ComView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
