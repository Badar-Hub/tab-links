<template>
  <Modal width="800" title="Receive Bulk Payment">
    <q-form>
      <div class="row">
        <div class="row full-width">
          <div class="col-xs-4 text-center">
            Select Invoices
          </div>
          <div class="col-xs-4 text-center">
            Invoice No
          </div>
          <div class="col-xs-4 text-center">
            Amount
          </div>
        </div>
        <div class="col-xs-12">
          <hr />
        </div>
        <div
          v-for="(invoice, index) in invoices"
          :key="index"
          class="row full-width"
        >
          <div class="col-xs-4 q-my-auto">
            <q-radio v-model="shape" val="line" label="Select" />
          </div>
          <div class="col-xs-4 text-center q-my-auto">
            {{ invoice.invoiceNo }}
          </div>
          <div class="col-xs-4 text-center q-my-auto">
            Rs. {{ invoice.totalValue }}
          </div>
          <div class="col-xs-12">
            <hr />
          </div>
        </div>
        <div class="col-xs-12 q-my-sm">
          <q-input label="Enter Amount" filled />
        </div>
        <div class="col-xs-12 q-my-sm">
          <q-btn
            class="full-width"
            label="Submit"
            color="primary"
            type="submit"
          />
        </div>
      </div>
    </q-form>
  </Modal>
</template>

<script lang="ts">
import { ref, defineComponent, watch, toRefs } from 'vue';
import Modal from '../../../components/General/Modal.vue';
import AccountsService from '../AccountsService';
export default defineComponent({
  components: { Modal },
  props: {
    name: {
      type: String,
    },
  },
  setup(props) {
    const invoices = ref<any>();
    const { name } = toRefs(props);
    const getInvoices = async () => {
      try {
        if (name.value) {
          invoices.value = await AccountsService.getInvoice(name.value);
        }
        console.log(invoices.value);
      } catch (error) {
        console.log(error);
      }
    };

    watch(
      () => name.value,
      () => getInvoices()
    );

    return {
      invoices,
    };
  },
});
</script>

<style></style>
