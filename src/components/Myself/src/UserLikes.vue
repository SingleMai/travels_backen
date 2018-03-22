<template>
  <div>
    <mt-header title="我的收藏" class="m-header">
      <mt-button slot="left" icon="back" @click.native="back">返回</mt-button>
    </mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">服务</mt-tab-item>
      <mt-tab-item id="2">旅途</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <p v-if="servies.length === 0" class="no-data">暂无数据</p>

      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <p v-if="travels.length === 0" class="no-data">暂无数据</p>

      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      selected: '1',
      servies: [],
      travels: []
    }
  },
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
</style>
