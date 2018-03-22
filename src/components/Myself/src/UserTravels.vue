<template>
  <div>
    <mt-header title="我的旅途" class="m-header">
      <mt-button slot="left" icon="back" @click.native="back">返回</mt-button>
    </mt-header>
    <travels-item v-for="(item, index) in data" :key="index" :data="item"></travels-item>
  </div>
</template>
<script>
import { TravelsApi } from 'api'
import TravelsItem from 'components/Travels/src/TravelsItem'

export default {
  name: '',
  mounted () {
    this.$_getTravelsByUser()
  },
  data () {
    return {
      limit: 30,
      offset: 0,
      data: []
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    async $_getTravelsByUser () {
      const travels = await TravelsApi.getTravelsByUser({
        limit: this.limit,
        offset: this.offset
      })
      this.data = travels
    }
  },
  components: {
    TravelsItem
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
</style>
