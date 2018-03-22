<template>
  <div>
    <mt-header title="旅途" class="m-header">
      <span class="m-header-span" slot="right" @click="createTravels">发布</span>
    </mt-header>
    <travels-item @needChange="$_getTravels" v-for="(item, index) in data" :key="index" :data="item"></travels-item>
  </div>
</template>
<script>
import MHeader from 'components/base/MHeader'
import TravelsItem from 'components/Travels/src/TravelsItem'
import { Toast } from 'mint-ui'
import { TravelsApi } from 'api'

export default {
  name: '',
  mounted () {
    this.$_getTravels()
  },
  data () {
    return {
      data: [],
      limit: 50,
      offset: 0
    }
  },
  methods: {
    createTravels () {
      this.$router.push('/travels/create')
    },
    async $_getTravels () {
      try {
        const data = await TravelsApi.getTravels({
          limit: this.limit,
          offset: this.offset
        })
        this.data = data
      } catch (err) {
        Toast({
          message: '获取列表失败',
          position: 'middle',
          duration: 5000
        })
      }
    }
  },
  components: {
    MHeader,
    TravelsItem
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
.m-header {
  height: 160px;
  font-size: 80px;
  .m-header-span {
    font-size: 60px;
  }
}
</style>
