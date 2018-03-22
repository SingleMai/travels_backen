<template>
  <div>
    <div class="content">
      <mt-header title="确认并支付" class="m-header">
        <mt-button slot="left" icon="back" @click.native="back">返回</mt-button>
      </mt-header>
      <servies-card :data="server"></servies-card>
      <div class="book-msg">
        <p class="head">预定信息</p>
        <ul class="msg-list">
          <li class="msg-item">
            <p class="label">出行人数</p>
            <p class="content">{{ order.num }}人</p>
          </li>
          <li class="msg-item">
            <p class="label">预定数量</p>
            <p class="content">{{ order.num }}</p>
          </li>
          <li class="msg-item">
            <p class="label">出行时间</p>
            <p class="content" v-if="order.travel_time">{{ order.travel_time | formateDate }}</p>
            <p class="content" v-else>{{ order.travelTime | formateDate }}</p>
          </li>
          <li class="msg-item">
            <p class="label">联系人</p>
            <p class="content">嘻嘻啊</p>
          </li>
          <li class="msg-item">
            <p class="label">手机号</p>
            <p class="content">13164794363</p>
          </li>
        </ul>
      </div>
      <div class="book-msg">
        <p class="head">选择支付方式</p>
        <mt-radio
          align="right"
          v-model="payWay"
          :options="['我的钱包', '支付宝', '微信']">
        </mt-radio>
      </div>
      <btn-bottom class="bottom-box">
        <p class="btn-pay" @click="pay">立即支付</p>
      </btn-bottom>
    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
import ServiesCard from './ServiesCard'
import { getDate } from 'js/util'
import { OrdersApi } from 'api'

export default {
  name: '',
  data () {
    return {
      orderId: this.$route.params.id,
      order: JSON.parse(this.$route.query.order),
      server: this.$route.query.server ? JSON.parse(this.$route.query.server) : {},
      payWay: '我的钱包'
    }
  },
  methods: {
    async pay () {
      try {
        await OrdersApi.payOrders({ id: this.orderId })
        this.$router.push({ name: 'Index' })
        Toast({
          message: '支付成功',
          position: 'middle'
        })
      } catch (err) {
        Toast({
          message: `支付失败: ${err.message}`,
          position: 'middle'
        })
      }
    }
  },
  filters: {
    formateDate (val) {
      return getDate(val)
    }
  },
  components: {
    ServiesCard
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
@import "src/common/sass/variable.sass";

.book-msg {
  margin-top: 70px;
  background: white;
  .head {
    text-indent: 1em;
    padding: 30px 0;
    border-bottom: 1px solid $color-neutral-border;
  }
  .msg-list {
    box-sizing: border-box;
    padding: 0 40px;
    .msg-item {
      display: flex;
      align-content: center;
      padding: 25px 0;
      .label {
        flex-basis: 350px;
        color: $grey-text;
      }
    }
  }
}
.bottom-box {
  position: fixed;
  bottom: 0;
  width: 100%;
  .btn-pay {
    width: 100%;
    padding: 60px 0;
    text-align: center;
    color: white;
    background: #ff7a7a;
  }
}
</style>
