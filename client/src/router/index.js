import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import store from '../store'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Profile from '../components/Profile.vue'
import Home from '../views/Home.vue'
import Players from '../views/Players.vue'
import PlayerProfile from '../views/PlayerProfile.vue'
import LoginToken from '../components/LoginToken.vue'
import Admin from '../components/Admin'

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
    path: '/login/token/:token',
    name: 'login-token',
    component: LoginToken
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    beforeEnter(to, from, next) {
      if (store.getters.isLoggedIn) {
        next();
      } else {
        next('/')
      }
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
    path: '/player',
    name: 'PlayerProfile',
    component: PlayerProfile,
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