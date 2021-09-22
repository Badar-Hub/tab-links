<template>
  <div class="customer-invoices">
    <Table :data="data" :tableDef="tableDef" :isLoading="isLoading">
        <template #actions="{ props }">
            <q-btn :to="`/accounting/customer-ledger/${props.row.name}`" icon="receipt" unelevated />
        </template>
    </Table>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import Column from '../../../components/General/Table/ColumnModel';
import Table from '../../../components/General/Table/Table.vue';
import TableModel from '../../../components/General/Table/TableModel';
import PagedResultModel from '../../../interfaces/PagedResultModel';
import CustomerModel from '../../customers/CustomerModel';
import CustomerService from '../../customers/CustomerService';

export default defineComponent({
  components: { Table },
  setup() {
    const isLoading = ref(true);
    const customers = ref<CustomerModel[]>([]);
    const data = ref<PagedResultModel<CustomerModel>>(
      new PagedResultModel<CustomerModel>()
    );

    const tableDef = ref<TableModel>(
      new TableModel([
        new Column('name', 'Name', true),
        new Column('phone', 'Phone'),
        new Column('address', 'Address', true),
        new Column('balance', 'Balance', true),
        new Column('actions', 'Actions', false, true),
      ])
    );

    const getInvoices = async () => {
      try {
        isLoading.value = true;
        customers.value = await CustomerService.getCustomers();
        data.value.results = customers.value;
        isLoading.value = false;
      } catch (error) {
        console.log(error);
      }
    };

    const changeRoute = (data: any) => {
      console.log(data);
      
    }

    onMounted(() => {
      getInvoices();
    });

    return {
      data,
      tableDef,
      isLoading,
      changeRoute,
      getInvoices,
    };
  },
});
</script>

<style></style>
