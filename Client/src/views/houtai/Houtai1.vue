<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="200px">
      <img src="../../assets/logo.png" alt="" class="headerimg" />
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template #title><i class="el-icon-message"></i>销售管理</template>

          <el-menu-item index="1-1" @click="handleDinLie">订单列表</el-menu-item>
          <el-menu-item index="1-2" @click="handleYiFa">已发货订单</el-menu-item>
          <el-menu-item index="1-3" @click="handleWeiFa">未发货订单</el-menu-item>
        </el-submenu>

        <el-submenu index="2">
          <template #title><i class="el-icon-menu"></i>库存管理</template>

          <el-menu-item index="2-1" @click="handleAdd">新增车辆</el-menu-item>
          <el-menu-item index="2-2" @click="handleKucun">库存列表</el-menu-item>
          <el-menu-item index="2-3" @click="handleSearch"
            >车辆搜索</el-menu-item
          >
        </el-submenu>

        <el-submenu index="3">
          <template #title><i class="el-icon-setting"></i>客户管理</template>

          <el-menu-item index="3-1" @click="handleClickZhuche"
            >新增客户</el-menu-item
          >
          <el-menu-item index="3-2" @click="handleSearchUser"
            >客户搜索</el-menu-item
          >
          <el-menu-item index="3-3" @click="handleUserList"
            >客户列表</el-menu-item
          >
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <div class="headername">汽车之家后台管理系统</div>
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <template #dropdown>
            <el-dropdown-menu>
              <router-link to="/">
                 <el-dropdown-item>返回首页</el-dropdown-item>
              </router-link>
           
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <span>你好，管理员</span>
      </el-header>

      <el-main>
        <component :is="whatcom" />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import WeiFa from "../../components/houtai/WeiFa.vue"
import YiFa from "../../components/houtai/YiFa.vue"
import DinLie from "../../components/houtai/DinLie.vue"
import Addcar from "../../components/houtai/Addcar.vue";
import Kucun from "../../components/houtai/Kucun.vue";
import SearchCar from "../../components/houtai/SearchCar.vue";
import Zhuche from "../../components/Zhuche.vue";
import UserList from "../../components/houtai/Userlist.vue";
import Searchuser from "../../components/houtai/SearchUser.vue";
import HouDefault from "../../components/houtai/HouDefault.vue";

import { ref } from "vue";
export default {
  name: "Houtai1",
  setup() {
    let whatcom = ref("HouDefault");
    let item = ref([
      {
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄",
      },
    ]);
    const handleKucun = () => {
      whatcom.value = "Kucun";
    };
    const handleAdd = () => {
      whatcom.value = "Addcar";
    };
    const handleSearch = () => {
      whatcom.value = "SearchCar";
    };
    const handleClickZhuche = () => {
      whatcom.value = "Zhuche";
    };
    const handleUserList = () => {
      whatcom.value = "UserList";
    };
    const handleSearchUser = () => {
      whatcom.value = "Searchuser";
    };
    const handleDinLie=()=>{
       whatcom.value ="DinLie"
    };
    const handleYiFa=()=>{
        whatcom.value ="YiFa"
    }
    const handleWeiFa=()=>{
         whatcom.value = "WeiFa"
    }
    return {
      item,
      handleKucun,
      whatcom,
      handleAdd,
      handleSearch,
      handleClickZhuche,
      handleUserList,
      handleSearchUser,
      handleDinLie,
      handleYiFa,
      handleWeiFa
    };
  },
  components: {
    Addcar,
    Kucun,
    SearchCar,
    Zhuche,
    UserList,
    Searchuser,
       HouDefault,
       DinLie,
       YiFa,
       WeiFa
  },
};
</script>

<style scoped>
.headerimg {
  width: 100px;
  border-radius: 10px;
  margin: 0px 50px;
}
.headername {
  margin: 10px 29px;
  text-align: center;
  font-size: 30px;
  padding-left: 20px;
}
</style>