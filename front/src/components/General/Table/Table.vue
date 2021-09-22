<template>
  <div class="q-pa-md">
    <Filter :filters="tableDef.columns" />
    <q-table
      :loading="isLoading"
      :rows="data.results"
      :columns="tableDef.columns"
      @request="dataRequest"
      :rows-per-page-options="[7, 10, 25, 50]"
      :filter="filter"
    >
      <template v-slot:top-right>
        <q-input
          borderless
          dense
          debounce="300"
          v-model="filter"
          placeholder="Search"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <!-- <template v-slot:top>
        <img
          style="height: 50px; width: 50px"
          src="https://cdn.quasar.dev/logo-v2/svg/logo.svg"
        />

        <q-space />

        <q-select
          v-model="visibleColumns"
          multiple
          outlined
          dense
          options-dense
          :display-value="$q.lang.table.columns"
          emit-value
          map-options
          :options="tableDef.columns"
          option-value="name"
          options-cover
          style="min-width: 150px"
        />
      </template> -->

      <template
        v-for="col in overrideColumns"
        :key="col.name"
        #[col.templateName]="props"
      >
        <q-td dense :props="props" @click="rowClick(props)">
          <slot :name="col.name" v-bind:props="props"></slot>
        </q-td>
      </template>

      <template v-slot:bottom-row>
        <div class="q-table-bottom-row">
          <q-btn
            icon="archive"
            color="primary"
            label="Export to csv"
            no-caps
            flat
            unelevated
            @click="exportTable"
          />
          <!-- <q-btn
            v-if="showExport"
            flat
            color="primary"
            :label="formMetadata.exportBtnLabel.label"
            size="md"
            class="font-lato-medium "
            icon="export"
            no-caps
            @click="exportTable"
          /> -->
        </div>
      </template>
    </q-table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, toRefs, watch } from 'vue';
import { exportFile, useQuasar } from 'quasar';
import TableModel from './TableModel';
import PagedResultModel from '../../../interfaces/PagedResultModel';
import PagedRequestModel from '../../../interfaces/PagedRequestModel';
import QuasarPaginationModel from './QuasarPaginationModel';
import Column from './ColumnModel';
import Filter from './Filter/Filter.vue';

function wrapCsvValue(val: any, formatFn?: Function) {
  let formatted = formatFn !== undefined ? formatFn(val) : val;

  formatted =
    formatted === undefined || formatted === null ? '' : String(formatted);

  formatted = formatted.split('"').join('""');
  /**
   * Excel accepts \n and \r in strings, but some other CSV parsers do not
   * Uncomment the next two lines to escape new lines
   */
  // .split('\n').join('\\n')
  // .split('\r').join('\\r')

  return `"${formatted}"`;
}
export default defineComponent({
  components: { Filter },
  props: {
    data: {
      type: Object as PropType<PagedResultModel<unknown>>,
      required: false,
      default: () => ({
        pageSize: 10,
        pageCount: 1,
        currentPage: 1,
        results: [],
        rowCount: 1,
      }),
    },
    tableDef: { type: TableModel, required: true, default: new TableModel([]) },
    isLoading: { type: Boolean, required: true, default: true },
  },
  setup(props, context) {
    const $q = useQuasar();
    const filter = ref('');
    const pagination = ref(new QuasarPaginationModel(1, 10, 0, false, ''));
    const lastSentPagination = ref();

    function convertPagedResult(
      pagedResult: PagedResultModel<any>,
      descending: boolean,
      sortBy: string
    ): QuasarPaginationModel {
      return new QuasarPaginationModel(
        pagedResult.currentPage,
        pagedResult.pageSize,
        pagedResult.rowCount,
        descending,
        sortBy
      );
    }

    function onDataUpdate() {
      pagination.value = convertPagedResult(
        props.data,
        lastSentPagination.value.descending,
        lastSentPagination.value.sortBy
      );
    }

    watch(toRefs(props).data, onDataUpdate);

    const overrideColumns = computed(() => {
      return props.tableDef.columns.filter((col: Column) => col.override);
    });

    async function dataRequest(items: any) {
      console.log(items, 'Next Page');

      lastSentPagination.value = items.pagination;
      const { page, rowsPerPage, descending, sortBy } = items.pagination;
      const request = new PagedRequestModel(
        page,
        rowsPerPage,
        sortBy,
        descending
      );
      context.emit('dataRequested', request);
    }

    function exportTable() {
      // naive encoding to csv format
      const content = [
        props.tableDef.columns.map((col) => wrapCsvValue(col.label)),
      ]
        .concat(
          props.data.results.map((row) =>
            props.tableDef.columns
              .map((col) =>
                wrapCsvValue(
                  ((row as unknown) as Record<string, string>)[
                    col.field === undefined ? col.name : col.field
                  ]
                )
              )
              .join(',')
          )
        )
        .join('\r\n');

      const status = exportFile('table-export.csv', content, 'text/csv');

      if (status !== true) {
        $q.notify({
          message: 'Browser denied file download...',
          color: 'negative',
          icon: 'warning',
        });
      }
    }

    return {
      overrideColumns,
      dataRequest,
      exportTable,
      filter,
    };
  },
});
</script>

<style lang="scss">
tr:nth-child(even) {
  background-color: #f2f2f2;
}

.simple-mode {
  tr:nth-child(even) {
    background-color: white;
  }
}

table > *:last-child > tr:last-of-type td {
  border: none;
}
.q-table-bottom-row {
  position: absolute;
  margin-bottom: 10px;
  padding: 8px 20px;
}
.q-table__bottom {
  @media (max-width: 598px) {
    padding-top: 8px;
  }
  @media (max-width: 515px) {
    padding-top: 40px;
  }
}
</style>
