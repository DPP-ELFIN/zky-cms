<template>
  <div>
    <my-head :title="myTitle"></my-head>
  <div class="baidumap" id="allmap"></div>
  </div>


</template>

<script>
  export default {
    name: 'Bmap',
    data(){
      return{
        myTitle:''
      }
    },

    mounted() {
      this.baiduMap()
    },
    methods: {
      baiduMap() {
        var map = new BMap.Map('allmap')

        var point = new BMap.Point('北京市', 12) // 创建点坐标
        map.centerAndZoom(point, 12) // 初始化地图，设置中心点坐标和地图级别
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r){
        	if(this.getStatus() == BMAP_STATUS_SUCCESS){
        		var mk = new BMap.Marker(r.point);
        		map.addOverlay(mk);
        		map.panTo(r.point);
        		//alert('您的位置：'+r.point.lng+','+r.point.lat);
        	}
        	else {
        		alert('failed'+this.getStatus());
        	}
        });

        map.enableScrollWheelZoom(true) //开启鼠标滚轮缩放

        map.addControl(new BMap.NavigationControl())
        map.addControl(new BMap.ScaleControl())
        map.addControl(new BMap.OverviewMapControl())
        map.addControl(new BMap.MapTypeControl())
        //map.setMapStyle({ style: 'midnight' }) //地图风格

        var marker = new window.BMap.Marker(point) // 创建标注
        map.addOverlay(marker) // 将标注添加到地图中

        //提示信息
        var infoWindow = new BMap.InfoWindow('这是提示信息')
        // 鼠标移上标注点要发生的事
        marker.addEventListener('mouseover', function() {
          this.openInfoWindow(infoWindow)
        })

        // 鼠标移开标注点要发生的事
        marker.addEventListener('mouseout', function() {
          //this.closeInfoWindow(infoWindow)
        })
      }
    },
    beforeRouteEnter(to, from, next) {
      //console.log(to)
      let title = '详情';
      if (to.name == 'Map') {
        title = '地图'
      }
      next(vm => {
        // 通过 `vm` 访问组件实例 vm就是当前的this
        vm.myTitle = title
      })
    }
  }
</script>

<style>
  .baidumap {
    width: 100%;
    height: 545px;
    margin-bottom: 55px;
    margin-top: 40px;
  }

  /* 去除百度地图版权那行字 和 百度logo */
  .baidumap > .BMap_cpyCtrl {
    display: none !important;
  }
  .baidumap > .anchorBL {
    display: none !important;
  }
</style>
