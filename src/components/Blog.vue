<template>
  <section>
    <div class="blog">
      <h1 class="blog__header">{{ blog.title }}</h1>
      <p class="paragraph">{{ blog.content }}</p>
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
  methods: {},
};
</script>

<style lang="scss" scoped></style>
