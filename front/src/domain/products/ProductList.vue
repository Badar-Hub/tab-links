<template>
  <div>
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
        <Table
          class="full-width"
          :isLoading="isLoading"
          :data="data"
          :tableDef="tableDef"
        >
          <template #actions="{ props }">
            <div class="row">
              <q-btn
                class="q-pa-none"
                flat
                round
                color="primary"
                icon="edit"
                @click="editProduct(props.row)"
              />
            </div>
          </template>
        </Table>
      </div>
    </div>
    <modal
      @close="productModal = !productModal"
      :title="isEditing ? 'Update Product' : 'Add New Product'"
      v-model="productModal"
    >
      <NewProductForm
        ref="productRef"
        :isEditing="isEditing"
        v-model="productModal"
        @closeModal="refreshList"
      />
    </modal>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';
// import ProductCard from './ProductCard.vue';
import NewProductForm from './NewProductForm.vue';
import ProductModel from './ProductModel';
import ProductService from './ProductService';
import TableModel from '../../components/General/Table/TableModel';
import PagedResultModel from '../../interfaces/PagedResultModel';
import Table from '../../components/General/Table/Table.vue';
import Column from '../../components/General/Table/ColumnModel';
import Modal from '../../components/Layout/Modal.vue';

export default defineComponent({
  components: {
    // ProductCard,
    NewProductForm,
    Modal,
    Table,
  },
  setup() {
    const productModal = ref(false);
    const productRef = ref();
    const isEditing = ref(false);
    const isLoading = ref(true);
    const products = ref<ProductModel[]>([]);
    const data = ref<PagedResultModel<ProductModel>>(
      new PagedResultModel<ProductModel>()
    );
    const tableDef = ref<TableModel>(
      new TableModel([
        new Column('sku', 'Sku', true),
        new Column('name', 'Name', true),
        new Column('brand', 'Brand', true),
        new Column('category', 'Category', true),
        new Column('price', 'Price', true),
        new Column('discount', 'Discount', true),
        new Column('quantity', 'Quantity', true),
        new Column('actions', 'Actions', false, true),
      ])
    );

    const getProducts = async () => {
      try {
        isLoading.value = true;
        products.value = await ProductService.getProducts();
        data.value.results = products.value;
        isLoading.value = false;
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
      data,
      tableDef,
      products,
      isLoading,
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
