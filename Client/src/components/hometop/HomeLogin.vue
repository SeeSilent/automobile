<template>
    <div>
        <span v-if="states">
          <span>ID:</span>
          <span class="userid">{{UserID}}</span>
          <span @click="tuichudenglu" class="tuichu"> 退出登录</span>
          <router-link to="/Myshop">
         <span class="myshop"> 我的订单</span>
          </router-link >
        

        </span>
        <span v-else >
          <div class="dneglu" @click="drawer = true">
            登录
          </div>
        </span>
    
    </div>

    <el-drawer
    size="40%"
  title="用户登录"
  v-model="drawer"
  >
    <Login @changeState="handleChange"/>
</el-drawer>
</template>

<script>
import { ElMessage } from 'element-plus'
import { watchEffect } from "vue"
import Login from "../../views/login/Login.vue"
import { useStore } from "vuex"
import { ref } from "vue"
export default {
    name:"HomeLogin",
    setup(){
      const drawer =ref(false);
      let states = ref(false);
      const UserID = ref("");
      const store = useStore();
      const handleChange=()=>{
        drawer.value = false
      }
    watchEffect(()=>{
        if(store.state.userState.Login == "Login"){
            states.value = true;
            UserID.value = store.state.userState.userID
        }else{
          states.value = false;
        }
      })
    const tuichudenglu=()=>{
      store.commit("tuichudenglu");
      ElMessage.success("退出成功")
    }
      return {states,drawer,UserID,handleChange,tuichudenglu}
    },
    components:{
      Login
    }
}
</script>

<style scoped>
.tuichu{
  cursor: pointer;
}
.tuichu:hover{
  color: #fff;
}
.userid{
  color: #ff6700;
}
.myshop:hover{
  color: #fff;
}
.dneglu{
  cursor: pointer;

}
.dneglu:hover{
  color: #fff;
}
</style>