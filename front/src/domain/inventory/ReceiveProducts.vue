<template>
  <q-form @submit="isEditing ? updateReceiving() : onSubmit()">
    <div class="row">
      <div class="col-xs-12 col-sm-6 q-pa-sm">
        <q-select
          v-model="receiveItems.vendorName"
          :options="vendors"
          label="Select Vendor"
          filled
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Please select a Vendor',
          ]"
        />
      </div>
      <div class="col-xs-12 col-sm-6 q-pa-sm">
        <q-input
          disable
          v-model="receiveItems.receivingNumber"
          label="Invoice No"
          filled
        />
      </div>
      <div class="col-xs-12 col-sm-6 q-pa-sm">
        <q-input
          filled
          v-model="receiveItems.date"
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
                <q-date v-model="receiveItems.date">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="col-xs-12 col-sm-6 q-pa-sm">
        <q-input v-model="receiveItems.reference" label="Reference" filled />
      </div>
    </div>
    <!-- <q-card
      v-for="(item, i) in receiveItems.products"
      bordered
      flat
      class="q-my-sm"
      :key="i"
    >
      <div class="row q-px-md q-pt-xs">
        <div class="col-xs-12 col-sm-6 q-my-auto">
          <p class="q-my-sm text-body1">
            {{
              item.name ? `Selected Product (${item.name})` : 'Select Product'
            }}
          </p>
        </div>
        <div class="col-xs-12 col-sm-6 text-right q-my-auto">
          <div @click="removeCurrentIndex(i)" class="close-btn">
            <p class="q-my-none">X</p>
          </div>
        </div>
      </div>
      <hr />
      <q-card-section>
        <div class="row">
          <div class="col-xs-12 col-sm-5 q-px-sm">
            <q-select
              v-model="item.name"
              label="Select Product"
              :options="products"
            />
          </div>
          <div class="col-xs-12 col-sm-5 q-px-sm">
            <q-input
              label="Quantity"
              type="number"
              v-model.number="item.quantity"
              filled
            />
          </div>
          <div class="col-xs-12 col-sm-2 q-px-sm">
            <q-input
              label="Cost Price"
              type="number"
              v-model.number="item.costPrice"
              filled
            />
          </div>
        </div>
      </q-card-section>
    </q-card> -->
    <!-- <Table
      class="full-width"
      :isLoading="isLoading"
      :data="data"
      :tableDef="tableDef"
    >
      <template #date="{ props }">
        <div class="row">
          <p>{{ props.row.date }}</p>
        </div>
      </template>
      <template #actions="{ props }">
        <div class="row">
          <q-btn
            class="q-pa-none"
            flat
            round
            color="primary"
            icon="close"
            @click="removeCurrentIndex(props.row)"
          />
        </div>
      </template>
    </Table> -->
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
            :options="products"
            v-model="props.row.name"
            label="Select Product"
            @filter="filterFn"
          />
        </div>
      </template>
      <template #quantity="{ props }">
        <q-input borderless type="number" v-model.number="props.row.quantity" />
      </template>
      <template #costPrice="{ props }">
        <q-input
          borderless
          type="number"
          v-model.number="props.row.costPrice"
        />
      </template>
      <template #salePrice="{ props }">
        <q-input
          borderless
          type="number"
          v-model.number="props.row.salePrice"
        />
      </template>
      <template #batchNumber="{ props }">
        <q-input
          borderless
          type="number"
          v-model.number="props.row.batchNumber"
        />
      </template>
      <template #actions="{ props }">
        <div class="row">
          <q-btn
            class="q-pa-none"
            flat
            round
            color="primary"
            icon="close"
            @click="removeCurrentIndex(props.row)"
          />
        </div>
      </template>
    </Table>
    <div class="row">
      <q-btn @click="addNewItem" label="Add Product" />
    </div>
    <div class="row q-my-sm">
      <q-btn
        type="submit"
        :label="isEditing ? 'Update Receiving' : 'Submit'"
        color="primary"
        class="full-width"
      />
    </div>
  </q-form>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';
