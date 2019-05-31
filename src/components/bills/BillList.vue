<template>
  <div>
    <h2>Welcome to Bills</h2>
    <div>{{allBills}}</div>
  </div>
</template>

<script>
import { BILLS_QUERY } from '../../constants/graphql'
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
      query: BILLS_QUERY
    }
  }
}
</script>
