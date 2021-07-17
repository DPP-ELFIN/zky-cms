<template>
  <div class="templ">
    <my-head :title="title"></my-head>

    <div class="login" v-if="two">
        <mt-field  placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-field  placeholder="密码" type="password" v-model="password"></mt-field>
        <mt-field label="验证码" v-model="captcha">
          <img src="../../assets/下载.png" height="45px" width="100px">
          <mt-button size="normal">登录</mt-button><mt-button size="normal">注册</mt-button>
        </mt-field>
    </div>
     <div class="login" v-else>
         <mt-field  placeholder="请输入用户名" v-model="username"></mt-field>
         <mt-field  placeholder="密码" type="password" v-model="password"></mt-field>
         <mt-field label="验证码" v-model="captcha">
           <img src="../../assets/下载.png" height="45px" width="100px">
           <mt-button size="normal">确定</mt-button> <mt-button size="normal">去登录</mt-button>
         </mt-field>
     </div>
  </div>
</template>

<script>
  export default{
    name:'login&regist',
    data(){
      return{
        title:'登录',
        two:true
      }
    }
  }
</script>

<style>
</style>
