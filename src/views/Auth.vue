<template>
  <template v-if="isLoading">
    <Loading />
  </template>
  <template v-else>
    <template v-if="haseAccount">
      <Login @onClickSignup="haseAccount = false" />
    </template>
    <template v-else>
      <Signup @onClickLogin="haseAccount = true" />
    </template>
  </template>
</template>

<script>
import Signup from "../components/Signup.vue";
import Login from "../components/Login.vue";
import Loading from "../components/Loading.vue";

export default {
  name: "Auth",

  data() {
    return {
      haseAccount: true,
      isLoading: true,
    };
  },

  components: {
    Signup,
    Login,
    Loading,
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },
};
</script>

<style lang="scss" scoped></style>
