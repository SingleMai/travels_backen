<template>  
  <div>  
    <quilleditor v-model="content"  
                 ref="myTextEditor"  
                 :options="editorOption"  
                 @change="onChange">  
      <div id="toolbar" slot="toolbar">  
        <span class="ql-formats"><button type="button" class="ql-bold"></button></span>  
        <span class="ql-formats"><button type="button" class="ql-italic"></button></span>  
        <span class="ql-formats"><button type="button" class="ql-blockquote"></button></span>
        <span class="ql-formats"><select class="ql-header" ><option value="1"></option><option value="2"></option><option value="3"></option><option value="4"></option><option value="5"></option><option value="6"></option><option selected="selected"></option></select></span>  
        <span class="ql-formats"><select class="ql-size"><option value="small"></option><option selected></option><option value="large"></option><option value="huge"></option></select></span>
        <span class="ql-formats"><select class="ql-align"><option selected="selected"></option><option value="center"></option><option value="right"></option><option value="justify"></option></select></span>
        <span class="ql-formats"><button type="button" class="ql-list" value="ordered"></button></span>  
        <span class="ql-formats"><button type="button" class="ql-list" value="bullet"></button></span>  
        <span class="ql-formats"><button type="button" class="ql-link"></button></span>  
        <span class="ql-formats">  
          <button type="button" @click="imgClick" style="outline:none">  
            <svg viewBox="0 0 18 18"> <rect class="ql-stroke" height="10" width="12" x="3" y="4"></rect> <circle class="ql-fill" cx="6" cy="7" r="1"></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>  
          </button>  
        </span>  
        <span class="ql-formats"><button type="button" class="ql-video"></button></span>  
      </div>  
    </quilleditor>  
  </div>  
</template>  
<script>
import axios from 'axios'
import { quillEditor } from 'vue-quill-editor'
export default {
  props: {
    value: {
      type: String
    },
    // 上传图片的地址
    uploadUrl: {
      type: String
    },
    // 上传图片的file控件name
    fileName: {
      type: String,
      default: 'upload_file'
    },
    belong: {
      type: Number,
      default: 0
    },
    status: {
      type: Number,
      default: 2
    }
  },
  data () {
    return {
      content: '',
      editorOption: {
        modules: {
          toolbar: '#toolbar'
        }
      }
    }
  },
  methods: {
    onChange () {
      this.$emit('input', this.content)
    },
    // 选择上传图片切换
    onFileChange (e) {
      var self = this
      var fileInput = e.target
      if (fileInput.files.length === 0) {
        return
      }
      this.editor.focus()
      if (fileInput.files[0].size > 1024 * 1024 * 100) {
        this.$alert('图片不能大于600KB', '图片尺寸过大', {
          confirmButtonText: '确定',
          type: 'warning'
        })
      }
      var data = new FormData()
      data.append('belong', this.belong)
      data.append('status', this.status)
      data.append(this.fileName, fileInput.files[0])
      axios.post(this.uploadUrl, data).then(function (res) {
        if (res.data) {
          self.editor.insertEmbed(self.editor.getSelection().index, 'image', res.data)
        }
      })
    },
    // 点击上传图片按钮
    imgClick () {
      if (!this.uploadUrl) {
        console.log('no editor uploadUrl')
        return
      }
      // 内存创建input file
      var input = document.createElement('input')
      input.type = 'file'
      input.name = this.fileName
      input.accept = 'image/jpeg,image/png,image/jpg,image/gif'
      input.onchange = this.onFileChange
      input.click()
    }
  },
  computed: {
    editor () {
      return this.$refs.myTextEditor.quill
    }
  },
  components: {
    'quilleditor': quillEditor
  },
  mounted () {
    this.content = this.value
  },
  watch: {
    'value' (newVal, oldVal) {
      if (this.editor) {
        if (newVal !== this.content) {
          this.content = newVal
        }
      }
    }
  }
}
</script>