<template>
  <div class="row justify-center q-pa-md">
    <div v-show="!viewInvoice">
      <div v-if="invoices.length">
        <q-card
          class="q-ma-sm"
          v-for="(invoice, index) in invoices"
          :key="index"
        >
          <q-card-section>
            <div class="row">
              <div class="col-xs-12">
                <h6 class="q-my-sm">
                  Receiveing Number: {{ invoice.invoiceNo }}
                </h6>
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
                  @click="getInvoice(invoice._id)"
                  label="View Receiving"
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
      <div v-else>
        <h6 class="q-my-sm">
          There is no Receiving against this vendor
        </h6>
      </div>
    </div>
    <div v-show="viewInvoice">
      <div class="row">
        <q-btn label="Click here to go back to Accounts" to="/accounts" />
      </div>
      <ReceiveProducts
        ref="inventoryRef"
        @close="refreshList"
        v-model="inventoryModal"
        :invoiceNo="invoiceNo"
        :prodId="prodId"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import ReceiveProducts from '../../inventory/ReceiveProducts.vue';
import InventoryService from '../../inventory/InventoryService';
import InventoryModel from '../../inventory/InventoryModel';

export default defineComponent({
  components: {
    ReceiveProducts,
  },
  setup() {
    const newDate = new Date().toJSON();
    const invoices = ref<InventoryModel[]>([]);
    const invoice = ref<InventoryModel | undefined>({
      _id: '',
      vendorName: '',
      warehouse: '',
      receivingNumber: 0,
      date: newDate,
      reference: '',
      products: [],
      totalValue: 0
    });
    const inventoryRef = ref();
    const route = useRoute();
    const viewInvoice = ref(false);

    const getInvoices = async () => {
      try {
        const data = await InventoryService.getInventoryList();
        invoices.value = data.filter(
          (item: InventoryModel) => item.vendorName === route.params.id
        );
      } catch (error) {
        console.log(error);
      }
    };

    const getInvoice = (id: string) => {
      try {
        if (invoices.value) {
          invoice.value = invoices.value.find((invoice) => invoice._id! === id);
        }
        viewInvoice.value = true;
        inventoryRef.value.setToEdit(invoice.value);
        console.log(invoice.value);
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(async () => {
      try {
        getInvoices();
      } catch (error) {
        console.log(error);
      }
    });

    return {
      invoices,
      getInvoice,
      inventoryRef,
      viewInvoice,
    };
  },
});
</script>

<style></style>
