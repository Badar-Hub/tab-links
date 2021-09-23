<template>
  <div>
    <div class="row">
      <div class="col col-xs-12 col-sm-6">
        <h6 class="q-my-sm">Sale Returns</h6>
      </div>
      <div class="col col-xs-12 col-sm-6">
        <q-btn color="primary" label="Add New Return" />
      </div>
    </div>
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
            icon="receipt"
            @click="viewReceipt(props.row)"
          />
          <q-btn
            class="q-pa-none"
            flat
            round
            color="primary"
            icon="edit"
            @click="editReturn(props.row)"
          />
        </div>
      </template>
    </Table>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import SalesModel from './SalesModel';
import SalesReturnService from './SalesReturnService';
import Table from '../../components/General/Table/Table.vue';
import Column from '../../components/General/Table/ColumnModel';
import TableModel from '../../components/General/Table/TableModel';
import PagedResultModel from '../../interfaces/PagedResultModel';

export default defineComponent({
  components: {
    Table,
  },
  setup() {
    const isLoading = ref(true);
    const returns = ref<SalesModel[]>([]);
    const data = ref<PagedResultModel<SalesModel>>(
      new PagedResultModel<SalesModel>()
    );
    const tableDef = ref<TableModel>(
      new TableModel([
        new Column('returnNumber', 'Return Number', true),
        new Column('customerName', 'Customer Name', true),
        new Column('invoiceNo', 'Invoice', true),
        new Column('totalValue', 'Ammount', true),
        new Column('reference', 'Reference', true),
        new Column('actions', 'Actions', false, true),
      ])
    );

    const getReturns = async () => {
      try {
        isLoading.value = true;
        returns.value = await SalesReturnService.getReturns();
        data.value.results = returns.value;
        isLoading.value = false;
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(() => {
      getReturns;
    });

    return {
      data,
      tableDef,
      isLoading,
    };
  },
});
</script>

<style></style>
