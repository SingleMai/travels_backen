<template>
  <div class="main">
    <div class="card">
      <div class="head">
        <img :src="data.headImg" alt="">
      </div>
      <div class="info">
        <p class="title">靠谱导游靠谱导游靠谱导游靠谱导游靠谱导游靠谱导游</p>
        <p class="time" v-show="data.orderId">{{ data.time | formateTime }}</p>
        <p class="price" v-if="!data.orderId">￥{{ data.price }}</p>
        <p class="price" v-else>￥{{ data.count }}</p>
        <p class="status" v-show="data.orderId">{{ data.status | ordersStatusType }}</p>
      </div>
    </div>
    <div class="btn-box">
      <p class="btn-cancel" @click="cancelOrders">取消订单</p>
      <p class="btn-pay" @click="payOrders">支付</p>
    </div>
  </div>
</template>
<script>
import { OrdersApi } from 'api'
import { MessageBox } from 'mint-ui'

const ORDER_STATUS = {
  '-1': '已失效',
  '0': '待付款',
  '1': '待接受',
  '2': '已确认',
  '3': '售后'
}

export default {
  name: '',
  data () {
    return {}
  },
  props: {
    data: {
      type: Object
    },
    index: {
      type: Number
    }
  },
  filters: {
    formateTime (date) {
      date = new Date(date)
      return `出行时间：${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    },
    ordersStatusType (val) {
      return ORDER_STATUS[val]
    }
  },
  methods: {
    payOrders () {
      this.$router.push({
        name: 'ServiesPay',
        params: {
          id: this.data.orderId
        },
        query: {
          order: JSON.stringify(this.data),
          server: JSON.stringify(this.data)
        }
      })
    },
    async cancelOrders () {
      await MessageBox.confirm('是否确定取消订单', '提示')
      try {
        await OrdersApi.cancelOrders({ id: this.data.orderId })
        this.$emit('spliceItem', this.index)
      } catch (err) {

      }
    }
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
@import "src/common/sass/variable.sass";
$cardWidth: 250px;
.main {
  background: white;
  box-sizing: border-box;
  padding: 40px 40px 20px;
  margin: 40px 0;
  .card {
    display: flex;
    align-content: center;
    border-bottom: 1px solid $color-neutral-border;
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
      width: calc(100% - 250px - 40px);
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
        font-size: 30px;
      }
    }
  }
  .btn-box {
    display: flex;
    justify-content: flex-end;
    font-size: 40px;
    .btn-cancel, .btn-pay {
      margin: 10px;
      padding: 20px 40px;
      border: 1px solid $color-neutral-border;
    }
    .btn-pay {
      border-color: #ff7a7a;
      color: #ff7a7a;
    }
  }
}
</style>
