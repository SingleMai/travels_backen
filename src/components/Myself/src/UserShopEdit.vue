<template>
  <div>
    <mt-header title="发布服务" class="m-header">
      <mt-button slot="left" icon="back" @click.native="back">返回</mt-button>
    </mt-header>
    <div class="head">
      <img v-show="head" :src="head" alt="">
      <input class="input-head" type="file" @change="filesChange">
      <p class="label" v-show="!head">上传标题图片</p>
    </div>
    <mt-field label="标题" placeholder="请输入标题" v-model="title"></mt-field>
    <mt-field label="价格" placeholder="请输入价格" v-model="price" type="number"></mt-field>
    <mt-checklist
      @change="checklistChange"
      title="服务类别列表"
      :value.sync="type"
      :options="typesOptions">
    </mt-checklist>
    <editor1 :content="content"
             :height="400"
             @change="updateContent"
             :z-index="1000"
             :auto-height="true"
             :show-module-name="false"
    ></editor1>
    <mt-button type="primary" size="large" @click="$_createServies">发布</mt-button>
  </div>
</template>
<script>
import VueHtml5Editor from 'vue-html5-editor'
import { ServiesApi } from 'api'
import { Toast } from 'mint-ui'
import './font-awesome.css'

const editor1 = new VueHtml5Editor({
  name: 'vue-html5-editor',
  icons: {
    text: 'fa fa-pencil',
    color: 'fa fa-paint-brush',
    font: 'fa fa-font',
    align: 'fa fa-align-justify',
    list: 'fa fa-list',
    link: 'fa fa-chain',
    unlink: 'fa fa-chain-broken',
    tabulation: 'fa fa-table',
    image: 'fa fa-file-image-o',
    hr: 'fa fa-minus',
    eraser: 'fa fa-eraser',
    undo: 'fa-undo fa',
    'full-screen': 'fa fa-arrows-alt',
    info: 'fa fa-info'
  },
  image: {
    // 文件最大体积，单位字节  max file size
    sizeLimit: 512 * 1024,
    // 上传参数,默认把图片转为base64而不上传
    // upload config,default null and convert image to base64
    upload: {
      url: '/api/servies/img',
      headers: {},
      params: {},
      fieldName: {}
    },
    // 压缩参数,默认使用localResizeIMG进行压缩,设置为null禁止压缩
    // compression config,default resize image by localResizeIMG (https://github.com/think2011/localResizeIMG)
    // set null to disable compression
    compress: {
      width: 1600,
      height: 1600,
      quality: 80
    },
    // 响应数据处理,最终返回图片链接
    // handle response data，return image url
    uploadHandler (responseText) {
      // default accept json data like  {ok:false,msg:"unexpected"} or {ok:true,data:"image url"}
      var json = JSON.parse(responseText)
      if (json.code !== 1) {
        Toast({
          message: `添加照片失败`,
          position: 'middle',
          duration: 3000
        })
      } else {
        return json.data.servies_img
      }
    }
  },
  visibleModules: ['text', 'color', 'font', 'align', 'list', 'link', 'tabulation', 'image', 'hr', 'eraser', 'undo']
})

export default {
  name: '',
  mounted () {
    this.$_getServiesType()
  },
  data () {
    return {
      serviesType: [],
      head: null,
      currentFile: null,
      title: '',
      price: '',
      type: [],
      content: ''
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    checklistChange (val) {
      this.type = val
    },
    updateContent (content) {
      this.content = content
    },
    filesChange (event) {
      const _this = this
      const files = event.target.files
      this.currentFile = files[0]
      for (const file of files) {
        const fileReader = new FileReader()
        fileReader.onloadend = function () {
          if (fileReader.readyState === fileReader.DONE) {
            _this.head = fileReader.result
          }
        }
        fileReader.readAsDataURL(file)
      }
    },
    async $_createServies () {
      const formData = new FormData()
      formData.append('title', this.title)
      formData.append('price', this.price)
      formData.append('content', this.content)
      formData.append('type', this.type.join('||'))
      formData.append('head', this.currentFile)
      await ServiesApi.createServies(formData)
      this.$router.push({ name: 'Index' })
    },
    async $_getServiesType () {
      const types = await ServiesApi.getServiesType()
      this.serviesType = types
    }
  },
  computed: {
    typesOptions () {
      const options = []
      const types = this.serviesType
      for (const key in types) {
        options.push({
          label: types[key],
          value: types[key]
        })
      }
      return options
    }
  },
  components: {
    editor1
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
.head {
  position: relative;
  width: 100%;
  height: 700px;
  .label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    padding: 40px;
    font-size: 40px;
    border-radius: 30px;
    background: #26a2ff;
  }
  .input-head {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: transparent;
    outline: none;
    border: 0;
    opacity:0;
    z-index: 2;
  }
}
</style>
