<template>
  <div>
   <my-head :title="title"></my-head>
   <a href="http://219.129.63.106:81/home.aspx">
     教务系统入口1
   </a><br>
   <a href="http://219.129.63.106:81/home.aspx">
     教务系统入口2
   </a>
  </div>
</template>

<script>
  export default{
    name:'EduSys',
    data(){
      return{
        title:'教务系统'
      }
    },

  }
</script>

<style scoped="scoped">
  a{
   position: relative;
   top: 40px;
  }
</style>
