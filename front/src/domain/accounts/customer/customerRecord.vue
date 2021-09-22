<template>
  <div>
    <h6 v-show="viewInvoiceModal" class="q-my-sm" @click="viewInvoiceModal = !viewInvoiceModal" >Go back to Customer Invoices</h6>
    <div v-show="!viewInvoiceModal" class="row justify-center q-pa-md">
      <Table class="full-width" :data="data" :tableDef="tableDef" :isLoading="isLoading">
        <template #actions="{ props }">
          <q-btn
            @click="viewInvoiceAction(props.row)"
            icon="receipt"
            unelevated
          />
        </template>
      </Table>
      <!-- <q-card class="q-ma-sm" v-for="(invoice, index) in invoices" :key="index">
        <q-card-section>
          <div class="row">
            <div class="col-xs-12">
              <h6 class="q-my-sm">Invoice Number: {{ invoice.invoiceNo }}</h6>
            </div>
            <div class="col-xs-12">
              <h6 class="q-my-sm">Amount: {{ invoice.totalValue }}</h6>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <div class="row">
            <div class="col-xs-12 col-sm-6 q-pa-sm">
              <q-btn
                @click="viewInvoiceAction(invoice)"
                label="View Invoice"
                color="primary"
                class="full-width"
              />
            </div>
            <div class="col-xs-12 col-sm-6 q-pa-sm">
              <q-btn
                @click="$emit('deleteAction')"
                label="Delete"
                color="red"
                class="full-width"
              />
            </div>
          </div>
        </q-card-section>
      </q-card> -->
    </div>
    <div v-show="viewInvoiceModal">
      <NewInvoice ref="viewInvoiceRef" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import NewInvoiceModel from '../NewInvoiceModel';
import AccountsService from '../AccountsService';
import NewInvoice from '../invoices/newInvoice.vue';
import Column from '../../../components/General/Table/ColumnModel';
import Table from '../../../components/General/Table/Table.vue';
import TableModel from '../../../components/General/Table/TableModel';
import PagedResultModel from '../../../interfaces/PagedResultModel';

export default defineComponent({
  components: { NewInvoice, Table },
  setup() {
    const invoices = ref<NewInvoiceModel[]>([]);
    const route = useRoute();
    const viewInvoiceRef = ref();
    const viewInvoiceModal = ref(false);
    const isLoading = ref(true);
    const data = ref<PagedResultModel<NewInvoiceModel>>(
      new PagedResultModel<NewInvoiceModel>()
    );

    const tableDef = ref<TableModel>(
      new TableModel([
        new Column('customerName', 'Name', true),
        new Column('invoiceNo', 'Invoice No.', true),
        new Column('reference', 'Reference', true),
        new Column('totalValue', 'Amount', true),
        new Column('actions', 'Actions', false, true),
      ])
    );

    const viewInvoiceAction = async (invoice: NewInvoiceModel) => {
      try {
        viewInvoiceRef.value.setToEdit(invoice);
        viewInvoiceModal.value = true;
      } catch (error) {
        console.log(error);
      }
    };

    const clicked = (props: any) => {
      console.log(props);
    };

    const getInvoices = async () => {
      try {
        isLoading.value = true;
        invoices.value = await AccountsService.getInvoice(
          route.params.id as string
        );
        data.value.results = invoices.value;
        isLoading.value = false;
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(async () => {
      try {
        getInvoices();
        console.log(invoices);
      } catch (error) {
        console.log(error);
      }
    });

    return {
      data,
      clicked,
      tableDef,
      invoices,
      isLoading,
      viewInvoiceAction,
      viewInvoiceModal,
      viewInvoiceRef,
    };
  },
});
</script>
