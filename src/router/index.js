import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import List from '@/components/List'
import Quiz from '@/components/Quiz'
import Quiz1 from '@/components/Quiz1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/quiz',
      name: 'Quiz',
      component: Quiz
    },
    {
      path: '/quiz1',
      name: 'Quiz1',
      component: Quiz1
    }
  ]
})
