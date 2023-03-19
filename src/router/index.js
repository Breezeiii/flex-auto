import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/layout",
    children: [
      { path: "/layout", component: () => import("@/views/Layout.vue") },
      { path: "/flex", component: () => import("@/views/Flex.vue") }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
