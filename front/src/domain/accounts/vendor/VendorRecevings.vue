<template>
  <div class="vendor-recevings">
    <Table :data="data" :tableDef="tableDef" :isLoading="isLoading">
      <template #actions="{ props }">
        <q-btn
          :to="`/accounting/vendor-ledger/${props.row.name}`"
          icon="receipt"
          unelevated
        />
      </template>
    </Table>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import Column from '../../../components/General/Table/ColumnModel';
import Table from '../../../components/General/Table/Table.vue';
import TableModel from '../../../components/General/Table/TableModel';
import PagedResultModel from '../../../interfaces/PagedResultModel';
import VendorModel from '../../vendors/VendorModel';
import VendorService from '../../vendors/VendorService';

export default defineComponent({
  components: { Table },
  setup() {
    const isLoading = ref(true);
    const vendors = ref<VendorModel[]>([]);
    const data = ref<PagedResultModel<VendorModel>>(
      new PagedResultModel<VendorModel>()
    );

    const tableDef = ref<TableModel>(
      new TableModel([
        new Column('name', 'Name', true),
        new Column('phone', 'Phone'),
        new Column('address', 'Address', true),
        new Column('balance', 'Balance', true),
        new Column('actions', 'Actions', false, true),
      ])
    );

    const getRecevings = async () => {
      try {
        isLoading.value = true;
        vendors.value = await VendorService.getVendors();
        data.value.results = vendors.value;
        isLoading.value = false;
      } catch (error) {
        console.log(error);
      }
    };

    const changeRoute = (data: any) => {
      console.log(data);
    };

    onMounted(() => {
      getRecevings();
    });

    return {
      data,
      tableDef,
      isLoading,
      changeRoute,
      getRecevings,
    };
  },
});
</script>

<style></style>
