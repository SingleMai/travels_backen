<template>
  <div class="card">
    <div class="head">
      <img :src="data.headImg" alt="">
    </div>
    <div class="info">
      <p class="title">靠谱导游靠谱导游靠谱导游靠谱导游靠谱导游靠谱导游</p>
      <p class="time" v-show="data.status">{{ data.time }}</p>
      <p class="price">￥{{ data.price }}</p>
      <p class="status" v-show="data.status">{{ data.status }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {}
  },
  props: {
    data: {
      type: Object
    }
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
@import "src/common/sass/variable.sass";
$cardWidth: 250px;
.card {
  display: flex;
  align-content: center;
  box-sizing: border-box;
  padding: 40px;
  background: white;
  .head {
    width: $cardWidth;
    height: $cardWidth;
    flex-basis: $cardWidth;
    background: pink;
  }
  .info {
    position: relative;
    margin-left: 40px;
    font-size: 55px;
    width: calc(100% - $cardWidth - 40px);
    .title, .time, .price {
      max-width: 900px;
      margin: 30px 0;
    }
    .title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .time {
      color: $grey-text;
    }
    .status {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
}
</style>
