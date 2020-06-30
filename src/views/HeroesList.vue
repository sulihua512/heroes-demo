<template>
 <div class="list-container">
  <router-link to="/heroes/add" class="btn btn-primary">添加英雄</router-link>
  <hr />
  <table class="table table-hover">
   <thead>
    <th>ID</th>
    <th>英雄名称</th>
    <th>英雄性别</th>
    <th>创建时间</th>
    <th>操作</th>
   </thead>
   <tbody>
    <tr v-for="item in heroesList" :key="item.id">
     <td>{{item.id}}</td>
     <td>{{item.hName}}</td>
     <td>{{item.hGender}}</td>
     <td>{{item.cTime}}</td>
     <td>
      <router-link :to="'/heroes/edit/'+item.id" type="button" class="btn btn-success">编辑</router-link>&nbsp;
      <button type="button" class="btn btn-danger">删除</button>
     </td>
    </tr>
    <tr v-if="heroesList.length===0">
     <td colspan="5">暂无数据</td>
    </tr>
   </tbody>
  </table>
 </div>
</template>

<script>
// 导入axios
import axios from "axios";
export default {
 name: "",
 data() {
  return {
   heroesList: []
  };
 },
 created() {
  this.getList();
 },
 methods: {
  //  获取英雄列表数据
  getList() {
   //  通过axios发查询列表请求
   axios.get("http://localhost:3000/heroes").then(res => {
    // console.log(res);
    this.heroesList = res.data;
   });
  }
 }
};
</script>

<style ></style>