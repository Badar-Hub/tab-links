<template>
  <div class="invoices-list row">
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
            @click="editProduct(props.row)"
          />
        </div>
      </template>
    </Table>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import Column from '../../../components/General/Table/ColumnModel';
import TableModel from '../../../components/General/Table/TableModel';
import PagedResultModel from '../../../interfaces/PagedResultModel';
import Table from '../../../components/General/Table/Table.vue';
import AccountsService from '../AccountsService';
import InvoiceModel from '../InvoiceModel';

export default defineComponent({
  components: {
    Table,
  },
  setup() {
    const isLoading = ref(true);
    const invoices = ref<InvoiceModel[]>([]);
    const data = ref<PagedResultModel<InvoiceModel>>(
      new PagedResultModel<InvoiceModel>()
    );
    const tableDef = ref<TableModel>(
      new TableModel([
        new Column('customerName', 'Name', true),
        new Column('invoiceNo', 'Invoice No', true),
        new Column('totalValue', 'Amount', true),
        new Column('paidValue', 'Amount Paid', true),
        new Column('date', 'Created At', true),
        new Column('actions', 'Actions', false, true),
      ])
    );

    const getInvoices = async () => {
      try {
        isLoading.value = true;
        invoices.value = await AccountsService.getInvoices();
        data.value.results = invoices.value;
        isLoading.value = false;
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(() => {
      getInvoices();
    });

    return {
      data,
      isLoading,
      tableDef,
      getInvoices,
    };
  },
});
</script>

<style lang="scss">
.invoices-list {
}
</style>
