import Vue from 'vue';
import Vuex from 'vuex';
import MyStorage from './ts/my-storage';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    storage: new MyStorage('wodi2019'),
  },
  mutations: {

  },
  actions: {

  },
});
