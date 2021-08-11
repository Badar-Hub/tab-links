<template>
  <div class="row">
    <q-card>
      <q-card-section>
        <div class="row">
          <div class="col-xs-12">
            <h6 class="q-my-sm">Category Name: {{ category.name }}</h6>
          </div>
          <div class="col-xs-12">
            <h6 class="q-my-sm">Created At: {{ category.createdAt }}</h6>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-6 q-px-sm text-left">
            <q-btn
              @click="$emit('editAction')"
              label="Edit"
              color="warning"
              class="full-width"
            />
          </div>
          <div class="col-xs-12 col-sm-6 q-px-sm text-right">
            <q-btn
              @click="$emit('deleteAction')"
              label="Delete"
              color="red"
              class="full-width"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import CategoryModel from "./CategoryModel";

export default defineComponent({
  props: {
    category: {
      type: Object as PropType<CategoryModel>,
    },
  },
  emits: ["editAction", "deleteAction"],
  setup() {},
});
</script>

<style></style>
