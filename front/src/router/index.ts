import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/create",
    name: "Create",
    component: () => import('../views/Create.vue')
  },
  {
    path: "/vendors",
    name: "Vendors",
    component: () => import("../domain/vendors/VendorList.vue"),
  },
  {
    path: "/customers",
    name: "Customers",
    component: () => import("../domain/customers/CustomerList.vue"),
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
  {
    path: "/accounts",
    name: "Accounts",
    component: () => import("../domain/accounts/invoiceList.vue"),
  },
  {
    path: "/records",
    name: "Customer Records",
    component: () => import("../views/Records.vue"),
    children: [
      {
        path: ':id',
        name: "Customer Records",
        component: () => import("../domain/accounts/customer/customerRecord.vue"),
      }
    ]
  },
  {
    path: "/invoice",
    name: "Invoice",
    component: () => import("../domain/accounts/invoices/newInvoice.vue"),
  }

];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
