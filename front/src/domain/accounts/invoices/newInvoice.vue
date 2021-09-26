<template>
  <div>
    <div class="row q-px-md">
      <div class="col-xs-12 col-sm-6">
        <h6 class="q-my-sm">New Invoice</h6>
      </div>
    </div>
    <q-form class="row full-width" @submit="onSubmit">
      <div class="col col-xs-12 col-sm-6 q-my-sm q-px-md">
        <q-select
          v-model="newInvoice.customerName"
          :disable="!isEditable"
          label="Select Customer"
          :options="customerList"
          filled
        />
      </div>
      <div class="col col-xs-12 col-sm-6 q-my-sm q-px-md">
        <q-input
          disable
          v-model="newInvoice.invoiceNo"
          label="Invoice Number"
          filled
        />
      </div>
      <div class="col col-xs-12 col-sm-6 q-my-sm q-px-md">
        <q-input
          :disable="!isEditable"
          filled
          v-model="newInvoice.date"
          mask="date"
          :rules="['date']"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                ref="qDateProxy"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="newInvoice.date">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="col col-xs-12 col-sm-6 q-my-sm q-px-md">
        <q-input
          :disable="!isEditable"
          v-model="newInvoice.reference"
          label="Reference"
          filled
        />
      </div>
      <div class="col col-xs-12 q-my-sm q-px-md">
        <Table
          class="full-width"
          :isLoading="isLoading"
          :data="data"
          :tableDef="tableDef"
          separator="cell"
          :disableFilter="true"
          :rowsPerPageOptions="[1000]"
        >
          <template #table-top>
            <div class="row full-width justify-between">
              <div class="col-xs-10 q-pr-sm">
                <q-input
                  outlined
                  type="number"
                  label="Add Rows"
                  v-model="rowsOnPage"
                />
              </div>
              <div class="col-xs-2 q-my-auto q-px-sm">
                <q-btn label="Submit" color="primary" @click="addRows" />
              </div>
            </div>
          </template>
          <template #name="{ props }">
            <div class="row full-width">
              <q-select
                borderless
                use-input
                input-debounce="0"
                :options="productsList"
                v-model="props.row.name"
                label="Select Product"
                @filter="filterFn"
              />
            </div>
          </template>
          <template #quantity="{ props }">
            <q-input
              borderless
              type="number"
              v-model.number="props.row.quantity"
            />
          </template>
          <template #price="{ props }">
            <q-input
              borderless
              type="number"
              v-model.number="props.row.price"
            />
          </template>
          <template #discount="{ props }">
            <q-input
              borderless
              type="number"
              v-model.number="props.row.discount"
            />
          </template>
        </Table>
      </div>
      <div v-if="isTotalValue" class="col-xs-12 text-right q-my-sm q-px-xl">
        <h6 class="q-my-sm">Rs: {{ newInvoice.totalValue }}</h6>
      </div>
      <div class="col-xs-12 text-right q-my-sm q-px-xl">
        <q-btn
          @click="calculateTotal"
          label="Calculate Total Price"
          color="primary"
        />
      </div>
      <div class="col-xs-12 q-px-md text-right">
        <q-btn label="Create Invoice" color="primary" type="submit" />
      </div>
    </q-form>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, watch } from 'vue';
import CustomerService from '../../customers/CustomerService';
import CustomerModel from '../../customers/CustomerModel';
import ProductModel from '../../products/ProductModel';
import ProductService from '../../products/ProductService';
import NewInvoiceModel from '../NewInvoiceModel';
// import InvoiceProduct from './InvoiceProduct.vue';
import AccountsService from '../AccountsService';
import Table from '../../../components/General/Table/Table.vue';
import PagedResultModel from '../../../interfaces/PagedResultModel';
import TableModel from '../../../components/General/Table/TableModel';
import Column from '../../../components/General/Table/ColumnModel';
import ProductListModel from '../ProductListModel';

