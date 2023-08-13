<template>
  <section class="section-book">
    <div class="row">
      <div class="book">
        <div class="book__form">
          <form action="#" class="form">
            <div class="u-margin-bottom-medium">
              <h2 class="heading-secondary">Create Account</h2>
            </div>

            <div class="form__group">
              <input
                type="text"
                class="form__input"
                placeholder="Full name"
                id="name"
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
                required
              />
              <label for="password" class="form__label">Password</label>
            </div>

            <div class="flex jusrify-around">
              <button class="btn btn--green">Signup &rarr;</button>
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
export default {
  name: "Signup",
  methods: {
    onClickLogin() {
      this.$emit("onClickLogin");
    },
  },
};
</script>

<style lang="scss" scoped></style>
