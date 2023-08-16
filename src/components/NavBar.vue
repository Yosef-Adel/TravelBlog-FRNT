<template>
  <div class="navigation">
    <input
      type="checkbox"
      class="navigation__checkbox"
      id="navi-toggle"
      v-model="isChecked"
    />

    <label for="navi-toggle" class="navigation__button">
      <span class="navigation__icon">&nbsp;</span>
    </label>

    <div class="navigation__background">&nbsp;</div>

    <nav class="navigation__nav">
      <ul class="navigation__list">
        <li class="navigation__item">
          <router-link
            to="/"
            class="navigation__link"
            @click="isChecked = false"
            ><span>01</span>Home</router-link
          >
        </li>
        <li class="navigation__item" v-if="userStore.isLoggedIn == true">
          <router-link
            to="/blogs"
            class="navigation__link"
            @click="isChecked = false"
            ><span>02</span>Blogs</router-link
          >
        </li>
        <li class="navigation__item" v-if="userStore.isLoggedIn == true">
          <router-link
            to="/create-blog"
            class="navigation__link"
            @click="isChecked = false"
            ><span>03</span>Create Blog</router-link
          >
        </li>
        <li class="navigation__item" v-if="userStore.isLoggedIn == false">
          <router-link
            to="/auth"
            class="navigation__link"
            @click="isChecked = false"
            ><span>04</span>Login</router-link
          >
        </li>
        <li class="navigation__item" v-if="userStore.isLoggedIn == true">
          <router-link
            :to="ProfileLink"
            class="navigation__link"
            @click="isChecked = false"
            ><span>04</span>Profile</router-link
          >
        </li>

        <li class="navigation__item" v-if="userStore.isLoggedIn == true">
          <router-link to="/" class="navigation__link" @click="LogoutFunction"
            ><span>05</span>Logout</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useUserStore } from "../stores/user";
export default {
  name: "NavBar",
  data() {
    return {
      isChecked: false,
    };
  },
  computed: {
    ...mapStores(useUserStore),
    ProfileLink() {
      return `/profile/${this.userStore.user.id}`;
    },
  },

  methods: {
    LogoutFunction() {
      this.userStore.logout();
      this.$router.push({ name: "home" });
      this.isChecked = false;
    },
  },
};
</script>
