<template>
    <q-form @submit="onSubmit">
      <div class="row">
        <div class="col-xs-12 col-sm-6 q-px-xs q-my-xs">
          <q-input
            filled
            v-model="product.sku"
            label="Sku"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
        </div>
        <div class="col-xs-12 col-sm-6 q-px-xs q-my-xs">
          <q-input
            filled
            v-model="product.name"
            label="Product Name"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
        </div>
        <div class="col-xs-12 col-sm-6 q-px-xs q-my-xs">
          <q-select
            filled
            v-model="product.brand"
            :options="brands"
            label="Brands"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please enter a valid value',
            ]"
          />
        </div>
        <div class="col-xs-12 col-sm-6 q-px-xs q-my-xs">
          <q-select
            filled
            v-model="product.category"
            :options="categories"
            label="Category"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please enter a valid value',
            ]"
          />
        </div>
        <div class="col-xs-12 col-sm-6 q-px-xs q-my-xs">
          <q-input
            filled
            v-model="product.price"
            type="number"
            label="Price"
            lazy-rules
            :rules="[(val) => val > 0 || 'Please enter a valid value']"
          />
        </div>
        <div class="col-xs-12 col-sm-6 q-px-xs q-my-xs">
          <q-input
            filled
            v-model="product.discount"
            type="number"
            label="Discount"
            lazy-rules
            :rules="[(val) => val >= 0 || 'Please enter a valid value']"
          />
        </div>
        <div class="col-xs-12 col-sm-6 q-px-xs q-my-xs">
          <q-input
            filled
            v-model="product.costPrice"
            type="number"
            label="Cost Price"
            lazy-rules
            :rules="[(val) => val > 0 || 'Please enter a valid value']"
          />
        </div>
        <div class="col-xs-12 q-my-xs">
          <q-btn
            type="submit"
            label="Submit"
            color="primary"
            class="full-width"
          />
        </div>
      </div>
    </q-form>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';
import ProductModel from './ProductModel';
import CategoryModel from '../categories/CategoryModel';
import BrandModel from '../brands/BrandModel';
import ProductService from './ProductService';
import BrandsService from '../brands/BrandsService';
import CategoryService from '../categories/CategoryService';

export default defineComponent({
  props: {
    isEditing: {
      type: Boolean,
      default: () => false,
    },
  },
  emits: ['close-modal'],
  setup(_, context) {
    const brands = ref([]);
    const categories = ref([]);

    const product = ref<ProductModel>({
      sku: '',
      name: '',
      brand: '',
      category: '',
      price: 0,
      discount: 0,
      quantity: 0,
      costPrice: 0,
    });

    const resetForm = () => {
      product.value._id = '';
      product.value.sku = '';
      product.value.name = '';
      product.value.brand = '';
      product.value.category = '';
      product.value.price = 0;
      product.value.discount = 0;
      product.value.quantity = 0;
      product.value.costPrice = 0;
    };

    const setToEdit = (productData: ProductModel) => {
      product.value._id = productData._id;
      product.value.sku = productData.sku;
      product.value.name = productData.name;
      product.value.brand = productData.brand;
      product.value.category = productData.category;
      product.value.price = productData.price;
      product.value.discount = productData.discount;
      product.value.quantity = productData.quantity;
      product.value.costPrice = productData.costPrice;
    };

    const onSubmit = async () => {
      try {
        if (product.value._id) {
          await ProductService.updateProduct(product.value);
        } else {
          await ProductService.newProducts(product.value);
        }
        console.log(product.value);
        context.emit('close-modal');
        resetForm();
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(async () => {
      try {
        const allBrands = await BrandsService.getBrands();
        brands.value = allBrands.map((brand: BrandModel) => brand.name);
        const allCategories = await CategoryService.getCategories();
        categories.value = allCategories.map(
          (category: CategoryModel) => category.name
        );
      } catch (error) {
        console.log(error);
      }
    });

    return {
      setToEdit,
      onSubmit,
      resetForm,
      product,
      brands,
      categories,
    };
  },
});
</script>

<style></style>
