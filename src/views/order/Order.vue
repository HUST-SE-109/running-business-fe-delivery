<template>
  <h1>Order</h1>
</template>

<script>
import { fetchDeliveryOrderList } from '@/api/order';

export default {
  name: 'Order',
  mounted() {
    fetchDeliveryOrderList()
      .then(({ data: { data } }) => {
        // console.log(data);
      });
  },
};
</script>

<style scoped>

</style>
