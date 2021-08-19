<template>
  <q-card>
    <q-card-section>
      <div class="row">
        <div class="col-xs-12">
          <h6 class="q-my-sm">Name: {{ invoice.name }}</h6>
        </div>
        <div class="col-xs-12">
          <h6 class="q-my-sm">InvoiceNo: {{ invoice.invoiceNo }}</h6>
        </div>
        <div class="col-xs-12">
          <h6 class="q-my-sm">Total Value: {{ invoice.totalValue }}</h6>
        </div>
        <div class="col-xs-12">
          <h6 class="q-my-sm">Paid Value: {{ invoice.paidValue }}</h6>
        </div>
        <div class="col-xs-12">
          <h6 class="q-my-sm">Paid: {{ invoice.isPaid }}</h6>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import InvoiceModel from "./InvoiceModel"

export default defineComponent({
  props: {
    invoice: {
      type: Object as PropType<InvoiceModel>,
    },
  },
});
</script>

<style></style>
