<template>
<div class="container">
  <el-card class="my-card">
<img src="../../assets/images/logo_index.png" alt="">
<!-- el-form 表单容器 -->
<!-- ref="form" 操作dom需要 -->
<!-- :model="form" 绑定整个表单的数据对象 -->

<el-form ref="longinForm" status-icon :model="longinForm" :rules="loginRules">
  <!-- el-form-item 表单项 -->
  <el-form-item prop="mobile">
    <!-- 表单元素 -->
    <el-input v-model="longinForm.mobile"  placeholder="请输入手机号"></el-input>

  </el-form-item>
  <el-form-item prop="code">
    <!-- 表单元素 -->
    <el-input v-model="longinForm.code"  placeholder="请输入验证码" style="width:236px;margin-right:10px"></el-input>
<el-button>发送验证码</el-button>
  </el-form-item>
  <el-form-item><el-checkbox :value="true" >我已阅读并同意用户协议和隐私条款</el-checkbox></el-form-item>
  <el-form-item><el-button type="primary" style="width:100%; " @click="login()" >登录</el-button></el-form-item>

</el-form>
 </el-card>
</div>
</template>

<script>
export default {
  data () {
    var checkMobile = (rule, value, callback) => {
      if (!/^1[3-9]\d{9}$/.test(value)) return callback(new Error('手机格式不对'))
      callback()
    }
    return {
      longinForm: {
        mobile: '18419069803',
        code: '246810'
      },
      loginRules: {
        mobile: [{ required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '请输入6位验证码', trigger: 'blur' }]

      }
    }
  },
  methods: {
    login () {
      this.$refs.longinForm.validate((valid) => {
        if (valid) {
          this.$http.post(
            'http://ttapi.research.itcast.cn/mp/v1_0/authorizations',
            this.loginForm
          ).then(res => {
            this.$router.push('/')
          })
            .catch(() => {
              this.$message.error('手机号或验证码错误')
            })
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.container{
  width: 100%;
  height: 100%;
  position: absolute;
  background: url(../../assets/images/login_bg.jpg) no-repeat  center / cover;
    .my-card {
    width: 400px;
    height: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-60%);
    img{
      width: 200px;
      display:block;
      margin: 5px auto;

    }

  }
}
</style>
