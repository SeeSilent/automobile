<template>

    <div class="block">

    <el-carousel height="613px">
      <el-carousel-item v-for="item in list" :key="item">
        <img :src="item" alt="" class="lunimg">
      </el-carousel-item>
    </el-carousel>
       </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Lunbo",
  setup() {
    const list  = reactive({
      img1:"https://www.qianqianhaiou.cn/usr/uploads/2021/06/2133646425.webp",
      img2:"https://www.qianqianhaiou.cn/usr/uploads/2021/06/2878130008.webp",
      img3:"https://www.qianqianhaiou.cn/usr/uploads/2021/06/802911567.webp",
      img4:"https://www.qianqianhaiou.cn/usr/uploads/2021/06/1012846246.webp",

    }
    )


  
    return {
      list
    };
  },
};
</script>

<style scoped>
.lunimg{
  width: 1226px;
  height: 613px;
}
.block{
  width: 1226px;
  margin: 0px auto;
}
</style>