<template>
  <div>
      <HomeHeader />
      <div class="kong" v-if="showit">
        <i class="el-icon-s-goods baobao"></i>
        <p>购物车为空</p>
      </div>
      <div class="content" v-if="!showit">
        <div class="con">
            <p class="contentheader">我的购物车</p>
        </div>
       
        <ul>
          <li v-for="item in shopcar" :key="item">
            <router-link :to="`/xiangqing/${item._id}`">
                <Gouwuche  :item="item" />
            </router-link>
              
          </li>
        </ul>
          <p  class="counter">您选购了共{{counter}}件商品</p>
     
          <el-button type="success" v-if="!showit" class="tijiao" @click="handleTijiao">提交订单</el-button>
  <!-- 提交订单 -->
      </div>
      <div class="footer" v-if="!showit">
        <teleport to="body">
        <img src="https://cdn.cnbj1.fds.api.mi-img.com/staticsfile/global/slogan2020.png" alt="" class="fonterimg">
        </teleport>
      </div>
  </div>
</template>

<script>
  import { ElMessage } from 'element-plus'
import Gouwuche from "../../components/shopcar/Gouwuche.vue"
import HomeHeader from "../../components/hometop/HomeHeader.vue"
import { useStore} from "vuex"
import { ref} from "vue"
import axios from "axios"
export default {
    name : "Shopcar" ,
    setup(){
      const store = useStore();
      const showit = ref(true);
      const shopcar = ref(store.state.userGouwu)
      // 购物车数组
      const counter = ref(store.state.userGouwu.length)
      if(store.state.userGouwu == 0){
          showit.value = true;
        }else{
          showit.value = false;

        }
      const handleTijiao=()=>{
        axios.post("http://localhost:3000/adddingdan",{
          userID:store.state.userState.userID,
          userDindan:store.state.userGouwu,
          DindanState:"未发货"
        }).then((res)=>{
          if(res.data.erron == 0){
              ElMessage.success({
              message: '提交成功',
              type: 'success'
              });
          }else{
            ElMessage.error('提交失败');
          }
        })
      }

     
      return { shopcar,showit,counter,handleTijiao}
    },
    components:{
      HomeHeader,
      Gouwuche
    }
}
</script>

<style scoped>
.con{
  width: 100%;
  border-top: 1px solid #e0e0e0;
  box-shadow: 0 5px 5px rgb(0 0 0 / 7%);
}
.contentheader{
  font-size: 18px;
  color: #424242;
  width: 1226px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 18px;
  
}
.fonterimg{
  position: relative;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%);
  padding: 20px 0px;
}
.counter{
  font-size: 20px;
  color: #b0b0b0;
  text-align: center;
  margin: 20px 0px;
}
.tijiao{
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.baobao{
  font-size: 100px;
}
.kong{
  font-size: 30px;
  text-align: center;
  color: #b0b0b0;
  margin-top: 200px;
}
</style>