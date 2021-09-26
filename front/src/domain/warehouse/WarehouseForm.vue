<template>
  <div class="row">
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
import { defineComponent, onMounted, ref } from 'vue';
import UserService from '../../services/UserService';

export default defineComponent({
  emits: ['close'],
  setup() {
    const userOptions = ref<Array<string>>([]);
    const warehouse = ref({
      name: '',
      paddress: '',
      phone: '',
      inCharge: '',
    });

    const getUsers = async () => {
      try {
        const users = await UserService.getUsers();
        console.log(users);
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(() => {
      getUsers();
    });

    return {
      userOptions,
      warehouse,
    };
  },
});
</script>

<style></style>
