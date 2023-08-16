<template>
  <div v-if="isLoading">
    <Loading />
  </div>
  <div v-else class="profile">
    <div class="profile__user">
      <h1 class="profile__user--firstletter">{{ firstletter }}</h1>
      <h1 class="profile__user--name">{{ user.name }}</h1>
      <h2 class="profile__user--email">{{ user.email }}</h2>
    </div>
    <div class="profile__blogs">
      <template v-for="blog in blogs" :key="blog.id">
        <div>
          <Blog :blog="blog" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useUserStore } from "../stores/user";
import api from "@/axios/api";
import Loading from "../components/Loading.vue";
import Blog from "../components/Blog.vue";

export default {
  name: "Profile",
  data() {
    return {
      user: {},
      isLoading: true,
      blogs: [],
    };
  },
  components: {
    Loading,
    Blog,
  },
  computed: {
    ...mapStores(useUserStore),
    firstletter() {
      return this.user.name.charAt(0);
    },
  },
  methods: {
    async getData(id) {
      const config = {
        headers: {
          Authorization: `Bearer ${this.userStore.token}`,
        },
      };
      try {
        const response = await api.get(`/users/${id}`, config);
        this.user = response.data;
        console.log(this.user);
      } catch (error) {
        console.log(error);
      }

      // get blogs made by user blog/user/:id
      try {
        const response = await api.get(`/blog/user/${id}`, config);
        this.blogs = response.data;
        console.log(this.blogs);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },
  created() {
    const id = this.$route.params.id; // Get the id parameter from the route
    this.getData(id);
  },
};
</script>
