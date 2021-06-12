<template>
  <el-table :data="item">
     <el-table-column prop="_id" label="用户ID" width="140">
    </el-table-column>
    <el-table-column prop="username" label="用户名称" width="140">
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

  <el-drawer title="用户信息修改" v-model="drawer" destroy-on-close>
    <el-form>
      <el-form-item label="用户名" label-width="100px">
        <el-input
          v-model="curbase.username"
          placeholder="请输入新名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="用户密码" label-width="100px">
        <el-input
          v-model="curbase.userpassword"
          placeholder="请输入新密码"
        ></el-input>
      </el-form-item>
      <el-form-item label="用户邮箱" label-width="100px">
        <el-input
          v-model="curbase.userphone"
          placeholder="请输入新邮箱"
        ></el-input>
      </el-form-item>
      <el-form-item label="用户手机" label-width="100px">
        <el-input
          v-model="curbase.useremail"
          placeholder="请输入新手机号"
        ></el-input>
      </el-form-item>

      <el-form-item class="genggai">
        <el-button type="primary" @click="changeit">更改</el-button>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<script>
import { ElMessage } from "element-plus";
import axios from "axios";
import { ref, onMounted, reactive } from "vue";
export default {
  name: "Kucun",
  setup() {
    let drawer = ref(false);
    let item = ref([
    
    ]);
    const prebase = reactive({
      username: "",
      userpassword: "",
      useremail: "",
      userphone: "",
    });
    const curbase = reactive({
      username: "",
      userpassword: "",
      useremail: "",
      userphone: "",
    });
    onMounted(() => {
      axios.post("http://localhost:3000/searchuser", {}).then((res) => {
        item.value = res.data;
        console.log(res.data);
      });
    });
    const deleteRow = (index, rows) => {
      curbase.username = rows[index].username;
      curbase.userpassword = rows[index].userpassword;
      axios
        .post("http://localhost:3000/deleuser", {
          username: rows[index].username,
          userpassword: rows[index].userpassword,
          useremail: rows[index].useremail,
          userphone: rows[index].userphone,
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
      console.log(rows[index].username);
      rows.splice(index, 1);
    };

    const changebase = (index, rows) => {
      drawer.value = true;
      curbase.username = rows[index].username;
      curbase.userpassword = rows[index].userpassword;
      curbase.useremail = rows[index].useremail;
      curbase.userphone = rows[index].userphone;

      prebase.username = rows[index].username;
      prebase.userpassword = rows[index].userpassword;
      prebase.useremail = rows[index].useremail;
      prebase.userphone = rows[index].userphone;
    };
    const changeit = () => {
        drawer.value=false
      axios
        .post("http://localhost:3000/updateuser", {
          tiaojian: {
            username: prebase.username,
            userpassword: prebase.userpassword,
            useremail: prebase.useremail,
            userphone: prebase.userphone,
          },
          targetbase: {
            username: curbase.username,
            userpassword: curbase.userpassword,
            useremail: curbase.useremail,
            userphone: curbase.userphone,
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

    return { item, deleteRow, changebase, drawer, curbase, changeit,prebase };
  },
};
</script>

<style>

.genggai{
    display: flex;
    justify-content: center;
}
</style>