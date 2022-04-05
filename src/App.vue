<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="一键三连" />
  <router-link to="/dianzan">
    <el-button>点赞</el-button>
  </router-link>
  <router-link to="/toubi" style="margin: 1vw">
    <el-button>投币</el-button>
  </router-link>
  <router-link to="/shoucang">
    <el-button>收藏</el-button>
  </router-link>
  <router-view></router-view>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  text-decoration: none;
}
</style>
