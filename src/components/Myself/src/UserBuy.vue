<template>
  <div>
    <mt-header title="我购买的" class="m-header">
      <mt-button slot="left" icon="back" @click.native="back">返回</mt-button>
    </mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">待付款</mt-tab-item>
      <mt-tab-item id="2">待接收</mt-tab-item>
      <mt-tab-item id="3">已确认</mt-tab-item>
      <mt-tab-item id="4">售后</mt-tab-item>
      <mt-tab-item id="5">已失效</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <p v-if="bookData.length === 0" class="no-data">暂无数据</p>
        <servies-buy-card v-for="(data, index) in bookData"
                          :key="index"
                          :data="data"
                          :index="index"
                          @spliceItem="spliceBuyCard"></servies-buy-card>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <p v-if="unacceptData.length === 0" class="no-data">暂无数据</p>
        <servies-unaccept-card v-for="(data, index) in unacceptData"
                               :key="index"
                               :data="data"
                               @spliceItem="spliceUnacceptCard"
                               :index="index"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <p v-if="confirmed.length === 0" class="no-data">暂无数据</p>
        <servies-confirmed-card v-for="(data, index) in confirmed"
                                :key="index"
                                :data="data"
                                @spliceItem="spliceConfirmCard"
                                :index="index"></servies-confirmed-card>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <p v-if="finished.length === 0" class="no-data">暂无数据</p>
        <servies-finished v-for="(data, index) in finished"
                                :key="index"
                                :data="data"
                                @spliceItem="spliceFinished"
                                :index="index"></servies-finished>
      </mt-tab-container-item>
      <mt-tab-container-item id="5">
        <p v-if="invalid.length === 0" class="no-data">暂无数据</p>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import { OrdersApi } from 'api'
import ServiesBuyCard from './ServiesBuyCard'
import ServiesUnacceptCard from './ServiesUnacceptCard'
import ServiesConfirmedCard from './ServiesConfirmedCard'
import ServiesFinished from './ServiesFinished'

export default {
  name: '',
  mounted () {
    this.$_getOrdersBook()
    this.$_getOrdersUnaccept()
    this.$_getOrdersConfirmed()
    this.$_getOrdersFinish()
  },
  data () {
    return {
      selected: '1',
      bookData: [],
      unacceptData: [],
      confirmed: [],
      finished: [],
      invalid: []
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    spliceFinished (index) {
      this.confirmed.splice(index, 1)
    },
    spliceConfirmCard (index) {
      this.confirmed.splice(index, 1)
    },
    spliceBuyCard (index) {
      this.bookData.splice(index, 1)
    },
    spliceUnacceptCard (index) {
      this.unacceptData.splice(index, 1)
    },
    async $_getOrdersBook () {
      const data = await OrdersApi.getOrdersBook()
      this.bookData = data
    },
    async $_getOrdersUnaccept () {
      const data = await OrdersApi.getOrdersUnaccept()
      this.unacceptData = data
    },
    async $_getOrdersConfirmed () {
      const data = await OrdersApi.getOrdersConfirmed()
      this.confirmed = data
    },
    async $_getOrdersFinish () {
      const data = await OrdersApi.getOrdersFinish()
      this.finished = data
    }
  },
  components: {
    ServiesBuyCard,
    ServiesUnacceptCard,
    ServiesConfirmedCard,
    ServiesFinished
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
</style>
