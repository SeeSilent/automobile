<template>

  <div class="header">
      <HomeHeader />
  </div>
  <div class="content">
    <XiangContent :item="list" />
  </div>
 
</template>

<script>
import XiangContent from "../../components/xiangqingye/XiangContent.vue"
import HomeHeader from "../../components/hometop/HomeHeader.vue"
import { useRoute } from "vue-router"
import { ref ,watchEffect } from "vue"
import axios from "axios"
export default {
    name :"Xiangqing",
    setup(){
      const route = useRoute();
      const list = ref();
     
      watchEffect(()=>{
      axios.post("http://localhost:3000/xiangqingye",{
        _id:route.params._id
      }).then((res)=>{
        list.value = res.data
      })
    })
      return { list }
    },
    components:{
      HomeHeader,
      XiangContent
    }

}
</script>

<style scoped>

</style>