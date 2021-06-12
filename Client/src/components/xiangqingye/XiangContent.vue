<template>
    <div v-for="item in item" :key="item">
        <div class="header">
            <div class="headercontent">
                {{item.name}}
            </div>
        </div>
        <div class="tixing" v-if="loginF">
            <p>为方便您购买，请提前登录</p>
        </div>
        <div class="content">
            <div class="content-next clearfix">
                <img :src="item.imgurl" alt="" class="imgurl">
                <div class="wenzi">
                    <p class="itemname">{{item.name}}</p>
                    <p class="content1">智能驾驶  |  智能导航 | 动力升级 全「芯」超越</p>
                    <p class="content2">信誉保证</p>
                    <p class="content3">{{item.monay}} 起</p>
                    <p class="content4"></p>
                    <p class="content5">所属系列</p>
                    <p class="itemregion">
                        <span class="content6">   {{item.region}}</span>
                     
                        </p>
                     
                    <div class="itemmonay">
                        <p class="monay1">
                            <span class="monayspan1">
                                {{item.region}}{{item.name}}
                            </span>
                            <span class="monayspan2">
                                {{item.monay}}
                            </span>
                        </p>
                        <p class="monay2">
                           共计： {{item.monay}}元
                        </p>
                    </div>
                     <el-button type="success" @click="inputGouwu" class="button">加入购物车</el-button>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="footerlin">
                <div class="footercontent">
                    <span class="footernav" @click="handleXiang">商品详情</span>
                    <span class="footernav" @click="handleGou">购买须知</span>
                    <span class="footernav" @click="handleShou">售后政策</span>
                </div>
            </div>
        </div>
        <div class="compon">
            <component  :is="showit" :item="item"/>
        </div>
    </div>
    
</template>

<script>
  import { ElMessage } from 'element-plus'
import Xiangguan from   "../../components/xiangqingye/Xiangguan.vue"
import Xiangqingye from "../../components/xiangqingye/Xiangqingye.vue"
import Goumai from "../../components/xiangqingye/Goumai.vue"
import { useStore} from "vuex"
import { ref } from "vue"
import { watchEffect } from "vue"
export default {
    name:"XiangContent",
    props:["item"],
    setup(props){
        const store = useStore();
        const loginF = ref(true);
        const showit = ref("Xiangqingye")
        const handleXiang=()=>{
            showit.value ="Xiangqingye"
        }
        const handleGou=()=>{
            showit.value="Goumai"
        }
        const handleShou=()=>{
            showit.value="Xiangguan"
        }
        const inputGouwu=()=>{
            if(store.state.userState.Login == "Login"){
           
                store.commit("inputShopCar",props.item[0])
                console.log(store.state.userGouwu);
                ElMessage.success({
              message: '加入购物车成功',
              type: 'success'
              });
            }else{
                ElMessage.error('请先登录');
            }
           watchEffect(()=>{
               if(store.state.userState.Login == "Login"){
                   loginF.value = false
                   console.log('loginF value = false')
               }
           })

        }
        return { showit,handleXiang,handleGou,handleShou,inputGouwu,loginF}
    },
    components:{
        Xiangqingye,
        Goumai,
        Xiangguan
    }
}
</script>

<style scoped>
.button{
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.monay2{
    color: #ff6700;
    font-size: 24px;
    padding-top: 20px;
    margin: 0px;
}
.monay1{
    margin: 0px;
    display: flex;
    justify-content: space-between;
}
.itemmonay{
       background: #f9f9fa;
    padding: 30px;
    margin-bottom: 30px;
    margin-top: 30px;
}
.content7{
     font-size: 18px;
}
.content6:hover{
    cursor: pointer;
}
.content6{
    border: 1px solid #ff6700;
    font-size: 16px;
    color: #ff6700;
    width: 245px;
    display: block;
    text-align: center;
    padding: 20px 0px;
}
.content5{
        font-size: 18px;
}
.content4{
        margin-top: 12px;
    border-bottom: 1px solid #e0e0e0;
}
.content3{
        display: block;
    font-size: 18px;
    line-height: 1;
    color: #ff6700;
    padding: 12px 0 10px;
    margin:0px
}
.content2{
    color: #ff6700;
    margin-bottom: 0;
}
.content1{
    color: #b0b0b0;
    margin: 0;
    padding: 0;
    padding-top: 8px;
    line-height: 1.5;
}
.lijidenglu{
    color: #ff6700;
    cursor: pointer;
}

.tixing{
    text-align: center;
    font-size: 14px;
}

.footernav{
    margin: 0px 20px;
    font-size: 18px;
    color: #424242;
}
.footernav:hover{
    color: #ff6700;
    cursor: pointer;
}
.footerlin{
        border-top: 1px solid #e0e0e0;
    box-shadow: 0 5px 5px rgb(0 0 0 / 7%);
    padding: 18px;
    margin: 20px 0px;
}
.footercontent{
    text-align: center;
}

.itemregion{
    font-size: 22px;
       margin-bottom: 10px;
}
.itemname{
    font-size: 24px;
    margin-bottom: 10px;
    text-align: center;
}
.wenzi{
    float: left;
    width: 600px;
    text-align: left;
    margin-top: 20px;
    margin-left: 40px;
}
.imgurl{
    width: 560px;
    height: 300px;
    float: left;
    margin-top: 50px;
}
.header{
    border-top: 1px solid #e0e0e0;
    box-shadow: 0 5px 5px rgb(0 0 0 / 7%);
    padding: 15px;
}
.header .headercontent{
    width: 1226px;
    margin-left: auto;
    margin-right: auto;
    font-size: 24px;
}
.content-next{
    width: 1226px;
    margin: 0px auto;
    margin-bottom: 50px;
}
</style>