<template>
  <ul class="file-list">
    <li class="file-item" v-for="(item, index) of imgs" :key="index">
      <img :src="item"
           class="img">
    </li>
    <li class="file-item plus">
      <p>+</p>
      <input type="file" @change="filesChange" multiple="multiple">
    </li>
  </ul>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      data: [],
      imgs: [],
      currentFile: []
    }
  },
  methods: {
    filesChange (event) {
      const _this = this
      _this.imgs = []
      const files = event.target.files
      this.currentFile = files
      for (const file of files) {
        const fileReader = new FileReader()
        fileReader.onloadend = function () {
          if (fileReader.readyState === fileReader.DONE) {
            _this.imgs.push(fileReader.result)
            _this.$emit('filesChange', _this.currentFile)
          }
        }
        fileReader.readAsDataURL(file)
      }
    }
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
.file-list {
  display: flex;
  .file-item {
    margin: 10px;
    width: 300px;
    height: 300px;
    .img {
      width: 100%;
      height: 100%;
    }
  }
  .plus {
    position: relative;
    box-sizing: border-box;
    border: 2px dashed grey;
    p {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 90px;
    }
    input {
      width: 100%;
      height: 100%;
      opacity:0;
    }
  }
}
</style>
