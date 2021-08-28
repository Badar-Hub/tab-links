<template>
  <div class="create">
    <div class="row justify-center">
      <div class="col col-xs-12 col-sm-4 text-center q-my-md q-px-sm">
        <q-btn
          @click="addNewProductModal = !addNewProductModal"
          label="Add New Product"
          color="primary"
          class="full-width"
        />
      </div>
      <div class="col col-xs-12 col-sm-4 text-center q-my-md q-px-sm">
        <q-btn
          @click="addNewCategoryModal = !addNewCategoryModal"
          label="Add New Category"
          color="primary"
          class="full-width"
        />
      </div>
      <div class="col col-xs-12 col-sm-4 text-center q-my-md q-px-sm">
        <q-btn
          @click="addNewBrandModal = !addNewBrandModal"
          label="Add New Brand"
          color="primary"
          class="full-width"
        />
      </div>
      <div class="col col-xs-12 col-sm-4 text-center q-my-md q-px-sm">
        <q-btn
          @click="addNewCustomerModal = !addNewCustomerModal"
          label="Add New Customer"
          color="primary"
          class="full-width"
        />
      </div>
      <div class="col col-xs-12 col-sm-4 text-center q-my-md q-px-sm">
        <q-btn
          @click="addNewVendorModal = !addNewVendorModal"
          label="Add New Vendor"
          color="primary"
          class="full-width"
        />
      </div>
      <div class="col col-xs-12 col-sm-4 text-center q-my-md q-px-sm">
        <q-btn
          @click="addNewInvoiceModal = !addNewInvoiceModal"
          label="Add New Invoice"
          color="primary"
          class="full-width"
        />
      </div>
    </div>
    <AddNewProduct v-model="addNewProductModal" />
    <AddNewCategory v-model="addNewCategoryModal" />
    <AddNewBrand v-model="addNewBrandModal" />
    <AddNewCustomer v-model="addNewCustomerModal" />
    <AddNewVendor v-model="addNewVendorModal" />
    <Dialog
      v-model="addNewInvoiceModal"
      title="Create New Invoice"
      width="800px"
    >
      <AddNewInvoice />
    </Dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import AddNewProduct from '../domain/products/NewProductModal.vue';
import AddNewCategory from '../domain/categories/NewCategoryModal.vue';
import AddNewCustomer from '../domain/customers/NewCustomerModal.vue';
import AddNewBrand from '../domain/brands/NewBrandModal.vue';
import AddNewVendor from '../domain/vendors/NewVendorModal.vue';
import AddNewInvoice from '../domain/accounts/invoices/newInvoice.vue';
import Dialog from '../components/General/Modal.vue';

export default defineComponent({
  components: {
    AddNewCustomer,
    AddNewCategory,
    AddNewProduct,
    AddNewInvoice,
    AddNewVendor,
    AddNewBrand,
    Dialog,
  },
  setup() {
    const addNewProductModal = ref(false);
    const addNewCategoryModal = ref(false);
    const addNewBrandModal = ref(false);
    const addNewCustomerModal = ref(false);
    const addNewVendorModal = ref(false);
    const addNewInvoiceModal = ref(false);

    return {
      addNewProductModal,
      addNewCategoryModal,
      addNewCustomerModal,
      addNewBrandModal,
      addNewVendorModal,
      addNewInvoiceModal,
    };
  },
});
</script>
