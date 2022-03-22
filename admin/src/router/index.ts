import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Main from '../views/Main.vue'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import ResourceCrud from '../views/ResourceCrud.vue'
// import PostList from '../views/posts/PostList.vue'
// import PostEdit from '../views/posts/PostEdit.vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Main,
    children: [
      { path: '/',component: Home, },
      { path: '/:resource/list',component: ResourceCrud,props: true },
    ]
  },
  {
    path: '/about',
    component: About,
  }
]

const router = new VueRouter({
  routes
})

export default router
