<template>
  <div class="content">
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
    </div>
    <p class="instru">{{ data.instroduction }}</p>
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
$cardHeight: 180px;
$grey-text: #919191;
.content {
  background: white;
  margin: 50px 0;
  padding: 50px;
  .user-card-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    // height: $cardHeight; ;
    margin-bottom: 10px;
    .block-left {
      display: flex;
      height: 100%;
      .head-img {
        width: $cardHeight;
        height: $cardHeight;
        flex: 0 0 $cardHeight;
        border-radius: 50%;
        background: pink;
        overflow: hidden;
      }
      .user-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 40px;
        padding-bottom: 10px;
        .name {
          font-size: 50px;
        }
      }
    }
  }
  .instru {
    color: $grey-text;
    font-size: 18px;
    line-height: 60px;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}
</style>
