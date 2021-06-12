<template>
<img src="../assets/logo.png" alt="" class="img">
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
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="ruleForm.email"></el-input>
    </el-form-item>
      <el-form-item label="手机号" prop="phone">
      <el-input v-model.number="ruleForm.phone"></el-input>
    </el-form-item>

    <el-form-item class="tijiao" @mouseenter="handleenter">
       <el-button type="primary" @click="handleClick" :disabled="dis" class="zhuche">注册</el-button>
    </el-form-item>
     <el-form-item class="tijiao">
       <router-link to="/">
            <el-button type="primary">返回登录</el-button>
       </router-link>
       
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
      dis:false,
      ruleForm: {
        name: "",
        password: "",
        email: "",
        phone:""
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
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        phone: [
          { required: true, message: "手机号不能为空" },
          { type: "number", message: "手机号必须为数字值"},
        ],
      },
    };
  },
  methods:{
    handleClick(){
        axios.post("http://localhost:3000/userinsert",{
        username:this.ruleForm.name,
        userpassword:this.ruleForm.password,
        useremail:this.ruleForm.email,
        userphone:this.ruleForm.phone
      }).then((res)=>{
           console.log(res.data)
          if(res.data.erron == "0"){
              ElMessage.success({
              message: '注册成功',
              type: 'success'
            });
            console.log("ok!")
          }else{
            ElMessage.error('注册失败');
            }
      }).catch((err)=>{
        ElMessage.error("错误："+err.message);
      })
    },
    handleenter(){
      if( this.ruleForm.name== "" ||
        this.ruleForm.password== "" ||
        this.ruleForm.email== "" ||
        this.ruleForm.phone==""
        ){
         ElMessage.error('注册信息不能为空');
     
        }
   
    }
     
  }
};
</script>

<style scoped>
.zhuche{
  width: 380px;
}
.demo-ruleForm{
  width: 25%;
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