<template>
 <form @submit.prevent="submit">
  <legend>添加英雄</legend>
  <div class="form-group">
   <label>英雄名称</label>
   <input type="text" class="form-control" v-model="heroesForm.hName" />
  </div>
  <div class="form-group">
   <label>英雄性别</label>
   <div>
    <input type="radio" name="gender" value="男" v-model="heroesForm.hGender" /> 男
    <input type="radio" name="gender" value="女" v-model="heroesForm.hGender" /> 女
   </div>
  </div>
  <button type="submit" class="btn btn-primary">提交</button>
 </form>
</template>

<script>
// import axios from "axios";
export default {
 name: "",
 data() {
  return {
   heroesForm: {
    hName: "",
    hGender: "男"
   }
  };
 },
 methods: {
  //  提交表单数据
  submit() {
   //   使用axios进行添加英雄请求
   this.$http
    .post("heroes", {
     cTime: new Date(),
     ...this.heroesForm
    })
    .then(() => {
     // 成功 跳转列表
     this.$router.push("heroes");
    })
    .catch(err => {
     alert("添加失败", err);
    });
  }
 }
};
</script>

<style></style>