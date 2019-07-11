// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false;
require('typeface-poppins');
/* eslint-disable no-new */
import axios from 'axios'


axios.defaults.baseURL = 'http://127.0.0.1:8000/'
// axios.defaults.headers.common['Authorization'] = 'hahahah'
// axios.defaults.headers.get['Accepts'] = 'application/json'
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
