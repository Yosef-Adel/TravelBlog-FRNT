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
        <li class="navigation__item">
          <router-link
            to="/blog"
            class="navigation__link"
            @click="isChecked = false"
            ><span>02</span>Blogs</router-link
          >
        </li>
        <li class="navigation__item">
          <router-link
            to="/create-blog"
            class="navigation__link"
            @click="isChecked = false"
            ><span>03</span>Create Blog</router-link
          >
        </li>
        <li class="navigation__item">
          <router-link
            to="/auth"
            class="navigation__link"
            @click="isChecked = false"
            ><span>04</span>Login</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isChecked: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
