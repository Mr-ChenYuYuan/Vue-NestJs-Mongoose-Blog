import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import PostList from '../views/posts/PostList.vue'
import PostEdit from '../views/posts/PostEdit.vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Main,
    children: [
      { path: '/',component: Home, },
      { path: 'posts/list',component: PostList, },
      { path: 'posts/edit/:id',component: PostEdit,props: true },
      { path: 'posts/create',component: PostEdit, },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
