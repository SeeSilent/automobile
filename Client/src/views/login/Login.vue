<template>


<img src="../../assets/logo.png" alt="" class="img">
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="用户名称" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="用户密码" prop="password">
      <el-input v-model="ruleForm.password"></el-input>
    </el-form-item>

    <el-form-item class="tijiao">
       <el-button type="primary" @click="handleClick">登录</el-button>
    </el-form-item>
     <el-form-item class="tijiao">
       <el-button type="primary" @click="handleClick2">忘记密码</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import { ElMessage } from 'element-plus'
import axios from "axios"
export default {
  name: "Register",
  data() {
    return {
      ruleForm: {
        name: "",
        password: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          {
            min: 5,
            max: 10,
            message: "用户名在 5 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入用户密码", trigger: "blur" },
          {
            min: 6,
            max: 18,
            message: "密码在 6 到 18 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods:{
    handleClick(){
      axios.post("http://localhost:3000/logincheack",{
        username:this.ruleForm.name,
        userpassword:this.ruleForm.password
      }).then((res)=>{
          if(res.data.erron == "0"){
              ElMessage.success({
              message: '登录成功',
              type: 'success'
              });
          
          this.$store.commit("changeUserState",res.data._id)
          this.$emit("changeState")
          }else{
            ElMessage.error('用户名密码错误');
            }
      }).catch((err)=>{
        ElMessage.error("错误："+err.message);
      })
    },
    handleClick2(){
      console.log("wangjimima ")
    }
  }
};
</script>

<style>
.demo-ruleForm{
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
}
.tijiao{
  display: flex;
  justify-content: center;
  margin-left: 0px;
}
.img{
  display: block;
  margin: 0px auto;
}
</style>