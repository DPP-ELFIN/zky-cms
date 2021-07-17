<template>
  <div id="my">
    <my-head :title="myTitle"></my-head>
    <div class="content">
      <div class="user-head"  @click="goMyInfo">
        <div class="user-img">
        </div>
        <div class="right-arrow">
          <span style="font-size: 20px;font-weight: 500;">{{status}}</span>
          <img src="../../assets/下载.png" height="10" width="10" />
        </div>
      </div>
      <div class="user-option">
        <mt-cell is-link>
          <span slot="title">设置</span>
          <img slot="icon" src="../../assets/下载.png" width="20" height="20">
        </mt-cell>
        <mt-cell>
          <span slot="title">关于</span>
          <span>当前版本V1.0</span>
          <img slot="icon" src="../../assets/下载.png" width="20" height="20">
        </mt-cell>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name:'Self',
    data(){
      return{
        myTitle:'',
        status:'用户名'
      }
    },
    methods: {
      goMyInfo() {
        this.$router.push('/self/my/myinfo');
      }
    },
     beforeRouteEnter(to, from, next) {
          //console.log(to)
          let title = '详情';
          if (to.name == 'Self') {
            title = '个人中心'
          }
          next(vm => {
            // 通过 `vm` 访问组件实例 vm就是当前的this
            vm.myTitle = title
          })
        }
    /* created(){
       let _footer = this.$store.state.footerVisible;
       if (!_footer) {
         this.$store.commit('TOGGLE_FOOTER');
       }
       this.$store.commit('SELECT_TAB', 'my')
     } */
  }
</script>
<style scoped>
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
  }

  .user-head {
    height: 100px;
    width: 100%;
    background-color: #73ccff;
    /* display: flex;
    justify-content: center;
    align-items: center; */
position: relative;
  }

  .user-img {
    background-image: url(../../assets/下载.png);
    width: 60px;
    height: 60px;
    border-radius: 30px;
    border: solid #ffffff 2px;
    margin-left: 20px;
    margin-top: 20px;
  }

  .user-option {
    background-color: #dbdbdb;
  }

  .mint-cell {
    min-height: 40px;
  }

  .right-arrow {
  position: absolute;
  right: 10px;
  bottom: 50%;
  margin-bottom: -13px;
  }

  .right-arrow span {
padding-right: 172px;

  }
.right-arrow img{

}
  .user-option span {
    font-size: 13px;

  }

  .mint-cell:last-child {
    background-position-x: 10px;
  }
</style>
