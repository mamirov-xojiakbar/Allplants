import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../pages/home.vue"),
    },
    {
      path: "/shop",
      name: "shop",
      component: () => import("../pages/shop.vue"),
    },
    {
      path: "/shop/:id/:img/:title/:price",
      name: "product",
      component: () => import("../pages/product.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../pages/cart.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
