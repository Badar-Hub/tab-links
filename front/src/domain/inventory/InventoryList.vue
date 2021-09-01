<template>
  <div>
    <div class="row">
      <div class="col-xs-12 col-sm-6 q-pa-md">
        <h5 class="q-my-sm">Inventory List</h5>
      </div>
      <div class="col-xs-12 col-sm-6 q-pa-md text-right">
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
        @close="refreshList"
        v-model="inventoryModal"
        :invoiceNo="invoiceNo"
        :prodId="prodId"
      />
    </div>
    <div v-show="!inventoryModal" class="row">
      <div
        v-for="(item, i) in inventory"
        :key="i"
        class="col-xs-12 col-sm-4 q-pa-md"
      >
        <InventoryCard @editAction="updateAction(item)" :inventory="item" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';
import InventoryCard from './InventoryCard.vue';
import ReceiveProducts from './ReceiveProducts.vue';
import InventoryService from './InventoryService';
import InventoryModel from './InventoryModel';

export default defineComponent({
  components: {
    InventoryCard,
    ReceiveProducts,
  },
  setup() {
    const inventory = ref<InventoryModel[]>([]);
    const inventoryRef = ref();
    const inventoryModal = ref(false);
    const invoiceNo = ref(0);
    const prodId = ref('');

    const receiveProductAction = () => {
      inventoryModal.value = !inventoryModal.value;
      inventoryRef.value.resetForm();
    };

    const getInventoryItems = async () => {
      try {
        inventory.value = await InventoryService.getInventoryList();
        invoiceNo.value = inventory.value.length;
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
      inventory,
      inventoryModal,
      inventoryRef,
      invoiceNo,
      prodId,
      refreshList,
      updateAction,
      receiveProductAction,
    };
  },
});
</script>

<style></style>
