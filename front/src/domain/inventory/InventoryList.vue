<template>
  <div>
    <div class="row">
      <div class="col-xs-12 col-sm-6 q-pa-md">
        <h5 class="q-my-sm">Inventory List</h5>
      </div>
      <div class="col-xs-12 col-sm-6 q-pa-md text-right">
        <q-btn
          label="Receive Product"
          color="primary"
          @click="receiveProductAction"
        />
      </div>
    </div>
    <div class="row">
      <div
        v-for="(item, i) in inventory"
        :key="i"
        class="col-xs-12 col-sm-4 q-pa-md"
      >
        <InventoryCard @editAction="updateAction(item)" :inventory="item" />
      </div>
    </div>
    <ReceiveProducts
      @close="refreshList"
      ref="inventoryRef"
      v-model="inventoryModal"
    />
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
    const receiveProductAction = () => {
      inventoryRef.value.resetForm();
      inventoryModal.value = true;
    };

    const getInventoryItems = async () => {
      try {
        inventory.value = await InventoryService.getInventoryList();
      } catch (error) {
        console.log(error);
      }
    };

    const refreshList = () => {
      getInventoryItems();
      inventoryModal.value = false;
    };

    const updateAction = (item: InventoryModel) => {
      inventoryRef.value.setToEdit(item);
      inventoryModal.value = true;
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
      refreshList,
      updateAction,
      receiveProductAction,
    };
  },
});
</script>

<style></style>
