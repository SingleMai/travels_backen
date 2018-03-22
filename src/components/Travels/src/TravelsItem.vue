<template>
  <div class="travels-item">
    <div class="box">
      <div class="head">
        <div class="head-left" @click="route2(`/user/${data.user.id}`)">
          <div class="headImg">
            <img :src="`${data.user.head}`" alt="">
          </div>
          <div class="info">
            <p class="name"><m-name :name="`${data.user.name}`"/></p>
            <p class="time">{{ data.time | formateTime }}</p>
          </div>
        </div>
        <div class="head-right">
          <div class="btn"></div>
        </div>
      </div>
      <div class="content">{{ data.content }}</div>
      <ul class="imgs">
        <li class="imgs-item" v-for="(img, index) in data.imgs" :key="index">
          <img :src="img" alt="">
        </li>
      </ul>
      <div class="operate">
        <p class="btn-like" @click="createLikes">点赞</p>
        <p class="btn-comment" @click.stop="createComment()">评论</p>
      </div>
      <div class="other-info" v-if="data.likes.length || data.comments.length">
        <div class="likes-box" v-if="data.likes.length">❤️
          <ul class="likes-list">
            <li class="likes-item" v-for="(like, one) in data.likes" :key="one" @click="route2(`/user/${like.id}`)">
              <m-name :name="like.name" size="14px" color="#2d8cf0"/>
            </li>
          </ul>
        </div>
        <ul class="comments-list" v-if="data.comments.length">
          <li class="comment-item" @click="createComment(comment.commenter.id)" v-for="(comment, index) in data.comments" :key="index">
            <span class="author">
              <m-name :name="comment.commenter.name" size="14px" color="#2d8cf0"/>
            </span>
            <span v-if="comment.replyer.name">回复</span>
            <span class="replyer">
              <m-name :name="comment.replyer.name" size="14px" color="#2d8cf0"/>
            </span>
            :
            <span class="comment">{{ comment.content }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import MName from 'components/base/MName'
import { MessageBox, Toast } from 'mint-ui'
import { TravelsApi } from 'api'

export default {
  name: '',
  data () {
    return {
      commentContent: '你好'
    }
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  filters: {
    formateTime (date) {
      date = new Date(date)
      let time = `${date.getHours() < 9 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 9 ? '0' + date.getMinutes() : date.getMinutes()}`
      return time
    }
  },
  methods: {
    route2 (path) {
      this.$router.push(path)
    },
    getDetail () {
      console.log('get detail')
    },
    toggleLikes () {
      console.log('toggle likes')
    },
    async createLikes () {
      try {
        await TravelsApi.createLikes({ travelId: this.data.id })
        this.$emit('needChange')
        Toast({
          message: '点赞成功',
          iconClass: 'icon icon-success'
        })
      } catch (err) {
        Toast({
          message: '点赞失败',
          position: 'middle'
        })
      }
    },
    async createComment (replyId) {
      try {
        const { value } = await MessageBox.prompt(' ', '回复/评论')
        const data = {
          travelId: this.data.id,
          content: value
        }
        if (replyId) Object.assign(data, { replyId })
        await TravelsApi.createComment(data)
        this.$emit('needChange')
        Toast({
          message: '评论成功',
          iconClass: 'icon icon-success'
        })
      } catch (err) {
        Toast({
          message: '评论失败',
          position: 'middle'
        })
      }
    }
  },
  components: {
    MName
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
@import "src/common/sass/variable.sass";
.travels-item {
  margin-bottom: 60px;
  padding: 45px 0;
  background: white;
  box-shadow: 0 5px 80px $color-neutral-border;
  .box {
    box-sizing: border-box;
    padding: 0 80px;
    .head {
      display: flex;
      align-content: center;
      justify-content: space-between;
      margin-bottom: 40px;
      .head-left {
        display: flex;
        align-content: center;
        .headImg{
          width: 180px;
          height: 180px;
          background: pink;
          border-radius: 50%;
          overflow: hidden;
        }
        .info {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-content: center;
          margin-left: 40px;
          .name {
            font-size: 70px;
          }
          .time {
            font-size: 40px;
            color: $grey-text;
          }
        }
      }
    }
    .content {
      color: $grey-text;
      line-height: 90px;
    }
    .imgs {
      display: flex;
      align-content: center;
      .imgs-item {
        box-sizing: border-box;
        padding: 10px;
        width: 350px;
        height: 350px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .operate {
      display: flex;
      justify-content: flex-end;
      font-size: 14px;
      .btn-like, .btn-comment {
        margin: 0 10px;
      }
    }
    .other-info {
      background: $color-neutral-divider;
      box-sizing: border-box;
      padding: 10px;
      border-radius: 20px;
      .likes-box {
        display: flex;
        padding-bottom: 10px;
        overflow: hidden;
        border-bottom: 1px solid $color-neutral-border;
        .likes-item {
          float: left;
          flex-wrap: wrap;
          margin: 0 20px;
          color: $color-main-primary;
          &::after {
            content: ',';
          }
        }
      }
      .comments-list {
        margin-top: 10px;
        .comment-item {
          margin-bottom: 15px;
          line-height: 75px;
          .author, .replyer {
            color: $color-main-primary;
          }
        }
      }
    }
  }
}
</style>
