<template>
  <div class="main">
    <div class="content">
      <p class="title">TravelS后台管理系统</p>
      <el-form :model="currentItem"
              :rules="rules"
              ref="ruleForm"
              label-position="top">
        <el-form-item prop="email">
          <el-input placeholder="请输入登录邮箱" v-model="currentItem.email">
            <!-- <template slot="prepend">用户</template> -->
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="请输入登录密码" type="password" v-model="currentItem.password">
            <!-- <template slot="prepend">用户</template> -->
          </el-input>
        </el-form-item>
      </el-form>
      <div class="btn-box">
        <!-- <el-button @click="confirmGetPas('ruleForm')">忘记密码</el-button> -->
        <el-button type="primary" @click="confirmLogin('ruleForm')">登入</el-button>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: '',
  mounted () {
    if (window.localStorage.getItem('token')) {
      this.loginSuccess()
    }
  },
  data () {
    return {
      currentItem: {},
      rules: {
        email: [{ message: '请输入账号', trigger: 'blur' }],
        password: [{ message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    async confirmLogin (formName) {
      await this.$refs[formName].validate()
      try {
        // const { token, user } = await userApi.login(this.currentItem)
        window.localStorage.setItem('token', 1)
        this.loginSuccess()
      } catch (err) {
        this.$message.error(`登录失败：${err.message}.`)
      }
    },
    loginSuccess () {
      this.$router.push('/users')
    }
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
.main {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: white;
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    width: 350px;
    .title {
      margin: 20px 0;
      font-size: 23px;
      font-weight: bold;
    }
  }
  .btn-box {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
