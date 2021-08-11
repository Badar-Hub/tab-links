<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-xs-12 col-sm-6 text-left">
        <h5 class="q-my-sm">Product List</h5>
      </div>
      <div class="col-xs-12 col-sm-6 text-right">
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
          @deleteAction="deleteProduct(product.id)"
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
import { ref, defineComponent } from "vue";
import ProductCard from "./ProductCard.vue";
import NewProductModal from "./NewProductModal.vue";
import ProductModel from "./ProductModel";

export default defineComponent({
  components: {
    ProductCard,
    NewProductModal,
  },
  setup() {
    const productModal = ref(false);
    const productRef = ref();
    const isEditing = ref(false);
    const products = ref<ProductModel[]>([
      {
        id: "500",
        sku: "sku",
        name: "Hello",
        price: 650,
        discount: 650,
        costPrice: 250,
        brand: "World",
        category: "Hello",
        createdAt: "12-01-2020",
      },
      {
        id: "500",
        sku: "sku",
        name: "Hello",
        price: 650,
        discount: 650,
        costPrice: 250,
        brand: "World",
        category: "Hello",
        createdAt: "12-01-2020",
      },
    ]);

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
      console.log("reset-list");
      productModal.value = !productModal.value;
    };

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
