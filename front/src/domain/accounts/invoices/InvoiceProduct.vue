<template>
  <div>
    <div class="row full-width">
      <div class="col-xs-12 col-sm-4 q-my-sm q-px-md">
        <q-select
          label="Select Product"
          v-model="inputValue.name"
          :options="products"
          @input:invoice="$emit('input', invoice)"
        />
      </div>
      <div class="col-xs-12 col-sm-2 q-my-sm q-px-md">
        <q-input
          type="number"
          label="Quantity"
          v-model.number="inputValue.quantity"
          @input="$emit('input', invoice)"
        />
      </div>
      <div class="col-xs-12 col-sm-2 q-my-sm q-px-md q-my-auto">
        Discount
        <p class="q-my-auto">
          {{
            productData.discount
              ? productData.discount * inputValue.quantity
              : productData.price * inputValue.quantity
          }}
        </p>
      </div>
      <div class="col-xs-12 col-sm-2 q-my-sm q-px-md">
        <q-input
          disable
          type="number"
          label="Discount"
          v-model.number="productData.discount"
        />
      </div>
      <div class="col-xs-12 col-sm-2 q-my-auto q-px-md">
        <q-btn
          icon="close"
          unelevated
          flat
          rounded
          color="red"
          @click="$emit('remove-product')"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from 'vue';

import NewProductModel from './ProductInvoiceModel';

export default defineComponent({
  props: {
    invoice: {
      type: Object as PropType<NewProductModel>,
    },
    products: {
      type: Array,
    },
  },
  emits: ['remove-product', 'update:modelValue'],
  setup(props, context) {
    const productData = ref<any>({
      sku: '',
      name: '',
      brand: '',
      category: '',
      price: 0,
      discount: 0,
      costPrice: 0,
      quantity: 0,
    });

    const inputValue = computed({
      get: () => props.invoice,
      set: (val) => context.emit('update:modelValue', val),
    });

    return {
      productData,
      inputValue,
    };
  },
});
</script>
