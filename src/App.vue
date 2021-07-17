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
        /* if (newVal == 'Home') {
          this.title = '湛江科技学院信息管理系统'
        }
        if (newVal == 'School') {
          this.title = '校园资讯'
        }
        if (newVal == 'Map') {
          this.title = '地图'
        }
        if (newVal == 'Self') {
          this.title = '个人中心'
        } */
      }
    },
    created() {
      this.selected = 'Home'
      // window.title = ''
    },

  }
</script>

<style scoped="scoped">
  .mint-tabbar {
    position: fixed;
    bottom: 0;
  }
</style>
