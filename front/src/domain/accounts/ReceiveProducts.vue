<template>
  <Modal width="700px" title="Receive Prodducts">
    <q-form @submit="onSubmit">
      <div class="row">
        <div class="col-xs-12 col-sm-6 q-pa-sm">
          <q-select :options="['Musa', 'Ilyas']" label="Select Vendor" filled />
        </div>
        <div class="col-xs-12 col-sm-6 q-pa-sm">
          <q-input label="GR No" filled />
        </div>
        <div class="col-xs-12 col-sm-6 q-pa-sm">
          <q-input label="Date" filled />
        </div>
        <div class="col-xs-12 col-sm-6 q-pa-sm">
          <q-input label="Reference" filled />
        </div>
      </div>
      <q-card
        v-for="(item, i) in receiveItems"
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
            <div class="col-xs-12 col-sm-6 q-px-sm">
              <q-select
                v-model="item.name"
                label="Select Product"
                :options="['Hello', 'World']"
              />
            </div>
            <div class="col-xs-12 col-sm-6 q-px-sm">
              <q-input
                label="Quantity"
                type="number"
                v-model="item.quantity"
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
import { ref, defineComponent } from 'vue';
import Modal from '@/components/General/Modal.vue';

export default defineComponent({
  components: { Modal },
  setup() {
    const receiveItems = ref([
      {
        id: '',
        name: '',
        quantity: 0,
      },
    ]);

    const removeCurrentIndex = (index: Number) => {
      receiveItems.value = receiveItems.value.filter((x, i) => i !== index);
    };

    const addNewItem = () => {
      const newItem = {
        id: '',
        name: '',
        quantity: 0,
      };
      receiveItems.value.push(newItem);
    };

    return {
      addNewItem,
      receiveItems,
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
