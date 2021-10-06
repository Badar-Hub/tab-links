<template>
  <div v-if="isLoading">
    <q-skeleton class="q-my-md" :height="`${$q.screen.height - 100}px`" />
  </div>
  <div v-else class="row">
    <div class="col-xs-12 col-sm-6">
      <h6 class="q-my-sm">Accounting Ledgers</h6>
    </div>
    <div class="col-xs-12 col-sm-6 text-right q-my-sm">
      <q-btn
        color="primary"
        label="Add New Ledger Account"
        @click="ledgerModal = true"
      />
    </div>
    <div class="col-xs-12">
      <Table
        class="full-width"
        :isLoading="isLoading"
        :data="data"
        :tableDef="tableDef"
      >
        <template #createdAt="{ props }">
          <div class="row q-my-auto">
            <p class="text-body2 q-my-auto">
              {{ date.formatDate(props.row.createdAt, 'YYYY-MM-DD') }}
            </p>
          </div>
        </template>
        <template #actions="{ props }">
          <div class="row">
            <q-btn
              class="q-pa-none"
              flat
              round
              color="primary"
              icon="edit"
              @click="editProduct(props.row)"
            />
          </div>
        </template>
      </Table>
    </div>
  </div>
  <Modal
    @close="ledgerModal = false"
    v-model="ledgerModal"
    title="Add New Ledger Account"
  >
    <NewLedgerAccount ref="newLedgerRef" @refreshList="getLedgers" />
  </Modal>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { date } from 'quasar';
import Modal from '@/components/Layout/Modal.vue';
import AccountingLedgerModel from './AccountingLedgerModel';
import AccountingLedgerService from './AccountingLedgerService';
import NewLedgerAccount from './NewLedgerAccount.vue';
import Column from '../../../components/General/Table/ColumnModel';
import TableModel from '../../../components/General/Table/TableModel';
import PagedResultModel from '../../../interfaces/PagedResultModel';
import Table from '../../../components/General/Table/Table.vue';

export default defineComponent({
  components: { Modal, NewLedgerAccount, Table },
  setup() {
    const ledgers = ref<AccountingLedgerModel[]>([]);
    const newLedgerRef = ref();
    const ledgerModal = ref(false);
    const isLoading = ref(false);

    const data = ref<PagedResultModel<AccountingLedgerModel>>(
      new PagedResultModel<AccountingLedgerModel>()
    );

    const tableDef = ref<TableModel>(
      new TableModel([
        new Column('accountName', 'Accounting Ledger Name', true),
        new Column('type', 'Type', true),
        new Column('group', 'Group', true),
        new Column('createdAt', 'Creation Date', true, true),
        new Column('actions', 'Actions', false, true),
      ])
    );

    const getLedgers = async () => {
      try {
        ledgerModal.value = false;
        isLoading.value = true;
        ledgers.value = await AccountingLedgerService.getLedgers();
        data.value.results = ledgers.value;
        console.log(ledgers.value);
      } catch (error) {
        console.log(error);
      } finally {
        isLoading.value = false;
      }
    };

    const editAction = (ledger: AccountingLedgerModel) => {
      ledgerModal.value = true;
      newLedgerRef.value.setToEdit(ledger);
    };

    onMounted(async () => {
      getLedgers();
    });

    return {
      data,
      date,
      tableDef,
      isLoading,
      editAction,
      getLedgers,
      ledgerModal,
      newLedgerRef,
    };
  },
});
</script>

<style></style>
