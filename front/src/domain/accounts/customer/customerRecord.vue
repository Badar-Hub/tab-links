<template>
  <div class="row"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import CustomerService from '../../customers/CustomerService';
import CustomerRecord from '../../customers/CustomerModel';

export default defineComponent({
  setup() {
    const route = useRoute();
    const customer = ref<CustomerRecord[]>([]);

    onMounted(async () => {
      const id = route.params.id as string;
      try {
        console.log(id);
        customer.value = await CustomerService.getCustomer(id);
      } catch (error) {
        console.log(error);
      }
    });

    return {
      customer,
    };
  },
});
</script>

<style></style>
