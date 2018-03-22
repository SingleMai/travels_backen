<template>
  <div>
    <mt-header title="个人信息" class="m-header">
      <mt-button slot="left" icon="back" @click.native="back">返回</mt-button>
    </mt-header>
    <div class="cell-box">
      <mt-cell title="头像" class="cell-item">
        <div class="avator">
          <img :src="getMyInfo.head" alt="">
        </div>
      </mt-cell>
    </div>
    <div class="cell-box">
      <mt-cell title="昵称" class="cell-item">
        <div class="name">{{ getMyInfo.name }}</div>
      </mt-cell>
    </div>
    <div class="cell-box">
      <mt-cell title="标签" class="cell-item">
        <div class="label">尚未添加标签</div>
      </mt-cell>
    </div>
    <div class="cell-box">
      <mt-cell title="自我介绍" class="cell-item">
        <div class="instru">关于我的那些那些...</div>
      </mt-cell>
    </div>
    <div class="cell-box">
      <mt-cell title="性别">
        <div class="sex">{{ getMyInfo.sex | formateSex }}</div>
      </mt-cell>
    </div>
    <p class="head">验证信息</p>
    <div class="cell-box">
      <mt-cell title="电话" class="cell-item">
        <div class="phone"></div>
      </mt-cell>
    </div>
    <div class="cell-box">
      <mt-cell title="身份证" class="cell-item">
        <div class="id-card">{{ getMyInfo.hasIdCard | formateValidate }}</div>
      </mt-cell>
    </div>
    <div class="cell-box">
      <mt-cell title="学历证" class="cell-item">
        <div class="edu-card">{{ getMyInfo.hasEduCard | formateValidate }}</div>
      </mt-cell>
    </div>
    <div class="cell-box">
      <mt-cell title="导游证" class="cell-item">
        <div class="guide-card">{{ getMyInfo.hasGuideCard | formateValidate }}</div>
      </mt-cell>
    </div>
    <div class="cell-box">
      <mt-cell title="驾驶证" class="cell-item">
        <div class="drive-card">{{ getMyInfo.hasDriveCard | formateValidate }}</div>
      </mt-cell>
    </div>
    <p class="head">可选信息</p>
    <div class="cell-box">
      <mt-cell title="星座" class="cell-item">
      </mt-cell>
    </div>
    <div class="cell-box">
      <mt-cell title="出生年月" class="cell-item" @click.native.stop="$refs.bold.open();">
      </mt-cell>
    </div>
    <div class="cell-box">
      <mt-cell title="行业" class="cell-item">
      </mt-cell>
    </div>
    <div class="cell-box">
      <mt-cell title="城市" class="cell-item">
      </mt-cell>
    </div>
    <div class="cell-box">
      <mt-cell title="学校" class="cell-item">
      </mt-cell>
    </div>
    <div class="cell-box">
      <mt-cell title="语言" class="cell-item">
      </mt-cell>
    </div>
    <div class="cell-box">
      <mt-cell title="邮箱" class="cell-item">
      </mt-cell>
    </div>
    <!-- 选择出生年月 -->
    <mt-datetime-picker
      ref="bold"
      type="date"
      :startDate="new Date((new Date()).getFullYear() - 50)"
      :endDate="new Date()"
      @confirm="updateBold">
    </mt-datetime-picker>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
import { UsersApi } from 'api'
import { mapMutations, mapGetters } from 'vuex'

const SEX_TYPE = {
  0: '保密',
  1: '男',
  2: '女'
}

const VALIDATE_TYPE = {
  0: '未验证',
  1: '已验证'
}

export default {
  name: '',
  mounted () {
    this.$_getUsersInfo()
  },
  data () {
    return {
      id: parseInt(this.$route.params.id)
    }
  },
  filters: {
    formateSex (sex) {
      return SEX_TYPE[sex]
    },
    formateValidate (type) {
      return VALIDATE_TYPE[type]
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    async updateBold (value) {
      try {
        await UsersApi.updateUsersInfo({ id: this.id, born: value })
        Toast({
          message: '修改成功',
          iconClass: 'icon icon-success'
        })
      } catch (err) {
        Toast({
          message: '修改失败',
          position: 'middle'
        })
      }
    },
    async $_getUsersInfo () {
      if (this.getMyInfo) {
        const data = await UsersApi.getUsersInfo({
          id: this.id,
          travelsLimit: 50,
          travelsOffset: 0
        })
        this.data = data
        this.setMyInfo(data)
      }
    },
    ...mapMutations({
      setMyInfo: 'SET_MY_INFO'
    })
  },
  computed: {
    ...mapGetters([
      'getMyInfo'
    ])
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
@import "src/common/sass/variable.sass";
.cell-box {
  padding: 0 20px;
  box-sizing: border-box;
  background: white;
  .cell-item {
    border-bottom: 1px solid $color-neutral-border;
  }
}
.head {
  margin: 30px 0;
  color: $grey-text;
  text-indent: 1em;
}
.avator {
  width: 180px;
  height: 180px;
  background: pink;
  border-radius: 50%;
}
</style>