import InventoryModel from './InventoryModel';
import ProductService from '../products/ProductService';
import ProductModel from '../products/ProductModel';
import InventoryProductModel from './ProductModel';
import InventoryService from './InventoryService';
import VendorService from '../vendors/VendorService';
import VendorModel from '../vendors/VendorModel';
import TableModel from '../../components/General/Table/TableModel';
import PagedResultModel from '../../interfaces/PagedResultModel';
import Column from '../../components/General/Table/ColumnModel';
import Table from '../../components/General/Table/Table.vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  components: { Table },
  emits: ['close', 'refreshList'],
  setup(_, context) {
    const isLoading = ref(false);
    const isEditing = ref(false);
    const newDate = new Date().toJSON();
    const vendors = ref<Array<String>>([]);
    const products = ref<Array<string>>([]);
    const $q = useQuasar();

    const receiveItems = ref<InventoryModel>({
      vendorName: '',
      receivingNumber: 0,
      date: newDate,
      reference: '',
      products: [
        {
          name: '',
          batchNumber: '0',
          quantity: 0,
          costPrice: 0,
          salePrice: 0,
        },
      ],
      totalValue: 5,
    });

    const data = ref<PagedResultModel<InventoryProductModel>>(
      new PagedResultModel<InventoryProductModel>()
    );
    const tableDef = ref<TableModel>(
      new TableModel([
        new Column('name', 'Name', true, true),
        new Column('batchNumber', 'Batch Number', true, true),
        new Column('quantity', 'Quantity', true, true),
        new Column('costPrice', 'Cost Price', true, true),
        new Column('salePrice', 'Sale Price', true, true),
        new Column('actions', 'Actions', false, true),
      ])
    );

    async function generateInvoiceNo() {
      try {
        const data = await InventoryService.getInventoryList();
        receiveItems.value.receivingNumber = data.length;
      } catch (error) {
        console.log(error);
      }
    }

    const resetForm = () => {
      receiveItems.value = {
        vendorName: '',
        receivingNumber: 0,
        date: newDate,
        reference: '',
        products: [
          {
            name: '',
            batchNumber: '0',
            quantity: 0,
            costPrice: 0,
            salePrice: 0,
          },
        ],
        totalValue: 0,
      };
      generateInvoiceNo();
    };

    const setToEdit = (item: InventoryModel) => {
      isEditing.value = true;
      isLoading.value = true;
      receiveItems.value._id = item._id;
      receiveItems.value.vendorName = item.vendorName;
      receiveItems.value.receivingNumber = item.receivingNumber;
      receiveItems.value.date = item.date;
      receiveItems.value.reference = item.reference;
      receiveItems.value.products = item.products;
      data.value.results = receiveItems.value.products;
      isLoading.value = false;
    };

    const totalAmount = () => {
      const temp: number[] = [];
      receiveItems.value.products = data.value.results;
      receiveItems.value.products.forEach((x) =>
        temp.push(x.quantity * x.costPrice)
      );
      receiveItems.value.totalValue = temp.reduce((a, b) => a + b);
    };

    const onSubmit = async () => {
      totalAmount();
      try {
        await InventoryService.receiveProducts(receiveItems.value);
        $q.notify({
          color: 'primary',
          message: 'Added Successfully',
        });
        resetForm();
        context.emit("refreshList")
      } catch (error) {
        console.log(error);
      }
    };

    const updateReceiving = async () => {
      totalAmount();
      try {
        await InventoryService.updateReceiving(receiveItems.value);
        $q.notify({
          color: 'primary',
          message: 'Updated Successfully',
        });
        resetForm();
        context.emit("refreshList")
      } catch (error) {
        console.log(error);
      }
    };

    const removeCurrentIndex = (index: number) => {
      receiveItems.value.products = receiveItems.value.products.filter(
        (x, i) => i !== index
      );
    };

    const addNewItem = () => {
      const newItem = {
        id: '',
        name: '',
        quantity: 0,
        batchNumber: '0',
        costPrice: 0,
        salePrice: 0,
      };
      data.value.results.push(newItem);
    };

    const filterFn = (val: any, update: any) => {
      update(() => {
        const needle = val.toLowerCase();
        products.value = products.value.filter(
          (v) => v.toLowerCase().indexOf(needle) > -1
        );
      });
    };

    onMounted(async () => {
      try {
        await generateInvoiceNo();
        data.value.results = receiveItems.value.products;
        const productsReq = await ProductService.getProducts();
        products.value = productsReq.map(
          (product: ProductModel) => product.name
        );
        console.log(products.value);
        const vendorReq = await VendorService.getVendors();
        vendors.value = vendorReq.map((vendor: VendorModel) => vendor.name);
      } catch (error) {
        console.log(error);
      }
    });

    return {
      data,
      vendors,
      tableDef,
      products,
      isLoading,
      isEditing,
      receiveItems,
      onSubmit,
      filterFn,
      setToEdit,
      resetForm,
      addNewItem,
      updateReceiving,
      removeCurrentIndex,
    };
  },
});
</script>

<style lang="scss">
.close-btn {
  background-color: rgb(0, 0, 0);
  cursor: pointer;
  color: white;
  margin-left: auto;
  border-radius: 50%;
  padding: 7px;
  width: 30px;
  height: 30px;
  p {
    text-align: center;
    margin: -1px 4px;
  }
}
</style>
