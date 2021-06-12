<template>
  <div class="content">
    <ul class="flexul">
      <li class="ullifirst">
        <ul class="ulitem">
          <li class="firstli">
            <i class="el-icon-paperclip iconfont"></i>
            <p class="shuoming">秒杀活动</p>
          </li>
          <li class="firstli">
            <i class="el-icon-office-building iconfont"></i>
            <p class="shuoming">企业团购</p>
          </li>
          <li class="firstli">
            <i class="el-icon-s-promotion iconfont"></i>
            <p class="shuoming">F码通行</p>
          </li>
          <li class="firstli">
            <i class="el-icon-s-grid iconfont"></i>
            <p class="shuoming">以旧换新</p>
          </li>
          <li class="firstli">
            <i class="el-icon-s-opportunity iconfont"></i>
            <p class="shuoming">汽车配件</p>
          </li>
          <li class="firstli">
            <i class="el-icon-monitor iconfont"></i>
            <p class="shuoming">远程协助</p>
          </li>
        </ul>
      </li>
      <router-link
        :to="`/xiangqing/${item._id}`"
        v-for="item in list1"
        :key="item._id"
      >
      <!-- 跳转至商品详情页面 -->
        <li class="contentlist">
          <img :src="item.imgurl" alt="" class="contentimg" />
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
export default {
  name: "Huakuai",
  setup() {
    const list1 = ref([]);
    axios
      .post("http://localhost:3000/headericon", {
        region: "梅赛德斯",
        list: 3,
      })
      .then((res) => {
        list1.value = res.data;
      });
    return { list1 };
  },
};
</script>

<style scoped>
.ulitem {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-content: space-evenly;
}

.firstli {
  width: 70px;
  text-align: center;
  opacity: 0.7;
}
.firstli:hover {
  opacity: 1;
  transition: all 0.3;
  cursor: pointer;
}
.iconfont {
  font-size: 25px;
  color: #fff;
}
.shuoming {
  margin: 5px;
  font-size: 12px;
  color: #fff;
}
.content {
  width: 1226px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
}

.ullifirst {
  width: 234px;
  height: 170px;
  background-color: #5f5750;
  display: flex;
}
.flexul {
  display: flex;
  justify-content: space-around;
}
.contentimg {
  width: 316px;
  height: 170px;
  display: block;
  margin-left: 15px;
  cursor: pointer;
}
.contentimg:hover {
  box-shadow: 0 15px 30px rgb(0 0 0 / 10%);
}
</style>