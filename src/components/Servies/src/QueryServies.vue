<template>
  <div>
    <mt-header :title="query" class="m-header">
      <mt-button slot="left" icon="back" @click.native="back">返回</mt-button>
    </mt-header>
    <p v-if="servies.length === 0" class="no-data">暂无数据</p>
    <server-card v-for="(item, key) in servies"
                 :key="key"
                 :data="item"
                 @click.native.stop="route2(`/servies/${item.id}`)"
    ></server-card>
  </div>
</template>
<script>
import { ServiesApi } from 'api'
import ServerCard from 'base/ServerCard'

export default {
  name: '',
  mounted () {
    this.$_getServies()
  },
  data () {
    return {
      limit: 50,
      offset: 0,
      query: this.$route.params.query,
      servies: []
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    route2 (url) {
      this.$router.push(url)
    },
    async $_getServies () {
      const data = await ServiesApi.getServies({
        limit: this.limit,
        offset: this.offset,
        query: this.query
      })
      this.servies = data
    }
  },
  components: {
    ServerCard
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
</style>
