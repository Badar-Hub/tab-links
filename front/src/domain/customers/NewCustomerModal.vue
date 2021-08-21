<template>
  <Modal
    width="600px"
    :title="isEditing ? 'Update Customer Information' : 'Add Customer customer'"
  >
    <q-form @submit="onSubmit">
      <div class="row">
        <div class="col-xs-12 col-sm-6 q-px-sm q-my-sm">
          <q-input
            filled
            v-model="customer.name"
            label="Name"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
        </div>
        <div class="col-xs-12 col-sm-6 q-px-sm q-my-sm">
          <q-input
            filled
            v-model="customer.phone"
            label="Mobile No."
            type="number"
            lazy-rules
            mask="###########"
            :rules="[(val) => val > 0 || 'Please enter a valid mobile number']"
          />
        </div>
        <div class="col-xs-12 col-sm-6 q-px-sm q-my-sm">
          <q-input
            filled
            v-model="customer.address"
            label="Address"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
        </div>
        <div class="col-xs-12 col-sm-6 q-px-sm q-my-sm">
          <q-input
            filled
            v-model="customer.bankName"
            label="Bank Details"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
        </div>
        <div class="col-xs-12 col-sm-6 q-px-sm q-my-sm">
          <q-input
            filled
            v-model="customer.accountNo"
            label="Account No."
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
        </div>
        <div class="col-xs-12 col-sm-6 q-px-sm q-my-sm">
          <q-input
            filled
            :disable="isEditing"
            v-model="customer.openingBalance"
            label="Balance."
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
        </div>
        <div class="col-xs-12 q-my-sm">
          <q-btn
            type="submit"
            label="Submit"
            color="primary"
            class="full-width"
          />
        </div>
      </div>
    </q-form>
  </Modal>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import Modal from '../../components/General/Modal.vue';
import CustomerModel from './CustomerModel';
import CustomerService from './CustomerService';

export default defineComponent({
  components: {
    Modal,
  },

  setup(_, context) {
    const customer = ref<CustomerModel>({
      name: '',
      phone: '',
      address: '',
      bankName: '',
      accountNo: '',
      openingBalance: 0,
    });

    const isEditing = ref(false);

    const setToEdit = (customerData: CustomerModel) => {
      isEditing.value = true;
      customer.value._id = customerData._id;
      customer.value.name = customerData.name;
      customer.value.phone = customerData.phone;
      customer.value.address = customerData.address;
      customer.value.bankName = customerData.bankName;
      customer.value.accountNo = customerData.accountNo;
    };

    const resetForm = () => {
      customer.value._id = '';
      customer.value.name = '';
      customer.value.phone = '';
      customer.value.address = '';
      customer.value.bankName = '';
      customer.value.accountNo = '';
      customer.value.openingBalance = 0;
    };

    const onSubmit = async () => {
      try {
        if (customer.value._id) {
          await CustomerService.updateCustomer(customer.value);
        } else {
          console.log('Add New customer');
          await CustomerService.newCustomer(customer.value);
        }
        console.log(customer.value);
        context.emit('close');
        resetForm();
      } catch (error) {
        console.log(error);
      }
    };

    return {
      onSubmit,
      resetForm,
      isEditing,
      setToEdit,
      customer,
    };
  },
});
</script>
