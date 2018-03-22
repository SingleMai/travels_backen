<template>
  <div>
    <search-box @search="route2('/search')"></search-box>
    <carousel-v :data="carousels"></carousel-v>
    <div class="barBlock">
      <p class="head">
        <i class="el-icon-picture"></i>
        当地人带你玩
      </p>
      <bar-slide></bar-slide>
      <p class="head">
        <i class="el-icon-goods"></i>
        当地人代购
      </p>
      <bar-slide></bar-slide>
    </div>
    <div class="playing-recommend">
      <block-title title="人气推荐" subTitle="热门用户"></block-title>
      <user-card v-for="(item, key) in users" :data="item" :key="key"></user-card>
    </div>
    <div class="playing-recommend">
      <block-title title="玩法推荐" subTitle="精选推荐好玩的景区、去处"></block-title>
      <server-card v-for="(item, key) in servies"
                   :key="key"
                   :data="item"
                  @click.native.stop="route2(`/servies/${item.id}`)"
      ></server-card>
    </div>
  </div>
</template>
<script>
import { CarouselApi, UsersApi, ServiesApi } from 'api'
import CarouselV from 'base/CarouselV'
import SearchBox from 'base/SearchBox'
import BarSlide from './src/BarSlide'
import BlockTitle from 'base/BlockTitle'
import UserCard from 'base/UserCard'
import ServerCard from 'base/ServerCard'

export default {
  name: '',
  mounted () {
    this.$_getCarousel()
    this.$_getUsers()
    this.$_getServies()
  },
  data () {
    return {
      carousels: [],
      users: [],
      servies: []
    }
  },
  methods: {
    route2 (url) {
      this.$router.push(url)
    },
    async $_getServies () {
      const data = await ServiesApi.getServies({
        limit: 5,
        offset: 0
      })
      this.servies = data
    },
    async $_getCarousel () {
      const data = await CarouselApi.getCarousel()
      this.carousels = data
    },
    async $_getUsers () {
      const data = await UsersApi.getList({
        limit: 5,
        offset: 0
      })
      this.users = data
    }
  },
  components: {
    CarouselV,
    SearchBox,
    BarSlide,
    BlockTitle,
    UserCard,
    ServerCard
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
@import "src/common/sass/variable.sass";
.barBlock {
  background: $color-block-background;
  padding: 10px 0 50px;
  .head {
    padding: 50px 50px 20px;
    font-size: 55px;
    color: #faa58c;
  }
}
.playing-recommend {
  margin: 80px 0;
  padding: 50px 0;
  width: 100%;
  background: $color-block-background;
}
</style>
