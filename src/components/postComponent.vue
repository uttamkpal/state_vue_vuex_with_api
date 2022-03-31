<template>
  <h2>Posts Page</h2>
  <div class="post" v-for="post of $store.state.posts" :key="post.id">
    <router-link :to="{ name: 'singlePost', params: { id: post.id } }">
      <h3>{{ post.id }}. {{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "PostComponent",

  mounted() {
    this.$store.dispatch("createPost");
  },
};
</script>

<style scoped>
.post {
  margin: 10px 5px;
  padding: 5px 10px;
}
.post h3 {
  font-size: 24px;
  text-decoration: underline;
  text-decoration-color: aliceblue;
  text-decoration-thickness: 1px;
  padding-bottom: 7px;
}
.post p {
  font-size: 14px;
}
</style>
