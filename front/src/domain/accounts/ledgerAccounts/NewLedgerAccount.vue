<template>
  <div class="row">
    <div class="col-xs-12 col-sm-6 q-px-sm">
      <q-select
        label="Account Type"
        :options="accountTypes"
        v-model="accountingLedger.type"
      />
    </div>
    <div class="col-xs-12 col-sm-6 q-px-sm">
      <q-select
        label="Account Group"
        :options="accountGroup"
        v-model="accountingLedger.group"
      />
    </div>
    <div class="col-xs-12 q-px-sm">
      <q-input label="Account Name" v-model="accountingLedger.accountName" />
    </div>
    <div class="col-xs-12 col-sm-6 q-px-sm">
      <q-btn
        class="full-width q-mt-md"
        :loading="isLoading"
        @click="submit"
        label="Submit"
        color="primary"
      />
    </div>
    <div class="col-xs-12 col-sm-6 q-px-sm">
      <q-btn
        class="full-width q-mt-md"
        @click="$emit('refreshList')"
        label="Close"
        color="primary"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { ref, defineComponent } from 'vue';
import AccountingLedgerModel from './AccountingLedgerModel';
import AccountingLedgerService from './AccountingLedgerService';

export default defineComponent({
  emits: ['refreshList'],
  setup(_, context) {
    const isLoading = ref(false);
    const $q = useQuasar();
    const accountingLedger = ref<AccountingLedgerModel>({
      type: '',
      group: '',
      accountName: '',
    });
    const accountTypes = ref(['Bank', 'Cash', 'Ledger']);
    const accountGroup = ref([
      'Expense Account',
      'Asset Acccount',
      'Cost of Sale',
      'Revenue Account',
    ]);

    const submit = async () => {
      try {
        isLoading.value = true;
        await AccountingLedgerService.newLedger(accountingLedger.value);
        $q.notify({
          color: 'primary',
          message: 'Added Successfully',
        });
        context.emit('refreshList');
      } catch (error) {
        console.log(error);
      } finally {
        isLoading.value = false;
      }
    };

    const setToEdit = (ledger: AccountingLedgerModel) => {
      accountingLedger.value.type = ledger.type;
      accountingLedger.value.group = ledger.group;
      accountingLedger.value.accountName = ledger.accountName;
    };
    return {
      submit,
      setToEdit,
      isLoading,
      accountTypes,
      accountGroup,
      accountingLedger,
    };
  },
});
</script>

<style></style>
