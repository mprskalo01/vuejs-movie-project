import { createRouter, createWebHistory } from "vue-router";
import LatestMovie from "@/components/LatestMovie";
import NavBar from "@/components/NavBar";
import VueFooter from "@/components/VueFooter";
import AboutView from "@/views/AboutView";

const routes = [
  {
    path: "/",
    name: "LatestMovie",
    component: LatestMovie,
  },
  {
    path: "/",
    name: "NavBar",
    component: NavBar,
  },
  {
    path: "/",
    name: "VueFooter",
    component: VueFooter,
  },
  {
    path: "/about",
    name: "AboutView",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
