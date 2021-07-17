<template>
  <div>
    <!-- <mt-swipe>
      <mt-swipe-item v-for="(item,index) in imgs" :key="index">1</mt-swipe-item>
        <img :src="item.img" alt="">
      </mt-swipe> -->
    <!-- 轮播图-->
    <!-- 测试 -->
    <my-head :title="myTitle"></my-head>
    <mt-swipe :auto="4000">
      <mt-swipe-item><img src="../assets/u=2501476447,3743798074&fm=193&f=GIF.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../assets/u=2942499027,2479446682&fm=193&f=GIF.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../assets/u=2604797219,1573897854&fm=193&f=GIF.jpg" alt=""></mt-swipe-item>
    </mt-swipe>

    <!-- 天气 -->
    <div id="he-plugin-simple"></div>
    <!-- 天气 -->

    <!-- 九宫格-->
    <div class="grid">
      <ul>
        <li v-for="(module,index) in modules" :key="index">
          <router-link :to="module.route">
            <span :class="module.className"></span>
            <div>{{module.title}}</div>
          </router-link>
        </li>

      </ul>
    </div>
    <!-- 九宫格-->

  </div>
</template>
<script>
  export default {
    name: 'Home',
    data() {
      return {
        imgs: [],
        modules: [{
            title: '教务系统',
            className: 'back-eduSys',
            route: {
              name: 'EduSys'
            }
          },
          {
            title: '图书馆系统',
            className: 'back-lib',
            route: {
              name: 'Lib'
            }
          },
          {
            title: '校园卡',
            className: 'back-card',
            route: {
              name: 'Card'
            }
          },
          {
            title: '成绩系统',
            className: 'back-achievment',
            route: {
              name: 'Achievment'
            }
          },
          {
            title: '学分系统',
            className: 'back-credit',
            route: {
              name: 'Credit'
            }
          },
          {
            title: '其他',
            className: 'back-other',
            route: {
              name: 'Other'
            }
          }
        ],
        myTitle: ''
      }

    },
    created() {
      //天气start
      this.myTitle = '湛江科技学院信息管理系统'
      var script = document.createElement('script');
      var c = document.createElement('link')
      c.rel = 'stylesheet'
      c.href = '../../static/css/he-simple.css'
      document.getElementsByTagName('head')[0].appendChild(c);
      script.type = 'text/javascript';
      script.src = '../../static/js/he-simple.js';
      document.getElementsByTagName('head')[0].appendChild(script);
      window.WIDGET = {
        "CONFIG": {
          "modules": "01234",
          "background": "1",
          "tmpColor": "FFFFFF",
          "tmpSize": "16",
          "cityColor": "FFFFFF",
          "citySize": "16",
          "aqiColor": "FFFFFF",
          "aqiSize": "16",
          "weatherIconSize": "24",
          "alertIconSize": "18",
          "padding": "10px 10px 10px 10px",
          "shadow": "0",
          "language": "auto",
          "borderRadius": "5",
          "fixed": "false",
          "vertical": "top",
          "horizontal": "left",
          "key": "5dd1bd5e35b2424d8e63c885e5f933d5"
        }
      }
    },
    beforeRouteEnter(to, from, next) {
      //console.log(to)
      let title = '详情';
      if (to.name == 'Home') {
        title = '湛江科技学院信息管理系统'
      }
      next(vm => {
        // 通过 `vm` 访问组件实例 vm就是当前的this
        vm.myTitle = title
      })
    }
    //天气end

    /* created:function(){            //测试
      $axios.get('swipe')
      .then(res=>{
        this.imgs = res.data.img
      })
      .catch(err=>console.log(err))
    } */
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mint-swipe {
    width: 100%;
    height: 210px;
  }

  img {
    width: 100%;
    height: 100%;
  }

  /* 九宫格样式*/
  .grid ul {
    overflow: hidden;
    padding: 0;
    margin: 0;
  }

  .grid li {
    float: left;
    width: 33.33%;
    text-align: center;
  }

  .grid span {
    display: inline-block;
    width: 50px;
    height: 20px;
    background-repeat: round;
    margin: 10px 0;
  }

  .back-eduSys {
    background-image: url(../assets/下载.png);
  }

  .back-lib {
    background-image: url(../assets/下载.png);
  }

  .back-card {
    background-image: url(../assets/下载.png);
  }

  .back-achievment {
    background-image: url(../assets/下载.png);
  }

  .back-credit {
    background-image: url(../assets/下载.png);
  }

  .back-other {
    background-image: url(../assets/下载.png);
  }
</style>
