<template>
  <div class="q-pa-md">
    <q-table
      :loading="isLoading"
      :rows="data.results"
      :columns="tableDef.columns"
      @request="dataRequest"
      :rows-per-page-options="[7, 10, 25, 50]"
    >
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
            v-if="showExport"
            flat
            color="primary"
            :label="formMetadata.exportBtnLabel.label"
            size="md"
            class="font-lato-medium "
            icon="ono-export"
            no-caps
            @click="exportTable"
          />
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
    const pagination = ref(new QuasarPaginationModel(1, 10, 0, false, ''));
    const lastSentPagination = ref();
    const $q = useQuasar();

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
    };
  },
});
</script>

<style></style>
