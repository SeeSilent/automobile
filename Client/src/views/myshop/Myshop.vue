<template>
  <div>
     <HomeHeader />
     <div class="con">
            <p class="contentheader">我的订单</p>
      </div>
        <div class="kong" v-if="showit">
        <i class="el-icon-s-goods baobao"></i>
        <p>暂时没有订单</p>
      </div>
      <ul>
        <li v-for="(item,index) in list" :key="item">
          <div class="content">
               <p class="dingheader"><span class="index"> 订单{{index+1}}</span> <span class="state">({{item.DindanState}})</span></p>
             <ul class="dingliebiao">
                <li v-for="id in item.userDindan" :key="id" class="dingliebiaoli">
                  <p><img :src="id.imgurl" alt="" class="imgurl"></p>    
                  <p class="id"> 产品ID: {{id._id}}</p>     
                  <p class="name">  产品名称:{{id.name}}</p>    
                  <p class="region">  产品系列:{{id.region}}</p>     
                  <p class="monay"> 付款价:{{id.monay}}</p>       
               
                </li>
             </ul>
        </div>
      
   
     
        </li>
      </ul>
  </div>
</template>

<script>
import axios from "axios"
import { useStore } from "vuex"
import { ref} from "vue"
import HomeHeader from "../../components/hometop/HomeHeader.vue"
export default {
    name:"Myshop",
    setup(){
      const store = useStore();
      const list = ref([]);
      const showit= ref(false);
      console.log(store.state.userState.userID)
  
      axios.post("http://localhost:3000/searchdingdan",{
        userID:store.state.userState.userID
      }).then((res)=>{
        console.log(res.data)
        if(res.data == 0){
          showit.value = true
        }
        list.value = res.data
      })
  
      return { list ,showit}
    },
    components:{
      HomeHeader
    }
}
</script>

<style scoped>
.baobao{
  font-size: 100px;
}
.kong{
  font-size: 30px;
  text-align: center;
  color: #b0b0b0;
  margin-top: 200px;
}
.name{
  text-align: center;
}
.monay{
  text-align: center;
}
.region{
  text-align: center;
}
.id{
  text-align: center;
}
.state{
  color: red;
  font-size: 14px;
    margin-right: 20px;
}
.index{
  margin-left: 20px;
  font-size: 16px;
  color: #b0b0b0;
}
.dingheader{
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 2px rgb(0 0 0 / 7%);
  padding: 10px 0px;
}
.dingliebiao{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.imgurl{
  width: 300px;
  height: 160px;
}
.content{
  width: 1226px;
  margin-left: auto;
  margin-right: auto;
      box-shadow: 0 4px 8px rgb(0 0 0 / 10%);
}
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
</style>