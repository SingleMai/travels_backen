<template>
  <div>
    <div class="menu-box">
      <el-menu
        :default-active="route"
        :router="true"
        class="el-menu-vertical-demo"
      >
        <el-menu-item index="/carousel">
          <span slot="title">轮播图管理</span>
        </el-menu-item>
        <el-menu-item index="/users">
          <span slot="title">用户管理</span>
        </el-menu-item>
        <el-menu-item index="/servers">
          <span slot="title">服务管理</span>
        </el-menu-item>
        <el-menu-item index="/orders">
          <span slot="title">订单管理</span>
        </el-menu-item>
        <el-menu-item index="/travels">
          <span slot="title">旅途管理</span>
        </el-menu-item>
        <el-menu-item index="/validate">
          <span slot="title">身份认证管理</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      route: null,
      loading: null
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="" type="text/css">
$menuWidth: 250px;
.menu-box {
  position: fixed;
  top: 0;
  left: 0;
  width: $menuWidth;
  height: 100vh;
  overflow: scroll;
}
.header {
  display: flex;
  justify-content: flex-end;
  margin-left: $menuWidth;
  background: white;
  box-shadow:0px 1px 6px #828282;
  .name, .permission, .btn-out {
    padding: 15px 5px;
  }
  .btn-out {
    color: #409EFF;
    cursor: pointer;
  }
}
.content {
  margin-left: $menuWidth;
  box-sizing: border-box;
  padding: 20px;
}
</style>
