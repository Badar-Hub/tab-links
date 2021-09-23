import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('../views/Create.vue'),
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: () => import('../domain/inventory/InventoryList.vue'),
  },
  {
    path: '/accounts',
    name: 'Accounts',
    component: () => import('../domain/accounts/invoiceList.vue'),
  },
  {
    path: '/setup',
    name: 'Setup',
    component: () => import('../views/Setup.vue'),
    redirect: { name: "Brands" },
    children: [
      {
        path: '/setup/brands',
        name: 'Brands',
        component: () => import('../domain/brands/BrandList.vue'),
      },
      {
        path: '/setup/categories',
        name: 'Categories',
        component: () => import('../domain/categories/CategoryList.vue'),
      },
      {
        path: '/setup/products',
        name: 'Products',
        component: () => import('../domain/products/ProductList.vue'),
      },
      {
        path: '/setup/vendors',
        name: 'Vendors',
        component: () => import('../domain/vendors/VendorList.vue'),
      },
      {
        path: '/setup/customers',
        name: 'Customers',
        component: () => import('../domain/customers/CustomerList.vue'),
      },
    ],
  },
  {
    path: '/invoicing',
    name: 'Invoicing',
    component: () => import('../views/Invoice.vue'),
    redirect: { name: "New Invoice" },
    children: [
      {
        path: '/invoicing/new-invoice',
        name: 'New Invoice',
        component: () => import('../domain/accounts/invoices/newInvoice.vue'),
      },
      {
        path: '/invoicing/sales-return',
        name: 'Sales Return',
        component: () => import('../domain/SalesReturn/SalesReturn.vue'),
      },
    ],
  },
  {
    path: '/accounting',
    name: 'Accounting',
    component: () => import('../views/Records.vue'),
    redirect: { name: "Customer Ledger" },
    children: [
      {
        path: '/accounting/customer-ledger',
        name: 'Customer Ledger',
        component: () => import('../domain/accounts/customer/CustomerInvoices.vue'),
      },
      {
        path: '/accounting/vendor-ledger',
        name: 'Vendor Ledger',
        component: () => import('../domain/accounts/vendor/VendorRecevings.vue'),
      },
      {
        path: '/accounting/customer-ledger/:id',
        name: 'Customer Records',
        component: () =>
          import('../domain/accounts/customer/customerRecord.vue'),
      },
      {
        path: '/accounting/vendors/:id',
        name: 'Vendor Records',
        component: () => import('../domain/accounts/vendor/vendorRecord.vue'),
      },
    ],
  },
  {
    path: '/invoice',
    name: 'Invoice',
    component: () => import('../domain/accounts/invoices/newInvoice.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
