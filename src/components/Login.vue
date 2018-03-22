<template>
<<<<<<< HEAD
  <div class="box">
    <mt-header title="登录" class="m-header">
      <mt-button slot="left" icon="back" @click.native="back">返回</mt-button>
    </mt-header>
    <div class="main">
      <div class="col">
        <p class="label">邮箱：</p>
        <div class="content">
          <input type="text" v-model="email" placeholder="请输入绑定的邮箱">
        </div>
        <p class="btn-get-token" @click="getToken">获取验证码</p>
      </div>
      <div class="col">
        <p class="label">验证码：</p>
        <div class="content">
          <input type="text" v-model="token">
        </div>
      </div>
      <mt-button size="large" type="primary" @click="login">登录</mt-button>
=======
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
>>>>>>> 85dd75f138c9e9142230004ec3f8dee5e1ba363c
    </div>
  </div>
</template>
<script>
<<<<<<< HEAD
import { UsersApi } from 'api'
import { Toast } from 'mint-ui'

export default {
  name: '',
  data () {
    return {
      email: '',
      token: ''
    }
  },
  methods: {
    async getToken () {
      if (this.email !== '') {
        try {
          await UsersApi.getToken({ email: this.email })
          Toast({
            message: '发送成功',
            iconClass: 'icon icon-success'
          })
        } catch (err) {
          Toast({
            message: `获取验证码失败： ${err.message}`,
            position: 'middle',
            duration: 3000
          })
        }
      }
    },
    async login () {
      if (this.email !== '' && this.token !== '') {
        try {
          const data = await UsersApi.login({
            email: this.email,
            token: this.token
          })
          window.localStorage.setItem('token', data.token)
          window.localStorage.setItem('user', JSON.stringify(data.origData))
          this.$router.go(-1)
        } catch (err) {
          Toast({
            message: `登录失败： ${err.message}`,
            position: 'middle',
            duration: 3000
          })
        }
      }
=======

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
>>>>>>> 85dd75f138c9e9142230004ec3f8dee5e1ba363c
    }
  }
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped='' type='text/css'>
.main {
<<<<<<< HEAD
  width: 100%;
  .col {
    display: flex;
    align-content: flex;
    background: white;
    padding: 40px;
    .label {
      font-size: 50px;
      line-height: 100px;
      text-align: center;
      flex-basis: 280px;
    }
    .content {
      flex: auto;
      input {
        width: 100%;
        outline: none;
        font-size: 40px;
      }
    }
    .btn-get-token {
      font-size: 40px;
      line-height: 100px;
    }
  }
=======
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
>>>>>>> 85dd75f138c9e9142230004ec3f8dee5e1ba363c
}
</style>
