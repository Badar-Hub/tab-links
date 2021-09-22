<template>
  <div>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-xs-12 col-sm-6 text-left">
          <h5 class="q-my-sm">Brand List</h5>
        </div>
        <div class="col-xs-12 col-sm-6 text-right">
          <q-btn
            @click="newBrandAction"
            label="Add New Brand"
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
                @click="editBrand(props.row)"
              />
            </div>
          </template>
        </Table>
      </div>
    </div>
    <modal
      v-model="brandModal"
      @close="brandModal = false"
      name="Add New Brand"
      :title="isEditing ? 'Update Brand' : 'Add New Brand'"
    >
      <NewBrandForm
        ref="brandRef"
        :isEditing="isEditing"
        @close="refreshList"
      />
    </modal>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';
import Modal from '../../components/Layout/Modal.vue';
import Column from '../../components/General/Table/ColumnModel';
import TableModel from '../../components/General/Table/TableModel';
import PagedResultModel from '../../interfaces/PagedResultModel';
import Table from '../../components/General/Table/Table.vue';
// import BrandCard from './BrandCard.vue';
import BrandModel from './BrandModel';
import BrandService from './BrandsService';
import NewBrandForm from './NewBrandForm.vue';

export default defineComponent({
  components: {
    // BrandCard,
    NewBrandForm,
    Modal,
    Table,
  },
  setup() {
    const brandModal = ref(false);
    const brandRef = ref();
    const isEditing = ref(false);
    const isLoading = ref(true)
    const data = ref<PagedResultModel<BrandModel>>(
      new PagedResultModel<BrandModel>()
    );
    const tableDef = ref<TableModel>(
      new TableModel([
        new Column('_id', 'ID'),
        new Column('name', 'Name'),
        new Column('actions', 'Actions', true),
      ])
    );

    const brands = ref<BrandModel[]>([]);

    const getBrands = async () => {
      try {
        isLoading.value = true;
        brands.value = await BrandService.getBrands();
        data.value.results = brands.value;
        isLoading.value = false;
      } catch (error) {
        console.log(error);
      }
    };

    const newBrandAction = () => {
      isEditing.value = false;
      brandRef.value.resetForm();
      brandModal.value = true;
    };

    const deleteBrand = async (id: string) => {
      console.log(`Delete Brand ${id}`);
    };

    const editBrand = async (brand: BrandModel) => {
      console.log(brand);

      isEditing.value = true;
      brandRef.value.setToEdit(brand);
      brandModal.value = true;
    };

    const refreshList = async () => {
      console.log('reset-list');
      getBrands();
      brandModal.value = !brandModal.value;
    };

    onMounted(async () => {
      try {
        getBrands();
      } catch (error) {
        console.log(error);
      }
    });

    return {
      brands,
      brandRef,
      data,
      tableDef,
      isLoading,
      editBrand,
      isEditing,
      brandModal,
      deleteBrand,
      refreshList,
      newBrandAction,
    };
  },
});
</script>

<style lang="scss"></style>
