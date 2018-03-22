<template>
  <div class="block">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) in data" :key="index">
        <img :src="item.carousel" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
    }
  },
  props: {
    data: {
      type: Array
    }
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
.block {
  height: 800px;
}
</style>
