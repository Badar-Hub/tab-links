import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/vendors",
    name: "Vendors",
    component: () => import("../domain/vendors/VendorList.vue"),
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
  {
    path: "/inventory",
    name: "Inventory",
    component: () => import("../domain/inventory/InventoryList.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
