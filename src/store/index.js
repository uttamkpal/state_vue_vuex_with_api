import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    counter: 0,
    posts: [],
    comments: [],
    author: [
      {
        id: 1,
        name: "Uttam Kumar",
      },
      {
        id: 2,
        name: "Roton Kumar",
      },
    ],
  },
  mutations: {
    increment(state, num) {
      state.counter += num;
    },
    decrece(state, num) {
      state.counter -= num;
    },
    createPost(state, pos) {
      state.posts = pos;
    },
    createComment(state, pos) {
      state.comments = pos;
    },
  },
  actions: {
    increment({ commit }) {
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new"
      ).then((Response) => {
        commit("increment", Response.data);
      });
    },
    decrece({ commit }) {
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new"
      ).then((Response) => {
        commit("decrece", Response.data);
      });
    },
    createPost({ commit }) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          commit("createPost", response.data);
        });
      axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
          commit("createComment", response.data);
        });
    },
  },
});