export default defineComponent({
  components: { Table },
  setup() {
    const newInvoice = ref<NewInvoiceModel>({
      customerName: '',
      invoiceNo: 0,
      date: '2021-08-28',
      reference: '',
      products: [
        {
          name: '',
          quantity: 0,
          price: 0,
          discount: 0,
        },
        {
          name: '',
          quantity: 0,
          price: 0,
          discount: 0,
        },
        {
          name: '',
          quantity: 0,
          price: 0,
          discount: 0,
        },
        {
          name: '',
          quantity: 0,
          price: 0,
          discount: 0,
        },
        {
          name: '',
          quantity: 0,
          price: 0,
          discount: 0,
        },
      ],
      totalValue: 0,
    });
    const totalValue = ref(0);
    const productsList = ref<Array<string>>([]);
    const products = ref<ProductModel[]>([]);
    const customerList = ref([]);
    const totalValueArr = ref<Array<number>>([]);
    const isTotalValue = ref(false);
    const isEditable = ref(true);
    const isLoading = ref(false);
    const rowsOnPage = ref(0);
    const data = ref<PagedResultModel<ProductListModel>>(
      new PagedResultModel<ProductListModel>()
    );
    const tableDef = ref<TableModel>(
      new TableModel([
        new Column('name', 'Name', false, true),
        new Column('quantity', 'Quantity', false, true),
        new Column('price', 'Price', false, true),
        new Column('discount', 'Discount (%)', false, true),
      ])
    );

    const filterFn = (val: any, update: any) => {
      update(() => {
        const needle = val.toLowerCase();
        productsList.value = productsList.value.filter(
          (v) => v.toLowerCase().indexOf(needle) > -1
        );
      });
    };

    watch(
      () => newInvoice.value.products.length,
      () => {
        newInvoice.value.products.forEach((product) => {
          productsList.value = productsList.value.filter(
            (p) => p != product.name
          );
        });
      }
    );

    const calculateTotal = () => {
      isTotalValue.value = true;
      newInvoice.value.totalValue = 0;
      totalValueArr.value = [];
      newInvoice.value.products.forEach((product) => {
        const prod = products.value.find(
          (productFind) => productFind.name === product.name
        );
        console.log(prod);

        // if (prod && prod.discount) {
        //   totalValueArr.value.push(
        //     prod.discount
        //       ? prod.discount * product.quantity
        //       : prod.price * product.quantity
        //   );
        // }
      });
      newInvoice.value.totalValue = totalValueArr.value.reduce(
        (a: number, b: number) => a + b
      );
      console.log(newInvoice.value.totalValue);
    };

    const removeProduct = (index: number) => {
      newInvoice.value.products = newInvoice.value.products.filter(
        (_, i) => i !== index
      );
    };

    const generateInvoiceNo = async () => {
      try {
        const data = await AccountsService.getInvoices();
        newInvoice.value.invoiceNo = data.length;
      } catch (error) {
        console.log(error);
      }
    };

    const resetForm = () => {
      isEditable.value = false;
      newInvoice.value._id = '';
      newInvoice.value.customerName = '';
      newInvoice.value.date = '28-08-2021';
      newInvoice.value.reference = '';
      newInvoice.value.products = [];
      newInvoice.value.totalValue = 0;
    };

    const setToEdit = (invoice: NewInvoiceModel) => {
      isEditable.value = false;
      newInvoice.value._id = invoice._id;
      newInvoice.value.customerName = invoice.customerName;
      newInvoice.value.invoiceNo = invoice.invoiceNo;
      newInvoice.value.date = invoice.date;
      newInvoice.value.reference = invoice.reference;
      newInvoice.value.products = invoice.products;
      newInvoice.value.totalValue = invoice.totalValue;

      console.log(newInvoice.value);
    };

    const onSubmit = async () => {
      try {
        generateInvoiceNo();
        await AccountsService.newInvoice(newInvoice.value);
        resetForm();
      } catch (error) {
        console.log(error);
      }
    };

    const addRows = () => {
      const addMoreRows = {
        name: '',
        quantity: 0,
        price: 0,
        discount: 0,
      };

      for (let i = 0; i < rowsOnPage.value; i++) {
        newInvoice.value.products.push(addMoreRows);
      }
    };

    onMounted(async () => {
      try {
        generateInvoiceNo();
        data.value.results = newInvoice.value.products;
        products.value = await ProductService.getProducts();
        productsList.value = products.value.map(
          (product: ProductModel) => product.name
        );
        const customers = await CustomerService.getCustomers();
        customerList.value = customers.map(
          (customer: CustomerModel) => customer.name
        );
      } catch (error) {
        console.log(error);
      }
    });

    return {
      data,
      addRows,
      tableDef,
      products,
      onSubmit,
      filterFn,
      setToEdit,
      isLoading,
      isEditable,
      rowsOnPage,
      newInvoice,
      totalValue,
      productsList,
      customerList,
      isTotalValue,
      removeProduct,
      calculateTotal,
    };
  },
});
</script>
