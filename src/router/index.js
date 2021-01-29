import { createRouter, createWebHistory } from "vue-router";
import Tasks from "../views/Tasks.vue";

const routes = [
  {
    path: "/tasks",
    name: "Tasks",
    component: Tasks,
    alias: "/"
  },
  {
    path: "/new",
    name: "New",
    component: () => import(/* webpackChunkName: "about" */ "../views/New.vue")
  },
  {
    path: "/task/:taskId",
    name: "Task",
    props: true,
    component: () => import(/* webpackChunkName: "about" */ "../views/Task.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active"
});

export default router;
