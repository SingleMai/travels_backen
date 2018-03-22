<template>
  <div class="server-card-block">
    <div class="img">
      <img :src="data.headImg" alt="">
    </div>
    <div class="info">
      <div class="info-left">
        <p class="title">{{ data.title }}</p>
        <validate-bar></validate-bar>
        <p class="views">
          <i class="el-icon-view"></i>
          {{ data.views }}人浏览过
        </p>
      </div>
      <p class="info-right price">￥ {{ data.price }}</p>
      <div class="avator">
        <img :src="data.user.head" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import ValidateBar from 'base/ValidateBar'
export default {
  name: '',
  data () {
    return {}
  },
  props: {
    data: {
      type: Object
    }
  },
  components: {
    ValidateBar
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
$grey-text: #919191;
.server-card-block {
  padding-top: 50px;
  .img {
    width: 100%;
    height: 850px;
    background: pink;
  }
  .info {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 60px;
    .info-left {
      .title {
        margin: 20px 0;
        font-size: 60px;
      }
      .views {
        margin: 20px 0;
        color: $grey-text;
        font-size: 40px;
      }
    }
    .info-right.price {
      font-size: 60px;
    }
    .avator{
      position: absolute;
      top: -65%;
      right: 40px;
      width: 250px;
      height: 250px;
      border-radius: 50%;
      overflow: hidden;
      border: 1px solid $grey-text;
    }
  }
}
</style>
