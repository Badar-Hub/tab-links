<template>
  <Modal
    width="650px"
    :title="isEditing ? 'Update Product' : 'Add New Product'"
  >
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
            :options="['Hello', 'World']"
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
            :options="['Hello', 'World']"
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
  </Modal>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import Modal from "../../components/General/Modal.vue";
import ProductModel from "./ProductModel";

export default defineComponent({
  components: {
    Modal,
  },
  props: {
    isEditing: {
      type: Boolean,
      default: () => false,
    },
  },
  setup(_, context) {
    const product = ref<ProductModel>({
      sku: "",
      name: "",
      brand: "",
      category: "",
      price: 0,
      discount: 0,
      costPrice: 0,
    });

    const resetForm = () => {
      product.value.id = "";
      product.value.sku = "";
      product.value.name = "";
      product.value.brand = "";
      product.value.category = "";
      product.value.price = 0;
      product.value.discount = 0;
      product.value.costPrice = 0;
    };

    const setToEdit = (productData: ProductModel) => {
      product.value.id = productData.id;
      product.value.sku = productData.sku;
      product.value.name = productData.name;
      product.value.brand = productData.brand;
      product.value.category = productData.category;
      product.value.price = productData.price;
      product.value.discount = productData.discount;
      product.value.costPrice = productData.costPrice;
    };

    const onSubmit = async () => {
      if (product.value.id) {
        console.log("Update Product");
      } else {
        console.log("Add New Product");
      }
      console.log(product.value);
      context.emit("close");
      resetForm();
    };

    return {
      setToEdit,
      onSubmit,
      resetForm,
      product,
    };
  },
});
</script>

<style></style>
