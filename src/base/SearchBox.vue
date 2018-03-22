<template>
  <div class="search-block">
    <a class="btn-location" href="javascript:void(0)" @click="locationClick">深圳</a>
    <div class="search" @click="searchBoxClick" >
      <i class="el-icon-search"></i>
      <span>搜索目的地、玩法、景区</span>
    </div>
    <a href="javascript:void(0)" class="btn-map" @click="mapClick">
      <i class="el-icon-location-outline"></i>
    </a>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {}
  },
  methods: {
    locationClick () {
      console.log('地点选定被点击')
    },
    searchBoxClick () {
      this.$emit('search')
    },
    mapClick () {
      console.log('右边map按钮被点击')
    }
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
$textColor: white;
$block-side-w: 240px;
.search-block {
  position: absolute;
  top: 0;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  margin: 50px 0;
  .btn-location {
    position: relative;
    width: $block-side-w;
    padding: 0 80px 0 40px;
    font-size: 90px;
    text-align: center;
    color: $textColor;
    text-decoration:none;
    &::after {
      content: '';
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
      height: 0;
      border-left: 30px solid transparent;
      border-right: 30px solid transparent;
      border-top: 40px solid $textColor;
    }
  }
  .search {
    border: 1px solid $textColor;/* no */
    padding: 30px 0;
    font-size: 60px;
    width: 1200px;
    border-radius: 80px;
    text-indent: 20px;
    color: $textColor;
  }
  .btn-map {
    display: inline-block;
    width: 120px;
    padding: 0 50px 0 20px;
    color: $textColor;
    font-size: 100px;
    text-align: center;
  }
}
</style>
