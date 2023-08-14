<template>
  <template v-if="isLoading">
    <Loading />
  </template>
  <template v-else>
    <Form />
  </template>
</template>

<script>
import Form from "../components/Form.vue";
import Loading from "../components/Loading.vue";

export default {
  name: "CreateBlog",
  data() {
    return {
      isLoading: true,
    };
  },
  components: {
    Form,
    Loading,
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },
};
</script>

<style lang="scss" scoped></style>
