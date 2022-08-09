import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './store'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';


import vueForm from 'vue-form'


Vue.use(vueForm).use(axios)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
