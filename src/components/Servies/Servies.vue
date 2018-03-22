<template>
  <div>
    <div class="content">
      <div :style="`background: url(${data.headImg}) center;`" class="head-box">
        <span class="btn-back" @click="back()">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-back"></use>
          </svg>
        </span>
      </div>
      <div class="info">
        <div class="info-left">
          <p class="title">{{ data.title }}</p>
          <p class="likes">
            <i class="el-icon-view"></i>
            出行： 0
          </p>
          <p class="views">
            <i class="el-icon-view"></i>
            {{ data.views }}人浏览过
          </p>
        </div>
        <p class="info-right price">￥{{ data.price }}</p>
      </div>
      <user-card @click.native="route2(`/user/${data.user.id}`)" :data="data.user"></user-card>
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">玩法</mt-tab-item>
        <mt-tab-item id="2">评价</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <div class="servies-content" v-html="data.content"></div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <comment-card v-for="(item, index) in data.comments" :key="index" :data="item"></comment-card>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <div class="bottom-box">
      <p class="btn-chat">聊天</p>
      <p class="btn-phone">电话</p>
      <p class="btn-book" @click="route2Book">预定</p>
    </div>
  </div>
</template>
<script>
import UserHomeImg from 'img/userHome.jpg'
import UserCard from 'components/Servies/src/UserCard'
import CommentCard from 'components/Servies/src/CommentCard'
import { ServiesApi } from 'api'

export default {
  name: '',
  mounted () {
    this.$_getServiesById()
  },
  data () {
    return {
      id: this.$route.params.id,
      selected: '1',
      serviesImg: UserHomeImg,
      data: {}
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    route2 (path) {
      this.$router.push(path)
    },
    route2Book () {
      this.$router.push({
        name: 'ServiesBook',
        params: {
          id: this.id
        },
        query: {
          ...this.data
        }
      })
    },
    async $_getServiesById () {
      const data = await ServiesApi.getServiesById({ id: this.id })
      this.data = data
    }
  },
  components: {
    UserCard,
    CommentCard
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
@import "src/common/sass/variable.sass";
.content {
  margin-bottom: 200px;
  .servies-content {
    padding: 20px;
    line-height: 60px;
    font-size: 22px;
    color: $grey-text;
  }
  .head-box {
    position: relative;
    width: 100%;
    height: 800px;
    background-size: cover!important;
    .btn-back {
      position: absolute;
      left: 30px;
      top: 20px;
      font-size: 100px;
      color: $color-neutral-disabled;
    }
  }
  .info {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 60px;
    background: white;
    .info-left {
      .title {
        margin: 20px 0;
        font-size: 70px;
      }
      .views, .likes {
        margin: 20px 0;
        color: $grey-text;
        font-size: 40px;
      }
    }
    .info-right.price {
      font-size: 60px;
    }
  }
}
.bottom-box {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  background: white;
  .btn-book {
    width: 60%;
    text-align: center;
    font-size: 60px;
    padding: 40px 0;
    color: white;
    background: #ff7a7a;
  }
  .btn-chat, .btn-phone {
    padding: 40px 0;
    text-align: center;
    border: 1px solid $color-neutral-border;
    width: 20%;
  }
}
</style>
