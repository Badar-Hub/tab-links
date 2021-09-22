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
      <q-btn
        @click="leftDrawerOpen = !leftDrawerOpen"
        icon="menu"
        size="14px"
      />
      <q-tabs v-show="subRoutes" align="left">
        <div v-for="(route, index) in subRoutes" :key="index">
          <q-route-tab :to="route.path" :label="route.name" />
        </div>
      </q-tabs>
    </q-header>

    <Sidebar v-model="leftDrawerOpen" />
    <q-page-container class="q-mx-md">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { onMounted, ref, watch } from 'vue';
import Sidebar from './components/Layout/Sidebar/Sidebar.vue';
import { RouteRecordRaw, useRoute, useRouter } from 'vue-router';

export default {
  components: { Sidebar },
  name: 'App',

  setup() {
    const route = useRoute();
    const router = useRouter();
    const subRoutes = ref<RouteRecordRaw[] | undefined>([]);

    const currentRoute = route.fullPath;
    console.log(router.options.routes, currentRoute);

    watch(
      () => route.fullPath,
      () => onRouteChange()
    );

    const onRouteChange = () => {
      let currentRoutePath = route.fullPath;
      const temp = route.fullPath.split('/');

      if (temp) {
        currentRoutePath = `/${temp[1]}`;
      }

      subRoutes.value = router.options.routes.find(
        (subRou) => subRou.path === currentRoutePath
      )?.children;
    };

    onMounted(() => {
      onRouteChange();
    });

    return {
      subRoutes,
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
