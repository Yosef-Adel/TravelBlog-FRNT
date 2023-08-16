<template>
  <section>
    <div class="blog">
      <div class="__data">
        <!-- //TODO add user image -->
        <h1
          class="heading-tertiary"
          @click="goToprofile"
          style="cursor: pointer"
        >
          {{ blog.user.name }}
        </h1>
      </div>
      <h1 class="blog__header">{{ blog.title }}</h1>
      <p class="paragraph">{{ blog.content }}</p>
      <router-link :to="link" class="btn-text">Read More</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "Blog",
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    link() {
      return `/blog/${this.blog.id}`;
    },
  },
  methods: {
    goToprofile() {
      this.$router.push(`/profile/${this.blog.user.id}`);
    },
  },
};
</script>
