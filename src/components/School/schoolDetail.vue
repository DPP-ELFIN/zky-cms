<template>
  <div class="tmpl">
     <!-- <my-head title="资讯详情详情" />
      <div class="school-title">
          <p>{{schoolInfo.title}}</p>
          <div>
              <span>{{schoolInfo.click}}次点击</span>
              <span>学院:{{schoolInfo.college}}</span>
              <span>添加时间:{{schoolInfo.add_time | convertTime('YYYY-MM-DD')}}</span>
          </div>
      </div>
      <div class="school-content" v-html="schoolInfo.content"></div> -->
      <!-- 测试-->
     <my-head title="资讯详情" />
      <div class="school-title">
          <p>xxx</p>
          <div>
              <span>111次点击</span>
              <span>学院:智能制造学院</span>
              <div>添加时间:2021-07-09</div>
          </div>
      </div>
      <div class="school-content">内容</div>
  </div>
  <!-- 测试-->
</template>

<script>
  export default{
    name:'schoolDetail',
    data(){
      return{
        schoolInfo:[]
      }
    },
   /* created() {
      let {id} = this.$route.params
      this.$axios.get('getSchool/'+id)
      .then(res => {
        this.schoolInfo = res.data.message[0]
      })
      .catch(err=>console.log(err))
    } */
    created() {
      this.title = '资讯详情'
    }
  }
</script>

<style scoped>
  .school-title p {
      color: #0a87f8;
      font-size: 20px;
      font-weight: bold;
  }

  .school-title span {
      margin-right: 30px;
  }

  .school-title {
      margin-top: 40px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }


  .school-content {
      padding: 10 5;
  }

</style>
