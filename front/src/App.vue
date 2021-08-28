<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <router-link class="no-underline" to="/">
            <div class="row">
              <q-avatar>
                <img src="@/assets/logo.png" />
              </q-avatar>
              <h6 class="q-my-xs cl-white">
                Tech Origin
              </h6>
            </div>
          </router-link>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <Sidebar v-model="leftDrawerOpen" />
    <q-page-container class="q-mx-md">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';
import Sidebar from './components/Layout/Sidebar.vue';

export default {
  components: { Sidebar },
  name: 'App',

  setup() {
    return {
      leftDrawerOpen: ref(false),
    };
  },
};
</script>
<style lang="scss">
.no-underline {
  text-decoration: none;
}
header {
  background-color: #1d1b1b !important;
}
.cl {
  &-white {
    color: white;
  }
  &-black {
    color: black;
  }
}
</style>
