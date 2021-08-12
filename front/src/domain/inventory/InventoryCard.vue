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
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    inventory: {
      type: Object,
    },
  },
});
</script>

<style></style>
