<template>
  <header class="header">
    <div class="header__logo-box">
      <img src="@/assets/img/logo-white.png" alt="Logo" class="header__logo" />
    </div>

    <div class="header__text-box">
      <h1 class="heading-primary">
        <span class="heading-primary--main">Outdoors</span>
        <span class="heading-primary--sub">is where life happens</span>
      </h1>

      <router-link
        v-if="userStore.isLoggedIn == true"
        to="/blogs"
        class="btn btn--white btn--animated"
        >See Blogs</router-link
      >

      <router-link v-else to="/auth" class="btn btn--white btn--animated"
        >Login / sign up</router-link
      >
    </div>
  </header>
</template>

<script>
import { mapStores } from "pinia";
import { useUserStore } from "../stores/user";

export default {
  name: "Hero",
  computed: {
    ...mapStores(useUserStore),
  },
};
</script>
