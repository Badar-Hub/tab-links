<template>
  <Modal width="700px" title="Receive Payment">
    <q-form @submit="onSubmit">
      <div class="row">
        <div class="col-xs-12 col-sm-6 q-pa-sm">
          <q-select
            :options="['vendor', 'customer']"
            label="Select Type"
            filled
            v-model="paymentReceving.type"
          />
        </div>
        <div class="col-xs-12 col-sm-6 q-pa-sm">
          <q-select
            v-model="paymentReceving.name"
            :options="['Musa', 'Ilyas']"
            label="Select Vendor"
            filled
          />
        </div>
        <div class="col-xs-12 col-sm-6 q-pa-sm">
          <q-input
            v-model="paymentReceving.invoiceNo"
            label="Invoice No"
            filled
          />
        </div>
        <div class="col-xs-12 col-sm-6 q-pa-sm">
          <q-input
            filled
            v-model="paymentReceving.date"
            mask="date"
            :rules="['date']"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  ref="qDateProxy"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="paymentReceving.date">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div class="col-xs-12 col-sm-6 q-pa-sm">
          <q-input
            v-model="paymentReceving.totalValue"
            disable
            label="Total Value"
            filled
            type="number"
          />
        </div>
        <div class="col-xs-12 col-sm-6 q-pa-sm">
          <q-input
            v-model.number="paymentReceving.paidValue"
            label="Payment"
            type="number"
            filled
          />
        </div>
      </div>
      <div class="row q-my-sm">
        <q-btn
          type="submit"
          label="Submit"
          color="primary"
          class="full-width"
        />
      </div>
    </q-form>
  </Modal>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { useQuasar } from 'quasar';
import Modal from '@/components/General/Modal.vue';

export default defineComponent({
  components: { Modal },
  setup() {
    const $q = useQuasar();
    const paymentReceving = ref({
      _id: '',
      name: '',
      invoiceNo: '',
      date: '2021/05/01',
      totalValue: 0,
      paidValue: 0,
    });

    const updateProduct = (data: any) => {
      paymentReceving.value!._id! = data._id;
      paymentReceving.value.name = data.vendor;
      paymentReceving.value.invoiceNo = data.invoiceNo;
      paymentReceving.value.totalValue = data.products
        .map((product: any) => product.costPrice * product.quantity)
        .reduce((a: number, b: number) => a + b);
      console.log(paymentReceving.value);
    };

    const onSubmit = () => {
      const validate =
        paymentReceving.value.paidValue <= paymentReceving.value.totalValue;
      if (!validate) {
        $q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Payemnt exceeds total value of invoice',
        });
      } else {
        console.log(paymentReceving.value, 'Payment Receving');
      }
    };

    return {
      paymentReceving,
      updateProduct,
      onSubmit,
    };
  },
});
</script>

<style lang="scss">
.close-btn {
  background-color: rgb(0, 0, 0);
  cursor: pointer;
  color: white;
  margin-left: auto;
  border-radius: 50%;
  padding: 7px;
  width: 30px;
  height: 30px;
  p {
    text-align: center;
    margin: -1px 4px;
  }
}
</style>
