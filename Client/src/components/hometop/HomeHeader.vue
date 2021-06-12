<template>
  <div class="content">
      <div class="header">
          <div class="left">
              <ul>
                  <li class="listhover">梅赛德斯·奔驰</li>
                  <li class="listhover">一汽大众</li>
                  <li class="listhover">凯迪拉克</li>
                  <li class="listhover">宝马</li>
                  <li class="listhover">奥迪</li>
                  <li class="listhover">本田</li>
                  <li class="listhover">宾利</li>
                  <li class="listhover">五菱宏光</li>
                  <li class="listhover">悦达起亚</li>
                  <li class="listhover">雷克萨斯</li>
                  <li class="listhover">吉普</li>
              </ul>
          </div>
          <div class="right">
              <div class="user inbl">
                    <HomeLogin />
              </div>
            <el-button @click="handleClick" type="info" plain size="mini" style="margin-right: 16px;">
后台管理
</el-button>
              <div class="moneyless inbl">
                  <HomeGouwu />
              </div>
          </div>
      </div>
   
  </div>
     <div class="icon">
          <Homeicon />
    </div>
<el-drawer
  title="请输入管理员账号密码"
  v-model="drawer"
  direction="ltr"
 >
 <img src="../../assets/logo.png" alt="" class="logoimg">
<el-input v-model="inputName" placeholder="请输入用户名" class="inputi"></el-input>
<el-input v-model="inputPass" placeholder="请输入密码" class="inputi"></el-input>
  <el-button type="primary" @click="handleGuanli" class="guanlifeng">登录</el-button>
</el-drawer>
</template>

<script>
import { ElMessage } from 'element-plus'
import { ref } from "vue"
import HomeLogin from  "../hometop/HomeLogin.vue"
import HomeGouwu from   "../hometop/HomeGouwu.vue"
import Homeicon from  "../hometop/Homeicon.vue"
import axios from "axios"
import { useRouter } from "vue-router"
export default {
    name : "HomeHeader" ,
    setup(){
        const drawer = ref(false);
        const inputName = ref("");
        const inputPass = ref("");
        const router = useRouter();
        const handleClick=()=>{
            drawer.value = true
        }
        const handleGuanli=()=>{
            axios.post("http://localhost:3000/guanliyuan",{
                name:inputName.value,
                password:inputPass.value
            }).then((res)=>{
                if(res.data.erron == 0){
                    ElMessage.success("你好，管理员");
                    router.push("/houtai")
                }else{
                       ElMessage.error('用户名密码错误');
                }
            })
        }
        return {drawer,handleClick,inputName,inputPass,handleGuanli}
    },
    components:{
        HomeLogin,
        HomeGouwu,
        Homeicon
    }
}
</script>

<style scoped>
.logoimg{
    display: block;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
}
.inputi{
    margin-bottom: 20px;
    display: block;
    width: 60%;
    margin-right: auto;
    margin-left: auto;
}
.guanlifeng{
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.content .header .right div.inbl{
    display: inline-block;
    padding-right: 20px;
}
.content .header .left ul li{
    display: inline-block;
    padding-right: 15px;
}

.content .header{
    width: 1226px;
    margin-left: auto;
    margin-right: auto;
    color: #b0b0b0;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.content{
    width: 100%;
    background-color: #333;
}
.listhover:hover{
    color: #fff;
    cursor: pointer;
}
.icon{
    margin-top: 20px;
}
</style>>
