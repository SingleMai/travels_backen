<template>
  <ul class="validate-list">
    <li class="validate-item" v-for="item in formateBar" :key="item">
      {{ item }}
    </li>
  </ul>
</template>
<script>
const VALIDATE_TYPE = {
  hasDriveCard: '驾驶认证',
  hasEduCard: '学历认证',
  hasGuideCard: '导游认证',
  hasIdCard: '实名认证'
}

export default {
  name: '',
  data () {
    return {}
  },
  props: {
    data: {
      type: Object
    }
  },
  computed: {
    formateBar () {
      const arr = []
      const data = this.data
      for (const key in data) {
        if (VALIDATE_TYPE[key]) {
          if (data[key]) {
            arr.push(VALIDATE_TYPE[key])
          }
        }
      }
      return arr
    }
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
.validate-list {
  display: flex;
  flex-wrap: wrap;
  .validate-item {
    display: inline-block;
    height: 70px;
    margin-bottom: 10px;
    margin-right: 10px;
    padding: 0 20px;
    border-radius: 20px;
    line-height: 80px;
    font-size: 40px;
    color: white;
    background: orange;
  }
}
</style>
