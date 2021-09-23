<template>
  <q-form @submit="onSubmit">
    <div class="row">
      <div class="col-xs-12 q-px-sm q-my-sm">
        <q-input
          filled
          v-model="category.name"
          label="Category Name"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
      </div>
      <div class="col-xs-12 q-my-sm">
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
import { useQuasar } from 'quasar';
import { ref, defineComponent } from 'vue';
import CategoryModel from './CategoryModel';
import CategoryService from './CategoryService';

export default defineComponent({
  props: {
    isEditing: {
      type: Boolean,
      default: () => false,
    },
  },
  emits: ['close-modal'],
  setup(_, context) {
    const $q = useQuasar();
    const category = ref<CategoryModel>({
      name: '',
    });

    const resetForm = () => {
      category.value._id = '';
      category.value.name = '';
    };

    const setToEdit = async (categoryData: CategoryModel) => {
      category.value._id = categoryData._id;
      category.value.name = categoryData.name;
    };

    const onSubmit = async () => {
      try {
        if (category.value._id) {
          await CategoryService.updateCategory(category.value);
          $q.notify({
            color: 'primary',
            message: 'This Category has been successfully updated!',
          });
        } else {
          await CategoryService.newCategory(category.value);
          $q.notify({
            color: 'primary',
            message: 'This Category has been successfully created!',
          });
        }
        context.emit('close-modal');
        resetForm();
      } catch (error) {
        console.log(error);
      }
    };

    return {
      onSubmit,
      resetForm,
      setToEdit,
      category,
    };
  },
});
</script>

<style></style>
