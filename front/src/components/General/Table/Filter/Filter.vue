<template>
  <div class="custom-filter">
    <q-card class="q-my-md">
      <q-card-section class="row justify-between">
        <h4 class="q-my-sm">Filters</h4>
        <div @click="isHidden = !isHidden" class="pointer text-right q-my-auto">
          <q-btn unelevated :icon="!isHidden ? 'expand_more' : 'expand_less'" />
        </div>
      </q-card-section>
      <q-card-section v-show="isHidden">
        <hr />
        <div v-for="(filter, index) in appliedFilters" :key="index">
          <div class="grid">
            <div class="q-pa-sm">
              <q-select
                label="Filter"
                v-model="filter.selectedFilter"
                :options="filters"
              />
            </div>
            <div class="q-pa-sm">
              <q-select
                label="Operators"
                v-model="filter.operator"
                :options="operators"
              />
            </div>
            <div class="q-pa-sm">
              <q-input label="Value" v-model="filter.value" />
            </div>
          </div>
          <div class="row justify-end text-right">
            <q-btn unelevated label="Remove" @click="removeFilter(index)" />
          </div>
        </div>

        <div class="row q-my-md">
          <q-btn @click="addNewFilter" label="Add New Filter" icon="add" unelevated />
        </div>
        <div class="row justify-end">
          <q-btn @click="applyFilters" label="Apply Filters" color="primary" />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  props: {
    filters: {
      type: Array,
    },
  },
  setup() {
    const appliedFilters = ref([
      {
        selectedFilter: '',
        operator: '',
        value: '',
      },
    ]);
    const isHidden = ref(false);
    const operators = ref([
      'Contains',
      'Not Contains',
      'Equals To',
      'Not Euqals To',
      'Greater Than',
      'Less Than',
      'Greater Than & Equal To',
    ]);

    const applyFilters = () => {
        const tempArr = [] as any
        appliedFilters.value.forEach(filter => tempArr.push(filter.operator))
        console.log(tempArr);
    }

    const addNewFilter = () => {
      appliedFilters.value.push({
        selectedFilter: '',
        operator: '',
        value: '',
      });
    };

    const removeFilter = (currentIndex: number) => {
      appliedFilters.value = appliedFilters.value.filter(
        (_, index) => index !== currentIndex
      );
    };

    return {
      isHidden,
      addNewFilter,
      removeFilter,
      appliedFilters,
      operators,
      applyFilters
    };
  },
});
</script>

<style lang="scss">
.custom-filter {
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}
</style>
