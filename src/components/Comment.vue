<template>
  <div class="comment__data">
    <div class="comment__user">
      <h1 class="heading-tertiary">{{ comment.user.name }}</h1>
    </div>
    <div class="comment__text">
      <p class="paragraph">{{ comment.text }}</p>
    </div>

    <div class="blog__controller" v-if="commentOwner">
      <a href="#popupc" @click="updateComment = true" class="btn btn--blue"
        >edit</a
      >
      <a href="#popupdc" @click="commentDeletepop = true" class="btn btn--red"
        >delete</a
      >
    </div>
    <CommentDelete
      v-if="commentDeletepop"
      :id="comment.id"
      @closed="commentDeletepop = false"
      @deleteComment="
        commentDeletepop = false;
        this.$emit('refresh');
      "
    />
    <CommentEdit
      v-if="updateComment"
      :comment="comment"
      :PostId="PostId"
      @closed="updateComment = false"
      @editComment="
        updateComment = false;
        this.$emit('refresh');
      "
    />
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useUserStore } from "../stores/user";
import CommentEdit from "./CommentEdit.vue";
import CommentDelete from "./CommentDelete.vue";
export default {
  name: "CommentData",
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
      commentDeletepop: false,
      updateComment: false,
    };
  },
  computed: {
    ...mapStores(useUserStore),
    commentOwner() {
      return this.comment.user.id === this.userStore.user.id;
    },
  },
  components: {
    CommentEdit,
    CommentDelete,
  },
};
</script>
