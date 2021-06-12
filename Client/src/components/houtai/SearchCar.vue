<template>
  <el-form>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
  <el-table :data="item">
    <el-table-column prop="name" label="汽车名称" width="140">
    </el-table-column>
    <el-table-column prop="monay" label="汽车价格" width="120">
    </el-table-column>
    <el-table-column prop="imgurl" label="汽车图片">
        
    </el-table-column>
    <el-table-column prop="region" label="汽车类型"> </el-table-column>
 
  <el-table-column fixed="right" label="操作" width="120">
      <template #default="scope">
        <el-button
          @click.prevent="changebase(scope.$index, item)"
          type="text"
          size="small"
        >
          修改
        </el-button>
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="操作" width="120">
      <template #default="scope">
        <el-button
          @click.prevent="deleteRow(scope.$index, item)"
          type="text"
          size="small"
        >
          移除
        </el-button>
      </template>
    </el-table-column>

  </el-table>



    <el-drawer
    title="车辆查询"
    v-model="drawer1"
    destroy-on-close>
      <el-form>
  
   <el-form-item label="汽车类型">
      <el-select v-model="form.region" placeholder="请选择汽车类型">
    <el-option label="梅赛德斯" value="梅赛德斯"></el-option>
        <el-option label="奥迪" value="奥迪"></el-option>
            <el-option label="大众" value="大众"></el-option>
        <el-option label="本田" value="本田"></el-option>
            <el-option label="宝马" value="宝马"></el-option>
        <el-option label="凯迪拉克" value="凯迪拉克"></el-option>
             <el-option label="宾利" value="宾利"></el-option>
        <el-option label="雷克萨斯" value="雷克萨斯"></el-option>
         <el-option label="五菱宏光" value="五菱宏光"></el-option>
      </el-select>
    </el-form-item>
        <el-form-item>
      <el-button type="primary" @click="searchtarget">查询</el-button>
    </el-form-item>
      </el-form>
    </el-drawer>

     <el-drawer title="车辆查询" v-model="drawer2" destroy-on-close>
    <el-form>
      <el-form-item label="汽车名称" label-width="70px">
        <el-input
          v-model="curbase.name"
          placeholder="请输入汽车名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="汽车类型">
        <el-select v-model="curbase.region" placeholder="请选择汽车类型">
       <el-option label="梅赛德斯" value="梅赛德斯"></el-option>
        <el-option label="奥迪" value="奥迪"></el-option>
            <el-option label="大众" value="大众"></el-option>
        <el-option label="本田" value="本田"></el-option>
            <el-option label="宝马" value="宝马"></el-option>
        <el-option label="凯迪拉克" value="凯迪拉克"></el-option>
             <el-option label="宾利" value="宾利"></el-option>
        <el-option label="雷克萨斯" value="雷克萨斯"></el-option>
         <el-option label="五菱宏光" value="五菱宏光"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="汽车图片" label-width="70px">
        <el-input
          v-model="curbase.imgurl"
          placeholder="请输入图片url地址"
        ></el-input>
      </el-form-item>
      <el-form-item label="汽车价格" label-width="70px">
        <el-input
          v-model="curbase.monay"
          placeholder="请输入汽车价格"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="changeit">更改</el-button>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<script>
import { ElMessage } from 'element-plus'
import { ref,reactive } from "vue";
import axios from 'axios';
export default {
  name: "SearchCar",
  setup() {
     let drawer1 = ref(false);
     let drawer2 = ref(false);
    const form = reactive({
      name: "",
      region: "",
    });
    let item = ref([
        
    ]);
    const onSubmit=()=>{
        drawer1.value = true
    }
     const prebase = reactive({
      name: "",
      region: "",
      monay: "",
      imgurl: "",
    });
    const curbase = reactive({
      name: "",
      region: "",
      monay: "",
      imgurl: "",
    });
    const searchtarget=()=>{
        drawer1.value=false
        axios.post("http://localhost:3000/searchtarget",{
    
            "region":form.region
        }).then((res)=>{
            item.value = res.data
            ElMessage.success({
              message: '查询结果如下',
              type: 'success'
            });
        }).catch((err)=>{
             ElMessage.error("错误："+err.message);
        })
    }
   const deleteRow = (index, rows) => {
      curbase.name = rows[index].name;
      curbase.region = rows[index].region;
      axios
        .post("http://localhost:3000/delete", {
          name: rows[index].name,
          region: rows[index].region,
          monay: rows[index].monay,
          imgurl: rows[index].imgurl,
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
      console.log(rows[index].name);
      rows.splice(index, 1);
    };

    const changebase = (index, rows) => {
      drawer2.value = true;
      curbase.name = rows[index].name;
      curbase.region = rows[index].region;
      curbase.monay = rows[index].monay;
      curbase.imgurl = rows[index].imgurl;

      prebase.name = rows[index].name;
      prebase.region = rows[index].region;
      prebase.monay = rows[index].monay;
      prebase.imgurl = rows[index].imgurl;
    };
    const changeit = () => {
        drawer2.value=false
      axios
        .post("http://localhost:3000/update", {
          tiaojian: {
            name: prebase.name,
            region: prebase.region,
            monay: prebase.monay,
            imgurl: prebase.imgurl,
          },
          targetbase: {
            name: curbase.name,
            region: curbase.region,
            monay: curbase.monay,
            imgurl: curbase.imgurl,
          },
        })
        .then((res) => {
          if (res.data.erron == "0") {
            ElMessage.success({
              message: "更新成功,请刷新页面",
              type: "success",
            });
          } else {
            ElMessage.error("更新失败");
          }
        })
        .catch((err) => {
          ElMessage.error("错误："+err.message);
        });
    };
    return { item, form ,drawer1,onSubmit,searchtarget,drawer2,deleteRow,changebase,changeit,curbase,prebase};
  },
};
</script>

<style>
.imgcar{
    width: 130px;
}
</style>