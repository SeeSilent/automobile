<template>
  <el-form>
    <el-form-item label="汽车名称" label-width="70px">
      <el-input v-model="form.name" placeholder="请输入汽车名称"></el-input>
    </el-form-item>
    <el-form-item label="汽车价格" label-width="70px">
      <el-input v-model="form.monay" placeholder="请输入汽车价格"></el-input>
    </el-form-item>

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
    <el-form-item label="汽车图片" label-width="70px">
      <el-input
        v-model="form.imgurl"
        placeholder="请输入图片url地址"
      ></el-input>
    </el-form-item>
    <el-form-item style="margin: 0px 208px;">
      <el-button type="primary" @click="onSubmit">立即添加</el-button>
      <el-button @click="reset">重置</el-button>
    </el-form-item>
  </el-form>

</template>

<script>
  import { ElMessage } from 'element-plus'
import { reactive } from "vue";
import axios from "axios"
export default {
  name: "Addcar",
  setup() {
    const form = reactive({
      name: "",
      region: "",
      monay: "",
      imgurl: "",
    });
    const onSubmit = () => {
      axios.post("http://localhost:3000/add",{
        name:form.name,
        region:form.region,
        monay:form.monay,
        imgurl:form.imgurl
      }).then((res)=>{
          console.log(res.data)
          if(res.data.erron == "0"){
              ElMessage.success({
              message: '添加成功',
              type: 'success'
            });
            console.log("ok!")
          }else{
            ElMessage.error('添加失败');
            }
      }).catch((err)=>{
        ElMessage.error("错误："+err.message);
      })
    };
    const reset = () => {
      form.name = "";
      form.region = "";
      (form.monay = ""), (form.imgurl = "");
    };
 
    return { form, onSubmit, reset};
  },
};
</script>

<style scoped>
.el-form {
  width: 600px;
  margin: 0px auto;
  padding-top: 150px;
}
.el-form-item{
  margin-bottom: 33px;
}
</style>