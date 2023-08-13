<template>
  <template v-if="haseAccount">
    <Login @onClickSignup="haseAccount = false" />
  </template>
  <template v-else>
    <Signup @onClickLogin="haseAccount = true" />
  </template>
</template>

<script>
import Signup from "../components/Signup.vue";
import Login from "../components/Login.vue";

export default {
  name: "Auth",

  data() {
    return {
      haseAccount: true,
    };
  },

  components: {
    Signup,
    Login,
  },
};
</script>

<style lang="scss" scoped></style>
