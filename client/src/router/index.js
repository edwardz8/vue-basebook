import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/app'
import store from '../store'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Profile from '../components/Profile.vue'
import Home from '../views/Home.vue'
import Players from '../views/Players.vue'
import BatterProfile from '../views/BatterProfile.vue'
import PitcherProfile from '../views/PitcherProfile.vue'

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
    component: Login,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/players',
    name: 'Players',
    component: Players,
  },
  {
    path: '/pitcher',
    name: 'PitcherProfile',
    component: PitcherProfile,
    props: true
  },
  {
    path: '/batter',
    name: 'BatterProfile',
    component: BatterProfile,
    props: true
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      // Redirect to the Login Page
      // next('/login');
      next()
      return
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (store.getters.isLoggedIn) {
      // Redirect to the Login Page
      next('/profile');
    } else {
      next();
    }
  } else {
    next()
  }
});

export default router;