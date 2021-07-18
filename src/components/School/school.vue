<template>
    <div class="tmpl">
    <my-head :title="myTitle"></my-head>

        <!-- 资讯列表 -->
      <!--   <div class="demo">
              <ul>
                    <li v-for="(school,index) in schoolList" :key="index">
                        <router-link :to="{ name:'schoolDetail',params:{id:school.id} }">
                            <img class="" :src="school.img_url">
                            <div >
                                <span>{{school.title}}</span>
                                <div class="school-desc">
                                    <p>点击数:{{school.click}}</p>
                                    <p>发表时间:{{school.add_time | convertTime('YYYY-MM-DD')}}</p>
                                </div>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
    </div> -->
    <!-- 测试-->
    <div class="demo">
              <ul>
                    <li >
                        <router-link :to="{ name:'schoolDetail',params:{id:1} }">
                            <img class="" src="../../assets/下载.png">
                            <div >
                                <span>标题</span>
                                <div class="school-desc">
                                    <p>点击数:000</p>
                                    <p>发表时间:2021-07-08</p>
                                </div>
                            </div>
                        </router-link>
                    </li>
                    <li >
                        <a href="">
                            <img class="" src="../../assets/下载.png">
                            <div >
                                <span>标题1</span>
                                <div class="school-desc">
                                    <p>点击数:111</p>
                                    <p>发表时间:2021-07-08</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li >
                        <a href="">
                            <img class="" src="../../assets/下载.png">
                            <div >
                                <span>标题2</span>
                                <div class="school-desc">
                                    <p>点击数:222</p>
                                    <p>发表时间:2021-07-08</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li >
                        <a href="">
                            <img class="" src="../../assets/下载.png">
                            <div >
                                <span>标题3</span>
                                <div class="school-desc">
                                    <p>点击数:333</p>
                                    <p>发表时间:2021-07-08</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li >
                        <a href="">
                            <img class="" src="../../assets/下载.png">
                            <div >
                                <span>标题1</span>
                                <div class="school-desc">
                                    <p>点击数:111</p>
                                    <p>发表时间:2021-07-08</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li >
                        <a href="">
                            <img class="" src="../../assets/下载.png">
                            <div >
                                <span>标题2</span>
                                <div class="school-desc">
                                    <p>点击数:222</p>
                                    <p>发表时间:2021-07-08</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li >
                        <a href="">
                            <img class="" src="../../assets/下载.png">
                            <div >
                                <span>标题3</span>
                                <div class="school-desc">
                                    <p>点击数:333</p>
                                    <p>发表时间:2021-07-08</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li >
                        <a href="">
                            <img class="" src="../../assets/下载.png">
                            <div >
                                <span>标题1</span>
                                <div class="school-desc">
                                    <p>点击数:111</p>
                                    <p>发表时间:2021-07-08</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li >
                        <a href="">
                            <img class="" src="../../assets/下载.png">
                            <div >
                                <span>标题2</span>
                                <div class="school-desc">
                                    <p>点击数:222</p>
                                    <p>发表时间:2021-07-08</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li >
                        <a href="">
                            <img class="" src="../../assets/下载.png">
                            <div >
                                <span>标题3</span>
                                <div class="school-desc">
                                    <p>点击数:333</p>
                                    <p>发表时间:2021-07-08</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li >
                        <a href="">
                            <img class="" src="../../assets/下载.png">
                            <div >
                                <span>标题1</span>
                                <div class="school-desc">
                                    <p>点击数:111</p>
                                    <p>发表时间:2021-07-08</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li >
                        <a href="">
                            <img class="" src="../../assets/下载.png">
                            <div >
                                <span>标题2</span>
                                <div class="school-desc">
                                    <p>点击数:222</p>
                                    <p>发表时间:2021-07-08</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li >
                        <a href="">
                            <img class="" src="../../assets/下载.png">
                            <div >
                                <span>标题3</span>
                                <div class="school-desc">
                                    <p>点击数:333</p>
                                    <p>发表时间:2021-07-08</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li >
                        <a href="">
                            <img class="" src="../../assets/下载.png">
                            <div >
                                <span>标题1</span>
                                <div class="school-desc">
                                    <p>点击数:111</p>
                                    <p>发表时间:2021-07-08</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li >
                        <a href="">
                            <img class="" src="../../assets/下载.png">
                            <div >
                                <span>标题2</span>
                                <div class="school-desc">
                                    <p>点击数:222</p>
                                    <p>发表时间:2021-07-08</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li >
                        <a href="">
                            <img class="" src="../../assets/下载.png">
                            <div >
                                <span>标题3</span>
                                <div class="school-desc">
                                    <p>点击数:333</p>
                                    <p>发表时间:2021-07-08</p>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
    </div>
   <!-- 测试-->
</template>
<script>
    export default {
        data(){
            return {
                //schoolList:[],// 资讯列表数据
                myTitle:''
            }
        },
        created() {
          /*  this.$axios.get('getschoollist')
            .then(res=>{
                this.schoolList = res.data.message;
            })
            .catch(err=>console.log(err)); */
        },
         beforeRouteEnter(to, from, next) {
              //console.log(to)
              let title = '详情';
              if (to.name == 'School') {
                title = '校园'
              }
              next(vm => {
                // 通过 `vm` 访问组件实例 vm就是当前的this
                vm.myTitle = title
              })
            }

    }
</script>
<style scoped>
.demo a {
    display: block;
    width: 330px;
    height: 44px;
    color: #000;
    padding-left:15px;
}
.demo img {
    float: left;
    width: 42px;
    height: 42px;
    margin-right: 20px;
}
.demo a div {
    float: left;
    width: 238px;
    margin-right: 20px;
}
.demo span {
    display: block;
    width: 100%;
    font-size: 17px;
    line-height: 21px;
}
.demo a p {
    float: left;
    color: #0bb0f5;
    font-size: 14px;
    line-height: 21px;
}
.demo p:nth-child(2) {
    float: right;
}

.demo ul {
    padding: 0;
    margin-bottom: 90px;
    margin-top: 45px;
}
.demo li{
  margin: 10px;
}
.school-desc {
    height: 35px;
}

.tmpl{
  margin-top: 10px;
}



</style>
