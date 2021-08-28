<template>
  <div>
    <q-card class="q-my-sm">
      <q-card-section>
        <div class="row full-width">
          <div class="col-xs-12 col-sm-6">
            <p class="text-body2">
              {{
                inputValue.name
                  ? `Selected Product: ${inputValue.name}`
                  : 'Select Product'
              }}
            </p>
          </div>
          <div class="col-xs-12 col-sm-6 text-right">
            <p class="text-body2 cursor-pointer" @click="removeProduct(index)">
              X
            </p>
          </div>
        </div>
        <div class="row full-width">
          <div class="col-xs-12 col-sm-3 q-my-sm q-px-md">
            <q-select
              label="Select Product"
              v-model="inputValue.name"
              :options="productsList"
              @input:invoice="$emit('input', invoice)"
            />
          </div>
          <div class="col-xs-12 col-sm-3 q-my-sm q-px-md">
            <q-input
              type="number"
              label="Quantity"
              v-model.number="inputValue.quantity"
              @input="$emit('input', invoice)"
            />
          </div>
          <div class="col-xs-12 col-sm-3 q-my-sm q-px-md q-my-auto">
            Discount
            <p class="q-my-auto">
              {{
                productData.discount
                  ? productData.discount * inputValue.quantity
                  : productData.price * inputValue.quantity
              }}
            </p>
          </div>
          <div class="col-xs-12 col-sm-3 q-my-sm q-px-md">
            <q-input
              disable
              type="number"
              label="Discount"
              v-model.number="productData.discount"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  watch,
  ref,
  onMounted,
  computed,
} from 'vue';
import ProductService from '../../products/ProductService';
import ProductModel from '../../products/ProductModel';

import NewProductModel from './ProductInvoiceModel';

export default defineComponent({
  props: {
    invoice: {
      type: Object as PropType<NewProductModel>,
    },
  },
  setup(props, context) {
    const products = ref<ProductModel[]>([]);
    const productsList = ref<Array<string>>([]);
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

    watch(
      () => inputValue.value!.name,
      () =>
        (productData.value = products.value.find(
          (product: NewProductModel) => product.name === inputValue.value!.name
        ))
    );

    onMounted(async () => {
      try {
        products.value = await ProductService.getProducts();
        productsList.value = products.value.map((product) => product.name);
        console.log(productsList.value);
      } catch (error) {
        console.log(error);
      }
    });

    return {
      productData,
      productsList,
      inputValue,
    };
  },
});
</script>

<style></style>
