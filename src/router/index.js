import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import School from '@/components/School/school.vue'
import Map from '@/components/Map/map.vue'
import Self from '@/components/Self/self.vue'
import EduSys from '@/components/EduSys/eduSys.vue'
import Lib from '@/components/Lib/Lib.vue'
import schoolDetail from '@/components/School/schoolDetail.vue'
import Myinfo from '@/components/Self/my/myinfo.vue'
import loginAndRegist from '@/components/loginAndRegist/loginAndRegist.vue'


Vue.use(Router)
const VueRouterPush = Router.prototype.push
 Router.prototype.push = function push (to) {
     return VueRouterPush.call(this, to).catch(err => err)
        }



export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/school',
      name: 'School',
      component: School
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    },
    {
      path: '/self',
      name: 'Self',
      component: Self
    },
   {
     path: '/self/my/myinfo',
     name: 'Myinfo',
     component: Myinfo
   },
    {
      path: '/Home/EduSys',
      name: 'EduSys',
      component: EduSys
    },
    {
      path: '/Home/Lib',
      name: 'Lib',
      component: Lib
    },
   {
     path: '/School/schoolDetail/:id',
     name: 'schoolDetail',
     component: schoolDetail
   },
   {
     path:'/loginAndRegist',
     name:'loginAndRegist',
     component:loginAndRegist
   }
  ]
})
