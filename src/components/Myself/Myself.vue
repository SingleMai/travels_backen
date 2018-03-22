<template>
  <div>
    <mt-header title="我" class="m-header">
    </mt-header>
    <user-card v-if="userData" class="card-margin" :data="userData" :to="`/user/${userData.id}`"></user-card>
    <div v-else class="login-card">
      <h2 class="login-title">欢迎来到TravelS!</h2>
      <p class="btn-login" @click="route2('/login')">马上登录</p>
    </div>
    <div v-if="userData">
      <mt-cell title="我的小店"
              icon="more"
              :is-link="true"
              :to="`/user/${userData.id}/shop`">
        <svg class="icon" slot="icon" aria-hidden="true">
          <use xlink:href="#icon-wxbmingxingdianpu"></use>
        </svg>
      </mt-cell>
      <div class="card-margin">
        <mt-cell title="我购买的"
                icon="more"
                :is-link="true"
                :to="`/user/${userData.id}/buy`">
                <!-- slot=icon 自定义图片内容 -->
          <svg class="icon" slot="icon" aria-hidden="true">
            <use xlink:href="#icon-publishgoods_fill"></use>
          </svg>
        </mt-cell>
        <mt-cell title="我出售的"
                icon="more"
                :is-link="true"
                :to="`/user/${userData.id}/sell`">
                <!-- slot=icon 自定义图片内容 -->
          <svg class="icon" slot="icon" aria-hidden="true">
            <use xlink:href="#icon-service"></use>
          </svg>
        </mt-cell>
      </div>
      <div class="card-margin">
        <mt-cell title="我的钱包"
                :is-link="true"
                :to="`/user/${userData.id}/purse`">
                <!-- slot=icon 自定义图片内容 -->
          <svg class="icon" slot="icon" aria-hidden="true">
            <use xlink:href="#icon-redpacket"></use>
          </svg>
        </mt-cell>
      </div>
      <div class="card-margin">
        <mt-cell title="我的旅途"
                icon="more"
                :is-link="true"
                :to="`/user/${userData.id}/travels`">
                <!-- slot=icon 自定义图片内容 -->
          <svg class="icon" slot="icon" aria-hidden="true">
            <use xlink:href="#icon-touchengkongyun"></use>
          </svg>
        </mt-cell>
      </div>
      <div class="card-margin">
        <mt-cell title="我的收藏"
                icon="more"
                :is-link="true"
                :to="`/user/${userData.id}/likes`">
                <!-- slot=icon 自定义图片内容 -->
          <svg class="icon" slot="icon" aria-hidden="true">
            <use xlink:href="#icon-iconfontxingxing"></use>
          </svg>
        </mt-cell>
      </div>
      <div class="card-margin">
        <mt-cell title="设置"
                icon="more"
                :is-link="true"
                to="">
                <!-- slot=icon 自定义图片内容 -->
          <svg class="icon" slot="icon" aria-hidden="true">
            <use xlink:href="#icon-shezhi"></use>
          </svg>
        </mt-cell>
      </div>
    </div>
  </div>
</template>
<script>
import UserCard from 'components/Myself/src/UserCard'
export default {
  name: '',
  data () {
    return {
      userData: JSON.parse(window.localStorage.getItem('user'))
    }
  },
  methods: {
    route2 (path) {
      this.$router.push(path)
    }
  },
  components: {
    UserCard
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
.card-margin {
  margin: 50px 0;
}
.login-card {
  width: 100%;
  box-sizing: border-box;
  padding: 70px;
  background: white;
  margin-bottom: 40px;
  .login-title {
    font-size: 80px;
    font-weight: bold;
  }
  .btn-login {
    display: inline-block;
    margin: 60px 0 0;
    padding: 20px 60px;
    background: orange;
    color: white;
    font-size: 30px;
  }
}
</style>
