<template>
<el-container class="wrapper">
    <el-aside :width= "isCollapse?'64px':'200px'">
      <div class="logo" :class="{miniLogo:isCollapse}">
      </div>
      <el-menu
        :collapse="isCollapse"
        :collapse-transition="false"
        router
        default-active="$route.path"
        background-color="#002033"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="/">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/article">
          <i class="el-icon-document"></i>
          <span slot="title">内容管理</span>
        </el-menu-item>
        <el-menu-item index="/image">
          <i class="el-icon-picture"></i>
          <span slot="title">素材管理</span>
        </el-menu-item>
        <el-menu-item index="/publish">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="/comment">
          <i class="el-icon-chat-dot-round"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="/fans">
          <i class="el-icon-present"></i>
          <span slot="title">粉丝管理</span>
        </el-menu-item>
        <el-menu-item index="/setting">
          <i class="el-icon-setting"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu></el-aside>
    <el-container>
      <el-header>
        <span class="el-icon-s-unfold" @click="toggleMenu()"></span>
      <span class="text">江苏传智播客科技教育有限公司</span>
      <el-dropdown class="my-dropdown" @command="clickMenu">
  <span class="el-dropdown-link">
      <img :src="photo" alt="">
    {{name}}
    <i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item icon="el-icon-setting" command="setting">个人设置</el-dropdown-item>
    <el-dropdown-item icon="el-icon-unlock" command="logout">退出登录</el-dropdown-item>

  </el-dropdown-menu>
</el-dropdown>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import store from '@/store'
export default {
  data () {
    return {
      isCollapse: false,
      name: '',
      photo: ''

    }
  },
  created () {
    const user = store.getUser()
    this.name = user.name
    this.photo = user.photo
  },
  methods: {
    toggleMenu () {
      this.isCollapse = !this.isCollapse
    },
    setting () {
      this.$router.push('/setting')
    },
    logout () {
      store.clearUser()
      this.$router.push({ name: 'login' })
    },
    clickMenu (menuType) {
      this[menuType]()
    }

  }
}
</script>

<style scoped lang="less">
.wrapper {
  width: 100%;
  height: 100%;

  position: absolute;
  left: 0;
  top: 0;
  .el-aside {
  background: #002033;

  }
  .el-header{
    line-height: 60px;
border-bottom: 1px solid #ddd;
  .el-icon-s-unfold {
    font-size: 24px;
    vertical-align: middle;
  }
  .text {
    vertical-align: middle;
    margin-left: 10px;
  }
  .el-dropdown{
float: right;
.el-dropdown-link {
  font-weight: bold;
}
    img {
       width: 30px;
          height: 30px;
          vertical-align: middle;
    }
  }
  }
  .logo {
    width: 100%;
    height: 60px;
     background: #002244 url(../../assets/images/logo_admin.png) no-repeat center /
    140px auto;
  }
  .miniLogo {
    background-image: url(../../assets/images/logo_admin_01.png);
  background-size: 36px auto;
  }
  .el-menu {
    border-right: none;
  }
}
</style>
