<template>
  <el-form>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
  <el-table :data="item">
    <el-table-column prop="username" label="用户名" width="140">
    </el-table-column>
    <el-table-column prop="userpassword" label="用户密码" width="120">
    </el-table-column>
    <el-table-column prop="useremail" label="用户邮箱"> </el-table-column>
    <el-table-column prop="userphone" label="用户手机号"> </el-table-column>

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

  <el-drawer title="用户查询" v-model="drawer1" destroy-on-close>
    <el-form>
      <el-form-item label="用户名" label-width="70px">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="searchtarget">查询</el-button>
      </el-form-item>
    </el-form>
  </el-drawer>

  <el-drawer title="用户信息" v-model="drawer2" destroy-on-close>
    <el-form>
      <el-form-item label="用户名" label-width="100px">
        <el-input
          v-model="curbase.username"
          placeholder="请输入用户名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="用户密码" label-width="100px">
        <el-input
          v-model="curbase.userpassword"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item label="用户邮箱" label-width="100px">
        <el-input
          v-model="curbase.useremail"
          placeholder="请输入用户邮箱"
        ></el-input>
      </el-form-item>
      <el-form-item label="用户手机号" label-width="100px">
        <el-input
          v-model="curbase.userpassword"
          placeholder="请输入用户手机号"
        ></el-input>
      </el-form-item>

      <el-form-item class="genggai">
        <el-button type="primary" @click="changeit">更改</el-button>
      </el-form-item>
    </el-form>
  </el-drawer>
  {{item.value}}
</template>

<script>
import { ElMessage } from "element-plus";
import { ref, reactive } from "vue";
import axios from "axios";
export default {
  name: "SearchCar",
  setup() {
    let drawer1 = ref(false);
    let drawer2 = ref(false);
    const form = reactive({
      username: "123"
    });
    let item = ref([

    ]);
    const onSubmit = () => {
      drawer1.value = true;
    };
    const prebase = reactive({
      username: "",
      userphone: "",
      userpassword: "",
      useremail: "",
    });
    const curbase = reactive({
      username: "",
      userphone: "",
      userpassword: "",
      useremail: "",
    });
    const searchtarget = () => {
      drawer1.value = false;
      axios
        .post("http://localhost:3000/searchusertarget", {
          username: form.username,
        })
        .then((res) => {
          item.value = res.data;
          console.log(item.value);
          ElMessage.success({
            message: "查询结果如下",
            type: "success",
          });
        })
        .catch((err) => {
          ElMessage.error("错误：" + err.message);
        });
    };
    const deleteRow = (index, rows) => {
      curbase.username = rows[index].username;
      axios
        .post("http://localhost:3000/deleuser", {
          username: rows[index].username,
          userphone: rows[index].userphone,
          userpassword: rows[index].userpassword,
          useremail: rows[index].useremail,
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
          ElMessage.error("错误：" + err.message);
        });
      console.log(rows[index].username);
      rows.splice(index, 1);
    };

    const changebase = (index, rows) => {
      drawer2.value = true;
      curbase.username = rows[index].username;
      curbase.userphone = rows[index].userphone;
      curbase.userpassword = rows[index].userpassword;
      curbase.useremail = rows[index].useremail;

      prebase.username = rows[index].username;
      prebase.userphone = rows[index].userphone;
      prebase.userpassword = rows[index].userpassword;
      prebase.useremail = rows[index].useremail;
    };
    const changeit = () => {
      drawer2.value = false;
      axios
        .post("http://localhost:3000/updateuser", {
          tiaojian: {
            username: prebase.username,
            userphone: prebase.userphone,
            userpassword: prebase.userpassword,
            useremail: prebase.useremail,
          },
          targetbase: {
            username: curbase.username,
            userphone: curbase.userphone,
            userpassword: curbase.userpassword,
            useremail: curbase.useremail,
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
          ElMessage.error("错误：" + err.message);
        });
    };
    return {
      item,
      form,
      drawer1,
      onSubmit,
      searchtarget,
      drawer2,
      deleteRow,
      changebase,
      changeit,
      curbase,
      prebase,
    };
  },
};
</script>

<style>
.imgcar {
  width: 130px;
}
.genggai{
    display: flex;
    justify-content: center;
}
</style>