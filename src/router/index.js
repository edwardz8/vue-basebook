import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase'

import Login from '../components/Login.vue';
import Profile from '../components/Profile.vue';
import Home from '../views/Home.vue';
import Players from '../views/Players.vue';

Vue.use(VueRouter);

const routes = [{
    path: '*',
    redirect: '/home'
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/players',
    name: 'Players',
    component: Players,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = firebase.auth().currentUser

  if (requiresAuth && !currentUser) {
    next('/login')
  } else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
})

export default router;