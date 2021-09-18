<template>
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
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import BrandModel from './BrandModel';
import BrandService from './BrandsService';

export default defineComponent({
  props: {
    isEditing: {
      type: Boolean,
      default: () => false,
    },
  },
  emits: ['close-modal'],
  setup(_, context) {
    const brand = ref<BrandModel>({
      name: '',
    });

    const setToEdit = (brandData: BrandModel) => {
      brand.value._id = brandData._id;
      brand.value.name = brandData.name;
    };

    const resetForm = () => {
      brand.value._id = '';
      brand.value.name = '';
    };

    const onSubmit = async () => {
      try {
        if (brand.value._id) {
          await BrandService.updateBrand(brand.value);
        } else {
          await BrandService.newBrand(brand.value);
        }
        context.emit('close-modal');
        resetForm();
      } catch (error) {
        console.log(error, '|error');
      }
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
