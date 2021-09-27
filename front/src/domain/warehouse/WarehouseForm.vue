<template>
  <div @keypress.enter="submit" class="row">
    <div class="col-xs-12 col-sm-4 q-pa-sm">
      <q-input label="Name" v-model="warehouse.name" />
    </div>
    <div class="col-xs-12 col-sm-4 q-pa-sm">
      <q-select
        :options="userOptions"
        label="Select User"
        v-model="warehouse.inCharge"
      />
    </div>
    <div class="col-xs-12 col-sm-4 q-pa-sm">
      <q-input label="Phone Number" v-model="warehouse.phone" />
    </div>
    <div class="col-xs-12 q-pa-sm">
      <q-input label="Address" v-model="warehouse.address" />
    </div>
    <div class="col-xs-12 col-sm-6 q-pa-sm">
      <q-btn
        class="full-width"
        color="primary"
        :loading="isLoading"
        label="Submit"
        @click="submit"
      />
    </div>
    <div class="col-xs-12 col-sm-6 q-pa-sm">
      <q-btn
        class="full-width"
        color="primary"
        label="Close"
        @click="$emit('close')"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { defineComponent, onMounted, ref } from 'vue';
import UserService from '../../services/UserService';
import WarehouseModel from './WarehouseModel';
import WarehouseService from './WarehouseService';

export default defineComponent({
  emits: ['close', 'refreshList'],
  setup(_, context) {
    const userOptions = ref<Array<string>>([]);
    const $q = useQuasar();
    const isLoading = ref(false);
    const warehouse = ref<WarehouseModel>({
      name: '',
      address: '',
      phone: 0,
      inCharge: '',
    });

    const getUsers = async () => {
      try {
        const users = await UserService.getUsers();
        userOptions.value = users;
      } catch (error) {
        console.log(error);
      }
    };

    const submit = async () => {
      try {
        isLoading.value = true;
        await WarehouseService.newWarehouse(warehouse.value);
        $q.notify({
          message: 'New warehouse has been created successfully',
        });
        context.emit('refreshList');
        isLoading.value = false;
      } catch (error) {
        console.log(error);
        $q.notify({
          message: 'An error occoured',
        });
      }
    };

    onMounted(() => {
      getUsers();
    });

    return {
      submit,
      warehouse,
      isLoading,
      userOptions,
    };
  },
});
</script>

<style></style>
