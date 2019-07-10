<template>
  <div>
    <h2>Welcome to Bills</h2>
    <bill-item v-for="bill in allBills.nodes" :key="bill.id" :bill="bill"></bill-item>
  </div>
</template>

<script>
import { BILLS_QUERY } from '../../constants/graphql'
import BillItem from './BillItem'

export default {
  name: 'BillList',
  data() {
    return {
      allBills: [],
      loading: 0
    }
  },
  apollo: {
    allBills: {
      query: BILLS_QUERY,
      variables: {
        first: 30
      }
    }
  },
  components: {
    BillItem
  }
}
</script>
