<template>
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
      <div
        v-for="(category, i) in categories"
        :key="i"
        class="col-xs-12 col-sm-4 q-pa-sm"
      >
        <CategoryCard
          @editAction="editCategory(category)"
          @deleteAction="deleteCategory(category._id)"
          :category="category"
        />
      </div>
    </div>
  </div>
  <NewCategoryModal
    ref="categoryRef"
    :isEditing="isEditing"
    v-model="categoryModal"
    @close="refreshList"
  />
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';
import CategoryCard from './CategoryCard.vue';
import CategoryModel from './CategoryModel';
import NewCategoryModal from './NewCategoryModal.vue';
import CategoryService from './CategoryService';

export default defineComponent({
  components: {
    CategoryCard,
    NewCategoryModal,
  },
  setup() {
    const categoryModal = ref(false);
    const categoryRef = ref();
    const isEditing = ref(false);
    const categories = ref<CategoryModel[]>([]);

    const getCategories = async () => {
      try {
        categories.value = await CategoryService.getCategories();
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
      console.log('reset-list');
      getCategories();
      categoryModal.value = !categoryModal.value;
    };

    onMounted(async () => {
      try {
        getCategories();
      } catch (error) {
        console.log(error);
      }
    });

    return {
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
