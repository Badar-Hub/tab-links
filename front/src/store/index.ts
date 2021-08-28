import { createStore } from "vuex";
import { RouteRecordRaw } from "vue-router";

const store = createStore({
  state: {
    sidebar: {
      isOpen: true,
      isExtended: true,
      isSecondaryOpen: true,
      extendedItem: {}
    }
  },
  getters: {
    isSidebarExtended: state => {
      return state.sidebar.isExtended;
    },
    isScondarySidebarOpen: state => {
      return state.sidebar.isSecondaryOpen;
    }
  },
  mutations: {
    toggleSecondaryNav(state, newState?: boolean) {
      if (typeof newState != null && typeof newState !== "undefined")
        state.sidebar.isSecondaryOpen = newState;
      else state.sidebar.isSecondaryOpen = !state.sidebar.isSecondaryOpen;
    },
    setSidebarExtendedItem(state, item: RouteRecordRaw) {
      state.sidebar.extendedItem = item;
    },
    setIsSidebarExtended(state, isExtended: boolean) {
      state.sidebar.isExtended = isExtended;
    },
    setSidebarIsOpen(state, val: boolean) {
      state.sidebar.isOpen = val;
    },
  },
  actions: {
    // setTotalAmount(context) {
    //   context.commit("setTotalAmount");
    // },
    // clearProducts(context) {
    //   context.commit("clearProducts");
    // },
    // setSelectedCategory: (store, category) => {
    //   store.commit("setSelectedCategory", category)
    // },
    // setSelectedSubCategory: (store, subCategory) => {
    //   store.commit("setSelectedSubCategory", subCategory)
    // },
    // setMobileFilter: (store, newValue) => {
    //   store.commit('setMobileFilter', newValue)
    // },
    // setCategorySale: (store, newValue) => {
    //   store.commit('setCategorySale', newValue)
    // },
  },
});

export default store;
