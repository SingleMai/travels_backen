<template>
  <div>
    <mt-header title="留言" class="m-header">
    </mt-header>
    <ul class="friend-list">
      <li class="friend-item" v-for="(item, index) in data" :key="index" @click="route2Chatting(item)">
        <div class="item-left">
          <div class="avator">
            <img :src="item.head" alt="">
          </div>
          <div class="info">
            <p class="name">{{ item.name }}</p>
          </div>
        </div>
        <div class="item-right"></div>
      </li>
    </ul>
  </div>
</template>
<script>
import { ChatApi } from 'api'

export default {
  name: '',
  mounted () {
    this.$_getFriends()
  },
  data () {
    return {
      data: []
    }
  },
  methods: {
    route2Chatting (item) {
      this.$router.push({
        name: 'Chating',
        params: {
          id: item.id
        },
        query: {
          name: item.name,
          head: item.head
        }
      })
    },
    async $_getFriends () {
      const data = await ChatApi.getFriends()
      this.data = data
    }
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
.friend-item {
  display: flex;
  align-content: center;
  box-sizing: border-box;
  padding: 40px;
  background: white;
  .item-left {
    display: flex;
    .avator {
      width: 170px;
      height: 170px;
      background: pink;
      border-radius: 50%;
      overflow: hidden;
    }
    .info {
      margin-left: 40px;
    }
  }
  .item-right {

  }
}
</style>
