<template>
 <form @submit.prevent="update()">
  <legend>编辑英雄</legend>
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
  <button type="submit" class="btn btn-success">修改</button>
 </form>
</template>

<script>
// import axios from "axios";
export default {
 name: "",
 data() {
  return {
   // 英雄表单数据对象
   heroesForm: {
    hName: "",
    hGender: ""
   }
  };
 },
 created() {
  this.getInfo();
 },
 methods: {
  //  获取英雄信息
  getInfo() {
   const id = this.$route.params.id;
   this.$http
    .get(`heroes/${id}`)
    .then(res => {
     this.heroesForm = res.data;
    })
    .catch(() => {
     alert("获取失败");
    });
  },
  //   提交表单
  update() {
   const id = this.$route.params.id;
   this.$http
    .patch(`${id}`, this.heroesForm)
    .then(() => {
     // 修改成功
     alert("编辑成功");
     this.$router.push("heroes");
    })
    .catch(() => {
     alert("编辑失败");
    });
  }
 }
};
</script>

<style scoped lang='less'></style>