<template>
  <div>
    <div class="row q-my-md">
      <div class="col-xs-12 col-sm-6">
        <h4 class="q-my-sm">Warehouse List</h4>
      </div>
      <div class="col-xs-12 col-sm-6 text-right q-my-auto">
        <q-btn label="Add New Warehouse" @click="newAction" color="primary" />
      </div>
    </div>
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
    <Modal
      @close="warehouseModal = false"
      v-model="warehouseModal"
      title="Add New Warehouse"
    >
      <Warehouse-Form
        @refreshList="getWarehousesList"
        @close="warehouseModal = false"
      />
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import Modal from '../../components/Layout/Modal.vue';
import WarehouseForm from './WarehouseForm.vue';
import WarehouseModel from './WarehouseModel';
import WarehouseService from './WarehouseService';
import Column from '../../components/General/Table/ColumnModel';
import TableModel from '../../components/General/Table/TableModel';
import PagedResultModel from '../../interfaces/PagedResultModel';
import Table from '../../components/General/Table/Table.vue';

export default defineComponent({
  components: { Modal, WarehouseForm, Table },
  setup() {
    const warehouseModal = ref(false);
    const isLoading = ref(false);
    const warehouseList = ref<WarehouseModel[]>([]);
    const data = ref<PagedResultModel<WarehouseModel>>(
      new PagedResultModel<WarehouseModel>()
    );
    const tableDef = ref<TableModel>(
      new TableModel([
        new Column('name', 'Name', true),
        new Column('phone', 'Phone', true),
        new Column('address', 'Address', true),
        new Column('inCharge', 'User', true),
        new Column('actions', 'Actions', false, true),
      ])
    );

    const getWarehousesList = async () => {
      try {
        warehouseModal.value = false;
        isLoading.value = true;
        data.value.results = await WarehouseService.getWarehouses();
        isLoading.value = false;
      } catch (error) {
        console.log(error);
      }
    };

    const newAction = () => {
      warehouseModal.value = true;
    };

    onMounted(() => {
      getWarehousesList();
    });

    return {
      data,
      tableDef,
      newAction,
      isLoading,
      warehouseList,
      warehouseModal,
      getWarehousesList,
    };
  },
});
</script>

<style></style>
