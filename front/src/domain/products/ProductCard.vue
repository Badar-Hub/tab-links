<template>
  <div class="row">
    <q-card>
      <q-card-section>
        <div class="row">
          <div class="col-xs-12">
            <h6 class="q-my-sm">Sku: {{ product.sku }}</h6>
          </div>
          <div class="col-xs-12">
            <h6 class="q-my-sm">Name: {{ product.name }}</h6>
          </div>
          <div class="col-xs-12">
            <h6 class="q-my-sm">Brand: {{ product.brand }}</h6>
          </div>
          <div class="col-xs-12">
            <h6 class="q-my-sm">Category: {{ product.category }}</h6>
          </div>
          <div class="col-xs-12">
            <h6 class="q-my-sm">Price: {{ product.price }}</h6>
          </div>
          <div class="col-xs-12">
            <h6 class="q-my-sm">Discount: {{ product.discount }}</h6>
          </div>
          <div class="col-xs-12">
            <h6 class="q-my-sm">Quantity: {{ product.quantity }}</h6>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-6 q-px-sm text-left q-my-sm">
            <q-btn
              @click="$emit('editAction')"
              label="Edit"
              color="warning"
              class="full-width"
            />
          </div>
          <div class="col-xs-12 col-sm-6 q-px-sm text-right q-my-sm">
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
import { defineComponent, PropType } from 'vue';
import ProductModel from './ProductModel';

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<ProductModel>,
    },
  },
  emits: ['editAction', 'deleteAction'],
  setup() {},
});
</script>

<style></style>
