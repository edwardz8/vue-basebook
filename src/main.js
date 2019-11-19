import VueCompositionApi from '@vue/composition-api';
import * as firebase from 'firebase';
import Vue from 'vue';

import './assets/css/tailwind.css';
import './registerServiceWorker';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueCompositionApi);
Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: 'AIzaSyDSCze4KVkWRDkU1Ync0tVj31CfPit2FzY',
  authDomain: 'basebook-92100.firebaseapp.com',
  databaseURL: 'https://basebook-92100.firebaseio.com',
  projectId: 'basebook-92100',
  storageBucket: 'basebook-92100.appspot.com',
  messagingSenderId: '46273488588',
  appId: '1:46273488588:web:d7ca0fba24117e4a1c4469',
  measurementId: 'G-GQE6B4MS20'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
