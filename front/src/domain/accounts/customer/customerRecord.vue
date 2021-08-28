<template>
  <div class="row justify-center q-pa-md">
    <q-card class="q-ma-sm" v-for="(invoice, index) in invoices" :key="index">
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
              @click="$emit('editAction')"
              label="Receive Payment"
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
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import NewInvoiceModel from '../NewInvoiceModel';
import AccountsService from '../AccountsService';

export default defineComponent({
  setup() {
    const invoices = ref<NewInvoiceModel[]>([]);
    const route = useRoute();

    const getInvoices = async () => {
      try {
        invoices.value = await AccountsService.getInvoice(
          route.params.id as string
        );
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
      invoices,
    };
  },
});
</script>

<style></style>
