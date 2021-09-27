<template>
  <div v-if="isLoading">
    <q-skeleton class="q-my-md" :height="`${$q.screen.height - 100}px`" />
  </div>
  <div v-else>
    <div class="row">
      <div class="col-xs-12 col-sm-6 q-pa-md">
        <h4 class="q-my-sm">Inventory List</h4>
      </div>
      <div class="col-xs-12 col-sm-6 q-pa-md text-right q-my-auto">
        <q-btn
          :label="!inventoryModal ? `Receive Product` : `Inventory List`"
          color="primary"
          @click="receiveProductAction"
        />
      </div>
    </div>
    <div v-show="inventoryModal">
      <ReceiveProducts
        ref="inventoryRef"
        @refreshList="refreshList"
        v-model="inventoryModal"
        :invoiceNo="invoiceNo"
        :prodId="prodId"
      />
    </div>
    <div v-show="!inventoryModal" class="row">
      <Table
        class="full-width"
        :isLoading="isLoading"
        :data="data"
        :tableDef="tableDef"
      >
        <template #date="{ props }">
          <div class="row q-my-auto">
            <p class="q-my-auto">{{date.formatDate(props.row.date, 'YYYY-MM-DD')}}</p>
          </div>
        </template>
        <template #actions="{ props }">
          <div class="row">
            <q-btn
              class="q-pa-none"
              flat
              round
              color="primary"
              icon="edit"
              @click="updateAction(props.row)"
            />
          </div>
        </template>
      </Table>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';
import ReceiveProducts from './ReceiveProducts.vue';
import InventoryService from './InventoryService';
import InventoryModel from './InventoryModel';
import TableModel from '../../components/General/Table/TableModel';
import PagedResultModel from '../../interfaces/PagedResultModel';
import Column from '../../components/General/Table/ColumnModel';
import Table from '../../components/General/Table/Table.vue';
import {date} from "quasar"

export default defineComponent({
  components: {
    ReceiveProducts,
    Table,
  },
  setup() {
    const inventory = ref<InventoryModel[]>([]);
    const inventoryRef = ref();
    const inventoryModal = ref(false);
    const isLoading = ref(false);
    const invoiceNo = ref(0);
    const prodId = ref('');
    const data = ref<PagedResultModel<InventoryModel>>(
      new PagedResultModel<InventoryModel>()
    );
    const tableDef = ref<TableModel>(
      new TableModel([
        new Column('vendorName', 'Name', true),
        new Column('receivingNumber', 'Invoice Number', true),
        new Column('date', 'Date', true, true),
        new Column('reference', 'Reference', true),
        new Column('totalValue', 'Amount', true),
        new Column('actions', 'Actions', false, true),
      ])
    );

    const receiveProductAction = () => {
      inventoryModal.value = !inventoryModal.value;
      inventoryRef.value.resetForm();
    };

    const getInventoryItems = async () => {
      try {
        isLoading.value = true;
        inventory.value = await InventoryService.getInventoryList();
        data.value.results = inventory.value;
        invoiceNo.value = inventory.value.length;
        isLoading.value = false;
      } catch (error) {
        console.log(error);
      }
    };

    const refreshList = () => {
      getInventoryItems();
      inventoryModal.value = false;
    };

    const updateAction = (item: InventoryModel) => {
      inventoryModal.value = true;
      inventoryRef.value.setToEdit(item);
    };

    onMounted(async () => {
      try {
        getInventoryItems();
      } catch (error) {
        console.log(error);
      }
    });

    return {
      data,
      tableDef,
      inventory,
      isLoading,
      inventoryModal,
      inventoryRef,
      invoiceNo,
      prodId,
      date,
      refreshList,
      updateAction,
      receiveProductAction,
    };
  },
});
</script>

<style></style>
