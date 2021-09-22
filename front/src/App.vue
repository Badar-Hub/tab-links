<template>
  <div>
    <div v-show="!isLoggenIn">
      <div class="column justify-center login-user">
        <q-card>
          <q-card-section>
            <div class="row">
              <div class="row logo full-width justify-center">
                <img src="@/assets/logo.png" />
              </div>
              <div class="row full-width">
                <hr class="full-width" />
              </div>
              <div class="col-xs-12 q-my-sm">
                <q-input label="Email" type="email" v-model="user.email" />
              </div>
              <div class="col-xs-12 q-my-sm">
                <q-input
                  label="Password"
                  type="password"
                  v-model="user.password"
                />
              </div>
              <div class="col-xs-12 q-my-md">
                <q-btn
                  class="full-width"
                  label="Login"
                  @click="loginUser"
                  color="primary"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div v-show="isLoggenIn">
      <q-layout view="lHh Lpr lFf">
        <q-header elevated class="text-white q-px-sm" height-hint="98">
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
            <q-btn
              @click="leftDrawerOpen = !leftDrawerOpen"
              icon="menu"
              size="14px"
            />
          </q-toolbar>
          <hr />
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
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import Sidebar from './components/Layout/Sidebar/Sidebar.vue';
import UserService from './services/UserService';
import UserModel from './interfaces/UserModel';
import { RouteRecordRaw, useRoute, useRouter } from 'vue-router';

export default {
  components: { Sidebar },
  name: 'App',

  setup() {
    const route = useRoute();
    const router = useRouter();
    const subRoutes = ref<RouteRecordRaw[] | undefined>([]);
    const user = ref<UserModel>({
      email: '',
      password: '',
    });

    const isLoggenIn = computed(() => {
      return localStorage.getItem('token') ? true : false;
    });

    const loginUser = async () => {
      try {
        const data = await UserService.loginUser(user.value);
        localStorage.setItem('token', data);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    };

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
      user,
      loginUser,
      subRoutes,
      isLoggenIn,
      leftDrawerOpen: ref(false),
    };
  },
};
</script>
<style lang="scss">
.login-user {
  height: 100vh;
  max-width: 600px;
  width: 100%;
  margin: auto;
  .logo {
    img {
      max-height: 200px;
      margin: auto;
    }
  }
}
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
