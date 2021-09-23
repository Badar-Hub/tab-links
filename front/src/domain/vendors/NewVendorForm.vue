<template>
  <Modal
    width="600px"
    :title="isEditing ? 'Update Vendor Information' : 'Add New Vendor'"
  >
    <q-form @submit="onSubmit">
      <div class="row">
        <div class="col-xs-12 col-sm-6 q-px-sm q-my-sm">
          <q-input
            filled
            v-model="vendor.name"
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
            v-model="vendor.phone"
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
            v-model="vendor.address"
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
            v-model="vendor.bankName"
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
            v-model="vendor.accountNo"
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
            v-model="vendor.openingBalance"
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
import { useQuasar } from 'quasar';
import { ref, defineComponent } from 'vue';
import Modal from '../../components/General/Modal.vue';
import VendorModel from './VendorModel';
import VendorService from './VendorService';

export default defineComponent({
  components: {
    Modal,
  },
  emits: ['close-modal'],
  setup(_, context) {
    const $q = useQuasar();
    const vendor = ref<VendorModel>({
      name: '',
      phone: '',
      address: '',
      bankName: '',
      accountNo: '',
      openingBalance: 0,
    });

    const isEditing = ref(false);

    const setToEdit = (vendorData: VendorModel) => {
      isEditing.value = true;
      vendor.value._id = vendorData._id;
      vendor.value.name = vendorData.name;
      vendor.value.phone = vendorData.phone;
      vendor.value.address = vendorData.address;
      vendor.value.bankName = vendorData.bankName;
      vendor.value.accountNo = vendorData.accountNo;
    };

    const resetForm = () => {
      vendor.value._id = '';
      vendor.value.name = '';
      vendor.value.phone = '';
      vendor.value.address = '';
      vendor.value.bankName = '';
      vendor.value.accountNo = '';
      vendor.value.openingBalance = 0;
    };

    const onSubmit = async () => {
      try {
        if (vendor.value._id) {
          await VendorService.updateVendor(vendor.value);
          $q.notify({
            color: 'primary',
            message: 'The Vendor has been successfully updated!',
          });
        } else {
          console.log('Add New Vendor');
          await VendorService.newVendor(vendor.value);
          $q.notify({
            color: 'primary',
            message: 'The Vendor has been successfully created!',
          });
        }
        context.emit('close-modal');
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
      vendor,
    };
  },
});
</script>

<style></style>
