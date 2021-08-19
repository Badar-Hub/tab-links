<template>
  <div class="row">
    <div class="col-xs-12 col-sm-6 q-pa-md">
      <h5 class="q-my-sm">Invoice List</h5>
    </div>
    <div class="col-xs-12 col-sm-6 q-pa-md text-right">
      <q-btn
        label="Receive Product"
        color="primary"
        @click="receivePaymentAction"
      />
    </div>
  </div>
  <div class="row">
    <div
      v-for="(invoice, i) in invoices"
      :key="i"
      class="col-xs-12 col-sm-4 q-pa-md"
    >
      <InvoiceCard :invoice="invoice" />
    </div>
  </div>
  <ReceiveProducts ref="invoiceRef" v-model="paymentRecevingModal" />
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';
import InvoiceCard from './invoiceCard.vue';
import ReceiveProducts from './ReceiveProducts.vue';

export default defineComponent({
  components: {
    InvoiceCard,
    ReceiveProducts,
  },
  setup() {
    const invoices = ref<InvoiceModel[]>([])
    const invoiceRef = ref();
    const paymentRecevingModal = ref(false);
    const receivePaymentAction = () => {
      console.log(inventoryRef.value);
      paymentRecevingModal.value = true;
    };

    onMounted(async() => {

    })

    return {
      invoices,
      invoiceRef,
      paymentRecevingModal,
      receivePaymentAction,
    };
  },
});
</script>

<style></style>
