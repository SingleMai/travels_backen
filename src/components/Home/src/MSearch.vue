<template>
  <div>
    <mt-header title="搜索路线" class="m-header">
      <mt-button slot="left" icon="back" @click.native="back">返回</mt-button>
    </mt-header>
    <div class="search-box">
      <div class="left">
        <i class="mintui mintui-search"></i>
        <input type="text" v-model="query">
      </div>
      <div class="right">
        <p class="search" @click="searchData">搜索</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      query: '',
      result: []
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    searchData () {
      this.$router.push({ name: 'QueryServies', params: { query: this.query } })
    }
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
@import "src/common/sass/variable.sass";
.search-box {
  padding: 15px;
  display: flex;
  align-content: center;
  background: $color-neutral-divider;
  box-sizing: border-box;
  .left {
    display: flex;
    align-content: center;
    flex: 1;
    input {
      width: 100%;
      outline: none;
    }
    .mintui {
      flex-basis: 100px;
      margin: auto 0;
      text-align: center;
      color: white;
    }
  }
  .right {
    line-height: 100px;
    flex-basis: 150px;
    color: white;
    text-align: center;
  }
}
</style>
