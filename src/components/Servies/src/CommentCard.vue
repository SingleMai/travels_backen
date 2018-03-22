<template>
  <div class="box">
    <div class="user-box">
      <div class="user-left">
        <div class="avator">
          <img :src="data.commenter.head" alt="">
        </div>
        <div class="info">
          <p class="name">蜡笔小新</p>
          <p class="starts">★</p>
        </div>
      </div>
      <div class="user-right">
        <p class="time">{{ data.time | formateTime }}</p>
      </div>
    </div>
    <p class="content">司机不错</p>
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
  },
  filters: {
    formateTime (oriDate) {
      const _date = new Date(oriDate)
      const date = `${_date.getFullYear()}-${_date.getMonth() + 1}-${_date.getDate()}`
      // const time = `${_date.getHours()}:${_date.getMinutes()}:${_date.getSeconds()}`
      return date
    }
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
@import "src/common/sass/variable.sass";
$avatorWidth: 180px;
.box {
  padding: 10px 40px;
  background: white;
  .user-box {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    margin-bottom: 15px;
    .user-left {
      display: flex;
      justify-content: center;
      align-content: center;
      .avator {
        flex: 0 0 $avatorWidth;
        width: $avatorWidth;
        height: $avatorWidth;
        border-radius: 50%;
        overflow: hidden;
      }
      .info {
        margin-left: 30px;
        font-size: 20px;
        .name {
          margin-bottom: 30px;
        }
        .starts {
          color: #f0f06f;
        }
      }
    }
    .user-right {
      .time {
        font-size: 20px;
      }
    }
  }
  .content {
    font-size: 20px;
    color: $grey-text;
  }
}
</style>
