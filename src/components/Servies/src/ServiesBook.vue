<template>
  <div>
    <div class="content">
      <mt-header title="订单填写" class="m-header">
        <mt-button slot="left" icon="back" @click.native="back">返回</mt-button>
      </mt-header>
      <servies-card :data="data"></servies-card>
      <mt-field label="预订数量" placeholder="请输入预订数量" type="number" v-model="num"></mt-field>
      <mt-field label="出行时间" type="date" v-model="travelTime"></mt-field>
      <div class="notice-box">
        <p class="title">注意事项</p>
        <ul class="list">
          <li class="item">1. 用户在支付订单而当第向导没有接受订单之前，退订订单全额退款给用户。</li>
          <li class="item">2. 当行程已经开始用户由于某些原因需要退订，需要与当地向导协商并确定退款比例。如果用户单方面的违约，当地向导将会受到全部费用。</li>
        </ul>
      </div>
    </div>
    <div class="bottom-box">
      <p class="orders-info">在线支付：<span class="red">￥{{ count }}</span></p>
      <p class="btn-pay" @click.stop="serviesBook">去支付</p>
    </div>
  </div>
</template>
<script>
import ServiesCard from './ServiesCard'
import { OrdersApi } from 'api'

export default {
  name: '',
  data () {
    return {
      id: this.$route.params.id,
      data: this.$route.query,
      num: 1,
      travelTime: ''
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    async serviesBook () {
      const data = await OrdersApi.createOrders({
        serviesId: parseInt(this.id),
        num: this.num,
        travelTime: this.travelTime,
        count: this.count
      })
      this.$router.push({
        name: 'ServiesPay',
        params: {
          id: data.id
        },
        query: {
          order: JSON.stringify(data),
          server: JSON.stringify(this.data)
        }
      })
    }
  },
  computed: {
    count () {
      return this.data.price * this.num
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
.content {
  margin-bottom: 150px;
  .notice-box {
    box-sizing: border-box;
    padding: 40px;
    color: $grey-text;
    .title {
      font-size: 60px;
      margin: 40px 0;
    }
    .list {
      font-size: 50px;
      line-height: 60px;
      .item {
        margin: 20px 0;
      }
    }
  }
}
.bottom-box {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 150px;
  box-sizing: border-box;
  padding-left: 40px;
  border-top: 1px solid $grey-text;
  .orders-info {
    display: inline-block;
    width: 68%;
    .red {
      color: #ff7a7a;
    }
  }
  .btn-pay {
    display: inline-block;
    width: 30.5%;
    text-align: center;
    padding: 40px 0;
    color: white;
    background: #ff7a7a;
  }
}
</style>
