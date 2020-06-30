<template>
 <div id="app" class="container">
  <nav-bar></nav-bar>
  <div class="col-md-2">
   <!-- 侧边栏组件 -->
   <my-aside></my-aside>
  </div>
  <div class="col-md-10">
   <router-view></router-view>
  </div>
 </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import MyAside from "./components/Aside.vue";

export default {
 name: "App",
 components: { NavBar, MyAside }
};
</script>

<style>
</style>
