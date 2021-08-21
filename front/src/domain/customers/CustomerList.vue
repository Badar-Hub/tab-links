<template>
  <div>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-xs-12 col-sm-6 text-left">
          <h5 class="q-my-sm">Customers List</h5>
        </div>
        <div class="col-xs-12 col-sm-6 text-right">
          <q-btn
            @click="newCustomerAction"
            label="Add New Customer"
            color="primary"
          />
        </div>
      </div>
      <div class="row">
        <div
          v-for="(customer, i) in customers"
          :key="i"
          class="col-xs-12 col-sm-4 q-pa-sm"
        >
          <CustomerCard
            @editAction="editCustomer(customer)"
            @deleteAction="deleteCustomer(customer.id)"
            :customer="customer"
          />
        </div>
      </div>
    </div>
    <NewCustomerModal
      ref="customerRef"
      :isEditing="isEditing"
      v-model="customerModal"
      @close="refreshList"
    />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';
import CustomerCard from './CustomerCard.vue';
import NewCustomerModal from './NewCustomerModal.vue';
import CustomerService from './CustomerService';
import CustomerModel from './CustomerModel';

export default defineComponent({
  components: {
    CustomerCard,
    NewCustomerModal,
  },
  setup() {
    const customerModal = ref(false);
    const customerRef = ref();
    const customers = ref<CustomerModel[]>([]);
    const isEditing = ref(false);

    const getCustomers = async () => {
      try {
        customers.value = await CustomerService.getCustomers();
      } catch (error) {
        console.log(error);
      }
    };

    // const vendors = [
    //   {
    //     id: '50-',
    //     name: 'Hello',
    //     phone: '03321021700',
    //     bankName: 'HBL',
    //     accountNo: '23997980857903',
    //     balance: 500,
    //     address: 'DHA',
    //     createdAt: '12-01-2020',
    //   },
    //   {
    //     id: '50-',
    //     name: 'Hello',
    //     phone: '03321021700',
    //     bankName: 'HBL',
    //     accountNo: '23997980857903',
    //     balance: 500,
    //     address: 'DHA',
    //     createdAt: '12-01-2020',
    //   },
    // ];

    const newCustomerAction = () => {
      isEditing.value = false;
      customerRef.value.resetForm();
      customerModal.value = true;
    };

    const deleteCustomer = async (id: string) => {
      console.log(`Delete Brand ${id}`);
    };

    const editCustomer = async (customer: CustomerModel) => {
      isEditing.value = true;
      customerRef.value.setToEdit(customer);
      customerModal.value = true;
    };

    const refreshList = async () => {
      console.log('reset-list');
      getCustomers();
      customerModal.value = !customerModal.value;
    };

    onMounted(async () => {
      getCustomers();
    });

    return {
      customers,
      customerRef,
      editCustomer,
      isEditing,
      customerModal,
      deleteCustomer,
      refreshList,
      newCustomerAction,
    };
  },
});
</script>
