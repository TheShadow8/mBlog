// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueRouter from 'vue-router'
import vueResource from 'vue-resource'
import Blogs from './components/Blogs'
import About from './components/About'
import BlogDetails from './components/BlogDetails'
import Add from './components/Add'
import Edit from './components/Edit'
import Images from './components/Images'


Vue.config.productionTip = false

Vue.use(vueResource)
Vue.use(vueRouter)

const router = new vueRouter({
  routes: [{
      path: '/',
      component: Blogs
    },
    {
      path: '/about',
      component: About
    },

    {
      path: '/add',
      component: Add
    },
    {
      path: '/blog/:id',
      component: BlogDetails
    },
    {
      path: '/edit/:id',
      component: Edit
    },
    {
      path: '/images',
      component: Images
    }
  ]
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)

})
