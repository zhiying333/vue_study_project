import Vue from 'vue'
import 'lib-flexible/flexible'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router //所有组件都能看到$router和$route
}).$mount('#app')
