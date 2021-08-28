<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-xs-6 text-left">
        <h5 class="q-my-sm">Product List</h5>
      </div>
      <div class="col-xs-6 text-right">
        <q-btn
          @click="newProductAction"
          label="Add New Product"
          color="primary"
        />
      </div>
    </div>
    <div class="row">
      <div
        v-for="(product, i) in products"
        :key="i"
        class="col-xs-12 col-sm-4 q-pa-sm"
      >
        <ProductCard
          @editAction="editProduct(product)"
          @deleteAction="deleteProduct(product._id)"
          :product="product"
        />
      </div>
    </div>
  </div>
  <NewProductModal
    ref="productRef"
    :isEditing="isEditing"
    v-model="productModal"
    @close="refreshList"
  />
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';
import ProductCard from './ProductCard.vue';
import NewProductModal from './NewProductModal.vue';
import ProductModel from './ProductModel';
import ProductService from './ProductService';

export default defineComponent({
  components: {
    ProductCard,
    NewProductModal,
  },
  setup() {
    const productModal = ref(false);
    const productRef = ref();
    const isEditing = ref(false);
    const products = ref<ProductModel[]>([]);

    const getProducts = async () => {
      try {
        products.value = await ProductService.getProducts();
      } catch (error) {
        console.log(error);
      }
    };

    const newProductAction = () => {
      isEditing.value = false;
      productRef.value.resetForm();
      productModal.value = true;
    };

    const editProduct = (product: ProductModel) => {
      isEditing.value = true;
      productRef.value.setToEdit(product);
      productModal.value = true;
    };

    const deleteProduct = (id: string) => {
      console.log(id);
    };

    const refreshList = async () => {
      console.log('reset-list');
      getProducts();
      productModal.value = !productModal.value;
    };

    onMounted(async () => {
      try {
        getProducts();
      } catch (error) {
        console.log(error);
      }
    });

    return {
      products,
      isEditing,
      productModal,
      productRef,
      refreshList,
      editProduct,
      deleteProduct,
      newProductAction,
    };
  },
});
</script>

<style lang="scss"></style>
