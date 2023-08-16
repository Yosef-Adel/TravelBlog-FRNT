<template>
  <div>
    <Loading v-if="isLoading" />
    <div v-else class="blog-page">
      <div class="blog-page__blog">
        <div class="blog-page__data">
          <!-- //TODO add user image -->
          <h1 class="heading-tertiary">{{ blog.user.name }}</h1>
        </div>
        <div>
          <h1 class="blog__header">{{ blog.title }}</h1>
          <p class="paragraph">{{ blog.content }}</p>
        </div>
        <div v-if="blogOwner" class="blog__controller">
          <a href="#popupd" @click="deletePopUp = true" class="btn btn--red"
            >delete</a
          >
          <a href="#popup" @click="open = true" class="btn btn--blue">edit</a>
        </div>
      </div>

      <!-- comment section if you have time seprate it  -->
      <div class="comment">
        <div class="comment__header">
          <h1 class="heading-secondary">Comments</h1>
        </div>
        <div class="comment__form">
          <form @submit.prevent="createCommemt" class="form">
            <div class="form__group">
              <input
                type="text"
                class="form__input"
                placeholder="Comment"
                id="text"
                v-model="text"
                required
              />
              <label for="comment" class="form__label">Comment</label>
            </div>
            <div class="form__btn">
              <button class="btn btn--green" type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div class="comment__container">
          <div v-for="comment in blog.comments" :key="comment.id">
            <Comment
              :comment="comment"
              :PostId="blog.id"
              :key="comment.id"
              @refresh="getBlog(this.blog.id)"
            />
          </div>
        </div>
      </div>
    </div>

    <PopupForm
      v-if="open"
      :blog="blog"
      @onUpdate="onUpdate"
      @closed="open = false"
    />
    <DeletePopUp
      v-if="deletePopUp"
      :id="blog.id"
      @closed="deletePopUp = false"
    />
  </div>
</template>

<script>
import Loading from "../components/Loading.vue";
import PopupForm from "../components/PopupForm.vue";
import Comment from "../components/Comment.vue";
import DeletePopUp from "../components/DeletePopUp.vue";
import { mapStores } from "pinia";
import { useUserStore } from "../stores/user";
import api from "@/axios/api";

export default {
  name: "BlogPage",
  data() {
    return {
      blog: {},
      isLoading: true,
      text: "",
      open: false,
      deletePopUp: false,
    };
  },
  computed: {
    ...mapStores(useUserStore),
    blogOwner() {
      return this.blog.user.id === this.userStore.user.id;
    },
  },
  components: {
    Loading,
    PopupForm,
    DeletePopUp,
    Comment,
  },
  methods: {
    onUpdate() {
      this.getBlog(this.blog.id);
      this.open = false;
    },
    async getBlog(id) {
      const config = {
        headers: {
          Authorization: `Bearer ${this.userStore.token}`,
        },
      };
      try {
        const response = await api.get(`/blog/${id}`, config); // Use the correct route pattern here
        this.blog = response.data;
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },

    async createCommemt() {
      const config = {
        headers: {
          Authorization: `Bearer ${this.userStore.token}`,
        },
      };
      const data = {
        text: this.text,
        PostId: this.blog.id,
      };
      try {
        const response = await api.post("/comment", data, config);
        console.log(response);
        if (response.status === 200) {
          console.log(response.data);
          this.blog.comments.push(response.data);
          this.text = "";
        }
      } catch (error) {
        console.log(error);
      }
    },
  },

  async created() {
    const id = this.$route.params.id; // Get the id parameter from the route
    await this.getBlog(id);
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },
};
</script>
