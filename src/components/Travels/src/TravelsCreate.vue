<template>
  <div>
    <mt-header class="m-header">
      <router-link to="/travels" slot="left">
        <span class="m-header-span">取消</span>
      </router-link>
      <span slot="right" class="m-header-span" @click="createTravels">发布</span>
    </mt-header>
    <textarea class="testInput" :rows="5" placeholder="请输入旅途见闻..." v-model="content"></textarea>
    <m-upload-file @filesChange="filesChange"></m-upload-file>
  </div>
</template>
<script>
import { TravelsApi } from 'api'
import { Toast } from 'mint-ui'
import MUploadFile from 'components/base/MUploadFile'

export default {
  name: '',
  data () {
    return {
      content: '',
      files: []
    }
  },
  methods: {
    filesChange (files) {
      this.files = files
    },
    async createTravels () {
      const formData = new FormData()
      formData.append('content', this.content)
      for (const file of this.files) {
        formData.append('travelImg', file)
      }
      try {
        await TravelsApi.createTravels(formData)
        this.$router.go(-1)
      } catch (err) {
        Toast({
          message: `创建失败: ${err.message}`,
          position: 'middle',
          duration: 3000
        })
      }
    }
  },
  components: {
    MUploadFile
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
.testInput {
  width: 100%;
  outline: none;
  border: none;
}
.m-header {
  height: 160px;
  font-size: 80px;
  .m-header-span {
    font-size: 60px;
  }
}
</style>
