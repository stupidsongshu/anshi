import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/devsecops',
    name: 'DevSecOps',
    component: () => import(/* webpackChunkName: "devsecops" */ '../views/DevSecOps.vue'),
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import(/* webpackChunkName: "service" */ '../views/Service.vue'),
  },
  {
    path: '/solution',
    name: 'Solution',
    component: () => import(/* webpackChunkName: "solution" */ '../views/Solution.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/job',
    name: 'Job',
    component: () => import(/* webpackChunkName: "job" */ '../views/Job.vue'),
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});

export default router;
