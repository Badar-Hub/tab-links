<template>
  <div class="sidebar">
    <q-drawer v-bind="$attrs" show-if-above side="left" bordered>
      <div class="row justify-center q-px-sm">
        <router-link to="/">
          <img class="logo" src="@/assets/logo.png" />
        </router-link>
      </div>
      <div class="row">
        <hr class="full-width" />
      </div>
      <router-link class="button" to="/">
        <div class="row q-px-xl q-my-sm button">
          <h6 class="q-my-sm cl-white">Dashboard</h6>
        </div>
      </router-link>
      <router-link class="button" to="/create">
        <div class="row q-px-xl q-my-sm button">
          <h6 class="q-my-sm cl-white">Create</h6>
        </div>
      </router-link>
      <router-link class="button" to="/brands">
        <div class="row q-px-xl q-my-sm button">
          <h6 class="q-my-sm cl-white">Brands</h6>
        </div>
      </router-link>
      <router-link class="button" to="/products">
        <div class="row q-px-xl q-my-sm button">
          <h6 class="q-my-sm cl-white">Products</h6>
        </div>
      </router-link>
      <router-link class="button" to="/categories">
        <div class="row q-px-xl q-my-sm button">
          <h6 class="q-my-sm cl-white">Categories</h6>
        </div>
      </router-link>
      <router-link class="button" to="/accounts">
        <div class="row q-px-xl q-my-sm button">
          <h6 class="q-my-sm cl-white">Accounts</h6>
        </div>
      </router-link>
    </q-drawer>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const router = useRouter();

    const routes = computed(() => {
      return router.options.routes;
    });

    return {
      router,
      routes,
    };
  },
});
</script>

<style lang="scss">
.sidebar {
  .button {
    cursor: pointer;
    text-decoration: none;
    &:hover {
      background-color: crimson;
    }
  }
  .q-drawer {
    background-color: #1d1b1b;
  }
  .logo {
    max-width: 230px;
    width: 100%;
  }
}
</style>
