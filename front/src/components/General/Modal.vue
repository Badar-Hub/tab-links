<template>
  <q-dialog v-bind="$attrs">
    <q-card :style="`max-width: ${width}; width: 100%`">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">{{ title }}</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section>
        <slot></slot>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
    },
    width: {
      type: String,
      default: () => "450px",
    },
  },
  setup() {},
});
</script>

<style lang="scss"></style>
