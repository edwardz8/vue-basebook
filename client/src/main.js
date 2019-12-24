import VueCompositionApi from '@vue/composition-api'
import Vue from 'vue'
import {
  axios
} from '@/plugins/axios'
import Vuex from 'vuex'
// import VueAxios from 'vue-axios'
import VueAxios from './plugins/axios'
import './assets/css/tailwind.css'
import './registerServiceWorker'
import * as firebase from 'firebase/app';
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

var firebaseConfig = {
  apiKey: "AIzaSyB0y1__NDxBoW8WcI5iCtb8092HM3mpmKk",
  authDomain: "basebook-0.firebaseapp.com",
  databaseURL: "https://basebook-0.firebaseio.com",
  projectId: "basebook-0",
  storageBucket: "basebook-0.appspot.com",
  messagingSenderId: "504453600708",
  appId: "1:504453600708:web:25b97af64c846b42c58091",
  measurementId: "G-YS9W2JS5DW"
};

// Initialize Firestore instance
firebase.initializeApp(firebaseConfig);

// Setting up default vue http modules for api calls
Vue.prototype.$http = axios;

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')