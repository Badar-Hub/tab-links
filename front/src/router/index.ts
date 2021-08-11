import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/brands",
    name: "Brands",
    component: () => import("../domain/brands/BrandList.vue"),
  },
  {
    path: "/categories",
    name: "Categories",
    component: () => import("../domain/categories/CategoryList.vue"),
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("../domain/products/ProductList.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
