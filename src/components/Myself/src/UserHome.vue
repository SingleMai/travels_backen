<template>
  <div>
    <div :style="`background: url(${userHomeImg}) center;background-size: 100% 100%;`" class="head-box">
      <span class="btn-back" @click="back()">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-back"></use>
        </svg>
      </span>
      <div class="user-info">
        <div class="avator">
          <img :src="data.head" alt="">
        </div>
        <p class="name">{{ data.name }}</p>
        <p class="info">{{ data.job }}/{{ data.city }}</p>
        <div class="btn-box">
          <p class="btn-edit" @click="routeToEdit" v-if="myId === id">编辑资料</p>
          <p class="btn-likes" v-else @click="addFriend">关注</p>
        </div>
      </div>
    </div>
    <mt-navbar :fixed="false" v-model="selected">
      <mt-tab-item id="shop">我的小店</mt-tab-item>
      <mt-tab-item id="instru">关于我</mt-tab-item>
      <mt-tab-item id="travels">旅途</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="shop">
        <p class="no-data">暂无数据</p>
      </mt-tab-container-item>
      <mt-tab-container-item id="instru">
        <p class="instru-content" v-html="data.instroduction"></p>
      </mt-tab-container-item>
      <mt-tab-container-item id="travels">
        <travels-item v-for="(item, index) in data.travels" :key="index" :data="item"></travels-item>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import { UsersApi, ChatApi } from 'api'
import TravelsItem from 'components/Travels/src/TravelsItem'
import { mapMutations, mapGetters } from 'vuex'
import UserHomeImg from 'img/userHome.jpg'
export default {
  name: '',
  mounted () {
    this.$_getUsersInfo()
  },
  data () {
    return {
      myId: JSON.parse(window.localStorage.getItem('user')).id,
      id: parseInt(this.$route.params.id),
      userHomeImg: UserHomeImg,
      selected: '',
      travelsLimit: 50,
      travelsOffset: 0,
      data: {}
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    routeToEdit () {
      this.$router.push(`/user/${this.id}/edit`)
    },
    async addFriend () {
      const data = await ChatApi.addFriend({
        friendId: this.id
      })
      console.log(data)
    },
    async $_getUsersInfo () {
      if (this.getMyInfo) {
        const data = await UsersApi.getUsersInfo({
          id: this.id,
          travelsLimit: this.travelsLimit,
          travelsOffset: this.travelsOffset
        })
        this.data = data
        this.setMyInfo(data)
      }
    },
    ...mapMutations({
      setMyInfo: 'SET_MY_INFO'
    })
  },
  computed: {
    ...mapGetters([
      'getMyInfo'
    ])
  },
  components: {
    TravelsItem
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
@import "src/common/sass/variable.sass";
.head-box {
  position: relative;
  width: 100%;
  height: 1000px;
  .btn-back {
    position: absolute;
    left: 30px;
    top: 20px;
    font-size: 100px;
    color: $color-neutral-disabled;
  }
  .user-info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    text-align: center;
    color: white;
    .avator {
      margin: 0 auto;
      width: 250px;
      height: 250px;
      background: pink;
      border-radius: 50%;
      margin-bottom: 30px;
      overflow: hidden;
    }
    .name {
      margin-bottom: 20px;
    }
    .info {
      margin-bottom: 20px;
      font-size: 20px;
    }
    .btn-box {
      .btn-edit, .btn-likes {
        border: 1px solid $color-neutral-border;
        font-size: 14px;
        padding: 10px 5px;
      }
    }
  }
}
.instru-content {
  padding: 30px;
  background: white;
  color: $grey-text;
  line-height: 90px;
  font-size: 55px;
}
</style>
