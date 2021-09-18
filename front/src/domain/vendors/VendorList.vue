<template>
  <div>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-xs-12 col-sm-6 text-left">
          <h5 class="q-my-sm">Vendor List</h5>
        </div>
        <div class="col-xs-12 col-sm-6 text-right">
          <q-btn
            @click="newVendorAction"
            label="Add New Vendor"
            color="primary"
          />
        </div>
      </div>
      <div class="row">
        <div
          v-for="(vendor, i) in vendors"
          :key="i"
          class="col-xs-12 col-sm-4 q-pa-sm"
        >
          <VendorCard
            @editAction="editVendor(vendor)"
            @deleteAction="deleteVendor(vendor.id)"
            :vendor="vendor"
          />
        </div>
      </div>
    </div>
    <modal :title="isEditing ? 'Update Vendor' : 'Add New Vendor'">
      <NewVendorForm
        ref="vendorRef"
        :isEditing="isEditing"
        v-model="vendorModal"
        @close="refreshList"
      />
    </modal>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';
import VendorCard from './VendorCard.vue';
import VendorModel from './VendorModel';
import NewVendorForm from './NewVendorForm.vue';
import VendorService from './VendorService';
import Modal from '../../components/Layout/Modal.vue';

export default defineComponent({
  components: {
    VendorCard,
    NewVendorForm,
    Modal,
  },
  setup() {
    const vendorModal = ref(false);
    const vendorRef = ref();
    const vendors = ref<VendorModel[]>([]);
    const isEditing = ref(false);

    const getVendors = async () => {
      try {
        vendors.value = await VendorService.getVendors();
      } catch (error) {
        console.log(error);
      }
    };

    const newVendorAction = () => {
      isEditing.value = false;
      vendorRef.value.resetForm();
      vendorModal.value = true;
    };

    const deleteVendor = async (id: string) => {
      console.log(`Delete Brand ${id}`);
    };

    const editVendor = async (vendor: VendorModel) => {
      isEditing.value = true;
      vendorRef.value.setToEdit(vendor);
      vendorModal.value = true;
    };

    const refreshList = async () => {
      getVendors();
      vendorModal.value = !vendorModal.value;
    };

    onMounted(async () => {
      getVendors();
    });

    return {
      vendors,
      vendorRef,
      editVendor,
      isEditing,
      vendorModal,
      deleteVendor,
      refreshList,
      newVendorAction,
    };
  },
});
</script>

<style lang="scss"></style>
