<template>
  <Modal width="700px" title="Receive Prodducts">
    <q-form @submit="onSubmit">
      <div class="row">
        <div class="col-xs-12 col-sm-6 q-pa-sm">
          <q-select
            v-model="receiveItems.vendor"
            :options="vendors"
            label="Select Vendor"
            filled
          />
        </div>
        <div class="col-xs-12 col-sm-6 q-pa-sm">
          <q-input v-model="receiveItems.invoiceNo" label="Invoice No" filled />
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
      <q-card
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
      </q-card>
      <div class="row">
        <q-btn @click="addNewItem" label="Add Product" />
      </div>
      <div class="row q-my-sm">
        <q-btn
          type="submit"
          label="Submit"
          color="primary"
          class="full-width"
        />
      </div>
    </q-form>
  </Modal>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';
import Modal from '@/components/General/Modal.vue';
import InventoryModel from './InventoryModel';
import ProductService from '../products/ProductService';
import ProductModel from '../products/ProductModel';
import InventoryService from './InventoryService';
import VendorService from '../vendors/VendorService';
import VendorModel from '../vendors/VendorModel';

export default defineComponent({
  components: { Modal },
  emits: ['close'],
  setup(_, context) {
    const receiveItems = ref<InventoryModel>({
      vendor: '',
      invoiceNo: '',
      date: '2021/02/01',
      reference: '',
      products: [
        {
          name: '',
          quantity: 0,
          costPrice: 0,
        },
      ],
    });
    const vendors = ref<Array<String>>([]);
    const products = ref<[]>([]);

    const resetForm = () => {
      receiveItems.value = {
        vendor: '',
        invoiceNo: '',
        date: '2021/02/01',
        reference: '',
        products: [
          {
            name: '',
            quantity: 0,
            costPrice: 0,
          },
        ],
      };
    };

    const setToEdit = (item: InventoryModel) => {
      receiveItems.value._id = item._id;
      receiveItems.value.vendor = item.vendor;
      receiveItems.value.invoiceNo = item.invoiceNo;
      receiveItems.value.date = item.date;
      receiveItems.value.reference = item.reference;
      receiveItems.value.products = item.products;
    };

    const onSubmit = async () => {
      try {
        await InventoryService.receiveProducts(receiveItems.value);
        console.log('Successfully');
        resetForm();
        context.emit('close');
      } catch (error) {
        console.log(error);
      }
    };

    const removeCurrentIndex = (index: Number) => {
      receiveItems.value.products = receiveItems.value.products.filter(
        (x, i) => i !== index
      );
    };

    const addNewItem = () => {
      const newItem = {
        id: '',
        name: '',
        quantity: 0,
        costPrice: 0,
      };
      receiveItems.value.products.push(newItem);
    };

    onMounted(async () => {
      try {
        const productsReq = await ProductService.getProducts();
        products.value = productsReq.map(
          (product: ProductModel) => product.name
        );
        const vendorReq = await VendorService.getVendors();
        vendors.value = vendorReq.map((vendor: VendorModel) => vendor.name);
      } catch (error) {
        console.log(error);
      }
    });

    return {
      addNewItem,
      setToEdit,
      resetForm,
      receiveItems,
      products,
      removeCurrentIndex,
      onSubmit,
      vendors,
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
