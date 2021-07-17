// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//全局样式
import '../static/css/global.css'
//全局样式

//MintUi
import Mint from 'mint-ui';
Vue.use(Mint);
//css
import 'mint-ui/lib/style.css';
//MintUi

//axios
import Axios from 'axios'
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = 'https//zkycms/api/'
Axios.defaults.timeout = 3000
//axios

//全局组件
import MyHead from './components/comm/head.vue'
Vue.component(MyHead.name,MyHead)
//全局组件

//过滤器
import Moment from 'moment'
Vue.filter('convertTime',function(data,formatStr){
  return Moment(data).format(formatStr)
})
//过滤器

import BMap from 'BMap'
  import BMapSymbolSHAPEPOINT from 'BMap_Symbol_SHAPE_POINT'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
 /* watch: {
      '$route'(to, from) {
        console.log(to)
        console.log(from)
       // changeTitle(to.name)
      }
    },
    methods:{
      changeTitle(name){
        console.log(this.)
      }
    } */
})
