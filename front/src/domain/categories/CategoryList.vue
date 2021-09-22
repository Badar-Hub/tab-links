<template>
  <div>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-xs-12 col-sm-6 text-left">
          <h5 class="q-my-sm">Category List</h5>
        </div>
        <div class="col-xs-12 col-sm-6 text-right">
          <q-btn
            @click="newCategoryAction"
            label="Add New Category"
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
                @click="editCategory(props.row)"
              />
            </div>
          </template>
        </Table>
      </div>
    </div>
    <modal
      @close="refreshList"
      v-model="categoryModal"
      name="Add New Category"
      :title="isEditing ? 'Update Category' : 'Add New Category'"
    >
      <NewCategoryForm
        @closeModal="refreshList"
        ref="categoryRef"
        :isEditing="isEditing"
      />
    </modal>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';
import CategoryModel from './CategoryModel';
import NewCategoryForm from './NewCategoryForm.vue';
import CategoryService from './CategoryService';
import Modal from '../../components/Layout/Modal.vue';
import Column from '../../components/General/Table/ColumnModel';
import TableModel from '../../components/General/Table/TableModel';
import PagedResultModel from '../../interfaces/PagedResultModel';
import Table from '../../components/General/Table/Table.vue';

export default defineComponent({
  components: {
    NewCategoryForm,
    Modal,
    Table,
  },
  setup() {
    const categoryModal = ref(false);
    const categoryRef = ref();
    const isEditing = ref(false);
    const isLoading = ref(true);
    const categories = ref<CategoryModel[]>([]);
    const data = ref<PagedResultModel<CategoryModel>>(
      new PagedResultModel<CategoryModel>()
    );
    const tableDef = ref<TableModel>(
      new TableModel([
        new Column('_id', 'ID'),
        new Column('name', 'Name'),
        new Column('actions', 'Actions', true),
      ])
    );

    const getCategories = async () => {
      try {
        isLoading.value = true;
        categories.value = await CategoryService.getCategories();
        data.value.results = categories.value;
        isLoading.value = false;
      } catch (error) {
        console.log(error);
      }
    };

    const newCategoryAction = () => {
      isEditing.value = false;
      categoryRef.value.resetForm();
      categoryModal.value = !categoryModal.value;
    };

    const editCategory = async (category: CategoryModel) => {
      isEditing.value = true;
      categoryModal.value = true;
      console.log('lol update category start');
      categoryRef.value.setToEdit(category);
      console.log('lol update category end');
    };

    const deleteCategory = (id: string) => {
      console.log('lol delete category start', id);
      console.log('lol delete category end', id);
    };

    const refreshList = async () => {
      getCategories();
      categoryModal.value = !categoryModal.value;
      console.log(categoryModal.value);
    };

    onMounted(async () => {
      try {
        getCategories();
      } catch (error) {
        console.log(error);
      }
    });

    return {
      data,
      tableDef,
      isLoading,
      isEditing,
      editCategory,
      deleteCategory,
      categories,
      categoryModal,
      refreshList,
      categoryRef,
      newCategoryAction,
    };
  },
});
</script>

<style lang="scss"></style>
