<template>
  <div class="block-title">
    <div class="word">
      <h2 class="head">{{title}}</h2>
      <p class="introduction">{{subTitle}}</p>
    </div>
    <p class="btn-more" @click.stop="getMore()">更多</p>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {}
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: true
    }
  },
  methods: {
    getMore () {
      console.log('更多按钮被点击')
    }
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
.block-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .word {
    display: flex;
    align-items: center;
    .head {
      width: 400px;
      text-align: center;
      font-size: 65px;
      border-right: 1px solid; /* no */
    }
    .introduction {
      text-indent: 1em;
      font-size: 40px;
      color: #919191;
    }
  }
  .btn-more {
    position: relative;
    margin-right: 90px;
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: -40px;
      width: 40px;
      height: 40px;
      border-top: 1px solid #f90;/* no */
      border-left: 1px solid #f90;/* no */
      transform: translateY(-50%) rotate(135deg);
    }
  }
}
</style>
