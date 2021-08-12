<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Tab Links
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/vendors" label="Vendors" />
        <q-route-tab to="/brands" label="Brands" />
        <q-route-tab to="/categories" label="Categories" />
        <q-route-tab to="/products" label="Products" />
        <q-route-tab to="/inventory" label="Inventory" />
        <q-route-tab to="/accounts" label="Accounts" />
      </q-tabs>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'App',

  setup() {
    return {
      leftDrawerOpen: ref(false),
    };
  },
};
</script>
