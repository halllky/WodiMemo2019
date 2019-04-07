import Vue from 'vue';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;
Vue.filter('asDate', (value: number) => new Date(value).toLocaleString());

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
