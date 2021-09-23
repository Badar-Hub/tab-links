<template>
  <div class="row">
    <div class="col col-xs-12 col-sm-6 q-pa-sm">
      <q-input label="Return Number" v-model="retuen.retuenNumber" />
    </div>
    <div class="col col-xs-12 col-sm-6 q-pa-sm">
      <q-select
        label="Customer Name"
        :options="customers"
        v-model="retuen.retuenNumber"
      />
    </div>
    <div class="col col-xs-12 col-sm-6 q-pa-sm">
      <q-select
        label="Invoice Number"
        :options="invoices"
        v-model="retuen.retuenNumber"
      />
    </div>
    <div class="col col-xs-12 col-sm-6 q-pa-sm">
      <q-select
        label="Customer Name"
        :options="customers"
        v-model="retuen.retuenNumber"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import AccountsService from '../accounts/AccountsService';
import CustomerService from '../customers/CustomerService';

export default defineComponent({
  setup() {
    const customers = ref<Array<string>>([]);
    // const invoices = ref<Array<string>>([]);

    onMounted(async () => {
      try {
        const invoicesData = await AccountsService.getAllInvoices();
        console.log(invoicesData, 'InvoicesData');
        const data = await CustomerService.getCustomers();
        console.log(data, 'Data');
        customers.value = data.map((x) => x.name);
      } catch (error) {
        console.log(error);
      }

      return {
        customers,
      };
    });
  },
});
</script>

<style></style>
