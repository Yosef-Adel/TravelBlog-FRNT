<template>
  <template v-if="isLoading">
    <Loading />
  </template>
  <template v-else>
    <Hero />
  </template>
</template>

<script>
import Hero from "../components/Hero.vue";
import Loading from "../components/Loading.vue";
export default {
  name: "App",
  components: {
    Hero,
    Loading,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },
};
</script>
