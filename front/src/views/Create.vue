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
    <modal
      @close="addNewProductModal = false"
      title="Add New Product"
      v-model="addNewProductModal"
    >
      <AddNewProduct @closeModal="addNewProductModal = !addNewProductModal" />
    </modal>
    <modal
      @close="addNewCategoryModal = false"
      title="Add New Category"
      v-model="addNewCategoryModal"
    >
      <AddNewCategory @closeModal="addNewCategoryModal = false" />
    </modal>
    <modal
      @close="addNewBrandModal = !addNewBrandModal"
      title="Add New Brand"
      v-model="addNewBrandModal"
    >
      <AddNewBrand @close-modal="addNewBrandModal = false" />
    </modal>
    <modal
      @close="addNewCustomerModal = !addNewCustomerModal"
      title="Add New Customer"
      v-model="addNewCustomerModal"
    >
      <AddNewCustomer v-model="addNewCustomerModal" />
    </modal>
    <modal
      @close="addNewVendorModal = !addNewVendorModal"
      title="Add New Vendor"
      v-model="addNewVendorModal"
    >
      <AddNewVendor @closeModal="addNewVendorModal = false" />
    </modal>
    <modal
      @close="addNewInvoiceModal = !addNewInvoiceModal"
      title="Create New Invoice"
      width="800px"
      v-model="addNewInvoiceModal"
    >
      <AddNewInvoice />
    </modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import AddNewProduct from '../domain/products/NewProductForm.vue';
import AddNewCategory from '../domain/categories/NewCategoryForm.vue';
import AddNewCustomer from '../domain/customers/NewCustomerForm.vue';
import AddNewBrand from '../domain/brands/NewBrandForm.vue';
import AddNewVendor from '../domain/vendors/NewVendorForm.vue';
import AddNewInvoice from '../domain/accounts/invoices/newInvoice.vue';
import Modal from '../components/Layout/Modal.vue';

export default defineComponent({
  components: {
    AddNewCustomer,
    AddNewCategory,
    AddNewProduct,
    AddNewInvoice,
    AddNewVendor,
    AddNewBrand,
    Modal,
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
