import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Region from '@/views/Region.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/region',
        name: 'region',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './views/Region.vue')
      },
    {
        path: '/grants/topic/:filter?',
        name: 'topic-grants',
        props: true,
        component: () => import(/* webpackChunkName: "about" */ './views/Grants.vue')
      },
      {
          path: '/grants/:filter?',
          name: 'grants',
          props: true,
          component: () => import(/* webpackChunkName: "about" */ './views/Grants.vue')
      },
      {
          path: '/grants/region/:filter?',
          name: 'region-grants',
          props: true,
          component: () => import(/* webpackChunkName: "about" */ './views/Grants.vue')
      },
      {
          path: '/grants/search/:filter?',
          name: 'search-grants',
          props: true,
          component: () => import(/* webpackChunkName: "about" */ './views/Grants.vue')
      },
    {
        path: '/topics',
        name: 'topics',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './views/Topics.vue')
    }
  ]
})
