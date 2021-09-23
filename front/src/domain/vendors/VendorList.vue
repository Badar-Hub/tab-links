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
        <Table
          class="full-width"
          :isLoading="isLoading"
          :data="data"
          :tableDef="tableDef"
        >
          <template #actions="{ props }">
            <div class="row">
              <q-btn
                class="q-pa-none"
                flat
                round
                color="primary"
                icon="edit"
                @click="editVendor(props.row)"
              />
            </div>
          </template>
        </Table>
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
import VendorModel from './VendorModel';
import NewVendorForm from './NewVendorForm.vue';
import VendorService from './VendorService';
import Modal from '../../components/Layout/Modal.vue';
import Column from '../../components/General/Table/ColumnModel';
import TableModel from '../../components/General/Table/TableModel';
import PagedResultModel from '../../interfaces/PagedResultModel';
import Table from '../../components/General/Table/Table.vue';

export default defineComponent({
  components: {
    NewVendorForm,
    Modal,
    Table,
  },
  setup() {
    const vendorModal = ref(false);
    const vendorRef = ref();
    const vendors = ref<VendorModel[]>([]);
    const isEditing = ref(false);
    const isLoading = ref(true);
    const data = ref<PagedResultModel<VendorModel>>(
      new PagedResultModel<VendorModel>()
    );
    const tableDef = ref<TableModel>(
      new TableModel([
        new Column('name', 'Name', true),
        new Column('phone', 'Phone', true),
        new Column('address', 'Address', true),
        new Column('balance', 'Balance', true),
        new Column('actions', 'Actions', false, true),
      ])
    );

    const getVendors = async () => {
      try {
        isLoading.value = true;
        vendors.value = await VendorService.getVendors();
        data.value.results = vendors.value;
        isLoading.value = false;
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
      data,
      vendors,
      tableDef,
      isLoading,
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
