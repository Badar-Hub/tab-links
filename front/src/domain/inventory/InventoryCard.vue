<template>
  <q-card>
    <q-card-section>
      <div class="row">
        <div class="col-xs-12">
          <h6 class="q-my-sm">Name: {{ inventory.name }}</h6>
        </div>
        <div class="col-xs-12">
          <h6 class="q-my-sm">Price: {{ inventory.price }}</h6>
        </div>
        <div class="col-xs-12">
          <h6 class="q-my-sm">Discount: {{ inventory.discount }}</h6>
        </div>
        <div class="col-xs-12">
          <h6 class="q-my-sm">Quantity: {{ inventory.quantity }}</h6>
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <div class="row">
        <div class="col col-xs-12 col-sm-6 q-px-sm">
          <q-btn
            @click="$emit('editAction')"
            label="Edit"
            color="warning"
            class="full-width"
          />
        </div>
        <div class="col col-xs-12 col-sm-6 q-px-sm">
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
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  emits: ['editAction', 'deleteAction'],
  props: {
    inventory: {
      type: Object,
    },
  },
});
</script>

<style></style>
