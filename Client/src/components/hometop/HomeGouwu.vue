<template>
  <div>
     
   
        <div class="contentNoLogin" v-if="showit">
            请先登录
        </div>
        
        <div class="contentLogin" v-else>
          <router-link to="/shopcar">
我的购物车
          </router-link>
                      
        </div>

    
  </div>
</template>

<script>
import { useStore } from "vuex"
import {  ref } from "vue"
import { watchEffect} from "vue"
export default {
    name :"HomeGouwu",
    setup(){
      const store = useStore()
      const showit = ref(true)
      
      watchEffect(()=>{
        if(store.state.userState.Login == "Login"){
        showit.value = false
      }
      })
      return { store,showit}
    }
}
</script>

<style scoped>
  .contentLogin{
    cursor: pointer;
    
  }

  .contentLogin:hover{
color: #fff;
  }
</style>