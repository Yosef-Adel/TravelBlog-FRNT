<template>
  <div class="popup" id="popupc" style="color: #454545">
    <div class="popup__content">
      <div v-if="isSuccesful" class="success-pop">
        <h1 class="paragraph">Comment updated successfully!!</h1>
      </div>
      <a href="#" @click="this.$emit('closed')" class="popup__close">&times;</a>

      <div class="popup-form">
        <form class="form" @submit.prevent="editComment">
          <div class="u-margin-bottom-medium">
            <h2 class="heading-secondary">edit a comment</h2>
          </div>

          <div class="form__group">
            <textarea
              type="text"
              class="form__input"
              placeholder="Enter content"
              id="text"
              rows="6"
              v-model="text"
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
  name: "CommentEdit",
  props: {
    comment: {
      type: Object,
      required: true,
    },
    PostId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      isSuccesful: false,
      text: this.comment.text,
    };
  },
  computed: {
    ...mapStores(useUserStore),
  },
  methods: {
    async editComment() {
      const config = {
        headers: {
          Authorization: `Bearer ${this.userStore.token}`,
        },
      };
      const data = {
        text: this.text,
        PostId: this.PostId,
      };
      console.log(data);
      try {
        const response = await api.patch(
          `/comment/${this.comment.id}`,
          data,
          config
        );
        console.log(response);
        this.isSuccesful = true;
        setTimeout(() => {
          this.isSuccesful = false;
        }, 3000);
        this.$emit("editComment");
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    console.log(this.comment.id);
  },
};
</script>
