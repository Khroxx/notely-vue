import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import NotesView from "@/views/NotesView.vue";
// import HomeView from "@/views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  {
    path: "/",
    name: "notes",
    component: NotesView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
