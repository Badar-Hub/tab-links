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
            class="col-xs-12 col-sm-4 q-pa-sm"
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
                      :to="`/records/vendors/${vendor.name}`"
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
            class="col-xs-12 col-sm-4 q-pa-sm"
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
                  <div class="col-xs-12 col-sm-6 q-px-sm q-pa-sm">
                    <q-btn
                      class="q-px-sm q-mx-auto full-width"
                      color="primary"
                      label="View invoices"
                      :to="`/records/customers/${customer.name}`"
                    />
                  </div>
                  <div class="col-xs-12 col-sm-6 q-px-sm q-my-sm">
                    <q-btn
                      class="q-px-sm q-mx-auto full-width"
                      color="primary"
                      label="Receive Bulk Payment"
                      @click="receiveBulkPaymentAction(customer.name)"
                    />
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
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
    <ReceiveBulkPayment
      :name="selectedCustomer"
      ref="bulkPaymentModalRef"
      v-model="receiveBulkPaymentDialog"
    />
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
import ReceivePayment from './ReceivePayment.vue';
import ReceiveBulkPayment from './receivePayment/receiveBulkPayment.vue';

export default defineComponent({
  components: {
    ReceivePayment,
    ReceiveBulkPayment,
  },
  setup() {
    const invoices = ref<InventoryModel[]>([]);
    const invoiceRef = ref();
    const selectType = ref<string>('');
    const filterName = ref<String>('');
    const vendors = ref<VendorModel[]>([]);
    const customers = ref<CustomerModel[]>([]);
    const receiveBulkPaymentDialog = ref(false);
    const bulkPaymentModalRef = ref();
    const selectedCustomer = ref('');

    const receiveBulkPaymentAction = (name: string) => {
      selectedCustomer.value = name;
      receiveBulkPaymentDialog.value = !receiveBulkPaymentDialog.value;
    };

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
      vendors,
      invoices,
      customers,
      invoiceRef,
      filterName,
      selectType,
      updatePayment,
      selectedCustomer,
      bulkPaymentModalRef,
      receivePaymentAction,
      paymentRecevingModal,
      receiveBulkPaymentAction,
      receiveBulkPaymentDialog,
    };
  },
});
</script>

<style></style>
