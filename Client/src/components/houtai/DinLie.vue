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
          <el-table-column fixed="right" label="操作" width="120">
      <template #default="scope">
        <el-button
          @click.prevent="deleteRow(scope.$index, list)"
          type="text"
          size="small"
        >
          删除订单
        </el-button>
      </template>
    </el-table-column>
    </el-table>
   
  </div>
</template>

<script>
import { ElMessage } from "element-plus";
import { ref } from "vue";
import axios from "axios";
export default {
  name: "DinLie",
  setup() {
    const list = ref([]);
    axios.post("http://localhost:3000/getalldingdan", {}).then((res) => {
      list.value = res.data;
   
    });
      const deleteRow = (index, rows) => {
        console.log(rows[index].userID)
      axios
        .post("http://localhost:3000/deledindan", {
          _id: rows[index]._id,
        })
        .then((res) => {
          if (res.data.erron == "0") {
            ElMessage.success({
              message: "删除成功",
              type: "success",
            });
          } else {
            ElMessage.error("删除失败");
          }
        })
        .catch((err) => {
          ElMessage.error("错误："+err.message);
        });
        
      rows.splice(index, 1);
    };
    
    return { list ,deleteRow};
  },
  components:{
 
  }
};
</script>

<style>
</style>