<template>
  <section class="section-book">
    <div class="row">
      <div class="book">
        <div class="book__form">
          <form @submit.prevent="login" class="form">
            <div class="u-margin-bottom-medium">
              <h2 class="heading-secondary">Create Account</h2>
            </div>

            <div class="form__group">
              <input
                type="text"
                class="form__input"
                placeholder="Full name"
                id="name"
                v-model="name"
                required
              />
              <label for="name" class="form__label">Full name</label>
            </div>

            <div class="form__group">
              <input
                type="email"
                class="form__input"
                placeholder="Email address"
                id="email"
                v-model="email"
                required
              />
              <label for="email" class="form__label">Email address</label>
            </div>

            <div class="form__group">
              <input
                type="password"
                class="form__input"
                placeholder="Password"
                id="password"
                v-model="password"
                required
              />
              <label for="password" class="form__label">Password</label>
            </div>

            <div class="flex jusrify-around">
              <button class="btn btn--green" type="submit">
                Signup &rarr;
              </button>
              <p class="form__text">
                Already have an account?
                <span @click="onClickLogin">Login</span> here.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import api from "@/axios/api";
import requests from "@/axios/requests";
export default {
  name: "Signup",
  methods: {
    onClickLogin() {
      this.$emit("onClickLogin");
    },
    async login() {
      try {
        const response = await api.post(requests.Signup, {
          email: this.email,
          password: this.password,
          name: this.name,
        });
        console.log(response);
        if (response.status === 200) {
          console.log(response.data);
          // this.$store.commit("setUser", response.data.data.user);
          // this.$store.commit("setToken", response.data.token);
          // this.$router.push({ name: "Home" });
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  data() {
    return {
      email: "",
      password: "",
      name: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
