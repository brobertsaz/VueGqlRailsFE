import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import BillList from '@/components/bills/BillList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/bills',
      name: 'Billd',
      component: BillList
    }
  ]
})
