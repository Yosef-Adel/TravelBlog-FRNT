<template>
  <div class="popup" id="popup">
    <div class="popup__content">
      <div v-if="isSuccesful" class="success-pop">
        <h1 class="paragraph">Blog updated successfully!!</h1>
      </div>
      <a href="#" @click="this.$emit('closed')" class="popup__close">&times;</a>

      <div class="popup-form">
        <form class="form" @submit.prevent="create">
          <div class="u-margin-bottom-medium">
            <h2 class="heading-secondary">edit a blog</h2>
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
</template>

<script>
import { mapStores } from "pinia";
import { useUserStore } from "../stores/user";
import api from "@/axios/api";

export default {
  name: "PopupForm",
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      title: this.blog.title,
      content: this.blog.content,
      isSuccesful: false,
    };
  },
  computed: {
    ...mapStores(useUserStore),
  },
  methods: {
    onUpdate() {
      this.$emit("onUpdate");
    },
    async create() {
      const config = {
        headers: {
          Authorization: `Bearer ${this.userStore.token}`,
        },
      };
      const data = {
        title: this.title,
        content: this.content,
      };
      try {
        const response = await api.patch(`/blog/${this.blog.id}`, data, config);
        this.isSuccesful = true;
        this.title = "";
        this.content = "";
        setTimeout(() => {
          this.isSuccesful = false;
        }, 3000);
        this.onUpdate();
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    console.log(this.blog);
  },
};
</script>

<style lang="scss" scoped></style>
