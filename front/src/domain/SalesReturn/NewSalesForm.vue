<template>
  <div class="row">
    <div class="col col-xs-12 col-sm-6 q-pa-sm">
      <q-input label="Return Number" v-model="returns.returnNumber" />
    </div>
    <div class="col col-xs-12 col-sm-6 q-pa-sm">
      <q-select
        label="Customer Name"
        :options="customers"
        v-model="returns.customerName"
      />
    </div>
    <div class="col col-xs-12 col-sm-6 q-pa-sm">
      <q-select
        label="Invoice Number"
        :options="invoices"
        v-model="returns.invoiceNo"
      />
    </div>
    <div class="col col-xs-12 col-sm-6 q-pa-sm">
      <q-input
        label="Reference"
        v-model="returns.reference"
      />
    </div>
    <div class="col col-xs-12 col-sm-6 q-pa-sm q-mt-md">
      <q-btn label="Submit" color="primary" class="full-width" />
    </div>
    <div class="col col-xs-12 col-sm-6 q-pa-sm q-mt-md">
      <q-btn @click="$emit('close')" label="close" color="primary" class="full-width" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import AccountsService from '../accounts/AccountsService';
import InvoiceModel from '../accounts/InvoiceModel';
import CustomerModel from '../customers/CustomerModel';
import CustomerService from '../customers/CustomerService';
import SalesModel from './SalesModel';

export default defineComponent({
  setup() {
    const customers = ref<Array<string>>([]);
    const returns = ref<SalesModel>({
      returnNumber: 0,
      customerName: '',
      invoiceNo: '0',
      reference: '',
      products: [],
      totalValue: 0,
    });
    const invoices = ref<Array<string>>([]);

    onMounted(async () => {
      try {
        const invoicesData = await AccountsService.getInvoices();
        invoices.value = invoicesData.map(
          (invoice: InvoiceModel) => invoice.invoiceNo
        );
        const data = await CustomerService.getCustomers();
        customers.value = data.map((customer: CustomerModel) => customer.name);
        console.log(customers.value, 'Data');
      } catch (error) {
        console.log(error);
      }
    });
    return {
      customers,
      invoices,
      returns,
    };
  },
});
</script>

<style></style>
