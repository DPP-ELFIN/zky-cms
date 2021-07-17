<template>
  <div>
    <my-head :title="myTitle"></my-head>
    <div class="content">
       <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
    <mt-field label="数字" placeholder="请输入数字" type="number" v-model="number"></mt-field>
    <mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>
    <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" v-modal="introduction"></mt-field>
    <div class="btn">
      <mt-button type="default" @click.native="handleClick">确定</mt-button>
      <mt-button type="default" @click.native="handleClick">取消</mt-button>
    </div>

  </div>
    </div>

</template>

<script>
  export default{
    name:'Myinfo',
	data(){
		return{
			selfInfo:{username:'',email:'',password:'',phone:'',number:'',birthday:'',introduction:''},
      myTitle:''
		}
	},
	created() {
    var storage = window.localStorage
		/* $axios.get('Self/my/myinfo')
    .then(res=>{

    })
    .catch(console.log(err)) */
	},
   beforeRouteEnter(to, from, next) {
        //console.log(to)
        let title = '详情';
        if (to.name == 'Myinfo') {
          title = '个人信息'
        }
        next(vm => {
          // 通过 `vm` 访问组件实例 vm就是当前的this
          vm.myTitle = title
        })
      },
  methods:{

  }
  }
</script>

<style scoped="scoped">
  .content{
    margin-top: 40px;
  }
  .btn{
    text-align: center;
  }
</style>
