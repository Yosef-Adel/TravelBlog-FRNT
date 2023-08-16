<template>
  <template v-if="isLoading">
    <Loading />
  </template>
  <div v-else class="section-book">
    <template v-for="blog in blogs" :key="blog.id">
      <div>
        <Blog :blog="blog" />
      </div>
    </template>
  </div>
</template>

<script>
import Loading from "../components/Loading.vue";
import { mapStores } from "pinia";
import { useUserStore } from "../stores/user";
import api from "@/axios/api";
import Blog from "../components/Blog.vue";
export default {
  name: "Blogs",
  data() {
    return {
      blogs: [],
      isLoading: true,
    };
  },
  computed: {
    ...mapStores(useUserStore),
  },
  components: {
    Loading,
    Blog,
  },
  methods: {
    async getBlogs() {
      const config = {
        headers: {
          Authorization: `Bearer ${this.userStore.token}`,
        },
      };
      try {
        const response = await api.get("/blog", config);
        this.blogs = response.data;
        console.log(response);
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
    this.getBlogs();
  },
};
</script>

<style lang="scss" scoped></style>
