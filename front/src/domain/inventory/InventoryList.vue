<template>
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
      <InventoryCard :inventory="item" />
    </div>
  </div>
  <ReceiveProducts ref="inventoryRef" v-model="inventoryModal" />
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import InventoryCard from './InventoryCard.vue';
import ReceiveProducts from './ReceiveProducts.vue';

export default defineComponent({
  components: {
    InventoryCard,
    ReceiveProducts,
  },
  setup() {
    const inventory = [
      {
        name: 'Printer 1',
        price: 750,
        discount: 600,
        quantity: 50,
      },
      {
        name: 'Printer 1',
        price: 750,
        discount: 600,
        quantity: 50,
      },
    ];
    const inventoryRef = ref();
    const inventoryModal = ref(false);
    const receiveProductAction = () => {
      console.log(inventoryRef.value);
      inventoryModal.value = true;
    };

    return {
      inventory,
      inventoryModal,
      receiveProductAction,
    };
  },
});
</script>

<style></style>
