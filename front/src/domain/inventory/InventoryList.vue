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
        <InventoryCard @editAction="updateAction(item._id)" :inventory="item" />
      </div>
    </div>
    <Modal
      ref="inventoryRef"
      v-model="inventoryModal"
      width="700px"
      title="Receive Prodducts"
    >
      <ReceiveProducts
        ref="inventoryRef2"
        @close="refreshList"
        v-model="inventoryModal"
        :invoiceNo="invoiceNo"
        :prodId="prodId"
      />
    </Modal>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, watch } from 'vue';
import InventoryCard from './InventoryCard.vue';
import ReceiveProducts from './ReceiveProducts.vue';
import InventoryService from './InventoryService';
import InventoryModel from './InventoryModel';
import Modal from '../../components/General/Modal.vue';

export default defineComponent({
  components: {
    InventoryCard,
    ReceiveProducts,
    Modal,
  },
  setup() {
    const inventory = ref<InventoryModel[]>([]);
    const inventoryRef = ref();
    const inventoryRef2 = ref();
    const inventoryModal = ref(false);
    const invoiceNo = ref(0);
    const prodId = ref('');
    const receiveProductAction = () => {
      // inventoryRef.value.resetForm();
      inventoryModal.value = true;
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

    const updateAction = (item: string) => {
      inventoryModal.value = true;
      console.log(inventoryRef2.value);
      // inventoryRef.value.setToEdit(item);
      prodId.value = item;
    };

    watch(
      () => inventoryModal.value,
      () => console.log(inventoryRef2.value)
    );

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
      inventoryRef2,
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
