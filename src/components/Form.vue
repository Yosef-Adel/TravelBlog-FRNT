<template>
  <section class="section-book">
    <div v-if="isSuccesful" class="success-pop">
      <h1 class="paragraph">Blog created successfully!!</h1>
    </div>
    <div class="row">
      <div class="blogform">
        <div class="book__form">
          <form class="form" @submit.prevent="create">
            <div class="u-margin-bottom-medium">
              <h2 class="heading-secondary">Write a blog</h2>
            </div>
            <div class="form__group">
              <input
                type="text"
                class="form__input"
                placeholder="Enter title"
                id="title"
                v-model="title"
                required
              />
              <label for="title" class="form__label">Enter title</label>
            </div>

            <div class="form__group">
              <textarea
                type="text"
                class="form__input"
                placeholder="Enter content"
                id="content"
                rows="6"
                v-model="content"
                required
              />
              <label for="content" class="form__label">Enter content</label>
            </div>

            <button type="submit" class="btn btn--green">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapStores } from "pinia";
import { useUserStore } from "../stores/user";
import api from "@/axios/api";

export default {
  name: "Form",

  data() {
    return {
      title: "",
      content: "",
      isSuccesful: false,
    };
  },
  computed: {
    ...mapStores(useUserStore),
  },
  methods: {
    async create() {
      const data = {
        title: this.title,
        content: this.content,
      };
      const config = {
        headers: {
          Authorization: `Bearer ${this.userStore.token}`,
        },
      };
      try {
        const response = await api.post("/blog", data, config);
        console.log(response);
        if (response.status === 200) {
          console.log(response.data);
          this.isSuccesful = true;
          setTimeout(() => {
            this.isSuccesful = false;
          }, 3000);
          this.title = "";
          this.content = "";
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
