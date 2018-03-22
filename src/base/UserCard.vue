<template>
  <div class="user-card-block">
    <div class="block-left">
      <div class="head-img">
        <img :src="data.head" alt="">
      </div>
      <div class="user-info">
        <p class="name">{{ data.name }}</p>
        <validate-bar :data="data"></validate-bar>
      </div>
    </div>
    <div class="block-right">
      <p class="status">离线</p>
      <p class="likes">🔥18人好评</p>
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
$cardHeight: 250px;
$grey-text: #919191;
.user-card-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: $cardHeight;
  padding: 50px;
  .block-left {
    display: flex;
    height: 100%;
    .head-img {
      width: $cardHeight;
      height: $cardHeight;
      border-radius: 40px;
      overflow: hidden;
    }
    .user-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 40px;
      padding-bottom: 10px;
      .label-list {
        display: flex;
        .label-item {
          padding-right: 20px;
          font-size: 40px;
          color: $grey-text;
        }
      }
    }
  }
  .block-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    height: 100%;
    font-size: 40px;
    padding-bottom: 10px;
    color: $grey-text;
  }
}
</style>
