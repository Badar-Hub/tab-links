<template>
  <Modal :title="isEditing ? 'Update Brand' : 'Add New Brand'">
    <q-form @submit="onSubmit">
      <div class="row">
        <div class="col-xs-12 q-px-sm q-my-sm">
          <q-input
            filled
            v-model="brand.name"
            label="Brand Name"
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
import BrandModel from "./BrandModel";

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
    const brand = ref<BrandModel>({
      name: "",
    });

    const setToEdit = (brandData: BrandModel) => {
      brand.value.id = brandData.id;
      brand.value.name = brandData.name;
    };

    const resetForm = () => {
      brand.value.id = "";
      brand.value.name = "";
    };

    const onSubmit = async () => {
      if (brand.value.id) {
        console.log("Update Brand");
      } else {
        console.log("Add New Brand");
      }
      console.log(brand.value.name);
      context.emit("close");
      resetForm();
    };

    return {
      onSubmit,
      resetForm,
      setToEdit,
      brand,
    };
  },
});
</script>

<style></style>
