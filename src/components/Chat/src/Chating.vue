<template>
  <div>
    <mt-header :title="name" class="m-header">
      <mt-button slot="left" icon="back" @click.native="back">返回</mt-button>
    </mt-header>
    <ul class="content">
      <li class="content-item" :class="{ right: item.to_user_id === parseInt(id) }" v-for="(item, index) in data" :key="index">
        <div class="avator">
          <img :src="myInfo.head" alt="" v-if="item.to_user_id === parseInt(id)">
          <img :src="head" alt="" v-else>
        </div>
        <p class="message">{{ item.message }}</p>
      </li>
    </ul>
    <div class="chat-box">
      <input v-model="message" type="text" class="input">
      <mt-button type="primary" size="small" class="btn-send" @click="sendMsg">发送</mt-button>
    </div>
  </div>
</template>
<script>
import { ChatApi } from 'api'

export default {
  name: '',
  mounted () {
    this.$_getOneMsg()
    this.timer = setInterval(() => {
      this.$_getOneMsg()
    }, 2000)
  },
  data () {
    return {
      name: this.$route.query.name,
      head: this.$route.query.head,
      myInfo: JSON.parse(window.localStorage.getItem('user')),
      id: this.$route.params.id,
      message: '',
      timer: null,
      data: []
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    async sendMsg () {
      await ChatApi.createMsg({
        friendId: parseInt(this.id),
        message: this.message
      })
      this.message = ''
    },
    async $_getOneMsg () {
      const data = await ChatApi.getOneChatByOne({
        friendId: this.id
      })
      this.data = data
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
.content {
  width: 100%;
  height: 88vh;
  background: white;
  .right {
    flex-direction: row-reverse;
  }
  .content-item {
    display: flex;
    align-content: center;
    box-sizing: border-box;
    padding: 50px 80px;
    .avator {
      min-width: 150px;
      max-height: 150px;
      flex-basis: 170px;
      border-radius: 50%;
      overflow: hidden;
      background: pink;
    }
    .message {
      margin: 0 30px;
      padding: 30px;
      color: white;
      background:#26a2ff;
      border-radius: 20px;
    }
  }
}
.chat-box {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 150px;
  border-top: 1px solid;
  box-sizing: border-box;
  padding: 15px 50px;
  .input {
    width: 88%;
    height: 100%;
    outline: none;
  }
  .btn-send {
    flex-basis: 40px;
  }
}
</style>
