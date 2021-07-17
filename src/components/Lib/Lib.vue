<template>
  <div>
  <my-head :title='title'></my-head>
  <a href="http://lib2.gdcjxy.com:81/" target="_blank">图书馆入口</a>
  </div>
</template>

<script>
  export default{
    name:'Lib',
    data(){
      return{
        title:'图书馆'
      }
    }
  }
</script>

<style scoped="scoped">
  a{
   position: relative;
   top: 40px;
  }
</style>
