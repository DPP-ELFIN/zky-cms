<template>
  <mt-header :title="title" fixed >
    <div @click="goBack" slot="left">
      <mt-button icon="back"></mt-button>
    </div>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
</template>

<script>
  export default{
    name:'my-head',
    props:['title'],
    data(){
      return{
         //title:''
      }

    },
    methods:{
      goBack(){
        this.$router.go(-1)
      }
    },
  }
</script>

<style>
</style>
