<template>
  <div>
    <h5>Bill Details</h5>
  </div>
</template>


<script>
import { BILL_QUERY } from '../../constants/graphql'

export default {
  name: 'BillDetails',
  data() {
    return {
      bill: '',
      loading: 0
    }
  },
  apollo: {
    bill: {
      query: BILL_QUERY,
      variables: {
        id: 30
      }
    }
  }
}
</script>