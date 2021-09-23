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
        <Table
          class="full-width"
          :isLoading="isLoading"
          :data="data"
          :tableDef="tableDef"
        >
          <template #actions="{ props }">
            <div class="row">
              <q-btn
                class="q-pa-none"
                flat
                round
                color="primary"
                icon="edit"
                @click="editCustomer(props.row)"
              />
            </div>
          </template>
        </Table>
      </div>
    </div>
    <modal
      @close="customerModal = false"
      v-model="customerModal"
      :title="isEditing ? 'Update Customer' : 'Add New Customer'"
    >
      <NewCustomerForm
        ref="customerRef"
        :isEditing="isEditing"
        @closeModal="refreshList"
      />
    </modal>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';
import NewCustomerForm from './NewCustomerForm.vue';
import CustomerService from './CustomerService';
import CustomerModel from './CustomerModel';
import Modal from '../../components/Layout/Modal.vue';
import Column from '../../components/General/Table/ColumnModel';
import TableModel from '../../components/General/Table/TableModel';
import PagedResultModel from '../../interfaces/PagedResultModel';
import Table from '../../components/General/Table/Table.vue';

export default defineComponent({
  components: {
    NewCustomerForm,
    Modal,
    Table,
  },
  setup() {
    const customerModal = ref(false);
    const customerRef = ref();
    const customers = ref<CustomerModel[]>([]);
    const isEditing = ref(false);
    const isLoading = ref(true);
    const data = ref<PagedResultModel<CustomerModel>>(
      new PagedResultModel<CustomerModel>()
    );
    const tableDef = ref<TableModel>(
      new TableModel([
        new Column('name', 'Name', true),
        new Column('phone', 'Phone', true),
        new Column('address', 'Address', true),
        new Column('balance', 'Balance', true),
        new Column('actions', 'Actions', false, true),
      ])
    );

    const getCustomers = async () => {
      try {
        isLoading.value = true;
        customers.value = await CustomerService.getCustomers();
        data.value.results = customers.value;
        isLoading.value = false;
      } catch (error) {
        console.log(error);
      }
    };

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
      data,
      tableDef,
      isLoading,
      customers,
      isEditing,
      refreshList,
      customerRef,
      editCustomer,
      customerModal,
      deleteCustomer,
      newCustomerAction,
    };
  },
});
</script>
