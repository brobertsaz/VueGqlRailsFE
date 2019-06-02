<template>
  <div class="card mt-3" key={{bill.id}}>
    <div class="card-body">
      <h5 class="card-title">{{bill.number}}</h5>
      <p class="card-text">{{bill.title}}</p>
      <router-link :to="{ name: 'BillDetails', params: { billId: 123 }}">View Bill</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BillItem',
    props: ['bill']
  }
</script>