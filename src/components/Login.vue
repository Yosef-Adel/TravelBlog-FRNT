<template>
  <section class="section-book">
    <div class="row">
      <div class="book">
        <div class="book__form">
          <form @submit.prevent="login" class="form">
            <div class="u-margin-bottom-medium">
              <h2 class="heading-secondary">Login</h2>
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
              <button class="btn btn--green" type="submit">Login &rarr;</button>
              <p class="form__text">
                Create account? <span @click="onClickSignup">Signup</span> here.
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
import { mapStores } from "pinia";
import { useUserStore } from "../stores/user";
export default {
  name: "Login",
  computed: {
    ...mapStores(useUserStore),
  },
  methods: {
    onClickSignup() {
      this.$emit("onClickSignup");
    },
    async login() {
      try {
        const response = await api.post(requests.Login, {
          email: this.email,
          password: this.password,
        });
        console.log(response);
        if (response.status === 200) {
          console.log(response.data);
          this.userStore.login(response.data.user, response.data.token);
          this.$router.push({ name: "home" });
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
    };
  },
};
</script>
