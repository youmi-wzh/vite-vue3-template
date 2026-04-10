import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/jsx",
    name: "JsxComponent",
    component: () => import("@/views/JsxComponent.jsx"),
    meta: { requiresAuth: false },
  },
  {
    path: "/animation",
    name: "AnimationLab",
    component: () => import("@/views/AnimationLab.vue"),
    meta: { requiresAuth: false },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
