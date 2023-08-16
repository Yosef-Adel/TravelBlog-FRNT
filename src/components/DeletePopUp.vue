<template>
  <div class="popup" id="popupd">
    <div class="popup__content">
      <div v-if="isSuccesful" class="delete-pop">
        <h1 class="paragraph">Blog deleted successfully!!</h1>
      </div>
      <a href="#" @click="this.$emit('closed')" class="popup__close">&times;</a>

      <div class="popup-form">
        <form class="form" @submit.prevent="deleteBlog">
          <div class="u-margin-bottom-medium">
            <h2 class="heading-tertiary">
              Are you sure you want to delete this blog?
            </h2>
          </div>
          <button type="submit" class="btn btn--red">Delete</button>
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
  name: "DeletePopUp",
  props: {
    id: {
      required: true,
    },
  },
  data() {
    return {
      isSuccesful: false,
    };
  },
  computed: {
    ...mapStores(useUserStore),
  },

  methods: {
    async deleteBlog() {
      const config = {
        headers: {
          Authorization: `Bearer ${this.userStore.token}`,
        },
      };
      try {
        const response = await api.delete(`/blog/${this.id}`, config);
        console.log(response);
        this.isSuccesful = true;
        setTimeout(() => {
          this.isSuccesful = false;
        }, 3000);

        this.$router.push("/blogs");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
