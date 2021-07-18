<template>
  <div id="app">
    <!-- <my-head :title="myTitle"></my-head> -->
    <router-view />

    <!-- 底部 -->
    <mt-tabbar v-model="selected" :fixed="false">
      <mt-tab-item id="Home">
        <img slot="icon" src="./assets/下载.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="School">
        <img slot="icon" src="./assets/下载.png">
        校园
      </mt-tab-item>
      <mt-tab-item id="Map">
        <img slot="icon" src="./assets/下载.png">
        地图
      </mt-tab-item>
      <mt-tab-item id="Self">
        <img slot="icon" src="./assets/下载.png">
        个人
      </mt-tab-item>
    </mt-tabbar>
    <!-- 底部 -->


  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        selected: '',
        myTitle: ''
      }
    },
    watch: {
      selected: function(newVal, oldVal) {
        // console.log(newVal)
        this.$router.push({
          name: newVal
        })
      }
    },

    created() {
      this.selected = 'Home'
      //console.log(!this.$store.state.token)
      let token = this.$store.state.token
      if (!token) {
       this.$messagebox({
          title: '提示',
          message: '您还为登录，是否前往登录',
          showCancelButton: true,
          confirmButtonText: "确定",
        }).then(active=>{
            //console.log(active)
            if(active === 'confirm'){
              this.$router.push({
                name:'loginAndRegist'
              })
            }
        })
      }

    },

  }
</script>

<style scoped="scoped">
  .mint-tabbar {
    position: fixed;
    bottom: 0;
  }
</style>
