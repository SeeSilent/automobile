<template>
  <div>
    <el-table
  
      :data="list"
      style="width: 100%; margin-bottom: 20px"
      row-key="_id"
      border
      default-expand-all
      :tree-props="{ children: 'userDindan', hasChildren: 'userDindan' }"
    >
   
      <el-table-column prop="userDindan" label="订单详情" >
          <div v-for="item in list" :key="item">
                  <el-table
      :data="item.userDindan"
      style="width: 100%; margin-bottom: 20px"
      row-key="_id"
      border
      default-expand-all
    >
      <el-table-column prop="_id" label="汽车ID" sortable width="180" >
      </el-table-column>
      <el-table-column prop="name" label="汽车名称" sortable width="180">
      </el-table-column>
      <el-table-column prop="region" label="汽车系列">
      </el-table-column>
         <el-table-column prop="monay" label="汽车价格">
      </el-table-column>
         <el-table-column prop="imgurl" label="汽车图片">
      </el-table-column>
    </el-table>
          </div>
      </el-table-column>
         <el-table-column prop="userID" label="用户ID" sortable width="180">
      </el-table-column>
      <el-table-column prop="DindanState" label="订单状态" sortable width="180">
      </el-table-column>
    </el-table>
   
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
export default {
  name: "YiFa",
  setup() {
    const list = ref([]);
    axios.post("http://localhost:3000/gettargetdin", {
        DindanState:"已发货"
    }).then((res) => {
      list.value = res.data
   
    });
    
    return { list };
  },
  components:{
 
  }
};
</script>

<style>
</style>