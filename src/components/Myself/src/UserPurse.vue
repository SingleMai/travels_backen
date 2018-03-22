<template>
  <div>
    <mt-header title="我的钱包" class="m-header">
      <mt-button slot="left" icon="back" @click.native="back">返回</mt-button>
    </mt-header>
    <div class="content">
      <img class="img" :src="moneyImg" alt="">
      <p class="title">我的零钱</p>
      <p class="money">$ 0.00</p>
      <p class="btn chongzhi">充值</p>
      <p class="btn tixian">提现</p>
    </div>
  </div>
</template>
<script>
import moneyImg from 'img/money.png'

export default {
  name: '',
  data () {
    return {
      moneyImg: moneyImg
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
@import "src/common/sass/variable.sass";
.content {
  box-sizing: border-box;
  padding: 240px 30px;
  text-align: center;
  margin: 0 auto;
  .img {
    width: 350px;
    height: 350px;
  }
  .title {
    margin: 80px 0;
    color: $grey-text;
  }
  .money {
    font-size: 120px;
    margin: 60px 0;
  }
  .btn {
    width: 100%;
    color: white;
    padding: 30px 10px;
    box-sizing: border-box;
    margin: 30px 0;
    background: #26a2ff;
    border-radius: 20px;
  }
}
</style>
