<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-xs-12 col-sm-6 text-left">
        <h5 class="q-my-sm">Brand List</h5>
      </div>
      <div class="col-xs-12 col-sm-6 text-right">
        <q-btn @click="newBrandAction" label="Add New Brand" color="primary" />
      </div>
    </div>
    <div class="row">
      <div
        v-for="(brand, i) in brands"
        :key="i"
        class="col-xs-12 col-sm-4 q-pa-sm"
      >
        <BrandCard
          @editAction="editBrand(brand)"
          @deleteAction="deleteBrand(brand.id)"
          :brand="brand"
        />
      </div>
    </div>
  </div>
  <NewBrandModal
    ref="brandRef"
    :isEditing="isEditing"
    v-model="brandModal"
    @close="refreshList"
  />
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import BrandCard from "./BrandCard.vue";
import BrandModel from "./BrandModel";
import NewBrandModal from "./NewBrandModal.vue";

export default defineComponent({
  components: {
    BrandCard,
    NewBrandModal,
  },
  setup() {
    const brandModal = ref(false);
    const brandRef = ref();
    const isEditing = ref(false);

    const brands = [
      {
        id: "50-",
        name: "Hello",
        createdAt: "12-01-2020",
      },
      {
        id: "50-",
        name: "World",
        createdAt: "12-01-2020",
      },
    ];

    const newBrandAction = () => {
      isEditing.value = false;
      brandRef.value.resetForm();
      brandModal.value = true;
    };

    const deleteBrand = async (id: string) => {
      console.log(`Delete Brand ${id}`);
    };

    const editBrand = async (brand: BrandModel) => {
      isEditing.value = true;
      brandRef.value.setToEdit(brand);
      brandModal.value = true;
    };

    const refreshList = async () => {
      console.log("reset-list");
      brandModal.value = !brandModal.value;
    };

    return {
      brands,
      brandRef,
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
