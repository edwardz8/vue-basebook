import VueCompositionApi from '@vue/composition-api'
import * as firebase from 'firebase'
import Vue from 'vue'
import {
  axios
} from '@/plugins/axios'
import Vuex from 'vuex'
// import VueAxios from 'vue-axios'
import VueAxios from './plugins/axios'
import './assets/css/tailwind.css'
import './registerServiceWorker'

import App from './App.vue'
import router from './router'
import store from './store'
/* import {
  firestorePlugin
} from 'vuefire' */

Vue.use(VueCompositionApi);
// Vue.use(firestorePlugin)
Vue.use(VueAxios)
Vue.use(Vuex)

Vue.config.productionTip = false;
// window.axios = require('axios')
// Setting up default vue http modules for api calls
Vue.prototype.$http = axios;
// Load the token from the localStorage
const token = localStorage.getItem("token");
// Is there is any token then we will simply append default axios authorization headers
/* if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
} */

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')