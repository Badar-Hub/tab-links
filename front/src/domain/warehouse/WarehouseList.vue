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
    <Modal @close="warehouseModal = false" v-model="warehouseModal" title="Add New Warehouse">
        <Warehouse-Form @close="warehouseModal = false"/>
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Modal from '../../components/Layout/Modal.vue';
import WarehouseForm from './WarehouseForm.vue';

export default defineComponent({
  components: { Modal, WarehouseForm },
  setup() {
    const warehouseModal = ref(false);

    const newAction = () => {
      warehouseModal.value = true;
    };

    return {
      newAction,
      warehouseModal,
    };
  },
});
</script>

<style></style>
