<template>
  <div class="post-body">
    <h1>Post Title : {{ title }}</h1>
    <p>Post Description : {{ body }}</p>

    <div class="comment">
      <h1>Comment in this Post</h1>
      <div class="comment-list" v-for="comm of comment" :key="comm.id">
        <h4>
          Name : <span>{{ comm.name }}</span>
        </h4>
        <h4>
          Email :<span>{{ comm.email }}</span>
        </h4>
        <p>
          Massage : <span>{{ comm.body }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "singlePost",
  data() {
    return {
      posts: this.$store.state.posts,
      id: this.$route.params.id,
      title: "",
      body: "",
      comments: this.$store.state.comments,
      comment: [],
    };
  },
  mounted() {
    for (const post of this.posts) {
      if (post.id == this.id) {
        this.title = post.title;
        this.body = post.body;
      }
    }

    this.comment = this.comments.filter((comm) => comm.postId == this.id);
    console.log(this.comment);
    // this.$store.dispatch("createPost");
    // this.posts.filter((this.id) => {
    //   if (this.posts.id == this.id) {
    //     this.title = this.posts.title;
    //     this.body = this.posts.body;
    //     console.log(this.posts.title);
    //   }
    // });
  },
};
</script>

<style>
.post-body {
  color: white;
  font-size: 24px;
}
.comment {
  margin: 30px 0 0 0;
}
.comment-list {
  margin: 30px 50px;
}
.comment-list h4 {
  margin: 10px 0;
}
.comment-list p {
  margin: 10px 0;
  line-height: 2.5rem;
}
.comment-list span {
  margin: 0 50px;
}
</style>
