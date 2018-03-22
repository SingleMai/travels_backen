<template>
  <div class="header">
    <p class="text">{{ title }}</p>
    <p class="btn-right" @click="rightClick">{{ rightText }}</p>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {}
  },
  methods: {
    rightClick () {
      this.$emit('rightClick')
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    rightText: {
      type: String
    }
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
.header {
  position: relative;
  height: 220px;
  text-align: center;
  background: white;
  border-bottom: 1px pink;
  box-shadow: 0 5px 80px pink;
  .text {
    display: inline-block;
    vertical-align: top;
    line-height: 220px;
    font-size: 100px;
  }
  .btn-right {
    position: absolute;
    top: 0;
    right: 0;
    line-height: 220px;
    margin-right: 30px;
    font-size: 80px;
  }
}
</style>
