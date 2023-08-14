<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Loading from "./components/Loading.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Loading,
  },
};
</script>
