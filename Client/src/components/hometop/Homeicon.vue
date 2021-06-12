<template>
  <div class="homeicon clearfix">
    <router-link to="/" >
  <div class="img fl">
      <img src="../../assets/logo.png" alt="weilianjie" />
    </div>
    </router-link>
  
    <div class="liebiao fl">
      <ul class="clearfix">
        <li class="listhover" @mouseenter="handleenter" @mouseleave="handleave">
          梅赛德斯
        </li>
        <li class="listhover" @mouseenter="handleenter" @mouseleave="handleave">
          奥迪
        </li>
        <li class="listhover" @mouseenter="handleenter" @mouseleave="handleave">
          本田
        </li>
        <li class="listhover" @mouseenter="handleenter" @mouseleave="handleave">
          大众
        </li>
        <li class="listhover" @mouseenter="handleenter" @mouseleave="handleave">
          宝马
        </li>
        <li class="listhover" @mouseenter="handleenter" @mouseleave="handleave">
          凯迪拉克
        </li>
        <li class="listhover" @mouseenter="handleenter" @mouseleave="handleave">
          宾利
        </li>
        <li class="listhover" @mouseenter="handleenter" @mouseleave="handleave">
          雷克萨斯
        </li>
        <li class="listhover" @mouseenter="handleenter" @mouseleave="handleave">
          五菱宏光
        </li>
      </ul>
    </div>
    <div class="input fl">
      <input type="text" />
      <span class="iconfont">&#xe60c;</span>
    </div>
  </div>

  <transition>
    <div
      class="showihidden"
      v-if="showit"
      @mousemove="handleMove"
      @mouseleave="handleave"
    >
      <ul class="clearfix">
        
        <!-- 跳转到详情页 -->
        <router-link :to="`/xiangqing/${item._id}`"  v-for="item in list1" :key="item._id"> 
          <li class="fl hoverit">
            
            <img :src="item.imgurl" alt="" class="imgurl" />
            <p>{{ item.name }}</p>
            <p class="carmonay">{{ item.monay }}</p>
         
          </li>
        </router-link>
  
      </ul>
    </div>
  </transition>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
export default {
  name: "Homeicon",
  setup() {
    let list1 = ref([
      {
        name: "暂无数据",
      },
    ]);
    let showit = ref(false);
    const handleenter = (e) => {
      showit.value = true;
      axios
        .post("http://localhost:3000/headericon", {
          region: e.target.innerText,
          list:6
        })
        .then((res) => {
          console.log(res.data);
          list1.value = res.data;
        });
    };
    const handleave = () => {
      showit.value = false;
    };
    const handleMove = () => {
      showit.value = true;
    };

    
    return { showit, handleenter, handleave, list1, handleMove };
  },
};
</script>

<style scoped>
.carmonay {
  color: #ff6700;
}
.imgurl {
  width: 160px;
  height: 110px;
}
@keyframes shack {
  0% {
    height: 0px;
    opacity: 0;
  }
  100% {
    height: 231px;
    opacity: 1;
  }
}
.v-enter-active {
  animation: shack 0.3s;
}
.v-leave-from {
  opacity: 1;
}
.v-leave-active {
  transition: all 0.8s linear;
}
.v-leave-to {
  opacity: 0;
}
.showihidden {
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.18);
  width: 100%;
  margin: 0px auto;
  position: absolute;
  z-index: 100;
  background-color: #fff;
}
.showihidden ul {
  padding: 30px 0px;
  width: 1200px;
  margin: 0px auto;
}
.showihidden ul li p {
  text-align: center;
}
.showihidden ul .hoverit {
  margin: 0px 10px;
  cursor: pointer;
}
.homeicon {
  width: 1226px;
  margin: 0px auto;
  font-size: 16px;
}
.homeicon .img img {
  width: 56px;
}
.homeicon .liebiao {
  margin: 0px 45px 0px 190px;
}
.homeicon .liebiao .listhover {
  float: left;
  padding: 20px 12px;
}
.homeicon .liebiao .listhover:hover {
  cursor: pointer;
  color: #ff6700;
}
.homeicon .input input {
  box-sizing: border-box;
  width: 245px;
  height: 50px;
  border: solid 1px #e0e0e0;
  padding: 0px 10px;
  color: #e0e0e0;
  float: left;
}
.homeicon .input input:focus {
  outline: none;
  border: #ff6700 solid 1px;
}
.homeicon .input input:focus + .iconfont {
  border: #ff6700 solid 1px;
}
.homeicon .input .iconfont {
  margin-left: -1px;
  border: solid 1px #e0e0e0;
  border-left: none;
  padding: 16px 16px 15px 14px;
  font-weight: bold;
  float: left;
}
.homeicon .input .iconfont:hover {
  cursor: pointer;
  background-color: #ff6700;
  color: #fff;
}
</style>