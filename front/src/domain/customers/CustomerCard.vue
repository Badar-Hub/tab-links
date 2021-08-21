<template>
  <div class="row">
    <q-card>
      <q-card-section>
        <div class="row">
          <div class="col-xs-12">
            <h6 class="q-my-sm">Name: {{ customer.name }}</h6>
          </div>
          <div class="col-xs-12">
            <h6 class="q-my-sm">Phone: {{ customer.phone }}</h6>
          </div>
          <div class="col-xs-12">
            <h6 class="q-my-sm">Bank Name: {{ customer.bankName }}</h6>
          </div>
          <div class="col-xs-12">
            <h6 class="q-my-sm">Account No.: {{ customer.accountNo }}</h6>
          </div>
          <div class="col-xs-12">
            <h6 class="q-my-sm">Address: {{ customer.address }}</h6>
          </div>
          <div class="col-xs-12">
            <h6 class="q-my-sm">Balance: {{ customer.balance }}</h6>
          </div>
          <div class="col-xs-12">
            <h6 class="q-my-sm">Created At: {{ customer.createdAt }}</h6>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-6 q-px-sm text-left">
            <q-btn
              @click="$emit('editAction')"
              label="Edit"
              color="warning"
              class="full-width"
            />
          </div>
          <div class="col-xs-12 col-sm-6 q-px-sm text-right">
            <q-btn
              @click="$emit('deleteAction')"
              label="Delete"
              color="red"
              class="full-width"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import CustomerModel from './CustomerModel';
export default defineComponent({
  props: {
    customer: {
      type: Object as PropType<CustomerModel>,
    },
  },
  emits: ['editAction', 'deleteAction'],
  setup() {},
});
</script>

<style></style>
