<template>
  <div>
    <div class="row">
      <div class="col-xs-12 col-sm-6 q-pa-md">
        <h5 class="q-my-sm">Accounts</h5>
      </div>
      <div class="col-xs-12 col-sm-6 q-pa-md text-right">
        <q-btn label="Change Type" @click="selectType = ''" color="primary" />
      </div>
    </div>

    <div v-if="selectType" class="row q-px-md">
      <h6 class="q-my-sm">You've selected {{ selectType }} Records</h6>
    </div>

    <div v-if="selectType" class="row">
      <q-input
        label="Click here to find what you're looking for"
        v-model="filterName"
        class="full-width q-pa-md"
        filled
      />
    </div>

    <div v-if="selectType">
      <div v-if="selectType === 'vendor'">
        <div class="row q-ma-md">
          <div
            class="col-xs-12 col-sm-4 q-px-sm"
            v-for="(vendor, index) in vendors"
            :key="index"
          >
            <q-card>
              <q-card-section>
                <div class="row">
                  <div class="col-xs-12">
                    <h6 class="q-ma-sm">Name: {{ vendor.name }}</h6>
                  </div>
                  <div class="col-xs-12">
                    <h6 class="q-ma-sm">Balance: {{ vendor.balance }}</h6>
                  </div>
                  <div class="col-xs-12 q-my-sm">
                    <hr />
                  </div>
                  <div class="col-xs-12 col-sm-6 q-px-sm">
                    <q-btn
                      class="q-px-sm q-mx-auto"
                      color="primary"
                      label="View invoices"
                    />
                  </div>
                  <div class="col-xs-12 col-sm-6 q-px-sm">
                    <q-btn
                      class="q-px-sm q-mx-auto"
                      color="primary"
                      label="Receive Payment"
                    />
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      <div v-else-if="selectType === 'customer'">
        <div class="row q-ma-md">
          <div
            class="col-xs-12 col-sm-4 q-px-sm"
            v-for="(customer, index) in customers"
            :key="index"
          >
            <q-card>
              <q-card-section>
                <div class="row">
                  <div class="col-xs-12">
                    <h6 class="q-ma-sm">Name: {{ customer.name }}</h6>
                  </div>
                  <div class="col-xs-12">
                    <h6 class="q-ma-sm">Balance: {{ customer.balance }}</h6>
                  </div>
                  <div class="col-xs-12 q-my-sm">
                    <hr />
                  </div>
                  <div class="col-xs-12 col-sm-6 q-px-sm">
                    <q-btn
                      class="q-px-sm q-mx-auto"
                      color="primary"
                      label="View invoices"
                    />
                  </div>
                  <div class="col-xs-12 col-sm-6 q-px-sm">
                    <q-btn
                      class="q-px-sm q-mx-auto"
                      color="primary"
                      label="Receive Payment"
                    />
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      <!-- <div
        v-for="(invoice, i) in invoices"
        :key="i"
        class="col-xs-12 col-sm-4 q-pa-md"
      >
        <InvoiceCard @editAction="updatePayment(invoice)" :invoice="invoice" />
      </div> -->
    </div>
    <div v-else>
      <q-select
        v-model="selectType"
        :options="['vendor', 'customer']"
        label="Select Type"
        class="q-pa-md"
      />
    </div>
    <ReceivePayment ref="invoiceRef" v-model="paymentRecevingModal" />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, watch } from 'vue';
import CustomerModel from '../customers/CustomerModel';
import CustomerService from '../customers/CustomerService';
import InventoryModel from '../inventory/InventoryModel';
import InventoryService from '../inventory/InventoryService';
import VendorModel from '../vendors/VendorModel';
import VendorService from '../vendors/VendorService';
// import InvoiceCard from './invoiceCard.vue';
// import InvoiceModel from './InvoiceModel';
import ReceivePayment from './ReceivePayment.vue';

export default defineComponent({
  components: {
    // InvoiceCard,
    ReceivePayment,
  },
  setup() {
    const invoices = ref<InventoryModel[]>([]);
    const invoiceRef = ref();
    const selectType = ref<string>('');
    const filterName = ref<String>('');
    const vendors = ref<VendorModel[]>([]);
    const customers = ref<CustomerModel[]>([]);

    const paymentRecevingModal = ref(false);
    const receivePaymentAction = () => {
      console.log(invoiceRef.value);
      paymentRecevingModal.value = true;
    };

    const updatePayment = async (data: any) => {
      try {
        invoiceRef.value.updateProduct(data);
        paymentRecevingModal.value = true;
      } catch (error) {
        console.log(error);
      }
    };

    const getList = async () => {
      try {
        if (selectType.value === 'vendor') {
          vendors.value = await VendorService.getVendors();
        } else if (selectType.value === 'customer') {
          customers.value = await CustomerService.getCustomers();
        }
      } catch (error) {
        console.log(error);
      }
    };

    watch(
      () => selectType.value,
      () => getList()
    );

    onMounted(async () => {
      invoices.value = await InventoryService.getInventoryList();
    });

    return {
      invoices,
      invoiceRef,
      updatePayment,
      paymentRecevingModal,
      receivePaymentAction,
      selectType,
      filterName,
      vendors,
      customers,
    };
  },
});
</script>

<style></style>
