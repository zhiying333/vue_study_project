import Vue from 'vue'
import 'lib-flexible/flexible'
import { Button } from 'mint-ui';

import App from './App.vue'
import router from './router'
import Header from './components/Header/Header.vue'
import store from './vuex/store'
import './veeValidate'

Vue.component(Button.name, Button)

Vue.config.productionTip = false

//注册全局组件
Vue.component('Header', Header)

new Vue({
  render: h => h(App),
  router, //所有组件都能看到$router和$route
  store
}).$mount('#app')
