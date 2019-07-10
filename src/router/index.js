import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import BillList from '@/components/bills/BillList'
import BillDetails from '@/components/bills/BillDetails'

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
      name: 'Bills',
      component: BillList
    },
    {
      path: '/bill/:billId',
      name: 'BillDetails',
      component: BillDetails,
      props: true
    }
  ]
})
