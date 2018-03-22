<template>
  <div>
    <div class="btn-box">
      <el-button type="primary" icon="el-icon-plus" @click="dialogVisible = true">添加轮播图</el-button>
    </div>
    <el-table
      :data="data"
      style="width: 100%"
      :cell-style="textAlignCenter"
      :header-cell-style="textAlignCenter">
      <el-table-column
        prop="carousel"
        label="图片">
        <template slot-scope="scope">
          <img style="height: 150px;width:250px;" :src="scope.row.carousel" alt="">
        </template>
      </el-table-column>
      <el-table-column
        prop="weight"
        label="顺序">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <!-- <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button> -->
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="添加/修改轮播图"
               :visible.sync="dialogVisible"
               @before-close='closeDialog'
               @close="resetDate">
      <el-form label-position="top"
               label-width="80px"
               :model="currentItem"
               :rules="rules"
               ref="ruleDialog">
        <el-form-item label="图片" prop="carousel">
          <el-upload
            class="avatar-uploader"
            action="/backen/carousel"
            :show-file-list="false"
            :auto-upload="false"
            :on-change="change">
            <img v-if="carouselImg" :src="carouselImg" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="优先级" prop="weight">
          <el-input v-model="currentItem.weight"></el-input>
        </el-form-item>
        <el-form-item label="链接" prop="link">
          <el-input v-model="currentItem.link"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="confirmDialog('ruleDialog')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { CarouselApi } from 'api'

export default {
  name: '',
  mounted () {
    this.$_getData()
  },
  data () {
    return {
      textAlignCenter: {
        textAlign: 'center'
      },
      data: [],
      dialogVisible: false,
      currentItem: {},
      carouselImg: null,
      currentIndex: null,
      rules: {}
    }
  },
  methods: {
    change (file) {
      const _this = this
      this.currentItem.carousel = file.raw
      const fileReader = new FileReader()
      fileReader.onloadend = function () {
        if (fileReader.readyState === fileReader.DONE) {
          _this.carouselImg = fileReader.result
        }
      }
      fileReader.readAsDataURL(file.raw)
    },
    resetDate () {
      this.currentItem = {}
      this.currentIndex = null
      this.dialogVisible = false
      this.carouselImg = null
    },
    async handleDelete (index, row) {
      await this.$confirm('删除的内容将无法再恢复，请确认删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      try {
        await CarouselApi.delCarousel({ id: row.id })
        this.data.splice(index, 1)
        this.$message.success(`删除轮播图信息成功！`)
      } catch (err) {
        this.$message.error(`删除轮播图信息失败:  ${err.message}`)
      }
    },
    async confirmDialog (formName) {
      await this.$refs[formName].validate()
      try {
        const formData = new FormData()
        formData.append('weight', this.currentItem.weight)
        formData.append('link', this.currentItem.link)
        formData.append('carousel', this.currentItem.carousel)

        const result = await CarouselApi.createCarousel(formData)
        await this.$_getData()
        this.resetDate()
        this.$message.success(`添加轮播图信息成功！`)
      } catch (err) {
        this.$message.error(`添加轮播图信息失败:  ${err.message}`)
      }
    },
    async closeDialog (done) {
      // 用户并没有编辑过内容，则直接跳过
      if (isEmptyObject(this.currentItem)) {
        this.resetDate()
        return
      }
      // 利用是否存在id来判断是更新操作还是新增操作
      // 如果存在id，则表明该操作是更新操作，那么关闭弹窗需要判断内容是否被编辑过
      if (this.currentItem.id) {
        if (isObjEqual(this.currentItem, this.data[this.currentInex])) {
          this.resetDate()
          return
        }
      }
      try {
        await this.$confirm('编辑的内容还未更新, 是否确定退出?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        this.resetDate()
      } catch (err) { }
    },
    async $_getData () {
      const data = await CarouselApi.getCarousel()
      this.data = data
    }
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
  .btn-box {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
