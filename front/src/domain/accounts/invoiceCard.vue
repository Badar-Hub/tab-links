<template>
  <q-card>
    <q-card-section>
      <div class="row">
        <div class="col-xs-12">
          <h6 class="q-my-sm">Name: {{ invoice.vendor }}</h6>
        </div>
        <div class="col-xs-12">
          <h6 class="q-my-sm">InvoiceNo: {{ invoice.invoiceNo }}</h6>
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <div class="row">
        <div class="col-xs-12 col-sm-6 q-px-sm">
          <q-btn
            @click="$emit('editAction')"
            label="Receive Payment"
            color="primary"
            class="full-width"
          />
        </div>
        <div class="col-xs-12 col-sm-6 q-px-sm">
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
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import InvoiceModel from './InvoiceModel';

export default defineComponent({
  props: {
    invoice: {
      type: Object as PropType<InvoiceModel>,
    },
  },
  emits: ['editAction', 'deleteAction'],
});
</script>

<style></style>
