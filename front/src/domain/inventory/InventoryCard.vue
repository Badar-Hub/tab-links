<template>
  <q-card>
    <q-card-section>
      <div class="row">
        <div class="col-xs-12">
          <p class="text-body2 q-my-none">Vendor Name</p>
        </div>
        <div class="col-xs-12">
          <p class="text-h6 q-my-sm">{{ inventory.vendor }}</p>
        </div>
        <div class="col-xs-12">
          <p class="text-body2 q-my-none">Total Value</p>
        </div>
        <div class="col-xs-12">
          <p class="text-h6 q-my-sm">Rs. {{ totalValue }}</p>
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
import { ref, defineComponent, onMounted, PropType, toRefs } from 'vue';
import InventoryModel from './InventoryModel';

export default defineComponent({
  emits: ['editAction', 'deleteAction'],
  props: {
    inventory: {
      type: Object as PropType<InventoryModel>,
    },
  },
  setup(props) {
    const gr = ref<InventoryModel>({
      _id: '',
      vendor: '',
      invoiceNo: 0,
      date: '',
      reference: '',
      products: [],
    });

    const propsReactivity = toRefs(props);
    const totalValue = ref(0);

    totalValue.value = propsReactivity.inventory
      .value!.products.map((product) => product.costPrice * product.quantity)
      .reduce((a: number, b: number) => a + b);

    onMounted(() => {
      propsReactivity.inventory.value = gr.value;
      console.log(propsReactivity.inventory.value, gr.value);
    });

    return {
      totalValue,
    };
  },
});
</script>

<style></style>
