<template>
  <div class="tmpl">
    <my-head :title="title"></my-head>

    <div class="login" v-if="two">
        <mt-field  placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-field  placeholder="密码" type="password" v-model="password"></mt-field>
        <mt-field label="验证码" v-model="captcha">
          <img src="../../assets/下载.png" height="45px" width="100px"><br>
        </mt-field>
        <div class="btn">
           <mt-button size="normal">登录</mt-button><mt-button size="normal" @click="regist">注册</mt-button>
        </div>
    </div>
     <div class="login" v-else>
         <mt-field  placeholder="请输入用户名" v-model="username"></mt-field>
         <mt-field  placeholder="密码" type="password" v-model="password"></mt-field>
          <mt-field  placeholder="确认密码" type="password" v-model="ackPassword"></mt-field>
         <mt-field label="验证码" v-model="captcha">
           <img src="../../assets/下载.png" height="45px" width="100px">
         </mt-field>
         <div class="btn">
            <mt-button size="normal">确定</mt-button> <mt-button size="normal"  @click="goLogin">去登录</mt-button>
         </div>

     </div>
  </div>
</template>

<script>
  export default{
    name:'loginAndRegist',
    data(){
      return{
        title:'登录',
        two:true
      }
    },
    methods:{
      regist(){
        this.two = false
        this.title = '注册'
      },
      goLogin(){
        this.two = true
        this.title = '登录'
      }
    }
  }
</script>

<style scoped="scoped">
  .tmpl{
    margin-top: 40px;
  }
  .btn{
    text-align: center;
  }
</style>
