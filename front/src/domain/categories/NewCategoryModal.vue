<template>
  <Modal :title="isEditing ? 'Update Category' : 'Add New Category'">
    <q-form @submit="onSubmit">
      <div class="row">
        <div class="col-xs-12 q-px-sm q-my-sm">
          <q-input
            filled
            v-model="category.name"
            label="Category Name"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
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
  </Modal>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import Modal from "../../components/General/Modal.vue";
import CategoryModel from "./CategoryModel";

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
    const category = ref<CategoryModel>({
      name: "",
    });

    const resetForm = () => {
      category.value.id = "";
      category.value.name = "";
    };

    const setToEdit = async (categoryData: CategoryModel) => {
      category.value.id = categoryData.id;
      category.value.name = categoryData.name;
    };

    const onSubmit = async () => {
      if (category.value.id) {
        console.log("Update Category");
      } else {
        console.log("New Category");
      }
      console.log(category.value.name);
      context.emit("close");
      resetForm();
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
