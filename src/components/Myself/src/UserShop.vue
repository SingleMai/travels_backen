<template>
  <div>
    <mt-header title="我的小店" class="m-header">
      <mt-button slot="left" icon="back" @click.native="back">返回</mt-button>
      <span class="m-header-span" slot="right" @click="createServies">发布</span>
    </mt-header>
    <user-card v-if="userData" class="card-margin" :data="userData"></user-card>
    <ul class="count-box">
      <li class="count-item">
        <p class="title">服务奖励</p>
        <p class="money">0.00</p>
      </li>
      <li class="count-item">
        <p class="title">服务销售额</p>
        <p class="money">0.00</p>
      </li>
    </ul>
  </div>
</template>
<script>
import UserCard from 'components/Myself/src/UserCard'
export default {
  name: '',
  data () {
    return {
      userData: JSON.parse(window.localStorage.getItem('user')),
      id: this.$route.params.id
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    createServies () {
      this.$router.push(`/user/${this.id}/shop/edit`)
    }
  },
  components: {
    UserCard
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
@import "src/common/sass/variable.sass";
.m-header {
  .m-header-span {
    font-size: 60px;
  }
}
.count-box {
  display: flex;
  align-content: center;
  height: 250px;
  background: white;
  box-sizing: border-box;
  margin: 40px 0;
  padding: 40px 40px;
  .count-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    .title {
      font-size: 18px;
      color: $grey-text;
    }
    .money {
      font-size: 90px;
    }
  }
}
</style>
