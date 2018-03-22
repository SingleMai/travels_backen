<template>
  <div class="bar-slide-box">
    <ul class="bar-slide-list">
      <li class="bar-slide-item" v-for="(item, index) in data" :key="index" @click="route2(item.title)">
        <div class="img">
          <img :src="item.img" alt="">
        </div>
        <p class="label">{{ item.title }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import FootImg from 'img/foot.jpg'
import TravelsImg from 'img/travels.jpg'
import TicketImg from 'img/ticket.jpg'
import HotelImg from 'img/hotel.jpg'
import ShowImg from 'img/show.jpg'
import IcrCreamImg from 'img/iceCream.jpg'
import BusImg from 'img/bus.jpg'

export default {
  name: '',
  data () {
    return {
      data: [
        {
          img: FootImg,
          title: '一日游'
        },
        {
          img: TravelsImg,
          title: '多日游'
        },
        {
          img: TicketImg,
          title: '门票'
        },
        {
          img: HotelImg,
          title: '酒店'
        },
        {
          img: ShowImg,
          title: '演出活动'
        },
        {
          img: IcrCreamImg,
          title: '当地特产'
        },
        {
          img: BusImg,
          title: '租车'
        }
      ]
    }
  },
  methods: {
    route2 (query) {
      this.$router.push({ name: 'QueryServies', params: { query } })
    }
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
$block-width: 220px;
$bar-slide-margin-top: 20px;
.bar-slide-box {
  height: $block-width+$bar-slide-margin-top*4;
  overflow: hidden;
}
.bar-slide-list {
  display: flex;
  width: 100%;
  overflow-x: scroll;
  .bar-slide-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: $bar-slide-margin-top 40px;
    width: $block-width;
    .img {
      width: $block-width;
      height: $block-width;
      background: pink;
      border-radius: 80px;
      overflow: hidden;
    }
    .label {
      margin: $bar-slide-margin-top 0;
      line-height: 40px;
      font-size: 40px;
    }
  }
}
</style>
